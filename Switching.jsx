import React, { createContext, useContext, useState } from 'react'
import {Link, useSearchParams} from 'react-router-dom'
import '../index.css'

import '../index.css'
// import Search from './Search'
import logo from '../assets/logo.png'
import searchicon from '../assets/searchicon.png'
import { MapIn } from './MapIn'
import { countries } from '../App'



const Switching = () => {
  const[sports,setSports]=useState(true);
  const[general,setGeneral]=useState(false);
  const[entertainment,setEntertainment]=useState(false);
  const[technology,settechnology]=useState(false);
  const {selectedCountry,setselectedCountry}=useContext(countries)
 
const[stage,setStage]=useState(false);
  const change=(e)=>{
    if(e.target.name=="sports"){
      setEntertainment(false)
      setGeneral(false)
      setSports(true)
      settechnology(false)
    }
    if(e.target.name=="general"){
      setEntertainment(false)
      setGeneral(true)
      setSports(false)
      settechnology(false)
    }
    if(e.target.name=="entertainment"){
      setEntertainment(true)
      setGeneral(false)
      setSports(false)
      settechnology(false)
    }
    if(e.target.name=="technology"){
      setEntertainment(false)
      setGeneral(false)
      setSports(false)
      settechnology(true)
    }

  }
  // const changeNews=()=>{
  //   setEntertainment(false)
  //     setGeneral(false)
  //     setSports(false)
  //     settechnology(false)
  //     return(
  //       <Stages/>
  //       );

  // }
  // const handleKeydown=(e)=>{
  //  if(e.key==="Enter"){
  //   setEntertainment(false)
  //     setGeneral(false)
  //     setSports(false)
  //     settechnology(false)
  //    return(
  //      <Stages/>
  //    );
  //  }

  // }
  const handleChange=(e)=>{
    setselectedCategory(e.target.value)
    
  }
  return (
    <>
     
    <div>
        <div className='top'>
      <div className='logo'>
        <img src={logo} width='100px' height ='100px'></img>
      </div>
      <div className='searchbar'>
        { <input className="inp" type='text' /*onChange={handleChange} onKeyDown={handleKeydown}*/ placeholder='  Search news.....'></input> }
        <div className='search'>
        {<img src={searchicon} width='25px'/*  onClick={changeNews}*/ height ='25px' id="search"></img> }
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
        <li>
            <Link name ="technology" className={technology?"tag on":"tag of"} onClick={change} to={"/technology"}>technology</Link>
        </li>
       
      </ul>
      <div>
      <countries.Provider value={{selectedCountry,setselectedCountry}}>
          <MapIn/>
          </countries.Provider>
        
      </div>
      </div>
      
      </div>
    
    </>
  )
}

export default Switching
