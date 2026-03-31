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
        maxWidth: '480px',
        margin: '0 auto',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.6s ease-in-out'
      }}
    >
      <svg
        viewBox="0 0 480 400"
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
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw 2.5s ease-out forwards;
            }

            .animate-wave {
              animation: wave 8s ease-in-out infinite;
            }

            .animate-hand {
              animation: brush-move 3s ease-in-out infinite;
              transform-origin: 340px 200px;
            }

            @keyframes draw {
              to {
                stroke-dashoffset: 0;
              }
            }

            @keyframes wave {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-2px);
              }
            }

            @keyframes brush-move {
              0%, 100% {
                transform: translate(0, 0);
              }
              50% {
                transform: translate(-1px, -3px);
              }
            }
          `}
        </style>

        {/* Ocean horizon lines (with wave animation) */}
        <g className={isVisible ? 'animate-wave' : ''} style={{ animationDelay: '0s' }}>
          <path
            d="M 0 280 Q 60 275, 120 280 T 240 280 T 360 280 T 480 280"
            stroke="#2C2420"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '0.2s' }}
          />
        </g>

        <g className={isVisible ? 'animate-wave' : ''} style={{ animationDelay: '1.5s' }}>
          <path
            d="M 0 260 Q 70 258, 140 260 T 280 260 T 420 260 T 480 260"
            stroke="#2C2420"
            strokeWidth="1.5"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '0.3s' }}
          />
        </g>

        <g className={isVisible ? 'animate-wave' : ''} style={{ animationDelay: '3s' }}>
          <path
            d="M 0 245 Q 80 243, 160 245 T 320 245 T 480 245"
            stroke="#2C2420"
            strokeWidth="1"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '0.4s' }}
          />
        </g>

        {/* Ground/sitting surface */}
        <path
          d="M 0 320 L 480 320"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.1s' }}
        />

        {/* Woman sitting - back/body */}
        <path
          d="M 120 320 Q 115 280, 130 250 Q 135 230, 145 220"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.6s' }}
        />

        {/* Head */}
        <circle
          cx="155"
          cy="205"
          r="18"
          stroke="#2C2420"
          strokeWidth="2"
          fill="none"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.7s' }}
        />

        {/* Hair */}
        <path
          d="M 145 190 Q 155 185, 165 190 Q 170 200, 168 210"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.8s' }}
        />

        {/* Legs (bent, sitting) */}
        <path
          d="M 118 320 Q 110 300, 108 280 Q 107 270, 110 260"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '0.9s' }}
        />

        <path
          d="M 125 320 Q 120 305, 122 290 Q 124 275, 128 265"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1s' }}
        />

        {/* Canvas/Easel - simple rectangle */}
        <rect
          x="220"
          y="160"
          width="100"
          height="130"
          stroke="#2C2420"
          strokeWidth="2"
          fill="none"
          rx="2"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.1s' }}
        />

        {/* Easel legs */}
        <path
          d="M 235 290 L 225 320"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.2s' }}
        />

        <path
          d="M 305 290 L 315 320"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.3s' }}
        />

        {/* Painting on canvas (simple ocean) */}
        <path
          d="M 230 210 Q 260 208, 310 210"
          stroke="#2C2420"
          strokeWidth="1"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.4s' }}
        />

        {/* Arm reaching to canvas (with hand animation) */}
        <g className={isVisible ? 'animate-hand' : ''}>
          <path
            d="M 145 230 Q 180 220, 210 210"
            stroke="#2C2420"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.5s' }}
          />

          {/* Hand holding brush */}
          <path
            d="M 210 210 Q 215 208, 220 210 L 225 215"
            stroke="#2C2420"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.6s' }}
          />

          {/* Brush */}
          <path
            d="M 220 205 L 235 195"
            stroke="#2C2420"
            strokeWidth="2"
            strokeLinecap="round"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.7s' }}
          />

          {/* Brush tip */}
          <circle
            cx="237"
            cy="193"
            r="3"
            fill="#2C2420"
            className={isVisible ? 'animate-draw' : ''}
            style={{ animationDelay: '1.8s' }}
          />
        </g>

        {/* Other arm (resting) */}
        <path
          d="M 135 240 Q 125 260, 118 280"
          stroke="#2C2420"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '1.9s' }}
        />

        {/* Simple horizon on canvas */}
        <path
          d="M 230 240 L 310 240"
          stroke="#2C2420"
          strokeWidth="1"
          strokeLinecap="round"
          className={isVisible ? 'animate-draw' : ''}
          style={{ animationDelay: '2s' }}
        />
      </svg>
    </div>
  );
}
