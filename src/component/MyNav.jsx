import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Container, Nav, NavDropdown, Form, Button, Offcanvas } from 'react-bootstrap';
import  Logo from "../assets/Logo.png"

function MyNav() {
  
  return (
    <Navbar expand="md" className="mb-3" style={{ width: '95%', margin: '0 auto' }}>
  <Container fluid>
    <Navbar.Brand className="d-flex justify-content-between text-sm">
      <img src={Logo} alt="" />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
    <Navbar.Offcanvas
      id="offcanvasNavbar-expand-md"
      aria-labelledby="offcanvasNavbarLabel-expand-md"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
        <Navbar.Brand className="d-flex justify-content-between">
        <img src={Logo} alt="" />
      </Navbar.Brand>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-center flex-grow-1 pe-3">
          <Nav.Link href="#action1" id='font' className="nav-link ms-3" >My URLs</Nav.Link>
          <NavDropdown
            title="Features"
            id="offcanvasNavbarDropdown-expand-md"
            className="ms-2 font"
          >
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2" id='font' className="nav-link ms-3">Pricing</Nav.Link>
          <Nav.Link href="#action2" id='font' className="nav-link ms-3">Analytics</Nav.Link>
          <Nav.Link href="#action2" id='font' className="nav-link ms-3">FAQs</Nav.Link>
        </Nav>
        <div className="d-flex text-sm">
        <Button variant="outline-primary" id='font'>Log in</Button>
        <Button variant="primary" className="ms-2 " id='font'>Try For Free</Button>
        </div>
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

  );
}

export default MyNav;
