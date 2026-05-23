// ============================================================
// data/observations.js — "Observations" writing section
// Add new entries here; they render in order.
// ============================================================

export const OBSERVATIONS = [
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
