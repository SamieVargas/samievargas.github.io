// ============================================================
// js/render.js
// ============================================================

import { EXPERIENCE }                      from '../data/experience.js';
import { FEATURED_PROJECTS, GRID_PROJECTS } from '../data/projects.js';
import { SKILL_GROUPS, CERTIFICATIONS }    from '../data/skills.js';
import { OBSERVATIONS }                    from '../data/observations.js';
import { BIO, QUICK_FACTS, INTERESTS, CONTACT } from '../data/about.js';

function qs(sel) { return document.querySelector(sel); }

function buildCarousel(slides) {
  const hasMultiple = slides.length > 1;
  const slidesHTML = slides.map(s => {
    // Support typed slides: { type: 'iframe' } or { type: 'img' } or legacy (no type = img)
    let inner;
    if (s.type === 'iframe') {
      inner = `<iframe src="${s.src}" class="c-iframe" allowfullscreen loading="lazy" title="${s.label}"></iframe>`;
    } else {
      const img = `<img src="${s.src}" alt="${s.alt || ''}" loading="lazy">`;
      inner = s.link ? `<a href="${s.link}" target="_blank" rel="noopener">${img}</a>` : img;
    }
    return `<div class="c-slide">${inner}<span class="c-lbl">${s.label}</span></div>`;
  }).join('');
  const controls = hasMultiple ? `
    <button class="c-btn c-prev" aria-label="Previous">&#8249;</button>
    <button class="c-btn c-next" aria-label="Next">&#8250;</button>
    <div class="c-dots">${slides.map((_,i) => `<span class="c-dot${i===0?' on':''}"></span>`).join('')}</div>
  ` : '';
  return `<div class="carousel" data-carousel><div class="c-track">${slidesHTML}</div>${controls}</div>`;
}

// ── EXPERIENCE ───────────────────────────────────────────────
export function renderExperience() {
  const el = qs('#experience');
  if (!el) return;
  const company = EXPERIENCE[0];
  const rolesHTML = company.roles.map((role, i) => `
    <div class="exp-role collapsed reveal${i > 0 ? ` reveal-delay-${Math.min(i,3)}` : ''}">
      <div class="exp-rh">
        <div class="exp-rt">${role.title}</div>
        <div class="exp-rh-right">
          <div class="exp-dates">${role.period}</div>
          <button class="exp-toggle" aria-expanded="false">
            <span class="exp-toggle-label">Show details</span>
            <span class="exp-toggle-icon">▾</span>
          </button>
        </div>
      </div>
      <ul class="exp-bullets" style="max-height:0">
        ${role.bullets.map(b => `<li>${b}</li>`).join('')}
      </ul>
      <div class="exp-tags">${role.tags.map(t => `<span class="exp-tag">${t}</span>`).join('')}</div>
    </div>
  `).join('');
  el.className = 'swf bg-white';
  el.innerHTML = `
    <div class="swf-inner">
      <div class="sh reveal">
        <span class="sl">01 — Career</span>
        <h2 class="st">Work Experience</h2>
        <button class="exp-toggle-all" id="exp-toggle-all">Expand All</button>
      </div>
      <div class="exp-co-row">
        <div class="exp-co-label reveal">
          <div class="exp-co-name">${company.company}</div>
          <div class="exp-co-meta">${company.location}<br>${company.period}<br>${company.summary}</div>
        </div>
        <div class="exp-roles">${rolesHTML}</div>
      </div>
    </div>
  `;
}

// ── PROJECTS ─────────────────────────────────────────────────
export function renderProjects() {
  const el = qs('#work');
  if (!el) return;

  const featuredCount = FEATURED_PROJECTS.length;
  const gridCount = GRID_PROJECTS.filter(p => !p.dim).length;
  const totalCount = featuredCount + gridCount;

  el.className = 'swf bg-page';
  el.innerHTML = `
    <div class="swf-inner">
      <div class="sh reveal">
        <span class="sl">02 — Portfolio</span>
        <h2 class="st">Selected Work</h2>
        <span id="proj-count" style="font-family:var(--mono);font-size:.68rem;color:var(--muted);margin-left:auto;letter-spacing:.06em;">${totalCount} projects</span>
      </div>

      <!-- Filter pills -->
      <div class="filter-row" id="filter-row">
        <div class="ftag on" data-filter="all">all</div>
        <div class="ftag" data-filter="Python">Python</div>
        <div class="ftag" data-filter="SQL">SQL</div>
        <div class="ftag" data-filter="dbt">dbt</div>
        <div class="ftag" data-filter="AI Agent">AI Agent</div>
        <div class="ftag" data-filter="Apps Script">Apps Script</div>
        <div class="ftag" data-filter="ML">ML</div>
      </div>

      <!-- Featured carousel -->
      <div class="feat-wrap reveal" id="feat-wrap">
        <div class="ghost l" id="ghost-l" onclick="window.__featStep(-1)"></div>
        <div class="active-card" id="feat-active">
          <!-- populated by JS -->
        </div>
        <div class="ghost r" id="ghost-r" onclick="window.__featStep(1)"></div>
        <button class="cbtn prev" id="feat-prev" aria-label="Previous">&#8249;</button>
        <button class="cbtn next" id="feat-next" aria-label="Next">&#8250;</button>
      </div>
      <div class="cdots" id="feat-dots"></div>

      <!-- Also Built -->
      <div class="also-label">Also Built</div>
      <div class="also-wrap reveal" id="also-wrap">
        <button class="also-nbtn" id="also-next" aria-label="Next">›</button>
      </div>
    </div>
  `;

  initProjectCarousels();
  initProjectFilters();
}

// ── PROJECT CAROUSEL STATE ───────────────────────────────────
let featIdx = 0;
let alsoIdx = 0;
let activeFilter = 'all';
const ALSO_VISIBLE = 3;

function projMatches(p) {
  return p.filters && p.filters.includes(activeFilter);
}

function getFeaturedFiltered() {
  if (activeFilter === 'all') return FEATURED_PROJECTS;
  const filtered = FEATURED_PROJECTS.filter(projMatches);
  return filtered.length ? filtered : FEATURED_PROJECTS;
}

function getAlsoFiltered() {
  const also = GRID_PROJECTS.filter(p => !p.dim);
  if (activeFilter === 'all') return also;
  const filtered = also.filter(projMatches);
  return filtered.length ? filtered : also;
}

function updateProjCount() {
  const el = document.getElementById('proj-count');
  if (!el) return;
  const total = FEATURED_PROJECTS.length + GRID_PROJECTS.filter(p => !p.dim).length;
  if (activeFilter === 'all') { el.textContent = `${total} projects`; return; }
  const feat = FEATURED_PROJECTS.filter(projMatches).length;
  const also = GRID_PROJECTS.filter(p => !p.dim && projMatches(p)).length;
  el.textContent = `${feat + also} of ${total} match "${activeFilter}"`;
}

function renderFeatCard() {
  const projects = getFeaturedFiltered();
  if (!projects.length) return;
  const idx = featIdx % projects.length;
  const p = projects[idx];
  const el = document.getElementById('feat-active');
  if (!el) return;

  const mediaHTML = p.media.type === 'carousel'
    ? buildCarousel(p.media.slides)
    : p.media.type === 'iframe'
      ? `<iframe src="${p.media.src}" class="c-iframe" allowfullscreen loading="lazy"></iframe>`
      : `<div class="active-media-ph"><span>[ preview ]</span></div>`;

  el.innerHTML = `
    <div class="active-media">${mediaHTML}</div>
    <div class="active-lower">
      <div class="active-ctx">
        <div class="ctx-k">Problem</div><div class="ctx-v">${p.quickContext.problem}</div>
        <div class="ctx-k">Approach</div><div class="ctx-v">${p.quickContext.approach}</div>
        <div class="ctx-k">Finding</div><div class="ctx-v">${p.quickContext.finding}</div>
        ${(p.links || []).map(l => `<a class="plink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
      </div>
      <div class="active-det">
        <span class="ptag">${p.badge}</span>
        <div class="ptitle">${p.title}</div>
        <p class="pdesc">${p.description}</p>
        <div class="ppills">${p.tags.map(t => `<span class="ppill">${t}</span>`).join('')}</div>
      </div>
    </div>
  `;

  // Neighbouring projects peek in on either side
  const setGhost = (gid, gp, dir) => {
    const g = document.getElementById(gid);
    if (!g) return;
    if (projects.length < 2) { g.style.visibility = 'hidden'; return; }
    g.style.visibility = '';
    const fi = (gp.media && gp.media.slides) ? gp.media.slides.find(s => s.type === 'img' || (!s.type && s.src)) : null;
    g.innerHTML = `
      <div class="ghost-inner">
        <div class="ghost-media"${fi ? ` style="background-image:url('${fi.src}')"` : ''}></div>
        <div class="ghost-cap">
          <span class="ghost-dir">${dir < 0 ? '‹ Prev' : 'Next ›'}</span>
          <span class="ghost-title">${gp.title.split('—')[0].trim()}</span>
        </div>
      </div>`;
  };
  setGhost('ghost-l', projects[(idx - 1 + projects.length) % projects.length], -1);
  setGhost('ghost-r', projects[(idx + 1) % projects.length], 1);

  const dotsEl = document.getElementById('feat-dots');
  if (dotsEl) {
    dotsEl.innerHTML = projects.map((_, i) =>
      `<div class="cdot${i === idx ? ' on' : ''}" style="width:${i === idx ? '20px' : '7px'};cursor:pointer;" onclick="window.__goFeat(${i})"></div>`
    ).join('');
  }
}

function renderAlsoCards() {
  const wrap = document.getElementById('also-wrap');
  if (!wrap) return;
  const nbtn = wrap.querySelector('.also-nbtn');
  wrap.innerHTML = '';
  if (nbtn) wrap.appendChild(nbtn);

  const items = getAlsoFiltered();
  if (!items.length) return;
  const visible = Math.min(ALSO_VISIBLE, items.length);
  for (let i = 0; i < visible; i++) {
    const p = items[(alsoIdx + i) % items.length];
    const opacity = i === 0 ? 1 : i === 1 ? 0.6 : 0.3;
    const card = document.createElement('div');
    card.className = 'also-card' + (i === 0 ? ' ao' : '');
    card.style.opacity = opacity;

    const firstImg = (p.media && p.media.slides)
      ? p.media.slides.find(s => s.type === 'img' || (!s.type && s.src))
      : null;
    const imgTag = firstImg ? `<img src="${firstImg.src}" alt="${firstImg.alt || p.title}" loading="lazy">` : '';
    const mediaHTML = firstImg
      ? `<div class="also-media has-img">${firstImg.link ? `<a href="${firstImg.link}" target="_blank" rel="noopener">${imgTag}</a>` : imgTag}</div>`
      : `<div class="also-media">[ ${p.id} ]</div>`;
    const cleanBadge = p.badge.split('·').map(s => s.trim()).filter(s => s && !/^self-built$/i.test(s)).join(' · ');

    card.innerHTML = `
      ${mediaHTML}
      <div class="also-body">
        <div class="also-badge">${cleanBadge}</div>
        <div class="also-title">${p.title}</div>
        <div class="also-desc">${p.description}</div>
        ${(p.links || []).map(l => `<a class="also-link" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
      </div>
    `;
    if (nbtn) wrap.insertBefore(card, nbtn); else wrap.appendChild(card);
  }
}

function initProjectCarousels() {
  featIdx = 0; alsoIdx = 0;
  renderFeatCard();
  renderAlsoCards();

  window.__goFeat = (i) => { featIdx = i; renderFeatCard(); };
  window.__featStep = (d) => {
    const len = getFeaturedFiltered().length;
    featIdx = (featIdx + d + len) % len;
    renderFeatCard();
  };

  const prev  = document.getElementById('feat-prev');
  const next  = document.getElementById('feat-next');
  const anext = document.getElementById('also-next');

  if (prev) prev.addEventListener('click', () => {
    const len = getFeaturedFiltered().length;
    featIdx = (featIdx - 1 + len) % len;
    renderFeatCard();
  });
  if (next) next.addEventListener('click', () => {
    featIdx = (featIdx + 1) % getFeaturedFiltered().length;
    renderFeatCard();
  });
  if (anext) anext.addEventListener('click', () => {
    alsoIdx = (alsoIdx + 1) % getAlsoFiltered().length;
    renderAlsoCards();
  });
}

let projectFiltersBound = false;
function initProjectFilters() {
  if (projectFiltersBound) return;
  projectFiltersBound = true;
  document.addEventListener('click', e => {
    const tag = e.target.closest('.ftag');
    if (!tag || !document.getElementById('filter-row')?.contains(tag)) return;
    document.querySelectorAll('.ftag').forEach(t => t.classList.remove('on'));
    tag.classList.add('on');
    activeFilter = tag.dataset.filter;
    featIdx = 0; alsoIdx = 0;
    renderFeatCard();
    renderAlsoCards();
    updateProjCount();
  });
}

// ── SKILLS ───────────────────────────────────────────────────
function tabSlug(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}
function tabLabel(title) {
  return title.split(' & ')[0].trim();
}

export function renderSkills() {
  const el = qs('#skills');
  if (!el) return;

  const tabsHTML = SKILL_GROUPS.map((g, i) =>
    `<div class="stab${i === 0 ? ' on' : ''}" onclick="switchTab(this,'${tabSlug(g.title)}')">${tabLabel(g.title)}</div>`
  ).join('');

  const panelsHTML = SKILL_GROUPS.map((g, i) => `
    <div class="spanel${i === 0 ? ' on' : ''}" id="panel-${tabSlug(g.title)}">
      ${g.items.map(item => `
        <div class="skill-row">
          <div class="skill-dot"></div>
          <span class="skill-name">${item.name}</span>
          ${item.note ? `<span class="skill-note">${item.note}</span>` : ''}
        </div>
      `).join('')}
    </div>
  `).join('');

  // Featured creds — top tier (4 certs, prominent)
  const featuredCerts = [
    { name: 'Google Advanced Data Analytics Certificate', issuer: 'Google / Coursera · Jun 2026', href: 'https://coursera.org/verify/professional-cert/4REOBHKQJ0DS' },
    { name: 'dbt Fundamentals', issuer: 'dbt Labs · May 2026', href: 'https://credentials.getdbt.com/5470c199-7753-4f90-99a3-07e8f8c6fe51' },
    { name: 'PSM I — Professional Scrum Master', issuer: 'Scrum.org · May 2026', href: 'https://scrum.org/certificates/1318010' },
    { name: 'Snowflake Hands-On Essentials: Data Warehouse', issuer: 'Snowflake · Jun 2026', href: 'https://achieve.snowflake.com/e3201335-75c2-4604-98c1-4c8063699131' },
  ];

  const featCredsHTML = featuredCerts.map(c => `
    <div class="fcred">
      <div>
        <div class="fcred-name">${c.name}</div>
        <div class="fcred-meta">${c.issuer}</div>
      </div>
      <div class="fcred-right">
        <a class="fcred-chk" href="${c.href}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Verify ↗</a>
      </div>
    </div>
  `).join('');

  const featuredNames = new Set(featuredCerts.map(c => c.name));

  // Shared cert-row renderer used by the collapsed "Other" drawer
  const renderCertRow = (c, flat = false) => {
    const badgeHTML = c.links && c.links.length
      ? `<a class="cert-badge" href="${c.links[0].href}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Verify ↗</a>`
      : c.subcerts
        ? `<span style="font-family:var(--mono);font-size:.62rem;color:var(--muted);font-style:italic;">verify via subcerts</span>`
        : `<span style="font-family:var(--mono);font-size:.62rem;color:var(--muted);">—</span>`;

    const subHTML = c.subcerts ? `
      <div class="cert-subs">
        <div class="cert-sub-list">
          ${c.subcerts.map(s => `
            <div class="cert-sub-row">
              <span class="cert-sub-name">${s.name}</span>
              <a class="cert-sub-link" href="${s.href}" target="_blank" rel="noopener">Verify ↗</a>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const toggleHTML = c.subcerts ? `
      <button class="cert-tbtn" onclick="event.stopPropagation();toggleCert(this.closest('.cert-row'))">
        <span class="cert-tlbl"> details</span>
        <span class="cert-tic">▾</span>
      </button>
    ` : '';

    return `
      <div class="cert-row"${flat ? ' style="border-top:none;"' : ''} onclick="${c.subcerts ? 'toggleCert(this)' : ''}">
        <div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-iss">${c.issuer}</div>
          ${subHTML}
        </div>
        <div class="cert-right">
          ${badgeHTML}
          ${toggleHTML}
        </div>
      </div>
    `;
  };

  // Everything that isn't a featured-4 cert is consolidated into the collapsed "Other" drawer
  const otherCerts = CERTIFICATIONS.filter(c => !featuredNames.has(c.name));
  const otherRowsHTML = otherCerts.map(c => renderCertRow(c, true)).join('');
  const otherCredsHTML = `
    <div class="other-creds">
      <span style="font-family:var(--mono);font-size:.68rem;color:var(--muted);text-transform:uppercase;letter-spacing:.08em;">Other Credentials</span>
      <div style="display:flex;align-items:center;gap:.75rem;">
        <span style="font-family:var(--mono);font-size:.68rem;color:var(--muted);">${otherCerts.length} credentials</span>
        <button class="other-btn" onclick="toggleOtherCerts(this)">show ▾</button>
      </div>
    </div>
    <div id="other-certs-expanded" style="display:none;">
      ${otherRowsHTML}
    </div>
  `;

  el.className = 'sw';
  el.innerHTML = `
    <div class="sh reveal"><span class="sl">03 — Capabilities</span><h2 class="st">Skills &amp; Tools</h2></div>
    <div class="skills-tabs">${tabsHTML}</div>
    ${panelsHTML}

    <div class="creds-sh reveal"><span class="creds-sl">Credentials</span><span class="creds-ct">${CERTIFICATIONS.length} total</span></div>
    <div class="feat-creds">${featCredsHTML}</div>
    <div class="certs-list">${otherCredsHTML}</div>
  `;
}

// ── GLOBAL UI HANDLERS (referenced by inline onclick) ────────
window.switchTab = function (el, id) {
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('on'));
  document.querySelectorAll('.spanel').forEach(p => p.classList.remove('on'));
  el.classList.add('on');
  const panel = document.getElementById('panel-' + id);
  if (panel) panel.classList.add('on');
};

window.toggleCert = function (row) {
  if (!row) return;
  row.classList.toggle('open');
  const sub = row.querySelector('.cert-subs');
  if (sub) {
    const open = row.classList.contains('open');
    sub.style.maxHeight = open ? sub.scrollHeight + 'px' : '0';
    sub.style.opacity = open ? '1' : '0';
  }
};

window.toggleOtherCerts = function (btn) {
  const expanded = document.getElementById('other-certs-expanded');
  if (!expanded) return;
  const open = expanded.style.display !== 'none';
  expanded.style.display = open ? 'none' : 'block';
  btn.textContent = open ? 'show ▾' : 'hide ▴';
};

// ── OBSERVATIONS ─────────────────────────────────────────────
export function renderObservations() {
  const el = qs('#observations');
  if (!el) return;
  const cardsHTML = OBSERVATIONS.map((obs, i) => `
    <article class="obs-slide${i === 0 ? ' obs-active' : ''}" data-obs="${i}">
      <div class="obs-tag">${obs.tag}</div>
      <h3 class="obs-title">${obs.title}</h3>
      ${obs.paragraphs.map(p => `<p class="obs-body">${p}</p>`).join('')}
      <div class="obs-src">
        ${obs.source.text}
        <a href="${obs.source.linkHref}" target="_blank" rel="noopener">${obs.source.linkText}</a>
        ${obs.source.suffix}
      </div>
    </article>
  `).join('');
  const dotsHTML = OBSERVATIONS.map((_, i) => `
    <button class="obs-dot${i === 0 ? ' on' : ''}" data-dot="${i}" aria-label="Observation ${i + 1}"></button>
  `).join('');
  el.className = 'swf dark-section';
  el.innerHTML = `
    <div class="swf-inner">
      <div class="sh dark reveal"><span class="sl light">04 — Writing</span><h2 class="st light">Observations</h2></div>
      <p class="obs-sub">Notes from the data I live in</p>
      <div class="obs-carousel reveal" id="obs-carousel">
        <div class="obs-track" id="obs-track">${cardsHTML}</div>
        <div class="obs-controls">
          <button class="obs-prev" id="obs-prev" aria-label="Previous">&#8249;</button>
          <div class="obs-dots" id="obs-dots">${dotsHTML}</div>
          <button class="obs-next" id="obs-next" aria-label="Next">&#8250;</button>
        </div>
        <div class="obs-counter" id="obs-counter"></div>
      </div>
    </div>
  `;
}

// ── ABOUT ────────────────────────────────────────────────────
export function renderAbout() {
  const el = qs('#about');
  if (!el) return;

  // Bio rendered as full-width top band
  const bioHTML = BIO.map(p => `<p>${p}</p>`).join('');

  // Quick facts for left column
  const factsHTML = QUICK_FACTS.map(f => `
    <div class="qf"><div class="qfl">${f.label}</div><div class="qfv">${f.value}</div></div>
  `).join('');

  // Interest band: all cards, JS slides 3 at a time
  const interestCardsHTML = INTERESTS.map(item => `
    <div class="int-card">
      <div class="int-icon">${item.icon}</div>
      <div class="int-name">${item.title}</div>
      <p class="int-body">${item.body}</p>
    </div>
  `).join('');

  const pageCount = Math.ceil(INTERESTS.length / 3);
  const dotsHTML = Array.from({length: pageCount}, (_, i) => `
    <button class="int-band-dot${i === 0 ? ' on' : ''}" data-page="${i}" aria-label="Page ${i + 1}"></button>
  `).join('');

  el.className = 'swf dark-section';
  el.style.borderTop = '1px solid rgba(255,255,255,.07)';
  el.innerHTML = `
    <div class="swf-inner">
      <div class="sh dark reveal"><span class="sl light">05 — Background</span><h2 class="st light">About</h2></div>
    </div>

    <div class="about-bio-band reveal">
      <div class="at">${bioHTML}</div>
    </div>

    <div class="about-wrap">
      <div class="about-left">
        <div class="reveal">${factsHTML}</div>
      </div>
      <div class="about-right reveal reveal-delay-1">
        <p class="interests-title">Beyond the Resume</p>
        <div class="int-band-wrap" id="int-band-wrap">
          <div class="int-band" id="int-band">${interestCardsHTML}</div>
        </div>
        <div class="int-band-controls">
          <button class="int-prev-b" id="int-prev-b" aria-label="Previous">&#8249;</button>
          <div class="int-band-dots" id="int-band-dots">${dotsHTML}</div>
          <button class="int-next-b" id="int-next-b" aria-label="Next">&#8250;</button>
        </div>
        <div id="spotify-slot"></div>
        <div class="currently-into-header">Currently Into</div>
        <div class="media-grid">
          <div class="media-col">
            <div class="media-col-label">Reading</div>
            <span class="media-pill">Agatha Christie</span>
            <span class="media-pill">Seishi Yokomizo</span>
            <span class="media-pill">Terry Pratchett</span>
          </div>
          <div class="media-col">
            <div class="media-col-label">Watching</div>
            <span class="media-pill">Bob's Burgers</span>
            <span class="media-pill">Dimension 20</span>
            <span class="media-pill">BoJack Horseman</span>
          </div>
          <div class="media-col">
            <div class="media-col-label">Podcasts</div>
            <span class="media-pill">That Chapter</span>
            <span class="media-pill">Regulation Podcast</span>
          </div>
          <div class="media-col">
            <div class="media-col-label">Playing</div>
            <span class="media-pill">House Flipper 2</span>
            <span class="media-pill">Ring Fit</span>
            <span class="media-pill">Stardew Valley</span>
          </div>
        </div>
      </div>
    </div>
  `;

  loadSpotifyTrack();
}

async function loadSpotifyTrack() {
  const slot = qs('#spotify-slot');
  if (!slot) return;

  const PLAYLIST_ID = '3oLN1CsU4GEi8N3q6SbhbE';

  try {
    slot.innerHTML = `
      <div class="spotify-embed-wrap">
        <div class="media-col-label" style="margin-bottom:.75rem;">Listening to</div>
        <iframe
          style="border-radius:4px; border: 1px solid rgba(255,255,255,.08);"
          src="https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0"
          width="100%"
          height="80"
          frameBorder="0"
          allowfullscreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy">
        </iframe>
      </div>
    `;
  } catch(e) {
    slot.innerHTML = `
      <a class="spotify-card" href="https://open.spotify.com/playlist/${PLAYLIST_ID}" target="_blank" rel="noopener">
        <div class="spotify-art-placeholder">🎵</div>
        <div class="spotify-info">
          <div class="spotify-label">Listening to</div>
          <div class="spotify-track">Chasing Joy</div>
          <div class="spotify-artist">138 songs · Samie's playlist</div>
        </div>
        <div class="spotify-icon">♫</div>
      </a>
    `;
  }
}

// ── CONTACT ──────────────────────────────────────────────────
export function renderContact() {
  const el = qs('#contact');
  if (!el) return;
  const linksHTML = CONTACT.links.map(l => {
    const attrs = l.external ? 'target="_blank" rel="noopener"' : '';
    const hint = l.copyEmail ? '<span class="copy-hint">click to copy</span>' : '';
    const id = l.copyEmail ? 'id="copy-email"' : '';
    return `<a class="clink" href="${l.href}" ${id} ${attrs}><span class="cll">${l.label}</span>${l.value}${hint}</a>`;
  }).join('');
  el.className = 'sw';
  el.innerHTML = `
    <div class="sh reveal"><span class="sl">06 — Get in Touch</span><h2 class="st">Contact</h2></div>
    <div class="cg">
      <div class="reveal">
        <h3 class="ch">${CONTACT.heading}</h3>
        <p class="cs">${CONTACT.subtext}</p>
        <a class="btn btn-primary" href="mailto:${CONTACT.email}">Send an Email</a>
      </div>
      <div class="cl reveal reveal-delay-1">${linksHTML}</div>
    </div>
  `;
}

// ── RENDER ALL ───────────────────────────────────────────────
export function renderAll() {
  renderExperience();
  renderProjects();
  renderSkills();
  renderObservations();
  renderAbout();
  renderContact();
}
