import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBg = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBg);

  return (
    <div>
      {/* THE ACTUAL NAVBAR */}
      <nav
        className={
          navbar
            ? "navbar navbar-expand-lg fixed-top navbar-dark bgActive"
            : "navbar navbar-expand-lg fixed-top navbar-dark "
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="#/project-atlas/">
            <i className="fad fa-bug red-text"></i> oopsDev
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto pr-2">
              <Link to="/project-atlas/" className="nav-item">
                <li className="nav-link">Home</li>
              </Link>

              <Link to="/project-atlas/bookmark/" className="nav-item">
                <li className="nav-link">Resources</li>
              </Link>
              <Link to="/project-atlas/about" className="nav-item">
                <li className="nav-link">About</li>
              </Link>
            </ul>
            <ul className="socials navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a
                  href="https://twitter.com/justpruthvi"
                  className="nav-link text-white"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.instagram.com/prutzz10/"
                  className="nav-link text-white"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/pruthvz"
                  className="nav-link text-white"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
