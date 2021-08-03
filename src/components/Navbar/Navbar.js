import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
// import Container from 'react-bootstrap/Container'
import logo from "../../Images/logo.png";

const NavbarComp = () => {
  return (
    <Navbar className="Navcontainer">
      <a className="navbar-brand" href="/home">
        <img className="logo" src={logo} alt="logo..." />
      </a>
      <Navbar.Brand href="#home">Welcome, Employee!</Navbar.Brand>
      <NavDropdown title="Options" id="basic-nav-dropdown">
        <NavDropdown.Item href="/Info">Payment Details</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/">Return Home</NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default NavbarComp;
