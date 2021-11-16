import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { removeToken, removeUserId, getUserId } from '../helpers/auth'
import { Squash as Hamburger } from 'hamburger-react'
import { Offcanvas } from 'react-bootstrap'

const Nav = ({ isLoggedIn, setIsLoggedIn }) => {
  const history = useHistory()

  const [show, setShow] = useState(false)
  const draweRef = useRef(null)
  useEffect(() => {
    const closeDrawer = (event) => {
      // console.log(draweRef)
      console.log(event.target)
      // if (draweRef.current) {
      //   return
      // }
      // show ? setShow(false) : ''
    }
    document.addEventListener('mousedown', closeDrawer)
    return () => document.removeEventListener('mousedown', closeDrawer)
  }, [])

  const handleClick = () => {
    setShow(false)
  }

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
      <Hamburger onClick={() => setShow(true)} { ...options } />
      <div show={show} ></div>
      <Offcanvas ref={draweRef} show={show} >
        <div >
          <ul>
            <li>
              <Link onClick={handleClick} to='/'>Home</Link>
            </li>
            <li>
              <Link onClick={handleClick} to='/about'>About</Link>
            </li>
            <li>
              <Link onClick={handleClick} to='/cities'>Cities</Link>
            </li>
          </ul >  
        </div>
        {isLoggedIn ? (
          <>
            <ul>
              <li>
                <Link onClick={handleClick} to={`/users/${getUserId()}`}>Profile</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul >
          </>
        ) : (
          <>
            <ul>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
            </ul >
          </>
        )}
      </Offcanvas >
    </nav>
  )
}

export default Nav

