import React from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

function Nav() {
  return (
    <div>
      <ScrollToTop />
      <header className="source"></header>
      <nav className="fixed-top">
        <ul class="nav justify-content-center bg-dark pt-3 pb-3">
          <Link to="/" className="">
            <li className="nav-link ">
              <i className="colour-change fad fa-bug"></i>
            </li>
          </Link>
          <Link to="/bookmark/development" className="nav-item">
            <li className="nav-link">Web Development</li>
          </Link>
          <Link to="/bookmark/design" className="nav-item">
            <li className="nav-link ">Web Design</li>
          </Link>

          <Link to="/bookmark/resources" className="nav-item">
            <li className="nav-link ">Resources</li>
          </Link>

          <Link to="/bookmark/api" className="nav-item">
            <li className="nav-link ">API</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
