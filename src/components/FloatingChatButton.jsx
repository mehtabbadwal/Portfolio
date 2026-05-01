import { useState, useEffect, useRef, useMemo } from 'react';
import { DOCK_STARTERS } from './chatStarters';

const STORAGE_KEY = 'mb_dock_collapsed';
const SESSION_AUTOCOLLAPSED_KEY = 'mb_dock_autocollapsed';
const AUTOCOLLAPSE_THRESHOLD_PX = 400;
const ROTATION_MS = 9000;

export default function FloatingChatButton() {
  const [collapsed, setCollapsed] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState('');
  const [pairIndex, setPairIndex] = useState(0);
  const inputRef = useRef(null);

  // Build pairs of 2 chips from DOCK_STARTERS
  const pairs = useMemo(() => {
    const out = [];
    for (let i = 0; i < DOCK_STARTERS.length; i += 2) {
      out.push(DOCK_STARTERS.slice(i, i + 2));
    }
    return out;
  }, []);

  // Initial state: mobile = always collapsed; desktop = stored pref, default open
  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 768px)').matches;
    setIsMobile(mobile);
    if (mobile) {
      setCollapsed(true);
    } else {
      const stored = localStorage.getItem(STORAGE_KEY);
      setCollapsed(stored === '1');
    }
    const onResize = () => setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Hide entirely while sidebar is open
  useEffect(() => {
    const onOpen = () => setChatbotOpen(true);
    const onClose = () => setChatbotOpen(false);
    window.addEventListener('chatbot-opened', onOpen);
    window.addEventListener('chatbot-closed', onClose);
    return () => {
      window.removeEventListener('chatbot-opened', onOpen);
      window.removeEventListener('chatbot-closed', onClose);
    };
  }, []);

  // Auto-collapse on first scroll past threshold (once per session).
  // We do NOT write to localStorage here — so user's manual preference
  // is preserved, and a fresh page load will open the dock again.
  useEffect(() => {
    if (isMobile) return;
    if (sessionStorage.getItem(SESSION_AUTOCOLLAPSED_KEY) === '1') return;

    const onScroll = () => {
      if (window.scrollY > AUTOCOLLAPSE_THRESHOLD_PX) {
        sessionStorage.setItem(SESSION_AUTOCOLLAPSED_KEY, '1');
        setCollapsed(true);
        window.removeEventListener('scroll', onScroll);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isMobile]);

  // Rotate chip pairs while panel is visible
  useEffect(() => {
    if (collapsed || chatbotOpen || pairs.length <= 1) return;
    const id = setInterval(() => {
      setPairIndex((i) => (i + 1) % pairs.length);
    }, ROTATION_MS);
    return () => clearInterval(id);
  }, [collapsed, chatbotOpen, pairs.length]);

  const collapse = () => {
    setCollapsed(true);
    if (!isMobile) localStorage.setItem(STORAGE_KEY, '1');
  };

  const expand = () => {
    setCollapsed(false);
    if (!isMobile) localStorage.setItem(STORAGE_KEY, '0');
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const openSidebar = () => {
    window.dispatchEvent(new CustomEvent('open-chatbot'));
  };

  const sendText = (text) => {
    const t = (text || '').trim();
    if (!t) return;
    window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { message: t } }));
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendText(value);
    }
  };

  if (chatbotOpen) return null;

  const currentPair = pairs[pairIndex] || [];

  return (
    <>
      <style>
        {`
          @keyframes mb-dock-in {
            from { opacity: 0; transform: translateX(16px); }
            to   { opacity: 1; transform: translateX(0); }
          }
          @keyframes mb-chip-in {
            from { opacity: 0; transform: translateY(3px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes mb-sparkle-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%      { opacity: 0.7; transform: scale(0.9); }
          }

          .mb-dock {
            position: fixed;
            bottom: 22px; right: 22px;
            z-index: 1000;
            font-family: var(--font-body);
          }

          .mb-dock__panel {
            position: relative;
            width: 280px;
            background: rgba(44, 36, 32, 0.74);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(244, 240, 232, 0.06);
            border-radius: 16px;
            padding: 10px 10px 10px 12px;
            box-shadow: 0 6px 22px rgba(44,36,32,0.16), 0 2px 6px rgba(44,36,32,0.08);
            display: flex; flex-direction: column; gap: 8px;
            animation: mb-dock-in 0.4s cubic-bezier(0.16,1,0.3,1);
            transition: background 0.25s ease, box-shadow 0.25s ease;
          }
          .mb-dock__panel:hover,
          .mb-dock__panel:focus-within {
            background: rgba(44, 36, 32, 0.96);
            box-shadow: 0 8px 28px rgba(44,36,32,0.24), 0 2px 8px rgba(44,36,32,0.12);
          }

          .mb-dock__close {
            position: absolute;
            top: 7px; right: 7px;
            width: 24px; height: 24px;
            border: none;
            background: rgba(244, 240, 232, 0.1);
            color: rgba(244, 240, 232, 0.75);
            cursor: pointer; padding: 0;
            border-radius: 6px;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.15s, color 0.15s;
            opacity: 1;
          }
          .mb-dock__close:hover {
            background: rgba(244, 240, 232, 0.18);
            color: #F4F0E8;
          }

          .mb-dock__form {
            display: flex; align-items: center; gap: 6px;
            background: rgba(58, 48, 42, 0.85);
            border: 1px solid transparent;
            border-radius: 10px;
            padding: 7px 6px 7px 10px;
            transition: border-color 0.15s, background 0.15s;
          }
          .mb-dock__form:focus-within {
            border-color: rgba(196, 96, 62, 0.5);
            background: rgba(58, 48, 42, 1);
          }
          .mb-dock__sparkle {
            flex-shrink: 0;
            animation: mb-sparkle-pulse 2.4s ease-in-out infinite;
          }
          .mb-dock__input {
            flex: 1; min-width: 0;
            background: transparent; border: none; outline: none;
            color: #F4F0E8; font-size: 13px; line-height: 1.5;
            font-family: inherit; resize: none;
            min-height: 20px; max-height: 60px; padding: 0;
          }
          .mb-dock__input::placeholder {
            color: #8A7A6E;
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 13px;
          }
          .mb-dock__send {
            width: 24px; height: 24px;
            border: none; border-radius: 6px;
            background: #C4603E; color: #F4F0E8; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0;
            transition: background 0.15s, transform 0.1s, opacity 0.15s;
          }
          .mb-dock__send:hover:not(:disabled) { background: #D6704E; }
          .mb-dock__send:active:not(:disabled) { transform: scale(0.9); }
          .mb-dock__send:disabled {
            background: rgba(196, 96, 62, 0.3);
            color: rgba(244, 240, 232, 0.5);
            cursor: not-allowed;
          }

          .mb-dock__chips {
            display: flex; flex-direction: column; gap: 2px;
            padding: 0 2px;
          }
          .mb-dock__chip {
            background: none; border: none; padding: 6px 4px;
            text-align: left; cursor: pointer;
            color: rgba(244, 240, 232, 0.72);
            font-family: inherit; font-size: 12px; line-height: 1.4;
            border-radius: 6px;
            transition: color 0.15s, background 0.15s;
            animation: mb-chip-in 0.45s ease-out;
            display: flex; align-items: baseline; gap: 6px;
          }
          .mb-dock__chip:hover {
            color: #F4F0E8;
            background: rgba(244, 240, 232, 0.05);
          }
          .mb-dock__chip-prefix {
            color: rgba(196, 96, 62, 0.85);
            font-family: var(--font-heading);
            font-style: italic;
            font-size: 11.5px;
            flex-shrink: 0;
          }
          .mb-dock__chip-text {
            flex: 1; min-width: 0;
          }
          .mb-dock__chip-arrow {
            color: rgba(244, 240, 232, 0.4);
            flex-shrink: 0;
          }
          .mb-dock__chip:hover .mb-dock__chip-arrow {
            color: #C4603E;
          }

          .mb-dock__btn {
            width: 52px; height: 52px; border-radius: 50%;
            background: #2C2420; color: #F4F0E8; border: none; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 14px rgba(44,36,32,0.2), 0 2px 6px rgba(44,36,32,0.1);
            transition: transform 0.2s ease;
            animation: mb-dock-in 0.4s cubic-bezier(0.16,1,0.3,1);
          }
          .mb-dock__btn:hover { transform: translateY(-2px); }

          @media (max-width: 768px) {
            .mb-dock {
              bottom: 18px; right: 18px;
            }
          }
        `}
      </style>

      {collapsed ? (
        <div className="mb-dock">
          <button
            className="mb-dock__btn"
            onClick={() => (isMobile ? openSidebar() : expand())}
            aria-label="Open Ask AI Mehtab"
          >
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#C4603E" />
              <circle cx="13" cy="3" r="1.5" fill="#C4603E" opacity="0.8" />
              <circle cx="3" cy="13" r="1" fill="#C4603E" opacity="0.6" />
            </svg>
          </button>
        </div>
      ) : (
        <div className="mb-dock">
          <div className="mb-dock__panel" role="region" aria-label="Ask AI Mehtab">
            <button className="mb-dock__close" onClick={collapse} aria-label="Collapse">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 6h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>

            <div className="mb-dock__form">
              <svg className="mb-dock__sparkle" width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#C4603E" />
                <circle cx="13" cy="3" r="1.5" fill="#C4603E" opacity="0.8" />
              </svg>
              <textarea
                ref={inputRef}
                className="mb-dock__input"
                rows={1}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={onKeyDown}
                placeholder="Ask AI Mehtab anything…"
                aria-label="Ask AI Mehtab a question"
              />
              <button
                className="mb-dock__send"
                onClick={() => sendText(value)}
                disabled={!value.trim()}
                aria-label="Send"
              >
                <svg width="11" height="11" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="mb-dock__chips">
              {currentPair.map((text, i) => (
                <button
                  key={`${pairIndex}-${i}-${text}`}
                  className="mb-dock__chip"
                  onClick={() => sendText(text)}
                  title={text}
                >
                  <span className="mb-dock__chip-prefix">Try:</span>
                  <span className="mb-dock__chip-text">{text}</span>
                  <span className="mb-dock__chip-arrow">→</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
