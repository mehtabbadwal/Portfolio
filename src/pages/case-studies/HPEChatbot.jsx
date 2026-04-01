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

          <div className="cs__hero-grid">
            <div className="cs__hero-content fade-up">
              <div className="cs__hero-meta">
                <span className="cs__hero-year">2025</span>
                <span className="cs__hero-dot" />
                <span className="cs__hero-tag">Enterprise Systems</span>
              </div>
              <h1 className="cs__hero-title">HPE Agentic Chatbot</h1>
              <p className="cs__hero-subtitle">
                The fix wasn&rsquo;t smarter AI. It was more honest AI.
              </p>
            </div>

            <div className="cs__metrics-card fade-up">
              <p className="cs__metrics-label">Impact</p>
              <div className="cs__metric">
                <span className="cs__metric-value">32%</span>
                <span className="cs__metric-text">fewer escalations</span>
              </div>
              <hr className="cs__metric-divider" />
              <div className="cs__metric">
                <span className="cs__metric-value">3x</span>
                <span className="cs__metric-text">chatbot usage</span>
              </div>
              <hr className="cs__metric-divider" />
              <div className="cs__metric">
                <span className="cs__metric-value">2 min</span>
                <span className="cs__metric-text">avg resolution time</span>
              </div>
              <div className="cs__meta-footer">
                <div className="cs__meta-row"><span>Role</span><span>Senior Product Designer</span></div>
                <div className="cs__meta-row"><span>Timeline</span><span>3 weeks</span></div>
                <div className="cs__meta-row"><span>Company</span><span>Hewlett Packard Enterprise</span></div>
              </div>
            </div>
          </div>

          <div className="cs__hero-image fade-up">
            <span>Hero image &mdash; project overview</span>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="cs__solution section">
        <div className="container">
          <p className="cs__label fade-up">Solution</p>
          <p className="cs__solution-desc fade-up">
            Redesigned HPE&rsquo;s support chatbot from the ground up &mdash; reducing
            escalations by 32% in the first month by doing something counterintuitive:
            making the AI more honest instead of making it smarter.
          </p>

          <div className="cs__screens-row fade-up">
            <div className="cs__screen cs__screen--wide"><span>Primary screen</span></div>
            <div className="cs__screen cs__screen--narrow"><span>Secondary screen</span></div>
          </div>

          <div className="cs__detail-row fade-up">
            <div className="cs__detail">
              <h3>What this solved</h3>
              <p>
                A chatbot failing not because the AI was bad, but because it was designed
                like a menu system pretending to be a conversation &mdash; rigid navigation,
                link dumps instead of answers, and no acknowledgment of its own limitations.
              </p>
            </div>
            <div className="cs__detail">
              <h3>How it works</h3>
              <p>
                Users type questions like they&rsquo;d ask a colleague. The AI reads
                documentation and answers directly &mdash; with a source citation they can
                verify. A processing indicator shows the AI thinking. Classic mode stays
                available as a safety net. Every interaction says: you&rsquo;re in control.
              </p>
            </div>
          </div>

          <div className="cs__screens-triple fade-up">
            <div className="cs__screen"><span>Screen</span></div>
            <div className="cs__screen"><span>Screen</span></div>
            <div className="cs__screen"><span>Screen</span></div>
          </div>
        </div>
      </section>

      {/* ── Context ── */}
      <section className="cs__context section">
        <div className="container">
          <p className="cs__label fade-up">Context</p>
          <div className="cs__context-grid">
            <div className="cs__context-story fade-up">
              <p>
                HPE&rsquo;s enterprise support chatbot had a 78% escalation rate. Nearly
                four out of five users who started a chat ended up requesting a human agent
                &mdash; often within the first two messages. The chatbot wasn&rsquo;t broken
                in the technical sense. It answered questions. But the way it answered them
                felt like a system talking at you, not with you.
              </p>
              <p>
                It gave link dumps instead of answers. It didn&rsquo;t acknowledge when it
                didn&rsquo;t know something. And when users got frustrated, it had no way
                to recover &mdash; just a dead end and a &ldquo;Contact Support&rdquo; button.
              </p>
            </div>
            <blockquote className="cs__pullquote fade-up">
              <span className="cs__pullquote-mark">&ldquo;</span>
              <p>
                The chatbot wasn&rsquo;t failing because the AI was bad. It was failing
                because the conversation was designed like a menu system pretending to be
                a dialogue.
              </p>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Users ── */}
      <section className="cs__users section">
        <div className="container">
          <p className="cs__label fade-up">Who Uses This</p>
          <div className="cs__users-grid">
            <div className="cs__user-card fade-up stagger-1">
              <h3>IT Administrators</h3>
              <p>
                Managing HPE infrastructure across multiple sites. Need fast, accurate
                answers to configuration and troubleshooting questions without waiting
                in a support queue.
              </p>
            </div>
            <div className="cs__user-card fade-up stagger-2">
              <h3>Channel Partners</h3>
              <p>
                Reselling HPE products to their own clients. Need quick access to
                product specs, pricing, and compatibility information while on calls
                with customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Decisions ── */}
      <section className="cs__decisions section">
        <div className="container">
          <p className="cs__label fade-up">Key Decisions</p>
          <h2 className="cs__decisions-heading fade-up">
            Three design decisions that changed the outcome.
          </h2>
          <div className="cs__decisions-grid">
            <div className="cs__decision-card fade-up stagger-1">
              <span className="cs__decision-num">01</span>
              <h3>Surface uncertainty instead of hiding it</h3>
              <p>
                When the AI isn&rsquo;t confident, it says so &mdash; and offers to connect
                you with a human. Users trusted the chatbot more when it was honest about
                what it didn&rsquo;t know.
              </p>
            </div>
            <div className="cs__decision-card fade-up stagger-2">
              <span className="cs__decision-num">02</span>
              <h3>Keep Classic mode as an escape route</h3>
              <p>
                Instead of forcing everyone into the new AI experience, we kept the old
                menu-based system available. The escape route made people willing to try
                the new thing.
              </p>
            </div>
            <div className="cs__decision-card fade-up stagger-3">
              <span className="cs__decision-num">03</span>
              <h3>Answer directly, cite the source</h3>
              <p>
                Instead of link dumps, the AI reads documentation and gives a direct
                answer with a source citation. Users can verify without leaving the
                conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reality ── */}
      <section className="cs__reality section">
        <div className="container">
          <p className="cs__label fade-up">What Actually Happened</p>
          <div className="cs__reality-grid">
            <div className="cs__reality-card fade-up stagger-1">
              <h3>The pushback</h3>
              <p>
                Stakeholders wanted the AI to always sound confident. &ldquo;Users don&rsquo;t
                want to hear &lsquo;I&rsquo;m not sure.&rsquo;&rdquo; But testing showed the
                opposite &mdash; users escalated less when the AI was transparent about its
                limits.
              </p>
            </div>
            <div className="cs__reality-card fade-up stagger-2">
              <h3>The surprise</h3>
              <p>
                Classic mode usage dropped to 15% within six weeks. Not because we forced
                migration &mdash; but because once people trusted the new system, they
                didn&rsquo;t need the safety net anymore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="cs__outcome section">
        <div className="container">
          <p className="cs__label fade-up">Outcome</p>
          <div className="cs__outcome-grid">
            <p className="cs__outcome-desc fade-up">
              The redesign launched to HPE&rsquo;s full enterprise customer base. Within
              the first month, escalation rates dropped from 78% to 46%. Chatbot usage
              tripled. Average resolution time fell to under two minutes.
            </p>
            <div className="cs__outcome-metrics fade-up">
              <div className="cs__outcome-metric">
                <span className="cs__outcome-value">78% &rarr; 46%</span>
                <span className="cs__outcome-label">escalation rate</span>
              </div>
              <div className="cs__outcome-metric">
                <span className="cs__outcome-value">3x</span>
                <span className="cs__outcome-label">chatbot usage increase</span>
              </div>
              <div className="cs__outcome-metric">
                <span className="cs__outcome-value">&lt;2 min</span>
                <span className="cs__outcome-label">average resolution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hindsight ── */}
      <section className="cs__hindsight section">
        <div className="container">
          <p className="cs__label fade-up">In Hindsight</p>
          <div className="cs__hindsight-grid">
            <div className="cs__hindsight-left fade-up">
              <p>
                The biggest lesson: trust is a design material. Every interaction either
                builds or erodes it. The chatbot didn&rsquo;t need to be smarter &mdash;
                it needed to be more honest about what it could and couldn&rsquo;t do.
              </p>
              <p>
                If I did this again, I&rsquo;d push harder on the feedback loop &mdash;
                letting users rate answers and feeding that back into the AI&rsquo;s
                confidence scoring.
              </p>
            </div>
            <div className="cs__hindsight-next fade-up">
              <p className="cs__label">Next Project</p>
              <Link to="/case-studies/hpe-pfa" className="cs__next-link">
                HPE Premium Account Family &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HPEChatbot;
