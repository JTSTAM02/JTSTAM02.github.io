

var NavBar = React.createClass({
    render: function() {
      return (
  
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="AboutMe.html">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Projects.html">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blogsLandingPage">Blogs</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
  });