import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Main from './day09/Main'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)