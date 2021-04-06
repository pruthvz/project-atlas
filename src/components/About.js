import React, { useEffect } from "react";
import Team from "../assets/team.png";
import Aos from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./subcomponents/ScrollToTop";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <ScrollToTop />
      <header className="masthead">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-1">About us</h1>
              <h5 className="small">
                We want to develop a website that provides useful websites and
                resources for other new and advanced developers.{" "}
                <i className="far fa-sparkles"></i>
              </h5>
            </div>
          </div>
        </div>
      </header>

      <section className="aboutus container" data-aos="fade-up">
        <div className="row">
          <div
            className="card mx-auto elegant-color-dark text-white mb-3 "
            style={{ maxWidth: "990px" }}
          >
            <div className="row g-0">
              <div className="col-md-6">
                <img src={Team} alt="..." className="img-fluid p-1" />
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h5
                    className="card-title display-4"
                    style={{ fontWeight: "bolder" }}
                  >
                    What
                  </h5>
                  <p className="h6 text-light">
                    oopsDev is a small platform where developers can collaborate
                    and share websites that can assist and save time for other
                    developers. There are numerous websites that can assist web
                    developers, including features like, fonts, icons, and color
                    palettes. Our aim is to serve both new and experienced
                    developers. The goal would be to share websites that other
                    people may find helpful as well. <i class="fas fa-code"></i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="community  elegant-color-dark text-white"
        data-aos="fade-up"
      >
        <div className="container">
          <div className="col-md-12">
            <div className="comInfo">
              <h3 className="font-weight-bold">A friendly community 👩🏽‍💻☕</h3>
              <p>
                The website is created using React.js, we have also used
                external libraries including, Material Design Bootstrap, Font
                Awesome for icons. The website is currently deployed on GitHub
                pages. Feel free to make some commits to the GitHub repository
                to add more features.
              </p>
              <a
                href="https://github.com/pruthvz/project-atlas"
                rel="noreferrer"
                target="_blank"
                className="btn deep-purple rounded-pill font-weight-bold"
              >
                Join us!
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="founder">
        <div className="container">
          <div className="col-md-12">
            <div className="founderDetails">
              <h5>
                <span className="badge deep-purple accent-2 badge-pill">
                  Developer
                </span>
              </h5>
              <h3 className="h1 font-weight-bold">Pruthvi Mohanlal</h3>
              <p className="small">
                Developer of ooopsDev, a fun side project which helped me gather
                all my chrome bookmarks into one place!
              </p>
            </div>

            <div className="commiters pt-5">
              <h6>
                <span className="badge deep-purple accent-3 badge-pill">
                  Contributors
                </span>
              </h6>
              <h6 className="font-weight-bold">Name Here</h6>
              <h6 className="font-weight-bold">Name Here</h6>
              <h6 className="font-weight-bold">Name Here</h6>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default About;
