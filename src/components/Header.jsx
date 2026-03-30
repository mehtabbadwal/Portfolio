import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">MB</Link>
        <div className="header__right">
          <nav className="header__nav">
            <NavLink to="/work">Projects</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          <div className="header__actions">
            <a href="mailto:mehtabbadwal@gmail.com" className="header__ask">
              <span className="green-dot" />
              <span className="header__ask-text">
                <span className="header__ask-word">Ask</span> Mehtab
              </span>
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="header__resume">
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
