import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Aos from "aos";
import "aos/dist/aos.css";
import "../App.css";

// Components
import ScrollToTop from "./subcomponents/ScrollToTop";

// importing images
import DevelopmentImg from "../assets/development.png";
import DesignImg from "../assets/design.png";
import SourceImg from "../assets/source.png";
// import openSrc from "../assets/opensrc.png";

// Videos
import Coding from "../assets/coding.mp4";
import NightSky from "../assets/sky.mp4";
import Hacking from "../assets/hacking.mp4";

function Landing() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  let hashtags = [
    "Web Design",
    "Web Development",
    "HTML/CSS",
    "JavaScript",
    "Python",
    "Django",
    "API's",
    "Color Palettes",
    "Awesome Icons",
    "Icons",
    "Bootstrap",
    "Material Design Bootstrap",
  ];

  let features = [
    {
      name: "Bootstrap 4 ",
      desc:
        "Bootstrap 4 is the newest version of Bootstrap, which is the most popular HTML, CSS, and JavaScript framework for developing responsive, mobile-first websites. Bootstrap 4 is completely free to download and use!",
      img:
        "https://dotnetnuke.nl/Portals/16/EasyDNNnews/18/bootstrap-social-logo.png",
      imgAlt: "Bootstrap 4 Logo",
      site: "https://getbootstrap.com/",
    },
    {
      name: "DogeHouse",
      desc:
        'A YouTuber known as Ben Awad, created a projected called "DogeHouse" as a joke, and know they are planning to scale up. Feel free to help out, they are open source!',
      img:
        "https://pbs.twimg.com/profile_images/1152793238761345024/VRBvxeCM_400x400.jpg",
      imgAlt: "Ben Awad Image",
      site: "https://www.youtube.com/user/99baddawg",
    },
    {
      name: "Figma",
      desc:
        "Figma is a digital design and prototyping tool. It is a UI and UX design application that you can use it to create websites, apps, or smaller user interface components that can be integrated into other projects.",
      img: "https://miro.medium.com/max/670/0*UTBrDcrJ6SbePBzR",
      imgAlt: "img logo",
      site: "https://www.figma.com/",
    },
  ];
  const randomFeature = features[Math.floor(Math.random() * features.length)];

  return (
    <div>
      <ScrollToTop />
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
        data-interval="5000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
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
                    <p className="lead mb-0 ">
                      Useful and bookmark worthy websites!
                    </p>
                    <Link to="/bookmark/development">
                      <p className="btn-change8 btn btn-lg mt-4">Bookmark</p>
                    </Link>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="carousel-item ">
            <header>
              <div className="overlay"></div>
              <video
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={Hacking} type="video/mp4" />
              </video>
              <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                  <div className="w-100 text-white">
                    <h1 className="display-1">Web Design</h1>
                    <p className="lead mb-0 ">
                      Amazing websites that will help you get started with
                      fonts, icons, colour palettes and more.
                    </p>
                    <Link to="/bookmark/design">
                      <p className="btn-change8 btn btn-lg mt-4">Bookmark</p>
                    </Link>
                  </div>
                </div>
              </div>
            </header>
          </div>
          <div className="carousel-item">
            <header>
              <div className="overlay"></div>
              <video
                playsinline="playsinline"
                autoplay="autoplay"
                muted="muted"
                loop="loop"
              >
                <source src={NightSky} type="video/mp4" />
              </video>
              <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                  <div className="w-100 text-white">
                    <h1 className="display-1">Developer Resources</h1>
                    <p className="lead mb-0 ">
                      A list of useful websites, to help you get started with
                      your project as soon as possible!
                    </p>
                    <Link to="/bookmark/resources">
                      <p className="btn-change8 btn btn-lg mt-4">Bookmark</p>
                    </Link>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      {/* Shreysh why u looking here */}

      <section
        className="what-we-provide pt-5 pb-5 "
        id="providing"
        data-aos="fade-up"
      >
        <div className="container text-center">
          <div className="w-100 text-dark provideInfo">
            <h1 className="mt-5 display-4"> One Place</h1>
            <p>
              <i className="fad fa-angle-double-down purple-text"></i>{" "}
              Collaborative list of resources for developers in one place!
            </p>
          </div>
        </div>
        <div className="container p-5">
          <div className="col-md-12">
            <div className="row row-cols-1 row-cols-md-3">
              <div className="col">
                <div className="card  ">
                  <img
                    src={DevelopmentImg}
                    className="front-Img card-img-top"
                    alt="Web Development"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Web Development</h5>
                    <p className="card-text">
                      Start learning Web Development today, by understanding the
                      basic of HTML and CSS, there are many websites to assit
                      and support you with.
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
                      If your into a more design side of Web Development, start
                      today by using Figma and start creating your website
                      designs, using all the fonts, colour palette and more.
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
                      We have also listed all the free fun API's you can use in
                      your project to experiement or have it used in your main
                      project. We also have many other resources too.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="open-src unique-color-dark text-white pt-5 pb-5 p-3"
        data-aos="fade-up"
      >
        <div className="col-md-10 mx-auto">
          <div className="card  rgba-stylish-strong rounded">
            <div className="mask">
              <div class="card-body text-white">
                <h1 className="card-title display-4">Open Source</h1>
                <p className="card-text text-light">
                  We believe in the strength of the community. Hence why we
                  chose open source project. We would love to see other
                  developers contributing with the project, to provide great
                  support for other developers.
                </p>
                <a
                  href="https://github.com/pruthvz/project-atlas"
                  rel="noreferrer"
                  target="_blank"
                  className="btn deep-purple text-white rounded-pill"
                >
                  Join Community
                </a>
              </div>
            </div>
          </div>

          <div className="card  rgba-stylish-strong">
            <div className="mask">
              <div className="card-body text-dark">
                <h6 className="card-title text-white">Hashtags</h6>
                <h1 className="card-title badge badge-light rounded-pill mr-2">
                  <i className="fab fa-osi"></i> Open Source
                </h1>
                {hashtags.map(function (tags, index) {
                  return (
                    <h1
                      className="card-title badge badge-light  rounded-pill mr-2"
                      key={index}
                    >
                      {tags}
                    </h1>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features grey lighten-4">
        <div className="container">
          <div className="col-md-12">
            <div className="featuresInfo text-center pb-4">
              <h1 className="display-4">Features</h1>
              <p className="card-text">
                Our recent features include websites, tools, developers as well
                as news.
              </p>
            </div>
          </div>
          <br />
          <div className="row row-cols-1 row-cols-md-3 g-4" data-aos="fade-up">
            {features.slice(0, 3).map(function (feature, index) {
              return (
                <div className="col">
                  <div
                    className="card mdb-color darken-4 text-white"
                    key={index}
                  >
                    <div className="view zoom">
                      <img
                        src={feature.img}
                        className="card-img-top"
                        alt={feature.imgAlt}
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{feature.name}</h5>
                      <h6 className="small">{feature.desc}</h6>
                      <a
                        rel="noreferrer"
                        target="_blank"
                        href={feature.site}
                        className="feature-btn btn deep-purple rounded-pill"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
