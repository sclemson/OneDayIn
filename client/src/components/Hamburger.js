import React, { useState, useEffect, useRef } from 'react'
// import { Button, Offcanvas } from 'react-bootstrap'
// import { Offcanvas } from 'react-bootstrap'
// import Nav from './Nav'
// import { Squash as Hamburger } from 'hamburger-react'

const options = [
  {
    name: 'Disable body scrolling',
    scroll: false,
    backdrop: true
  }
]

function OCExample({ isLoggedIn, setIsLoggedIn, user, setUser, ...options }) {
  //   const [isOpen, setOpen] = useState(false)

//   const [show, setShow] = useState(false)
//   const draweRef = useRef(null)
//   useEffect(() => {
//     const closeDrawer = (event) => {
//       if (draweRef.current && draweRef.current.contains(event.target)) {
//         return
//       }
//       setShow(false)
//     }
//     document.addEventListener('mousedown', closeDrawer)
//     return () => document.removeEventListener('mousedown', closeDrawer)
//   }, [])

//   //   const handleClose = () => setShow(false)
//   //   const handleShow = () => (!show ? setShow(true) : setShow(false))

//   const handleClick = () => {
//     setShow(false)
//   }

  return (
    <>

    </>
  )
}

function Example({ isLoggedIn, setIsLoggedIn, user, setUser }) {
  return (
    <>
      {options.map((options, idx) => (
        <OCExample
          key={idx}
          {...options}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          user={user}
          setUser={setUser}
        />
      ))}
    </>
  )
}

export default Example
