import "./App.css";

function App() {
  return (
    <div className="App">
      {/* SOCIAL MEDIAS NAVBAR */}
      <nav class="topnav bg-dark  ">
        <div class="text-left">
          <a href="/#" class="teal-text text-darken-0">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="/#" class="teal-text text-darken-0">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="/#" class="teal-text text-darken-0">
            <i class="fab fa-github"></i>
          </a>
          <a href="/#" class="teal-text text-darken-0">
            <i class="fas fa-envelope"></i>
          </a>
        </div>
      </nav>
      {/* THE ACTUAL NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <i className="fas fa-exclamation text-danger"></i> oopsDev
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto pr-2">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
