import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { PatternSketch } from '../components/PatternSketch';
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
              <h2 className="about__work-headline fade-up">
                Speed matters less to me than clarity.{' '}
                <span className="about__work-headline--accent">
                  I&rsquo;d rather slow down once than ship the wrong thing fast.
                </span>
              </h2>
              <p className="about__work-body fade-up">
                Right now I&rsquo;m leading product and UX at a startup &mdash; full
                stack, strategy to screen. The kind of work where decisions get made
                quickly and you live with the consequences.
              </p>
              <p className="about__work-body fade-up">
                I&rsquo;ve built AI into how I work, but not for the obvious reasons.{' '}
                <strong>Having something that will question every assumption without
                getting tired of it</strong> has changed what I can produce alone.
                Custom Claude workflows for design system creation, UX review,
                copywriting. Not to move faster &mdash; to think harder.
              </p>
            </div>
            <div className="about__work-photo fade-up">
              <img
                src="/chapter-03-books.jpeg"
                alt="Three books on reading people"
                className="about__work-img"
              />
              <p className="about__work-caption">
                Three of the books still teaching me{' '}
                <span className="about__work-caption--accent">how to read people.</span>
              </p>
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
                I live in San Diego.{' '}
                <span className="about__outside-quote--accent">The ocean helps.</span>
              </p>
              <p className="about__outside-body">
                I have a child who asks{' '}
                <strong>better questions than most stakeholders.</strong>{' '}
                I make things &mdash; essays at{' '}
                <a href="/writing" className="about__outside-link">Mind Meets Design</a>,
                poems on{' '}
                <a href="https://mehtabbadwal.substack.com" target="_blank" rel="noopener noreferrer" className="about__outside-link">Substack</a>{' '}
                when something needs fewer words, small design objects on{' '}
                <a href="https://etsy.com/shop/mehtabbadwal" target="_blank" rel="noopener noreferrer" className="about__outside-link">Etsy</a>.
                I read and reflect more than I probably should.
              </p>
            </div>
            <div className="about__outside-right fade-up">
              <blockquote className="about__outside-closing">
                None of this is separate from the work.{' '}
                <span className="about__outside-closing--accent">
                  It&rsquo;s where most of the good ideas actually come from.
                </span>
              </blockquote>
              <Link to="/writing" className="about__outside-read-more">
                Read more about how I see the work &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;
