// ============================================================
// data/about.js — About section content
// ============================================================

export const BIO = [
  `Eight years at <strong>GLG</strong> — a PE-backed global expert network — managing a $14M+ book of enterprise accounts. Most of what I built there didn't exist before I built it: health scoring systems, renewal pipeline architecture, Salesforce dashboards, team playbooks, a Center of Excellence from scratch. I operate where client delivery and operational data meet, which is a weird niche that I've gotten pretty good at.`,
  `I'm now doing the thing I kept wishing someone on my team would do: closing the gap between what the numbers say and what the business actually does next. The GDA capstone, the Instacart dbt project, the ATX Foodie inspection analysis — all of it started the same way. Sit with messy data. Find the pattern before you know what you're looking for. Surface the signal that changes what happens next.`,
  `This site is a portfolio but it's also just me. The projects here reflect the way I think — personal data systems, public health records, behavioral analytics, building things I actually use. I'd be doing most of this even if I wasn't job searching. The Agatha Christie read-through and the Ring Fit dragon-fighting are not for the resume. <strong>Everything else kind of is.</strong>`,
  `I'm looking for roles at data-driven companies where the analytical and operational sides of the business actually talk to each other. Remote only. Austin stays.`,
];

export const QUICK_FACTS = [
  { label: 'Currently',  value: 'Senior Manager, Service @ GLG' },
  { label: 'Location',   value: 'Austin, TX — Remote' },
  { label: 'Education',  value: 'B.S. Biochemistry · UT Austin · 2018' },
  { label: 'Running',    value: 'Trail runner · Garmin data nerd · 15 of 21mi Greenbelt goal' },
  { label: 'Targeting',  value: 'Engagement Manager, BizOps & CS Ops — remote · data-driven companies' },
  {
    label: 'GitHub',
    value: '<a href="https://github.com/SamieVargas" target="_blank" rel="noopener">github.com/SamieVargas ↗</a>',
  },
];

export const INTERESTS = [
  {
    icon: '🏃',
    title: 'Trail Running & the Greenbelt',
    body: 'I run with a Garmin and I actually look at the data. Cadence trends, HRV patterns, load spikes — the same signals I analyzed in the GDA capstone, applied to my own training. Currently rehabbing a knee and measuring everything. Working up to a full 21-mile Barton Creek Greenbelt out-and-back — at 15 miles right now. The HRV correlation with injury risk was more obvious in hindsight than I wanted to admit.',
  },
  {
    icon: '📊',
    title: 'Personal Data Stack',
    body: 'I built Life in Pixels because I wanted real longitudinal data on my own patterns. That data now powers Life OS — a multi-panel dashboard with Chart.js visualizations, Gemini AI weekly reflections, and Todoist integration. Not a side project I abandoned. A real system I open every day. The walk/mood finding (+0.5 on days I go outside) came out of this. So did realizing I was under-sleeping by exactly one cycle most nights.',
  },
  {
    icon: '🍜',
    title: 'Austin Food (and Its Inspection Records)',
    body: 'I love exploring Austin\'s food scene — current favorites are Paprika, Desnudo, and Terrible Love. I\'m also on an ongoing and possibly doomed search for the perfect Caesar salad in Austin. Separately, a JuiceLand pest report on Reddit sent me down a data rabbit hole and I ended up building a compliance scorecard for 84 local restaurants. I still went back to JuiceLand. The green juice was fine.',
  },
  {
    icon: '🔮',
    title: 'Tarot as a Reflection Practice',
    body: 'I pull cards most days as a journaling prompt, not a prediction method. I built Tarot Tracker to log every pull, track card frequency, and surface patterns over time — stalker cards, ghost cards, reorder rate by suit. Behavioral data on my own thinking. Very much my brand. I have seven decks. The Rider-Waite-Smith images are in the public domain and I have the copyright audit to prove it.',
  },
  {
    icon: '🧘',
    title: 'Ring Fit, Hot Yoga & Pilates',
    body: 'Ring Fit Adventure is genuinely fun in a way gym equipment isn\'t — it turns out I need a dragon to fight to stay motivated. The hot yoga and pilates mix is for the knee rehab and the nervous system reset. There\'s something about moving in a hot room that processes things no amount of data logging can touch.',
  },
  {
    icon: '📚',
    title: 'Agatha Christie, Cover to Cover',
    body: 'Working through the complete Christie catalog in order. Currently paused somewhere in the Poirot series — he\'s getting older in the later books and I\'m not quite ready to read toward the end of something I love. In the meantime I\'m reading everything else she wrote. Miss Marple has been a revelation.',
  },
  {
    icon: '🛠️',
    title: 'Building Things That Solve My Own Problems',
    body: 'Tarot Tracker (GitHub Pages, vanilla JS, Google Sheets sync), Life OS (Apps Script dashboard), a structured journal app, a daily log form, a vehicle maintenance tracker, a travel planner template. I build for myself first. If I can\'t get myself to use it, the design is wrong. Four self-deployed apps, no computer science degree. The design constraint is always: would I open this when I\'m tired?',
  },
  {
    icon: '📓',
    title: 'Journaling as a Data Practice',
    body: 'Daily structured journaling since 2020. I treat it like tagging commits: consistent schema, recurring themes that only become visible across months of entries. It\'s where year-long patterns show up. Also where most of my project ideas come from. I built my own journal app so the prompts are exactly what I want.',
  },
];

export const CONTACT = {
  heading: 'Let\'s work on something <em>worth discovering.</em>',
  subtext: 'Interested in engagement management, CS operations, or strategy roles at data-driven companies. Remote only. Also available for freelance data analysis and GA4 audit projects.',
  email: 'sammisnv@gmail.com',
  links: [
    { label: 'Email',    value: 'sammisnv@gmail.com',                    href: '#copy-email',   copyEmail: true },
    { label: 'LinkedIn', value: 'linkedin.com/in/samievargas12',          href: 'https://www.linkedin.com/in/samievargas12/', external: true },
    { label: 'GitHub',   value: 'github.com/SamieVargas',                 href: 'https://github.com/SamieVargas', external: true },
    { label: 'Kaggle',   value: 'kaggle.com/samievargas →',               href: 'https://www.kaggle.com/samievargas', external: true },
    { label: 'Resume',   value: 'Download PDF ↓',                         href: './Resume.pdf', external: true },
  ],
};
