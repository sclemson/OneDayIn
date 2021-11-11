import React from 'react'
// import { Link } from 'react-router-dom'

const CityInformation = ({
  // _id,
  name,
  country,
  // image
  eat
  // drink,
  // see,
  // stay,
  // walk,
  // secret
}) => {

  console.log(name, country)
  console.log('City information loaded')
  console.log(eat[0].name)

  return (
    <div className='CityInformation'>
      <div>
        <h2>
          {name} 
        </h2>
        <h3>
          {country}
        </h3>
        <h4>
          <div className='HotspotName'>
            {eat[0].name}
          </div>
          <div className='HotspotLocation'>
            {eat[0].location}
          </div>
          {/* {drink}
          {see}
          {stay}
          {walk}
          {secret} */}
        </h4>
      </div>
      <div className='CityImage'>
        {/* <picture>
            <img src={image} alt={name} />
            </picture> */}
      </div>
    </div>
  )
}

export default CityInformation