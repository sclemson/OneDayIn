import React from 'react'
import { useState, useEffect } from 'react'
import CityCard from '../components/CityCard'
import { getCities } from '../helpers/api'

const CitiesList = () => {
  const [cities, setCities] = useState([])

  useEffect(() => {
    getCities().then(setCities)
  }, [])

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