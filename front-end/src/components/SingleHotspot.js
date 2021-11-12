import React from 'react'

const SingleHotspot = ({ arr }) => {
  return (
    <div className='hotspot-suggestions-single'>
      <div className='suggestion'>
        <h6>{arr[0].name}</h6>
        <p>{arr[0].location}</p>
      </div>
    </div>
  )
}

export default SingleHotspot
