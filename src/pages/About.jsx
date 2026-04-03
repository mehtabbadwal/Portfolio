import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

function About() {
  const pageRef = useScrollReveal();

  return (
    <div className="about" ref={pageRef}>
      {/* ── Chapter 01 — Opening ── */}
      <section className="about__chapter section">
        <div className="container">
          <p className="about__chapter-label fade-up">Chapter 01 &mdash; Opening</p>
          <div className="about__opening">
            <div className="about__opening-content">
              <p className="about__opening-heading fade-up">
                I&rsquo;ve spent six years working with early-stage startups in fintech,
                edtech, and SaaS &mdash; translating dense systems into experiences that
                felt intuitive without sacrificing depth. The work usually started with
                clarity, not aesthetics.
              </p>
              <p className="about__opening-body fade-up">
                Before UX, I worked in fashion &mdash; pattern-making, production, quality
                assurance. The precision mattered there too. The cleaner the system, the
                less noise got in the way.
              </p>
              <p className="about__opening-italic fade-up">
                That&rsquo;s still how I think about design &mdash; getting the structure
                right so everything else can breathe.
              </p>
            </div>
            <div className="about__opening-photo fade-up">
              <img
                src="/Portfolio/chapter-01-photo.webp"
                alt="Looking out at the ocean"
                className="about__opening-img"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="about__divider container" />

      {/* ── Chapter 02 — How I Think ── */}
      <section className="about__chapter section">
        <div className="container">
          <p className="about__chapter-label fade-up">Chapter 02 &mdash; How I Think</p>
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

      <hr className="about__divider container" />

      {/* ── Chapter 03 — How I Work Now ── */}
      <section className="about__chapter section">
        <div className="container">
          <p className="about__chapter-label fade-up">Chapter 03 &mdash; How I Work Now</p>
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
                src="/Portfolio/chapter-03-books.jpeg"
                alt="Books on reading and reflection"
                className="about__work-img"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="about__divider container" />

      {/* ── Chapter 04 — Outside Work ── */}
      <section className="about__chapter section">
        <div className="container">
          <p className="about__chapter-label fade-up">Chapter 04 &mdash; Outside Work</p>
          <div className="about__photos fade-up">
            <img
              src="/Portfolio/ocean-sunset.webp"
              alt="Ocean sunset in San Diego"
              className="about__photo-img"
            />
            <img
              src="/Portfolio/holi-family.webp"
              alt="Family celebrating Holi festival"
              className="about__photo-img"
            />
            <img
              src="/Portfolio/hands-artwork.webp"
              alt="Street art mural with hands and eyes"
              className="about__photo-img"
            />
          </div>
          <div className="about__outside-bottom">
            <div className="about__outside-left fade-up">
              <p className="about__outside-quote">
                I live in San Diego. The ocean helps.
              </p>
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

      <hr className="about__divider container" />

      {/* ── Chapter 05 — Where I'm Headed ── */}
      <section className="about__chapter section">
        <div className="container">
          <p className="about__chapter-label fade-up">Chapter 05 &mdash; Where I&rsquo;m Headed</p>
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
