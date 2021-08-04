import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../Images/logo.png";

const NavbarComp = () => {
  return (
    <div>
  
    <Navbar className="nav-container">
      <a className="navbar-brand" href="/home">
        <img className="logo" src={logo} alt="logo..." />
      </a>
      <div className="nav-item">
        <Nav.Link href="/Info">Payment Details</Nav.Link>
     </div>
    </Navbar>

 
  </div>
  );
};

export default NavbarComp;
