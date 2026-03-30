import './Resources.css';

const resourceCategories = [
  {
    title: 'Design Tools',
    description: 'The software and tools I use daily for design work.',
    items: [
      { name: 'Figma', description: 'My primary design tool for UI/UX work and prototyping.', link: '#' },
      { name: 'Adobe Illustrator', description: 'For detailed vector work and logo design.', link: '#' },
      { name: 'Webflow', description: 'For no-code website builds and rapid prototyping.', link: '#' },
    ],
  },
  {
    title: 'Development',
    description: 'Frameworks, libraries, and dev tools in my stack.',
    items: [
      { name: 'React', description: 'My go-to JavaScript library for building interfaces.', link: '#' },
      { name: 'Tailwind CSS', description: 'Utility-first CSS framework for rapid styling.', link: '#' },
      { name: 'VS Code', description: 'Code editor with carefully curated extensions.', link: '#' },
    ],
  },
  {
    title: 'Books',
    description: 'Books that shaped my thinking about design and craft.',
    items: [
      { name: 'Thinking with Type', description: 'Ellen Lupton — essential reading for typographic design.', link: '#' },
      { name: 'Don\'t Make Me Think', description: 'Steve Krug — timeless principles of web usability.', link: '#' },
      { name: 'Grid Systems', description: 'Josef Muller-Brockmann — the foundation of layout design.', link: '#' },
    ],
  },
  {
    title: 'Inspiration',
    description: 'Sites and publications I turn to for creative inspiration.',
    items: [
      { name: 'Typewolf', description: 'Curated typography inspiration and font recommendations.', link: '#' },
      { name: 'Mindsparkle Mag', description: 'High-quality design showcase and brand inspiration.', link: '#' },
      { name: 'Sidebar.io', description: 'The 5 best design links, every day.', link: '#' },
    ],
  },
];

function Resources() {
  return (
    <div className="resources">
      <section className="resources__hero section">
        <div className="container">
          <p className="section-label">Resources</p>
          <h1>Tools & recommendations</h1>
          <p className="resources__intro">
            A curated collection of tools, books, and resources that I use
            and recommend. Updated regularly as I discover new favorites.
          </p>
        </div>
      </section>

      <section className="resources__content section">
        <div className="container">
          {resourceCategories.map((category, i) => (
            <div key={i} className="resource-group">
              <div className="resource-group__header">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="resource-group__items">
                {category.items.map((item, j) => (
                  <a
                    key={j}
                    href={item.link}
                    className="resource-item"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="resource-item__info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <span className="resource-item__arrow">&rarr;</span>
                  </a>
                ))}
              </div>
              {i < resourceCategories.length - 1 && (
                <hr className="section-divider" />
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Resources;
