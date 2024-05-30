
import './index.css'
import React from 'react'
import logo from './assets/logo.png'
import searchicon from './assets/searchicon.png'
import Switching from './components/Switching'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Sprt from './components/Sprt'
import Entertainment from './components/Entertainment'
import General from "./components/General"

function App() {
  return (
    <>
    
      <div className='dash'>
      <BrowserRouter>
      <Switching/>
       <div className='containers'>
        <Routes>
          <Route path="/sports" element={<Sprt/>}></Route>
        </Routes>
        <Routes>
          <Route path="/general" element={<General/>}></Route>
        </Routes>
        <Routes>
          <Route path="/Entertainment" element={<Entertainment/>}></Route>
        </Routes>
       </div>
      </BrowserRouter>
      </div> 
      
      
      
    
    </>
  )
}

export default App
