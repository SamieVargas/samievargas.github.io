// ============================================================
// js/main.js — All interactions & page behaviours
// Imports render.js and runs after DOM is ready (module = deferred).
// ============================================================

import { renderAll } from './render.js';
import { CONTACT }   from '../data/about.js';

// ── Boot ─────────────────────────────────────────────────────
renderAll();
initDarkMode();
initGreeting();
initScrollProgress();
initBackTop();
initScrollReveal();
initActiveNav();
initExperienceCollapse();
initCarousels();
initCommandPalette();
initCopyEmail();
initObsCarousel();
initIntCarousel();

// ── DARK MODE ────────────────────────────────────────────────
function initDarkMode() {
  const html   = document.documentElement;
  const toggle = document.getElementById('dark-toggle');
  if (!toggle) return;

  // Restore saved preference
  const saved = localStorage.getItem('theme');
  if (saved) html.setAttribute('data-theme', saved);

  toggle.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next    = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

// ── TIME-BASED GREETING ──────────────────────────────────────
function initGreeting() {
  const badge = document.getElementById('greeting-badge');
  if (!badge) return;

  const hour = new Date().getHours();
  let text, emoji;

  if (hour >= 5  && hour < 12) { text = 'Good morning, Austin';          emoji = '🌅'; }
  else if (hour >= 12 && hour < 17) { text = 'Good afternoon';           emoji = '☀️'; }
  else if (hour >= 17 && hour < 20) { text = 'Good evening';             emoji = '🌆'; }
  else if (hour >= 20 && hour < 24) { text = 'Burning the midnight oil?'; emoji = '🌙'; }
  else                              { text = 'It\'s late — insomniac or recruiter?'; emoji = '👀'; }

  badge.textContent = `${emoji}  ${text}`;
}

// ── SCROLL PROGRESS BAR ──────────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total    = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrolled / total * 100) + '%';
  }, { passive: true });
}

// ── BACK TO TOP ──────────────────────────────────────────────
function initBackTop() {
  const btn = document.getElementById('back-top');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 400);
  }, { passive: true });
}

// ── SCROLL REVEAL ────────────────────────────────────────────
function initScrollReveal() {
  const observe = () => {
    const els = document.querySelectorAll('.reveal:not(.observed)');
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    els.forEach(el => { el.classList.add('observed'); observer.observe(el); });
  };

  observe();
  // Re-run after a short delay to catch dynamically-rendered elements
  setTimeout(observe, 100);
}

// ── ACTIVE NAV ───────────────────────────────────────────────
function initActiveNav() {
  const sections  = document.querySelectorAll('section[id], header[id]');
  const navLinks  = document.querySelectorAll('.nav-links a[data-nav]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navLinks.forEach(l => l.classList.toggle('active', l.dataset.nav === e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}

// ── EXPERIENCE COLLAPSE ──────────────────────────────────────
function initExperienceCollapse() {
  // Delegate: re-runs when DOM changes; also safe to call after render
  document.addEventListener('click', e => {
    // Per-role toggle
    const toggle = e.target.closest('.exp-toggle');
    if (toggle) {
      const role    = toggle.closest('.exp-role');
      const bullets = role.querySelector('.exp-bullets');
      const isCollapsed = role.classList.contains('collapsed');

      if (isCollapsed) {
        role.classList.remove('collapsed');
        bullets.style.maxHeight = bullets.scrollHeight + 'px';
        toggle.setAttribute('aria-expanded', 'true');
        toggle.querySelector('.exp-toggle-label').textContent = 'Hide details';
      } else {
        role.classList.add('collapsed');
        bullets.style.maxHeight = '0';
        toggle.setAttribute('aria-expanded', 'false');
        toggle.querySelector('.exp-toggle-label').textContent = 'Show details';
      }
      syncToggleAllLabel();
    }

    // Expand / Collapse All
    const toggleAll = e.target.closest('#exp-toggle-all');
    if (toggleAll) {
      const roles      = document.querySelectorAll('.exp-role');
      const anyCollapsed = [...roles].some(r => r.classList.contains('collapsed'));

      roles.forEach(role => {
        const bullets = role.querySelector('.exp-bullets');
        const btn     = role.querySelector('.exp-toggle');
        if (!bullets || !btn) return;
        if (anyCollapsed) {
          role.classList.remove('collapsed');
          bullets.style.maxHeight = bullets.scrollHeight + 'px';
          btn.setAttribute('aria-expanded', 'true');
          btn.querySelector('.exp-toggle-label').textContent = 'Hide details';
        } else {
          role.classList.add('collapsed');
          bullets.style.maxHeight = '0';
          btn.setAttribute('aria-expanded', 'false');
          btn.querySelector('.exp-toggle-label').textContent = 'Show details';
        }
      });
      syncToggleAllLabel();
    }
  });
}

function syncToggleAllLabel() {
  const btn  = document.getElementById('exp-toggle-all');
  if (!btn) return;
  const anyCollapsed = [...document.querySelectorAll('.exp-role')].some(r => r.classList.contains('collapsed'));
  btn.textContent = anyCollapsed ? 'Expand All' : 'Collapse All';
}

// ── CAROUSELS ────────────────────────────────────────────────
function initCarousels() {
  // Works on both statically and dynamically created carousels
  document.querySelectorAll('[data-carousel]').forEach(initOneCarousel);

  // MutationObserver to catch carousels added by render.js
  const mo = new MutationObserver(mutations => {
    mutations.forEach(m => m.addedNodes.forEach(node => {
      if (node.nodeType !== 1) return;
      node.querySelectorAll('[data-carousel]:not([data-init])').forEach(initOneCarousel);
      if (node.matches('[data-carousel]:not([data-init])')) initOneCarousel(node);
    }));
  });
  mo.observe(document.body, { childList: true, subtree: true });
}

function initOneCarousel(c) {
  if (c.dataset.init) return;
  c.dataset.init = '1';

  const track  = c.querySelector('.c-track');
  const slides = c.querySelectorAll('.c-slide');
  const dots   = c.querySelectorAll('.c-dot');
  const prev   = c.querySelector('.c-prev');
  const next   = c.querySelector('.c-next');
  if (slides.length < 2) return;

  let cur = 0;
  function go(n) {
    cur = (n + slides.length) % slides.length;
    track.style.transform = `translateX(-${cur * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('on', i === cur));
  }
  if (prev) prev.addEventListener('click', e => { e.preventDefault(); go(cur - 1); });
  if (next) next.addEventListener('click', e => { e.preventDefault(); go(cur + 1); });
  dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
}

// ── COMMAND PALETTE ──────────────────────────────────────────
const COMMANDS = [
  // Navigate
  { group: 'Navigate', icon: '#',  label: 'Go to Experience',   action: () => scrollToSection('#experience'), kbd: '' },
  { group: 'Navigate', icon: '#',  label: 'Go to Work',         action: () => scrollToSection('#work'),       kbd: '' },
  { group: 'Navigate', icon: '#',  label: 'Go to Skills',       action: () => scrollToSection('#skills'),     kbd: '' },
  { group: 'Navigate', icon: '#',  label: 'Go to About',        action: () => scrollToSection('#about'),      kbd: '' },
  { group: 'Navigate', icon: '#',  label: 'Go to Contact',      action: () => scrollToSection('#contact'),    kbd: '' },
  // Actions
  { group: 'Actions',  icon: '◑',  label: 'Toggle Dark Mode',   action: () => document.getElementById('dark-toggle')?.click(), kbd: '⌘D' },
  { group: 'Actions',  icon: '✉',  label: 'Copy Email',         action: doCopyEmail, kbd: '' },
  { group: 'Actions',  icon: '↓',  label: 'Download Resume',    action: () => window.open('./Resume.pdf', '_blank'), kbd: '' },
  // Links
  { group: 'Links',    icon: '↗',  label: 'Open LinkedIn',      action: () => window.open('https://linkedin.com/in/samievargas12', '_blank'), kbd: '' },
  { group: 'Links',    icon: '↗',  label: 'Open GitHub',        action: () => window.open('https://github.com/SamieVargas', '_blank'), kbd: '' },
  { group: 'Links',    icon: '↗',  label: 'Open Kaggle',        action: () => window.open('https://www.kaggle.com/samievargas', '_blank'), kbd: '' },
];

function initCommandPalette() {
  const overlay  = document.getElementById('cmd-palette');
  const input    = document.getElementById('cmd-input');
  const list     = document.getElementById('cmd-list');
  const trigger  = document.getElementById('cmd-trigger');
  if (!overlay || !input || !list) return;

  let selected = 0;
  let filtered = COMMANDS;

  function open() {
    overlay.hidden = false;
    input.value = '';
    renderList(COMMANDS);
    input.focus();
    selected = 0;
  }

  function close() {
    overlay.hidden = true;
    input.value = '';
  }

  function renderList(cmds) {
    filtered = cmds;
    selected = 0;

    // Group by group label
    const groups = {};
    cmds.forEach(c => { (groups[c.group] = groups[c.group] || []).push(c); });

    list.innerHTML = Object.entries(groups).map(([grp, items]) => `
      <li class="cmd-group-label">${grp}</li>
      ${items.map((cmd, i) => `
        <li class="cmd-item${i === 0 && grp === Object.keys(groups)[0] ? ' selected' : ''}"
            data-idx="${cmds.indexOf(cmd)}">
          <span class="cmd-item-icon">${cmd.icon}</span>
          ${cmd.label}
          ${cmd.kbd ? `<kbd class="cmd-item-kbd">${cmd.kbd}</kbd>` : ''}
        </li>
      `).join('')}
    `).join('');

    highlight();
  }

  function highlight() {
    const items = list.querySelectorAll('.cmd-item');
    items.forEach((el, i) => el.classList.toggle('selected', i === selected));
    const sel = items[selected];
    if (sel) sel.scrollIntoView({ block: 'nearest' });
  }

  function execute(idx) {
    const cmd = filtered[idx];
    if (cmd) { close(); cmd.action(); }
  }

  // Keyboard nav
  document.addEventListener('keydown', e => {
    // ⌘K or Ctrl+K to open
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      overlay.hidden ? open() : close();
      return;
    }
    // ⌘D for dark mode
    if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
      e.preventDefault();
      document.getElementById('dark-toggle')?.click();
      return;
    }
    if (overlay.hidden) return;

    const items = list.querySelectorAll('.cmd-item');
    if (e.key === 'Escape')    { close(); }
    else if (e.key === 'ArrowDown')  { selected = (selected + 1) % items.length; highlight(); e.preventDefault(); }
    else if (e.key === 'ArrowUp')    { selected = (selected - 1 + items.length) % items.length; highlight(); e.preventDefault(); }
    else if (e.key === 'Enter')      { execute(selected); }
  });

  // Search filter
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const cmds = q ? COMMANDS.filter(c => c.label.toLowerCase().includes(q) || c.group.toLowerCase().includes(q)) : COMMANDS;
    renderList(cmds);
  });

  // Click items
  list.addEventListener('click', e => {
    const item = e.target.closest('.cmd-item');
    if (!item) return;
    execute(parseInt(item.dataset.idx, 10));
  });

  // Hover to select
  list.addEventListener('mousemove', e => {
    const item = e.target.closest('.cmd-item');
    if (!item) return;
    selected = parseInt(item.dataset.idx, 10);
    highlight();
  });

  // Click outside to close
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });

  // Trigger button
  if (trigger) trigger.addEventListener('click', open);
}

function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ── COPY EMAIL ───────────────────────────────────────────────
function doCopyEmail() {
  navigator.clipboard.writeText(CONTACT.email).then(() => showToast('Email copied to clipboard'));
}

function initCopyEmail() {
  document.addEventListener('click', e => {
    const btn = e.target.closest('#copy-email');
    if (!btn) return;
    e.preventDefault();
    doCopyEmail();
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}
// ── OBSERVATIONS CAROUSEL ────────────────────────────────────
function initObsCarousel() {
  const track  = document.querySelector('.obs-track');
  if (!track) return;

  const slides  = document.querySelectorAll('.obs-slide');
  const dots    = document.querySelectorAll('.obs-dot');
  const counter = document.querySelector('.obs-counter');
  const prev    = document.querySelector('.obs-prev');
  const next    = document.querySelector('.obs-next');
  let cur = 0;

  function goObs(n) {
    slides[cur].classList.remove('obs-active');
    dots[cur].classList.remove('on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('obs-active');
    dots[cur].classList.add('on');
    if (counter) counter.textContent = `${cur + 1} / ${slides.length}`;
  }

  if (counter) counter.textContent = `1 / ${slides.length}`;
  if (prev) prev.addEventListener('click', () => goObs(cur - 1));
  if (next) next.addEventListener('click', () => goObs(cur + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goObs(i)));
}

// ── INTERESTS CAROUSEL ───────────────────────────────────────
function initIntCarousel() {
  const track = document.querySelector('.int-track');
  if (!track) return;

  const slides = document.querySelectorAll('.interest-slide');
  const dots   = document.querySelectorAll('.int-dot');
  const prev   = document.querySelector('.int-prev');
  const next   = document.querySelector('.int-next');
  let cur = 0;

  function goInt(n) {
    slides[cur].classList.remove('int-active');
    dots[cur].classList.remove('on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('int-active');
    dots[cur].classList.add('on');
  }

  if (prev) prev.addEventListener('click', () => goInt(cur - 1));
  if (next) next.addEventListener('click', () => goInt(cur + 1));
  dots.forEach((d, i) => d.addEventListener('click', () => goInt(i)));
}
