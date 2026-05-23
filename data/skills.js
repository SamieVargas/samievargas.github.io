// ============================================================
// data/skills.js — Skills groups and certifications
// ============================================================

export const SKILL_GROUPS = [
  {
    title: 'Analytics',
    items: [
      { name: 'Python', note: 'pandas · numpy · seaborn · matplotlib' },
      { name: 'SQL / BigQuery' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Feature Engineering' },
      { name: 'Logistic Regression' },
      { name: 'Classification Modeling' },
      { name: 'Cohort & Segment Analysis' },
      { name: 'Behavioral Pattern Analysis' },
      { name: 'Time Series & Longitudinal Analysis' },
      { name: 'Weighted Scoring & Statistical Normalization' },
      { name: 'API Data Ingestion', note: 'Socrata REST' },
      { name: 'Entity Resolution & Data Cleaning' },
    ],
  },
  {
    title: 'Visualization',
    items: [
      { name: 'matplotlib & seaborn', note: 'advanced' },
      { name: 'folium', note: 'geospatial choropleth' },
      { name: 'Tableau' },
      { name: 'Power BI' },
      { name: 'Google Looker Studio' },
      { name: 'Google Slides', note: 'data narrative decks' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'scikit-learn', note: 'LR · metrics · preprocessing' },
      { name: 'Google Analytics 4', note: 'certified ✓' },
      { name: 'Google Apps Script', note: '2 self-built apps' },
      { name: 'Kaggle Notebooks' },
      { name: 'Salesforce', note: 'cert in progress' },
      { name: 'BigQuery' },
      { name: 'Google Sheets', note: 'advanced' },
    ],
  },
  {
    title: 'Operations',
    items: [
      { name: 'Engagement Lifecycle Mgmt' },
      { name: 'Health Scoring Architecture' },
      { name: 'Playbook & CoE Design' },
      { name: 'SOW Management' },
      { name: 'Renewal Pipeline Architecture' },
      { name: 'Cross-Functional Alignment' },
      { name: 'Agile / Scrum', note: 'PSM I' },
    ],
  },
  {
    title: 'AI & Productivity',
    items: [
      { name: 'Claude', note: 'daily' },
      { name: 'ChatGPT · Gemini · Copilot' },
      { name: 'In-house LLM workflows' },
      { name: 'Prompt Engineering' },
      { name: 'Notion · Jira · Asana' },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: 'Google Analytics Certification (GA4)',
    issuer: 'Google · Skillshop · Issued May 21, 2026 · ID: 182987115',
    links: [
      { label: 'Verify ↗', href: 'https://skillshop.credential.net/da7f2a2d-1e02-4267-aaca-d6bfbfc3036e#acc.5RV2vAUu' },
      { label: 'Credly ↗', href: 'https://www.credly.com/badges/cdf8ff04-0b23-435a-a53d-3c46ab172885' },
    ],
    status: 'done',
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Google / Coursera · May 2026',
    links: [{ label: 'Verify ↗', href: 'https://coursera.org/verify/professional-cert/HRA1SDNA2WE5' }],
    status: 'done',
  },
  {
    name: 'Google Advanced Data Analytics Certificate',
    issuer: 'Google / Coursera · In Progress · Est. Q3 2026',
    links: [],
    status: 'prog',
  },
  {
    name: 'PSM I — Professional Scrum Master',
    issuer: 'Scrum.org · May 2026',
    links: [{ label: 'Verify ↗', href: 'https://scrum.org/certificates/1318010' }],
    status: 'done',
  },
  {
    name: 'Fundamentals of Predictive Project Management',
    issuer: 'Project Management Institute · 2026',
    links: [],
    status: 'done',
  },
  {
    name: 'Six Sigma White Belt',
    issuer: '2026',
    links: [],
    status: 'done',
  },
  {
    name: 'Salesforce Administrator Certification',
    issuer: 'Salesforce / Trailhead · In Progress',
    links: [],
    status: 'prog',
  },
  {
    name: 'dbt Fundamentals',
    issuer: 'dbt Labs · In Progress',
    links: [],
    status: 'prog',
  },
];
