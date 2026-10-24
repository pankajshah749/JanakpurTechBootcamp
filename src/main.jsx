import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Fade out the logo loader once the page has loaded (min 900ms so the animation is seen).
const loaderStart = performance.now()
window.addEventListener('load', () => {
  const loader = document.getElementById('site-loader')
  if (!loader) return
  setTimeout(() => {
    loader.classList.add('is-done')
    setTimeout(() => loader.remove(), 600)
  }, Math.max(0, 900 - (performance.now() - loaderStart)))
})
