// Single source of truth for chatbot starter questions.
// Used by:
//   - MehtabLLM.jsx (renders all starters in the empty state of the sidebar)
//   - FloatingChatButton.jsx (rotates the dock-marked subset as chips)
//
// "isDock: true" marks the strongest 4 conversation-openers for the docked panel.
// All starters route through the FAQ_MAP keyword matcher in MehtabLLM.jsx,
// so question wording can be edited freely as long as the keywords are preserved.

export const STARTERS = [
  { text: 'What kind of work do you do?',        isDock: false },
  { text: 'Tell me about your AI work',          isDock: true  },
  { text: 'How do you approach a new problem?',  isDock: true  },
  { text: 'How can I reach you?',                isDock: false },
  { text: 'Are you open to new roles?',          isDock: false },
  { text: 'Can I see your resume?',              isDock: false },
  { text: 'What do you do outside of work?',     isDock: true  },
  { text: 'How did you build this site?',        isDock: true  },
];

export const DOCK_STARTERS = STARTERS.filter(s => s.isDock).map(s => s.text);
