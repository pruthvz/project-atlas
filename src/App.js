import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/project-atlas/" exact component={Landing} />
          <Route path="/project-atlas/about" exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
