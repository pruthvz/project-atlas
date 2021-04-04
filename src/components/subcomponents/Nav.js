import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <header className="source">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 text-center text-white">
              <h1 className="display-4">Web Resources</h1>
            </div>
          </div>
        </div>
      </header>

      <ul class="nav justify-content-center bg-dark pt-3 pb-3 ">
        <Link to="/project-atlas/bookmark/development" className="nav-item">
          <li className="nav-link">Web Development</li>
        </Link>
        <Link to="/project-atlas/bookmark/design" className="nav-item">
          <li className="nav-link ">Web Design</li>
        </Link>

        <Link to="/project-atlas/bookmark/resources" className="nav-item">
          <li className="nav-link ">Resources</li>
        </Link>

        <Link to="/project-atlas/bookmark/api" className="nav-item">
          <li className="nav-link  disabled">API</li>
        </Link>
      </ul>
    </div>
  );
}

export default Nav;
