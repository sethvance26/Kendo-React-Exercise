import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
// import Container from 'react-bootstrap/Container'
// import paymerang from "./paymerang.png"

const Header = () => {
    return (
<Navbar className="Navcontainer">
{/* <a className="navbar-brand" href="#"><img src={paymerang} alt="logo..." /></a> */}
    <Navbar.Brand href="#home" >Payee Information</Navbar.Brand> 
</Navbar>
  );
};


export default Header;