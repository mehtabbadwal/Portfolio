import { useEffect } from 'react';

export default function MehtabLLM() {
  useEffect(() => {
    if (document.getElementById('mehtab-sidebar')) return;

    const style = document.createElement('style');
    style.textContent = `
      body {
        transition: margin-right 0.32s cubic-bezier(0.16,1,0.3,1);
      }
      #mllm-trigger {
        position: fixed; bottom: 32px; right: 32px;
        height: 40px; padding: 0 16px 0 12px;
        border-radius: 8px; background: #2C2420;
        border: none; cursor: pointer;
        display: flex; align-items: center; gap: 8px;
        z-index: 100;
        box-shadow: 0 2px 16px rgba(44,36,32,0.18);
        font-family: -apple-system, sans-serif;
        transition: background 0.2s;
      }
      #mllm-trigger:hover { background: #C4603E; }
      .mllm-trigger-dot {
        width: 6px; height: 6px; border-radius: 999px;
        background: #6B9E6B; flex-shrink: 0;
      }
      .mllm-trigger-label {
        font-size: 12px; font-weight: 600;
        color: #F4F0E8; letter-spacing: 0.06em;
        text-transform: uppercase;
      }
      .mllm-trigger-label em {
        font-style: italic; color: #C4603E;
        font-family: Georgia, serif;
        text-transform: none; letter-spacing: 0;
      }
      #mllm-trigger:hover .mllm-trigger-label em { color: #F4F0E8; }
      #mehtab-sidebar {
        position: fixed; top: 0; right: 0;
        width: 420px; height: 100vh;
        background: #FAF8F5; z-index: 300;
        display: flex; flex-direction: column;
        transform: translateX(100%);
        transition: transform 0.32s cubic-bezier(0.16,1,0.3,1);
        border-left: 1px solid #D6CFBF;
        font-family: -apple-system, sans-serif;
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
        font-size: 13px; font-weight: 600; color: #2C2420;
        letter-spacing: 0.08em; text-transform: uppercase;
      }
      .mllm-brand em {
        font-style: italic; color: #C4603E;
        font-family: Georgia, serif;
        text-transform: none; letter-spacing: 0;
      }
      .mllm-brand-sub {
        font-size: 12px; color: #7A6A60;
        margin-top: 3px; font-weight: 400; text-transform: none;
      }
      .mllm-header-actions { display: flex; gap: 4px; }
      .mllm-icon-btn {
        width: 32px; height: 32px; border: none; background: none;
        cursor: pointer; border-radius: 8px; display: flex;
        align-items: center; justify-content: center; color: #B0A090;
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
        font-family: Georgia, serif; font-style: italic;
      }
      .mllm-starters { display: flex; flex-direction: column; }
      .mllm-starter {
        display: flex; align-items: center; gap: 10px;
        padding: 13px 0; border-top: 1px solid #EAE4D8;
        cursor: pointer; background: none; border-left: none;
        border-right: none; border-bottom: none;
        text-align: left; font-family: inherit; width: 100%;
      }
      .mllm-starter:last-child { border-bottom: 1px solid #EAE4D8; }
      .mllm-starter:hover .mllm-starter-text { color: #C4603E; }
      .mllm-arrow { font-size: 13px; color: #B0A090; flex-shrink: 0; }
      .mllm-starter-text { font-size: 14px; color: #2C2420; }
      .mllm-convo {
        padding: 24px; display: flex;
        flex-direction: column; gap: 20px;
      }
      .mllm-msg-user {
        align-self: flex-end; background: #EAE4D8; color: #2C2420;
        font-size: 14px; line-height: 1.55; padding: 10px 16px;
        border-radius: 18px; border-bottom-right-radius: 4px; max-width: 85%;
      }
      .mllm-msg-assistant {
        font-size: 15px; color: #2C2420; line-height: 1.75;
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
        text-align: left; font-family: inherit; width: 100%;
      }
      .mllm-followup:last-child { border-bottom: 1px solid #EAE4D8; }
      .mllm-followup:hover .mllm-followup-text { color: #C4603E; }
      .mllm-followup-arrow { font-size: 12px; color: #B0A090; flex-shrink: 0; }
      .mllm-followup-text { font-size: 13px; color: #7A6A60; }
      .mllm-input-area {
        padding: 14px 20px 20px; border-top: 1px solid #EAE4D8;
        flex-shrink: 0; background: #FAF8F5;
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
        font-size: 14px; color: #2C2420; font-family: inherit;
        resize: none; min-height: 20px; max-height: 80px; line-height: 1.5;
      }
      #mllm-input::placeholder { color: #B0A090; }
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
        text-align: center; font-size: 10px;
        color: #B0A090; margin-top: 10px;
      }
      @media (max-width: 480px) {
        #mehtab-sidebar { width: 100%; }
        #mllm-trigger { bottom: 80px; }
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

    let history = [];
    let loading = false;
    let isOpen = false;

    const container = document.createElement('div');
    container.innerHTML = `
      <button id="mllm-trigger">
        <div class="mllm-trigger-dot"></div>
        <span class="mllm-trigger-label">Mehtab<em>LLM</em></span>
      </button>
      <div id="mehtab-sidebar">
        <div class="mllm-header">
          <div>
            <div class="mllm-brand">Mehtab<em>LLM</em></div>
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
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">Are you open to new roles?</span></button>
              <button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">What do you do outside of work?</span></button>
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
          <p class="mllm-footer">MehtabLLM · Powered by Claude</p>
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
    const isMobile = () => window.innerWidth < 480;

    const open = () => {
      isOpen = true;
      sidebar.classList.add('open');
      if (!isMobile()) {
        document.body.style.marginRight = '420px';
      }
      setTimeout(() => inputEl.focus(), 350);
    };

    const close = () => {
      isOpen = false;
      sidebar.classList.remove('open');
      document.body.style.marginRight = '0px';
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

    document.getElementById('mllm-trigger').addEventListener('click', open);
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

    const API_URL = 'https://api.anthropic.com/v1/messages';

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

      loading = true;
      const assistantEl = document.createElement('div');
      assistantEl.className = 'mllm-msg-assistant streaming';
      convo.appendChild(assistantEl);

      try {
        const res = await fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 300,
            stream: true,
            system: SYSTEM,
            messages: history
          })
        });

        if (!res.ok) throw new Error('API error ' + res.status);

        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let fullText = '', buffer = '';

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split('\n');
          buffer = lines.pop();
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              try {
                const p = JSON.parse(line.slice(6));
                if (p.type === 'content_block_delta' && p.delta?.text) {
                  fullText += p.delta.text;
                  assistantEl.textContent = fullText;
                  messages.scrollTop = messages.scrollHeight;
                }
              } catch {}
            }
          }
        }

        assistantEl.classList.remove('streaming');
        history.push({ role: 'assistant', content: fullText });

        try {
          const fRes = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              model: 'claude-sonnet-4-20250514',
              max_tokens: 100,
              system: 'Generate 3 short follow-up questions. One per line. No numbers. No arrows. Under 9 words each.',
              messages: [{ role: 'user', content: 'Answer: "' + fullText + '"' }]
            })
          });
          const fData = await fRes.json();
          const questions = (fData.content?.[0]?.text || '')
            .split('\n').map(q => q.trim())
            .filter(q => q.length > 4).slice(0, 3);

          if (questions.length) {
            const div = document.createElement('div');
            div.className = 'mllm-followups';
            questions.forEach(q => {
              const btn = document.createElement('button');
              btn.className = 'mllm-followup';
              btn.innerHTML = '<span class="mllm-followup-arrow">↳</span><span class="mllm-followup-text">' + q + '</span>';
              btn.addEventListener('click', () => { inputEl.value = q; send(); });
              div.appendChild(btn);
            });
            convo.appendChild(div);
            messages.scrollTop = messages.scrollHeight;
          }
        } catch {}

      } catch (err) {
        assistantEl.classList.remove('streaming');
        assistantEl.textContent = 'Something went wrong. This may work once the site is published — the preview environment sometimes blocks external API calls.';
      }

      loading = false;
      sendBtn.disabled = !inputEl.value.trim();
    }

    return () => {
      try { document.head.removeChild(style); } catch {}
    };
  }, []);

  return null;
}
