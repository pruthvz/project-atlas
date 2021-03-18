import React from "react";
import "../App.css";

// importing images
import DevelopmentImg from "../assets/development.png";
import DesignImg from "../assets/design.png";
import SourceImg from "../assets/source.png";
import openSrc from "../assets/opensrc.png";

import Coding from "../assets/coding.mp4";

function Landing() {
  return (
    <div>
      <header>
        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={Coding} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-1">Web Developent</h1>
              <p className="lead mb-0 ">Useful and bookmark worthy websites!</p>
              <a className="btn-change8 btn  btn-lg mt-4" href="#providing">
                Bookmark me
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="what-we-provide pt-5 pb-5" id="providing">
        <div className="container text-center">
          <div className="w-100 text-dark provideInfo">
            <h1 className="mt-5"> One Website</h1>
            <p>
              <i className="fad fa-angle-double-down purple-text "></i>
              Collaborative list of resources for developers in one place!
            </p>
          </div>
        </div>
        <div className="container p-5">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col">
                <div className="card ">
                  <img
                    src={DevelopmentImg}
                    className="front-Img card-img-top"
                    alt="Web Development"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <img
                    src={DesignImg}
                    className="front-Img card-img-top"
                    alt="Web Design UI/UX"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Web Design</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="card">
                  <img
                    src={SourceImg}
                    className="front-Img card-img-top"
                    alt="Source Code/API"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Awesome API's</h5>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="open-src elegant-color-dark text-white pt-5 pb-5 p-3">
        <div className="col-md-12">
          <div class="card elegant-color">
            <div className="mask">
              <i class="fab fa-osi pt-2 pl-2"></i>
              <div class="card-body text-white">
                <h1 className="card-title">Open Source</h1>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a
                  href="https://github.com/pruthvz/project-atlas"
                  rel="noreferrer"
                  target="_blank"
                  class="btn deep-purple text-white rounded-pill"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>

          <div class="card elegant-color">
            <div className="mask">
              <div class="card-body text-dark">
                <h6 className="card-title text-white">Hashtags</h6>
                <h1 className="card-title badge badge-light rounded-pill mr-2">
                  <i class="fab fa-osi"></i> Open Source
                </h1>
                <h1 className="card-title badge badge-light rounded-pill mr-2">
                  React.js
                </h1>
                <h1 className="card-title badge badge-light rounded-pill mr-2">
                  JavaScript
                </h1>
                <h1 className="card-title badge badge-light rounded-pill mr-2">
                  HTML/CSS
                </h1>
                <h1 className="card-title badge badge-light rounded-pill mr-2">
                  Django
                </h1>
                <h1 className="card-title badge badge-light  rounded-pill mr-2">
                  Palettes
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
