import React from 'react'
import { Link } from 'react-router-dom'

const CityCard = ({
  _id,
  name,
  country
//   image
}) => {
  return (
    <div className='CityCard'>
      <div>
        <h2>
          <Link to={`/cities/${_id}`}>
            {name} 
          </Link>
        </h2>
        <h3>
          {country}
        </h3>
      </div>
      <div className='CityImage'>
        {/* <picture>
            <img src={image} alt={name} />
            </picture> */}
      </div>
    </div>
  )
}

export default CityCard