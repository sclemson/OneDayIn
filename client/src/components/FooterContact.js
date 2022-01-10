import React from 'react'


const FooterContact = () => {


  return (
    <>
      <div className='social-info'>
        <p>Simon</p>
        <a href='https://github.com/sclemson' target='_blank' rel='noreferrer'>
          <i className='fab fa-github'/>
        </a>
        <a
          href='https://www.linkedin.com/in/simon-clemson-067142205/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
      </div>
      <div className='social-info'>
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

      <div className='social-info'>
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
    </>
  )
}

export default FooterContact
