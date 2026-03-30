import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          Mehtab Badwal
        </Link>
        <nav className="header__nav">
          <NavLink to="/work">Projects</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <NavLink to="/about">About</NavLink>
          <a href="mailto:mehtabbadwal@gmail.com">Ask Mehtab</a>
          <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
        </nav>
        <a href="mailto:mehtabbadwal@gmail.com" className="header__cta btn">
          Get in Touch
        </a>
      </div>
    </header>
  );
}

export default Header;
