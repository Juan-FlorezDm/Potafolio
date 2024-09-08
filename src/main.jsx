import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Informacion from './Informacion'
import Estudios from './Estudios'
import Grid from './Grid'
import './Estudios.css'
import './main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='D'>
      <div className='I'><Informacion /></div>
      <div className='E'><Estudios /></div>
      <div className='P'><Grid /></div>
    </div>

    
  </StrictMode>,
)
