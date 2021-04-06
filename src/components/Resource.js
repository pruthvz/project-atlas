import React from "react";
import sourceVid from "../assets/resource.mp4";

// CSS
import "./Resource.css";

function Resource() {
  const redirectLinks = [
    {
      name: "Web Development",
      desc:
        "lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem",
      link: "/project-atlas/bookmark/development",
    },
    {
      name: "Web Design",
      desc:
        "lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem",
      link: "/project-atlas/bookmark/design",
    },
    {
      name: "Resources",
      desc:
        "lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem",
      link: "/project-atlas/bookmark/resources",
    },
    {
      name: "API",
      desc:
        "lorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem loremlorem lorem lorem lorem",
      link: "/project-atlas/bookmark/api",
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
                  class="card blue-grey darken-4 text-white mb-3"
                  style={{ maxWidth: "530px" }}
                >
                  <div class="card-body">
                    <h2 class="card-title">{source.name}</h2>
                    <p class="small grey-text">{source.desc}</p>
                    <a
                      ahref
                      href={source.link}
                      class="btn purple darken-1 rounded-pill"
                    >
                      Resources
                    </a>
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
