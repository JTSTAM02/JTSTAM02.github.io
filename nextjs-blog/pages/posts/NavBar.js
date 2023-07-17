import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link  href= '/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link href='/posts/AboutMe' className="nav-link">About Me</Link>
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

