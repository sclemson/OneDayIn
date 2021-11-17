import React, { useState } from 'react'
import FooterContact from './FooterContact'

const Footer = () => {
  const [contactus, setContactus] = useState(false)
  function ScrollToTop() {
    window.scrollTo(0, 0)
  }

  return (
    <section className='footer'>
      <div className='footer-top'>
        <div>
          <button>TELL US ABOUT IT</button>
        </div>
        <div>
          <a onClick={() => ScrollToTop()}>Return to the Top &#9757;</a>
        </div>
      </div>
      <div className='footer-middle'>
        <div className='button'>
          <button onClick={() => setContactus(true)}>Contact us</button>
        </div>
        <div className='show'>
          {contactus ? (
            <div className='profile'>
              <FooterContact />
            </div>
          ) : (
            <div className='share'>
              <p>Share us</p>
              <div className='social'>
                <a href='#'>
                  <i className='fab fa-instagram'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-twitter'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-facebook'></i>
                </a>
                <a href='#'>
                  <i className='fab fa-whatsapp'></i>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className='footer-bottom'>
        <p>&copy; 2021 All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer
