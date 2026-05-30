// ============================================================
// data/about.js — About section content
// ============================================================

export const BIO = [
  `I've spent 8 years at <strong>GLG</strong> — a PE-backed global expert network — managing a $14M+ annual book of business across the advisory and professional services organizations that shape how enterprises make decisions. Most of what I've built didn't exist before I built it: health scoring systems, renewal pipeline architecture, Salesforce-based portfolio dashboards, team playbooks, CoE design.`,
  `I operate at the intersection of client-facing delivery and operational infrastructure — the place where <em>data becomes decisions</em>. I'm now deepening the analytical side of that work. The GDA capstone, the Instacart dbt project, the ATX Foodie inspection analysis — all of it started with the same impulse: sit with messy data, find the pattern before you know what you're looking for, and surface the signal that changes what the business does next.`,
  `Outside of work I've built a personal data stack that I actually use: a mood and habit tracker (Life in Pixels), a structured journal, a multi-panel health dashboard (Life OS) pulling from Garmin wearable data, and a tarot reading tracker deployed on GitHub Pages. None of it was assigned. All of it taught me something. <strong>Building things for myself is how I learn what I want to build for others.</strong>`,
  `I'm looking for roles at data-driven companies where the analytical and operational sides of the business talk to each other — engagement management, CS operations, or business strategy where the work is about understanding what users actually do, not just what they say.`,
];

export const QUICK_FACTS = [
  { label: 'Currently',  value: 'Senior Manager, Service @ GLG' },
  { label: 'Location',   value: 'Austin, TX — Remote' },
  { label: 'Education',  value: 'B.S. Biochemistry · UT Austin · 2018' },
  { label: 'Running',    value: 'Trail runner · Garmin data nerd · cadence mapping' },
  { label: 'Targeting',  value: 'Engagement Manager, BizOps & CS Ops at data-driven companies' },
  {
    label: 'GitHub',
    value: '<a href="https://github.com/SamieVargas" target="_blank" rel="noopener">github.com/SamieVargas ↗</a>',
  },
];

export const INTERESTS = [
  {
    icon: '🏃',
    title: 'Trail Running & Wearable Data',
    body: 'I run with a Garmin and I actually look at the data. Cadence trends, HRV patterns, load spikes — the same signals I analyzed in my GDA capstone, applied to my own training. Running is where I first understood what dropout <em>feels like</em> before the data catches up. Currently rehabbing a knee injury and measuring everything.',
  },
  {
    icon: '📊',
    title: 'Personal Data Stack',
    body: 'I built Life in Pixels — a daily mood and habit tracker backed by Google Sheets — because I wanted real longitudinal data on my own patterns. That data now powers Life OS, a multi-panel dashboard with Chart.js visualizations, Gemini AI reflections, and Todoist integration. Not a side project. A real system I use every day.',
  },
  {
    icon: '🛠️',
    title: 'Building Things That Solve My Own Problems',
    body: 'Tarot Tracker (GitHub Pages · vanilla JS · Google Sheets sync), Life OS (Apps Script dashboard), a structured journal app, a daily log form. I build tools for myself first. If I can\'t get myself to use it, the design is wrong. This is also how I\'ve shipped 4 self-deployed apps without a computer science degree.',
  },
  {
    icon: '🔮',
    title: 'Tarot as a Reflection Practice',
    body: 'I pull cards most days as a journaling prompt, not a prediction tool. I built Tarot Tracker to log every pull, track card frequency, and surface patterns over time — stalker cards, ghost cards (never pulled), reorder rate by suit. It\'s behavioral data on my own thinking, which is exactly my brand.',
  },
  {
    icon: '🍜',
    title: 'Austin Food (and Its Inspection Records)',
    body: 'A JuiceLand pest report on Reddit sent me down a data rabbit hole. I ended up pulling 4,300+ health inspection records and building a brand compliance scorecard for 84 local restaurants. Now I can\'t eat anywhere without checking the data first. My Whole Foods order from yesterday confirmed the dairy eggs and produce reorder rate finding personally.',
  },
  {
    icon: '📓',
    title: 'Journaling as a Data Practice',
    body: 'Daily structured journaling since 2020. I treat it like tagging commits: consistent schema, recurring themes surfaced over time. It\'s where year-long patterns become visible in ways a single entry never shows. Also where most of my project ideas come from.',
  },
];

export const CONTACT = {
  heading: 'Let\'s work on something <em>worth discovering.</em>',
  subtext: 'Open to full-time remote roles in engagement management, CS operations, or business strategy at data-driven companies. Also available for freelance data analysis and GA4 audit projects.',
  email: 'sammisnv@gmail.com',
  links: [
    { label: 'Email',    value: 'sammisnv@gmail.com',                    href: '#copy-email',   copyEmail: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/samievargas12',          href: 'https://www.linkedin.com/in/samievargas12/', external: true },
    { label: 'GitHub',   value: 'github.com/SamieVargas',                 href: 'https://github.com/SamieVargas', external: true },
    { label: 'Kaggle',   value: 'kaggle.com/samievargas →',               href: 'https://www.kaggle.com/samievargas', external: true },
    { label: 'Resume',   value: 'Download PDF ↓',                         href: './Resume.pdf', external: true },
  ],
};
