import React from 'react'
import { useState } from 'react'

const FooterContact = () => {
  const [showText, setShowText] = useState()

  const handleMouseEnter = () => {
    setShowText(true)
  }
  const handleMouseLeave = () => {
    setShowText(false)
  }

  return (
    <>
      <div>
        <p>Simon</p>
        <a href='https://github.com/sclemson' target='_blank' rel='noreferrer'>
          <i
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className='fab fa-github'
          />
        </a>
        <a
          href='https://www.linkedin.com/in/simon-clemson-067142205/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div>
        <p>James</p>
        <a
          href='https://github.com/james92rogers/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github' />
        </a>

        <a
          href='https://www.linkedin.com/in/james92rogers/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>

      <div>
        <p>Kesh</p>
        <a
          href='https://github.com/keshgurung'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-github' />
        </a>
        <a
          href='https://www.linkedin.com/in/gurungkesh9/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      {showText && <p className='message'>Now you can see me!</p>}
    </>
  )
}

export default FooterContact
