export function HeroSketch() {
  return (
    <div className="hero__sketch" aria-hidden="true">
      <svg viewBox="0 0 280 160" width="280" height="160" xmlns="http://www.w3.org/2000/svg">
        <line className="sketch-grid-v sketch-grid-v--1" x1="20" y1="15" x2="20" y2="120" />
        <line className="sketch-grid-v sketch-grid-v--2" x1="57" y1="15" x2="57" y2="120" />
        <line className="sketch-grid-v sketch-grid-v--3" x1="94" y1="15" x2="94" y2="120" />
        <line className="sketch-grid-v sketch-grid-v--4" x1="131" y1="15" x2="131" y2="120" />
        <line className="sketch-grid-h sketch-grid-h--1" x1="20" y1="15" x2="131" y2="15" />
        <line className="sketch-grid-h sketch-grid-h--2" x1="20" y1="52" x2="131" y2="52" />
        <line className="sketch-grid-h sketch-grid-h--3" x1="20" y1="89" x2="131" y2="89" />
        <line className="sketch-grid-h sketch-grid-h--4" x1="20" y1="120" x2="131" y2="120" />
        <path
          className="sketch-circle"
          d="M 118 15 C 149 13, 172 38, 171 67 C 170 97, 149 121, 118 121 C 88 121, 66 97, 67 67 C 68 38, 89 15, 118 15"
          fill="none"
        />
        <circle className="sketch-dot" cx="94" cy="52" r="4.5" />
      </svg>
    </div>
  );
}
