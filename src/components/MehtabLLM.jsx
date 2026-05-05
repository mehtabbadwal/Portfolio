import { useEffect } from 'react';
import { STARTERS } from './chatStarters';

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
        font-family: var(--font-body);
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
        font-family: var(--font-body);
        font-size: 15px; font-weight: 500; color: #2C2420;
      }
      .mllm-brand em {
        font-style: italic; color: #C4603E;
        font-family: var(--font-heading);
        font-weight: 400;
      }
      .mllm-brand-sub {
        font-family: var(--font-body);
        font-size: 13px; color: #7A6A60;
        margin-top: 3px; font-weight: 400;
      }
      .mllm-header-actions { display: flex; gap: 4px; }
      .mllm-icon-btn {
        width: 32px; height: 32px; border: none; background: none;
        cursor: pointer; border-radius: 8px; display: flex;
        align-items: center; justify-content: center; color: #B0A090;
        font-family: var(--font-body);
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
        font-family: var(--font-heading); font-style: italic;
      }
      .mllm-starters { display: flex; flex-direction: column; }
      .mllm-starter {
        display: flex; align-items: center; gap: 10px;
        padding: 13px 0; border-top: 1px solid #EAE4D8;
        cursor: pointer; background: none; border-left: none;
        border-right: none; border-bottom: none;
        text-align: left; width: 100%;
        font-family: var(--font-body);
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
        font-family: var(--font-body);
        font-size: 15px; font-weight: 400; line-height: 1.6;
        padding: 10px 16px;
        border-radius: 18px; border-bottom-right-radius: 4px; max-width: 85%;
      }
      .mllm-msg-assistant {
        font-family: var(--font-body);
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
        font-family: var(--font-body);
      }
      .mllm-followup:last-child { border-bottom: 1px solid #EAE4D8; }
      .mllm-followup:hover .mllm-followup-text { color: #C4603E; }
      .mllm-followup-arrow { font-size: 12px; color: #B0A090; flex-shrink: 0; }
      .mllm-followup-text { font-size: 13px; color: #7A6A60; font-weight: 400; }
      .mllm-followup-label {
        font-size: 13px; color: #B0A090; font-weight: 400;
        margin: 0 0 4px; padding: 0;
        font-family: var(--font-body);
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
        font-family: var(--font-body);
        font-size: 16px; font-weight: 400; color: #2C2420;
        resize: none; min-height: 20px; max-height: 80px; line-height: 1.6;
      }
      #mllm-input::placeholder {
        font-family: var(--font-body);
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
        font-family: var(--font-body);
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

    const SYSTEM = `You are Mehtab Badwal speaking directly to someone visiting your portfolio. First person only. Warm, honest, direct. Talk like a real conversation — not like a resume.

CRITICAL: 2-4 sentences max per answer. No bullets. No headers. Sound like a person, not a document.

WHO YOU ARE:
Product designer, 6+ years. Currently leading product and UX at Rooms — an AI product for making things, end to end. Rooms is the infrastructure between "I want to make this" and "I made this." Closer to a production studio than a productivity tool.

Your role at Rooms goes beyond design — feature strategy, positioning, user testing, voice. Half your work is figuring out what the product is, what it isn't, and how every interaction reflects that.

Your line: "I design how products think — so users don't have to." What you actually do is read what people don't say out loud. The interesting problems usually start where the brief ends.

You came to UX through fashion — your first design education in how people actually decide. That lens hasn't changed.

Three things you believe:
- The conventional answer is a starting point, not a destination.
- Clarity isn't the same as simplicity.
- Design for the moment, not the average.

CASE STUDIES — what you figured out:

HPE Chatbot: The product team wanted to sunset the old Classic mode and force everyone onto the new AI. You pushed back. Users who don't trust AI won't suddenly trust it because you remove the alternative — they'll just stop using it. You argued for keeping both with a seamless toggle. The safety net was what made people willing to try.

HPE PFA: Most UX patterns push for revealing information gradually. But CSMs juggling 15+ accounts needed density, not simplicity. Cleaner is actually slower for power users. The driving question wasn't "how do I simplify this?" — it was "how dense is too dense?"

Qubera: Analysts were spending hours extracting the same financial metrics from 10-Ks. The data was already structured in the filings. The product just had to surface it. Pre-answered the routine questions so they could focus on the high-judgment ones.

Fluidra Pro: You left the office and tested at real pool sites in direct sunlight. Contrast that looked fine on a monitor became unreadable outdoors. Lab testing would never have caught it. Redesigned around the 40-minute technician window. Live on the App Store.

Fluidra Rewards: Marketing changed the entire brand two weeks before release, mid-testing. That's how product actually works. The job wasn't to push back — it was to figure out what could ship as MVP, what could wait, and how to keep the team aligned without losing the launch. Sometimes the design problem is a coordination problem.

WRITING:
You write at Mind Meets Design — a space where your thinking on products gets a place. Essays on what actually makes products better, frameworks for designers, observations from the work. Not a content strategy. Just what happens when you pay attention.

PERSONAL:
You write poems, paint, spend time at the San Diego ocean. You have a son who asks better questions than most stakeholders — your favorite research partner. Fashion design background still shapes how you think about form and intention.

WANT:
Meaningful problems. Collaborative team. No micromanagement.

CONTACT: [mehtabbadwal@gmail.com](mailto:mehtabbadwal@gmail.com)

THIS SITE:
Vibe-coded. You held every design decision and used Claude Code to write the code. Wasn't smooth — chatbot failed twice, half a day debugging. Came out understanding how developers actually think. The harder part than the technical: figuring out how this chatbot should sit on the page. Five iterations. Full story's on the This Site page.

VOICE NOTES (very important):
- You're direct without being cold
- Em dashes are your thing
- You comment on what you've actually noticed (the ocean, the sun, your son)
- You don't oversell, and you don't undersell
- You never use words like "passionate," "leverage," or "synergy"
- Your humor lands as warmth, not performance`;

    // FAQ responses — zero API calls, with topic for smart follow-ups
    const FAQ_MAP = [
      { keys: ['email', 'contact', 'reach', 'get in touch'], topic: 'contact', answer: "[mehtabbadwal@gmail.com](mailto:mehtabbadwal@gmail.com) — or LinkedIn. Always happy to talk about design, research, or how products actually work in the real world." },
      { keys: ['resume', 'cv', 'download resume'], topic: 'resume', answer: "Resume's in the nav. Fair warning — it's the formal version. The real story is in the case studies: what I argued for, what I pushed back on, what I figured out by going outside the office." },
      { keys: ['tools', 'software', 'what do you use', 'design tools'], topic: 'work', answer: "I work in Figma. But honestly, the design happens way before Figma — in interviews, in reading what people don't say out loud, in figuring out what question they're actually trying to answer. The tool's just where it lands." },
      { keys: ['experience', 'years', 'how long', 'how many years'], topic: 'work', answer: "6+ years across AI products, enterprise software, and field service. HPE chatbot and customer success platform, Qubera for financial analysts, Fluidra for pool technicians, now Rooms. The pattern: most problems aren't UX problems — they're systems problems that show up in the interface." },
      { keys: ['process', 'approach', 'methodology', 'how do you design', 'how do you work'], topic: 'approach', answer: "Research first, always. I start by understanding behavior — what people actually do, not what they say they'll do. Then insights, prototypes, testing, iteration. Every design decision needs a behavioral framework behind it, or it's just decoration." },
      { keys: ['hire', 'available', 'looking for work', 'open to opportunities', 'hiring'], topic: 'hiring', answer: "Yes — I'm looking. Senior or Staff UX roles where research and systems thinking are actually part of the work, not just a section in the deck. If that's your team, [mehtabbadwal@gmail.com](mailto:mehtabbadwal@gmail.com)." },
      { keys: ['location', 'where', 'based', 'live', 'san diego'], topic: 'contact', answer: "I'm based in sunny San Diego, where the sun and ocean remind me that good design, like good weather, should just work without making you think about it." },
      { keys: ['case study', 'case studies', 'projects', 'portfolio', 'examples'], topic: 'work', answer: "Five case studies on the Work page: AI chatbots that didn't try to be smarter than users, research tools analysts actually wanted, field apps built around a 40-minute reality check. Currently I'm leading product and UX at Rooms — the most recent thing, not in the case studies yet. Each project starts with a question that isn't about the interface." },
      { keys: ['industries', 'sectors', 'domains', 'what industries'], topic: 'work', answer: "Enterprise, AI products, field service, B2B SaaS. The thread running through all of it: the person paying for the product usually isn't the one using it. Most of my work has been figuring out what the actual user needs versus what got specced." },
      { keys: ['freelance', 'consulting', 'contract', 'part time'], topic: 'hiring', answer: "Focused on full-time Senior or Staff roles, but I'll consider the right consulting project. If you've got something interesting, [mehtabbadwal@gmail.com](mailto:mehtabbadwal@gmail.com)." },
      { keys: ['how did you build', 'vibe cod', 'built this site', 'coded this', 'how was this site', 'how did you make this'], topic: 'thissite', answer: "Vibe-coded it — held every design decision myself and used Claude Code to write the code. Wasn't smooth: chatbot failed twice, half a day debugging, came out understanding how developers actually think. The hardest part wasn't technical though — it was figuring out how this chatbot should sit on the page. Took five iterations. Full story's on the This Site page." },
      { keys: ['outside', 'hobbies', 'personal', 'free time', 'fun'], topic: 'outside', answer: "I write poems, paint, and spend time at the ocean in San Diego. My son asks better questions than most stakeholders — he's my favorite research partner. I also have a fashion design background, which still shapes how I think about form and intention." },
      { keys: ['mind meets design', 'mmd', 'writing', 'blog', 'essays', 'frameworks', 'what do you write'], topic: 'writing', answer: "Mind Meets Design is where my thinking on products gets a place. Essays on what actually makes products better, frameworks for designers, observations from the work. It's not a content strategy — it's just what happens when I pay attention. The Writing page has all of it." },
      { keys: ['rooms', 'what are you working on', 'current role', 'current job', 'what do you do now', 'where do you work', 'tell me about your job', 'these days', 'right now', 'currently', 'production studio'], topic: 'rooms', answer: "I'm leading product and UX at Rooms — an AI product for making things. It's the infrastructure between 'I want to make this' and 'I made this.' Closer to a production studio than a planner. My role goes beyond design: feature strategy, positioning, user testing, voice — figuring out what the product is, what it isn't, and how every interaction reflects that." },
      { keys: ['ai work', 'ai experience', 'ai products', 'ai design', 'tell me about your ai', 'designing for ai', 'ai project'], topic: 'ai', answer: "Most of my recent work has been AI-adjacent. At HPE I argued against hiding AI uncertainty — the escape route to Classic mode was what made people willing to try the new chatbot. At Qubera I designed an analyst tool where the product pre-answered routine questions so analysts could focus on judgment calls. Now at Rooms I'm leading product and UX on an AI product for making things. The pattern across all of them: AI works when it stays out of the way of human decision-making, and breaks when it tries to replace it." },
    ];

    // Smart follow-up questions based on topic
    const FOLLOW_UP_MAP = {
      work: ['Tell me about Rooms', 'What did you figure out at HPE?', 'How do you approach a new problem?'],
      ai: ['Tell me about Rooms', 'How do you design for AI uncertainty?', 'What did you learn from the HPE chatbot?'],
      approach: ['How do you handle stakeholder pushback?', 'What does research look like in your work?', 'Tell me about a hard call you made'],
      contact: ['Are you open to new roles?', 'Tell me about Rooms', 'Can I see your resume?'],
      hiring: ['What kind of team are you looking for?', 'Tell me about Rooms', 'What problems do you want to work on?'],
      resume: ['Tell me about Rooms', 'What did you figure out at HPE?', 'Are you open to new roles?'],
      outside: ['What is Mind Meets Design?', 'Tell me about your fashion background', 'What are you working on now?'],
      thissite: ['Tell me about the chatbot', 'What broke during the build?', 'What is Mind Meets Design?'],
      writing: ['Tell me about Rooms', 'What is Mind Meets Design about?', 'How do you approach a new problem?'],
      rooms: ['Who is Rooms for?', 'What do you do at Rooms?', 'What is Mind Meets Design?'],
      default: ['Tell me about Rooms', 'How do you approach a new problem?', 'Are you open to new roles?'],
    };

    function checkFAQ(text) {
      const lower = text.toLowerCase();
      for (const faq of FAQ_MAP) {
        if (faq.keys.some(k => lower.includes(k))) return faq;
      }
      return null;
    }

    function detectTopic(text) {
      const lower = text.toLowerCase();
      if (lower.includes('mind meets design') || lower.includes('writing') || lower.includes('blog') || lower.includes('essay') || lower.includes('framework')) return 'writing';
      if (lower.includes('rooms') || lower.includes('current role') || lower.includes('current job') || lower.includes('what are you working on') || lower.includes('what do you do now') || lower.includes('production studio')) return 'rooms';
      if (lower.includes('ai') || lower.includes('artificial intelligence')) return 'ai';
      if (lower.includes('contact') || lower.includes('email') || lower.includes('reach')) return 'contact';
      if (lower.includes('hire') || lower.includes('job') || lower.includes('role') || lower.includes('opportunity')) return 'hiring';
      if (lower.includes('resume') || lower.includes('cv')) return 'resume';
      if (lower.includes('outside') || lower.includes('hobbies') || lower.includes('personal')) return 'outside';
      if (lower.includes('approach') || lower.includes('process') || lower.includes('methodology')) return 'approach';
      if (lower.includes('work') || lower.includes('project') || lower.includes('case')) return 'work';
      return 'default';
    }

    function isPortfolioRelated(text) {
      const lower = text.toLowerCase();
      const offTopic = ['weather', 'news', 'stock', 'recipe', 'joke', 'math', 'translate', 'movie', 'game', 'sports', 'crypto'];
      if (offTopic.some(k => lower.includes(k))) return false;
      const onTopic = ['design', 'ux', 'ui', 'portfolio', 'work', 'case', 'project', 'mehtab', 'experience', 'contact', 'research', 'product', 'user', 'hpe', 'qubera', 'fluidra', 'mind meets design', 'writing', 'essay', 'framework', 'blog', 'rooms'];
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
              ${STARTERS.map(s => `<button class="mllm-starter"><span class="mllm-arrow">↳</span><span class="mllm-starter-text">${s.text}</span></button>`).join('')}
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

    const handleOpenEvent = (e) => {
      open();
      const msg = e && e.detail && e.detail.message;
      if (msg) {
        setTimeout(() => {
          inputEl.value = msg;
          send();
        }, 380);
      }
    };
    window.addEventListener('open-chatbot', handleOpenEvent);

    const API_URL = 'https://long-surf-14cfmehtab-chatbot.mehtabbadwal.workers.dev';

    function appendMenu(topic, askedText) {
      const old = convo.querySelector('.mllm-followups');
      if (old) old.remove();

      const allQuestions = FOLLOW_UP_MAP[topic] || FOLLOW_UP_MAP.default;
      const askedLower = (askedText || '').toLowerCase().trim();
      const questions = allQuestions.filter(q => {
        const qLower = q.toLowerCase().trim();
        if (!askedLower) return true;
        if (qLower === askedLower) return false;
        if (askedLower.includes(qLower) || qLower.includes(askedLower)) return false;
        return true;
      });

      const finalQuestions = questions.length > 0
        ? questions
        : FOLLOW_UP_MAP.default.filter(q => q.toLowerCase().trim() !== askedLower);

      const div = document.createElement('div');
      div.className = 'mllm-followups';
      const label = document.createElement('p');
      label.className = 'mllm-followup-label';
      label.textContent = 'Want to know more?';
      div.appendChild(label);
      finalQuestions.forEach(q => {
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
      const faqResult = checkFAQ(text);
      if (faqResult) {
        const faqEl = document.createElement('div');
        faqEl.className = 'mllm-msg-assistant';
        faqEl.textContent = faqResult.answer;
        convo.appendChild(faqEl);
        history.push({ role: 'assistant', content: faqResult.answer });
        appendMenu(faqResult.topic, text);
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
        appendMenu('default', text);
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
        appendMenu(detectTopic(text), text);

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
