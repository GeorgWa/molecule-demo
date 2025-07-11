import React, { useState, useEffect } from 'react'
import MoleculeDemo from './MoleculeViewer'

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    // Ensure document can scroll on mobile
    if (isMobile) {
      document.body.style.overflow = 'auto'
      document.documentElement.style.overflow = 'auto'
    } else {
      document.body.style.overflow = 'hidden'
      document.documentElement.style.overflow = 'hidden'
    }
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [isMobile])

  const styles = {
    container: {
      minHeight: '100vh',
      height: isMobile ? 'auto' : '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#ffffff',
      backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0',
      overflow: isMobile ? 'auto' : 'hidden',
      position: 'relative'
    },
    fadeOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: isMobile 
        ? 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.4) 50%, transparent 100%)'
        : 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.1) 50%, transparent 65%)',
      pointerEvents: 'none',
      zIndex: 1
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: isMobile ? '15px 20px' : '20px 60px',
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      position: 'relative',
      zIndex: 20,
      flexWrap: 'wrap',
      gap: isMobile ? '15px' : '0'
    },
    logo: {
      fontSize: isMobile ? '20px' : '24px',
      fontWeight: '700',
      color: '#1f2937',
      letterSpacing: '-0.5px'
    },
    nav: {
      display: 'flex',
      gap: isMobile ? '20px' : '40px',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '500',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    contactButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: isMobile ? '10px 20px' : '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: isMobile ? '14px' : '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
    hero: {
      position: 'relative',
      height: isMobile ? 'auto' : 'calc(100vh - 80px)',
      minHeight: isMobile ? 'calc(100vh - 60px)' : 'auto',
      display: 'flex',
      alignItems: isMobile ? 'flex-start' : 'center',
      overflow: 'visible',
      paddingTop: isMobile ? '40px' : '0',
      paddingBottom: isMobile ? '60px' : '0'
    },
    content: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: isMobile ? '0 20px' : '0 60px',
      alignItems: 'center',
      gap: isMobile ? '40px' : '100px'
    },
    textSection: {
      flex: 1,
      zIndex: 10,
      textAlign: isMobile ? 'center' : 'left',
      order: isMobile ? 1 : 1
    },
    headline: {
      fontSize: isMobile ? '48px' : '72px',
      fontWeight: '800',
      lineHeight: '1.1',
      color: '#1f2937',
      marginBottom: '24px',
      letterSpacing: '-2px'
    },
    smartest: {
      color: '#10b981'
    },
    subtext: {
      fontSize: isMobile ? '18px' : '20px',
      color: '#6b7280',
      lineHeight: '1.6',
      maxWidth: isMobile ? '100%' : '500px',
      marginBottom: '40px',
      margin: isMobile ? '0 auto 40px auto' : '0 0 40px 0'
    },
    ctaButton: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: isMobile ? '14px 28px' : '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginRight: '16px',
      marginBottom: isMobile ? '10px' : '0'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#1f2937',
      padding: isMobile ? '14px 28px' : '16px 32px',
      borderRadius: '12px',
      border: '2px solid #e5e7eb',
      fontSize: isMobile ? '16px' : '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    moleculeSection: {
      flex: 1,
      height: isMobile ? '400px' : '600px',
      width: isMobile ? '100%' : 'auto',
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      order: isMobile ? 2 : 2
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      gap: isMobile ? '10px' : '0'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.fadeOverlay}></div>
      <header style={styles.header}>
        <div style={styles.logo}>
          Molecule Demo
        </div>
        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Features</a>
          <a href="#" style={styles.navLink}>Documentation</a>
          <a href="#" style={styles.navLink}>Examples</a>
          <a href="#" style={styles.navLink}>Source</a>
          <button style={styles.contactButton}>
            Try Demo
          </button>
        </nav>
      </header>

      <section style={styles.hero}>
        <div style={styles.content}>
          <div style={styles.textSection}>
            <h1 style={styles.headline}>
              Interactive <span style={styles.smartest}>3D</span><br />
              molecule<br />
              visualization
            </h1>
            <p style={styles.subtext}>
              Experience cutting-edge molecular visualization powered by Three.js and React Three Fiber. 
              Featuring interactive controls, realistic materials, and smooth animations.
            </p>
            <div style={styles.buttonContainer}>
              <button style={styles.ctaButton}>
                Explore Demo
              </button>
              <button style={styles.secondaryButton}>
                View Code
              </button>
            </div>
          </div>
          <div style={styles.moleculeSection}>
            <MoleculeDemo />
          </div>
        </div>
      </section>
    </div>
  )
}