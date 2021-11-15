import React, { useState } from 'react'
// import { Button, Offcanvas } from 'react-bootstrap' 
import { Offcanvas } from 'react-bootstrap'
import Nav from './Nav'
import Hamburger from 'hamburger-react'

const options = [
  {
    name: 'Enable body scrolling',
    scroll: true,
    backdrop: false
  }
]

function OCExample({ isLoggedIn, setIsLoggedIn, user, setUser, ...options }) {
  const [show, setShow] = useState(false)
  
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  //   <Hamburger toggled={isOpen} toggle={setOpen} />
  
  return (
    <>
      {/* <Button variant="primary" onClick={handleOpen}>
        Launch
      </Button> */}
      <Hamburger onClick={handleShow} toggle={setShow} />
      <Offcanvas show={show} onHide={handleClose} { ...options }>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>One Day In...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  
            user={user} setUser={setUser}/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function Example({ isLoggedIn, setIsLoggedIn, user, setUser }) {
  return (
    <>
      {options.map((options, idx) => (
        <OCExample key={idx} { ...options } isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setUser={setUser}/>
      ))}
    </>
  )
}

export default Example