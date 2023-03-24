import React, { useEffect, useState } from 'react'
import arrow from './image/icon-arrow-dark.svg'
import { FaSearch } from 'react-icons/fa'
import { apiURL } from '../util/countryApi'

function Home(props) {
  const [countries, setCountries] = useState([])
  const [searchText, setSearchText] = useState("")
 
  const getCountries = async () => {
    try {
    const res = await fetch(`${apiURL}/all`)
    const data = await res.json()
    setCountries(data)} catch (error) {
      console.log(error)
    }
  }
  useEffect (() => {
    getCountries()
  }, [])

  async function searchCountry() {
    try {
      const res = await fetch(`${apiURL}/name/${searchText}`)
      const data = await res.json();
      setCountries(data)
    }catch (error) {
      console.log(error)
    }
  }
  function handleSubmitCountry(e) {
    e.preventDefault()
    searchCountry()
    
  }


  return (
    <div>
  <div className="home">
    <p onClick={handleSubmitCountry}> <FaSearch /> <input type="text"  placeholder='  Search for a country.....' 
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}/></p>
    <select name="select" id="select" className='select'>
    <option> Filter by region  <img src={arrow} alt="" />  </option>
    <option>  Africa <img src={arrow} alt="" />  </option>
    <option> Europe by region  <img src={arrow} alt="" />  </option>
    <option> Asia by region  <img src={arrow} alt="" />  </option>
    <option>America  <img src={arrow} alt="" />  </option>

   
    </select>
  </div>
  <div>
  </div>
  </div>
  )
}

export default Home