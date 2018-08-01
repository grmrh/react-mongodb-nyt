import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";
import NoMatch from "./Pages/NoMatch";
import { Nav } from "./Components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/articles/:id" component={Saved} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
