// ============================================================
// data/skills.js — Skills groups and certifications
// Only confirmed skills: certificates, portfolio projects,
// or actively used tools. Salesforce Admin removed (not yet cert).
// Gainsight removed. dbt added.
// ============================================================

export const SKILL_GROUPS = [
  {
    title: 'Analytics & Data Engineering',
    items: [
      { name: 'Python',                    note: 'pandas · numpy · seaborn · matplotlib' },
      { name: 'SQL / BigQuery',            note: 'advanced' },
      { name: 'dbt Cloud',                 note: 'Fundamentals certified' },
      { name: 'Exploratory Data Analysis' },
      { name: 'Feature Engineering' },
      { name: 'Logistic Regression' },
      { name: 'Classification Modeling' },
      { name: 'Cohort & Segment Analysis' },
      { name: 'Behavioral Pattern Analysis' },
      { name: 'Time Series & Longitudinal Analysis' },
      { name: 'Data Modeling',             note: 'staging → mart' },
      { name: 'API Data Ingestion',        note: 'Socrata REST · Kaggle CLI' },
      { name: 'Entity Resolution & Data Cleaning' },
    ],
  },
  {
    title: 'Visualization & BI',
    items: [
      { name: 'Google Looker Studio' },
      { name: 'matplotlib & seaborn',      note: 'advanced' },
      { name: 'Chart.js',                  note: 'self-built dashboards' },
      { name: 'folium',                    note: 'geospatial choropleth' },
      { name: 'Tableau' },
      { name: 'Power BI' },
      { name: 'Google Slides',             note: 'data narrative decks' },
    ],
  },
  {
    title: 'Tools & Platforms',
    items: [
      { name: 'BigQuery' },
      { name: 'bq CLI',                    note: 'data loading · schema mgmt' },
      { name: 'dbt Cloud',                 note: 'models · tests · docs · DAG' },
      { name: 'scikit-learn',              note: 'LR · metrics · preprocessing' },
      { name: 'Google Analytics 4',        note: 'certified ✓' },
      { name: 'Google Apps Script',        note: '4 self-built apps deployed' },
      { name: 'Kaggle Notebooks' },
      { name: 'GitHub / GitHub Pages',     note: 'self-deployed projects' },
      { name: 'Google Sheets',             note: 'advanced' },
      { name: 'Salesforce',               note: 'ops · reporting · dashboards' },
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
      { name: 'Agile / Scrum',             note: 'PSM I certified' },
    ],
  },
  {
    title: 'AI & Productivity',
    items: [
      { name: 'Claude',                    note: 'daily · prompt engineering' },
      { name: 'ChatGPT · Gemini · Copilot' },
      { name: 'Gemini API',               note: 'integrated in Life OS' },
      { name: 'In-house LLM workflows' },
      { name: 'Notion · Jira · Asana' },
    ],
  },
];

export const CERTIFICATIONS = [
  {
    name: 'dbt Fundamentals',
    issuer: 'dbt Labs · May 2026',
    links: [{ label: 'Verify ↗', href: 'https://credentials.getdbt.com/5470c199-7753-4f90-99a3-07e8f8c6fe51' }],
    status: 'done',
  },
  {
    name: 'Google Data Analytics Certificate',
    issuer: 'Google / Coursera · May 2026',
    links: [{ label: 'Verify ↗', href: 'https://coursera.org/verify/professional-cert/HRA1SDNA2WE5' }],
    status: 'done',
  },
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
    name: 'Google Advanced Data Analytics Certificate',
    issuer: 'Google / Coursera · In Progress · Est. Q3 2026',
    links: [],
    status: 'prog',
  },
];
