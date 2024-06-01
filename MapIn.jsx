import india from '../assets/countryimage/india.jpg';
import italy from '../assets/countryimage/italy.jpg';
import japan from '../assets/countryimage/japan.jpg';
import germany from '../assets/countryimage/germany.jpg';
import argentia from '../assets/countryimage/argentia.jpg';
import australia from '../assets/countryimage/australia.jpg';
import brazil from '../assets/countryimage/brazil.jpg';
import canada from '../assets/countryimage/canada.jpg';
import mexico from '../assets/countryimage/mexico.jpg';
import netherlands from '../assets/countryimage/netherlands.jpg';
import portugal from '../assets/countryimage/portugal.jpg';
import russia from '../assets/countryimage/russia.jpg';
import spain from '../assets/countryimage/spain.jpg';
import france from '../assets/countryimage/france.jpg';
import china from '../assets/countryimage/china.jpg';
import './country.css'
import { Fragment, createContext, useContext, useEffect, useState } from 'react';
import { countries } from '../App';

export const MapIn = () => {
    

  const{selectedCountry,setselectedCountry}=useContext(countries)
  
  const handlechange =(event) =>{
    setselectedCountry(event.target.value);
  }
    return (
    <Fragment>
        <div className="container">
        <img  width ='100px' height='100px' src={selectedCountry==='india' ? india :selectedCountry==='argentia'? argentia :selectedCountry==='austria'?austria:selectedCountry==='brazil'?brazil:selectedCountry==='canada'?canada:selectedCountry==='china'?china:selectedCountry==='france'?france:selectedCountry==='mexico'?mexico:selectedCountry==='netherlands'?netherlands:selectedCountry==='portugal'?portugal:selectedCountry==='russia'?russia:selectedCountry==='spain'?spain:selectedCountry === 'italy' ? italy : selectedCountry === 'japan' ? japan : germany} alt="Selected Country" /></div>
        <div className="input-container"></div>
    <select className="country" value={selectedCountry} onChange={handlechange}>
        <option>argentia</option>
        <option>australia</option>
        <option>brazil</option>
        <option>canada</option>
        <option>china</option>
        <option>france</option>
        <option>germany</option>
        <option >india</option>
        <option>italy</option>
        <option>japan</option>
        <option>mexico</option>
        <option>netherlands</option>
        <option>portugal</option>
        <option>russia</option>
        <option>spain</option>
        </select>
        
        </Fragment>
       
  )
}