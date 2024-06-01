// App.jsx
import './index.css'
import React, { createContext, useContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import EntertainmentNews from './components/Entertainment'
import Generalnews from "./components/General"
import SportsNews from './components/Sprt'
import TechnologyNews from './components/Technology'
import Search from './components/Search' // Import the Search component
import Switching from './components/Switching'

export const countries = createContext()

function App() {
  const [selectedCountry, setselectedCountry] = useState("india")
  return (
    <>
      <div className='dash'>
        <BrowserRouter>
          <countries.Provider value={{ selectedCountry, setselectedCountry }}>
            <Switching />
          </countries.Provider>
          <div className='containers'>
            <Routes>
            <Route path="/" element={<countries.Provider value={{ selectedCountry, setselectedCountry }}><Search /></countries.Provider>} />
            <Route path="/search" element={<countries.Provider value={{ selectedCountry, setselectedCountry }}><Search /></countries.Provider>} />
              <Route path="/sports" element={<countries.Provider value={{ selectedCountry, setselectedCountry }}><SportsNews /></countries.Provider>} />
              <Route path="/general" element={<countries.Provider value={{ selectedCountry, setselectedCountry }}><Generalnews /></countries.Provider>} />
              <Route path="/entertainment" element={<countries.Provider value={{ selectedCountry, setselectedCountry }}><EntertainmentNews /></countries.Provider>} />
              <Route path="/technology" element={<countries.Provider value={{ selectedCountry, setselectedCountry }}><TechnologyNews /></countries.Provider>} />
             
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
