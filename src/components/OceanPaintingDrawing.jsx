import { useEffect, useRef, useState } from 'react';

export default function OceanPaintingDrawing() {
  const svgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={svgRef}
      style={{
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease-in-out'
      }}
    >
      <svg
        viewBox="0 0 520 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: 'auto' }}
      >
        <style>
          {`
            @media (prefers-reduced-motion: reduce) {
              .animate-draw,
              .animate-wave,
              .animate-hand {
                animation: none !important;
                stroke-dasharray: none !important;
                stroke-dashoffset: 0 !important;
              }
            }

            .animate-draw {
              stroke-dasharray: 1500;
              stroke-dashoffset: 1500;
              animation: draw 2.8s ease-out forwards;
            }

            .wave-1 {
              animation: wave1 6s ease-in-out infinite;
            }

            .wave-2 {
              animation: wave2 7s ease-in-out infinite;
            }

            .wave-3 {
              animation: wave3 8s ease-in-out infinite;
            }

            .wave-4 {
              animation: wave4 9s ease-in-out infinite;
            }

            .animate-hand {
              animation: brush-move 2.5s ease-in-out infinite;
              transform-origin: 280px 185px;
            }

            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }

            @keyframes wave1 {
              0%, 100% {
                d: path("M 0 280 Q 80 277, 160 280 T 320 280 T 480 280 L 520 280");
              }
              50% {
                d: path("M 0 280 Q 80 283, 160 280 T 320 280 T 480 280 L 520 280");
              }
            }

            @keyframes wave2 {
              0%, 100% {
                d: path("M 0 255 Q 90 252, 180 255 T 360 255 T 520 255");
              }
              50% {
                d: path("M 0 255 Q 90 258, 180 255 T 360 255 T 520 255");
              }
            }

            @keyframes wave3 {
              0%, 100% {
                d: path("M 0 235 Q 100 232, 200 235 T 400 235 T 520 235");
              }
              50% {
                d: path("M 0 235 Q 100 238, 200 235 T 400 235 T 520 235");
              }
            }

            @keyframes wave4 {
              0%, 100% {
                d: path("M 0 220 Q 110 218, 220 220 T 440 220 T 520 220");
              }
              50% {
                d: path("M 0 220 Q 110 222, 220 220 T 440 220 T 520 220");
              }
            }

            @keyframes brush-move {
              0%, 100% {
                transform: translate(0, 0) rotate(0deg);
              }
              25% {
                transform: translate(1px, -2px) rotate(-2deg);
              }
              75% {
                transform: translate(-1px, 2px) rotate(2deg);
              }
            }
          `}
        </style>

        {/* Ocean waves - with smooth curves and animation */}
        <path
          className={isVisible ? 'animate-draw wave-1' : ''}
          d="M 0 280 Q 80 277, 160 280 T 320 280 T 480 280 L 520 280"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          style={{ animationDelay: '0.3s' }}
        />

        <path
          className={isVisible ? 'animate-draw wave-2' : ''}
          d="M 0 255 Q 90 252, 180 255 T 360 255 T 520 255"
          stroke="#2C2420"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{ animationDelay: '0.4s' }}
        />

        <path
          className={isVisible ? 'animate-draw wave-3' : ''}
          d="M 0 235 Q 100 232, 200 235 T 400 235 T 520 235"
          stroke="#2C2420"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          style={{ animationDelay: '0.5s' }}
        />

        <path
          className={isVisible ? 'animate-draw wave-4' : ''}
          d="M 0 220 Q 110 218, 220 220 T 440 220 T 520 220"
          stroke="#2C2420"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          style={{ animationDelay: '0.6s' }}
        />

        {/* Ground line */}
        <path
          d="M 0 310 L 520 310"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.1s' }}
        />

        {/* Canvas/Easel */}
        <rect
          x="270"
          y="120"
          width="140"
          height="170"
          stroke="#2C2420"
          strokeWidth="3"
          fill="none"
          rx="2"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1s' }}
        />

        {/* Easel legs */}
        <path
          d="M 280 290 L 265 310"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.1s' }}
        />
        <path
          d="M 400 290 L 415 310"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.2s' }}
        />

        {/* Painting ON canvas - ocean scene with waves */}
        <path
          d="M 280 200 Q 320 198, 400 200"
          stroke="#2C2420"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.8s' }}
        />
        <path
          d="M 280 220 Q 330 218, 400 220"
          stroke="#2C2420"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.9s' }}
        />
        <path
          d="M 280 240 L 400 240"
          stroke="#2C2420"
          strokeWidth="1.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '2s' }}
        />

        {/* Woman sitting - MUCH closer to canvas */}

        {/* Body/torso */}
        <path
          d="M 170 310 Q 165 270, 175 240 Q 180 220, 190 205"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.7s' }}
        />

        {/* Head */}
        <circle
          cx="200"
          cy="188"
          r="20"
          stroke="#2C2420"
          strokeWidth="2.5"
          fill="none"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.8s' }}
        />

        {/* Hair flowing */}
        <path
          d="M 188 172 Q 200 168, 212 172 Q 218 185, 215 195"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.9s' }}
        />

        {/* Legs sitting */}
        <path
          d="M 168 310 Q 160 285, 158 265 Q 157 250, 162 235"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.3s' }}
        />
        <path
          d="M 175 310 Q 170 290, 172 270 Q 174 255, 180 240"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.4s' }}
        />

        {/* Painting arm - reaching TO canvas (with hand animation) */}
        <g className={isVisible ? 'animate-hand' : ''}>
          <path
            d="M 195 210 Q 220 200, 245 195 Q 260 192, 275 190"
            stroke="#2C2420"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.5s' }}
          />

          {/* Hand */}
          <path
            d="M 275 190 Q 280 188, 285 190 L 290 195"
            stroke="#2C2420"
            strokeWidth="2.5"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.6s' }}
          />

          {/* Brush handle */}
          <path
            d="M 283 185 L 300 172"
            stroke="#2C2420"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.7s' }}
          />

          {/* Brush tip touching canvas */}
          <circle
            cx="303"
            cy="169"
            r="4"
            fill="#2C2420"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.75s' }}
          />
        </g>

        {/* Resting arm */}
        <path
          d="M 185 220 Q 175 245, 168 270"
          stroke="#2C2420"
          strokeWidth="2.5"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '2.1s' }}
        />

      </svg>
    </div>
  );
}
