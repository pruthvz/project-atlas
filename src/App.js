import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import history from "./components/history";
import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Navbar />

        <Route path="/project-atlas/" exact component={Landing} />
        <Route path="/project-atlas/about" exact component={About} />

        <Footer />
      </Router>

      {/* IN PROGRESS MESSAGE DISPLAY */}
      <marquee
        behavior="scroll"
        direction="left"
        className="deep-purple darken-1 text-white"
      >
        <i className="fad fa-user-ninja"></i> Website is still under
        construction, project atlas is in progress. Visit me later ♥
      </marquee>
      {/* IN PROGRESS MESSAGE DISPLAY [DELETE LATER] */}
    </div>
  );
}

export default App;
