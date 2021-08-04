import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import paylogo from "../../images/paylogo.png";

const NavbarComp = () => {
  return (
    <div>
      <Navbar className="nav-container">
        <a className="navbar-brand" href="/">
          <img className="logo" src={paylogo} alt="logo..." />
        </a>
        <div className="nav-item">
          <Nav.Link href="/Info">Payment Details</Nav.Link>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
