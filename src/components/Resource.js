import React from "react";
import "./Resource.css";

import teamImg from "../assets/team.png";

function Resource() {
  return (
    <div>
      <header className="source ">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-4">Web Resources</h1>
            </div>
          </div>
        </div>
      </header>

      <section className="webdev elegant-color-dark text-white">
        <div className="container">
          <div className="devInfo text-center">
            <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
              Resource
            </span>
            <h2>Web Development</h2>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="row">
            <div
              class="card blue-grey darken-4 mb-3 text-white"
              style={{ maxWidth: "550px" }}
            >
              <div class="row ">
                <div class="col-md-4">
                  <img src={teamImg} alt="..." class="img-fluid " />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3>Card title</h3>
                    <h6 className="badge blue-grey darken-2 badge-pill p-1">
                      Resource
                    </h6>
                    <p class="small">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a className="btn unique-color rounded-pill" href="/#">
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* new under */}
            <div
              class="card blue-grey darken-4 mb-3 text-white"
              style={{ maxWidth: "550px" }}
            >
              <div class="row ">
                <div class="col-md-4">
                  <img
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt="..."
                    class="img-fluid"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h3>Card title</h3>
                    <h6 className="badge blue-grey darken-2 badge-pill p-1">
                      Resource
                    </h6>
                    <p class="small">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <a className="btn unique-color rounded-pill" href="/#">
                      Visit
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* new under */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resource;
