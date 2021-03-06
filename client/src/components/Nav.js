import React from 'react'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken, removeUserId, getUserId } from '../helpers/auth'
import { Squash as Hamburger } from 'hamburger-react'
import { Offcanvas } from 'react-bootstrap'
import logo from '../assets/ODI_Logo_Final.png'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const handleLogout = () => {
    removeToken()
    removeUserId()
    setIsLoggedIn(false)
    history.push('/')
  }

  const options = [
    {
      name: 'Disable body scrolling',
      scroll: false,
      backdrop: true
    }

  ]

  return (
    <nav>
      <Hamburger color='#2196F3' toggled={show} toggle={setShow} { ...options } />
      <Offcanvas show={show}>
        <div className='logo-div'><img src={logo} className ='logo' alt="One Day In logo"/></div>
        <ul>
          <li>
            <Link onClick={handleClose} to='/'>Home</Link>
          </li>
          <li>
            <Link onClick={handleClose} to='/about'>About</Link>
          </li>
          <li>
            <Link onClick={handleClose} to='/cities'>Cities</Link>
          </li>
          {isLoggedIn ? (
            <>
              <li>
                <Link onClick={handleClose} to={`/users/${getUserId()}`}>Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link onClick={handleClose} to='/register'>Register</Link>
              </li>
              <li>
                <Link onClick={handleClose} to='/login'>Login</Link>
              </li>
            </>
          )}
        </ul>
      </Offcanvas >
    </nav>
  )
}

export default Nav

