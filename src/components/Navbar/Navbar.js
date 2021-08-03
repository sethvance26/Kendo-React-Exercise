import React from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
// import paymerang from "./paymerang.png";

const NavbarComp = () => {
    return (
<Navbar className="Navcontainer">
{/* <a className="navbar-brand" href="#"><img src={paymerang} alt="logo..." /></a> */}
    <Navbar.Brand href="#home">Welcome Employee!</Navbar.Brand> 
    <NavDropdown title="Options" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Info">Payment Details</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">Return Home</NavDropdown.Item>
        </NavDropdown>
</Navbar>
  );
};


export default NavbarComp;