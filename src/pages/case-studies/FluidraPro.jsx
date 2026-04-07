import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HPEChatbot.css';

function FluidraPro() {
  const pageRef = useScrollReveal();

  return (
    <div className="cs" ref={pageRef}>
      {/* ── Hero ── */}
      <section className="cs__hero section">
        <div className="container">
          <Link to="/work" className="cs__back fade-up">&larr; Work</Link>

          <div className="cs__hero-top fade-up">
            <div className="cs__hero-meta">
              <span className="cs__hero-year">2023</span>
              <span className="cs__hero-meta-dot">&bull;</span>
              <span className="cs__hero-tag">Mobile</span>
            </div>
            <h1 className="cs__hero-title">Fluidra Pro</h1>
            <p className="cs__hero-subtitle">
              Technicians had 40&ndash;60 minutes per appointment and an app that buried
              everything they needed. I redesigned the information architecture around
              the field &mdash; not the system.
            </p>
          </div>

          <div className="cs__hero-card fade-up">
            <div className="cs__hero-card-meta">
              {[
                ['Role', 'Product Designer, UX Research, System Designer'],
                ['Timeline', '6 weeks'],
                ['Company', 'Fluidra'],
                ['Tools', 'Figma, Jira, Userlytics, Adobe Illustrator'],
              ].map(([label, value]) => (
                <div key={label} className="cs__hero-card-field">
                  <span className="cs__hero-card-label">{label}</span>
                  <span className="cs__hero-card-value">{value}</span>
                </div>
              ))}
              <div className="cs__hero-card-field">
                <span className="cs__hero-card-label">Live App</span>
                <a
                  href="https://apps.apple.com/us/app/fluidra-pro/id1538621105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs__ext-link"
                >
                  View Live App &rarr;
                </a>
              </div>
            </div>
            <div className="cs__hero-card-impact">
              <span className="cs__hero-card-label">Impact</span>
              <div className="cs__hero-card-metrics">
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">+40%</span>
                  <span className="cs__hero-card-metric-text">user engagement</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">+25%</span>
                  <span className="cs__hero-card-metric-text">service efficiency</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">Live</span>
                  <span className="cs__hero-card-metric-text">App Store since Jan 2024</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cs__hero-image fade-up">
            <img src={`${import.meta.env.BASE_URL}fluidra-service-hero.webp`} alt="Redesigned Fluidra Pro app interface" className="cs__hero-img" />
          </div>
        </div>
      </section>

      {/* ── Users ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Users</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Pool technicians range from young tech-native workers to experienced
              tradespeople in their 50s. They work outdoors &mdash; in sunlight, rain,
              sometimes snow &mdash; often with wet hands and a narrow time window. This
              wasn&rsquo;t a user group I could design for from a desk.
            </p>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Problem</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              The Fluidra Pro app was organized around the system&rsquo;s data structure,
              not how technicians actually work. The schedule was cluttered, critical
              information was buried behind expand/collapse interactions, and getting from
              schedule to service log took too many taps. Every extra click was time a
              technician didn&rsquo;t have.
            </p>
          </div>
        </div>
      </section>

      {/* ── Exploring Pre-Existing App ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Exploring the Pre-Existing App</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              By using user feedback, data analytics, and analyzing the existing app, the
              goal was to find areas of friction and opportunities for improvement.
            </p>
            <p className="cs__body">
              This process is essential for improving the app&rsquo;s functionality,
              building user loyalty, and meeting business goals.
            </p>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}fluidra-problem-eval-one.webp`}
            alt="Problem evaluation — user feedback analysis"
            className="cs__solution-img"
            style={{ marginTop: '2.5rem' }}
          />
          <img
            src={`${import.meta.env.BASE_URL}fluidra-problem-eval-two.webp`}
            alt="Problem evaluation — data analytics"
            className="cs__solution-img"
            style={{ marginTop: '2rem' }}
          />
        </div>
      </section>

      {/* ── On-Site Testing ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">On-Site Testing &amp; Validation</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              We went to actual pool sites and tested with technicians in the conditions
              they work in every day &mdash; including direct sunlight. That decision
              changed the design in ways lab testing never would have. Contrast that looked
              fine on a monitor became unreadable outdoors. We iterated on contrast, type
              weight, and button sizing based on what we saw in the field.
            </p>
            <p className="cs__body">
              To validate the redesign more broadly, I ran unmoderated testing through
              Userlytics with 12 users &mdash; comparing prototypes of the existing app and
              the redesigned screens across task completion time, error rate, satisfaction,
              and task success rate. The results shifted several interaction patterns that
              had looked right in Figma but created friction in real use.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Redesign ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">The Redesign</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              I started with the schedule screen &mdash; the entry point of every
              technician&rsquo;s workflow &mdash; and redesigned outward. New schedule:
              clean, color-coded, scannable. Appointment details visible without expanding.
              Service log reachable in fewer taps.
            </p>
          </div>

          <img
            src={`${import.meta.env.BASE_URL}fluidra-redesign.svg`}
            alt="Schedule screen redesign — before and after"
            className="cs__solution-img"
            style={{ marginTop: '2.5rem' }}
          />

          <div className="cs__prose fade-up" style={{ marginTop: '2.5rem' }}>
            <p className="cs__body">Four changes came directly from testing:</p>
            <p className="cs__body">
              1. Removed breadcrumbs in favour of a simple back arrow<br />
              2. Organized content into widgets for faster scanning<br />
              3. Simplified tab design<br />
              4. Removed bottom navigation on service screens to focus attention on
              &ldquo;Start Service.&rdquo;
            </p>
          </div>

          <img
            src={`${import.meta.env.BASE_URL}fluidra-usability.svg`}
            alt="Usability study results comparison"
            className="cs__solution-img"
          />

          {/* Design System */}
          <div className="cs__prose fade-up" style={{ marginTop: '2.5rem' }}>
            <p className="cs__body">
              The Atlantis Design System &mdash; built on Open Sans and a blue palette
              optimised for outdoor visibility &mdash; kept 42 screens consistent across
              the redesign.
            </p>
            <a
              href="https://www.figma.com/design/S9lPwWUHvXyjcT01tBlkPf/Atlantis-Design-System?node-id=4-29&t=Lvvf39WiB7nPvHek-1"
              target="_blank"
              rel="noopener noreferrer"
              className="cs__ext-link"
            >
              View Design System in Figma &rarr;
            </a>
          </div>

          <img
            src={`${import.meta.env.BASE_URL}fluidra-font.webp`}
            alt="Typography — Open Sans font system"
            className="cs__solution-img"
            style={{ marginTop: '2rem' }}
          />
          <img
            src={`${import.meta.env.BASE_URL}fluidra-color.webp`}
            alt="Color palette — optimized for outdoor visibility"
            className="cs__solution-img"
            style={{ marginTop: '2rem' }}
          />
          <img
            src={`${import.meta.env.BASE_URL}fluidra-components.webp`}
            alt="Component library"
            className="cs__solution-img"
            style={{ marginTop: '2rem' }}
          />
        </div>
      </section>

      {/* ── Impact ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Impact</p>
          <div className="cs__impact-grid fade-up">
            <div className="cs__impact-card">
              <span className="cs__impact-value">+40%</span>
              <span className="cs__impact-label">user engagement</span>
              <span className="cs__impact-detail">Post-launch</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">+25%</span>
              <span className="cs__impact-label">service efficiency</span>
              <span className="cs__impact-detail">Measured in field</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">Live</span>
              <span className="cs__impact-label">on App Store</span>
              <span className="cs__impact-detail">Since January 2024</span>
            </div>
          </div>
          <div className="cs__ext-links fade-up">
            <a
              href="https://apps.apple.com/us/app/fluidra-pro/id1538621105"
              target="_blank"
              rel="noopener noreferrer"
              className="cs__ext-link"
            >
              View Live App &rarr;
            </a>
            <a
              href="https://www.figma.com/proto/EFc5QgWR7MRZfJdPRaPNOm/v2-Fluidra-Pro-designs-(updated-branding)?node-id=138-84394&t=eO8OvO7UeaBQ0uDV-0&scaling=scale-down&content-scaling=fixed&page-id=56%3A1087&starting-point-node-id=138%3A84394&show-proto-sidebar=1"
              target="_blank"
              rel="noopener noreferrer"
              className="cs__ext-link"
            >
              View Prototype &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ── Reflections ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Reflections</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              The most valuable thing I did on this project was leave the office. On-site
              testing revealed contrast issues, sizing problems, and flow friction that
              would have shipped if we&rsquo;d only tested in a lab.
            </p>
            <p className="cs__body cs__body--emphasis">
              Design for the conditions people actually work in &mdash; not the conditions
              you test in.
            </p>
          </div>
        </div>
      </section>

      {/* ── Final Designs ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Final Designs</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <div style={{ flex: 1 }} className="fade-up">
              <a
                href="https://www.mehtabbadwal.com/s/Before.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="cs__image-placeholder" style={{ height: '600px', marginTop: 0, cursor: 'pointer' }}>
                  <span>Before (click to view full size)</span>
                </div>
              </a>
              <p className="cs__body" style={{ fontSize: '0.8125rem', color: '#B0A090', marginTop: '0.5rem' }}>
                (click on the image to view)
              </p>
            </div>
            <div style={{ flex: 1 }} className="fade-up">
              <a
                href="https://www.mehtabbadwal.com/s/After.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="cs__image-placeholder" style={{ height: '600px', marginTop: 0, cursor: 'pointer' }}>
                  <span>After (click to view full size)</span>
                </div>
              </a>
              <p className="cs__body" style={{ fontSize: '0.8125rem', color: '#B0A090', marginTop: '0.5rem' }}>
                (click on the image to view)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="cs__next section">
        <div className="container">
          <hr className="cs__divider" />
          <div className="cs__next-inner fade-up">
            <Link to="/work" className="cs__back">&larr; Check all my projects</Link>
            <p className="cs__label" style={{ marginTop: '2rem' }}>Next Project</p>
            <h3 className="cs__next-title">Qubera</h3>
            <Link to="/case-studies/qubera" className="cs__next-link">
              Read case study &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FluidraPro;
