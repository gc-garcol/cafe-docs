// Cafe Docs: content registry + search, filter and mindmap.
// To add a doc: append an entry to DOCS. Categories and topics are derived from it.

const DOCS = [
  {
    title: 'Skip List',
    path: 'content/datastructure-algorithm/skiplist/skiplist.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    level: 'Intermediate',
    tags: ['probabilistic', 'linked list', 'search', 'insert', 'delete', 'balanced'],
    summary: 'A sorted linked list with express lanes on top. Random coin flips decide who gets promoted, and search takes expected O(log n) steps.',
    related: ['Sparse Table', 'Segment Tree'],
  },
  {
    title: 'Sparse Table',
    path: 'content/datastructure-algorithm/sparse-table/sparse-table.html',
    category: 'Data structures',
    topic: 'Range queries',
    level: 'Intermediate',
    tags: ['rmq', 'min', 'static', 'precompute', 'idempotent', 'O(1) query'],
    summary: 'Precompute the answer for every block whose length is a power of two. Any range minimum is then two lookups.',
    related: ['Segment Tree', 'Skip List'],
  },
  {
    title: 'Merkle Tree',
    path: 'content/datastructure-algorithm/merkle-tree/merkle-tree.html',
    category: 'Data structures',
    topic: 'Hash trees',
    level: 'Intermediate',
    tags: ['hash', 'proof', 'blockchain', 'integrity', 'verification', 'O(log n) proof'],
    summary: 'Hash items, then hash the hashes in pairs up to a single root. Any item can be proved with only log n sibling hashes.',
    related: ['Skip List'],
  },
  {
    title: 'Timer Wheel',
    path: 'content/datastructure-algorithm/timer-wheel/timer-wheel.html',
    category: 'Data structures',
    topic: 'Scheduling',
    level: 'Intermediate',
    tags: ['timer', 'timeout', 'scheduler', 'hashed wheel', 'hierarchical', 'O(1) insert'],
    summary: 'A clock face for timeouts. Each timer drops into the slot where it will expire, one hand sweeps around, and add or cancel costs O(1).',
    related: ['Skip List'],
  },
  {
    title: 'Heap',
    path: 'content/datastructure-algorithm/heap/heap.html',
    category: 'Data structures',
    topic: 'Priority queues',
    level: 'Beginner',
    tags: ['priority queue', 'binary tree', 'array', 'sift up', 'sift down', 'heapsort', 'O(log n)'],
    summary: 'A complete binary tree stored in an array where every parent is no larger than its children. The minimum is on top, and push and pop cost O(log n).',
    related: ['Skip List', 'A* Search'],
  },
  {
    title: 'Count-Min Sketch',
    path: 'content/datastructure-algorithm/count-min-sketch/count-min-sketch.html',
    category: 'Data structures',
    topic: 'Probabilistic',
    level: 'Intermediate',
    tags: ['probabilistic', 'frequency', 'streaming', 'hash', 'heavy hitters', 'approximate', 'O(1) update'],
    summary: 'A fixed-size grid of counters that estimates item frequencies in a stream. It may over-count but never under-counts, and the minimum counter is the answer.',
    related: ['Heap', 'Merkle Tree'],
  },
  {
    title: 'Segment Tree',
    path: 'content/datastructure-algorithm/segment-tree/segment-tree.html',
    category: 'Data structures',
    topic: 'Range queries',
    level: 'Intermediate',
    tags: ['range sum', 'point update', 'divide and conquer', 'O(log n)', 'associative'],
    summary: 'A binary tree where every node stores the answer for one segment. Range queries and point updates both take O(log n).',
    related: ['Sparse Table', 'Skip List'],
  },
  {
    title: 'Bloom Filter',
    path: 'content/datastructure-algorithm/bloom-filter/bloom-filter.html',
    category: 'Data structures',
    topic: 'Probabilistic sets',
    level: 'Intermediate',
    tags: ['probabilistic', 'hash', 'membership', 'false positive', 'bit array', 'O(k)'],
    summary: 'A bit array and a few hashes answer "seen it before?" in tiny memory. It never misses an added item, but it can say yes to one you never added.',
    related: ['HyperLogLog', 'Merkle Tree'],
  },
  {
    title: 'HyperLogLog',
    path: 'content/datastructure-algorithm/hyperloglog/hyperloglog.html',
    category: 'Data structures',
    topic: 'Probabilistic sets',
    level: 'Advanced',
    tags: ['probabilistic', 'hash', 'cardinality', 'distinct count', 'sketch', 'O(1) add'],
    summary: 'Count distinct items within a few percent using kilobytes. Each bucket remembers only its rarest hash pattern, and a harmonic mean turns that into a count.',
    related: ['Bloom Filter'],
  },
  {
    title: 'Roaring Bitmap',
    path: 'content/datastructure-algorithm/roaring-bitmap/roaring-bitmap.html',
    category: 'Data structures',
    topic: 'Bitmaps',
    level: 'Intermediate',
    tags: ['bitmap', 'compression', 'integer set', 'index', 'simd', 'union', 'intersection'],
    summary: 'A compressed set of 32-bit integers. Split values into chunks and store each one as an array, a bitmap, or runs, whichever is smallest.',
    related: ['Sparse Table', 'Skip List'],
  },
  {
    title: 'LSM Tree',
    path: 'content/datastructure-algorithm/lsm-tree/lsm-tree.html',
    category: 'Data structures',
    topic: 'Storage engines',
    level: 'Advanced',
    tags: ['memtable', 'sstable', 'compaction', 'tombstone', 'write-optimized', 'database', 'O(1) write'],
    summary: 'Buffer writes in memory, flush them as sorted immutable files, and merge in the background. Writes are sequential and fast, and reads check newest data first.',
    related: ['Skip List', 'Bloom Filter'],
  },
  {
    title: 'Quad Tree',
    path: 'content/datastructure-algorithm/quad-tree/quad-tree.html',
    category: 'Data structures',
    topic: 'Spatial indexes',
    level: 'Intermediate',
    tags: ['spatial', 'geometry', 'range query', 'nearest neighbor', 'collision', '2d', 'recursion'],
    summary: 'Split a square into four quarters whenever it gets crowded. Range queries skip every cell that misses the search box.',
    related: ['Segment Tree', 'Skip List'],
  },
  {
    title: 'Octree',
    path: 'content/datastructure-algorithm/oct-tree/oct-tree.html',
    category: 'Data structures',
    topic: 'Spatial indexes',
    level: 'Intermediate',
    tags: ['spatial', 'geometry', 'range query', 'nearest neighbor', 'collision', '3d', 'recursion'],
    summary: 'Split a cube into eight octants whenever it gets crowded. Range queries skip every cell that misses the search box.',
    related: ['Quad Tree', 'Segment Tree'],
  },
  {
    title: 'AVL Tree',
    path: 'content/datastructure-algorithm/avl-tree/avl-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    level: 'Intermediate',
    tags: ['balanced', 'binary search tree', 'rotation', 'self-balancing', 'search', 'insert', 'delete', 'O(log n)'],
    summary: 'A binary search tree that keeps every subtree within one level of its sibling. Rotations after each insert or delete hold the height near log n.',
    related: ['Red-Black Tree', 'Skip List', 'Heap'],
  },
  {
    title: 'Red-Black Tree',
    path: 'content/datastructure-algorithm/red-black-tree/red-black-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    level: 'Advanced',
    tags: ['balanced', 'binary search tree', 'rotation', 'self-balancing', 'recoloring', 'insert', 'O(log n)'],
    summary: 'A search tree that colors nodes red or black. A few color rules cap the longest path at twice the shortest, with very few rotations per update.',
    related: ['AVL Tree', 'Skip List'],
  },
  {
    title: 'B-Tree',
    path: 'content/datastructure-algorithm/b-tree/b-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    level: 'Intermediate',
    tags: ['balanced', 'search tree', 'disk', 'database', 'index', 'split', 'file system', 'O(log n)'],
    summary: 'A search tree with wide nodes that hold many sorted keys. It stays very short, so a lookup reads only a handful of disk pages.',
    related: ['B+ Tree', 'AVL Tree', 'LSM Tree'],
  },
  {
    title: 'B+ Tree',
    path: 'content/datastructure-algorithm/b-plus-tree/b-plus-tree.html',
    category: 'Data structures',
    topic: 'Ordered sets',
    level: 'Intermediate',
    tags: ['balanced', 'search tree', 'range scan', 'database', 'index', 'linked leaves', 'file system', 'O(log n)'],
    summary: 'A B-Tree that keeps every key in linked leaves and uses upper levels only for routing. Lookups stay shallow, and range scans walk the leaf chain.',
    related: ['B-Tree', 'LSM Tree', 'Skip List'],
  },
  {
    title: 'Genetic Algorithm',
    path: 'content/datastructure-algorithm/genetic-algorithm/genetic-algorithm.html',
    category: 'Algorithms',
    topic: 'Optimization',
    level: 'Beginner',
    tags: ['evolution', 'heuristic', 'crossover', 'mutation', 'selection', 'probabilistic'],
    summary: 'Search by evolution: select the fittest candidates, cross them over, mutate a little, and repeat until a good answer appears.',
    related: [],
  },
  {
    title: 'Minimax',
    path: 'content/datastructure-algorithm/minimax/minimax.html',
    category: 'Algorithms',
    topic: 'Game search',
    level: 'Intermediate',
    tags: ['game tree', 'adversarial search', 'alpha-beta', 'pruning', 'zero-sum', 'recursion'],
    summary: 'Pick the move whose worst case is best. Assume the opponent plays perfectly, search the game tree, and prune branches that cannot matter.',
    related: ['Genetic Algorithm'],
  },
  {
    title: 'A* Search',
    path: 'content/datastructure-algorithm/a-star/a-star.html',
    category: 'Algorithms',
    topic: 'Pathfinding',
    level: 'Intermediate',
    tags: ['shortest path', 'heuristic', 'graph', 'grid', 'priority queue', 'admissible', 'dijkstra'],
    summary: 'Find the shortest path by expanding the node with the lowest cost so far plus a guess of the cost left. A good heuristic skips most of the map.',
    related: ['Heap'],
  },
  {
    title: 'Raft',
    path: 'content/datastructure-algorithm/raft/raft.html',
    category: 'Algorithms',
    topic: 'Distributed systems',
    level: 'Advanced',
    tags: ['consensus', 'leader election', 'replication', 'replicated log', 'fault tolerance', 'quorum', 'etcd'],
    summary: 'Servers elect one leader, and the leader replicates an ordered log. An entry is committed once a majority stores it, so the cluster survives crashes.',
    related: ['Merkle Tree', 'LSM Tree'],
  },
  {
    title: 'Quicksort',
    path: 'content/datastructure-algorithm/quicksort/quicksort.html',
    category: 'Algorithms',
    topic: 'Sorting',
    level: 'Beginner',
    tags: ['sorting', 'divide and conquer', 'partition', 'pivot', 'in place', 'O(n log n)'],
    summary: 'Pick a pivot, push smaller items left and larger items right, then sort each side. The pivot lands in its final place after every pass.',
    related: ['Merge Sort', 'Heap'],
  },
  {
    title: 'Merge Sort',
    path: 'content/datastructure-algorithm/merge-sort/merge-sort.html',
    category: 'Algorithms',
    topic: 'Sorting',
    level: 'Beginner',
    tags: ['sorting', 'divide and conquer', 'merge', 'stable', 'O(n log n)', 'external sort'],
    summary: 'Split the array in half, sort each half, then merge the two sorted halves. It is stable and always runs in O(n log n).',
    related: ['Quicksort', 'Heap'],
  },
  {
    title: 'Trie',
    path: 'content/datastructure-algorithm/trie/trie.html',
    category: 'Data structures',
    topic: 'Strings',
    level: 'Beginner',
    tags: ['prefix tree', 'autocomplete', 'string', 'search', 'insert', 'O(L)'],
    summary: 'A tree where each edge is one character and each path spells a prefix. Words that share a start share nodes, and lookup costs O(L) for a word of length L.',
    related: ['Bloom Filter'],
  },
  {
    title: 'Limits',
    path: 'content/math/limits/limits.html',
    category: 'Mathematics',
    topic: 'Calculus',
    level: 'Beginner',
    tags: ['limit', 'continuity', 'epsilon-delta', 'one-sided', 'calculus'],
    summary: 'What value does a function head toward as x approaches a point? Slide x toward a and watch f(x) settle, or fail to agree between sides.',
    related: ['Derivatives', 'Integrals'],
  },
  {
    title: 'Derivatives',
    path: 'content/math/derivatives/derivatives.html',
    category: 'Mathematics',
    topic: 'Calculus',
    level: 'Beginner',
    tags: ['derivative', 'slope', 'tangent', 'secant', 'chain rule', 'calculus'],
    summary: 'The slope of a curve at one point. Shrink the gap h and a secant line turns into the tangent, giving the instant rate of change.',
    related: ['Limits', 'Integrals'],
  },
  {
    title: 'Integrals',
    path: 'content/math/integrals/integrals.html',
    category: 'Mathematics',
    topic: 'Calculus',
    level: 'Beginner',
    tags: ['integral', 'area', 'riemann sum', 'antiderivative', 'calculus'],
    summary: 'Add up infinitely many thin slices. Riemann sums close in on the area under a curve, and the Fundamental Theorem gives the shortcut.',
    related: ['Limits', 'Derivatives'],
  },
  {
    title: 'Fourier Transform',
    path: 'content/math/fourier-transform/fourier-transform.html',
    category: 'Mathematics',
    topic: 'Signals',
    level: 'Intermediate',
    tags: ['fourier', 'frequency', 'signal', 'fft', 'dft', 'sine waves', 'spectrum'],
    summary: 'Any signal is a stack of simple waves. Chain turning circles tip to tail, watch them draw a waveform, and read off which frequencies it contains.',
    related: ['Integrals', 'Merge Sort'],
  },
  {
    title: 'Laplace Transform',
    path: 'content/math/laplace-transform/laplace-transform.html',
    category: 'Mathematics',
    topic: 'Signals',
    level: 'Intermediate',
    tags: ['laplace', 'transform', 's-domain', 'differential equation', 'transfer function', 'integral'],
    summary: 'Weight a signal by a fading exponential and measure the area. The result turns derivatives into multiplication and differential equations into algebra.',
    related: ['Fourier Transform', 'Integrals', 'Derivatives'],
  },
];

// ---------- helpers ----------
const $ = (s, r = document) => r.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const NS = 'http://www.w3.org/2000/svg';
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

const state = { tagq: '', q: '', cat: 'All', tag: '', level: 'All', sort: 'title' };

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

  renderTags();
}

function renderTags() {
  const tagCount = {};
  DOCS.forEach(d => d.tags.forEach(t => { tagCount[t] = (tagCount[t] || 0) + 1; }));
  const all = Object.keys(tagCount).sort((a, b) => tagCount[b] - tagCount[a] || a.localeCompare(b));
  const q = norm(state.tagq.trim());
  const shown = all.filter(t => !q || norm(t).includes(q));
  $('#tagTotal').textContent = q ? `${shown.length}/${all.length}` : `(${all.length})`;
  $('#clearTag').hidden = !state.tag;
  $('#tags').innerHTML = shown.map(t =>
    `<button type="button" class="tag" data-tag="${esc(t)}" aria-pressed="${state.tag === t}">#${esc(t)}<span class="n">${tagCount[t]}</span></button>`).join('')
    || '<span class="tag-none">No tag matches.</span>';
}

// ---------- list ----------
const CARD_TAGS = 3;
function cardTags(d) {
  // show the first few tags (plus the active one) so cards stay compact however many tags exist
  const keep = d.tags.filter((t, i) => i < CARD_TAGS || t === state.tag);
  const rest = d.tags.length - keep.length;
  return keep.map(t => `<button type="button" class="tag sm" data-tag="${esc(t)}" aria-pressed="${state.tag === t}">#${esc(t)}</button>`).join('')
    + (rest > 0 ? `<span class="tag sm more" title="${esc(d.tags.filter(t => !keep.includes(t)).join(', '))}">+${rest}</span>` : '');
}
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
        ${cardTags(d)}
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
    renderTags();
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
  $('#tagq').addEventListener('input', e => { state.tagq = e.target.value; renderTags(); });
  $('#clearTag').addEventListener('click', () => { state.tag = ''; render(false); });
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
