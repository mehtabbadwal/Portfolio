import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HPEChatbot.css';

function FluidraRewards() {
  const pageRef = useScrollReveal();

  return (
    <div className="cs" ref={pageRef}>
      {/* ── Hero ── */}
      <section className="cs__hero section">
        <div className="container">
          <Link to="/work" className="cs__back fade-up">&larr; Work</Link>

          <div className="cs__hero-image fade-up" style={{ marginBottom: '3rem' }}>
            <span>Fluidra Pro rewards integration dashboard</span>
          </div>

          <div className="cs__prose fade-up" style={{ marginBottom: '2rem' }}>
            <p className="cs__body">
              Pool professionals were logging into two separate apps to do one job. I
              led the end-to-end design of integrating Fluidra Rewards into Fluidra Pro
              &mdash; consolidating two products into one coherent platform across web,
              mobile web, and iOS/Android.
            </p>
          </div>

          <span className="cs__hero-year fade-up" style={{ display: 'block', marginBottom: '2rem' }}>2024</span>

          {/* Horizontal Card — metadata only, no impact */}
          <div className="cs__hero-card fade-up" style={{ marginBottom: '3rem' }}>
            <div className="cs__hero-card-meta">
              {[
                ['Role', 'Product Designer, UX Research, Design System'],
                ['Timeline', '5 months'],
                ['Company', 'Fluidra'],
                ['Tools', 'Figma, Jira, Userlytics'],
              ].map(([label, value]) => (
                <div key={label} className="cs__hero-card-field">
                  <span className="cs__hero-card-label">{label}</span>
                  <span className="cs__hero-card-value">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://www.fluidrapro.com/en"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: '#C4603E',
              display: 'inline-block',
              marginBottom: '2rem',
              transition: 'opacity 0.2s ease',
            }}
          >
            View Live &rarr;
          </a>

          <h1 className="cs__hero-title fade-up">Fluidra Rewards Integration</h1>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Problem</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Fluidra Pro was a field service app. Fluidra Rewards was a separate
              loyalty platform. Professionals managed two logins, two interfaces, two
              data sets &mdash; for work that was fundamentally connected.
            </p>
            <p className="cs__body">
              Sam, a pool company owner, described it plainly: separate credentials
              meant missed notifications and time lost to admin instead of business.
              Bob, a dealer, flagged a trust issue &mdash; when points and transaction
              histories live in different systems, discrepancies erode confidence in
              both.
            </p>
            <p className="cs__body cs__body--emphasis">
              Leadership&rsquo;s call: deprecate Fluidra Rewards and integrate
              everything into Fluidra Pro.
            </p>
          </div>
        </div>
      </section>

      {/* ── Design Challenge ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Design Challenge</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              This wasn&rsquo;t a feature addition. It was an architectural problem.
            </p>
            <p className="cs__body">
              Two products with different information hierarchies and different user
              mental models had to become one experience. The added complexity: a
              technician&rsquo;s dashboard and an admin&rsquo;s dashboard serve
              completely different workflows. And within each role, tier level determines
              which features and rewards are available. The dashboard had to be unified
              and highly contextual at the same time.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div style={{ flex: 1 }} className="fade-up">
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#7A6A60',
                marginBottom: '0.75rem',
              }}>
                Fluidra Pro - Rewards App
              </p>
              <div className="cs__image-placeholder cs__image-placeholder--medium" style={{ marginTop: 0 }}>
                <span>Original Fluidra Rewards interface</span>
              </div>
            </div>
            <div style={{ flex: 1 }} className="fade-up">
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: '#7A6A60',
                marginBottom: '0.75rem',
              }}>
                Fluidra Pro - Service App
              </p>
              <div className="cs__image-placeholder cs__image-placeholder--medium" style={{ marginTop: 0 }}>
                <span>Original Fluidra Pro service interface</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Solution</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Widget-based dashboards &mdash; modular, role-aware, and tier-aware. Each
              user sees a dashboard assembled from components relevant to their role and
              tier. An admin on Pro Edge sees marketing dollars, promotions, and full
              rewards history. A technician sees job assignments, service data, and a
              simplified rewards view. One platform, contextual experiences.
            </p>
            <p className="cs__body">
              55 screens across web, mobile web, and native iOS/Android &mdash; each
              requiring decisions about how the same data should present differently
              based on surface, role, and tier.
            </p>
          </div>
        </div>
      </section>

      {/* ── Web Design ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Web Design</p>
          <div className="cs__image-placeholder cs__image-placeholder--tall fade-up">
            <span>Web dashboard design &mdash; role-aware widgets</span>
          </div>
        </div>
      </section>

      {/* ── App Design ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">App Design</p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem' }}>
            <a
              href="https://www.mehtabbadwal.com/s/App.png"
              target="_blank"
              rel="noopener noreferrer"
              className="cs__image-placeholder cs__image-placeholder--large fade-up"
              style={{ flex: 1, marginTop: 0, textDecoration: 'none', cursor: 'pointer' }}
            >
              <span>App design overview</span>
            </a>
            <a
              href="https://www.mehtabbadwal.com/s/App-2.png"
              target="_blank"
              rel="noopener noreferrer"
              className="cs__image-placeholder cs__image-placeholder--large fade-up"
              style={{ flex: 1, marginTop: 0, textDecoration: 'none', cursor: 'pointer' }}
            >
              <span>App screens detail</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── The Rebrand Mid-Project ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">The Rebrand Mid-Project</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Two months before launch, the marketing team rebranded Fluidra Pro. We
              were deep in testing with 50+ screens already validated. Everything had to
              be updated to match the new visual identity without compromising the
              structure we&rsquo;d built.
            </p>
            <p className="cs__body cs__body--emphasis">
              We launched on schedule. The experience clarified something I&rsquo;ve
              carried since: when your information architecture is solid, visual changes
              are manageable. When the structure is wrong, no polish fixes it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Impact</p>
          <div className="cs__impact-grid fade-up">
            <div className="cs__impact-card">
              <span className="cs__impact-value">30%</span>
              <span className="cs__impact-label">increase</span>
              <span className="cs__impact-detail">In user interaction</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">20%</span>
              <span className="cs__impact-label">improvement</span>
              <span className="cs__impact-detail">In user retention from loyalty integration</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">On schedule</span>
              <span className="cs__impact-label">Launched</span>
              <span className="cs__impact-detail">Despite mid-project rebrand</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">55</span>
              <span className="cs__impact-label">screens</span>
              <span className="cs__impact-detail">Across three platforms</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Design System ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Design System</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Collaborated with the marketing and branding teams to develop a new design
              system that reflects Fluidra&rsquo;s rebranded identity.
            </p>
          </div>
          <a
            href="https://www.figma.com/design/S9lPwWUHvXyjcT01tBlkPf/Atlantis-Design-System?node-id=102-9605&t=7BHXo181bx6vsdwd-1"
            target="_blank"
            rel="noopener noreferrer"
            className="cs__image-placeholder cs__image-placeholder--large fade-up"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <span>Atlantis Design System &mdash; Fluidra&rsquo;s new visual identity</span>
          </a>
          <a
            href="https://www.figma.com/design/S9lPwWUHvXyjcT01tBlkPf/Atlantis-Design-System?node-id=102-9605&t=7BHXo181bx6vsdwd-1"
            target="_blank"
            rel="noopener noreferrer"
            className="fade-up"
            style={{
              display: 'inline-block',
              marginTop: '1rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.9375rem',
              fontWeight: 500,
              color: '#C4603E',
              transition: 'opacity 0.2s ease',
            }}
          >
            View design system in Figma &rarr;
          </a>
        </div>
      </section>

      {/* ── Design-Developer Handoff ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Design-Developer Handoff</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              To ensure a smooth design-developer handoff, I created a high-fidelity
              user flow that detailed interactions on each screen. This helped developers
              understand the interactions and establish acceptance criteria for testing.
            </p>
            <p className="cs__body">
              Below is a detailed high-fidelity user flow for the onboarding and
              two-factor authentication screens.
            </p>
          </div>
          <a
            href="https://www.mehtabbadwal.com/s/Section-2.png"
            target="_blank"
            rel="noopener noreferrer"
            className="cs__image-placeholder cs__image-placeholder--tall fade-up"
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <span>High-fidelity user flow &mdash; onboarding and 2FA</span>
          </a>
        </div>
      </section>

      {/* ── Final Designs ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Final Designs</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Below are the unique user views for web, mobile web and app.
            </p>
          </div>

          {/* Web */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Web</h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <div className="cs__image-placeholder cs__image-placeholder--large" style={{ flex: 1, marginTop: 0 }}>
                <span>Activate My Perks &mdash; web view</span>
              </div>
              <div className="cs__image-placeholder cs__image-placeholder--large" style={{ flex: 1, marginTop: 0 }}>
                <span>Resource Center &mdash; web view</span>
              </div>
            </div>
          </div>

          {/* Mobile Web */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Mobile Web</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}>
              {[
                'Service Pro Elite — mobile web',
                'Pending rewards activation',
                'No perks available state',
                'No perks state',
                'End of year update',
                'Service Pro Elite dashboard',
                'Resource center — mobile',
                'End of year update — mobile',
                'Spin & Win — mobile',
                'Single perk detail',
                'Spin N Win horizontal',
              ].map((label) => (
                <div
                  key={label}
                  className="cs__image-placeholder cs__image-placeholder--medium"
                  style={{ marginTop: 0 }}
                >
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Native App */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Mobile Native App (iOS and Android)</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
            }}>
              {[
                'TSE violator with iON + Claims',
                'Rewards retail select dashboard',
                'Member non-loyalty signup widget',
                'Fail states for dashboard sections',
              ].map((label) => (
                <div
                  key={label}
                  className="cs__image-placeholder cs__image-placeholder--large"
                  style={{ marginTop: 0 }}
                >
                  <span>{label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
              <div
                className="cs__image-placeholder cs__image-placeholder--large"
                style={{ marginTop: 0, maxWidth: '50%' }}
              >
                <span>US Rewards dashboard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reflections ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Reflections</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              The role-based and tier-based dashboard system is the decision I&rsquo;m
              most proud of. It solved a genuinely hard problem &mdash; how do you give
              very different users a unified experience without making either feel like
              they&rsquo;re using something built for someone else?
            </p>
            <p className="cs__body cs__body--emphasis">
              One platform. Every user gets the version that&rsquo;s built for them.
            </p>
          </div>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="cs__next section">
        <div className="container">
          <hr className="cs__divider" />
          <div className="cs__next-inner fade-up" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Link to="/work" className="cs__next-link" style={{ color: '#7A6A60' }}>
              &larr; Check all my projects
            </Link>
            <div style={{ textAlign: 'right' }}>
              <p className="cs__label" style={{ marginBottom: '0.5rem' }}>Next Project</p>
              <h3 className="cs__next-title">Fluidra Pro</h3>
              <Link to="/case-studies/fluidra" className="cs__next-link">
                Read case study &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FluidraRewards;
