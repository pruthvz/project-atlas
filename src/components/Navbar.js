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

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
        onClick={handleClick}
      >
        <div className="container-fluid">
          <a className="navbar-brand " href="#/">
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
          <div
            className={click ? " navbar-collapse" : "collapse navbar-collapse"}
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mr-auto pr-2">
              <Link to="/" className="nav-item">
                <li className="nav-link">Home</li>
              </Link>
              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Resources
                </span>
                <div
                  className="dropdown-menu pl-5 pr-5 p-2"
                  aria-labelledby="navbarDropdown"
                >
                  <Link
                    className="dropdown-item rounded"
                    to="/bookmark/development"
                  >
                    Web Development
                  </Link>
                  <Link className="dropdown-item rounded" to="/bookmark/design">
                    Web Design
                  </Link>
                  <Link className="dropdown-item rounded" to="/bookmark/api">
                    Free API
                  </Link>
                  <div className="dropdown-divider purple accent-4"></div>
                  <Link
                    className="dropdown-item rounded"
                    to="/bookmark/resources"
                  >
                    Other Resources
                  </Link>
                  <Link className="dropdown-item rounded" to="/featured">
                    Features
                  </Link>
                </div>
              </li>

              {/* <Link to="/bookmark/" className="nav-item">
                <li className="nav-link">Resources</li>
              </Link> */}
              <Link to="/about" className="nav-item" onClick={closeMobileMenu}>
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
