import React from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home" className='fw-bold fs-1' >LOCOIPUSIM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className=' m-auto'>
          <Nav className="align-items-center">
            <NavDropdown  className='text-primary' title="Services" id="basic-nav-dropdown"></NavDropdown>
            <NavDropdown title="Company" id="basic-nav-dropdown"></NavDropdown>
            <Nav.Link href="#home" className='' >Case studies</Nav.Link>
            <Nav.Link href="#home">Blog</Nav.Link>
            <NavDropdown title="Resources" id="basic-nav-dropdown"></NavDropdown>

            
          </Nav>

        </Navbar.Collapse>

        <div className="d-lg-flex pt-2 align-items-right">
                <div className=" header-contact">
                    <button className="client-support-button border-0 rounded fw-semibold">
                                    Client Support <i className="bi bi-arrow-right"></i>
                    </button>
                    <br />
                    <p className='fw-bold'>1-800-356-8933</p>
                </div>
                <div className='px-2'>
                    <Button variant="dark">Contact us</Button>
                </div>
            </div>

      </Container>
    </Navbar>
  );
}

export default Header;