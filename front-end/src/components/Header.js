import React from 'react'
import compass from '../assets/ODI_Final_logo_no_needle.png'
import needle from '../assets/Compass_Final.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={compass} className ='compass' alt="One Day In logo"/>
      <img src={needle} className ='needle' alt="One Day In needle"/>
    </div>
  )
}

export default Header
