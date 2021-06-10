import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "./GolbalStyles";
import Search from "./Components/Search";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <Search />
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
