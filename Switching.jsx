import React, { useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import '../index.css'

import '../index.css'

import logo from '../assets/logo.png'
import searchicon from '../assets/searchicon.png'


const Switching = () => {
  const[sports,setSports]=useState(true);
  const[general,setGeneral]=useState(false);
  const[entertainment,setEntertainment]=useState(false);

  const change=(e)=>{
    if(e.target.name=="sports"){
      setEntertainment(false)
      setGeneral(false)
      setSports(true)
    }
    if(e.target.name=="general"){
      setEntertainment(false)
      setGeneral(true)
      setSports(false)
    }
    if(e.target.name=="entertainment"){
      setEntertainment(true)
      setGeneral(false)
      setSports(false)
    }

  }
  return (
    <>
    <div>
        <div className='top'>
      <div className='logo'>
        <img src={logo} width='100px' height ='100px'></img>
      </div>
      <div className='searchbar'>
        <input className="inp" type='text' placeholder='  Search news.....'></input>
        <div className='search'>
        <img src={searchicon} width='25px' height ='25px' id="search"></img>
        </div>
      </div>
      
      <ul >
        <li>
            <Link name ="sports" className={sports?"tag on":"tag of"} onClick={change} to={"/sports"}>sports</Link>
        </li>
        <li>
            <Link name ="general" className={general?"tag on":"tag of"} onClick={change} to={"/general"}>general</Link>
        </li>
        <li>
            <Link name ="entertainment" className={entertainment?"tag on":"tag of"} onClick={change} to={"/Entertainment"}>entertainment</Link>
        </li>
      </ul>
      </div>
      </div>
    
    </>
  )
}

export default Switching
