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


function OCExample({ ...props }) {
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
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>One Day In...</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

function Example() {
  return (
    <>
      {options.map((props, idx) => (
        <OCExample key={idx} {...props} />
      ))}
    </>
  )
}

export default Example