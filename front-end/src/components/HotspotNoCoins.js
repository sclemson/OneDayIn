import React from 'react'

const Hotspot = ({ arr }) => {

  
  return ( 
    <div className='hotspot-suggestions'>
      <div className='suggestion-no-coins'>
        <div className='bottom-row'>
          <h6>{arr[0].name}</h6>
          <p>{arr[0].location}</p>
        </div>
      </div>
      <div className='suggestion-no-coins'>
        <div className='bottom-row'>
          <h6>{arr[1].name}</h6>
          <p>{arr[1].location}</p>
        </div>
      </div>
      <div className='suggestion-no-coins'>
        <div className='bottom-row'>
          <h6>{arr[2].name}</h6>
          <p>{arr[2].location}</p>
        </div>
      </div>
    </div>

        
  )
}

export default Hotspot
