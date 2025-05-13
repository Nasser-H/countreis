import React from 'react'
import Home from './Components/Home/Home'
import CountriesContextProvider from './context/CountriesContext.jsx';



export default function App() {
  return <>
      <CountriesContextProvider>
        <Home />
    </CountriesContextProvider>
  </>
}
