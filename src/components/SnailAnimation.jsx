import './SnailAnimation.css';

export function SnailAnimation() {
  return (
    <div className="snail-wrapper" aria-hidden="true">
      <div className="snail-outer">
        <svg viewBox="0 0 140 100" width="140" height="100" xmlns="http://www.w3.org/2000/svg">

          <ellipse className="snail-body" cx="44" cy="44" rx="26" ry="27"
            fill="none" stroke="#2C2420" strokeWidth="1.2" opacity="0.35" />

          <path className="snail-body"
            d="M 58 50 C 61 36, 50 24, 40 26 C 28 28, 22 40, 28 50 C 32 57, 42 57, 46 50 C 49 44, 46 36, 40 38 C 36 40, 35 46, 38 48"
            fill="none" stroke="#2C2420" strokeWidth="1" opacity="0.28" strokeLinecap="round" />

          <path className="snail-body"
            d="M 55 64 C 65 62, 76 58, 86 54 C 91 51, 95 50, 93 48"
            fill="none" stroke="#2C2420" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

          <path className="snail-body"
            d="M 93 48 C 100 45, 105 50, 103 55 C 101 60, 93 62, 84 64"
            fill="none" stroke="#2C2420" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

          <path className="snail-body"
            d="M 84 64 C 70 66, 52 68, 24 68 C 20 68, 18 66, 18 64 C 18 58, 18 52, 18 44"
            fill="none" stroke="#2C2420" strokeWidth="1.2" opacity="0.35" strokeLinecap="round" />

          <line className="snail-antenna snail-antenna--left"
            x1="92" y1="49" x2="84" y2="32"
            stroke="#2C2420" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
          <circle cx="84" cy="31" r="2"
            fill="#2C2420" opacity="0.3" />

          <line className="snail-antenna snail-antenna--right"
            x1="95" y1="48" x2="101" y2="31"
            stroke="#2C2420" strokeWidth="1" opacity="0.3" strokeLinecap="round" />
          <circle cx="101" cy="30" r="2"
            fill="#2C2420" opacity="0.3" />

          <circle cx="100" cy="51" r="2"
            fill="#C4603E" opacity="0.75" />

        </svg>
      </div>
    </div>
  );
}
