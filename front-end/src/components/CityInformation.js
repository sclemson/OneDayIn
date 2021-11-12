import React from 'react'
import Hotspot from './Hotspot'
import SingleHotspot from './SingleHotspot'

const CityInformation = ({
  // _id,
  name,
  country,
  primarylanguage,
  overview,
  bannerImage,
  eat,
  drink,
  see,
  stay,
  walk,
  secret
}) => {

  console.log(name, country)
  console.log('City information loaded')

  return (
    <div className='CityInformation'>
      <div className='top-section' style={{ backgroundImage: `url(${bannerImage})` }}>
        <h2>{name} </h2>
        <h3>{country}</h3>
      </div>
      <div className='info-section'>
        <h4>Primary Language: {primarylanguage}</h4>
        <p>{overview}</p>
      </div>
      <div className='hotspot-section'>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-utensils"></i>
          </div>
          <Hotspot arr={eat} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-glass-cheers"></i>
          </div>
          <Hotspot arr={drink} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-bed"></i>
          </div>
          <Hotspot arr={stay} />
        </div>
        <div className='hotspot-row'>
          <div className='hotspot-icon'>
            <i className="fas fa-binoculars"></i>
          </div>
          <Hotspot arr={see} />
        </div>
        <div className='hotspot-single'>
          <div className='hotspot'>
            <div className='hotspot-icon'>
              <i className="fas fa-hiking"></i>
            </div>
            <SingleHotspot arr={walk} />
          </div>
          <div className='hotspot'>
            <div className='hotspot-icon'>
              <i className="fas fa-user-secret"></i>
            </div>
            <SingleHotspot arr={secret} />
          </div>
        </div>
      </div>
      <div className='user-suggestion-section'>
        <div className='user-suggestion'>
          <div className='user-top-row'>
            <h3>User Suggestions:</h3>
          </div>
          <div className='user-bottom-row'>
            <i className="fas fa-utensils"></i>
            <i className="fas fa-glass-cheers"></i>
            <i className="fas fa-bed"></i>
            <i className="fas fa-binoculars"></i>
            <i className="fas fa-hiking"></i>
            <i className="fas fa-user-secret"></i>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default CityInformation