import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { AnimatedDivider } from '../AnimatedDivider';
import './HPEChatbot.css';

function Qubera() {
  const pageRef = useScrollReveal();

  return (
    <div className="cs" ref={pageRef}>
      {/* ── Hero ── */}
      <section className="cs__hero section">
        <div className="container">
          <Link to="/work" className="cs__back fade-up">&larr; Work</Link>

          <div className="cs__hero-top fade-up">
            <div className="cs__hero-meta">
              <span className="cs__hero-year">2024</span>
              <span className="cs__hero-meta-dot">&bull;</span>
              <span className="cs__hero-tag">AI Products</span>
            </div>
            <h1 className="cs__hero-title">Qubera</h1>
            <p className="cs__hero-subtitle">
              Financial analysts were losing hours every night reading documents that a
              well-designed AI could summarize in seconds. I designed the end-to-end product
              experience for Qubera &mdash; an AI-powered research tool built to cut through
              the noise and get analysts to the insight faster.
            </p>
          </div>

          <div className="cs__hero-card fade-up">
            <div className="cs__hero-card-meta">
              {[
                ['Role', 'Product Designer, Conversational Designer'],
                ['Timeline', '6 weeks'],
                ['Company', 'Qubera (Stealth Startup)'],
                ['Scope', 'User research, IA, wireframing, prototyping, design system'],
                ['Tools', 'Figma, FigJam, Jira'],
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
                  <span className="cs__hero-card-metric-value">85%</span>
                  <span className="cs__hero-card-metric-text">faster extraction</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">30%</span>
                  <span className="cs__hero-card-metric-text">faster decisions</span>
                </div>
                <div className="cs__hero-card-metric">
                  <span className="cs__hero-card-metric-value">6 wks</span>
                  <span className="cs__hero-card-metric-text">MVP to launch</span>
                </div>
              </div>
            </div>
          </div>

          <div className="cs__hero-image fade-up">
            <img src={`${import.meta.env.BASE_URL}qubera-hero.webp`} alt="AI-powered research dashboard" className="cs__hero-img" />
          </div>
        </div>
      </section>

      {/* ── Users ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Users</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Junior to mid-senior financial analysts &mdash; the people who do the actual
              research behind investment decisions. They spend hours, sometimes entire
              nights, reading through 10-Ks, 10-Qs, and press releases. They&rsquo;re
              working under real pressure: a company releases earnings, the market moves,
              and an analyst has a narrow window to read, interpret, and make a call.
            </p>
            <p className="cs__body cs__body--emphasis">
              What surprised me during research: the bottleneck wasn&rsquo;t intelligence or
              expertise &mdash; it was time and access. Analysts knew what questions to ask.
              Getting to the answers was what was consuming them.
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
              Equity research is built on publicly available information &mdash; SEC filings,
              earnings reports, press releases. But accessing, parsing, and synthesizing that
              information manually takes 15+ hours per analyst per cycle. By the time an
              analyst has read everything they need, the window for timely decision-making
              has often already closed.
            </p>
            <p className="cs__body cs__body--emphasis">
              The goal: design an AI tool that cuts extraction time dramatically and gets
              analysts to the questions that actually require their judgment.
            </p>
          </div>
        </div>
      </section>

      {/* ── Time Constraint ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Time Constraint</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              We were building fast. Financial institutions were already in conversation with
              the team &mdash; during one research interview, a director told us she was
              waiting for the product to launch because she wanted her analysts using it
              immediately. That kind of validation accelerated everything.
            </p>
            <p className="cs__body">
              The design had to be production-ready quickly, which meant making deliberate
              decisions about what to include in the MVP and what to defer.
            </p>
          </div>
        </div>
      </section>

      {/* ── What I Designed ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">What I Designed</p>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Default View &mdash; Key Financial Metrics</h3>
            <p className="cs__body">
              When an analyst selects a company, the most critical financial numbers are
              already there &mdash; revenue, gross profit, net income, EPS, EBITDA, free
              cash flow, debt &mdash; automatically parsed from 10-Ks and 10-Qs. No manual
              extraction. No hunting through filings.
            </p>
            <p className="cs__body cs__body--emphasis">
              This single feature reduced data extraction time by 85%.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}qubera-landing.webp`}
              alt="Default view with auto-extracted financial metrics"
              className="cs__solution-img"
            />
          </div>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Focused Chat</h3>
            <p className="cs__body">
              Analysts can query the AI directly, focused on specific documents &mdash; SEC
              filings, press releases, earnings calls. They can type a question or select
              from pre-generated prompts. The AI responds with sourced, specific answers.
            </p>
            <p className="cs__body">
              This boosted decision-making speed by 30% &mdash; analysts could ask targeted
              questions and get targeted answers instead of reading entire documents to find
              one data point.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}qubera-focused.webp`}
              alt="Focused chat interface with document selection"
              className="cs__solution-img"
            />
          </div>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Intelligent Questions &mdash; My Proposal</h3>
            <p className="cs__body">
              During research interviews, a pattern emerged: analysts ask largely the same
              set of questions about every company they cover. Revenue growth, competitive
              positioning, key risks, guidance. The questions were consistent &mdash; only
              the answers changed.
            </p>
            <p className="cs__body">
              I proposed the Intelligent Questions feature: when an analyst selects a
              company, a curated set of pre-answered questions is already waiting for them.
              No typing, no repetition, no cognitive overhead of deciding what to ask first.
              More importantly, it shifts where analysts spend their mental energy &mdash;
              routine questions are handled, so they can focus on the complex, high-judgment
              questions that actually require their expertise.
            </p>
            <p className="cs__body">
              The MVP delivered a standard set of IQ questions for every company. The roadmap
              included a future version where analysts could build and save their own
              personalized question sets &mdash; we designed for that extensibility even
              though we didn&rsquo;t ship it in V1.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}qubera-smart-insight.webp`}
              alt="Intelligent Questions with pre-answered insights"
              className="cs__solution-img"
            />
          </div>

          <div className="cs__decision-block fade-up">
            <h3 className="cs__decision-title">Press Release Summaries and Sentiment Analysis</h3>
            <p className="cs__body">
              New press releases are summarized automatically. Analysts see a sentiment score
              on a color-coded scale &mdash; positive, neutral, negative &mdash; without
              having to read the full release first. If something warrants deeper attention,
              it&rsquo;s one click away.
            </p>
            <img
              src={`${import.meta.env.BASE_URL}qubera-press-center.webp`}
              alt="Press release center with sentiment analysis"
              className="cs__solution-img"
            />
          </div>
        </div>
      </section>

      {/* ── Validation ── */}
      <section className="cs__narrative section">
        <div className="container">
          <p className="cs__label fade-up">Validation</p>
          <div className="cs__prose fade-up">
            <p className="cs__body">
              Testing was done with actual clients &mdash; financial analysts and
              institutional users who were evaluating the product for adoption.
            </p>
            <p className="cs__body">
              Formal documented feedback wasn&rsquo;t captured before the project concluded,
              but the real-world signal was clear: a director at a financial institution was
              actively waiting for launch to put her team on it.
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
              This project taught me how much context matters when designing for expert
              users. Financial analysts aren&rsquo;t confused about their work &mdash;
              they&rsquo;re constrained by the tools available to them. The design challenge
              wasn&rsquo;t simplification. It was elimination &mdash; removing every step
              between an analyst and the insight they were already capable of drawing.
            </p>
            <p className="cs__body">
              The IQ feature is the decision I&rsquo;m most proud of. It came directly from
              listening carefully during research, noticing a behavioural pattern, and
              proposing a solution that addressed it systematically rather than feature by
              feature.
            </p>
            <p className="cs__body">
              What I&rsquo;d do differently: structure client testing more formally from the
              start. We had real users evaluating the product but no structured feedback
              capture. That data would have been valuable both for iteration and for telling
              the story of this project.
            </p>
            <p className="cs__body cs__body--emphasis">
              The best AI tools don&rsquo;t replace expert judgment &mdash; they clear the
              path to it.
            </p>
          </div>
        </div>
      </section>

      {/* ── Next Project ── */}
      <section className="cs__next section">
        <div className="container">
          <AnimatedDivider />
          <div className="cs__next-inner fade-up">
            <p className="cs__label">Next Project</p>
            <h3 className="cs__next-title">Fluidra Pro</h3>
            <Link to="/case-studies/fluidra" className="cs__next-link">
              Read case study &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Qubera;
