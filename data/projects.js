// ============================================================
// data/projects.js — Portfolio projects content
// FEATURED_PROJECTS: full-width with Quick Context sidebar
// GRID_PROJECTS: smaller card layout
//
// Featured order:
//   1. ATX Foodie (strongest narrative, most complete)
//   2. Instacart dbt (dbt Cloud + BigQuery)
//   3. Wearable GDA Capstone
//   4. IBM Churn
// ============================================================

export const FEATURED_PROJECTS = [
  {
    id: 'atx-foodie',
    badge: 'Personal Portfolio Project',
    title: 'Austin Food Safety — Does Reputation Match the Safety Record?',
    description: 'A JuiceLand pest report on r/Austin made me realize I had zero data visibility into the restaurants I eat at daily. Fetched 21,160 health inspection records from the City of Austin Open Data Portal API via paginated pull, built a brand compliance scorecard across 84 local brands, and surfaced five findings with direct policy implications: compliance isn\'t uniform by neighborhood, operational drift is measurable by inspection cycle, and follow-up inspections average 8 points lower than routine visits — meaning the corrective action loop is broken. Includes a folium choropleth map of Austin zip codes and a personal audit of my own regular spots.',
    quickContext: {
      problem: 'A Reddit pest-sighting post made me realize I ate at dozens of Austin restaurants with zero visibility into their actual health inspection records.',
      approach: 'Pulled 21,160 inspection records via the City of Austin Socrata REST API with offset pagination. Built brand scorecards for 84 local restaurant groups and a folium choropleth map by zip code.',
      finding: 'Follow-up inspections score 8 pts lower than routine visits — the corrective loop is broken. Serial offenders are identifiable in advance. The data exists; the workflow to act on it doesn\'t.',
    },
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/atx-foodie-inspection/zip_performance.png',
          alt: 'Compliance by zip code — top 10 by restaurant density',
          label: 'Zip Code Compliance',
        },
        {
          src: './assets/atx-foodie-inspection/branded_only_scale.png',
          alt: 'Brand scale vs inspection frequency — full and zoomed view',
          label: 'Inspection Intensity',
        },
        {
          src: './assets/atx-foodie-inspection/score_volatility.png',
          alt: 'Brand score volatility vs average compliance',
          label: 'Score Volatility',
        },
        {
          src: './assets/atx-foodie-inspection/burnout_inverted_trend.png',
          alt: 'Operational drift — avg score by inspection sequence',
          label: 'Compliance Drift',
        },
        {
          src: './assets/atx-foodie-inspection/my_favs.png',
          alt: 'My regulars vs Austin compliance landscape',
          label: 'Personal Audit',
        },
      ],
    },
    tags: ['Python', 'pandas · matplotlib · seaborn', 'folium (geospatial)', 'Socrata API', 'EDA', 'Public Health Data', 'Kaggle'],
    link: { href: 'https://www.kaggle.com/code/samievargas/atx-foodie-inspection', label: 'View on Kaggle →' },
  },

  {
    id: 'instacart-dbt',
    badge: 'Personal Portfolio Project · dbt Fundamentals Certified',
    title: 'Instacart dbt Project — When Does Data Become Trustworthy?',
    description: 'Built a staging → intermediate → mart transformation layer in dbt Cloud on BigQuery across 3.4M Instacart grocery orders. Loaded 6 CSVs from Kaggle via the bq CLI — no manual UI uploads. 35 passing tests that encode business logic, not just nulls. The core finding: the 0.60 average reorder ratio everyone cites hides a 3x difference across user segments. New users reorder at 0.221. Veterans reorder at 0.670. The data only becomes reliable for ML reorder prediction at 10+ orders.',
    quickContext: {
      problem: 'The Instacart dataset ships with no enforced relationships, a days_since_prior_order column that silently caps at 30, and two order-product files that overlap in non-obvious ways. A raw join produces numbers that look correct and are wrong.',
      approach: 'Explored the data in BigQuery before writing a single model. Built 5 staging models, 1 intermediate join, and 3 marts. 35 tests. Connected to Looker Studio for findings visualization.',
      finding: 'Reorder ratio ranges from 0.221 (new users, 1-3 orders) to 0.670 (veterans, 20+ orders). The population average of 0.60 is misleading without the segment label. Data becomes reliable for prediction at 10+ orders.',
    },
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/instacart-dbt/dag_01_full_lineage.png',
          alt: 'dbt DAG showing full lineage from sources through staging to marts',
          label: 'Data Lineage DAG',
        },
        {
          src: './assets/instacart-dbt/find_02_reorder_rate_by_user_segment.png',
          alt: 'Reorder rate by user segment showing 3x difference from new to veteran users',
          label: 'User Segment Finding',
        },
        {
          src: './assets/instacart-dbt/find_01_reorder_rate_by_dept.png',
          alt: 'Reorder rate by department showing dairy eggs and produce at top',
          label: 'Department Finding',
        },
        {
          src: './assets/instacart-dbt/doc_01_dbt_test_all_passing.png',
          alt: '35 of 35 dbt tests passing',
          label: '35 Tests Passing',
        },
      ],
    },
    tags: ['dbt Cloud', 'BigQuery', 'SQL', 'bq CLI', 'Data Modeling', 'Looker Studio', 'dbt Fundamentals'],
    link: { href: 'https://github.com/SamieVargas/instacart-project', label: 'View on GitHub →' },
  },

  {
    id: 'gda-capstone',
    badge: 'Google Data Analytics Capstone',
    title: 'Wearable Engagement & Fitness Dropout Prediction',
    description: 'Analyzed the LifeSnaps/Fitbit longitudinal dataset (71 users, 4+ months) to identify behavioral and physiological signals that predict fitness goal dropout. Surfaced Feb/March burnout patterns, cadence load spikes, and HRV trends as early dropout predictors — built in Python and BigQuery SQL, informed by personal Garmin training data and 8 years of observing behavioral dropout in enterprise clients.',
    quickContext: {
      problem: 'What early behavioral signals predict fitness goal dropout — before users fully disengage?',
      approach: 'Analyzed 71 users across 4+ months of LifeSnaps/Fitbit longitudinal data in Python and BigQuery SQL. Cross-referenced with personal Garmin cadence data.',
      finding: 'Feb/March burnout spikes, HRV trend drops, and cadence load overload precede dropout by 2-3 weeks — actionable by any wearable platform with the right alerting logic.',
    },
    media: {
      type: 'iframe',
      src: 'https://docs.google.com/presentation/d/e/2PACX-1vRsL1gK9sbwSSWGcXKwWrtsRjn_20h1qjh8Qv0mBmYtyPDf1hTv-7I1DsbQFXXmqYxjamyaZ5aXqgZD/pubembed?start=false&loop=false&delayms=3000',
    },
    tags: ['Python (pandas · matplotlib)', 'BigQuery SQL', 'EDA', 'Behavioral Analysis', 'Looker Studio', 'Google GDA Cert'],
    link: { href: 'https://www.kaggle.com/code/samievargas/sv-wearable-dropout-behavioral-signals', label: 'View on Kaggle →' },
  },

  {
    id: 'ibm-churn',
    badge: 'Personal Portfolio Project',
    title: 'IBM Telco Customer Churn — The Fiber Paradox',
    description: 'Analyzed 7,000+ customer records using Python, pandas, seaborn, and logistic regression. Identified a "Fiber Paradox" — premium internet customers churning at 2x the rate of lower-tier users — and engineered a composite risk signal (new customer + fiber + no tech support) that surfaces high-churn candidates a CS team can action in any CRM without ML infrastructure. Modeled on 8 years of enterprise retention patterns.',
    quickContext: {
      problem: 'Why are premium fiber customers churning at twice the rate of basic-plan users — and can we catch them before they leave?',
      approach: 'Logistic regression + feature engineering on 7,043 customer records. Built a composite risk signal from three observable attributes requiring zero ML infrastructure to deploy.',
      finding: 'New + fiber + no tech support = 3x churn probability. Any CS team can filter a CRM for this combination today.',
    },
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/ibm-telco-churn-analysis/churn_preview_both.png',
          alt: 'IBM Telco Customer Churn Overview',
          label: 'Overview',
        },
        {
          src: './assets/ibm-telco-churn-analysis/churn.png',
          alt: 'Churn Analysis Chart',
          label: 'Churn Drivers',
        },
        {
          src: './assets/ibm-telco-churn-analysis/retention.png',
          alt: 'Retention Analysis',
          label: 'Retention Patterns',
        },
      ],
    },
    tags: ['Python', 'pandas · seaborn', 'scikit-learn', 'Logistic Regression', 'EDA', 'Feature Engineering', 'Kaggle'],
    link: { href: 'https://www.kaggle.com/code/samievargas/ibm-telco-customer-churn', label: 'View on Kaggle →' },
  },
];

export const GRID_PROJECTS = [
  {
    id: 'tarot-tracker',
    badge: 'Self-Built · JavaScript · GitHub Pages',
    title: 'Tarot Tracker — Personal Card Archive',
    description: 'A full-featured tarot reading tracker deployed on GitHub Pages. Logs pulls, tracks card history across 78 cards, surfaces stalker cards and ghost cards, visualizes suit distribution, and syncs to Google Sheets via Apps Script. Built end-to-end with vanilla JS — no frameworks, no dependencies.',
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/tarot-tracker/deck.png',
          alt: 'Tarot Tracker deck view',
          label: 'Live App',
          link: 'https://samievargas.github.io/tarot-tracker/',
        },
      ],
    },
    tags: ['JavaScript', 'Google Apps Script', 'GitHub Pages', 'Google Sheets', 'Self-Deployed'],
    dim: false,
  },

  {
    id: 'life-os',
    badge: 'Self-Built · Google Apps Script · Personal Analytics',
    title: 'Life OS — Personal Health & Habit Dashboard',
    description: 'A multi-panel personal dashboard pulling from Life in Pixels longitudinal data via Apps Script. Tracks mood, HRV, body battery, sleep score, habits, cycle phase, DBT regulation skills, and life events. Includes Gemini AI weekly reflection, Todoist task integration, and a full rearview analytics layer with Chart.js visualizations across mental health, physical symptoms, and habit streaks.',
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/life-os/dashboard_scrubbed.png',
          alt: 'Life OS dashboard — personal data scrubbed',
          label: 'Dashboard',
        },
      ],
    },
    tags: ['Google Apps Script', 'Chart.js', 'Gemini API', 'Todoist API', 'Garmin', 'Personal Analytics'],
    dim: false,
  },

  {
    id: 'life-in-pixels',
    badge: 'Self-Built · Google Apps Script',
    title: 'Life in Pixels — Mood & Habit Tracker',
    description: 'A daily mood and habit logger built in Google Apps Script, backed by Google Sheets. Tracks mood on a 1-5 scale alongside activity and habit data over time. The data from this app produced the walk/mood finding in Observations and powers the Life OS dashboard.',
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/pixels-app-script/Pixels-App.png',
          alt: 'Life in Pixels app interface',
          label: 'Live App',
          link: 'https://script.google.com/macros/s/AKfycbwUVS3iL7JTO-XR93eCRDRY_lcFOdWPpa9VIB1hFLatsgtXT9QRfPtgoRJlTstkDis/exec',
        },
      ],
    },
    tags: ['Google Apps Script', 'Google Sheets', 'Behavioral Data', 'Personal Analytics'],
    dim: false,
  },

  {
    id: 'journal',
    badge: 'Self-Built · Google Apps Script',
    title: 'Journal — Structured Reflection Logger',
    description: 'A lightweight journaling app with structured prompts for fast daily entries stored in Google Docs. Part of the same personal data infrastructure as Life in Pixels and Life OS. Built end-to-end in Google Apps Script — no external dependencies.',
    media: {
      type: 'carousel',
      slides: [
        {
          src: './assets/journal-app-script/Journal-App.png',
          alt: 'Journal app interface',
          label: 'Live App',
          link: 'https://script.google.com/macros/s/AKfycbwBsldN89wdMdiVlD9xWINYvm30Gayaj0eb0N4nQeLsNmG98PHd7QnngjQSGl2l91Wq/exec',
        },
        {
          src: './assets/journal-app-script/Journal.png',
          alt: 'Journal output in Google Docs',
          label: 'Output View',
        },
      ],
    },
    tags: ['Google Apps Script', 'Google Docs', 'Structured Logging'],
    dim: false,
  },

  {
    id: 'gada-capstone',
    badge: 'In Progress',
    title: 'Advanced Analytics Capstone',
    description: 'Google Advanced Data Analytics Certificate capstone — regression and classification on a real-world dataset. Python, scikit-learn. Est. Q3 2026.',
    media: { type: 'placeholder' },
    tags: ['Python', 'Regression', 'Classification', 'GADA Cert'],
    dim: true,
  },
];
