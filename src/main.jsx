import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TiendaApp from './TiendaFake/TiendaApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TiendaApp />
  </StrictMode>,
)
