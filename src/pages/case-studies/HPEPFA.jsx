import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HPEChatbot.css';

function HPEPFA() {
  const pageRef = useScrollReveal();

  return (
    <div className="cs" ref={pageRef}>
      {/* ── Hero ── */}
      <section className="cs__hero section">
        <div className="container">
          <Link to="/work" className="cs__back fade-up">&larr; Work</Link>

          <div className="cs__hero-top fade-up">
            <div className="cs__hero-meta">
              <span className="cs__hero-year">2025</span>
              <span className="cs__hero-meta-dot">&bull;</span>
              <span className="cs__hero-tag">Enterprise Systems</span>
            </div>
            <h1 className="cs__hero-title">HPE Premium Account Family</h1>
            <p className="cs__hero-subtitle">
              A CSM once told me she kept 7 browser tabs open just to answer one
              customer question. I designed a tool that eliminated those tabs &mdash;
              reducing navigation by 75% by doing something that felt wrong at first:
              giving power users more information, not less.
            </p>
          </div>

          {/* Horizontal Card */}
          <div className="cs__hero-card fade-up">
            <div className="cs__hero-card-meta">
              {[
                ['Role', 'Senior Product Designer'],
                ['Timeline', '3 weeks'],
                ['Company', 'Hewlett Packard Enterprise'],
                ['Scope', 'End-to-end UX: problem framing → strategy → interaction design → handoff'],
                ['Tools', 'Figma, FigJam'],
              ].map(([label, value]) => (
                <div key={label} className="cs__hero-card-field">
                  <span className="cs__hero-card-label">{label}</span>
                  <span className="cs__hero-card-value">{value}</span>
                </div>
              ))}
            </div>

            <div className="cs__hero-card-impact">
              <span className="cs__hero-card-label">Impact</span>
              <div className="cs__hero-card-metrics">
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">75%</span>
                  <span className="cs__hero-card-metric-text">reduction in clicks</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">Eliminated</span>
                  <span className="cs__hero-card-metric-text">context switching</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">Strong adoption</span>
                  <span className="cs__hero-card-metric-text">across CSM teams</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cs__hero-image fade-up">
            <span>Unified family dashboard &mdash; before and after</span>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Problem</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Enterprise customers often have 10&ndash;20+ premium accounts across
              multiple regions. Customer Success Managers had no way to see them
              together.
            </p>
            <p className="cs__body">
              A CSM managing a customer with 15 accounts across 3 regions had to open
              15+ different screens just to get a complete picture. Then do it again the
              next day. The system had no unified layer &mdash; CSMs navigated individual
              account pages with no way to group or view related accounts together. They
              tracked relationships in spreadsheets outside the system entirely.
            </p>
            <p className="cs__body cs__body--highlight">
              As one CSM put it: &ldquo;I don&rsquo;t need it to be pretty. I need to
              stop clicking 50 times a day.&rdquo;
            </p>
            <p className="cs__body">
              Result: hours lost every week to navigation, context switching, and
              manually reconstructing information the system already had.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
            <div className="cs__image-placeholder cs__image-placeholder--medium fade-up" style={{ flex: 1, marginTop: 0 }}>
              <span>Original system architecture &mdash; individual account navigation</span>
            </div>
            <div className="cs__image-placeholder cs__image-placeholder--medium fade-up" style={{ flex: 1, marginTop: 0 }}>
              <span>New architecture &mdash; unified account management layer</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Users ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Users</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Customer Success Managers and NSP Superusers &mdash; highly technical
              professionals managing enterprise relationships worth millions, handling
              5&ndash;20+ premium accounts per customer.
            </p>
            <p className="cs__body cs__body--emphasis">
              The insight that changed my approach: these users don&rsquo;t need
              simplified interfaces. What looks &ldquo;clean and minimal&rdquo; is
              actually slower for them. They want everything visible so they can move
              fast. That meant the standard UX playbook &mdash; progressive disclosure,
              cards, simplified views &mdash; was exactly wrong for this context.
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
              Most UX patterns push for interfaces that reveal information gradually.
              But CSMs needed to see account hierarchies, relationships, statuses, and
              metadata all at once to make informed decisions quickly. Simplifying the
              interface wouldn&rsquo;t help them &mdash; it would just add clicks
              between them and the information they already knew they needed.
            </p>
            <p className="cs__body cs__body--emphasis">
              The question that drove every design decision: how dense is too dense?
            </p>
          </div>
        </div>
      </section>

      {/* ── Three Versions ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Three Versions, One Answer</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              I explored three directions to find the balance.
            </p>
          </div>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Version 1 &mdash; Too simple.</h3>
            <p className="cs__body">
              Clean card-based layout following standard dashboard patterns. CSMs still
              had to click into each card to see basic information. Quick checks became
              multi-step workflows. I&rsquo;d moved the problem around without solving
              it.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Version 1 &mdash; Card-based layout (too simple)</span>
            </div>
          </div>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Version 2 &mdash; Too dense.</h3>
            <p className="cs__body">
              Everything visible at once. Maximum information density. The first time I
              showed it to the team, I got concerned looks. Even technical users found
              it overwhelming and hard to scan.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Version 2 &mdash; Maximum density (too overwhelming)</span>
            </div>
          </div>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Version 3 &mdash; Balanced.</h3>
            <p className="cs__body">
              Comprehensive but organized. All the information CSMs need upfront, with
              enough visual hierarchy to scan it quickly.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Version 3 &mdash; Balanced information density</span>
            </div>
          </div>

          <div className="cs__prose fade-up" style={{ marginTop: '2.5rem' }}>
            <p className="cs__body cs__body--emphasis">
              The conclusion wasn&rsquo;t obvious before I did the work: the right
              density isn&rsquo;t about following conventions. It&rsquo;s about matching
              the interface to how users actually work.
            </p>
          </div>
        </div>
      </section>

      {/* ── What I Built ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">What I Built</p>

          {/* Feature 1 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Unified Family Dashboard</h3>
            <p className="cs__body">
              One screen replaces dozens of disconnected pages. CSMs see all related
              accounts, their statuses, asset counts, and engagement details in a single
              view. No more tab-juggling. ~75% reduction in navigation clicks.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Family dashboard &mdash; all accounts in one view</span>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Smart Root Account Selection</h3>
            <p className="cs__body">
              With 10,000+ root accounts in the system, showing everything at once would
              crash it. CSMs select one root account at a time &mdash; keeping focus on
              one customer while keeping the interface fast.
            </p>
            <div className="cs__callout" style={{ marginTop: '1.5rem' }}>
              <h4>From there, two paths:</h4>
              <p>1. Families do not exist &rarr; Create a family.</p>
              <p style={{ marginTop: '0.25rem' }}>2. Families exist &rarr; Manage family.</p>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', marginTop: '2.5rem' }}>
              <div className="cs__image-placeholder fade-up" style={{ flex: 1, height: '350px', marginTop: 0 }}>
                <span>No root account selected &mdash; empty state</span>
              </div>
              <div className="cs__image-placeholder fade-up" style={{ flex: 1, height: '350px', marginTop: 0 }}>
                <span>Root account selected &mdash; no families yet</span>
              </div>
              <div className="cs__image-placeholder fade-up" style={{ flex: 1, height: '350px', marginTop: 0 }}>
                <span>Root account with families &mdash; manage view</span>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Streamlined Family Creation</h3>
            <p className="cs__body">
              Three steps: name the family and select service level, multi-select child
              accounts, add optional details. System auto-generates the Engagement ID.
              No overwhelming forms &mdash; just what&rsquo;s needed to get started.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--medium">
              <span>Family creation flow &mdash; 3 simple steps</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Family Settings</h3>
            <p className="cs__body">
              Detailed management for editing configurations, updating account
              relationships, and managing engagement parameters &mdash; all in one
              place.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Family settings &mdash; detailed configuration panel</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Validation ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Validation</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              I ran UAT with CSMs before launch &mdash; not just to catch bugs, but to
              validate whether information-dense was actually the right direction. It
              was. CSMs consistently preferred seeing more upfront over clicking through
              multiple screens daily.
            </p>
            <p className="cs__body">
              Testing also surfaced real usability issues in the multi-select flows that
              we fixed before launch, and led to improved error messaging throughout.
            </p>
            <p className="cs__body cs__body--highlight">
              One tester&rsquo;s response said it better than any metric: &ldquo;This is
              exactly what I&rsquo;ve been asking for. I can finally see everything I
              need without hunting for it.&rdquo;
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
              <span className="cs__impact-value">75%</span>
              <span className="cs__impact-label">reduction in clicks</span>
              <span className="cs__impact-detail">To access related accounts</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">Eliminated</span>
              <span className="cs__impact-label">context switching</span>
              <span className="cs__impact-detail">Across 15+ screens for multi-account customers</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">Strong adoption</span>
              <span className="cs__impact-label">across CSM teams</span>
              <span className="cs__impact-detail">Post-launch</span>
            </div>
            <div className="cs__impact-card">
              <span className="cs__impact-value">3 weeks</span>
              <span className="cs__impact-label">MVP shipped</span>
              <span className="cs__impact-detail">With full engineering specs and UAT-validated designs</span>
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
              Pushing back on best practices felt risky. Dense interfaces aren&rsquo;t
              what you typically see in portfolio case studies &mdash; or in UX
              guidelines. But I&rsquo;d spent enough time with CSMs to know that what
              they needed was efficiency, not simplicity. For experienced users dealing
              with genuinely complex work, a comprehensive view creates less friction
              than a simplified one.
            </p>
            <p className="cs__body">
              What I&rsquo;d do differently: establish baseline click metrics before
              design, not after. And run a diary study to quantify context-switching
              costs upfront &mdash; that data would have made the case for the dense
              approach much faster with stakeholders.
            </p>
            <p className="cs__body cs__body--emphasis">
              The best interface for power users isn&rsquo;t the cleanest one.
              It&rsquo;s the one that gets out of their way.
            </p>
          </div>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="cs__next section">
        <div className="container">
          <hr className="cs__divider" />
          <div className="cs__next-inner fade-up">
            <p className="cs__label">Next Project</p>
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

export default HPEPFA;
