import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <span className="footer__copy">&copy; 2026 Mehtab Badwal</span>
          <nav className="footer__nav">
            <Link to="/work">Projects</Link>
            <Link to="/writing">Writing</Link>
            <Link to="/about">About</Link>
            <a href="/resume" target="_blank" rel="noopener noreferrer">Resume</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
