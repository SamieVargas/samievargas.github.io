// ============================================================
// data/about.js — About section content
// Edit bio paragraphs, quick facts, interests, and contact here.
// ============================================================

export const BIO = [
  `I've spent 8 years at <strong>GLG</strong> — a PE-backed global expert network — managing a $14M+ annual book of business across the advisory and professional services organizations that shape how enterprises make decisions.`,
  `Most of what I've built didn't exist before I built it. Health scoring systems, renewal pipeline architecture, Salesforce-based portfolio dashboards, team playbooks, CoE design. I operate at the intersection of client-facing delivery and operational infrastructure — the place where <em>data becomes decisions</em>.`,
  `I'm now deepening the analytical side of that work. The part of the job I've always found most energizing isn't the account management — it's the discovery phase: sitting with messy data, finding patterns before you know what you're looking for, and surfacing the signal that changes what the business does next.`,
  `My GDA capstone — behavioral dropout prediction on longitudinal wearable data — was the first time I got to do that work from scratch. <strong>It was genuinely fun.</strong> I'm building toward more of it.`,
];

export const QUICK_FACTS = [
  { label: 'Currently',  value: 'Senior Manager, Service @ GLG' },
  { label: 'Location',   value: 'Austin, TX — Remote' },
  { label: 'Education',  value: 'B.S. Biochemistry · UT Austin · 2018' },
  { label: 'Interests',  value: 'Trail running · Garmin data · cadence mapping · wearable health tech' },
  { label: 'Targeting',  value: 'Engagement Manager, BizOps & CS Operations at data-driven companies' },
  {
    label: 'GitHub',
    value: '<a href="https://github.com/SamieVargas" target="_blank" rel="noopener">github.com/SamieVargas ↗</a>',
  },
];

export const INTERESTS = [
  {
    icon: '🏃',
    title: 'Trail Running & Cadence Data',
    body: 'I run with a Garmin and I actually look at the data. Cadence trends, HRV patterns, load spikes — the same signals I analyzed in my GDA capstone, applied to my own training. Running is where I first understood what dropout <em>feels like</em> before the data catches up.',
  },
  {
    icon: '📊',
    title: 'Personal Analytics',
    body: 'I built Life in Pixels — a mood and habit tracker backed by Google Sheets — because I wanted real longitudinal data on my own patterns. That +0.5 mood lift from walking isn\'t anecdote, it\'s six months of logged entries.',
  },
  {
    icon: '📓',
    title: 'Journaling as a Data Practice',
    body: 'Daily structured journaling since 2020. I treat it like tagging commits: consistent schema, recurring themes surfaced over time. It\'s where year-long patterns become visible in ways a single entry never shows.',
  },
  {
    icon: '🍜',
    title: 'Austin Food (and Its Inspection Records)',
    body: 'A JuiceLand pest report on Reddit sent me down a data rabbit hole. I ended up pulling 4,300+ health inspection records and building a brand compliance scorecard. Now I can\'t eat anywhere without checking the data first.',
  },
  {
    icon: '📚',
    title: 'Continuous Learning',
    body: 'Working through Google Advanced Data Analytics and Salesforce Admin. Not because they\'re required — because I find the data problems genuinely interesting and want to get better at solving them faster.',
  },
  {
    icon: '☕',
    title: 'Austin & the Craft of Things',
    body: 'Deeply Austin — good coffee, local food, the kind of city that rewards showing up for things. I find craft in unexpected places and it usually ends up in a journal entry or a dataset.',
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
