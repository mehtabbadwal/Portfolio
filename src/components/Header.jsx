import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="header__resume">
              Resume
            </a>
          </div>
        </div>

        <button
          className="header__burger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`header__burger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`header__burger-line ${menuOpen ? 'open' : ''}`} />
          <span className={`header__burger-line ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          <NavLink to="/work" onClick={() => setMenuOpen(false)}>Projects</NavLink>
          <NavLink to="/writing" onClick={() => setMenuOpen(false)}>Writing</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <a href="/resume" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
