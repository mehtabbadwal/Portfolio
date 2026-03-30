import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__cta">
            <h2>Let&rsquo;s work together</h2>
            <p>
              Have a project in mind? I&rsquo;d love to hear about it. Let&rsquo;s chat
              and see how we can bring your ideas to life.
            </p>
            <a href="mailto:hello@example.com" className="btn btn--filled">
              Start a Conversation &rarr;
            </a>
          </div>
        </div>

        <hr className="section-divider" />

        <div className="footer__bottom">
          <div className="footer__links">
            <div className="footer__col">
              <span className="footer__col-title">Pages</span>
              <Link to="/about">About</Link>
              <Link to="/work">Work</Link>
              <Link to="/writing">Writing</Link>
              <Link to="/case-studies">Case Studies</Link>
              <Link to="/resources">Resources</Link>
            </div>
            <div className="footer__col">
              <span className="footer__col-title">Social</span>
              <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer">Dribbble</a>
              <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </div>
          <div className="footer__credit">
            <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
