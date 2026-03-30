import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          Portfolio
        </Link>
        <nav className="header__nav">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
          <NavLink to="/writing">Writing</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/resources">Resources</NavLink>
        </nav>
        <a href="mailto:hello@example.com" className="header__cta btn">
          Get in Touch
        </a>
      </div>
    </header>
  );
}

export default Header;
