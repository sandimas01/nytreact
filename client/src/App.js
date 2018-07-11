import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { Container } from "./components/Grid";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/saved" component={Saved} />        
        <Route component={NoMatch} />
      </Switch>
      </Container>
    </div>
  </Router>
);

export default App;
