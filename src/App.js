import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/Navbar';
import PayeeInfo from "./components/PayeeInfo/PayeeInfo"



export const App = () => {
  return (
    <div>
      <NavbarComp/>
      <PayeeInfo/>
    </div>

  )
}



export default App;
