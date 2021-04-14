import React from "react";
import { Switch, Route } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
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
          <Route path="/" exact component={Landing} />
          <Route path="/about" exact component={About} />
          <Route path="/bookmark" exact component={Resource} />
          <Route
            exact
            path="/bookmark/development"
            component={webDevelopment}
          />
          <Route exact path="/bookmark/design" component={webDesign} />
          <Route exact path="/bookmark/resources" component={WebSource} />
          <Route exact path="/bookmark/api" component={apiPage} />
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
