import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__brand">
          <p className="footer__name">Mehtab Badwal</p>
          <span className="footer__sep" aria-hidden="true">·</span>
          <p className="footer__tagline">Designer who reads people before screens.</p>
        </div>

        <div className="footer__meta">
          <div className="footer__legal">
            <span>&copy; 2026 Mehtab Badwal</span>
            <span className="footer__sep" aria-hidden="true">·</span>
            <span>Designed and vibe-coded by Mehtab</span>
            <span className="footer__sep" aria-hidden="true">·</span>
            <Link to="/this-site" className="footer__link">This Site &rarr;</Link>
          </div>

          <nav className="footer__elsewhere" aria-label="Elsewhere">
            <a href="mailto:mehtabbadwal@gmail.com" className="footer__link">Email</a>
            <span className="footer__sep" aria-hidden="true">·</span>
            <a href="https://linkedin.com/in/mehtabbadwal" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
            <span className="footer__sep" aria-hidden="true">·</span>
            <a href="https://mehtabbadwal.substack.com" target="_blank" rel="noopener noreferrer" className="footer__link">
              Substack <em className="footer__note">poetry</em>
            </a>
            <span className="footer__sep" aria-hidden="true">·</span>
            <a href="https://etsy.com/shop/mehtabbadwal" target="_blank" rel="noopener noreferrer" className="footer__link">
              Etsy <em className="footer__note">digital goods</em>
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
