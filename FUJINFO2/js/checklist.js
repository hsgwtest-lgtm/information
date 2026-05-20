'use strict';

/* ================================================================
   CHECKLIST — State management, progress bar, localStorage
   ================================================================ */

const STORAGE_KEY = 'fujinfo2-gear-2026';

let _checked = loadCheckedState();

function loadCheckedState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch (_) {
    return new Set();
  }
}

function saveCheckedState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([..._checked]));
  } catch (_) {}
}

/* Returns true if item is checked */
function isChecked(id) {
  return _checked.has(id);
}

/* Toggle an item; returns new checked state */
function toggleItem(id) {
  if (_checked.has(id)) {
    _checked.delete(id);
  } else {
    _checked.add(id);
  }
  saveCheckedState();
  return _checked.has(id);
}

/* Reset all items */
function resetAll() {
  _checked.clear();
  saveCheckedState();
}

/* ── Render checklist ────────────────────────────────────────────── */
function renderChecklist() {
  const container = document.getElementById('gear-list');
  if (!container) return;

  container.innerHTML = '';

  GEAR.forEach(cat => {
    const catDiv = document.createElement('div');
    catDiv.className = 'gear-cat';

    const title = document.createElement('div');
    title.className = 'gear-cat-title';
    title.textContent = cat.cat;
    catDiv.appendChild(title);

    const itemsDiv = document.createElement('div');
    itemsDiv.className = 'gear-items';

    cat.items.forEach(item => {
      const row = createGearRow(item);
      itemsDiv.appendChild(row);
    });

    catDiv.appendChild(itemsDiv);
    container.appendChild(catDiv);
  });

  updateProgress();
  syncBadge();
}

function createGearRow(item) {
  const row = document.createElement('div');
  row.className = 'gear-item' + (isChecked(item.id) ? ' checked' : '');
  row.dataset.id = item.id;
  row.setAttribute('role', 'checkbox');
  row.setAttribute('aria-checked', isChecked(item.id) ? 'true' : 'false');
  row.setAttribute('tabindex', '0');

  // Checkbox visual
  const check = document.createElement('div');
  check.className = 'gear-check';
  check.setAttribute('aria-hidden', 'true');

  // Text content
  const text = document.createElement('div');
  text.className = 'gear-text';

  const nameEl = document.createElement('div');
  nameEl.className = 'gear-name';
  nameEl.textContent = item.name;

  text.appendChild(nameEl);

  if (item.note) {
    const noteEl = document.createElement('div');
    noteEl.className = 'gear-note';
    noteEl.textContent = item.note;
    text.appendChild(noteEl);
  }

  row.appendChild(check);
  row.appendChild(text);

  if (item.req) {
    const tag = document.createElement('div');
    tag.className = 'gear-req-tag';
    tag.textContent = '必須';
    row.appendChild(tag);
  }

  // Click / keyboard handler
  const handler = () => {
    const nowChecked = toggleItem(item.id);
    row.classList.toggle('checked', nowChecked);
    row.setAttribute('aria-checked', nowChecked ? 'true' : 'false');

    // Animate checked items toward the bottom
    if (nowChecked) {
      row.style.order = '1';
    } else {
      row.style.order = '';
    }

    updateProgress();
    syncBadge();
  };

  row.addEventListener('click', handler);
  row.addEventListener('keydown', e => {
    if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); handler(); }
  });

  // Restore order for already-checked items
  if (isChecked(item.id)) {
    row.style.order = '1';
  }

  return row;
}

/* ── Progress bar ───────────────────────────────────────────────── */
function updateProgress() {
  let total = 0, done = 0;
  GEAR.forEach(cat => cat.items.forEach(item => {
    total++;
    if (isChecked(item.id)) done++;
  }));

  const pct = total === 0 ? 0 : Math.round(done / total * 100);

  const fill  = document.getElementById('gear-progress-fill');
  const count = document.getElementById('gear-progress-count');

  if (fill)  fill.style.width = pct + '%';
  if (count) count.textContent = `${done} / ${total}`;
}

/* ── Nav badge ──────────────────────────────────────────────────── */
function syncBadge() {
  let done = 0;
  GEAR.forEach(cat => cat.items.forEach(item => {
    if (isChecked(item.id)) done++;
  }));

  const badge = document.getElementById('gear-nav-badge');
  if (!badge) return;

  if (done > 0) {
    badge.textContent = done;
    badge.classList.add('visible');
  } else {
    badge.textContent = '';
    badge.classList.remove('visible');
  }
}

/* ── Reset ──────────────────────────────────────────────────────── */
function resetGear() {
  resetAll();
  // Re-render to clear checked state
  renderChecklist();
}
