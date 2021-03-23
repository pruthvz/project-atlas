import React from "react";

function Footer() {
  return (
    <div>
      {/* FOOTER */}

      <footer className="page-footer font-small unique-color-dark pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
              <h5 className="text-uppercase font-weight-bold">ABOUT US</h5>
              <hr
                className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                style={{ width: "100px" }}
              ></hr>
              <p>
                ooopsDev.com began as a joke, but I realized that this kind of
                website would be helpful to more than just me. It may be very
                beneficial to other developers as well. I made this website by
                combining all of my Chrome bookmarks into a single place, and
                this is how ooopsDev was built. <i className="fad fa-bug"></i>
              </p>
            </div>
          </div>
        </div>
        <br />

        <div className="footer-copyright text-center py-3">
          © 2021 Copyright
          <a href="/#"> ooopsDev.com</a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
