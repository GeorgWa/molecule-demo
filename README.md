# Molecule Viewer

A React Three.js application for viewing molecular structures with transmission materials and interactive controls.

## Getting Started

```bash
npm install
npm run dev
```

## Converting OBJ to GLB

To add new molecular models, convert OBJ files to GLB format for optimal performance:

### 1. Install the converter
```bash
npm install -g obj2gltf
```

### 2. Convert your OBJ file
```bash
obj2gltf -i your-molecule.obj -o public/your-molecule.glb --binary
```

The GLB format provides:
- Smaller file sizes (typically 60-70% compression)
- Faster loading times
- Single binary file containing geometry, materials, and textures

## Adding New Molecules

### 1. Place GLB files in the `public/` directory
```
public/
├── surface.glb      # Surface representation
├── cartoon.glb     # Cartoon representation
└── your-new-molecule.glb
```

### 2. Update the MoleculeViewer component

**For transmission materials (glass-like effect):**
```jsx
function TransmissionMolecule() {
  const gltf = useLoader(GLTFLoader, './your-molecule.glb')
  // ... rest of component
}
```

**For standard materials (solid appearance):**
```jsx
function StandardMolecule() {
  const gltf = useLoader(GLTFLoader, './your-molecule.glb')
  // ... rest of component
}
```

### 3. Customize appearance
- Adjust `transmission`, `roughness`, `thickness` in Leva controls
- Modify colors in the `color` and `bg` properties
- Change material properties like `metalness` and `clearcoat`

## File Structure

- `MoleculeViewer.jsx` - Main viewer component with dual rendering modes
- `public/` - Static assets including GLB molecular models
- Interactive controls powered by Leva for real-time shader adjustments 