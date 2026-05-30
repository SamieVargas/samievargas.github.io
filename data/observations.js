// ============================================================
// data/observations.js — "Observations" writing section
// ============================================================

export const OBSERVATIONS = [
  {
    tag: 'May 2026 · Instacart Dataset · 3.4M Orders · dbt Cloud + BigQuery',
    title: 'The 0.60 Reorder Rate Is a Lie — Or At Least Meaningless Without the Segment',
    paragraphs: [
      `The Instacart dataset gets cited constantly for its 0.60 average reorder ratio — meaning 60% of items in a typical order are things the user has ordered before. I spent this week building a dbt transformation layer on top of it to make the data actually trustworthy. When I ran the first real finding query, that number fell apart immediately.`,
      `New users (1–3 orders) reorder at <strong>0.221</strong>. Veterans (20+ orders) reorder at <strong>0.670</strong>. That's a 3x difference on the same metric, same platform, same dataset. The population average isn't wrong — it's just a compression of four completely different behavioral profiles into a single number that describes none of them accurately. Any ML reorder prediction model trained on all users equally is being diluted by new-user noise. The data only becomes reliable for prediction at 10+ orders, when habit has had time to form.`,
      `The other thing I found: I'm in this dataset. I ordered groceries yesterday — yogurt, cottage cheese, produce — and dairy eggs and produce came back as the top two reorder departments at 67% and 65%. That wasn't a surprise. <em>That was my cart.</em>`,
    ],
    source: {
      text: 'Built in dbt Cloud on BigQuery ·',
      linkText: 'Full project on GitHub ↗',
      linkHref: 'https://github.com/SamieVargas/instacart-project',
      suffix: '',
    },
  },
  {
    tag: 'May 2026 · Life in Pixels · Behavioral Data',
    title: 'A Walk Is Worth +0.5 — What My Own Mood Data Showed Me',
    paragraphs: [
      `I've been logging my daily mood on a 1–5 scale for months using a tracker I built myself. When I analyzed the data, one pattern held consistently: on days I went for a walk, my mood score was on average <strong>+0.5 points higher</strong> — both that same day <em>and</em> the following morning. Not just a same-day lift. A carry-over effect into the next day.`,
      `The more interesting question isn't whether it holds at scale — it's what that lag says about recovery and mood regulation. Sleep, stress, and movement don't reset cleanly at midnight. That's the kind of thing product teams building wellness features tend to flatten out of their models.`,
    ],
    source: {
      text: 'Tracked via',
      linkText: 'Life in Pixels',
      linkHref: 'https://script.google.com/macros/s/AKfycbwUVS3iL7JTO-XR93eCRDRY_lcFOdWPpa9VIB1hFLatsgtXT9QRfPtgoRJlTstkDis/exec',
      suffix: '— self-built mood & habit tracker.',
    },
  },
  {
    tag: 'May 2026 · Austin Open Data · 4,320 Inspection Records',
    title: 'Being Flagged Doesn\'t Fix It: Follow-Up Inspections Score 8 Points Lower',
    paragraphs: [
      `I started this by querying every restaurant I've eaten at in Austin against the City's public health inspection API. What I expected to find were a few outliers in an otherwise clean picture. What I found instead was a systemic pattern: establishments that failed inspection and were sent for follow-up visits scored an average of <strong>8 points lower</strong> than routine visits — not higher. The corrective action loop isn't working.`,
      `A second pattern held across 84 mapped local brands: scores decay measurably by the <strong>5th–6th inspection cycle</strong>. Not a catastrophic failure — a slow operational erosion that routine visits don't catch until violations are already compounding. The most unsettling part: <em>serial offenders are identifiable in advance.</em> The data exists. The question is whether the city's workflow is structured to act on it.`,
    ],
    source: {
      text: 'City of Austin Open Data Portal · Austin Public Health Department ·',
      linkText: 'Full analysis on Kaggle ↗',
      linkHref: 'https://www.kaggle.com/code/samievargas/atx-foodie-inspection',
      suffix: '',
    },
  },
];
