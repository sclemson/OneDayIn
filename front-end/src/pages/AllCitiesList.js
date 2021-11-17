import React from 'react'
import { useState, useEffect } from 'react'
import CityCard from '../components/CityCard'
import { getCities } from '../helpers/api'


const AllCitiesList = () => {
  const [cities, setCities] = useState([])


  useEffect(() => {
    const getCityData = async () => {
      const allCities = await getCities()
      allCities.sort((a,b) => (a.name > b.name ? 1 : -1))
      setCities(allCities)
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

export default AllCitiesList