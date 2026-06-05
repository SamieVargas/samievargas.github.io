// ============================================================
// js/render.js
// ============================================================

import { EXPERIENCE }                      from '../data/experience.js';
import { FEATURED_PROJECTS, GRID_PROJECTS } from '../data/projects.js';
import { SKILL_GROUPS, CERTIFICATIONS }    from '../data/skills.js';
import { CURRENTLY_BUILDING }              from '../data/building.js';
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
  const featuredHTML = FEATURED_PROJECTS.map((p, i) => {
    const mediaHTML = p.media.type === 'iframe'
      ? `<div class="pf-media"><iframe src="${p.media.src}" allowfullscreen mozallowfullscreen webkitallowfullscreen></iframe></div>`
      : `<div class="pf-media">${buildCarousel(p.media.slides)}</div>`;
    const tagsHTML = p.tags.map(t => `<span class="ppill">${t}</span>`).join('');
    return `
      <article class="project-featured reveal${i > 0 ? ` reveal-delay-${Math.min(i,2)}` : ''}">
        ${mediaHTML}
        <div class="pf-lower">
          <aside class="pf-context-col">
            <div class="pf-context-sticky">
              <div class="pf-context-header">Quick Context</div>
              <div class="pf-context-item"><span class="pf-context-key">Problem</span><p>${p.quickContext.problem}</p></div>
              <div class="pf-context-item"><span class="pf-context-key">Approach</span><p>${p.quickContext.approach}</p></div>
              <div class="pf-context-item"><span class="pf-context-key">Finding</span><p>${p.quickContext.finding}</p></div>
              ${(p.links || [p.link]).filter(Boolean).map(l => `<a class="plink" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join("")}
            </div>
          </aside>
          <div class="pf-details">
            <span class="ptag">${p.badge}</span>
            <div class="ptitle">${p.title}</div>
            <p class="pdesc">${p.description}</p>
            <div class="pmeta">${tagsHTML}</div>
          </div>
        </div>
      </article>
    `;
  }).join('');
  const gridHTML = GRID_PROJECTS.map((p, i) => {
    let mediaHTML = p.media.type === 'carousel'
      ? buildCarousel(p.media.slides)
      : `<div style="height:200px;background:var(--accent-light);display:flex;align-items:center;justify-content:center;"><span style="font-family:var(--mono);font-size:.68rem;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);">Coming Soon</span></div>`;
    const tagsHTML = p.tags.map(t => `<span class="ppill">${t}</span>`).join('');
    const badge = p.dim ? `<span class="ptag-dim">${p.badge}</span>` : `<span class="ptag">${p.badge}</span>`;
    return `
      <div class="pcard${p.dim ? ' dim' : ''} reveal reveal-delay-${i}">
        ${mediaHTML}
        <div class="pcbody">
          ${badge}
          <div class="ptitle">${p.title}</div>
          <p class="pdesc">${p.description}</p>
          <div class="pmeta">${tagsHTML}</div>
          ${!p.dim ? '<div class="parrow">→</div>' : ''}
        </div>
      </div>
    `;
  }).join('');
  el.className = 'swf bg-page';
  el.innerHTML = `
    <div class="swf-inner">
      <div class="sh reveal"><span class="sl">02 — Portfolio</span><h2 class="st">Selected Work</h2></div>
      ${featuredHTML}
      <div class="pgrid">${gridHTML}</div>
    </div>
  `;
}

// ── SKILLS ───────────────────────────────────────────────────
export function renderSkills() {
  const el = qs('#skills');
  if (!el) return;
  const groupsHTML = SKILL_GROUPS.map((g, i) => `
    <div class="sg reveal${i > 0 ? ` reveal-delay-${Math.min(i,3)}` : ''}">
      <h3>${g.title}</h3>
      <ul class="slist">
        ${g.items.map(item => `<li>${item.name}${item.note ? `<span class="snote">${item.note}</span>` : ''}</li>`).join('')}
      </ul>
    </div>
  `).join('');
const certsHTML = CERTIFICATIONS.map(c => {
  const linksHTML = c.links.map(l =>
    `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`
  ).join(' · ');

  const subcertsHTML = c.subcerts ? `
    <div class="cert-subcerts" id="sub-${c.name.replace(/\s+/g,'-').toLowerCase()}">
      ${c.subcerts.map(s => `
        <div class="cert-sub-row">
          <span class="cert-sub-name">${s.name}</span>
          <a href="${s.href}" target="_blank" rel="noopener" class="cert-sub-link">Verify ↗</a>
        </div>
      `).join('')}
    </div>
  ` : '';

  const toggleBtn = c.subcerts ? `
  <button class="cert-toggle exp-toggle" onclick="this.closest('.cert-row').classList.toggle('open')" aria-label="Toggle subcerts">
    <span class="exp-toggle-label cert-toggle-label">Show details</span>
    <span class="exp-toggle-icon">▾</span>
  </button>
` : '';

  return `
    <div class="cert-row${c.subcerts ? ' has-sub' : ''} reveal">
      <div>
        <div class="cname">${c.name}</div>
        <div class="ciss">${c.issuer}${linksHTML ? ` · ${linksHTML}` : ''}</div>
        ${subcertsHTML}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:.5rem;flex-shrink:0;">
        <span class="cst ${c.status}">${c.status === 'done' ? 'Complete' : 'In Progress'}</span>
        ${toggleBtn}
      </div>
    </div>
  `;
}).join('');
  el.className = 'sw';
  el.innerHTML = `
    <div class="sh reveal"><span class="sl">03 — Capabilities</span><h2 class="st">Skills &amp; Tools</h2></div>
    <div class="sg-grid">${groupsHTML}</div>
    <p class="certs-section-title">Credentials</p>
    <div class="certs">${certsHTML}</div>
  `;
}

// ── CURRENTLY BUILDING ───────────────────────────────────────
export function renderBuilding() {
  const el = qs('#building');
  if (!el) return;
  const cardsHTML = CURRENTLY_BUILDING.map((item, i) => `
    <div class="bld-card reveal${i > 0 ? ` reveal-delay-${i}` : ''}">
      <div class="bst ${item.status}"><span class="pulse"></span>${item.label}</div>
      <div class="btitle">${item.title}</div>
      <p class="bdesc">${item.description}</p>
    </div>
  `).join('');
  el.className = 'swf bg-white';
  el.innerHTML = `
    <div class="swf-inner">
      <div class="sh reveal"><span class="sl">04 — Active</span><h2 class="st">Currently Building</h2></div>
      <div class="bld-grid">${cardsHTML}</div>
    </div>
  `;
}

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
      <div class="sh dark reveal"><span class="sl light">05 — Writing</span><h2 class="st light">Observations</h2></div>
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
      <div class="sh dark reveal"><span class="sl light">06 — Background</span><h2 class="st light">About</h2></div>
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
    <div class="sh reveal"><span class="sl">07 — Get in Touch</span><h2 class="st">Contact</h2></div>
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
  renderBuilding();
  renderObservations();
  renderAbout();
  renderContact();
}
