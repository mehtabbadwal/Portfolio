import { useState, useEffect } from 'react';

export default function FloatingChatButton() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleChatbotOpen = () => {
      const button = document.getElementById('floating-chat-btn');
      if (button) button.style.display = 'none';
    };

    const handleChatbotClose = () => {
      const button = document.getElementById('floating-chat-btn');
      if (button) button.style.display = 'flex';
    };

    window.addEventListener('chatbot-opened', handleChatbotOpen);
    window.addEventListener('chatbot-closed', handleChatbotClose);

    return () => {
      window.removeEventListener('chatbot-opened', handleChatbotOpen);
      window.removeEventListener('chatbot-closed', handleChatbotClose);
    };
  }, []);

  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  return (
    <>
      <style>
        {`
          @keyframes sparkle-pulse {
            0%, 100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.8;
              transform: scale(0.95);
            }
          }

          @keyframes float-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          #floating-chat-btn {
            animation: float-in 0.5s ease-out;
          }

          #floating-chat-btn:hover .sparkle-icon {
            animation: sparkle-pulse 1.5s ease-in-out infinite;
          }

          @media (max-width: 768px) {
            #floating-chat-btn {
              width: 56px !important;
              height: 56px !important;
              padding: 0 !important;
              justify-content: center !important;
            }

            #floating-chat-btn .button-text {
              display: none !important;
            }

            #floating-chat-btn .sparkle-icon {
              margin-right: 0 !important;
            }
          }
        `}
      </style>

      <button
        id="floating-chat-btn"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'fixed',
          bottom: '32px',
          right: '32px',
          backgroundColor: '#2C2420',
          color: '#F4F0E8',
          border: 'none',
          borderRadius: '28px',
          padding: '14px 20px 14px 18px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontFamily: 'var(--font-body)',
          fontWeight: '500',
          boxShadow: '0 4px 16px rgba(44, 36, 32, 0.15), 0 2px 8px rgba(44, 36, 32, 0.1)',
          transition: 'all 0.3s ease',
          transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
          zIndex: 1000
        }}
        aria-label="Ask Mehtab about her work"
      >
        <svg
          className="sparkle-icon"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginRight: '2px', flexShrink: 0 }}
        >
          <path
            d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z"
            fill="#C4603E"
          />
          <circle cx="13" cy="3" r="1.5" fill="#C4603E" opacity="0.8" />
          <circle cx="3" cy="13" r="1" fill="#C4603E" opacity="0.6" />
        </svg>

        <span className="button-text">
          <span style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: '#C4603E' }}>Ask </span>
          <span style={{ letterSpacing: '0.01em' }}>Mehtab</span>
        </span>
      </button>
    </>
  );
}
