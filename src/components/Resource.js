import React from "react";
import { Link } from "react-router-dom";
import sourceVid from "../assets/resource.mp4";

// CSS
import "./Resource.css";

function Resource() {
  const redirectLinks = [
    {
      name: "Web Development",
      desc:
        "Start learning Web Development today, by understanding the basic of HTML and CSS, there are many websites to assit and support you with. ",
      link: "./development",
    },
    {
      name: "Web Design",
      desc:
        "If your into a more design side of Web Development, start today by using Figma and start creating your website designs, using all the fonts, colour palette and more.",
      link: "./design",
    },
    {
      name: "Resources",
      desc:
        "We also have other useful resources that we think would be useful for developers, such as free hosting websites for your projects.",
      link: "./resources",
    },
    {
      name: "API",
      desc:
        "We have also listed all the free fun API's you can use in your project to experiement or have it used in your main project.",
      link: "./api",
    },
  ];
  return (
    <div>
      <header className="resource">
        <div className="overlay"></div>
        <video
          playsinline="playsinline"
          autoplay="autoplay"
          muted="muted"
          loop="loop"
        >
          <source src={sourceVid} type="video/mp4" />
        </video>
        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="display-1">Resources</h1>
              <h6>useful resources for everyone!</h6>
            </div>
          </div>
        </div>
      </header>

      <section className="assets grey darken-4">
        <div className="container mx-auto">
          <div className="row p-3">
            {redirectLinks.map(function (source, index) {
              return (
                <div
                  className="card blue-grey darken-4 text-white mb-3"
                  style={{ maxWidth: "530px" }}
                >
                  <div className="card-body">
                    <h2 className="card-title">{source.name}</h2>
                    <p className="descText h6">{source.desc}</p>
                    <Link
                      to={source.link}
                      className="nav-item btn purple darken-1 rounded-pill sourceBtn"
                    >
                      <li className="nav-link p-0 ">Resource</li>
                    </Link>
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

export default Resource;
