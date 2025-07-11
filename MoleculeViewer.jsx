import React, { Suspense, useRef, useState } from 'react'
import * as THREE from 'three'
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, Environment } from '@react-three/drei'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

function TransmissionMolecule() {
  const obj = useLoader(OBJLoader, '/btk.obj')
  
  const config = {
    meshPhysicalMaterial: false,
    transmissionSampler: false,
    backside: false,
    samples: 1,
    resolution: 512,
    transmission: 0.26,
    roughness: 0.86,
    thickness: 0.3,
    ior: 1.8,
    chromaticAberration: 0.0,
    anisotropy: 0.0,
    distortion: 0.0,
    distortionScale: 0.15,
    temporalDistortion: 0.5,
    clearcoat: 0.08,
    clearcoatRoughness: 0.53,
    attenuationDistance: 0.5,
    attenuationColor: '#ffffff',
    color: '#77aa76',
    bg: '#69faff'
  }
  
  return (
    <>
      {obj.children.map((child, index) => (
        <mesh key={index} geometry={child.geometry}>
          <MeshTransmissionMaterial
            background={new THREE.Color(config.bg)}
            {...config}
          />
        </mesh>
      ))}
    </>
  )
}

function StandardMolecule() {
  const obj = useLoader(OBJLoader, '/btk_cartoon.obj')
  
  return (
    <group rotation={[0, 0, 0]}>
      {obj.children.map((child, index) => (
        <mesh key={`cartoon-${index}`} geometry={child.geometry}>
          <meshStandardMaterial 
            color="#4A90E2"
            roughness={0.2}
            metalness={0.05}
            clearcoat={0.3}
            clearcoatRoughness={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

function RotatableMolecule() {
  const meshRef = useRef()
  const [isDragging, setIsDragging] = useState(false)
  const [previousMousePosition, setPreviousMousePosition] = useState({ x: 0, y: 0 })
  const [targetDragOffset, setTargetDragOffset] = useState({ x: 0, y: 0 })
  const [currentDragOffset, setCurrentDragOffset] = useState({ x: 0, y: 0 })
  const { size, viewport } = useThree()

  // Sinusoidal rocking animation combined with smooth drag offset
  useFrame((state, delta) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime()
      // Base rocking motion - sinusoidal left to right and up down
      const rockingAngleY = Math.sin(time * 0.4) * 0.3       // Left-right rocking
      const rockingAngleX = Math.sin(time * 0.3 + 1.2) * 0.2 // Up-down rocking (different frequency and phase)
      
      // Smooth interpolation towards target drag offset
      const lerpFactor = isDragging ? 0.1 : 0.05
      setCurrentDragOffset(prev => ({
        x: prev.x + (targetDragOffset.x - prev.x) * lerpFactor,
        y: prev.y + (targetDragOffset.y - prev.y) * lerpFactor
      }))
      
      // Combine rocking with smooth drag offset (reduced multiplier for less range)
      meshRef.current.rotation.y = rockingAngleY + currentDragOffset.x * 0.15
      meshRef.current.rotation.x = rockingAngleX + currentDragOffset.y * 0.15
      
      // Dampen target drag offset over time when not dragging
      if (!isDragging) {
        setTargetDragOffset(prev => ({
          x: prev.x * 0.95,
          y: prev.y * 0.95
        }))
      }
    }
  })

  const handlePointerDown = (event) => {
    setIsDragging(true)
    setPreviousMousePosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  const handlePointerMove = (event) => {
    if (!isDragging || !meshRef.current) return

    const deltaX = event.clientX - previousMousePosition.x
    const deltaY = event.clientY - previousMousePosition.y

    // Accumulate drag offset with increased sensitivity and smoothing
    setTargetDragOffset(prev => ({
      x: prev.x + deltaX * 0.05,
      y: prev.y + deltaY * 0.05
    }))

    setPreviousMousePosition({
      x: event.clientX,
      y: event.clientY
    })
  }

  const handlePointerUp = () => {
    setIsDragging(false)
  }

  return (
    <group
      ref={meshRef}
      scale={[0.08, 0.08, 0.08]}
      position={[0, 0, 0]}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      style={{ cursor: 'pointer' }}
    >
      <TransmissionMolecule />
      <StandardMolecule />
    </group>
  )
}

export default function MoleculeDemo() {
  const containerStyle = {
    width: '100%',
    height: '800px',
    overflow: 'hidden',
    borderRadius: '8px'
  }

  return (
    <div style={containerStyle}>
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 15], fov: 35 }}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Suspense fallback={null}>
          <RotatableMolecule />
        </Suspense>
        
        <Environment preset="city" background={false} />
      </Canvas>
    </div>
  )
} 