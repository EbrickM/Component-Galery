import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextFather } from './components/ContextFather.jsx'

createRoot(document.getElementById('root')).render(
  <ContextFather>
    <StrictMode>
      <App />
    </StrictMode>
  </ContextFather>
)