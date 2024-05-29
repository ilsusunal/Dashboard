import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OptionProvider } from './contexts/OptionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <OptionProvider>
    <App />
  </OptionProvider>
)
