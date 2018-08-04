import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import NoMatch from "./Pages/NoMatch";
import Jumbotron from "./Components/Jumbotron";

const App = () => (
  <Router>
    <div>
      <Jumbotron text="New York Times Article Search" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Saved" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
