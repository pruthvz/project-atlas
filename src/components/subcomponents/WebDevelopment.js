import React, { useEffect } from "react";
import webdev from "./WebDev";
import ScrollToTop from "./ScrollToTop";
import ScrollUp from "./ScrollUpBtn";
// AOS AND COMPOENNTS
import Aos from "aos";
import "aos/dist/aos.css";

function WebDevelopment() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.title = "Web Development Resources | ooopsDev";
  });
  return (
    <div>
      <ScrollToTop />
      <section className="webdev elegant-color-dark text-white">
        <div className="container">
          <div className="devInfo text-center">
            <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
              Resources
            </span>
            <h2>Web Development</h2>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="row">
            {webdev.map(function (item, index) {
              return (
                <div
                  className="card blue-grey darken-4 mb-3 text-white"
                  style={{ maxWidth: "550px" }}
                  data-aos="fade-up"
                  key={index}
                >
                  <div className="row ">
                    <div className="col-md-4">
                      <div className="view zoom">
                        <img
                          src={item.img}
                          alt={item.imgAlt}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h3>{item.name}</h3>
                        <h6 className="badge blue-grey darken-2 badge-pill p-1">
                          {item.category}
                        </h6>
                        <p className="small">{item.desc}</p>
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
      <ScrollUp />
    </div>
  );
}

export default WebDevelopment;
