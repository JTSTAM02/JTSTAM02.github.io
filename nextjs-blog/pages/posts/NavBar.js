import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link  href= '' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link href="AboutMe.html" className="nav-link">About Me</Link>
            </li>
            <li className="nav-item">
                <Link href="Projets.html" className="nav-link">Projects</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

