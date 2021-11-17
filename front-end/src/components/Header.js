import React from 'react'
import compass from '../assets/ODI_Logo_NC.png'
import needle from '../assets/Compass_Centre.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={compass} className ='compass' alt="One Day In logo"/>
      <img src={needle} className ='needle' alt="One Day In needle"/>
    </div>
  )
}

export default Header
