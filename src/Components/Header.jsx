import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <>
      <Navbar className="bg-info">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand href="#home" className='text-dark fw-bolder'>
            <img
              alt=""
              src="https://icons.iconarchive.com/icons/ahdesign91/media-player/256/WMP-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media-Player
          </Navbar.Brand>
          </Link>
        
        </Container>
      </Navbar>
    </>
  )
}

export default Header
