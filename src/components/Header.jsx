import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">MB</Link>
        <nav className="header__nav">
          <NavLink to="/work">Projects</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
        <div className="header__actions">
          <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--pill header__ask">
            <span className="green-dot" />
            Ask Mehtab
          </a>
          <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn btn--pill header__resume">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
