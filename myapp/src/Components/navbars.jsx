import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/NavbarComponent.css"; // Custom styles

function NavbarComponent() {
  return (
    <Navbar className="navbar-custom" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          React App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link as={Link} to="/compliance" className="nav-link-custom">Compliance</Nav.Link>
            <Nav.Link as={Link} to="/eligibility" className="nav-link-custom">Eligibility</Nav.Link>
            <Nav.Link as={Link} to="/resource" className="nav-link-custom">Resource</Nav.Link>
            <Nav.Link as={Link} to="/reminder" className="nav-link-custom">Reminder</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
