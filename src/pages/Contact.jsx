import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openChatbot = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="contact__grid">

          {/* Left column — the message */}
          <div className="contact__left">
            <div className="contact__rule" aria-hidden="true" />

            <h1 className="contact__opening">
              Glad you&rsquo;re here.<br />
              <span>Let&rsquo;s see if we&rsquo;re a fit.</span>
            </h1>

            <p className="contact__paragraph">
              The best conversations I have aren&rsquo;t about deliverables.
              They&rsquo;re about <strong>the problem underneath the brief</strong> &mdash;
              the part that doesn&rsquo;t have a name yet, the part that&rsquo;s been bothering
              someone on the team for months.
            </p>

            <p className="contact__paragraph">
              If that&rsquo;s where you&rsquo;re stuck, I&rsquo;d like to hear about it.
              Tell me what&rsquo;s not landing, what&rsquo;s working but feels off,
              or what you&rsquo;ve been meaning to look at for a while.
            </p>

            <div className="contact__closer">
              <p className="contact__closer-quote">
                If you&rsquo;ve got a problem that doesn&rsquo;t have a name yet,
                <span> that&rsquo;s the one I want to hear about.</span>
              </p>
            </div>
          </div>

          {/* Right column — contact options */}
          <div className="contact__right">

            {/* Availability */}
            <div className="contact__availability">
              <div className="contact__avail-row">
                <span className="contact__green-dot" aria-hidden="true" />
                <span className="contact__avail-text">Open to senior &amp; staff UX roles</span>
              </div>
              <span className="contact__avail-note">San Diego &middot; open to remote</span>
            </div>

            {/* Primary email card */}
            <a href="mailto:mehtabbadwal@gmail.com" className="contact__primary">
              <span className="contact__primary-label">Email &mdash; the best way</span>
              <span className="contact__primary-email">mehtabbadwal@gmail.com</span>
              <span className="contact__primary-cta">
                Send a note <span className="contact__primary-arrow" aria-hidden="true">&rarr;</span>
              </span>
            </a>

            {/* Secondary links */}
            <div className="contact__secondary">
              <a
                href="https://linkedin.com/in/mehtabbadwal"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__secondary-link"
              >
                <span className="contact__secondary-link-label">
                  LinkedIn
                  <span className="contact__secondary-link-meta">/ for the formal route</span>
                </span>
                <span className="contact__secondary-arrow" aria-hidden="true">&rarr;</span>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume-mehtab-badwal.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__secondary-link"
              >
                <span className="contact__secondary-link-label">
                  Resume
                  <span className="contact__secondary-link-meta">/ if you need the paper trail</span>
                </span>
                <span className="contact__secondary-arrow" aria-hidden="true">&rarr;</span>
              </a>

              <Link to="/writing" className="contact__secondary-link">
                <span className="contact__secondary-link-label">
                  Mind Meets Design
                  <span className="contact__secondary-link-meta">/ if you&rsquo;d rather read first</span>
                </span>
                <span className="contact__secondary-arrow" aria-hidden="true">&rarr;</span>
              </Link>

              <button
                type="button"
                onClick={openChatbot}
                className="contact__secondary-link contact__secondary-link--chatbot"
              >
                <span className="contact__secondary-link-label">
                  <span className="contact__chatbot-sparkle" aria-hidden="true">
                    <svg width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 0 C10 0 11.5 7.5 13 9 C14.5 10.5 20 10 20 10 C20 10 14.5 11.5 13 13 C11.5 14.5 10 20 10 20 C10 20 8.5 14.5 7 13 C5.5 11.5 0 10 0 10 C0 10 5.5 8.5 7 9 C8.5 9.5 10 0 10 0Z" fill="currentColor" />
                    </svg>
                  </span>
                  Ask AI Mehtab
                  <span className="contact__secondary-link-meta">/ the lowest-friction option</span>
                </span>
                <span className="contact__secondary-arrow" aria-hidden="true">&rarr;</span>
              </button>
            </div>

            {/* Response time note */}
            <p className="contact__response">
              <span className="contact__response-icon" aria-hidden="true" />
              Usually reply within 48 hours.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
