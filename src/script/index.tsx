import React from 'react'
import ReactDOM from 'react-dom/client'
import Flame from './Flame.tsx'
import '../asset/css/index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Flame />
  </React.StrictMode>,
)
