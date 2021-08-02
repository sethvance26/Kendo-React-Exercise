import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/Navbar/Navbar';
import PayeeInfo from "./components/PayeeInfo/PayeeInfo";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";



export const App = () => {
  return (
    <Router>
    <div>
      <NavbarComp/>
      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/Info" component={PayeeInfo} />
      
      </Switch>
    </div>
    </Router>
  )
}



export default App;
