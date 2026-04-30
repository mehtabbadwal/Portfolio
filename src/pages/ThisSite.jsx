import { Link } from 'react-router-dom';

function ThisSite() {
  return (
    <div style={{ minHeight: '100vh', background: '#F4F0E8' }}>
      <section style={{ padding: '80px 0' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 2.5rem' }}>

          <Link to="/" style={{ fontSize: '14px', color: '#B0A090', textDecoration: 'none', display: 'inline-block', marginBottom: '48px' }}>
            ← Back
          </Link>

          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '42px',
            fontWeight: 400,
            color: '#2C2420',
            lineHeight: 1.2,
            marginBottom: '16px'
          }}>
            This site is the project.
          </h1>

          <p style={{ fontSize: '13px', color: '#B0A090', fontFamily: 'var(--font-body)', marginBottom: '48px', letterSpacing: '0.04em' }}>
            APR 2026 · MEHTAB BADWAL · 3 MIN READ
          </p>

          {[
            `I designed and vibe-coded this entire portfolio myself. No developer, no template, no Webflow. I held the design intent, the architecture, every detail decision — and used Claude Code as the hands that wrote the code.`,
            `That's the idea behind vibe coding: you stay in the thinking layer while AI handles the implementation. In practice, it was messier than that.`,
            `Claude broke things. My website broke. The chatbot failed on the first build, then the second. I spent half a day just getting it to work, and more time after that figuring out token optimization so it wouldn't cost a dollar per conversation. There were moments where I had no idea what was wrong, only that something was — and I had to learn enough about how the pieces fit together to even ask the right question.`,
            `That's what I didn't expect: I came out of this understanding things developers actually deal with. Not because I want to be a developer, but because you can't debug what you don't understand. And understanding the build layer makes me a sharper collaborator and a more grounded systems thinker.`,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: '18px', lineHeight: 1.75, color: '#2C2420', fontFamily: 'var(--font-body)', marginBottom: '24px' }}>
              {text}
            </p>
          ))}

          <blockquote style={{
            borderLeft: '4px solid #C4603E',
            paddingLeft: '24px',
            margin: '40px 0',
            fontFamily: 'var(--font-heading)',
            fontStyle: 'italic',
            fontSize: '24px',
            fontWeight: 400,
            color: '#2C2420',
            lineHeight: 1.4
          }}>
            The portfolio isn't just a showcase of my work. It's evidence of how I work.
          </blockquote>

          {[
            `Every detail here has my voice in it. The cream palette instead of white — that's an accessibility call for high-sunlight conditions, not an aesthetic preference. The sparse subheadings in my writing because structure can interrupt thought. The 2x2 case study grid so screenshots are actually legible at the size they deserve.`,
            `Even the blog post images took real thought. They're not illustrations of the article — they serve a different purpose entirely. Each one needed warmth, a little playfulness, the right metaphor. Human, but not literal. Getting that right took longer than writing some of the posts.`,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: '18px', lineHeight: 1.75, color: '#2C2420', fontFamily: 'var(--font-body)', marginBottom: '24px' }}>
              {text}
            </p>
          ))}

          <div style={{ margin: '40px 0' }}>
            <img
              src={`${import.meta.env.BASE_URL}this-site-claude-code.png`}
              alt="A Claude Code session mid-build — the actual process behind this portfolio"
              style={{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #E8E2D8' }}
            />
            <p style={{ fontSize: '13px', color: '#B0A090', marginTop: '10px', fontFamily: 'var(--font-body)' }}>
              The actual process. Not as clean as the output suggests.
            </p>
          </div>

          {[
            `The chatbot is the part I'm most proud of. Not because it works, but because of what it took to make it work. It has a relevance filter, a FAQ layer for instant responses, contextual follow-up menus, streaming, mobile keyboard handling, and a Cloudflare Worker backend. Every one of those decisions came from a real problem I hit and had to solve.`,
            `I'm still learning. This site will keep changing. If you have feedback on any of it — the design, the writing, the approach — I'm genuinely open to it. That's not a disclaimer. It's how I work.`,
            `And if you want to ask me about any of it, the chatbot's right there.`,
          ].map((text, i) => (
            <p key={i} style={{ fontSize: '18px', lineHeight: 1.75, color: '#2C2420', fontFamily: 'var(--font-body)', marginBottom: '24px' }}>
              {text}
            </p>
          ))}

        </div>
      </section>
    </div>
  );
}

export default ThisSite;
