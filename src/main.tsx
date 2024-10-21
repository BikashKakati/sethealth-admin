import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const mainRoot = createRoot(document.getElementById('root')!)

mainRoot.render(
    <StrictMode>
      <App />
    </StrictMode>,
)
