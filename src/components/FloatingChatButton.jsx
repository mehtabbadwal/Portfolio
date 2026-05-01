import { useState, useEffect, useRef } from 'react';

const STORAGE_KEY = 'mb_dock_collapsed';

export default function FloatingChatButton() {
  const [collapsed, setCollapsed] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [value, setValue] = useState('');
  const inputRef = useRef(null);

  // Initial state: mobile = always collapsed; desktop = use stored pref, default open
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

  const submitMessage = () => {
    const text = value.trim();
    if (!text) return;
    window.dispatchEvent(new CustomEvent('open-chatbot', { detail: { message: text } }));
    setValue('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitMessage();
    }
  };

  if (chatbotOpen) return null;

  return (
    <>
      <style>
        {`
          @keyframes mb-dock-in {
            from { opacity: 0; transform: translateY(16px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes mb-sparkle-pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50%      { opacity: 0.75; transform: scale(0.92); }
          }
          .mb-dock {
            position: fixed; bottom: 24px; right: 24px;
            z-index: 1000;
            font-family: var(--font-body);
            animation: mb-dock-in 0.4s cubic-bezier(0.16,1,0.3,1);
          }
          .mb-dock--panel {
            width: 320px; background: #2C2420;
            border-radius: 18px; padding: 12px 12px 12px 16px;
            box-shadow: 0 8px 28px rgba(44,36,32,0.22), 0 2px 8px rgba(44,36,32,0.12);
            display: flex; flex-direction: column; gap: 10px;
          }
          .mb-dock__header {
            display: flex; align-items: center; justify-content: space-between;
            color: #F4F0E8;
          }
          .mb-dock__brand {
            display: flex; align-items: center; gap: 8px;
            font-size: 13px; font-weight: 500; letter-spacing: 0.01em;
          }
          .mb-dock__brand em {
            font-family: var(--font-heading);
            font-style: italic; color: #C4603E; font-weight: 400;
            margin-right: 2px;
          }
          .mb-dock__sparkle { animation: mb-sparkle-pulse 2.4s ease-in-out infinite; }
          .mb-dock__close {
            width: 22px; height: 22px; border: none; background: transparent;
            color: #B0A090; cursor: pointer; border-radius: 6px;
            display: flex; align-items: center; justify-content: center;
            transition: background 0.15s, color 0.15s;
            padding: 0;
          }
          .mb-dock__close:hover { background: rgba(244,240,232,0.08); color: #F4F0E8; }
          .mb-dock__form {
            display: flex; align-items: flex-end; gap: 6px;
            background: #3A302A; border-radius: 12px; padding: 8px 8px 8px 12px;
            transition: border-color 0.15s;
            border: 1px solid transparent;
          }
          .mb-dock__form:focus-within { border-color: #5A4A3E; }
          .mb-dock__input {
            flex: 1; background: transparent; border: none; outline: none;
            color: #F4F0E8; font-size: 14px; line-height: 1.5;
            font-family: inherit; resize: none;
            min-height: 22px; max-height: 60px; padding: 1px 0;
          }
          .mb-dock__input::placeholder { color: #8A7A6E; }
          .mb-dock__send {
            width: 28px; height: 28px; border: none; border-radius: 8px;
            background: #C4603E; color: #F4F0E8; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            flex-shrink: 0; transition: background 0.15s, transform 0.1s;
          }
          .mb-dock__send:hover:not(:disabled) { background: #D6704E; }
          .mb-dock__send:active:not(:disabled) { transform: scale(0.92); }
          .mb-dock__send:disabled { background: #5A4A3E; color: #8A7A6E; cursor: not-allowed; }
          .mb-dock__btn {
            width: 56px; height: 56px; border-radius: 50%;
            background: #2C2420; color: #F4F0E8; border: none; cursor: pointer;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 16px rgba(44,36,32,0.2), 0 2px 6px rgba(44,36,32,0.12);
            transition: transform 0.2s ease;
          }
          .mb-dock__btn:hover { transform: translateY(-2px); }
          @media (max-width: 768px) {
            .mb-dock { bottom: 18px; right: 18px; }
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
        <div className="mb-dock mb-dock--panel" role="region" aria-label="Ask AI Mehtab">
          <div className="mb-dock__header">
            <div className="mb-dock__brand">
              <svg className="mb-dock__sparkle" width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" fill="#C4603E" />
                <circle cx="13" cy="3" r="1.5" fill="#C4603E" opacity="0.8" />
              </svg>
              <span><em>Ask</em> AI Mehtab</span>
            </div>
            <button className="mb-dock__close" onClick={collapse} aria-label="Collapse">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="mb-dock__form">
            <textarea
              ref={inputRef}
              className="mb-dock__input"
              rows={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Ask anything — I know my own work"
              aria-label="Ask AI Mehtab a question"
            />
            <button
              className="mb-dock__send"
              onClick={submitMessage}
              disabled={!value.trim()}
              aria-label="Send"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
