import React, { useEffect } from "react";
import devDesign from "./Design";

// AOS AND COMPOENNTS
import Aos from "aos";
import "aos/dist/aos.css";
// import ScrollToTop from "./ScrollToTop";

function WebDesign() {
  // AOS INIT
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    document.title = "Web Design Resources | ooopsDev";
  });
  return (
    <div>
      {/* <ScrollToTop /> */}
      <section className="webdev elegant-color-dark text-white">
        <div className="container">
          <div className="devInfo text-center">
            <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
              Resources
            </span>
            <h2>Web Design</h2>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="row">
            {devDesign.webdesign.map(function (item, index) {
              return (
                <div
                  class="card blue-grey darken-4 mb-3 text-white"
                  style={{ maxWidth: "550px" }}
                  data-aos="fade-up"
                >
                  <div class="row ">
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

            {/* new under */}
            <div className="container" data-aos="fade-up">
              <div className="devInfo text-center pt-5">
                <span className="badge purple accent-4 pl-3 pr-3 p-2 badge-pill">
                  Color
                </span>
                <h3>Color Palettes</h3>
              </div>
            </div>
            {devDesign.colourTemp.map(function (item, index) {
              return (
                <div
                  class="iconCard card blue-grey darken-4 mb-3 text-white"
                  style={{ maxWidth: "550px" }}
                  data-aos="fade-up"
                >
                  <div class="row ">
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
                      <div class="card-body">
                        <h3>{item.name}</h3>
                        <h6 className="badge blue-grey darken-2 badge-pill p-1">
                          {item.category}
                        </h6>
                        <p class="small">{item.desc}</p>
                        <a
                          className="btn unique-color rounded-pill"
                          href={item.link}
                          rel="noreferrer"
                          target="_blank"
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

            {/* new under */}
            <div className="container" data-aos="fade-up">
              <div className="devInfo text-center pt-4">
                <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
                  Icons
                </span>
                <h3>Icons and illustrations</h3>
              </div>
            </div>
            {devDesign.iconsTemp.map(function (item, index) {
              return (
                <div
                  class="iconCard card blue-grey darken-4 mb-3 text-white"
                  style={{ maxWidth: "550px" }}
                  data-aos="fade-up"
                >
                  <div class="row ">
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
                      <div class="card-body">
                        <h3>{item.name}</h3>
                        <h6 className="badge blue-grey darken-2 badge-pill p-1">
                          {item.category}
                        </h6>
                        <p class="small">{item.desc}</p>
                        <a
                          className="btn unique-color rounded-pill"
                          href={item.link}
                          rel="noreferrer"
                          target="_blank"
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

            <div className="container" data-aos="fade-up">
              <div className="devInfo text-center pt-4">
                <span className="badge purple accent-4  pl-3 pr-3 p-2 badge-pill">
                  Bootstrap
                </span>
                <h3>Bootstrap Templates and Themes</h3>
              </div>
            </div>

            {/* new under */}
            {devDesign.bootstrapTemp.map(function (item, index) {
              return (
                <div
                  class="bootstrapCard card blue-grey darken-4 mb-3 text-white"
                  style={{ maxWidth: "550px" }}
                  data-aos="fade-up"
                >
                  <div class="row ">
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
                      <div class="card-body">
                        <h3>{item.name}</h3>
                        <h6 className="badge blue-grey darken-2 badge-pill p-1">
                          {item.category}
                        </h6>
                        <p class="small">{item.desc}</p>
                        <a
                          className="btn unique-color rounded-pill"
                          href={item.link}
                          rel="noreferrer"
                          target="_blank"
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

export default WebDesign;
