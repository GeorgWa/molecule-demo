import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const container = document.getElementById('canvas-container')
const root = createRoot(container)

// Hide loading element
document.getElementById('loading').style.display = 'none'

root.render(<App />)