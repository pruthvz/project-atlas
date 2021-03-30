import React from "react";

import Nav from "./subcomponents/Nav";
import WebDevelopment from "./subcomponents/WebDevelopment";

// CSS
import "./Resource.css";

function Resource() {
  return (
    <div>
      <Nav />
      <WebDevelopment />

      {/* <section className="webdev elegant-color-dark text-white">
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
            {webdev.map(function (item, index) {
              return (
                <div
                  class="card blue-grey darken-4 mb-3 text-white"
                  style={{ maxWidth: "550px" }}
                >
                  <div class="row ">
                    <div class="col-md-4">
                      <img src={item.img} alt={item.imgAlt} class="img-fluid" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h3>{item.name}</h3>
                        <h6 className="badge blue-grey darken-2 badge-pill p-1">
                          {item.category}
                        </h6>
                        <p class="small">{item.desc}</p>
                        <a
                          className="btn unique-color rounded-pill"
                          href={item.link}
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Resource;
