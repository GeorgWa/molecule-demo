import React from 'react'
import MoleculeDemo from './MoleculeViewer'

export default function App() {
  const styles = {
    container: {
      minHeight: '100vh',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#ffffff',
      backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0',
      overflow: 'hidden',
      position: 'relative'
    },
    fadeOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 33%, rgba(255,255,255,0.1) 50%, transparent 65%)',
      pointerEvents: 'none',
      zIndex: 1
    },
          header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 60px',
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'relative',
        zIndex: 20
      },
    logo: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#1f2937',
      letterSpacing: '-0.5px'
    },
    nav: {
      display: 'flex',
      gap: '40px',
      alignItems: 'center'
    },
    navLink: {
      color: '#6b7280',
      textDecoration: 'none',
      fontSize: '16px',
      fontWeight: '500',
      transition: 'color 0.2s ease',
      cursor: 'pointer'
    },
    contactButton: {
      backgroundColor: '#10b981',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '8px',
      border: 'none',
      fontSize: '16px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease'
    },
         hero: {
       position: 'relative',
       height: 'calc(100vh - 80px)',
       display: 'flex',
       alignItems: 'center',
       overflow: 'hidden'
     },
    content: {
      display: 'flex',
      width: '100%',
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 60px',
      alignItems: 'center',
      gap: '100px'
    },
         textSection: {
       flex: 1,
       zIndex: 10
     },
    headline: {
      fontSize: '72px',
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
      fontSize: '20px',
      color: '#6b7280',
      lineHeight: '1.6',
      maxWidth: '500px',
      marginBottom: '40px'
    },
    ctaButton: {
      backgroundColor: '#1f2937',
      color: 'white',
      padding: '16px 32px',
      borderRadius: '12px',
      border: 'none',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      marginRight: '16px'
    },
    secondaryButton: {
      backgroundColor: 'transparent',
      color: '#1f2937',
      padding: '16px 32px',
      borderRadius: '12px',
      border: '2px solid #e5e7eb',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
         moleculeSection: {
       flex: 1,
       height: '600px',
       position: 'relative',
       zIndex: 10,
       display: 'flex',
       alignItems: 'center',
       justifyContent: 'center'
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
            <div>
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