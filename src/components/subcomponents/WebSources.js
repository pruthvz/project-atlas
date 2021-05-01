import React, { useEffect } from "react";
import WebSource from "./Source";
import ScrollUp from "./ScrollUpBtn";

// AOS AND COMPOENNTS
import Aos from "aos";
import "aos/dist/aos.css";

function WebSources() {
  // AOS INIT
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.title = "Web Resources | ooopsDev";
  });
  return (
    <div>
      {/* SCROLL UP */}
      <section className="webdev elegant-color-dark text-white">
        <div className="container">
          <div className="devInfo text-center">
            <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
              Resources
            </span>
            <h2>Other Resources</h2>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="row">
            {WebSource.hostingSites.map(function (item, index) {
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

            <div className="container" data-aos="fade-up">
              <div className="devInfo text-center pt-5">
                <span className="badge purple accent-4 pl-3 pr-3 p-2 badge-pill">
                  Snippets
                </span>
                <h3>Code Snippets</h3>
              </div>
            </div>

            {WebSource.codeSnippets.map(function (item, index) {
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

            <div className="container" data-aos="fade-up">
              <div className="devInfo text-center pt-5">
                <span className="badge purple accent-4 pl-3 pr-3 p-2 badge-pill">
                  Preparation
                </span>
                <h3>Interview Preparation</h3>
              </div>
            </div>

            {WebSource.interviewSites.map(function (item, index) {
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
          </div>
          <h6 className="alert alert-warning">
            If you know more free hosting platforms that could be useful for
            other developers feel free to{" "}
            <a
              href="https://github.com/pruthvz/project-atlas"
              rel="noreferrer"
              target="_blank"
            >
              update this page.
            </a>
          </h6>
        </div>
      </section>
      <ScrollUp />
    </div>
  );
}

export default WebSources;
