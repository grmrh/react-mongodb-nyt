import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./Pages/Search";
import Detail from "./Pages/Detail";
import NoMatch from "./Pages/NoMatch";
import { Nav } from "./Components/Nav";

const App = () => (
  <Router>
    <div>0
      <Nav />
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/articles" component={Search} />
        <Route exact path="/articles/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
