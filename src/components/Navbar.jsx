import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/about">About</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/message">Message</Link>
    </nav>
  );
}

export default Navbar;
