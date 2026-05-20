'use strict';

/* ================================================================
   UI — Tab switching · Plan swipe · Elevation indicator · Render
   ================================================================ */

/* ── App state ──────────────────────────────────────────────────── */
let currentPlan = 'A';
let currentTab  = 'timeline';

/* ── Tab switching ──────────────────────────────────────────────── */
function showTab(id) {
  currentTab = id;

  document.querySelectorAll('.pane').forEach(p => {
    p.classList.toggle('active', p.dataset.tab === id);
  });

  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.tab === id);
    b.setAttribute('aria-selected', b.dataset.tab === id ? 'true' : 'false');
  });
}

/* ── Plan switch ─────────────────────────────────────────────────── */
function switchPlan(plan) {
  if (plan === currentPlan) return;
  currentPlan = plan;

  // Update header pills
  document.querySelectorAll('.plan-pill').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.plan === plan);
  });

  // Slide the plan slider
  const idx = plan === 'A' ? 0 : 1;
  const slider = document.getElementById('plan-slider');
  if (slider) slider.style.transform = `translateX(-${idx * 100}%)`;

  // Update dots
  document.querySelectorAll('.plan-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === idx);
  });

  // Update elevation indicator
  updateElevIndicator(null);
}

/* ── Plan slider swipe ───────────────────────────────────────────── */
function initPlanSwipe() {
  const wrap   = document.getElementById('plan-slider-wrap');
  const slider = document.getElementById('plan-slider');
  if (!wrap || !slider) return;

  let startX = 0, dx = 0, dragging = false;
  const threshold = 40;

  const onStart = e => {
    startX   = (e.touches ? e.touches[0].clientX : e.clientX);
    dx       = 0;
    dragging = true;
    slider.style.transition = 'none';
  };

  const onMove = e => {
    if (!dragging) return;
    dx = (e.touches ? e.touches[0].clientX : e.clientX) - startX;
    const baseIdx = currentPlan === 'A' ? 0 : 1;
    const pct = baseIdx * 100 - (dx / wrap.offsetWidth) * 100;
    const clamped = Math.max(0, Math.min(100, pct));
    slider.style.transform = `translateX(-${clamped}%)`;
  };

  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    slider.style.transition = '';

    if (Math.abs(dx) > threshold) {
      if (dx < 0 && currentPlan === 'A') switchPlan('B');
      else if (dx > 0 && currentPlan === 'B') switchPlan('A');
      else switchPlan(currentPlan); // snap back
    } else {
      switchPlan(currentPlan); // snap back
    }
  };

  wrap.addEventListener('touchstart',  onStart, { passive: true });
  wrap.addEventListener('touchmove',   onMove,  { passive: true });
  wrap.addEventListener('touchend',    onEnd);
  wrap.addEventListener('mousedown',   onStart);
  wrap.addEventListener('mousemove',   onMove);
  wrap.addEventListener('mouseup',     onEnd);
  wrap.addEventListener('mouseleave',  onEnd);
}

/* ── Elevation indicator ─────────────────────────────────────────── */
const ALT_MIN   = 2305;   // 吉田口五合目
const ALT_MAX   = 3776;   // 山頂

function altToPercent(alt) {
  return Math.max(0, Math.min(100, (alt - ALT_MIN) / (ALT_MAX - ALT_MIN) * 100));
}

function updateElevIndicator(altM) {
  const fill   = document.getElementById('elev-fill');
  const marker = document.getElementById('elev-marker');

  if (altM !== null && altM !== undefined && isFinite(altM)) {
    const pct = altToPercent(altM);
    if (fill)   fill.style.height   = pct + '%';
    if (marker) marker.style.bottom = pct + '%';
  } else {
    if (fill)   fill.style.height   = '0%';
    if (marker) marker.style.bottom = '0%';
  }
}

/* ── Render timeline ─────────────────────────────────────────────── */
function renderTimeline(planKey) {
  const plan = PLANS[planKey];
  if (!plan) return;

  // Render both plan cards
  ['A', 'B'].forEach(key => {
    const p = PLANS[key];
    const container = document.getElementById(`timeline-${key}`);
    if (!container) return;
    container.innerHTML = '';

    const ul = document.createElement('ul');
    ul.className = 'timeline';
    ul.setAttribute('role', 'list');

    p.steps.forEach(step => {
      const li = document.createElement('li');
      li.className = 'tl-item' + (step.highlight ? ' highlight' : '');
      li.setAttribute('role', 'listitem');

      // Icon column
      const iconCol = document.createElement('div');
      iconCol.className = 'tl-icon-col';

      const iconWrap = document.createElement('div');
      iconWrap.className = 'tl-icon-wrap';
      iconWrap.setAttribute('aria-hidden', 'true');
      iconWrap.textContent = step.icon;
      iconCol.appendChild(iconWrap);

      // Content column
      const content = document.createElement('div');
      content.className = 'tl-content';

      const meta = document.createElement('div');
      meta.className = 'tl-meta';

      const dayEl = document.createElement('span');
      dayEl.className = 'tl-day num';
      dayEl.textContent = step.day;

      const timeEl = document.createElement('span');
      timeEl.className = 'tl-time num';
      timeEl.textContent = step.time;

      meta.appendChild(dayEl);
      meta.appendChild(timeEl);

      const locEl = document.createElement('div');
      locEl.className = 'tl-loc';
      locEl.textContent = step.loc;

      const noteEl = document.createElement('div');
      noteEl.className = 'tl-note';
      noteEl.textContent = step.note;

      content.appendChild(meta);
      content.appendChild(locEl);
      content.appendChild(noteEl);

      // Chips (alt + temp)
      if (step.alt || step.temp) {
        const chips = document.createElement('div');
        chips.className = 'tl-chips';

        if (step.alt) {
          const c = document.createElement('span');
          c.className = 'tl-chip alt num';
          c.textContent = step.alt.toLocaleString() + 'm';
          chips.appendChild(c);
        }
        if (step.temp) {
          const c = document.createElement('span');
          c.className = 'tl-chip temp num';
          c.textContent = step.temp;
          chips.appendChild(c);
        }
        content.appendChild(chips);
      }

      li.appendChild(iconCol);
      li.appendChild(content);
      ul.appendChild(li);
    });

    container.appendChild(ul);
  });
}

/* ── Render temperature section ──────────────────────────────────── */
function renderTemps() {
  const container = document.getElementById('temp-cards');
  if (!container) return;
  container.innerHTML = '';

  // Max temp for scaling bars
  const maxTemp = 16;

  TEMPS.forEach(row => {
    const card = document.createElement('div');
    card.className = 'temp-row';

    // Header
    const header = document.createElement('div');
    header.className = 'temp-row-header';

    const place = document.createElement('div');
    place.className = 'temp-place';
    place.textContent = row.label;

    const badge = document.createElement('div');
    badge.className = 'temp-alt-badge num';
    badge.textContent = row.alt.toLocaleString() + 'm';

    header.appendChild(place);
    header.appendChild(badge);

    // Bar chart
    const barWrap = document.createElement('div');
    barWrap.className = 'temp-bar-wrap';

    [
      { label: '昼', cls: 'day', val: row.day },
      { label: '夜', cls: 'night', val: row.night },
    ].forEach(({ label, cls, val }) => {
      const barRow = document.createElement('div');
      barRow.className = 'temp-bar-row';

      const lbl = document.createElement('span');
      lbl.className = 'temp-bar-label';
      lbl.textContent = label;

      const track = document.createElement('div');
      track.className = 'temp-bar-track';

      const fill = document.createElement('div');
      fill.className = `temp-bar-fill ${cls}`;
      // Width will be set after mount via rAF for animation.
      // Clamp to 0 for the bar width; negative temps show as a minimal 2% sliver.
      fill.style.width = '0%';
      const barPct = val <= 0 ? 2 : Math.max(2, val / maxTemp * 100);
      fill.dataset.target = barPct + '%';

      track.appendChild(fill);

      const valEl = document.createElement('span');
      valEl.className = 'temp-bar-val num';
      valEl.textContent = val + '℃';

      barRow.appendChild(lbl);
      barRow.appendChild(track);
      barRow.appendChild(valEl);
      barWrap.appendChild(barRow);
    });

    const feel = document.createElement('div');
    feel.className = 'temp-feel';
    feel.textContent = row.feel;

    card.appendChild(header);
    card.appendChild(barWrap);
    card.appendChild(feel);
    container.appendChild(card);
  });

  // Animate bars in
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      container.querySelectorAll('.temp-bar-fill').forEach(el => {
        el.style.transition = 'width 0.7s cubic-bezier(0.22,1,0.36,1)';
        el.style.width = el.dataset.target;
      });
    });
  });
}

/* ── Init ────────────────────────────────────────────────────────── */
function initApp() {
  // Render content
  renderTimeline('A');
  renderChecklist();
  renderTemps();

  // Initialize plan swipe
  initPlanSwipe();

  // Hide loading screen
  const loading = document.getElementById('loading');
  if (loading) {
    setTimeout(() => loading.classList.add('fade-out'), 300);
  }

  // Set initial elevation
  updateElevIndicator(null);
}

document.addEventListener('DOMContentLoaded', initApp);
