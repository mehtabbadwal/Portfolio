import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const BlogPost = ({
  title,
  date,
  author,
  readTime,
  heroImage,
  children,
  prevPost,
  nextPost,
}) => {
  const pageRef = useScrollReveal();

  return (
    <div className="cs" ref={pageRef} style={{ minHeight: '100vh' }}>
      {/* Back Link */}
      <section className="cs__hero section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Link to="/writing" className="cs__back fade-up">&larr; Back to Writing</Link>

          {/* Title */}
          <h1 className="cs__hero-title fade-up" style={{ marginBottom: '1.25rem' }}>
            {title}
          </h1>

          {/* Metadata */}
          <div className="fade-up" style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.88px',
            textTransform: 'uppercase',
            color: 'var(--color-light)',
            marginBottom: heroImage ? '3.75rem' : '2.5rem',
          }}>
            {date} &middot; {author} &middot; {readTime} min read
          </div>

          {/* Hero Image (optional) */}
          {heroImage && (
            <div className="cs__hero-image fade-up" style={{ marginBottom: '3.75rem' }}>
              <img
                src={heroImage}
                alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}
        </div>
      </section>

      {/* Article Body */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '0 2.5rem 6.25rem',
        }}>
          {children}
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="cs__next section">
        <div className="container">
          <hr className="cs__divider" />
          <div className="cs__next-inner fade-up" style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {prevPost ? (
              <Link to={prevPost.url} className="cs__next-link" style={{ color: '#7A6A60' }}>
                &larr; {prevPost.title}
              </Link>
            ) : <div />}
            {nextPost ? (
              <div style={{ textAlign: 'right' }}>
                <Link to={nextPost.url} className="cs__next-link">
                  {nextPost.title} &rarr;
                </Link>
              </div>
            ) : <div />}
          </div>
        </div>
      </section>
    </div>
  );
};

export const Paragraph = ({ children }) => (
  <p style={{
    fontFamily: 'var(--font-body)',
    fontSize: '1.125rem',
    fontWeight: 400,
    lineHeight: 1.8,
    color: 'var(--color-dark)',
    marginBottom: '1.5rem',
  }}>
    {children}
  </p>
);

export const SectionBreak = ({ children }) => (
  <p style={{
    fontFamily: 'var(--font-body)',
    fontSize: '1.375rem',
    fontWeight: 500,
    lineHeight: 1.4,
    color: 'var(--color-dark)',
    marginTop: '3rem',
    marginBottom: '1.5rem',
  }}>
    {children}
  </p>
);

export const PullQuote = ({ children }) => (
  <div style={{
    borderLeft: '4px solid var(--color-accent)',
    paddingLeft: '1.75rem',
    margin: '2.5rem 0',
    fontFamily: 'var(--font-heading)',
    fontSize: '1.375rem',
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.5,
    color: 'var(--color-dark)',
  }}>
    {children}
  </div>
);

export default BlogPost;
