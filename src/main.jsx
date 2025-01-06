import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import fruits from './Fruits'
//import App from './App'
import Apps from './Apps'
//import Apps from './Apps'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Slambook/> */}
    {/* <Count/> */}
     <Apps/> 
     {/* <fruits/> */}
  </StrictMode>,
)
