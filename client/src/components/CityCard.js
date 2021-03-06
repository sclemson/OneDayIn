import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({
  _id,
  name,
  country,
  thumbnailImage
}) => {
  return (
    <Link to={`/cities/${_id}`}>
      <div className='city-card' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${thumbnailImage})` }}>
        <h2>
          {name} 
        </h2>
        <h3>
          {country}
        </h3>
      </div>
    </Link>
  )
}

export default CityCard