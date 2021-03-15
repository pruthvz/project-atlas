import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <div className="wip">
      <marquee
        behavior="scroll"
        direction="right"
        className="deep-orange darken-1 p-1 text-black"
      >
        Website is under construnction... Visit me later ♥
      </marquee>
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
