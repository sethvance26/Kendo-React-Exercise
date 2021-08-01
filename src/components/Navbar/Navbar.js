import React from 'react';
import {Navbar, NavDropdown} from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
// import paymerang from "./paymerang.png";

const NavbarComp = () => {
    return (
<Navbar className="Navcontainer">
{/* <a className="navbar-brand" href="#"><img src={paymerang} alt="logo..." /></a> */}
    <Navbar.Brand href="#home">Paymerang</Navbar.Brand> 
    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">View Payees</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#home">Return Home</NavDropdown.Item>
        </NavDropdown>
</Navbar>
  );
};


export default NavbarComp;