// Cafe Docs: content registry + search, filter and mindmap.
// To add a doc: append an entry to DOCS. Categories and topics are derived from it.

const DOCS = [
  {
    title: 'Skip List',
    path: 'content/skiplist/skiplist.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    level: 'Intermediate',
    tags: ['probabilistic', 'linked list', 'search', 'insert', 'delete', 'balanced'],
    summary: 'A sorted linked list with express lanes on top. Random coin flips decide who gets promoted, and search takes expected O(log n) steps.',
    related: ['Sparse Table'],
  },
  {
    title: 'Sparse Table',
    path: 'content/sparse-table/sparse-table.html',
    category: 'Data structures',
    topic: 'Range queries',
    level: 'Intermediate',
    tags: ['rmq', 'min', 'static', 'precompute', 'idempotent', 'O(1) query'],
    summary: 'Precompute the answer for every block whose length is a power of two. Any range minimum is then two lookups.',
    related: ['Skip List'],
  },
];

// ---------- helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const NS = 'http://www.w3.org/2000/svg';
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const state = { q: '', cat: 'All', tag: '', level: 'All', sort: 'title' };

function haystack(d) {
  return norm([d.title, d.summary, d.category, d.topic, d.level, ...d.tags].join(' '));
}
function matches(d) {
  if (state.cat !== 'All' && d.category !== state.cat) return false;
  if (state.level !== 'All' && d.level !== state.level) return false;
  if (state.tag && !d.tags.includes(state.tag)) return false;
  const terms = norm(state.q).split(/\s+/).filter(Boolean);
  const h = haystack(d);
  return terms.every(t => h.includes(t));
}
function visibleDocs() {
  const list = DOCS.filter(matches);
  const by = { title: (a, b) => a.title.localeCompare(b.title), category: (a, b) => a.category.localeCompare(b.category) || a.title.localeCompare(b.title) };
  return list.sort(by[state.sort]);
}
function highlight(text) {
  const terms = norm(state.q).split(/\s+/).filter(Boolean);
  let out = esc(text);
  if (!terms.length) return out;
  const n = norm(text);
  // ranges are computed on the normalized text; lengths match for these inputs
  const marks = [];
  terms.forEach(t => { let i = n.indexOf(t); while (i >= 0) { marks.push([i, i + t.length]); i = n.indexOf(t, i + t.length); } });
  if (!marks.length || n.length !== text.length) return out;
  marks.sort((a, b) => a[0] - b[0]);
  const merged = [];
  marks.forEach(m => { const l = merged[merged.length - 1]; if (l && m[0] <= l[1]) l[1] = Math.max(l[1], m[1]); else merged.push(m.slice()); });
  let res = '', p = 0;
  merged.forEach(([a, b]) => { res += esc(text.slice(p, a)) + '<mark>' + esc(text.slice(a, b)) + '</mark>'; p = b; });
  return res + esc(text.slice(p));
}

// ---------- URL state ----------
function readHash() {
  const p = new URLSearchParams(location.hash.slice(1));
  state.q = p.get('q') || '';
  state.cat = p.get('cat') || 'All';
  state.tag = p.get('tag') || '';
  state.level = p.get('level') || 'All';
  state.sort = p.get('sort') || 'title';
}
function writeHash() {
  const p = new URLSearchParams();
  if (state.q) p.set('q', state.q);
  if (state.cat !== 'All') p.set('cat', state.cat);
  if (state.tag) p.set('tag', state.tag);
  if (state.level !== 'All') p.set('level', state.level);
  if (state.sort !== 'title') p.set('sort', state.sort);
  const h = p.toString();
  history.replaceState(null, '', h ? '#' + h : location.pathname + location.search);
}

// ---------- controls ----------
function renderControls() {
  const cats = ['All', ...new Set(DOCS.map(d => d.category))];
  $('#cats').innerHTML = cats.map(c => {
    const n = c === 'All' ? DOCS.length : DOCS.filter(d => d.category === c).length;
    return `<button type="button" class="chip" data-cat="${esc(c)}" aria-pressed="${state.cat === c}">${esc(c)} <span class="n">${n}</span></button>`;
  }).join('');

  const levels = ['All', ...new Set(DOCS.map(d => d.level))];
  $('#level').innerHTML = levels.map(l => `<option ${state.level === l ? 'selected' : ''}>${esc(l)}</option>`).join('');
  $('#sort').value = state.sort;

  const tagCount = {};
  DOCS.forEach(d => d.tags.forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  $('#tags').innerHTML = Object.keys(tagCount).sort().map(t =>
    `<button type="button" class="tag" data-tag="${esc(t)}" aria-pressed="${state.tag === t}">#${esc(t)}</button>`).join('');
}

// ---------- list ----------
function renderList() {
  const docs = visibleDocs();
  $('#count').textContent = `${docs.length} of ${DOCS.length} docs`;
  $('#empty').hidden = docs.length > 0;
  $('#list').innerHTML = docs.map(d => `
    <li class="doc">
      <a class="doc-link" href="${esc(d.path)}">
        <div class="eyebrow">${highlight(d.category)} · ${highlight(d.topic)}</div>
        <h3>${highlight(d.title)}</h3>
        <p>${highlight(d.summary)}</p>
      </a>
      <div class="meta">
        <span class="lvl">${esc(d.level)}</span>
        ${d.tags.map(t => `<button type="button" class="tag sm" data-tag="${esc(t)}" aria-pressed="${state.tag === t}">#${esc(t)}</button>`).join('')}
      </div>
      ${d.related && d.related.length ? `<div class="rel">Related: ${d.related.map(r => {
        const x = DOCS.find(z => z.title === r);
        return x ? `<a href="${esc(x.path)}">${esc(r)}</a>` : esc(r);
      }).join(', ')}</div>` : ''}
    </li>`).join('');
}

// ---------- contents (grouped index) ----------
function renderToc() {
  const docs = visibleDocs();
  const tree = {};
  docs.forEach(d => { ((tree[d.category] ||= {})[d.topic] ||= []).push(d); });
  $('#toc').innerHTML = Object.keys(tree).sort().map(c =>
    `<li><b>${esc(c)}</b><ul>${Object.keys(tree[c]).sort().map(t =>
      `<li><span class="topic">${esc(t)}</span><ul>${tree[c][t].map(d =>
        `<li><a href="${esc(d.path)}">${esc(d.title)}</a></li>`).join('')}</ul></li>`).join('')}</ul></li>`).join('')
    || '<li class="na">Nothing to list</li>';
}

// ---------- mindmap ----------
function buildTree() {
  const root = { label: 'Cafe Docs', kind: 'root', children: [] };
  const cats = [...new Set(DOCS.map(d => d.category))].sort();
  cats.forEach(c => {
    const cn = { label: c, kind: 'cat', cat: c, children: [] };
    [...new Set(DOCS.filter(d => d.category === c).map(d => d.topic))].sort().forEach(t => {
      const tn = { label: t, kind: 'topic', cat: c, children: [] };
      DOCS.filter(d => d.category === c && d.topic === t).sort((a, b) => a.title.localeCompare(b.title))
        .forEach(d => tn.children.push({ label: d.title, kind: 'doc', doc: d, cat: c, children: [] }));
      cn.children.push(tn);
    });
    root.children.push(cn);
  });
  return root;
}

function renderMap() {
  const svg = $('#map');
  const root = buildTree();
  const COLX = [24, 168, 336, 528], W = 700, ROW = 38, NH = 28;
  const widths = { root: 108, cat: 140, topic: 160, doc: 160 };
  let row = 0;
  (function place(n, depth) {
    n.depth = depth;
    n.x = COLX[depth];
    if (!n.children.length) { n.y = row++ * ROW + 30; return; }
    n.children.forEach(c => place(c, depth + 1));
    n.y = (n.children[0].y + n.children[n.children.length - 1].y) / 2;
  })(root, 0);
  const H = Math.max(row * ROW + 40, 120);
  svg.setAttribute('viewBox', `0 0 ${W} ${H}`);

  const live = new Set(visibleDocs().map(d => d.title));
  const alive = n => n.kind === 'doc' ? live.has(n.label) : n.children.some(alive);

  let edges = '', nodes = '';
  (function walk(n) {
    n.children.forEach(c => {
      const x1 = n.x + widths[n.kind], y1 = n.y, x2 = c.x, y2 = c.y, mx = (x1 + x2) / 2;
      edges += `<path d="M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}" class="edge${alive(c) ? '' : ' off'}"/>`;
      walk(c);
    });
    const on = n.kind === 'root' || alive(n);
    const w = widths[n.kind];
    const body = `<rect x="${n.x}" y="${n.y - NH / 2}" width="${w}" height="${NH}" rx="6" class="nd ${n.kind}"/>` +
      `<text x="${n.x + w / 2}" y="${n.y + 4}" text-anchor="middle" class="nt ${n.kind}">${esc(n.label)}</text>`;
    if (n.kind === 'doc') nodes += `<a href="${esc(n.doc.path)}" class="g${on ? '' : ' off'}"><title>${esc(n.doc.summary)}</title>${body}</a>`;
    else if (n.kind === 'cat') nodes += `<g class="g${on ? '' : ' off'}" data-cat="${esc(n.cat)}" tabindex="0" role="button" aria-label="Filter by ${esc(n.label)}">${body}</g>`;
    else nodes += `<g class="g${on ? '' : ' off'}">${body}</g>`;
  })(root);
  svg.innerHTML = edges + nodes;
}

// ---------- orchestration ----------
function render(full) {
  writeHash();
  if (full) renderControls();
  else {
    document.querySelectorAll('[data-cat].chip').forEach(b => b.setAttribute('aria-pressed', b.dataset.cat === state.cat));
    document.querySelectorAll('[data-tag]').forEach(b => b.setAttribute('aria-pressed', b.dataset.tag === state.tag));
  }
  $('#clear').hidden = !(state.q || state.tag || state.cat !== 'All' || state.level !== 'All');
  renderList();
  renderToc();
  renderMap();
}

function setView(v) {
  document.querySelectorAll('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === v));
  $('#viewList').hidden = v !== 'list';
  $('#viewMap').hidden = v !== 'map';
  $('#viewToc').hidden = v !== 'toc';
  sessionStorage.setItem('view', v);
}

function init() {
  readHash();
  $('#q').value = state.q;
  render(true);
  setView(sessionStorage.getItem('view') || 'list');

  $('#q').addEventListener('input', e => { state.q = e.target.value; render(false); });
  $('#level').addEventListener('change', e => { state.level = e.target.value; render(false); });
  $('#sort').addEventListener('change', e => { state.sort = e.target.value; render(false); });
  $('#clear').addEventListener('click', () => {
    Object.assign(state, { q: '', cat: 'All', tag: '', level: 'All' });
    $('#q').value = ''; $('#level').value = 'All'; render(false);
  });
  document.addEventListener('click', e => {
    const c = e.target.closest('[data-cat]'), t = e.target.closest('button[data-tag]'), v = e.target.closest('[data-view]');
    if (v) return setView(v.dataset.view);
    if (c) { state.cat = state.cat === c.dataset.cat && c.tagName !== 'BUTTON' ? 'All' : c.dataset.cat; render(false); }
    if (t) { state.tag = state.tag === t.dataset.tag ? '' : t.dataset.tag; render(false); }
  });
  document.addEventListener('keydown', e => {
    const c = e.target.closest && e.target.closest('g[data-cat]');
    if (c && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); c.dispatchEvent(new MouseEvent('click', { bubbles: true })); }
    if (e.key === '/' && document.activeElement !== $('#q')) { e.preventDefault(); $('#q').focus(); }
    if (e.key === 'Escape' && document.activeElement === $('#q')) { $('#q').value = ''; state.q = ''; render(false); }
  });
  window.addEventListener('hashchange', () => { readHash(); $('#q').value = state.q; render(true); });
}

document.addEventListener('DOMContentLoaded', init);
