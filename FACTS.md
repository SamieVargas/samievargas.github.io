# FACTS.md · the locked numbers and dates for samievargas.com

This file is the source of truth for every number, date and version that appears on the site. Pages and `data/content.js` copy from here, and this file copies from the results files named in each row.

## Rules for anyone editing (Claude Code included)

1. **Never change a number, date, model name or version on a page without changing it here first**, with the new source file and date in the row. If a copy edit would alter a number (rounding, rephrasing "7 of 20" as "a third"), stop and keep the number as written here.
2. Copy edits are welcome, number edits are not. Rewording a sentence must leave every figure in it identical to this file.
3. Numbers are never rounded past what the source says. "~" and "about" are allowed only where the row below already uses them.
4. When a new eval lands, add a new dated row and keep the old one under **History**; never overwrite a result in place.
5. Order of trust: the results file in the source repo, then this file, then `data/content.js`, then page copy. If they disagree, the page is wrong.
6. Rows marked **UNSOURCED** or **RECONCILE** are on the site but not yet traced; do not repeat them in new copy until they are resolved.
7. Voice rules for all site copy: no em dashes; run-on sentences joined with commas, "and", "so", "which is"; no punchy fragments; no "not X, it's Y"; headlines are full claims in sentence case; every project carries at least one "In plain terms" line (`.plain`); Claude adds exactly one unless Samie asks for more, and any extra ones she adds (for a term like RAG, MCP, dbt or Socrata) stay. Résumé bullets and recreated product output may stay as originally written.
8. After changing `css/`, `js/` or `data/`, bump the `?v=` token on every page and import in one pass.
9. Each build's own repo is the source of truth for that build, its README first and then the results files the README names, and this file copies from it. When a build's README changes, update its row here first and then every page that repeats it, and when the site says something its README does not, the site is wrong until the README says it too.

| Build | Source-of-truth repo | Read first |
| --- | --- | --- |
| Field discovery | [SamieVargas/Field-Sales-Build](https://github.com/SamieVargas/Field-Sales-Build) (private) | `README.md`, `evals/` results |
| Life in Pixels | [SamieVargas/pixels-rag](https://github.com/SamieVargas/pixels-rag) | `README.md`, `evals/results/` |
| Guideline Assist | [SamieVargas/guideline-assist](https://github.com/SamieVargas/guideline-assist) | `README.md`, `docs/`, `evals/results/` |
| Signal | [SamieVargas/signal](https://github.com/SamieVargas/signal) | `README.md`, `evals/results/`, `config.py` |
| Brain Dump | [SamieVargas/brain-dump](https://github.com/SamieVargas/brain-dump) | `README.md`, `evals/results/`, `worker/` |

## Timeline

| Date | Event | Source |
| --- | --- | --- |
| May 2018 | Graduated, B.S.A. Biochemistry, UT Austin | resume.html |
| Jul 2018 | Joined GLG, Client Solutions Associate | resume.html |
| May 2022 | Team Leader | resume.html |
| Oct 2023 | Senior Manager, Service (Senior Team Leader until the org flattened) | resume.html |
| 2014 | Austin, since | life.html eyebrow |
| 2020 | Journaling daily since | content.js LIFE_FIELD |
| 20 May 2026 | First commit of the site | toolkit.html stat |
| 10 Jun 2026 | Site rebuilt as vanilla modules, no framework | content.js TK_FALLBACK |
| 28 Jul 2026 | Brain Dump shipped | TK_FALLBACK |
| 14 Aug 2026 | Signal shipped | TK_FALLBACK |
| 18 Aug 2026 | Projects annotated with what each found | TK_FALLBACK |
| 20 Aug 2026 | /life split out of the work page | TK_FALLBACK |
| 22 Aug 2026 | Launch kit: favicon set, social card, 404, manifest | TK_FALLBACK |
| 9 Sep 2026 | Change log snapshotted by an Action on every push | TK_NOTES |
| 21 Sep 2026 | Signal golden labels written; prompt-contract pass and arm A run | signal README |
| 22 Sep 2026 | Signal arm B; Field discovery eval run; Pixels golden, ablation and follow-ups | signal, Field-Sales-Build, pixels-rag results |
| 23 Sep 2026 | Haiku / Sonnet list prices read for cost columns | pixels-rag, signal config, guideline-assist `core/models.py` |
| 24 Sep 2026 | Guideline Assist assist, QA, shadow and injection runs; Brain Dump sort@v3 and sort@v4 grid; Brain Dump live-page runs exported (sort@v3); ATX Foodie drift chart rebuilt with a real scale | guideline-assist, brain-dump results; git 9578046 (23:18 UTC, 18:18 in Austin), content.js TK_FALLBACK |
| 25 Sep 2026 | Guideline Assist QA scored against Samie's hand labels; /assist, the Guideline Assist replay, added with its row on the work page (#43); Guideline Assist readout docs; homepage copy pass | guideline-assist `qa-agreement-2026-09-25.json` and README Part 7, docs; git 537e462 (13:09 in Austin), content.js TK_FALLBACK; this repo |
| 25–26 Sep 2026 | Guideline Assist prompt tuning, held-out confirm and Gemini Flash runs | guideline-assist `docs/prompt-tuning.md`, results |
| 26 Sep 2026 (UTC; 25 Sep, 20:00 to 20:19, in Austin) | FACTS.md locked and CLAUDE.md pointed at it; site copy rewritten for readers outside AI and the Christie shelf split by series; résumé rewritten for AI deployment roles and printed from the page; /toolkit shows when each page last changed and why; numbers rounded in the copy pass put back to their locked values and the three Brain Dump runs counted as three everywhere; each build's repo named as its source of truth; more than one "In plain terms" line allowed; every build matched to its repo README (merged in #48 and #49, 20:05 and 20:22 in Austin); /toolkit dates these 2026-09-26 from TK_NOTES before the snapshot loads and 2026-09-25 (America/Chicago) once it does, so its two states differ by a day until TK_NOTES moves to 2026-09-25 | git 47b592c, ba36515, 258c9f2, 5146e98, f4f5d58, 434cc07, e43e432, 7c78314; content.js TK_NOTES; data/changelog.json; js/toolkit.js TZ |
| Sep 2026 | Knowledge-base pilot with a 60-person team, through September | resume.html |
| Oct 2026 | Planned rollout to four more pods (about 240 people), gated | resume.html |
| 24 Apr – 10 May 2026 | Raccoon window, 17 days (found 29 Apr, removed 3 May); 23 Apr is the last reading before it started (body battery 23, sleep 93, HRV 47 ms), not the baseline, which on the page is sleep 81, body battery 20/100 and HRV 38 ms | raccoon/index.html, content.js RACCOON_LIFE |

## Résumé facts

| Fact | Value |
| --- | --- |
| Employer | GLG, PE-backed global expert network, Jul 2018 – present |
| Book | $14M+ enterprise portfolio, 100% retention, ~$3.5M quarterly target |
| Clients named | Deloitte, Accenture, Gartner, KPMG, AlixPartners, Kearney, Roland Berger |
| Team | 5 client-facing managers (between 5 and 10 per quarter) |
| Knowledge base | ~110-document library; cut an average of three back-and-forth turns; accurate on 10 of 10 simple requests |
| MBR prep | 3 hours per account per month to 1 hour, across four accounts |
| AI tooling outcome | deliverables in the first hour, 10% to ~25% in one quarter |
| SharePoint | used daily by 60+ people, model for three other BUs; the résumé line reads "used daily by 60+ people and the model for three other BUs" (3 Oct 2026, Resume.pdf reprinted); the first résumé (20 Sep 2026, bfdb1e7) said "adopted as the model for three other BUs", with Samie coaching other teams to build their own (self-reported) |
| Growth | 5% YoY portfolio growth |
| Ramp | new-hire ramp to revenue, 3 months to 1 |
| Renewal forecasting | $300K per quarter in previously untracked opportunities |
| Promotions | three in under four years |
| Education | B.S.A. Biochemistry (Bachelor of Science and Arts), The University of Texas at Austin, graduated May 2018 |
| Certifications on the résumé | Anthropic AI Fluency (six courses); Databricks AI Agent Fundamentals, Generative AI Fundamentals, Databricks Fundamentals; dbt Fundamentals; Snowflake Hands-On Essentials; Google AI Professional, Advanced Data Analytics, Business Intelligence. Google Data Analytics and GA4 were dropped from the résumé on 26 Sep 2026; PMP was never held and is removed everywhere (see History) |
| Years at GLG | eight |

## Field discovery (repo: SamieVargas/Field-Sales-Build, run 22 Sep 2026 unless a row says otherwise)

| Measure | Value |
| --- | --- |
| Golden transcripts | 8 of 8 pass, 0 hard fails, 2 of 2 viability cards recalled |
| Closed-enum ablation | 0 invented requirement IDs against 99 outside the library, 20 runs each, measured 29 Aug 2026 on a fixture since renamed, not re-run since the golden set changed on 20 Sep 2026 |
| Proposal fixtures | 12, 10 pass (T06 missed an update, T09 gave the wrong escalation reason); 100% escalation recall and precision; 0 unneeded writes; read-first ablation: repeat escalations 0 of 20 with the rule against 14 of 20 without |
| Shadow run | 77.8% status agreement over 9 deals with an update; an escalation proposed on 5 of 5 slipped go-lives; missing-card recall 69.4% over 6 deals; 0 of 7 false escalations; against hand-written outcomes for 12 fixture deals, no pilot has run |
| Injection | 10 fixtures × 5 runs; 40 of 50 unchanged (80%); 6 of 10 fixtures moved a proposal at least once (I01 run 2, I04 run 0, I05 runs 0, 1, 4, I07 runs 0, 4, I08 run 0, I10 runs 0, 2); 9 of 50 rationales echoed the planted phrase; 11 guard trips |
| Cost / latency | claude-sonnet-5; $0.0313 and 21.5 s mean per extraction; $0.0561 and 18.8 s per action-loop run; priced at $2 / $10 per M tokens, the claude-sonnet-5 list price in the Claude API pricing reference, read 23 Sep 2026 and again 3 Oct 2026 (the repo's pricing file still carries its re-check note); $0 on the site (demo runs canned, per the site, not the README) |
| Library | hardware_rental, 19 cards (11 universal plus 8 vertical); 38 cards across 5 verticals |
| Stability | 9 of 20 runs gave the modal id set with the closed enum and 3 of 20 without, 29 Aug 2026, not re-run since 20 Sep |
| Kestrel transcript | G02_kestrel_buried_lede, an end-of-week catch-up; decision_maker is not_discussed and restricted_chemicals is not_discussed; 4 cards confirmed, 8 not discussed |
| Capture | a rep's voice note of sixty seconds: "A rep talks for sixty seconds after a visit" (README.md routes table), the work-page h2 "A rep's sixty-second voice note" and step 1's "Sixty seconds, one hand, in the car"; UNSOURCED, since it describes how the tool is used rather than a measured recording, and the Field-Sales-Build README is not readable from this repo; the step 1 capture timer counts 0:00 to 0:58 (js/app.js, a static 0:58 under reduced motion), is illustrative, has no caption and is UNSOURCED, since no file gives a recording length (see Needs verification) |
| Extraction contract | one extraction call under a closed enum, held by a five-rule validator in code with reject-and-retry, then an idempotent upsert to Salesforce; the résumé says "a five-rule validator" (README.md Field discovery paragraph; five since 52677d2 on 21 Sep 2026 and kept in the README match 7c78314; the Field-Sales-Build README is private and not readable from this repo) |
| Origin | built for a final-round hiring case and presented to a cross-functional leadership panel, with the company blinded (README.md, blinded in 52677d2 on 21 Sep 2026); the résumé shortens it to "a final-round case" and "a leadership panel" |

## Life in Pixels RAG (repo: SamieVargas/pixels-rag, run 22 Sep 2026, Haiku 4.5)

| Measure | Value |
| --- | --- |
| Data | six months of own daily data; the site runs a seeded synthetic export of 118 days from fixtures/make_days.py, 1 May to 31 Aug 2026 in data/pixels-runs.json, a 123-day span with 9 May, 2 and 3 Jun, 19 Jul and 23 Aug absent, and the 26 eval questions and the chunk ablation ran on that export, so no page says the questions were asked of six months of data; the /pixels meta description reads "Twenty-six questions asked of a seeded synthetic export shaped like my daily data" (3 Oct 2026); the work-page eyebrow reads "six months of my own daily data · evals on a synthetic export of 118 days shaped like it" (3 Oct 2026), so the real data and the export are each given their own length |
| Golden set | 28 questions, 26 scored plus 2 follow-ups |
| Route accuracy | 100% of 26 |
| Citations valid | 26 of 26 (100%), 0 hard fails |
| Unanswerable refused | 5 of 5; abstained on 2 of 21 answerable |
| Expected facts | 85% |
| Semantic recall@5 | 74% keyed, 89% offline |
| Validator retries | 10 across 26; S01 still failed after its retry |
| Per-question runs | days pulled or computed, retries, latency and cost as replayed on /pixels (data/pixels-runs.json, from evals/results/2026-09-22.json): S01 1 day, 1 retry, 11.0 s, $0.0088; S02 1, 1, 7.2 s, $0.0081; S03 1, 1, 5.5 s, $0.0060; S04 1, 1, 6.0 s, $0.0077; S05 1, 1, 6.2 s, $0.0078; S06 7, 1, 8.9 s, $0.0136; S07 0, 0, 1.5 s, $0.0027; F01 44, 1, 8.5 s, $0.0242; F02 8, 0, 3.3 s, $0.0061; F03 4, 0, 3.1 s, $0.0053; F04 22, 0, 4.6 s, $0.0105; F05 1, 0, 2.5 s, $0.0039; F06 8, 0, 3.8 s, $0.0070; F07 2, 0, 3.2 s, $0.0046; A01 28, 1, 4.4 s, $0.0053; A02 118 (every day in the export), 1, 4.1 s, $0.0057; A03 13, 0, 2.6 s, $0.0039; A04 30, 0, 3.8 s, $0.0039; A05 118, 0, 2.7 s, $0.0040; A06 7, 1, 3.8 s, $0.0053; A07 13, 0, 2.8 s, $0.0039; U01 to U05 0 days and 0 retries, 1.1, 1.2, 1.0, 1.0 and 1.1 s, $0.0026 each, which is the router call, since the admission makes no model call; the ten retries are S01 to S06, F01, A01, A02 and A06; each cost is rounded to four places, so the 26 add to $0.1613 against the run's $0.1611 |
| Work-page replay | S06 "What was the week of June 8 like?", semantic (search) route, 7 days retrieved (8 to 14 Jun), all 7 days the answer cites were retrieved, citations valid, 1 retry, shown as "✓ 7 of 7 cited days were retrieved · 1 retry" (data/pixels-runs.json S06; content.js PX_REPLAY) |
| Cost | $0.0062 per question mean; $0.1611 for the run; list prices $1 / $5 per M tokens, read 23 Sep 2026 |
| Latency | 4.0 s mean |
| Chunk ablation | recall@5 89% to 93%; S06 week question 71% to 100%; run 22 Sep 2026, 7 semantic questions × 20 runs per arm, embedding default, claude-haiku-4-5-20251001 (evals/results/2026-09-22-ablation.md, copied to data/pixels-runs.json `ablation`), day chunks against day plus week chunks; S01, S02, S04, S05 and S07 100% to 100% and S03 50% to 50%, so every other question's recall@5 is unchanged; the day-chunk 89% is the offline recall@5, which is why S07 shows 100% here though it retrieved nothing in the keyed golden run; expected facts in the answer 82% to 83%, over the semantic questions with expected facts (S06 has none), so neither is the golden run's 85% and the one-point move is not S06; week chunks retrieved 0 to 280 in total; so the site may say the week chunks left every other question's recall@5 the same, and not every answer; the ablation records recall@5 per question and no retrieved lists, so the following wordings rest on recall@5 alone: the /pixels section 02 plain line ends "and found the same days as before for every other question." and README.md says the rollups "left every other question's retrieved days the same" (3 Oct 2026) |
| Routes | 4: search, filter, sum and unanswerable, which is answered with an admission and no model call |
| MCP | 2 read-only tools, stdio, `list_days` capped at 100 days; no write tool; the clients named on the site are Claude Desktop and Claude Code (README.md, /pixels section 03 and its diagram, the work-page MCP spine row); "the config and the two tool schemas are in the repo" (/pixels section 03) is UNSOURCED until checked against the pixels-rag README (rule 9) (see Needs verification) |
| Finding | hot yoga plus walking sleeping better came from asking the model (README:19-20); on the synthetic fixture, which plants that pattern, analysis/recovery.py gives same-day sleep +8.0 [+2.2, +13.6] and body battery +14.2 [+3.3, +22.8], n 9, and the morning after −3.8 and −3.7 with intervals crossing zero; the real-data table is not in the repo, so the site does not state the finding as fact |
| Still misses | S01 fails validation after its retry (unit-glued 8.2hrs), S03 and S07 abstained on answerable questions; spine dots 0, 2 and 6 |
| Privacy | the data stays on disk; a question sends its retrieved days or computed table to the model provider, and `list_days` sends nothing |
| Embeddings | local, in ChromaDB, MiniLM by default; bge-small, e5-small and an opt-in OpenAI arm are wired up and not yet run, so the site names MiniLM only; the 22 Sep golden run and the chunk ablation both used the `default` embedding (data/pixels-runs.json); the index and embeddings run free on Samie's laptop ("with the index and embeddings running free on my laptop", the work-page results strip); the résumé stack says "Local Embeddings (MiniLM)" and the work-page Build skills "Local embeddings (MiniLM via ChromaDB)" (README.md, matched to the pixels-rag README in 7c78314 on 26 Sep 2026) |

## Guideline Assist (repo: SamieVargas/guideline-assist, 24 Sep 2026)

| Measure | Value |
| --- | --- |
| Test set | 100 frozen ABCD test chats (ASAPP, MIT, Copyright (c) 2021 ASAPP Research, as guideline-assist `data/abcd/LICENSE` and data/assist-replay.json `license` give it; a fictional retailer, role-played by trained crowdworkers, real conversations between people with no real customers), 349 action points, 693 call points |
| Samples | assist_100: 100 test chats, hash ab72e89ace15; qa_100: 100 test chats whose gold actions show every required step in guideline order, hash e1aa3534dc5e; each hash is the first 12 characters of the sha256 its sample file in guideline-assist `data/samples/` records, both drawn and frozen 23 Sep 2026 (`evals/export_viewer.py`, data/assist-replay.json `samples`); /assist prints them in its captions |
| Baseline | a no-model guideline-order baseline told the gold intent scores 73.4%; 11.4% of gold actions are not in their section, so validated accuracy tops out at 88.6% |
| Sonnet 5, arm A | next action 73.9% (258/349); intent 88.0%; p50 / p95 2.1 / 3.2 s; $121.83 per 1,000 chats |
| Haiku 4.5, arm A | next action 50.1% (175/349); intent 79.9%; 1.6 / 2.7 s; $47.89 per 1,000 |
| Arm B | Haiku $55.13, 2.7 / 4.3 s; Sonnet $147.49, 3.7 / 5.8 s |
| Library | 55 subflow sections plus 10 flow sections; 27,563 tokens on Haiku 4.5, 37,708 on Sonnet 5, cached; 13.10 triggers per conversation |
| Prices | claude-sonnet-5 $2 / $10 and claude-haiku-4-5-20251001 $1 / $5 per M tokens, list prices read 23 Sep 2026 (`core/models.py` PRICES_READ_ON, whose docstring still says to re-check before quoting); cache writes at 1.25× input and cache reads at 0.10×, which the README and /assist put as a cached read costing a tenth of fresh input; the Gemini prices were read from search results on 25 Sep 2026 and are UNCONFIRMED (see the Gemini row) |
| Shadow | 79.5% (140/176) over 50 conversations; 36 disagreements: 13 agent drifted, 11 assist wrong, 12 both off; the work page may say an agent would set aside about one suggestion in five (36 of 176, 20.5%) |
| QA | flags 20 of 100 clean chats (rules-only 63); recall 100/100 removed, 99/99 swapped, 57/59 changed values; wrong-value precision 51.8% (57/110); 358 copies graded |
| QA, rules only (qa_100, the /assist table) | clean chats flagged 63 of 100; removed steps caught 100 of 100; swapped steps caught 99 of 99; changed values caught 34 of 59; wrong-value flags right 34 of 204 (16.7%) |
| QA copies on /assist (qa_100) | three copies of chat 337 (manage): 337~remove, 337~swap and 337~value, the first copy of each defect kind in qa_100 order, not picked for how the QA did; Sonnet 5 caught all three (`qa-2026-09-24.json` through data/assist-replay.json, `evals/export_viewer.py`) |
| QA against hand labels (20 blind items, scored 25 Sep 2026) | 85.3% of QA steps agree with Samie's hand labels (58 of 68) (`qa-agreement-2026-09-25.json`, README Part 7; the /assist stats strip dates its results 24 and 25 September 2026) |
| Whole-chat intent (intent_300) | 76.0% (228 of 300) over 55 subflows |
| Arms on assist_100 (24 Sep 2026, the /assist ablation table) | A · Haiku 4.5: next action 50.1%, intent 79.9%, p95 2.7 s, $47.89; A · Sonnet 5: 73.9%, 88.0%, 3.2 s, $121.83; B · Haiku 4.5: 53.3%, 74.2%, 4.3 s, $55.13; B · Sonnet 5: 72.8%, 75.9%, 5.8 s, $147.49; 13.1 calls per chat |
| Replay on /assist and the work page (assist_100, Sonnet 5 arm A, 24 Sep 2026) | six chats, picked by walking assist_100 in sample order and taking the first chat of each flow with at least three action points until there are six (ten flows qualify, so these are the first six flows reached), none picked for how the assist did: 183 account access, 43 turns, 4 agent actions, 8 assist calls, 1 of 4 next actions right; 399 troubleshoot site, 12, 3, 5, 1 of 3; 739 manage account, 28, 3, 6, 3 of 3; 812 order issue, 26, 6, 12, 4 of 6; 1075 storewide query, 49, 4, 8, 2 of 4; 1913 subscription inquiry, 34, 6, 12, 3 of 6; the work page links it as "Replay six chats and the QA" (`evals/export_viewer.py`, default of six, from `assist-2026-09-24.json` through data/assist-replay.json; turn counts from data/assist-replay.json only) |
| Work-page recorded call | chat 812, the call before turn 9, Sonnet 5 arm A, 24 Sep 2026: intent status_delivery_time, next step verify-identity with all three values, which the agent took next, 2194.5 ms shown as 2.2 s (data/assist-replay.json replay 812, point 9; content.js AS_REPLAY, copied by hand) |
| Injection | 10 fixtures × 5 runs; 47 of 50 runs held; 2 of 10 fixtures moved a suggestion (inj01 2 of 5 to a refund, inj08 1 of 5 to none_yet); a measured rate, not a claim of injection resistance |
| Prompt tuning (tune_60, dev split, 25 and 26 Sep 2026) | gates set before any call: no more than 3 points lost on next action or intent, at least 20% cheaper; the full library and five shorter renderings tried, dedupe, nosub, outline and bare in round 1 (25 Sep 2026, `tuning-r1-tune_60-2026-09-25.json`) and keysub in round 2 (26 Sep 2026, `tuning-r2-tune_60-2026-09-26.json`), as /assist labels them; dedupe −1.4 next action and −0.5 intent at 14% cheaper, nosub −6.0 and −0.5 at 44%, outline −10.2 and +0.9 at 60%, bare −10.2 and −10.0 at 67%, keysub −7.0 and +0.2 at 24%; none passed all gates (`docs/prompt-tuning.md`) |
| Held-out confirm (assist_100, 26 Sep 2026) | Sonnet 5 full 73.4% (256/349), $121.98, p95 2.4 s; Sonnet 5 dedupe 76.2% (266/349), +2.9 [0.0, +5.7], $104.55, 14% cheaper, p95 2.6 s (`tuning-confirm-assist_100-2026-09-26.json`) |
| Gemini 3.8 Flash (assist_100, 26 Sep 2026, Vertex AI, `global` endpoint) | explicit cache: full 82.2% (287/349), intent 87.7%, false alarms 25.0%, $47.23 per 1,000, p50 / p95 3.0 / 22.4 s; dedupe 82.0%, $39.11, 2.3 / 5.8 s; automatic cache (hit on 20 of 693 turns): 82.2%, $262.50; +8.9 [+5.2, +12.5] next action over Sonnet full, paired; the site may say the explicit-cache run costs about 40% of Sonnet ($47.23 against $121.83, 38.8%); prices from third-party listings, UNCONFIRMED against Google's page (`tuning-gemini-assist_100-2026-09-26.json`, `assist-gemini-2026-09-26.json`); /assist gives the p95 "through Vertex's global endpoint" (README); the résumé quotes 82.2%, $47.23 and the 22.4 s p95 in its Guideline Assist line, dated 24 to 26 Sep 2026 since 3 Oct 2026 |
| Held-out table (assist_100, 24 to 26 Sep 2026, the /assist cost table) | Haiku 4.5 full: 50.1%, intent 79.9%, p95 2.7 s, false alarms 54.4%, $47.89, 99% read from cache; Sonnet 5 full: 73.4%, 87.5%, 2.4 s, 50.6%, $121.98, 99%; Sonnet 5 dedupe: 76.2%, 87.3%, 2.6 s, 44.8%, $104.55, 99%; Gemini 3.8 Flash full, explicit cache: 82.2%, 87.7%, 22.4 s, 25.0%, $47.23, 94%; dedupe: 82.0%, 87.7%, 5.8 s, 23.8%, $39.11, 93%; full, automatic cache: 82.2%, 87.7%, 205.3 s, 24.4%, $262.50, 2% |
| Stop lines | after two weeks on the customer's own traffic, pull back if shadow agreement stays below 75%, p95 goes above 4 s, assist-wrong outnumbers agent drift, supervisors overturn more than one QA flag in five, any line moves toward skipping verification or refunding, or cost runs over budget ($121.83 as the reference) |

## Signal (repo: SamieVargas/signal)

| Measure | Value |
| --- | --- |
| Models | claude-haiku-4-5 per-document summaries (at most 300 tokens out), claude-sonnet-4-6 analysis; list prices read 23 Sep 2026, Sonnet $3 / $15 and Haiku $1 / $5 per M tokens; cost covers the analysis call only |
| Default contract | prompt contract in the CLI and the browser app; native only behind a flag (`?contract=native`) |
| Token cut | 22,976 to at most 1,012 input tokens (~96%) on two long transcripts, measured with `--dry-run`, shown as ~23k to ~1k; eval mean analysis input 3,004 tokens (arm A) |
| Golden set | 13 synthetic accounts, labels written 21 Sep 2026 |
| Prompt contract, 21 Sep | recall 96%, precision 100%, buyer 92%, attribution 92%, parse 5 / 8 / 0, $0.0323 per run, $0.4205 total |
| Native arm A, 21 Sep, 20 runs | recall 90%, precision 94%, buyer 93%, attribution 92%, 260 / 0 / 0, $0.0308 per run, $7.9974 total |
| Native arm B, 22 Sep, 20 runs | recall 90%, precision 93%, buyer 69%, attribution 95%, 260 / 0 / 0, $0.0292 per run, $7.6039 total |
| Parse | 0 failures in 520 native runs; 8 of 13 recovered by the parser under the prompt contract |
| Failure: vibe-risk | read right 7 of 20 with the weighting block, 14 of 20 without |
| Failure: champion-loss | wrong buyer 19 of 20 with the block |
| Failure: truncated-transcript | 50% on every run |
| Failure: silent-decay | cites its usage CSV in 1 of 20 runs |
| Attribution | asked of the model, not enforced; 92% of required sources in arm A |
| Latency | mean analysis call 35,921 ms arm A, 34,479 ms arm B, 41,359 ms prompt contract (results .md files); end to end `total_ms` 42,747 ms arm A, 48,745 ms prompt contract (JSON only) |
| Scope | only `full` mode scored; the other three focus modes have no results file |
| Prep time | about an hour to one minute |
| Resolved 26 Sep 2026 | the homepage "51 seconds" had no source in the repo or its history, and now reads "in about a minute" (README) with a 35.9 s mean analysis-call stat |
| Source weighting | arm A runs with the source-weighting block (`2026-09-21-full-native-weighted-x20`) and arm B without it; economic-buyer accuracy 93% against 69%, so the block is worth 24 points (README.md Signal paragraph; the work page captions arm A "with the weighting block"); the résumé says "source weighting worth 24 points of economic-buyer accuracy (93% against 69%)", since b5e006d on 22 Sep 2026 |
| Early users | "validated with early users, including a senior CS leader" (résumé Signal bullet), self-reported and UNSOURCED under rule 9: on the résumé since 20 Sep 2026 (bfdb1e7), and README.md and the rest of this repo do not say it (see Needs verification) |
| Work-page example | the pasted-in scraps (call notes 4/12, crm_export_q2.csv with 412 rows, a Slack thread of 60 messages, "RE: RE: Fwd: renewal timing (14)", MSA_2024_signed.pdf, IMG_4471.png, zoom_transcript_0912.vtt) and the read that comes back are illustrative and not from the 13-account golden set; the output card is captioned "example output, laid out for the mock" and, since 3 Oct 2026, the input pile "example input, laid out for the mock" (content.js SIGNAL_PILE) |

## Brain Dump (repo: SamieVargas/brain-dump, 24 Sep 2026, claude-sonnet-5)

| Measure | Value |
| --- | --- |
| Grid | 20 dumps × 3 levels × anxious off and on, 120 plans per run |
| Price | claude-sonnet-5 at $2 / $10 per M tokens, the list price in the Claude API pricing reference, read 23 Sep 2026 and again 3 Oct 2026 (worker/contracts.js still carries its re-check note) |
| sort@v3, effort high | median 14.0 s, p90 23.8 s, $0.0134 per plan, 8 gentle-item misses, 10 banned phrases |
| sort@v4, effort medium (live) | 7.3 s, 13.4 s, $0.0071, 7 misses, 12 banned |
| sort@v4, effort low | 4.6 s, 6.6 s, $0.0040, 16 misses, 10 banned |
| Levels | plenty: cap 3, 25-min timer; a little: cap 2, 15 min; none: cap 1, 5 min |
| Live-page runs | one dump of 2,732 characters, sorted on the live page on 24 Sep 2026 under sort@v3, the prompt live that day before sort@v4 at medium effort replaced it; 4 recorded, $0.05 total; 3 shown on the site (content.js BD_V3, commit 5681269; the exports themselves are not in the repo) |
| Banned phrases | any banned phrase ("need to", "should", "you have to", "lazy") in 10, 12 and 10 of 120 plans; "need to" alone in 8 of 60 anxious plans on sort@v3 (3 plenty, 3 a little, 2 none), 9 of 60 on sort@v4 medium (live), 7 of 60 on sort@v4 low |
| Live setting | worker/prompts.js `sort@v4`, worker/contracts.js and wrangler.toml `EFFORT = "medium"`, `MAX_TOKENS` 16000 |
| Anxious switch | keeps the level's cap and timer, bans "should" and "need to" |
| Eval dump length | median 181 characters, against about 3,700 for a real dump |
| Resolved 26 Sep 2026 | "8 of 60" is sort@v3 at the default effort (…-x1-sort-v3.json); the live run's match is 9 of 60 |
| Tuning headline | "A tuned prompt at medium effort cut the median sort from 14.0 to 7.3 seconds, and cutting the effort again to 4.6 more than doubled the one mistake the page cannot fix." (work page, 3 Oct 2026): the medians of sort@v3 at high effort, sort@v4 at medium and sort@v4 at low, and the gentle-item misses going from 7 to 16 of 120 (content.js BD_TUNING) |
| What it replaced | "forty-seven mental tabs with no way to tell a task from a worry" (work-page results strip, content.js RESULTS.braindump, whose comment credits the brain-dump README); UNSOURCED, since that README is not in this repo (see Needs verification) |
| Early users | "Early users' feedback drove a single-step capture flow" (résumé Brain Dump bullet), self-reported and UNSOURCED under rule 9: on the résumé since 20 Sep 2026 (bfdb1e7), and README.md and the rest of this repo do not say it (see Needs verification) |

## Structured outputs

| Measure | Value |
| --- | --- |
| Parse failures | 0 of 520 |
| Scope | Signal only: 260 native-contract runs in each ablation arm, 0 recovered, 0 failed; Brain Dump and Field discovery keep their own tallies (resolved 26 Sep 2026) |

## Analysis work

| Project | Values |
| --- | --- |
| Instacart dbt | 3.4M orders; pooled reorder 0.60; new 0.221, regular 0.670, 3.0× apart (0.670 / 0.221 = 3.03; the /life note 01 counter and its "threefold difference"; assets/instacart-dbt/Instacart_Reorder_Portfolio_Project.pdf says a 3x difference); 5 staging models, 1 join (int_order_products_joined) and 3 marts (fct_orders, dim_products, dim_users) as in assets/instacart-dbt/dag_01_full_lineage.png, which the work-page map follows since 3 Oct 2026; 34 tests, all passing (the work-page map and results strip, README.md and the résumé), as assets/instacart-dbt/doc_01_dbt_test_all_passing.png, the only dbt test run in the repo, shows All 34 and Pass 34; random forest AUC 0.9886 vs 0.8566 (`assets/instacart-ml/V3_segment_auc_comparison.png`); days-since-prior capped at 30; costs nothing to run, a dbt Cloud project on BigQuery (README.md) "run on free trials" (content.js, which cites the Instacart README), where the free trials and the $0 are UNSOURCED, since that README is not in this repo and assets/instacart-dbt/instacartREADME.md is a one-line stub; /life note 01's dairy and produce as the "top two reorder departments" holds by reorder count among the eight departments assets/instacart-dbt/find_01_reorder_rate_by_dept.png shows (produce 6,160,710, dairy eggs 3,627,221) and not by reorder rate, the order the screenshot sorts by, where dairy eggs 0.67 and beverages 0.653 lead and produce is third at 0.65, so the note's wording is UNSOURCED (see Needs verification) |
| ATX Foodie | 21,160 records via Socrata; 84 brands; follow-up 84.4 (110 visits) vs routine 90.9 (18,440), 6.45 apart; drift 90.5 to 92.6 by the 15th inspection (2.1, higher is more violations); the notebook chart's x-axis is cumcount 0 to 14 and labels its ends "Inspection 1" and "Inspection 14", so counted from 1 the last point is the 15th, as content.js says; the 13 points between, 90.6, 90.55, 90.6, 91.05, 91.15, 89.8, 90.1, 90.85, 90.5, 91.8, 91.15, 90.9 and 91.3, are read off assets/atx-foodie-inspection/burnout_inverted_trend.png (content.js ATX_DRIFT) and drawn on the work page and /life note 03 but never printed, so only the ends may be quoted; note 03's "starts to show by the fifth or sixth visit" is UNSOURCED, since the 5th and 6th points (91.05, 91.15) are the first to pass 91 but the 7th (89.8) is the lowest score on the line, drawn highest since the chart is flipped, and the line does not pass 91.15 again until the 11th (91.8) (see Needs verification); costs nothing to run, a Kaggle notebook (kaggle.com/code/samievargas/atx-foodie-inspection, README.md), and the work page reads "Nothing, it is a Kaggle notebook, and the chart on this page is redrawn from it" (3 Oct 2026) |

## Life page

| Fact | Value |
| --- | --- |
| Raccoon | body battery floor 5/100 for 5 consecutive days, Apr 25–29, counting a day as at the floor at ≤6 as the /raccoon invoice does (May 4's 6 is "still at the floor" on /life); sleep score 53 vs baseline 81, the floor on Tue 28 Apr; HRV 26 ms on 28 Apr, "my worst on record" on /life (self-reported); 11 nights interrupted, with which 11 UNSOURCED (see Needs verification); 9 calls; 8 days to recover; 17 days total |
| Raccoon page detail | 3 raccoons; period Apr 24 – May 10, 2026; sleep score average during the incident 75/100; body battery pre-raccoon baseline 20/100 (UNSOURCED, since it cannot be rebuilt from the printed readings; see Needs verification); 4 days from finding them to removal; HRV baseline 38 ms, and 47 ms on Apr 23 before it started; the raccoon's counter-claim $95.00 (raccoon/index.html, from Garmin Connect); joke figures with nothing to source: 1 Noah Kahan incident, $0 rent paid, the raccoon's contribution to rent $0.00, balance due $0, paid in raccoon, and amount paid $0.00 on /life |
| Raccoon body battery average | 12.1/100 during the incident, the mean of the 16 daily readings from Apr 25 to May 10 in content.js RACCOON_LIFE (Apr 24 has none; 194 over 16); replaces the page's 10/100, which matched no window of the readings |
| Raccoon body battery by day | Apr 23 23; Apr 25 5; Apr 26 5; Apr 27 5; Apr 28 5; Apr 29 5; Apr 30 13; May 1 21; May 2 11; May 3 5; May 4 6; May 5 23; May 6 18; May 7 26; May 8 18; May 9 11; May 10 17; no reading for Apr 24; the week before, Apr 19 to 22, printed only as 5–15; normal range 15 to 25 (self-reported); on these readings May 1's 21 is the best of its week and May 7's 26 the highest of the stretch, and May 10 is seven days after removal, which its note calls "a week", while the invoice counts 8 days to recover (3 to 10 May inclusive) (content.js RACCOON_LIFE, copied from /raccoon, from Garmin Connect); the /life note 02 bars and their aria-labels and the /raccoon drain and timeline ("5, 5, 5, 5", "(13, 21, 11)", "11–21", "still 5", "(6, 23, 18, 26, 18, 11, 17)", "5 → 17") all read from this row |
| Raccoon sleep scores by night | the week before, Apr 19–23 (Sun–Thu): 86, 69, 78, 74, 93; Apr 24–28: "dropped to 80 and then 57", undated, then the floor of 53 on Apr 28; Apr 30 – May 2: 82, 84, 84; May 3: 61; May 4–10: 71, 85, 80, 86, 79, 66, 80; "back above 80" from May 10 ("sleep 80+"); 14 of the 17 incident nights are printed, and they average 74.9 (1,048 over 14), in line with the invoice's 75/100 (raccoon/index.html timeline, from Garmin Connect) |
| Raccoon nights before finding them | five, Apr 24–28: "five bad nights" on /life and in the raccoon field card, and "five nights of interrupted sleep" in the /raccoon 01b thread, whose first message is dated Apr 29, 07:12; the invoice's 11 nights interrupted covers the whole incident, and which 11 nights is not recorded (self-reported, Garmin Connect) |
| Raccoon story (self-reported) | waking at 3am; plans canceled on Tue 28 Apr, billed as "at least 1" on both invoices; found Wed 29 Apr, one hour before work; a trap set on 29 Apr, whose bait was eaten without triggering it, and a second set after one escalation to corporate, Apr 30 – May 2; removed Sun 3 May, the caught photo captioned 11:50am (raccoon/index.html; the photos' metadata is stripped, so nothing in the repo backs the time) |
| Greenbelt | 15 of 21 miles |
| Poirot | 26 of 33, on Dead Man's Folly |
| Ring Fit | level 32 |
| Records | 35, from the Discogs export, Aug 2026 |
| Tarot | 78 cards, seven decks |
| Arcade | 15 apps, 8 pull live public data: Six Degrees, Died Doing What, Taco Coin Flip, Whodunit Roulette, The Nepotism Graph and Same Name, plus SQL Tarot's City of Austin query and Streak Autopsy's Austin forecast |

## Work page, experience (data/content.js ROLES; self-reported, like the résumé facts)

| Fact | Value |
| --- | --- |
| Header | 8 years · 6 roles · IC to people manager (six counts Junior and Senior Client Solutions Associate separately) |
| Senior Manager, Service | Oct 2023 – present; people manager; Senior Team Leader until the org flattened; $14M+ book; ~$3.5M quarterly target; 2–3 active contract renewals at a time; the work-page bullet builds AI workflows on "Claude, ChatGPT, Gemini, Copilot, and in-house GPT/Claude tools", and Copilot is UNSOURCED, since the résumé bullet names Claude, ChatGPT, Gemini and in-house tools and its Tools line has no Copilot (see Needs verification) |
| Team Leader | May 2022 – Oct 2023; people manager; led 5 client solutions specialists while carrying a personal enterprise book; founded the Center of Excellence |
| Senior Client Solutions Manager | Jul 2021 – May 2022; individual contributor; 30+ concurrent enterprise engagements weekly; $1M+ annual revenue within a flagship account; an outreach campaign to 700+ users with the highest response rate to date |
| Client Solutions Manager | Jul 2020 – Jul 2021; individual contributor; 20+ concurrent engagements; roughly $900K annual revenue (~$900K in the role line) |
| Junior to Senior Client Solutions Associate | Jul 2018 – Jun 2020; Project Analyst, then Project Associate from Jan 2019; over 10 projects weekly |

## Certifications on the work page (data/content.js CERT_LIST, copied from CERTIFICATIONS.md)

| Certificate | Value |
| --- | --- |
| Anthropic AI Fluency | Anthropic Academy · Jun 2026 · six courses, each with its own Skilljar verify link |
| Databricks accreditations | Databricks Academy · Jun 2026 · three accreditations, each with its own credential link |
| Google AI Professional Certificate | Google / Coursera · Jun 2026 · ID 719MATVYL9UZ |
| Google Advanced Data Analytics | Google / Coursera · Jun 2026 · ID 4REOBHKQJ0DS |
| Google Business Intelligence | Google / Coursera · Jun 2026 · ID CLF3CXNNZO4L, verified at coursera.org/verify/professional-cert/CLF3CXNNZO4L (certificate PDF, 5 Jun 2026) |
| Snowflake Hands-On Essentials: Data Warehouse | Snowflake · Jun 2026 · badge ID 184380098 |
| dbt Fundamentals | dbt Labs · May 2026 |
| Google Analytics Certification (GA4) | Google Skillshop · May 2026 · ID 182987115; issued 21 May 2026 and expires 21 May 2027 (certificate PDF); on the site, off the résumé since 26 Sep 2026 |
| PSM I | Professional Scrum Master I, Scrum.org · 6 May 2026 · certificate 1318010, verified at scrum.org/certificates/1318010 (certificate PDF); named in the Delivery skills line |
| Six Sigma White Belt | Council for Six Sigma Certification · 11 May 2026 · certification number nslvDTFJHO (certificate PDF); not on the site |

## Arcade claims (data/content.js ARCADE_APPS hooks and the games' own copy)

| App | Value | Source |
| --- | --- | --- |
| Six Degrees of Anything | Dolly Parton reaches Austin through Willie Nelson | apps/shots/six-degrees.webp, a 960x600 capture of today's app on 3 Oct 2026 with the Wikidata responses mocked to reproduce the 24 Sep 2026 capture (3,295 neighbours scanned, 2 degrees, the P737 influenced-by edge); the 3 shared links and the P937 worked-in edge in it are mock values and not claims; the 24 Sep PNG is in git history |
| Six Degrees of Anything (eyebrow and meta) | "graph search over 100M+ Wikidata statements", UNSOURCED: nothing in the repo gives a count or a date for it (see Needs verification) | apps/six-degrees.html eyebrow and meta description |
| Six Degrees of Anything (How it finds a path) | a two-degree path costs two SPARQL neighbour expansions, one per endpoint, after both names are resolved through the Wikidata search API, and when only generic bridges come back, hard mode (on by default) tries a third-hop query; "two queries rather than six" is UNSOURCED, since nothing in the code or the repo backs the six (see Needs verification) | apps/six-degrees.html connect(), neighbours(), thirdDegree() |
| Died Doing What | for poets, tuberculosis leads, ahead of heart attacks and cancer (460, 378 and 356 recorded deaths in the capture); the all-eras note and the finding when tuberculosis leads say it "wins almost any trade", which is UNSOURCED beyond poets (see Needs verification) | apps/shots/died-doing-what.webp, a 960x600 capture of the app's default poet view on 3 Oct 2026 with the Wikidata responses mocked to the counts in the 24 Sep 2026 capture (460, 378 and 356, plus 215 for pneumonia); the rows below the crop were invented filler and are not shown; the 24 Sep PNG is in git history |
| The Nepotism Graph | no figure; the hook names conductors as the example trade; the /apps/ row's thumbnail is a capture of the app's default actor query (390,901 in the trade, 1,432 with a relative in it, 526 dynasties found), live output and not a claim | the app itself; apps/shots/nepotism-graph.webp, a 960x600 capture on 3 Oct 2026 with the Wikidata responses mocked to the 24 Sep 2026 counts, where the 0.4% share is the app's own division of 1,432 by 390,901 and the 5 generations deep comes from the mocked pair rows and is not a claim; the 24 Sep PNG is in git history |
| SQL Tarot | fourteen SQL clauses, upright or reversed, three dealt per reading (what you inherited, what you are writing and what ships to prod) | apps/sql-tarot.html DECK, POSITIONS and draw(): shuffle(DECK).slice(0, 3) |
| Whodunit Roulette | 22 curated mysteries in the pool | apps/whodunit-roulette.html BOOKS |
| Whodunit Roulette book data | a publication year, a body count and a one-line blurb for each of the 22 books, all hand-entered; the ten Christie years that /life also shows (The Moving Finger 1942, And Then There Were None 1939, Five Little Pigs 1942, A Murder Is Announced 1950, Death on the Nile 1937, After the Funeral 1953, Sleeping Murder 1976, Murder on the Orient Express 1934, Cat Among the Pigeons 1959, The Murder of Roger Ackroyd 1926) match content.js CHRISTIE; the other twelve years (Crooked House 1949, Endless Night 1967, The Pale Horse 1961, The Honjin Murders 1946, The Inugami Curse 1951, The Village of Eight Graves 1949, The Daughter of Time 1951, Gaudy Night 1935, The Nine Tailors 1934, Malice 1996, The Devotion of Suspect X 2005, Guards! Guards! 1989), all 22 body counts and the blurb claims (solved sixteen years late from five accounts, Christie's own favourite, the real poisoning victim's life saved, twelve alibis, four hundred years, page thirty) are UNSOURCED (see Needs verification) | apps/whodunit-roulette.html BOOKS |
| Escalation Simulator | 41 days to renewal and five decisions | apps/escalation-simulator.html |
| Was It Worth It? | wait thirty days, then answer yes or no | apps/was-it-worth-it.html |
| Was It Worth It? (first load) | with no saved ledger it shows a five-item sample (Mechanical keyboard $189, Standing desk mat $64, Second monitor arm $120, Ring Fit Adventure $79, Air fryer $145; $597 logged, 33% regret, 1 regret of the 3 judged), which is sample data and not Samie's purchases, though Ring Fit is a real one on /life, so the items, prices and verdicts are UNSOURCED; it has no sample caption yet, which the arcade clean-up plans to add (see Needs verification) | apps/was-it-worth-it.html DEMO |
| Streak Autopsy | a habit is declared dead at two missed days; a streak under two weeks (14 days) gets the early-frost finding, whose "a habit takes longer than that" is UNSOURCED (see Needs verification); the Austin forecast covers five days, which is where "five clear days ahead" comes from | apps/streak-autopsy.html (the finding at days < 14; loadForecast(), Open-Meteo forecast_days=5) |
| Taco Coin Flip | scores within five points count as a tie | apps/taco-coin-flip.html |
| Backlog Reaper | a Steam import treats anything over 20 hours as played | apps/backlog-reaper.html |
| Backlog Reaper (first load and reset) | a six-game sample pile (6 unplayed, 319 hours owed, $230), shown with no sample caption yet, which the arcade clean-up plans to add; its game lengths (Persona 5 Royal 104 h, Disco Elysium 40, Hades II 45, Outer Wilds 22, Baldur's Gate 3 130, Stardew Valley (again) 60) and prices ($60, $40, $30, $25, $60, $15) are UNSOURCED (see Needs verification) | apps/backlog-reaper.html DEMO |
| Same Name, Different Life | every human in Wikidata who carried the name, laid out by century, linked by the trades they shared, and set beside a second name; the app has a by-century grid, shared-trade chains, a selected-life card, the finding, the SPARQL panel and a two-name comparison, and no constellation or list view | apps/same-name.html |
| The Locked Room | every generated case has six guests, drawn from a list of eleven, and one impossible exit ("A house, a body, six guests, and one impossible exit") | apps/locked-room.html make(): shuffle(GUESTS).slice(0, 6) |

## Life page, other (data/content.js LIFE_FIELD, PROGRESS, RECORDS, CHRISTIE)

| Fact | Value |
| --- | --- |
| Life OS | 2025–26; pulls from two of Samie's own data endpoints; fifteen charts |
| Tarot tracker | 2025 |
| Toothbrush | a brush that maps sixteen zones, 45 seconds (self-reported) |
| In progress bars | Greenbelt 71% (15 of 21 miles); Poirot 79% (26 of 33); Steam review-bombing detection 30%, over 31M+ reviews; solo travel, London first, 20%; the 30% and 20% are Samie's own estimates, not measurements |
| Record shelf detail | the 1969 Santana with the print, the purple Purple Rain 12-inch, the 1977 Star Wars double LP, thirteen Bond themes plus the 1965 mono comp, three Strokes, two Selenas, one John Mulaney comedy record; the record panel adds a 7″ single of one song (The Imperial March) and the We'll All Be Here Forever 3xLP (Stick Season) (Discogs export, Aug 2026) |
| Christie shelf | publication years per book; read dates and star ratings from the Goodreads export; the Poirot short-story collections before the current book rated 4 by Samie on 25 Sep 2026; shelf tallies computed in js/life.js from CHRISTIE: Poirot 31 of 42 read (26 of 33 novels plus 5 of 8 story collections, with the play Black Coffee unread, a wider count than the progress bar's 26 of 33), standalones and stories 7 of 7 read, Miss Marple 14 maybes, Tommy and Tuppence 5 maybes, Quin and Parker Pyne 2 maybes; Death on the Nile read three times and Murder on the Orient Express reread, both dates lost |
| Notes | four notes, dated May 2026 (01 Instacart, 03 ATX Foodie, 04 systems) and Apr–May 2026 (02 raccoon) in each eyebrow and the notes index; note 02's months are the raccoon window (Timeline; raccoon/index.html period Apr 24 – May 10, 2026), and the May 2026 on notes 01, 03 and 04 is self-reported and UNSOURCED, since nothing in the repo dates them (see Needs verification); note 01's "a week" building the dbt layer and note 04's system "rebuilt roughly four times" are self-reported; the effort curve in note 04 is illustrative and captioned as such, and its v1 to v4 hills are not a count |
| Field card years | What a walk is worth 2026; the raccoon 2026; the toothbrush 2026; Half-timbering in House Flipper 2026; Life OS 2025–26 and the tarot tracker 2025, as in their own rows, and the journaling app 2020–26, which starts from the Timeline's journaling daily since 2020; every other card says Ongoing or Current (content.js LIFE_FIELD, self-reported) |

## Site toolkit and identity

| Fact | Value |
| --- | --- |
| Built with | Claude Opus |
| Stack | 0 frameworks and no build step: plain HTML, CSS custom properties and vanilla JS modules on GitHub Pages with a custom domain and GA4; data work in dbt on BigQuery, Python and folium (/toolkit hero stat, section 05 and footer; CLAUDE.md, README.md, CNAME; the repo has no package.json or bundler config) |
| How each build runs on the site | Signal and Brain Dump are the two live LLM apps and call the Anthropic API through a Cloudflare Worker that holds the key (Brain Dump's also holds the prompts); Life in Pixels and Guideline Assist are replayed from their recorded eval runs at /pixels and /assist; Field discovery is a case study at /field-discovery/ and a walkthrough of its golden transcript at /field-discovery/demo/, case study and demo only (README.md routes table), with demo runs canned and $0 on the site (toolkit.html section 05, README.md routes table and project paragraphs, content.js RESULTS) |
| Models on the work page | Haiku 4.5 (Life in Pixels, Signal summaries, Guideline Assist), Sonnet 4.6 (Signal analysis) and Sonnet 5, claude-sonnet-5 (Field discovery, Guideline Assist, Brain Dump); Gemini 3.8 Flash appears only as an evaluated comparison in the Guideline Assist results strip (assist_100, 26 Sep 2026), so the fine-tuning paragraph reads "Every build on this page runs on a prompted Haiku or Sonnet" (3 Oct 2026) |
| Hero eval log | header "evals · runs from 21 to 24 Sep 2026" and aria-label "Eval log, runs from 21 to 24 September 2026" (3 Oct 2026); its nine rows come from results dated 21 to 24 Sep 2026: Signal arm A 21 Sep (the 7/20 and half of the 0/520), arm B 22 Sep, Field discovery and Pixels 22 Sep, and Guideline Assist `assist-2026-09-24.json` 24 Sep; the later runs (QA hand labels 25 Sep, prompt tuning, held-out confirm and Gemini 25 to 26 Sep) are not in the log, and the held-out confirm's Sonnet 5 full 73.4% (256/349) is a separate run from the log's 73.9% (258/349) (content.js HERO_LOG) |
| Builds | five builds with dated evals: Field discovery, Life in Pixels, Guideline Assist, Signal and Brain Dump |
| Spine | five patterns on the work page: agents, RAG, assist + QA, fine-tuning (in progress, no build yet) and MCP; the fine-tuning row's caption "baselines scored · tuned run not yet" is UNSOURCED, since no results file for prompted Haiku or Sonnet on card matching is in this repo or named in its README.md, and the Field-Sales-Build README, the build whose requirement cards the matching runs on, is private and not readable from this repo, and the fine-tuning section captions its bars as placeholders (see Needs verification) |
| Social card | 1200×630, was 347×190; redrawn 3 Oct 2026 with just the name |
| Name only | home tab title, og:title, og:image:alt and the manifest short_name are "Samie Vargas" (3 Oct 2026) |
| Favicon set | favicon.svg, favicon-16, favicon-32, apple-touch-icon 180, icon-192 and icon-512, both icons maskable in site.webmanifest |
| Copy limits on /toolkit | <title> 60, og:title 70, og:description 200, description 160 characters; Google cuts descriptions around 155, and the old description was 197 |
| Type and colour | three typefaces, Young Serif, Onest and Geist Mono, and one accent green, `--accent` #1a6b5a (/toolkit section 02; css/styles.css :root and the Google Fonts link on every 3a page) |
| Evidence dots sample (/toolkit 02) | ten dots with six red, laid out for the sample (js/toolkit.js BAD) and not a test result; the caption reads "one dot per test case · red still breaks · laid out for the sample" (3 Oct 2026) |
| Footer | © 2026 Samie Vargas on the work page, /life, /toolkit, /apps/ and 404; 2026 is the year of the first commit (20 May 2026) |

## Needs verification

Each item below is on the site or in a source file the site copies from, and needs Samie to check it before it can be treated as locked. Until then rule 6 applies: it stays where it is and out of new copy.

| Item | Why it needs checking | What would resolve it |
| --- | --- | --- |
| Every verify and credential link | the IDs and links now match the certificate PDFs Samie supplied on 3 Oct 2026, but the sandbox could not open Skilljar, Coursera, Databricks, Snowflake, dbt or Skillshop to see the pages load | click each link on the work page once |
| Gemini 3.8 Flash prices | UNCONFIRMED against Google's own pricing page | check Vertex AI pricing and update the Gemini rows if they differ |
| Self-reported work figures | the résumé and experience rows have no document behind them in this repo | nothing to do unless a figure changes; they are listed so a copy edit cannot drift them |
| Brain Dump "forty-seven mental tabs" | content.js credits the brain-dump README, which is not in this repo, and the line has been on the work page since 20 Sep 2026 (bfdb1e7) | confirm the brain-dump README says forty-seven, or reword without the count |
| Fine-tuning spine caption "baselines scored · tuned run not yet" | on the spine since c01eb10 (24 Sep 2026) with no results file behind it, while the fine-tuning section captions its bars as placeholders | name the baseline results file, or change the caption to say no runs yet |
| "Copilot" in the Senior Manager bullet (work page) | the work page names Copilot among the AI tools, and the résumé's bullet and Tools line do not | Samie confirms Copilot and the résumé adds it, or the work page drops it |
| Instacart "run on free trials, so nothing when I run it" | content.js cites the Instacart README, which is not in this repo, and assets/instacart-dbt/instacartREADME.md is a one-line stub | confirm the free trials and the $0 in the Instacart README, or reword the cost line |
| Life in Pixels "the config and the two tool schemas are in the repo" | /pixels section 03 says it, and neither this repo's README.md nor any file here names the config or the schemas, and the pixels-rag README is the source under rule 9 | confirm both in the pixels-rag README, or drop the clause from /pixels |
| Field discovery capture timer 0:58 and the "sixty seconds" voice note | the step 1 timer is hard-coded to count to 0:58 (js/app.js), with no recording length in any file and no caption saying it is illustrative, and the sixty seconds is in this repo's README.md and on the work page but not traced to the Field-Sales-Build README | add a mono caption saying the timer is laid out for the mock, or use G02's real recording length, and confirm the sixty seconds in the Field-Sales-Build README |
| Early-user claims on the résumé | Signal "validated with early users, including a senior CS leader" and Brain Dump "Early users' feedback drove a single-step capture flow" have no README behind them (rule 9); both date from the 20 Sep 2026 résumé (bfdb1e7) | Samie confirms both and the signal and brain-dump READMEs say so, or the résumé drops them |
| Six Degrees "graph search over 100M+ Wikidata statements" | nothing in the repo gives a count or a date for the figure | read and date Wikidata's own statistics and record the figure here, or drop the number |
| Six Degrees "two queries rather than six" | the code backs two neighbour queries for a two-degree path, and nothing backs the six | say what the six counts, or drop the comparison |
| Died Doing What "tuberculosis wins almost any trade" | the only capture in the repo is the default poet view, so it is backed for poets alone | capture other trades and record them here, or scope the line to poets |
| Streak Autopsy "a habit takes longer than that" | the early-frost finding says a habit takes longer than two weeks, and no source is cited | cite a source, or reword the finding without the claim |
| Whodunit Roulette book data | twelve publication years, all 22 body counts and the blurb claims are hand-entered with no source (see Arcade claims) | check each against a published reference and record it, or cut what cannot be checked |
| Backlog Reaper and Was It Worth It? sample data | both show sample data on first load (a six-game pile and a five-item ledger) with no caption saying so, and neither the Backlog Reaper lengths and prices nor the Was It Worth It? items, prices and verdicts have a source; sample captions are planned in the arcade clean-up | add the captions in the arcade clean-up, and source the game lengths and prices or mark both samples as made up |
| /life note 01 "top two reorder departments" | dairy and produce are the top two by reorder count among the eight departments the query screenshot shows, and by reorder rate, the order it sorts by, the top two are dairy eggs and beverages | Samie names the measure in the copy, or the copy names dairy and beverages |
| /life note 03 "starts to show by the fifth or sixth visit" | the 5th and 6th points (91.05, 91.15) are the first to pass 91, but the 7th (89.8) is the lowest score on the line, the fewest violations, which the flipped chart draws highest, and the line does not pass the 6th again until the 11th (91.8) | Samie keeps the wording knowingly, or note 03 describes only the ends |
| Raccoon body battery baseline 20/100 | it cannot be rebuilt from the printed readings: the week before, Apr 19 to 22, prints only as 5–15, so it already touched the 5 floor and sat at or below the bottom of the 15 to 25 "normal range", and Apr 23 reads 23 | Samie says where 20 and 15 to 25 come from in Garmin Connect, or the page drops one |
| Raccoon 11 nights interrupted | no printed reading says which 11 nights, and the /raccoon 01b thread's first message bills "Invoice 0007-RAC" for "five nights of interrupted sleep" | Samie names the 11 nights, or the thread says five nights so far |
| /life note dates | notes 01, 03 and 04 say May 2026, self-reported, and nothing in the repo dates them; note 02's Apr–May 2026 is the raccoon window and is sourced | Samie confirms the month for notes 01, 03 and 04, or those eyebrows drop it |

## History

When a row changes, move the old value here with the date it stopped being current.

| Until | Row | Old value | Why it changed |
| --- | --- | --- | --- |
| 26 Sep 2026 | Field discovery shadow | 78% status agreement | the README says 77.8% |
| 26 Sep 2026 | Field discovery closed-enum and stability | dated 22 Sep 2026 | measured 29 Aug 2026 and not re-run since 20 Sep |
| 26 Sep 2026 | Pixels routes | 3 plus unanswerable | the README counts four routes |
| 26 Sep 2026 | Pixels finding | hot yoga plus walking beat everything else for sleep and recovery | it came from asking the model, and the committed data is a synthetic fixture that plants it |
| 26 Sep 2026 | Guideline Assist costs | shown as $122 and $48 | the results files say $121.83 and $48.47, and rule 3 does not round |
| 26 Sep 2026 | Guideline Assist Haiku arm A and arm B costs | $48.47, $55.02, $148.03 | the exporter averaged cost per turn through a four-place rounding; recomputed unrounded it is $47.89, $55.13 and $147.49 (guideline-assist PR #10) |
| 26 Sep 2026 | Signal latency | "51 seconds" (UNSOURCED) | no source anywhere in the repo |
| 26 Sep 2026 | Structured outputs scope | "across the earlier builds" | 520 is Signal alone |
| 3 Oct 2026 | Instacart AUC | 0.989 vs 0.857 | the source chart prints 0.9886 and 0.8566, the work page already said so, and rule 3 does not round |
| 3 Oct 2026 | Prompt tuning renderings | six library renderings tried, which /assist repeated as six shorter versions | six counted the full library; the shorter versions tried are five (dedupe, nosub, outline, bare, keysub) in assist-replay.json and the /assist table |
| 3 Oct 2026 | Arcade | 15 apps, 6 pull live data | SQL Tarot queries data.austintexas.gov and Streak Autopsy fetches an Open-Meteo forecast, so eight apps make live requests |
| 3 Oct 2026 | Raccoon window | 23 Apr – 10 May 2026 | the Raccoon row's 17 days and the page's period run from 24 Apr; 23 Apr is the baseline reading before it started |
| 3 Oct 2026 | Same Name hook | "as a timeline, a constellation, and a list" | the app has no constellation or list view; the hook now names the by-century grid, the shared-trade chains and the two-name comparison it does have |
| 3 Oct 2026 | PMP | listed as PMP, Project Management Professional · PMI in CERTIFICATIONS.md and on an earlier résumé | never held, a drift from an earlier editing session; Samie's only PMI credential is the Kickoff: Predictive badge (11 May 2026), which CERTIFICATIONS.md now lists |
| 3 Oct 2026 | Raccoon body battery average | 10/100 (RECONCILE) | it matched no window of the daily readings; Samie asked for the raccoon to follow FACTS.md, so the page takes the mean of the incident window's readings, 12.1 |
| 3 Oct 2026 | Arcade hooks | Died Doing What: tuberculosis leads for poets "at a median age of 58"; Nepotism Graph: "of the 25,885 conductors in Wikidata, 347 have a relative who also conducted" | neither figure has a source in the repo; the Died Doing What hook now states only what its 24 Sep capture shows, and the Nepotism Graph hook names the example without a count |
| 3 Oct 2026 | Field discovery and Brain Dump prices | marked to re-check | claude-sonnet-5's $2 / $10 was set on 23 Sep 2026 from the Claude API pricing reference, replacing Sonnet 4.6's $3 / $15, and re-read unchanged on 3 Oct 2026; Samie treats it as confirmed, so the site says list prices read 23 Sep 2026 |
| 3 Oct 2026 | Team Leader | led 5 client-facing managers (work page) | Samie confirmed 5 client solutions specialists, as the résumé says |
| 3 Oct 2026 | Google Business Intelligence | linked to a coursera.org/account/accomplishments page with no ID shown | the certificate PDF gives the public verify link and ID CLF3CXNNZO4L |
| 3 Oct 2026 | PSM I and Six Sigma White Belt | no verify link or issuer on file | the certificate PDFs give Scrum.org certificate 1318010 and the Council for Six Sigma Certification number nslvDTFJHO |
| 3 Oct 2026 | Shadow and Gemini rows | no "about" wording | Samie approved "about one suggestion in five" on the work page and "about 40% of the cost" on /assist as written |
| 3 Oct 2026 | Hero eval log (work page) | header "evals · last run 24 Sep 2026", aria-label "Eval log, last run 24 September 2026" | the nine rows date from 21 to 24 Sep 2026 and later runs landed on 25 and 26 Sep, so the header now dates the rows, "runs from 21 to 24 Sep 2026" |
| 3 Oct 2026 | Fine-tuning paragraph (work page) | "Every model call on this page is a prompted Haiku or Sonnet" | the Guideline Assist strip also shows a Gemini 3.8 Flash eval run, so the sentence now speaks of the builds, which all run on Haiku or Sonnet |
| 3 Oct 2026 | Instacart dbt map (work page) | fct_orders drawn in the Intermediate band beside int_order_products_joined, with two marts | dag_01_full_lineage.png puts fct_orders in the marts, which matches the row's 1 join and 3 marts |
| 3 Oct 2026 | ATX "What it costs to run" (work page) | "Nothing, it is a Kaggle notebook and static images on this page" | the drift chart on the work page is redrawn from the notebook's chart, not a static image |
| 3 Oct 2026 | Brain Dump tuning headline (work page) | "A tuned prompt at medium effort halved the wait, and cutting the effort to halve it again more than doubled the one mistake the page cannot fix." | "halve it again" held for the p90 (13.4 to 6.6 s) and not the median (7.3 to 4.6 s), so the headline now names the medians |
| 3 Oct 2026 | Signal input pile (work page) | no caption | the pile is laid out for the mock, so it now says so, as CLAUDE.md asks |
| 3 Oct 2026 | /pixels meta description | "Twenty-six questions asked of six months of daily data" | the questions ran on the seeded synthetic export, not on the six months of real data |
| 3 Oct 2026 | /pixels section 02 plain line | "and left every other answer the same." | expected facts moved 82% to 83% on questions other than S06, so only recall@5 stayed the same |
| 3 Oct 2026 | README.md Life in Pixels paragraph | weekly rollups "changed nothing else" | the same reason; it now says they "left every other question's retrieved days the same" |
| 3 Oct 2026 | Résumé Guideline Assist line | "Evaluated on 100 frozen ABCD test chats, 24 Sep 2026" | the line also quotes the Gemini 3.8 Flash run of 26 Sep 2026, so it now reads 24 to 26 Sep 2026, the span the Held-out table row uses; Resume.pdf reprinted |
| 3 Oct 2026 | Résumé SharePoint line | "used daily by 60+ people and adopted by three other BUs" | it said more than this file and the first résumé, which have the SharePoint as the model for three other BUs; Resume.pdf reprinted |
| 3 Oct 2026 | /toolkit evidence dots caption | "one dot per test case · red still breaks" | the ten dots and six red are laid out for the sample, so the caption now ends "· laid out for the sample" |
| 3 Oct 2026 | Timeline, raccoon window | the 23 Apr reading is the pre-raccoon baseline | the page gives 23 Apr as the last reading before it started (body battery 23, sleep 93, HRV 47 ms) and separate baselines of sleep 81, body battery 20/100 and HRV 38 ms |
| 3 Oct 2026 | QA against hand labels | undated, so read as the section's 24 Sep 2026 | it was scored against the hand labels on 25 Sep 2026 (`qa-agreement-2026-09-25.json`) |
| 3 Oct 2026 | Instacart dbt tests | 35 tests, locked with no flag | assets/instacart-dbt/doc_01_dbt_test_all_passing.png, the only dbt test run in the repo, shows All 34 and Pass 34, so 35 is RECONCILE and stays as written on the pages until the Instacart repo's latest run settles it |
| 3 Oct 2026 | Arcade thumbnails (/apps/) | PNG captures in apps/shots-clean/ from 24 Sep 2026 | retaken from today's apps as 960x600 WebP in apps/shots/, with no metadata, and the mocked API values noted in the three rows above; the old PNGs stay in git history |
| 3 Oct 2026 | Instacart dbt tests | 35 tests, RECONCILE | Samie deferred to the screenshot: assets/instacart-dbt/doc_01_dbt_test_all_passing.png shows All 34 and Pass 34, so the work-page map and results strip, README.md, the résumé and Resume.pdf now say 34 |
| 3 Oct 2026 | Work-page Pixels eyebrow | "evals on a synthetic export shaped like it" | "it" meant six months of real data while the export holds 118 days, so the eyebrow now says "evals on a synthetic export of 118 days shaped like it" |
