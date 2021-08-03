import React from 'react';
import '@progress/kendo-theme-material/dist/all.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/Navbar';
import GridPage from "./components/Grid/Grid";
import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



export const App = () => {
  return (
    <Router>
    <div>
      <NavbarComp/>
      <Footer />
      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/Info" component={GridPage} />
      
      
      </Switch>
      
    </div>
    </Router>
  )
}



export default App;
