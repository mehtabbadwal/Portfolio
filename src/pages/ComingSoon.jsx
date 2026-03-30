import { Link } from 'react-router-dom';

function ComingSoon({ title }) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '60vh',
      textAlign: 'center',
      padding: '2rem',
    }}>
      <h1 style={{ marginBottom: '0.75rem' }}>{title}</h1>
      <p style={{ marginBottom: '1.5rem' }}>This page is coming soon.</p>
      <Link to="/" className="btn">Back to Home</Link>
    </div>
  );
}

export default ComingSoon;
