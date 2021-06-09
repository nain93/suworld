import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import GlobalStyles from "./GolbalStyles";
import Header from "./Components/Header";
import Nav from "./Components/Nav";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
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
