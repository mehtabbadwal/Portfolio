import { useScrollReveal } from '../hooks/useScrollReveal';
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

      {/* ── Section 02 — How I Think ── */}
      <section className="about__chapter section">
        <div className="container">
          <div className="about__section-header fade-up">
            <span className="about__section-dot" aria-hidden="true" />
            <p className="about__section-label">How I Think</p>
            <span className="about__section-line" aria-hidden="true" />
          </div>
          <div className="about__think-grid fade-up">
            <div className="about__think-left">
              <h2 className="about__think-headline">
                What I&rsquo;m really doing on every project, under the wireframes
                and user flows, is{' '}
                <span className="about__think-headline--accent">
                  reading what people don&rsquo;t say out loud.
                </span>
              </h2>
              <p className="about__think-body">
                Most design briefs ask for an interface. The interesting work is
                figuring out what&rsquo;s actually getting in the way &mdash; what
                people are working around, what they&rsquo;ve stopped expecting,
                what they&rsquo;re not telling each other.
              </p>
            </div>
            <div className="about__think-right">
              <ol className="about__observations">
                <li className="about__observation about__observation--first">
                  <span className="about__observation-num">01</span>
                  <p className="about__observation-text">
                    The interesting problems usually start where the brief ends.
                  </p>
                </li>
                <li className="about__observation">
                  <span className="about__observation-num">02</span>
                  <p className="about__observation-text">
                    Users build workarounds when a product almost works.
                  </p>
                </li>
                <li className="about__observation">
                  <span className="about__observation-num">03</span>
                  <p className="about__observation-text">
                    You can read a product&rsquo;s priorities by what it makes
                    you do without thinking about it.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

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
