import React, { createContext, useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
import logo from '../assets/logo.png'
import searchicon from '../assets/searchicon.png'
import { countries } from '../App'
import { MapIn } from './MapIn'

const Switching = () => {
  const [sports, setSports] = useState(false)
  const [general, setGeneral] = useState(false)
  const [entertainment, setEntertainment] = useState(false)
  const [technology, settechnology] = useState(false)
  const { selectedCountry, setselectedCountry } = useContext(countries)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const change = (e) => {
    const category = e.target.name
    setQuery('')
    if (category === 'sports') {
      setEntertainment(false)
      setGeneral(false)
      setSports(true)
      settechnology(false)
      navigate(`/sports`)
    }
    if (category === 'general') {
      setEntertainment(false)
      setGeneral(true)
      setSports(false)
      settechnology(false)
      navigate(`/general`)
    }
    if (category === 'entertainment') {
      setEntertainment(true)
      setGeneral(false)
      setSports(false)
      settechnology(false)
      navigate(`/entertainment`)
    }
    if (category === 'technology') {
      setEntertainment(false)
      setGeneral(false)
      setSports(false)
      settechnology(true)
      navigate(`/technology`)
    }
  }

  const handleKeydown = (e) => {
    if (e.key === "Enter") {
      setEntertainment(false)
      setGeneral(false)
      setSports(false)
      settechnology(false)
      navigate(`/search?query=${query}`)
    }
  }

  const handleSearchClick = () => {
    setEntertainment(false)
    setGeneral(false)
    setSports(false)
    settechnology(false)
    navigate(`/search?query=${query}`)
  }

  const handleChange = (e) => {

    setQuery(e.target.value)
  }

  return (
    <>
      <div>
        <div className='top'>
          <div className='logo'>
            <img src={logo} width='100px' height='100px' alt="Logo"></img>
          </div>
          <div className='searchbar'>
            <input
              className="inp"
              type='text'
              onChange={handleChange}
              onKeyDown={handleKeydown}
              placeholder='  Search news.....'
              value={query}
            />
            <div className='search'>
              <img src={searchicon} width='25px' onClick={handleSearchClick} height='25px' id="search" alt="Search Icon" />
            </div>
          </div>
          <ul>
            <li>
              <Link name="sports" className={sports ? "tag on" : "tag of"} onClick={change} to={"/sports"}>sports</Link>
            </li>
            <li>
              <Link name="general" className={general ? "tag on" : "tag of"} onClick={change} to={"/general"}>general</Link>
            </li>
            <li>
              <Link name="entertainment" className={entertainment ? "tag on" : "tag of"} onClick={change} to={"/entertainment"}>entertainment</Link>
            </li>
            <li>
              <Link name="technology" className={technology ? "tag on" : "tag of"} onClick={change} to={"/technology"}>technology</Link>
            </li>
          </ul>
          <countries.Provider value={{ selectedCountry, setselectedCountry }}>
            <MapIn />
          </countries.Provider>
        </div>
      </div>
    </>
  )
}

export default Switching
