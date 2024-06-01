import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { OptionProvider } from './contexts/OptionContext.jsx'
import { DataProvider } from './contexts/DataContext.jsx'
import { CourseProvider } from './contexts/CourseContext.jsx'
import { DarkModeProvider } from './contexts/DarkModeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <OptionProvider>
      <DataProvider>
        <CourseProvider>
          <App />
        </CourseProvider>
      </DataProvider>
    </OptionProvider>
  </DarkModeProvider>
)
