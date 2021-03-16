import React from "react";
import "../App.css";

function Landing() {
  return (
    <div>
      <header>
        <div
          class="p-5 text-center bg-image"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1475070929565-c985b496cb9f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)",
            height: "400px",
            backgroundSize: "cover",
          }}
        >
          <div class="d-flex justify-content-center align-items-center h-100">
            <div class="headerInfo text-white">
              <h1 class="mb-3 display-4">Web Development</h1>
              <h4 class="mb-3">Useful and bookmark worthy websites!</h4>
              <a class="btn btn-danger btn-lg" href="#!" role="button">
                Call to action
              </a>
            </div>
          </div>
        </div>
      </header>
      <button type="button" className="btn btn-dark ">
        Press me
      </button>
      <button type="button" className="btn btn-dark ">
        Press me
      </button>
      <button type="button" className="btn btn-dark ">
        Press me
      </button>
      <button type="button" className="btn btn-dark ">
        Press me
      </button>
    </div>
  );
}

export default Landing;
