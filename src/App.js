import React from "react";

// Imported Components
import {Navigation} from "./components/Navigation.js";
import {Footer} from "./components/Footer.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Imported Pages
import Home from "./Home";
import MakeYourOwn from "./MakeYourOwn";
import Predefine from './Predefine'

function App() {
  return (
    <Router>
      <div>
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/makeyourown" component={MakeYourOwn}/>
          <Route path="/predefine" component={Predefine}/>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
