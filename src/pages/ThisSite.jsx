import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './ThisSite.css';

function ThisSite() {
  const pageRef = useScrollReveal();

  return (
    <div className="this-site" ref={pageRef}>
      <article className="this-site__article">
        <div className="this-site__container">

          <Link to="/" className="this-site__back fade-up">
            &larr; Back
          </Link>

          <header className="this-site__header fade-up">
            <h1 className="this-site__title">This site is the project.</h1>
            <p className="this-site__meta">APR 2026 &middot; MEHTAB BADWAL &middot; 3 MIN READ</p>
          </header>

          <div className="this-site__body">

            <p className="this-site__p fade-up">
              I designed and vibe-coded this entire site myself. No developer, no
              template, no Webflow. I held the design intent, the architecture, every
              detail decision &mdash; and used Claude Code as the hands that wrote the
              code.
            </p>

            <p className="this-site__p fade-up">
              That&rsquo;s the idea behind vibe coding: you stay in the thinking layer
              while AI handles the implementation. In practice, it was messier than
              that.
            </p>

            <p className="this-site__p fade-up">
              Claude broke things. My website broke. The chatbot failed on the first
              build, then the second. I spent half a day just getting it to work, and
              more time after that figuring out token optimization so it wouldn&rsquo;t
              cost a dollar per conversation. There were moments where I had no idea
              what was wrong, only that something was &mdash; and I had to learn
              enough about how the pieces fit together to even ask the right question.
            </p>

            <p className="this-site__p fade-up">
              That&rsquo;s what I didn&rsquo;t expect: I came out of this understanding
              things developers actually deal with. Not because I want to be a
              developer, but because you can&rsquo;t debug what you don&rsquo;t
              understand. And understanding the build layer makes me a sharper
              collaborator and a more grounded systems thinker.
            </p>

            <blockquote className="this-site__quote fade-up">
              The portfolio isn&rsquo;t just a showcase of my work. It&rsquo;s
              evidence of how I work.
            </blockquote>

            <p className="this-site__p fade-up">
              Every detail here has my voice in it. The cream palette instead of
              white &mdash; an accessibility call for high-sunlight conditions, not
              an aesthetic preference. The sparse subheadings in my writing because
              structure can interrupt thought. The editorial vertical layout for
              case studies, so each project has space to be read like a story, not
              scanned like a feed. The dot-and-line section labels because
              consistency in small details is what tells you a site was actually
              thought about.
            </p>

            <p className="this-site__p fade-up">
              The blog post images took real thought too. They&rsquo;re not
              illustrations of the article &mdash; they serve a different purpose
              entirely. Each one needed warmth, a little playfulness, the right
              metaphor. Human, but not literal. Getting that right took longer than
              writing some of the posts.
            </p>

            <figure className="this-site__figure fade-up">
              <img
                src={`${import.meta.env.BASE_URL}this-site-claude-code.png`}
                alt="A Claude Code session mid-build — the actual process behind this portfolio"
                className="this-site__img"
              />
              <figcaption className="this-site__caption">
                The actual process. Not as clean as the output suggests.
              </figcaption>
            </figure>

            <p className="this-site__p fade-up">
              The chatbot is the part I&rsquo;m most proud of. Not because it works,
              but because of what it took to make it work. It has a relevance filter,
              a FAQ layer for instant responses, streaming, mobile keyboard handling,
              and a Cloudflare Worker backend. Every one of those decisions came from
              a real problem I hit and had to solve.
            </p>

            <p className="this-site__p fade-up">
              But the technical architecture wasn&rsquo;t the hardest part. The
              harder question was: how should it actually sit on the page? An
              invisible widget no one finds? A floating button that interrupts? I
              went through five versions before settling on a docked panel &mdash;
              open on every page load, with rotating starter chips so visitors can
              see what it knows, auto-collapsing on scroll so it gets out of the way
              once you&rsquo;ve noticed it. Every interaction was designed around
              one assumption: most people don&rsquo;t know they want to talk to an
              AI version of someone until they&rsquo;re shown what it can actually
              do.
            </p>

            <p className="this-site__p fade-up">
              This site isn&rsquo;t finished. It started as a portfolio and quietly
              turned into something else along the way &mdash; a product I keep
              iterating on. Every section has been rewritten at least twice. Some of
              it will probably be different again by the time you read this.
              That&rsquo;s the point.
            </p>

            <p className="this-site__p fade-up">
              If you have feedback &mdash; on the design, the writing, the approach
              &mdash; I&rsquo;m genuinely open to it. That&rsquo;s not a disclaimer.
              It&rsquo;s how I work.
            </p>

            <p className="this-site__p fade-up">
              And if you want to ask me about any of it, the chatbot&rsquo;s right
              there.
            </p>

          </div>
        </div>
      </article>
    </div>
  );
}

export default ThisSite;
