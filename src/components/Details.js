import React, { useEffect, useState } from 'react'
import { apiURL } from '../util/countryApi'
import { Link } from 'react-router-dom'
import Home from './Home'
import Country from './Country'

function Details() {

   const [countries, setCountries] = useState([])
   const [ isLoading, setIsLoading] = useState(true)
   const [foundFilter, setFoundFilter] = useState(true)
   const [filtered, setFiltered] = useState([])
   const [searchInput, setSearchInput] = useState('')
    const fetchCountryData = async () => {
      try {
        const res = await fetch(`${apiURL}/all`)
        const data = await res.json()
        console.log(data)

        setCountries(data)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    
   useEffect(() => {
    fetchCountryData()
  }, [])

  //SEARCH BUTTON
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);
    if(searchInput) {
      setFiltered(
        countries.filter((country) => 
        Object.values(country)
        .join('')
        .toLowerCase()
        .includes(searchValue.toLowerCase()),
        ),
      );
      setFoundFilter(true);
      if (filtered.length <= 0) {
        setFoundFilter(false)
      }
    } else {
      setFiltered(countries)
    }
  }
  


  return (
    
  <div>
      <Home
      searchCountries= {searchCountries}
      searchInput={searchInput}
      setCountries={setCountries}
      /> 
  
  <div className='theDetail'  style={{ padding:" 40px 40px"}}>

 {
      countries.map( (country) => {
        <Country 
        flag={country.flags.png} 
        />
        const {flags, name, population, region, capital, subregion } = country
        return   <section className='Detail'>
      <div className='detail-con'>
        <div className='the-Detail'>
      <Link to={`/${name.common}`}>
        <img src={flags.png} alt="" />
    </Link>
        <div>
          <span>{name.common}</span>
          <p><b>Population</b> : {population}</p>
          <p><b>Region</b> : {region}</p>
          <p><b>Capital</b> : {capital}</p>
        </div>
        </div>
      </div>
    </section> })}
    </div>
    </div> 
  )
}

export default Details