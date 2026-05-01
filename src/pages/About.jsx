import { useScrollReveal } from '../hooks/useScrollReveal';
import { AnimatedDivider } from './AnimatedDivider';
import { PatternSketch } from '../components/PatternSketch';
import { WaveSketch } from '../components/WaveSketch';
import './About.css';

function About() {
  const pageRef = useScrollReveal();

  return (
    <div className="about" ref={pageRef}>

      {/* ── Hero headline ── */}
      <section className="about__hero">
        <div className="container">
          <p className="about__hero-label fade-up">About</p>
          <h1 className="about__hero-headline fade-up">
            I came to UX through fashion, family, and a long habit of{' '}
            <span className="about__hero-headline--accent">
              watching how people behave when no one&rsquo;s watching.
            </span>
          </h1>
        </div>
      </section>

      {/* ── Section 01 — How I Got Here ── */}
      <section className="about__chapter section">
        <div className="container">
          <div className="about__section-header fade-up">
            <span className="about__section-dot" aria-hidden="true" />
            <p className="about__section-label">How I Got Here</p>
            <span className="about__section-line" aria-hidden="true" />
          </div>
          <div className="about__opening">
            <div className="about__opening-content">
              <p className="about__opening-subhead fade-up">
                Fashion was my first design education &mdash;{' '}
                <span className="about__opening-subhead--accent">
                  and my first lesson in how people actually decide.
                </span>
              </p>
              <p className="about__opening-body fade-up">
                Before UX, I worked in fashion. The technical part &mdash; pattern-making,
                production &mdash; mattered. But the part that stayed with me was watching{' '}
                <strong>how people relate to what they put on themselves.</strong>{' '}
                What they reach for when they&rsquo;re nervous. What they avoid when they
                don&rsquo;t want to be seen. The gap between who they&rsquo;re trying to
                project and who they actually are.
              </p>
              <p className="about__opening-body fade-up">
                UX gave me a different vocabulary for the same observation.
                The clothes became interfaces. The lens stayed the same.
              </p>
              <PatternSketch />
            </div>
            <div className="about__opening-photo fade-up">
              <img
                src="/chapter-01-photo.webp"
                alt="Looking out at the ocean"
                className="about__opening-img"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Section 02 — How I Think ── */}
      <section className="about__chapter section">
        <div className="container">
          <div className="about__section-header fade-up">
            <span className="about__section-dot" aria-hidden="true" />
            <p className="about__section-label">How I Think</p>
            <span className="about__section-line" aria-hidden="true" />
          </div>
          <blockquote className="about__big-quote fade-up">
            Most design problems I&rsquo;ve worked on already had a standard solution.
            The hard part was figuring out whether that solution was actually right,
            for this person, in this moment.
          </blockquote>
          <div className="about__think-grid fade-up">
            <div className="about__think-left">
              <p>
                Sometimes it was. Often it wasn&rsquo;t.
              </p>
              <p>
                A denser interface for power users who needed speed. An honest AI over
                a polished one. A field app reorganized around a 40-minute window, not
                the system.
              </p>
              <p className="about__think-emphasis">
                The space between what&rsquo;s expected and what&rsquo;s actually needed
                is where the interesting work is.
              </p>
            </div>
            <div className="about__think-right">
              <ul className="about__principles">
                <li>
                  <span className="about__principle-dot" />
                  The interesting problems usually start where the brief ends.
                </li>
                <li>
                  <span className="about__principle-dot" />
                  Users know when a system is hiding something. They always know.
                </li>
                <li>
                  <span className="about__principle-dot" />
                  The first version of a brief is almost never the real problem.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Section 03 — How I Work Now ── */}
      <section className="about__chapter section">
        <div className="container">
          <div className="about__section-header fade-up">
            <span className="about__section-dot" aria-hidden="true" />
            <p className="about__section-label">How I Work Now</p>
            <span className="about__section-line" aria-hidden="true" />
          </div>
          <div className="about__work-grid">
            <div className="about__work-content">
              <p className="about__work-primary fade-up">
                Right now I&rsquo;m working with a startup &mdash; leading product and UX
                from strategy to screen. Information architecture, user flows, feature
                decisions, design system, user testing. The full stack of what it takes
                to build something real.
              </p>
              <p className="fade-up">
                I&rsquo;ve also built AI into how I work. Speed matters less to me than
                clarity, and having something that will question every assumption without
                getting tired of it has changed what I can produce alone. I&rsquo;ve built
                custom workflows in Claude for design system creation, UX review, and
                copywriting.
              </p>
              <div className="about__tags fade-up">
                <span className="about__tag">AI Workflow Design</span>
                <span className="about__tag">Design Systems</span>
                <span className="about__tag">0&rarr;1 Strategy</span>
                <span className="about__tag">Claude Skills</span>
              </div>
            </div>
            <div className="about__work-photo fade-up">
              <img
                src="/chapter-03-books.jpeg"
                alt="Books on reading and reflection"
                className="about__work-img"
              />
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Section 04 — Outside Work ── */}
      <section className="about__chapter section">
        <div className="container">
          <div className="about__section-header fade-up">
            <span className="about__section-dot" aria-hidden="true" />
            <p className="about__section-label">Outside Work</p>
            <span className="about__section-line" aria-hidden="true" />
          </div>
          <div className="about__photos fade-up">
            <img
              src="/ocean-sunset.webp"
              alt="Ocean sunset in San Diego"
              className="about__photo-img"
            />
            <img
              src="/holi-family.webp"
              alt="Family celebrating Holi festival"
              className="about__photo-img"
            />
            <img
              src="/hands-artwork.webp"
              alt="Street art mural with hands and eyes"
              className="about__photo-img"
            />
          </div>
          <div className="about__outside-bottom">
            <div className="about__outside-left fade-up">
              <p className="about__outside-quote">
                I live in San Diego. The ocean helps.
              </p>
              <WaveSketch />
              <p className="about__outside-body">
                I have a child who asks better questions than most stakeholders. I make
                art, I write &mdash; Mind Meets Design is where I think out loud about
                behavior, design, and why people do what they do. I read and reflect more
                than I probably should.
              </p>
            </div>
            <div className="about__outside-right fade-up">
              <p className="about__outside-closing">
                None of this is separate from the work. It&rsquo;s where most of the
                good ideas actually come from.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AnimatedDivider />

      {/* ── Section 05 — Where I'm Headed ── */}
      <section className="about__chapter section">
        <div className="container">
          <div className="about__section-header fade-up">
            <span className="about__section-dot" aria-hidden="true" />
            <p className="about__section-label">Where I&rsquo;m Headed</p>
            <span className="about__section-line" aria-hidden="true" />
          </div>
          <div className="about__headed-grid">
            <div className="about__headed-content fade-up">
              <p className="about__headed-quote">
                Senior or Staff UX roles &mdash; enterprise, AI, startups, or anything in between.
              </p>
              <p className="about__headed-body">
                Complexity doesn&rsquo;t intimidate me. Unclear problems are the interesting ones.
              </p>
              <div className="about__headed-actions">
                <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--accent">
                  mehtabbadwal@gmail.com
                </a>
                <a href={`${import.meta.env.BASE_URL}resume-mehtab-badwal.pdf`} target="_blank" rel="noopener noreferrer" className="btn about__resume-btn">
                  Resume
                </a>
              </div>
            </div>
            <div className="about__headed-right fade-up">
              <ul className="about__principles">
                <li>
                  <span className="about__principle-dot" />
                  Meaningful problems that change lives through clarity, not simplicity.
                </li>
                <li>
                  <span className="about__principle-dot" />
                  A team that actually uses what each person is good at rather than averaging everyone out.
                </li>
                <li>
                  <span className="about__principle-dot" />
                  No micromanagement. A problem that&rsquo;s genuinely hard to solve.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
