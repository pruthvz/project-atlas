import React from "react";
import "../App.css";

// importing images
import DevelopmentImg from "../assets/development.png";
import DesignImg from "../assets/design.png";
import SourceImg from "../assets/source.png";
import codingVid from "../assets/coding.mp4";

function Landing() {
  return (
    <div>
      <header>
        <div class="container h-100">
          <div class="d-flex h-100 text-center align-items-center">
            <div class="w-100 text-white">
              <h1 class="display-1">Web Developent</h1>
              <p class="lead mb-0 ">Useful and bookmark worthy websites!</p>
              <a className="btn-change8 btn  btn-lg mt-4" href="#providing">
                Bookmark me
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="what-we-provide pt-5" id="providing">
        <div className="container text-center">
          <div class="w-100 text-white">
            <h1> One Website</h1>
            <p>
              <i class="fad fa-angle-double-down teal-text"></i> Collaborative
              list of resources for developers in one place!
            </p>
          </div>
        </div>
        <div className="container p-5">
          <div className="col-md-12">
            <div class="row row-cols-1 row-cols-md-3">
              <div class="col">
                <div class="card">
                  <img
                    src={DevelopmentImg}
                    class="front-Img card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Web Development</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card">
                  <img
                    src={DesignImg}
                    class="front-Img card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Web Design</h5>
                    <p class="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="card">
                  <img
                    src={SourceImg}
                    class="front-Img card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Awesome API's</h5>
                    <p class="card-text">
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
    </div>
  );
}

export default Landing;
