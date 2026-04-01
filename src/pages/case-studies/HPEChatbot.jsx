import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './HPEChatbot.css';

function HPEChatbot() {
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
            <h1 className="cs__hero-title">HPE Agentic Chatbot</h1>
            <p className="cs__hero-subtitle">
              The fix wasn&rsquo;t smarter AI. It was more honest AI.
            </p>
          </div>

          {/* Horizontal Card */}
          <div className="cs__hero-card fade-up">
            <div className="cs__hero-card-meta">
              {[
                ['Role', 'Senior Product Designer'],
                ['Timeline', '3 weeks'],
                ['Company', 'Hewlett Packard Enterprise'],
                ['Scope', 'End-to-end conversational design'],
                ['Team', 'Lead UX, PM, Engineers'],
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
                  <span className="cs__hero-card-metric-value">32%</span>
                  <span className="cs__hero-card-metric-text">fewer escalations</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">3x</span>
                  <span className="cs__hero-card-metric-text">chatbot usage</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">2 min</span>
                  <span className="cs__hero-card-metric-text">avg resolution time</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cs__hero-image fade-up">
            <span>Hero image &mdash; project overview</span>
          </div>
        </div>
      </section>

      {/* ── Before/After ── */}
      <section className="cs__fullwidth-image section">
        <div className="container">
          <div className="cs__image-placeholder cs__image-placeholder--tall fade-up">
            <span>Before/After comparison &mdash; Menu-driven vs. AI-powered conversation</span>
          </div>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Problem</p>
          <div className="cs__two-col">
            <div className="cs__two-col-left fade-up">
              <p className="cs__body">
                A network admin needs to know which devices have expired contracts in the
                APJ region. They open the chatbot and get this:
              </p>
              <p className="cs__body cs__body--highlight">
                Click &ldquo;Asset Management&rdquo; &rarr; Click &ldquo;Contracts&rdquo;
                &rarr; Click &ldquo;View All Documentation&rdquo; &rarr; Here are 15
                articles and videos &rarr; (gives up and calls an agent)
              </p>
              <p className="cs__body">
                What should take 10 seconds took 10+ minutes. Most users didn&rsquo;t get
                that far.
              </p>
              <p className="cs__body">
                The chatbot wasn&rsquo;t failing because the AI was bad. It was failing
                because it was designed like a menu system pretending to be a conversation
                &mdash; rigid navigation, link dumps instead of answers, and no
                acknowledgment of its own limitations.
              </p>
            </div>
            <div className="cs__two-col-right fade-up">
              <blockquote className="cs__pullquote">
                <span className="cs__pullquote-mark">&ldquo;</span>
                <p>
                  I don&rsquo;t even click the chatbot icon anymore. It&rsquo;s faster to
                  just call support.
                </p>
                <cite className="cs__pullquote-cite">User interview</cite>
              </blockquote>
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
              Customer Success Managers, Network Administrators, Root Account Managers
              &mdash; technical professionals troubleshooting live issues when they reach
              for the chatbot. When a network is down, seconds matter. These users ask
              questions the way they&rsquo;d ask a colleague. When they can&rsquo;t get a
              direct answer, they don&rsquo;t wait &mdash; they call someone.
            </p>
            <p className="cs__body">
              That reality forced the design to be different.
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
              The hardest part wasn&rsquo;t making the chatbot conversational. It was
              making it trustworthy.
            </p>
            <p className="cs__body">
              We had 3 weeks and AI that wasn&rsquo;t perfect. The temptation &mdash; and
              the stakeholder pressure &mdash; was to hide that. Make it look smarter than
              it was. I disagreed. Users who sense a system is concealing its limitations
              don&rsquo;t trust it &mdash; they abandon it.
            </p>
            <p className="cs__body cs__body--emphasis">
              The insight that changed everything: users don&rsquo;t need perfect AI. They
              need to feel in control. That shifted our entire frame &mdash; from
              &ldquo;make AI smarter&rdquo; to &ldquo;make AI honest.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ── Reality ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Reality</p>
          <div className="cs__prose fade-up">
            <p className="cs__body cs__body--emphasis">
              Three weeks. Two simultaneous projects. One designer.
            </p>
            <p className="cs__body">
              I was splitting time between this chatbot redesign and HPE PFA, managing
              priorities through the product roadmap with individual PMs. The timeline was
              tight enough that I built test flows using Claude and Cursor just to move
              fast enough &mdash; that wasn&rsquo;t in the original plan.
            </p>
            <p className="cs__body">
              We tested 50 common queries across all user types. 78% correct on first
              attempt, 94% after clarification. Each session answered one specific
              question, not everything at once. That pace was the only reason we shipped
              on time.
            </p>
          </div>
        </div>
      </section>

      {/* ── Risky Decision ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Risky Decision</p>
          <h2 className="cs__section-heading fade-up">Give Users an Escape Route</h2>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              The product team wanted to sunset the old chatbot and force everyone onto the
              new AI version.
            </p>
            <p className="cs__body">
              I pushed back. Users who don&rsquo;t trust AI won&rsquo;t suddenly trust it
              because we removed their alternative. They&rsquo;ll just stop using the
              chatbot entirely.
            </p>
            <p className="cs__body">
              My proposal: keep both. Design a seamless toggle between AI mode and Classic
              mode &mdash; switch anytime, no conversation lost.
            </p>
            <p className="cs__body">
              This felt risky to stakeholders. Why give users an escape route? What we found
              was the opposite of what everyone feared &mdash; the escape route was what
              made people willing to try. The safety net enabled the risk-taking. When they
              feel trapped, they resist.
            </p>
            <p className="cs__body">
              Every mode switch included optional feedback, giving us real data on when and
              why users lost trust.
            </p>
          </div>
          <div className="cs__image-placeholder cs__image-placeholder--medium fade-up">
            <span>Thoughtful mode transitions with optional feedback and transcript download</span>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Solution</p>
          <p className="cs__body fade-up">Three decisions defined the redesign:</p>

          {/* Decision 1 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Natural conversation over menus.</h3>
            <p className="cs__body">
              We removed menus entirely. Users type questions like they&rsquo;d ask a
              colleague. Testing surfaced something unexpected: users preferred occasionally
              rephrasing over clicking through five menu levels. Rephrase is effort they
              choose. Navigation is effort imposed on them.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Natural conversation replaces rigid menus &mdash; personalized greeting, context awareness, and intelligent suggestions</span>
            </div>
          </div>

          {/* Decision 2 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Cite sources, don&rsquo;t hide uncertainty.</h3>
            <p className="cs__body">
              The old system linked to 50-page PDFs. The new experience reads the
              documentation and answers directly &mdash; with a source citation users can
              verify. That citation was one of the most important design decisions in the
              project. Transparency increased trust, it didn&rsquo;t decrease it.
            </p>
            <p className="cs__body">
              We also discovered users trusted answers more when they saw a processing
              indicator than when responses appeared instantly. Instant felt suspicious.
              &ldquo;Too good to be true&rdquo; was how one tester put it.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>AI reads and explains documentation in seconds &mdash; no more hunting through 50-page PDFs</span>
            </div>
          </div>

          {/* Decision 3 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Live answers, not live links.</h3>
            <p className="cs__body">
              Same question, two approaches &mdash; Old: click through menus, get
              documentation links, find the answer yourself. New: ask naturally, get
              &ldquo;You have 3 devices with expired contracts in APJ. Would you like to
              renew them?&rdquo; The shift wasn&rsquo;t technical. It was a choice about
              what the chatbot was actually for.
            </p>
            <div className="cs__callout fade-up">
              <h4>Trust Through Transparency</h4>
              <p>
                Every interaction reinforced: You&rsquo;re in control. We&rsquo;ll show our
                work. You can verify everything.
              </p>
            </div>
            <div className="cs__image-placeholder cs__image-placeholder--medium">
              <span>Trust through transparency &mdash; optional feedback, quick ratings, and always-available human support</span>
            </div>
          </div>

          {/* Decision 4 */}
          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Make it work on mobile.</h3>
            <p className="cs__body">
              Mobile and tablet adoption was nearly zero &mdash; users avoided the chatbot
              on smaller screens.
            </p>
            <div className="cs__image-placeholder cs__image-placeholder--large">
              <span>Network admins troubleshoot on-site from mobile while CSMs work from desktop</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Validation ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Validation &amp; Iteration</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              50 common queries across all three user types. 78% correct on first attempt,
              94% after clarification &mdash; within acceptable range for the rollout.
              Prototyping with Claude and Cursor let us test conversational patterns in
              hours instead of days, which was the only reason the 3-week timeline was
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* ── Reflections ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Reflections</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              I came into this project thinking the challenge was conversational flow. The
              real challenge was trust.
            </p>
            <p className="cs__body">
              What I&rsquo;d do differently: establish baseline metrics before launch, not
              after. We reconstructed pre-launch data from support logs and it was messy.
              And I&rsquo;d design uncertainty as a first-class pattern from day one &mdash;
              &ldquo;I&rsquo;m not sure, but here&rsquo;s what I found&rdquo; should have
              been core, not an afterthought.
            </p>
            <p className="cs__body cs__body--emphasis">
              The biggest lesson: AI doesn&rsquo;t need to be perfect to be useful &mdash;
              it needs to be honest.
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
            <h3 className="cs__next-title">HPE Premium Account Family</h3>
            <Link to="/case-studies/hpe-pfa" className="cs__next-link">
              Read case study &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HPEChatbot;
