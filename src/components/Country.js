import React, { useEffect, useState }  from 'react'
import './all.css'
import { BsArrowLeft } from 'react-icons/bs'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function Country(prop) {
    const [country, setCountry] = useState([]);
    let {name} = useParams()

    useEffect(() => {
        window.scroll(0, 0);
        const fetchCountryData = async () => { 
          try { 
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
                const data = await response.json();
                setCountry(data);
                console.log(data)
        } catch (error) {
            console.log(error)
        }
    };
    fetchCountryData()
           
    }, [name])

    useEffect(() => {
        document.title = `Countries | ${name}`
    }, [name])
    
  return (
    <div>
        <div className='p-btn'>
       <p><button> <BsArrowLeft/><Link to="/"> Back</Link></button></p>
        </div>

      { country.map((item) => (
       <section className='detail-country'>
            <div>
                <img src={item.flags.svg} alt="" />
            </div>

            <section>
            <h1>{item.name.common}</h1>
            <span>
                <div>
                    <p><b>Native name : </b> {item.name.official}</p>
                    <p><b>Population : </b> {item.population}</p>
                    <p><b>Region : </b> {item.region}</p>
                    <p><b>Sub Region : </b> {item.subregion}</p>
                    <p><b>Capital : </b> {item.capital}</p>
                </div>
                <div>
                    <p><b>Top level Domain : </b> {item.tld}</p>
                    <p><b>Continents : </b> {item.continents}</p>
                    <p><b>Google Map : </b> {item.maps.googleMaps}</p>
                </div>
            </span>
           { item.borders && (
           <>
           <p className='border'>Border countries: 
          { item.borders.map((border, index) =>

           <button
           key={index}
           >
            {border}
           </button> 
          )}
           </p>
           </>
           )}
            </section>
        </section>)
        )}
    </div>
  )
}

export default Country