import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Jumbotron from "./Components/Jumbotron";
import Home from "./Pages/Home";
import Saved from "./Pages/Saved";
import NoMatch from "./Pages/NoMatch";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Jumbotron text="New York Times Article" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/saved/:id" component={Saved} /> 
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
