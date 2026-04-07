export function HeroSketch() {
  return (
    <div className="hero__sketch" aria-hidden="true">
      <svg
        viewBox="0 0 200 115"
        width="200"
        height="115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line className="sketch-grid-v sketch-grid-v--1" x1="15" y1="10" x2="15" y2="88" />
        <line className="sketch-grid-v sketch-grid-v--2" x1="45" y1="10" x2="45" y2="88" />
        <line className="sketch-grid-v sketch-grid-v--3" x1="75" y1="10" x2="75" y2="88" />
        <line className="sketch-grid-v sketch-grid-v--4" x1="105" y1="10" x2="105" y2="88" />
        <line className="sketch-grid-h sketch-grid-h--1" x1="15" y1="10" x2="105" y2="10" />
        <line className="sketch-grid-h sketch-grid-h--2" x1="15" y1="36" x2="105" y2="36" />
        <line className="sketch-grid-h sketch-grid-h--3" x1="15" y1="62" x2="105" y2="62" />
        <line className="sketch-grid-h sketch-grid-h--4" x1="15" y1="88" x2="105" y2="88" />
        <path
          className="sketch-circle"
          d="M 115 8 C 143 6, 162 28, 161 53 C 160 78, 141 98, 114 97 C 87 98, 69 78, 70 52 C 71 27, 89 8, 115 8"
          fill="none"
        />
        <circle className="sketch-dot" cx="75" cy="36" r="3.5" />
      </svg>
    </div>
  );
}
