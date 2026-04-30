import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <p className="footer__name">Mehtab Badwal</p>
            <p className="footer__tagline">Designer who reads people before screens.</p>
            <div className="footer__status">
              <span className="green-dot" />
              <span>Open to senior &amp; staff UX roles &middot; San Diego</span>
            </div>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Explore</p>
            <Link to="/work">Work</Link>
            <Link to="/writing">Writing</Link>
            <Link to="/about">About</Link>
            <a href={`${import.meta.env.BASE_URL}resume-mehtab-badwal.pdf`} target="_blank" rel="noopener noreferrer">Resume</a>
          </div>

          <div className="footer__col">
            <p className="footer__col-title">Elsewhere</p>
            <a href="mailto:mehtabbadwal@gmail.com">Email</a>
            <a href="https://linkedin.com/in/mehtabbadwal" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://mehtabbadwal.substack.com" target="_blank" rel="noopener noreferrer">
              Substack <span className="footer__col-note">poetry</span>
            </a>
            <a href="https://etsy.com/shop/mehtabbadwal" target="_blank" rel="noopener noreferrer">
              Etsy <span className="footer__col-note">digital goods</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; 2026 Mehtab Badwal</span>
          <span>
            Designed and vibe-coded by Mehtab &nbsp;&middot;&nbsp;{' '}
            <Link to="/this-site">This Site &rarr;</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
