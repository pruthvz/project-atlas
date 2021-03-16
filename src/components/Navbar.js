import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      {/* THE ACTUAL NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark elegant-color-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/project-atlas/">
            <i className="fas fa-exclamation red-text "></i> oopsDev
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto pr-2">
              <Link to="/project-atlas/" className="nav-item">
                <li className="nav-link active">Home</li>
              </Link>

              <Link to="/project-atlas/about" className="nav-item">
                <li className="nav-link">About</li>
              </Link>
              <Link to="/project-atlas/contact" className="nav-item">
                <li className="nav-link">Contact</li>
              </Link>
            </ul>
            <ul class="socials navbar-nav nav-flex-icons">
              <li class="nav-item">
                <a
                  href="https://twitter.com/justpruthvi"
                  className="nav-link text-white"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="https://www.instagram.com/prutzz10/"
                  className="nav-link text-white"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li class="nav-item">
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
