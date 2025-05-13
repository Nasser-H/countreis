import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CountriesContextProvider from './context/CountriesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountriesContextProvider>
      <App />
    </CountriesContextProvider>
  </StrictMode>,
)
