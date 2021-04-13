import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Resource from "./components/Resource";

// Sub Components
import Nav from "./components/subcomponents/Nav";
import WebDev from "./components/subcomponents/WebDevelopment";
import WebDesign from "./components/subcomponents/WebDesign";
import WebSource from "./components/subcomponents/WebSources";
import ApiPage from "./components/subcomponents/ApiPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/project-atlas/" exact component={Landing} />
          <Route path="/project-atlas/about" exact component={About} />
          <Route path="/project-atlas/bookmark" exact component={Resource} />
          <Route
            exact
            path="/project-atlas/bookmark/development"
            component={webDevelopment}
          />
          <Route
            exact
            path="/project-atlas/bookmark/design"
            component={webDesign}
          />
          <Route
            exact
            path="/project-atlas/bookmark/resources"
            component={WebSource}
          />
          <Route exact path="/project-atlas/bookmark/api" component={apiPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

const webDevelopment = () => {
  return (
    <div>
      <Nav />
      <WebDev />
    </div>
  );
};

const webDesign = () => {
  return (
    <div>
      <Nav />
      <WebDesign />
    </div>
  );
};

const apiPage = () => {
  return (
    <div>
      <Nav />
      <ApiPage />
    </div>
  );
};

export default App;
