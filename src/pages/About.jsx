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
              <h1 className="about__opening-heading fade-up">
                I&rsquo;ve spent six years trying to understand why people do what they do
                inside products &mdash; and building from that answer.
              </h1>
              <p className="about__opening-body fade-up">
                Before UX, I worked in fashion. Designing for physical bodies taught me
                something that transferred completely: form shapes experience. It doesn&rsquo;t
                matter how functional something is if it doesn&rsquo;t fit how a person
                actually moves through the world.
              </p>
              <p className="about__opening-italic fade-up">
                That&rsquo;s still how I think. Just with different materials.
              </p>
            </div>
            <div className="about__opening-photo fade-up">
              <div className="about__placeholder about__placeholder--portrait">
                <span>Photo</span>
              </div>
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
              <div className="about__placeholder about__placeholder--landscape">
                <span>Work Photo</span>
              </div>
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
            <div className="about__placeholder about__placeholder--square"><span>Photo 1</span></div>
            <div className="about__placeholder about__placeholder--square"><span>Photo 2</span></div>
            <div className="about__placeholder about__placeholder--square"><span>Photo 3</span></div>
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
              <p>
                I&rsquo;m looking for a team that cares about the same things I do &mdash;
                meaningful problems, honest collaboration, and the freedom to do deep work
                without being micromanaged into shallow output.
              </p>
              <p>
                I want to be somewhere my background in behavior, systems thinking, and
                craft actually matters. Not just a &ldquo;design resource&rdquo; &mdash; a
                partner in building the product.
              </p>
            </div>
            <div className="about__headed-right fade-up">
              <ul className="about__principles">
                <li>
                  <span className="about__principle-dot" />
                  Senior or staff-level UX roles
                </li>
                <li>
                  <span className="about__principle-dot" />
                  Enterprise, AI, or complex product spaces
                </li>
                <li>
                  <span className="about__principle-dot" />
                  Teams that value depth over speed
                </li>
              </ul>
            </div>
          </div>
          <div className="about__headed-actions fade-up">
            <a href="mailto:mehtabbadwal@gmail.com" className="btn btn--accent">
              mehtabbadwal@gmail.com
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer" className="btn about__resume-btn">
              Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
