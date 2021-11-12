import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({
  _id,
  name,
  country,
  thumbnailImage
}) => {
  return (
    <div className='city-card' style={{ backgroundImage: `url(${thumbnailImage})` }}>
      <h2>
        <Link to={`/cities/${_id}`}>
          {name} 
        </Link>
      </h2>
      <h3>
        {country}
      </h3>
    </div>
  )
}

export default CityCard