import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <img
            src={`${import.meta.env.BASE_URL}logo.svg`}
            alt="MB"
            className="header__logo-img"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <span className="header__logo-fallback" style={{ display: 'none' }}>MB</span>
        </Link>
        <div className="header__right">
          <nav className="header__nav">
            <NavLink to="/work">Work</NavLink>
            <NavLink to="/writing">Writing</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
          <div className="header__actions">
            <a
              href="https://www.linkedin.com/in/mehtabbadwal/"
              className="header__linkedin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
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
          <NavLink to="/work" onClick={() => setMenuOpen(false)}>Work</NavLink>
          <NavLink to="/writing" onClick={() => setMenuOpen(false)}>Writing</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <a href="/resume" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
