import React from 'react'
import { render } from 'react-dom'

function App() {
  return (
    <h1>African Marketplace</h1>
  )
}


render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
)
