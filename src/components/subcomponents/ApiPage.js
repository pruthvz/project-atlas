import React, { useEffect } from "react";
import devApi from "./API";

// AOS AND COMPOENNTS
import Aos from "aos";
import "aos/dist/aos.css";

function WebDevelopment() {
  // AOS INIT
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.title = "Free API's | Project Atlas";
  });
  return (
    <div>
      <section className="webdev elegant-color-dark text-white">
        <div className="container">
          <div className="devInfo text-center">
            <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
              Resources
            </span>
            <h2>Public API's</h2>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="row">
            {devApi.map(function (item, index) {
              return (
                <div
                  class="card blue-grey darken-4 mb-3 text-white"
                  data-aos="fade-up"
                >
                  <div class="row">
                    <div class="col-md-4">
                      <div className="view zoom">
                        <img
                          src={item.img}
                          alt={item.imgAlt}
                          class="img-fluid"
                        />
                      </div>
                    </div>
                    <div class="col-md-8">
                      <div class="card-body" style={{ width: "700px" }}>
                        <h3>{item.name}</h3>
                        <h6 className="badge blue-grey darken-3 badge-pill p-1">
                          {item.category}
                        </h6>
                        <p class="small">{item.desc}</p>
                        <a
                          className="btn unique-color rounded-pill"
                          rel="noreferrer"
                          target="_blank"
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

            {/* new under */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default WebDevelopment;