import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./styles/Header.css"
 

function Header() {
  return (
    <div className='w-100 main-header'>
      <Navbar collapseOnSelect expand="lg" className="py-4 px-2 main-top" variant='dark' fixed='top'>
      <Container fluid = "md">
        <Link to={'/'} style={{textDecoration: "none"}}><Navbar.Brand href="#home" className='fw-semibold fs-2 text-white'>videostack</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav border-0" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav className='column-gap-5 align-items-center'>
            <Nav.Link href="#features" className='fw-semibold fs-6 text-white'>About us</Nav.Link>
            <Nav.Link href="#pricing" className='fw-semibold fs-6 text-white'>Services</Nav.Link>
            <Nav.Link href="#pricing" className='fw-semibold fs-6 text-white'>Contacts</Nav.Link>
            <Nav.Link href="#pricing" className='fw-semibold fs-6 text-white'>Social</Nav.Link>
            
            <Nav.Link href="#pricing"><button className='get-started-btn'>Get started</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
