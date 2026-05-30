// ============================================================
// data/about.js — About section content
// ============================================================

export const BIO = [
  `Eight years at <strong>GLG</strong> — a PE-backed global expert network — managing a $14M+ book of enterprise accounts. Most of what I built there didn't exist before I built it: health scoring systems, renewal pipeline architecture, Salesforce dashboards, team playbooks, a Center of Excellence from scratch. I operate where client delivery and operational data meet, which is a weird niche that I've gotten pretty good at.`,
  `I'm now doing the thing I kept wishing someone on my team would do: closing the gap between what the numbers say and what the business actually does next. The GDA capstone, the Instacart dbt project, the ATX Foodie inspection analysis — all of it started the same way. Sit with messy data. Find the pattern before you know what you're looking for. Surface the signal that changes what happens next.`,
  `Outside of work I built a personal data stack I actually use: a mood and habit tracker (Life in Pixels), a structured journal, a multi-panel health dashboard (Life OS) pulling from Garmin wearable data, a tarot tracker deployed on GitHub Pages. None of it was assigned. All of it taught me something. <strong>Building for myself is how I learn what I want to build for others.</strong>`,
  `I'm looking for roles at data-driven companies where the analytical and operational sides of the business actually talk to each other — engagement management, CS operations, or strategy work where understanding what users do matters more than what they say they'll do.`,
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
    body: 'I run with a Garmin and I actually look at the data. Cadence trends, HRV patterns, load spikes — the same signals I analyzed in the GDA capstone, applied to my own training. Running is where I first understood what dropout <em>feels like</em> before the data shows it. Currently rehabbing a knee and measuring everything.',
  },
  {
    icon: '📊',
    title: 'Personal Data Stack',
    body: 'I built Life in Pixels because I wanted real longitudinal data on my own patterns. That data now powers Life OS — a multi-panel dashboard with Chart.js visualizations, Gemini AI weekly reflections, and Todoist integration. Not a side project I abandoned. A real system I open every day.',
  },
  {
    icon: '🛠️',
    title: 'Building Things That Solve My Own Problems',
    body: 'Tarot Tracker (GitHub Pages, vanilla JS, Google Sheets sync), Life OS (Apps Script dashboard), a structured journal app, a daily log form. I build for myself first. If I can\'t get myself to use it, the design is wrong. Four self-deployed apps, no computer science degree.',
  },
  {
    icon: '🔮',
    title: 'Tarot as a Reflection Practice',
    body: 'I pull cards most days as a journaling prompt, not a prediction method. I built Tarot Tracker to log every pull, track card frequency, and surface patterns over time — stalker cards, ghost cards, reorder rate by suit. Behavioral data on my own thinking. Very much my brand.',
  },
  {
    icon: '🍜',
    title: 'Austin Food (and Its Inspection Records)',
    body: 'A JuiceLand pest report on Reddit sent me down a data rabbit hole. I pulled 21,160 health inspection records and built a brand compliance scorecard for 84 local restaurants. Now I check the data before I eat anywhere. I went back to JuiceLand a couple weeks later anyway. The green juice was fine.',
  },
  {
    icon: '📓',
    title: 'Journaling as a Data Practice',
    body: 'Daily structured journaling since 2020. I treat it like tagging commits: consistent schema, recurring themes that only become visible across months of entries. It\'s where year-long patterns show up. Also where most of my project ideas come from.',
  },
];

export const CONTACT = {
  heading: 'Let\'s work on something <em>worth discovering.</em>',
  subtext: 'Interested in engagement management, CS operations, or strategy roles at data-driven companies. Also available for freelance data analysis and GA4 audit projects.',
  email: 'sammisnv@gmail.com',
  links: [
    { label: 'Email',    value: 'sammisnv@gmail.com',                    href: '#copy-email',   copyEmail: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/samievargas12',          href: 'https://www.linkedin.com/in/samievargas12/', external: true },
    { label: 'GitHub',   value: 'github.com/SamieVargas',                 href: 'https://github.com/SamieVargas', external: true },
    { label: 'Kaggle',   value: 'kaggle.com/samievargas →',               href: 'https://www.kaggle.com/samievargas', external: true },
    { label: 'Resume',   value: 'Download PDF ↓',                         href: './Resume.pdf', external: true },
  ],
};
