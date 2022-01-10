import React from 'react'
import { useState, useEffect } from 'react'
import CityCard from '../components/CityCard'
import { getCities } from '../helpers/api'
import { getContinent } from '../helpers/auth'

const CitiesList = () => {
  const [cities, setCities] = useState([])


  useEffect(() => {
    const getCityData = async () => {
      const continent = getContinent()
      const allCities = await getCities()
      const filteredCities = allCities.filter(city => city.continent === continent)
      filteredCities.sort((a,b) => (a.name > b.name ? 1 : -1))
      setCities(filteredCities)
    } 
    getCityData()
  }, [])

  // useEffect(() => {
  //   getCities().then(setCities)
  //   console.log(selected)
  // }, [])

  return (
    <section className='city-list'>
      <ul>
        {cities.map((city) => (
          <li key={city._id}>
            <CityCard {...city} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default CitiesList