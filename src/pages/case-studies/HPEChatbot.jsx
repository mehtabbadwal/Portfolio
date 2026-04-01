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
          <div className="cs__context-grid">
            <div className="cs__context-story fade-up">
              <p className="cs__label">Context</p>
              <h2 className="cs__section-heading">
                A chatbot with a 78% escalation rate isn&rsquo;t a chatbot. It&rsquo;s a detour.
              </h2>
              <p>
                A network admin needs to know which devices have expired contracts in the
                APJ region. They open the chatbot and get this: Click &lsquo;Asset
                Management&rsquo; &rarr; Click &lsquo;Contracts&rsquo; &rarr; Click
                &lsquo;View All Documentation&rsquo; &rarr; Here are 15 articles and videos
                &rarr; (gives up and calls an agent). What should take 10 seconds took 10+
                minutes. Most users didn&rsquo;t get that far.
              </p>
              <p>
                The chatbot wasn&rsquo;t failing because the AI was bad. It was failing
                because it was designed like a menu system pretending to be a conversation.
                The temptation &mdash; and the stakeholder pressure &mdash; was to hide its
                limitations. Make it look smarter than it was. The insight that changed
                everything: users don&rsquo;t need perfect AI. They need to feel in control.
              </p>
            </div>
            <div className="cs__context-quote-wrap fade-up">
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
      <section className="cs__users section">
        <div className="container">
          <p className="cs__label fade-up">Users</p>
          <h2 className="cs__section-heading fade-up">
            Technical professionals troubleshooting live issues. When a network is down,
            seconds matter.
          </h2>
          <div className="cs__users-grid">
            <div className="cs__user-card fade-up stagger-1">
              <span className="cs__user-tag">Network Admin</span>
              <h3>Network Administrator</h3>
              <p>
                Technical professionals troubleshooting live issues when they reach for the
                chatbot. They ask questions the way they&rsquo;d ask a colleague. When they
                can&rsquo;t get a direct answer, they don&rsquo;t wait &mdash; they call someone.
              </p>
              <div className="cs__user-details">
                <div className="cs__user-detail">
                  <span className="cs__user-detail-label">Environment</span>
                  <span className="cs__user-detail-value">Enterprise desktop</span>
                </div>
                <div className="cs__user-detail">
                  <span className="cs__user-detail-label">Main Task</span>
                  <span className="cs__user-detail-value">Resolve IT issues fast</span>
                </div>
                <div className="cs__user-detail">
                  <span className="cs__user-detail-label">Pain Point</span>
                  <span className="cs__user-detail-value">Menus that didn&rsquo;t match how they thought about their problem</span>
                </div>
              </div>
            </div>
            <div className="cs__user-card fade-up stagger-2">
              <span className="cs__user-tag">Customer Success</span>
              <h3>Customer Success Manager</h3>
              <p>
                Managing enterprise accounts and fielding customer questions about contract
                status, device inventory, and service coverage. Needs accurate answers
                quickly &mdash; not search results to sift through.
              </p>
              <div className="cs__user-details">
                <div className="cs__user-detail">
                  <span className="cs__user-detail-label">Environment</span>
                  <span className="cs__user-detail-value">Desktop and mobile</span>
                </div>
                <div className="cs__user-detail">
                  <span className="cs__user-detail-label">Main Task</span>
                  <span className="cs__user-detail-value">Answer customer questions accurately and fast</span>
                </div>
                <div className="cs__user-detail">
                  <span className="cs__user-detail-label">Pain Point</span>
                  <span className="cs__user-detail-value">Link dumps instead of direct answers</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Decisions ── */}
      <section className="cs__decisions section">
        <div className="container">
          <p className="cs__label fade-up">Decisions</p>
          <h2 className="cs__section-heading fade-up">
            Three decisions that went against the room &mdash; each one right for the same reason.
          </h2>
          <div className="cs__decisions-list">
            <div className="cs__decision fade-up">
              <span className="cs__decision-num">01</span>
              <div className="cs__decision-body">
                <h3>Keep Classic mode alive</h3>
                <p>
                  The product team wanted to sunset the old chatbot and force everyone onto the
                  new AI version. I pushed back. Users who don&rsquo;t trust AI won&rsquo;t
                  suddenly trust it because we removed their alternative. They&rsquo;ll just
                  stop using the chatbot entirely. The escape route was what made people willing
                  to try. The safety net enabled the risk-taking.
                </p>
              </div>
              <div className="cs__decision-alt">
                <span className="cs__decision-alt-label">The Alternative</span>
                <p>Force migration to AI mode. Would have driven users to phone support instead &mdash; worsening the exact problem we were trying to solve.</p>
              </div>
            </div>
            <div className="cs__decision fade-up">
              <span className="cs__decision-num">02</span>
              <div className="cs__decision-body">
                <h3>Surface uncertainty, don&rsquo;t hide it</h3>
                <p>
                  We discovered users trusted answers more when they saw a processing indicator
                  than when responses appeared instantly. Instant felt suspicious. &ldquo;Too
                  good to be true&rdquo; was how one tester put it. We cited sources directly
                  instead of linking to 50-page PDFs. Transparency increased trust &mdash; it
                  didn&rsquo;t decrease it.
                </p>
              </div>
              <div className="cs__decision-alt">
                <span className="cs__decision-alt-label">The Alternative</span>
                <p>Polish responses to appear more authoritative. Would have felt like a black box &mdash; exactly what erodes trust in AI systems.</p>
              </div>
            </div>
            <div className="cs__decision fade-up">
              <span className="cs__decision-num">03</span>
              <div className="cs__decision-body">
                <h3>Replace menus with conversation</h3>
                <p>
                  We removed menus entirely. Users type questions like they&rsquo;d ask a
                  colleague. Testing surfaced something unexpected: users preferred occasionally
                  rephrasing over clicking through five menu levels. Rephrase is effort they
                  choose. Navigation is effort imposed on them.
                </p>
              </div>
              <div className="cs__decision-alt">
                <span className="cs__decision-alt-label">The Alternative</span>
                <p>Improve the menu categories and hierarchy. Would have optimized the wrong interaction entirely.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reality ── */}
      <section className="cs__reality section">
        <div className="container">
          <p className="cs__label fade-up">Reality</p>
          <h2 className="cs__section-heading fade-up">How it actually went.</h2>
          <div className="cs__reality-grid">
            <div className="cs__reality-card fade-up stagger-1">
              <div className="cs__reality-accent" />
              <h3>Two projects, one designer, one release cycle</h3>
              <p>
                This project ran simultaneously with HPE PFA on different release tracks.
                Priority was managed through the product roadmap in collaboration with
                individual PMs. Every requirement started with a scope conversation &mdash;
                what looked small on a brief often expanded once the user flows were mapped.
                Catching that early was the difference between delivering and scrambling.
              </p>
            </div>
            <div className="cs__reality-card fade-up stagger-2">
              <div className="cs__reality-accent" />
              <h3>Three weeks inside an active product cycle</h3>
              <p>
                To prototype conversational patterns fast enough, I built test flows using
                Claude and Cursor. That wasn&rsquo;t in the original plan. We tested 50
                common queries across all three user types &mdash; 78% correct on first
                attempt, 94% after clarification. That pace was only possible because of how
                we tested: each session answered one specific question, not everything at once.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Outcome ── */}
      <section className="cs__outcome section">
        <div className="container">
          <div className="cs__outcome-grid">
            <div className="cs__outcome-left fade-up">
              <p className="cs__label">Outcome</p>
              <h2 className="cs__section-heading">
                What changed for users &mdash; and for the business.
              </h2>
              <p className="cs__outcome-desc">
                32% reduction in escalations &mdash; from 78% to 46% &mdash; in the first
                month. Users who had previously bypassed the chatbot entirely started using
                it. Resolution time dropped from 8+ minutes to under 2 minutes. The
                mode-switching data was the most interesting finding. Users who switched to
                Classic weren&rsquo;t abandoning the product &mdash; many switched back to
                AI mode within the same session after confirming it could handle their query
                type. The escape route became a trust-building mechanism.
              </p>
            </div>
            <div className="cs__outcome-metrics fade-up">
              <div className="cs__outcome-metric">
                <span className="cs__outcome-big-value">32%</span>
                <div>
                  <span className="cs__outcome-metric-label">Fewer escalations</span>
                  <span className="cs__outcome-metric-detail">From 78% to 46% in first month</span>
                </div>
              </div>
              <div className="cs__outcome-metric">
                <span className="cs__outcome-big-value">3x</span>
                <div>
                  <span className="cs__outcome-metric-label">Chatbot usage</span>
                  <span className="cs__outcome-metric-detail">Among users who previously bypassed it</span>
                </div>
              </div>
              <div className="cs__outcome-metric">
                <span className="cs__outcome-big-value">2 min</span>
                <div>
                  <span className="cs__outcome-metric-label">Resolution time</span>
                  <span className="cs__outcome-metric-detail">Down from 8+ minutes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hindsight ── */}
      <section className="cs__hindsight section">
        <div className="container">
          <div className="cs__hindsight-grid">
            <div className="cs__hindsight-left fade-up">
              <p className="cs__label">Hindsight</p>
              <p>
                I came into this project thinking the challenge was conversational flow. The
                real challenge was trust. What I&rsquo;d do differently: establish baseline
                metrics before launch, not after &mdash; we reconstructed pre-launch data
                from support logs and it was messy. And I&rsquo;d design uncertainty as a
                first-class pattern from day one. &ldquo;I&rsquo;m not sure, but here&rsquo;s
                what I found&rdquo; should have been core, not an afterthought. AI
                doesn&rsquo;t need to be perfect to be useful. It needs to be honest.
              </p>
            </div>
            <div className="cs__hindsight-next fade-up">
              <p className="cs__label">Next Project</p>
              <h3 className="cs__next-title">HPE Premium Account Family</h3>
              <Link to="/case-studies/hpe-pfa" className="cs__next-link">
                Read case study &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HPEChatbot;
