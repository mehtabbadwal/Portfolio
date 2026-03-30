import './Writing.css';

const articles = [
  {
    title: 'The Art of Whitespace in Modern Web Design',
    date: 'March 15, 2026',
    category: 'Design',
    excerpt: 'Why giving your designs room to breathe is the most impactful decision you can make. Exploring the psychology of space and its role in visual hierarchy.',
    readTime: '6 min read',
  },
  {
    title: 'Building Design Systems That Scale',
    date: 'February 28, 2026',
    category: 'Systems',
    excerpt: 'Lessons learned from creating component libraries for growing teams. A practical guide to tokens, components, and documentation.',
    readTime: '8 min read',
  },
  {
    title: 'From Figma to Code: Bridging the Gap',
    date: 'January 20, 2026',
    category: 'Process',
    excerpt: 'Practical strategies for improving designer-developer collaboration. How to create handoffs that actually work.',
    readTime: '5 min read',
  },
  {
    title: 'Typography on the Web: A Practical Guide',
    date: 'December 10, 2025',
    category: 'Typography',
    excerpt: 'Everything you need to know about choosing, pairing, and implementing typefaces for digital products.',
    readTime: '10 min read',
  },
  {
    title: 'The Case for Simplicity in Product Design',
    date: 'November 5, 2025',
    category: 'Design',
    excerpt: 'Why the best products feel invisible. An argument for restraint in an age of feature bloat.',
    readTime: '7 min read',
  },
  {
    title: 'Color Theory for Digital Designers',
    date: 'October 18, 2025',
    category: 'Design',
    excerpt: 'Moving beyond palettes — understanding color relationships, accessibility, and emotional impact in interfaces.',
    readTime: '9 min read',
  },
];

function Writing() {
  return (
    <div className="writing">
      <section className="writing__hero section">
        <div className="container">
          <p className="section-label">Writing</p>
          <h1>Thoughts & articles</h1>
          <p className="writing__intro">
            Writing about design, development, and the creative process.
            Ideas worth sharing, lessons worth remembering.
          </p>
        </div>
      </section>

      <section className="writing__list section">
        <div className="container">
          {articles.map((article, i) => (
            <article key={i} className="article-row">
              <div className="article-row__meta">
                <span className="article-row__date">{article.date}</span>
                <span className="tag">{article.category}</span>
              </div>
              <div className="article-row__content">
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
              </div>
              <div className="article-row__aside">
                <span className="article-row__time">{article.readTime}</span>
                <span className="article-row__arrow">&rarr;</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Writing;
