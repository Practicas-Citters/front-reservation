import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Login from '../src/pages/Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
