import { useEffect } from 'react';

export default function MehtabLLM() {
  useEffect(() => {
    if (document.getElementById('mehtab-sidebar')) return;

    const style = document.createElement('style');
    style.textContent = `
      body {
        transition: margin-right 0.32s cubic-bezier(0.16,1,0.3,1);
      }
      #mehtab-sidebar {
        position: fixed; top: 0; right: 0;
        width: 420px; height: 100vh; height: 100dvh;
        max-height: -webkit-fill-available;
        background: #FAF8F5; z-index: 300;
        display: flex; flex-direction: column;
        transform: translateX(100%);
        transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
        border-left: 1px solid #D6CFBF;
        font-family: 'Inter', 'Satoshi Variable', -apple-system, sans-serif;
        color: #2C2420;
        line-height: 1.6;
        box-shadow: -4px 0 24px rgba(44,36,32,0.08);
      }
      #mehtab-sidebar.open { transform: translateX(0); }
      .mllm-header {
        padding: 20px 24px 16px; background: #F4F0E8;
        border-bottom: 1px solid #EAE4D8; flex-shrink: 0;
        display: flex; align-items: center;
        justify-content: space-between;
      }
      .mllm-brand {
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        font-size: 15px; font-weight: 500; color: #2C2420;
      }
      .mllm-brand em {
        font-style: italic; color: #C4603E;
        font-family: Georgia, 'Fraunces', serif;
        font-weight: 400;
      }
      .mllm-brand-sub {
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        font-size: 13px; color: #7A6A60;
        margin-top: 3px; font-weight: 400;
      }
      .mllm-header-actions { display: flex; gap: 4px; }
      .mllm-icon-btn {
        width: 32px; height: 32px; border: none; background: none;
        cursor: pointer; border-radius: 8px; display: flex;
        align-items: center; justify-content: center; color: #B0A090;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
      }
      .mllm-icon-btn:hover { background: #EAE4D8; color: #2C2420; }
      .mllm-icon-btn svg { width: 15px; height: 15px; }
      #mllm-messages {
        flex: 1; overflow-y: auto; display: flex;
        flex-direction: column; scrollbar-width: none;
      }
      #mllm-messages::-webkit-scrollbar { display: none; }
      .mllm-empty {
        flex: 1; display: flex; flex-direction: column;
        justify-content: flex-end; padding: 32px 24px 0;
      }
      .mllm-empty-prompt {
        font-size: 26px; font-weight: 400; color: #2C2420;
        line-height: 1.3; letter-spacing: -0.01em; margin-bottom: 28px;
        font-family: Georgia, 'Fraunces', serif; font-style: italic;
      }
      .mllm-starters { display: flex; flex-direction: column; }
      .mllm-starter {
        display: flex; align-items: center; gap: 10px;
        padding: 13px 0; border-top: 1px solid #EAE4D8;
        cursor: pointer; background: none; border-left: none;
        border-right: none; border-bottom: none;
        text-align: left; width: 100%;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
      }
      .mllm-starter:last-child { border-bottom: 1px solid #EAE4D8; }
      .mllm-starter:hover .mllm-starter-text { color: #C4603E; }
      .mllm-arrow { font-size: 13px; color: #B0A090; flex-shrink: 0; }
      .mllm-starter-text { font-size: 14px; color: #2C2420; font-weight: 400; }
      .mllm-convo {
        padding: 24px; display: flex;
        flex-direction: column; gap: 20px;
      }
      .mllm-msg-user {
        align-self: flex-end; background: #EAE4D8; color: #2C2420;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        font-size: 15px; font-weight: 400; line-height: 1.6;
        padding: 10px 16px;
        border-radius: 18px; border-bottom-right-radius: 4px; max-width: 85%;
      }
      .mllm-msg-assistant {
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        font-size: 15px; font-weight: 400; color: #2C2420; line-height: 1.7;
      }
      .mllm-msg-assistant.streaming::after {
        content: '▋'; animation: mllm-blink 0.8s infinite;
        font-size: 12px; color: #C4603E; margin-left: 1px;
      }
      @keyframes mllm-blink { 0%,100%{opacity:1} 50%{opacity:0} }
      .mllm-followups {
        display: flex; flex-direction: column; margin-top: 4px;
      }
      .mllm-followup {
        display: flex; align-items: center; gap: 10px; padding: 10px 0;
        border-top: 1px solid #EAE4D8; cursor: pointer; background: none;
        border-left: none; border-right: none; border-bottom: none;
        text-align: left; width: 100%;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
      }
      .mllm-followup:last-child { border-bottom: 1px solid #EAE4D8; }
      .mllm-followup:hover .mllm-followup-text { color: #C4603E; }
      .mllm-followup-arrow { font-size: 12px; color: #B0A090; flex-shrink: 0; }
      .mllm-followup-text { font-size: 13px; color: #7A6A60; font-weight: 400; }
      .mllm-followup-label {
        font-size: 13px; color: #B0A090; font-weight: 400;
        margin: 0 0 4px; padding: 0;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
      }
      .mllm-input-area {
        padding: 14px 20px 20px; border-top: 1px solid #EAE4D8;
        flex-shrink: 0; background: #FAF8F5;
        padding-bottom: max(20px, env(safe-area-inset-bottom));
      }
      .mllm-input-wrap {
        display: flex; align-items: flex-end; background: #F0EBE4;
        border-radius: 14px; padding: 10px 10px 10px 16px;
        border: 1px solid #D6CFBF;
        transition: border-color 0.15s;
      }
      .mllm-input-wrap:focus-within { border-color: #B0A090; }
      #mllm-input {
        flex: 1; background: none; border: none; outline: none;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        font-size: 16px; font-weight: 400; color: #2C2420;
        resize: none; min-height: 20px; max-height: 80px; line-height: 1.6;
      }
      #mllm-input::placeholder {
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        color: #B0A090; font-weight: 400;
      }
      #mllm-send {
        width: 32px; height: 32px; border-radius: 999px;
        background: #2C2420; border: none; cursor: pointer;
        display: flex; align-items: center;
        justify-content: center; flex-shrink: 0;
        transition: background 0.15s, transform 0.15s;
      }
      #mllm-send:hover { background: #C4603E; }
      #mllm-send:active { transform: scale(0.92); }
      #mllm-send:disabled { background: #D6CFBF; cursor: not-allowed; }
      #mllm-send svg { width: 14px; height: 14px; fill: #F4F0E8; }
      .mllm-footer {
        text-align: center;
        font-family: 'Inter', 'Satoshi Variable', sans-serif;
        font-size: 11px; font-weight: 400;
        color: #B0A090; margin-top: 10px;
      }
      @media (max-width: 768px) {
        #mehtab-sidebar {
          width: 100%;
          border-left: none;
          height: 100vh; height: 100dvh;
          max-height: -webkit-fill-available;
        }
        body.sidebar-open {
          overflow: hidden;
          position: fixed;
          width: 100%;
        }
        .mllm-input-area {
          padding-bottom: max(20px, env(safe-area-inset-bottom));
        }
      }
    `;
    document.head.appendChild(style);

    const SYSTEM = `You are Mehtab Badwal speaking directly to someone visiting your portfolio. First person only. Be warm, honest, and direct. Talk like a real conversation.

CRITICAL: Keep answers to 2-4 sentences maximum. No bullet lists. No headers. Sound like a person talking.

WHO YOU ARE: Product designer, 6+ years. Lead UX Designer + Product Lead at Buildrooms, an early-stage AI project management startup. Shaping strategy, IA, feature prioritization, design system. Your line: "I design how products think — so users don't have to."

Three beliefs: the conventional answer is a starting point not a destination. Clarity isn't the same as simplicity. Design for the moment, not the average.

HPE chatbot: 78% escalation rate. Argued for surfacing AI uncertainty, not hiding it. Kept Classic mode alongside new AI — the escape route made people willing to try. 32% fewer escalations, under 2 min resolution.

HPE PFA: CSMs juggling 15+ accounts. Built denser interface — cleaner is actually slower for power users. 75% fewer clicks.

Qubera: Intelligent Questions — pre-answered routine analyst questions so they could focus on high-judgment calls. 85% faster extraction.

Fluidra: left office, tested at real pool sites in direct sunlight. Redesigned around 40-min technician window. Live on App Store.

Built custom Claude skills for design systems, UX review, copywriting. Runs Mind Meets Design blog. Piece "Stay Out of My Way" opens: I was giving my son a bath when I realized I was out of groceries.

Personally: empathetic, writes poems, paints, San Diego ocean, reflects there. Child who asks better questions than most stakeholders. Fashion design background.

Wants: meaningful problems, collaborative team, no micromanagement.

Contact: mehtabbadwal@gmail.com — open to opportunities.`;

    // FAQ responses — zero API calls
    const FAQ_MAP = [
      { keys: ['email', 'contact', 'reach', 'get in touch'], answer: "You can reach me at mehtabbadwal@gmail.com or connect on LinkedIn. Always happy to talk design, research, or how systems actually work in the real world." },
      { keys: ['resume', 'cv', 'download resume'], answer: "My resume is available in the navigation. Fair warning: it's the formal version. The real story is in the case studies." },
      { keys: ['tools', 'software', 'what do you use', 'design tools'], answer: "I live in Figma for design, but the real work happens in research sessions and synthesis. I use whatever method gets me closest to understanding why people do what they do — interviews, usability testing, behavioral frameworks. The tools change, the questions don't." },
      { keys: ['experience', 'years', 'how long', 'how many years'], answer: "I've been doing this for 6+ years across enterprise software, AI products, and B2B SaaS. Long enough to know that most problems aren't UX problems — they're systems problems that show up in the interface." },
      { keys: ['process', 'approach', 'methodology', 'how do you design', 'how do you work'], answer: "Research first, always. I start with understanding behavior — what people actually do, not what they say they'll do. Then I build from there: insights → prototypes → testing → iteration. Every decision needs a behavioral framework behind it, or it's just decoration." },
      { keys: ['hire', 'available', 'looking for work', 'open to opportunities', 'hiring'], answer: "Yes! I'm looking for senior UX roles where research and systems thinking actually matter. If that sounds like your team, email me at mehtabbadwal@gmail.com." },
      { keys: ['location', 'where', 'based', 'live', 'san diego'], answer: "I'm based in sunny San Diego, where the sun and ocean remind me that good design, like good weather, should just work without making you think about it." },
      { keys: ['case study', 'case studies', 'projects', 'portfolio', 'work', 'examples'], answer: "Check out the Work page — I've got case studies on AI chatbots that didn't try to be smarter than users, research tools that analysts actually wanted to use, and field service platforms built around a 40-minute reality check." },
      { keys: ['industries', 'sectors', 'domains', 'what industries'], answer: "Enterprise software, AI products, field service, B2B SaaS. Basically anywhere the buyer isn't the user and someone's trying to solve an organizational problem with an interface." },
      { keys: ['freelance', 'consulting', 'contract', 'part time'], answer: "I'm focused on full-time senior roles, but I'll consider the right consulting project. If you've got something interesting, reach out at mehtabbadwal@gmail.com." },
    ];

    function checkFAQ(text) {
      const lower = text.toLowerCase();
      for (const faq of FAQ_MAP) {
        if (faq.keys.some(k => lower.includes(k))) return faq.answer;
      }
      return null;
    }

    function isPortfolioRelated(text) {
      const lower = text.toLowerCase();
      const offTopic = ['weather', 'news', 'stock', 'recipe', 'joke', 'math', 'translate', 'movie', 'game', 'sports', 'crypto'];
      if (offTopic.some(k => lower.includes(k))) return false;
      const onTopic = ['design', 'ux', 'ui', 'portfolio', 'work', 'case', 'project', 'mehtab', 'experience', 'contact', 'research', 'product', 'user', 'hpe', 'qubera', 'fluidra', 'buildrooms'];
      return onTopic.some(k => lower.includes(k)) || text.length < 50;
    }

    let history = [];
    let loading = false;
    let isOpen = false;

    const container = document.createElement('div');
    container.innerHTML = `
      <div id="mehtab-sidebar">
        <div class="mllm-header">
          <div>
            <div class="mllm-brand">Ask <em>Mehtab</em></div>
            <div class="mllm-brand-sub">Ask me anything about my work</div>
          </div>
          <div class="mllm-header-actions">
            <button class="mllm-icon-btn" id="mllm-reset-btn" title="Reset">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2.5 8a5.5 5.5 0 1 0 1-3.2M2.5 2v3h3"/>
              </svg>
            </button>
            <button class="mllm-icon-btn" id="mllm-close-btn" title="Close">
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                <path d="M3 3l10 10M13 3L3 13"/>
              </svg>
            </button>
          </div>
        </div>
        <div id="mllm-messages">
          <div class="mllm-empty" id="mllm-empty">
            <p class="mllm-empty-prompt">What would you like to know?</p>
            <div class="mllm-starters">
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">What kind of work do you do?</span></button>
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">Tell me about your AI work</span></button>
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">How do you approach a new problem?</span></button>
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">How can I reach you?</span></button>
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">Are you open to new roles?</span></button>
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">Can I see your resume?</span></button>
            </div>
          </div>
          <div class="mllm-convo" id="mllm-convo" style="display:none;"></div>
        </div>
        <div class="mllm-input-area">
          <div class="mllm-input-wrap">
            <textarea id="mllm-input" placeholder="Ask me anything..." rows="1"></textarea>
            <button id="mllm-send" disabled>
              <svg viewBox="0 0 16 16"><path d="M14.5 8L2 2l2.5 6L2 14l12.5-6z"/></svg>
            </button>
          </div>
          <p class="mllm-footer">Ask Mehtab · Powered by Claude</p>
        </div>
      </div>
    `;
    document.body.appendChild(container);

    const inputEl = document.getElementById('mllm-input');
    const sendBtn = document.getElementById('mllm-send');
    const convo = document.getElementById('mllm-convo');
    const empty = document.getElementById('mllm-empty');
    const messages = document.getElementById('mllm-messages');
    const sidebar = document.getElementById('mehtab-sidebar');
    const isMobile = () => window.innerWidth <= 768;

    const open = () => {
      isOpen = true;
      sidebar.classList.add('open');
      if (isMobile()) {
        document.body.classList.add('sidebar-open');
      } else {
        document.body.style.marginRight = '420px';
      }
      setTimeout(() => inputEl.focus(), 350);
      window.dispatchEvent(new CustomEvent('chatbot-opened'));
    };

    const close = () => {
      isOpen = false;
      sidebar.classList.remove('open');
      document.body.classList.remove('sidebar-open');
      document.body.style.marginRight = '0px';
      window.dispatchEvent(new CustomEvent('chatbot-closed'));
    };

    const reset = () => {
      history = [];
      convo.innerHTML = '';
      convo.style.display = 'none';
      empty.style.display = 'flex';
      inputEl.value = '';
      inputEl.style.height = 'auto';
      sendBtn.disabled = true;
    };

    document.getElementById('mllm-close-btn').addEventListener('click', close);
    document.getElementById('mllm-reset-btn').addEventListener('click', reset);

    document.querySelectorAll('.mllm-starter').forEach(btn => {
      btn.addEventListener('click', () => {
        inputEl.value = btn.querySelector('.mllm-starter-text').textContent;
        send();
      });
    });

    inputEl.addEventListener('input', () => {
      inputEl.style.height = 'auto';
      inputEl.style.height = Math.min(inputEl.scrollHeight, 80) + 'px';
      sendBtn.disabled = !inputEl.value.trim() || loading;
    });

    inputEl.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
    });

    sendBtn.addEventListener('click', send);
    window.mllmOpen = open;
    window.mllmClose = close;

    const handleOpenEvent = () => open();
    window.addEventListener('open-chatbot', handleOpenEvent);

    const API_URL = 'https://long-surf-14cfmehtab-chatbot.mehtabbadwal.workers.dev';

    const MENU_OPTIONS = [
      'What kind of work do you do?',
      'Tell me about your AI work',
      'How do you approach a new problem?',
      'How can I reach you?',
      'Are you open to new roles?',
      'Can I see your resume?',
    ];

    function appendMenu() {
      // Remove any existing menu in convo
      const old = convo.querySelector('.mllm-followups');
      if (old) old.remove();

      const div = document.createElement('div');
      div.className = 'mllm-followups';
      const label = document.createElement('p');
      label.className = 'mllm-followup-label';
      label.textContent = 'What else would you like to know?';
      div.appendChild(label);
      MENU_OPTIONS.forEach(q => {
        const btn = document.createElement('button');
        btn.className = 'mllm-followup';
        btn.innerHTML = '<span class="mllm-followup-arrow">↳</span><span class="mllm-followup-text">' + q + '</span>';
        btn.addEventListener('click', () => { inputEl.value = q; send(); });
        div.appendChild(btn);
      });
      convo.appendChild(div);
      messages.scrollTop = messages.scrollHeight;
    }

    async function send() {
      const text = inputEl.value.trim();
      if (!text || loading) return;

      empty.style.display = 'none';
      convo.style.display = 'flex';
      inputEl.value = '';
      inputEl.style.height = 'auto';
      sendBtn.disabled = true;

      const userEl = document.createElement('div');
      userEl.className = 'mllm-msg-user';
      userEl.textContent = text;
      convo.appendChild(userEl);
      history.push({ role: 'user', content: text });
      messages.scrollTop = messages.scrollHeight;

      // Check FAQ first (free, instant)
      const faqAnswer = checkFAQ(text);
      if (faqAnswer) {
        const faqEl = document.createElement('div');
        faqEl.className = 'mllm-msg-assistant';
        faqEl.textContent = faqAnswer;
        convo.appendChild(faqEl);
        history.push({ role: 'assistant', content: faqAnswer });
        appendMenu();
        sendBtn.disabled = !inputEl.value.trim();
        return;
      }

      // Check relevance (block off-topic)
      if (!isPortfolioRelated(text)) {
        const offEl = document.createElement('div');
        offEl.className = 'mllm-msg-assistant';
        offEl.textContent = "I can only help with questions about my design work and portfolio. What would you like to know?";
        convo.appendChild(offEl);
        history.push({ role: 'assistant', content: offEl.textContent });
        appendMenu();
        sendBtn.disabled = !inputEl.value.trim();
        return;
      }

      loading = true;
      const assistantEl = document.createElement('div');
      assistantEl.className = 'mllm-msg-assistant streaming';
      assistantEl.textContent = '';
      convo.appendChild(assistantEl);

      try {
        const recentMessages = history.slice(-4);
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 500,
            system: SYSTEM,
            messages: recentMessages
          })
        });

        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || `HTTP ${res.status}`);
        }

        const data = await res.json();
        const fullText = data.content?.[0]?.text || 'No response';

        assistantEl.classList.remove('streaming');
        assistantEl.textContent = fullText;
        history.push({ role: 'assistant', content: fullText });
        appendMenu();

      } catch (err) {
        console.error('Chat error:', err);
        assistantEl.classList.remove('streaming');
        assistantEl.textContent = 'Sorry, something went wrong. Error: ' + err.message;
      }

      loading = false;
      sendBtn.disabled = !inputEl.value.trim();
    }

    // Handle mobile keyboard visibility
    const handleViewportResize = () => {
      if (isOpen && isMobile() && window.visualViewport) {
        const vv = window.visualViewport;
        sidebar.style.height = vv.height + 'px';
        sidebar.style.top = vv.offsetTop + 'px';
        messages.scrollTop = messages.scrollHeight;
      }
    };

    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportResize);
      window.visualViewport.addEventListener('scroll', handleViewportResize);
    }

    return () => {
      window.removeEventListener('open-chatbot', handleOpenEvent);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportResize);
        window.visualViewport.removeEventListener('scroll', handleViewportResize);
      }
      try { document.head.removeChild(style); } catch {}
    };
  }, []);

  return null;
}
