/* Question bank core: chapters, Q() registrar and small authoring helpers.
   Every data file calls Q({...}). The UI groups questions by `ch`. */

window.CHAPTERS = [
  { id: 'intro',   n: 1,  title: 'Introduction',              proc: 'ALGORITHM(input)',        blurb: 'What an algorithm is, problem types, design & analysis process.' },
  { id: 'anA',     n: 2,  title: 'Analysis I · Counting Steps', proc: 'COUNT-STEPS(A, n)',     blurb: 'Primitive operations, loop analysis, best / worst / average case.' },
  { id: 'anB',     n: 3,  title: 'Analysis II · Asymptotics',  proc: 'GROWTH(f, g)',           blurb: 'Big-O, Ω, Θ, little-o / ω, ordering functions by growth rate.' },
  { id: 'dc',      n: 4,  title: 'Divide & Conquer',          proc: 'SOLVE(T, n)',             blurb: 'Recurrences: iteration, recursion tree, substitution, master method.' },
  { id: 'sort1',   n: 5,  title: 'Insertion & Merge Sort',    proc: 'MERGE-SORT(A, p, r)',     blurb: 'Incremental vs divide & conquer sorting, stability, in-place.' },
  { id: 'heap',    n: 6,  title: 'Heaps & Heapsort',          proc: 'MAX-HEAPIFY(A, i)',       blurb: 'Binary heaps, BUILD-MAX-HEAP, heapsort, priority queues.' },
  { id: 'linsort', n: 7,  title: 'Linear-Time Sorting',       proc: 'COUNTING-SORT(A, B, k)',  blurb: 'Comparison lower bound, counting, radix and bucket sort.' },
  { id: 'greedy',  n: 8,  title: 'Greedy Algorithms',         proc: 'GREEDY-CHOICE(S)',        blurb: 'Activity selection, fractional knapsack, Huffman codes.' },
  { id: 'dp',      n: 9,  title: 'Dynamic Programming',       proc: 'LCS-LENGTH(X, Y)',        blurb: 'Optimal substructure, overlapping subproblems, 0/1 knapsack, LCS.' },
  { id: 'g1',      n: 10, title: 'Graphs · BFS & DFS',        proc: 'BFS(G, s)',               blurb: 'Representations, breadth-first & depth-first search, edge types.' },
  { id: 'g2',      n: 11, title: 'Graphs · Spanning Trees',   proc: 'MST-PRIM(G, w, r)',       blurb: 'Greedy graph algorithms: Prim and Kruskal minimum spanning trees.' },
  { id: 'g3',      n: 12, title: 'Graphs · Shortest Paths',   proc: 'DIJKSTRA(G, w, s)',       blurb: 'Relaxation, Dijkstra, Bellman-Ford, negative cycles.' },
  { id: 'np',      n: 13, title: 'NP-Completeness',           proc: 'VERIFY(x, y)',            blurb: 'P, NP, NP-complete, NP-hard, reductions, approximation.' },
  { id: 'lp',      n: 14, title: 'Linear Programming',        proc: 'SIMPLEX(A, b, c)',        blurb: 'Formulation, standard & slack form, graphical method, simplex.' },
  { id: 'extra',   n: 15, title: 'Beyond the Slides',         proc: 'MISC()',                  blurb: 'Exam questions on topics outside the 14 decks (trees, hashing, AVL…).' }
];

window.QB = [];
window.Q = function (o) {
  if (typeof o.src === 'string') o.src = [o.src];
  window.QB.push(o);
};
/* Register an extra exam source for a question that repeats across exams.
   Resolved after every data file has loaded, so file order does not matter. */
window.QB_ALIASES = [];
window.also = function (id, src) { window.QB_ALIASES.push([id, src]); };
window.resolveAliases = function () {
  for (const [id, src] of window.QB_ALIASES) {
    const q = window.QB.find(x => x.id === id);
    if (q) { if (!q.src.includes(src)) q.src.push(src); }
    else console.warn('also(): unknown id', id);
  }
};

/* tbl([[head...],[row...],...], {hl: [[r,c],...], cls}) -> HTML table string.
   First row is the header. Cells may contain HTML. */
window.tbl = function (rows, opt = {}) {
  const hl = new Set((opt.hl || []).map(([r, c]) => r + ',' + c));
  const rh = opt.rowHead !== false;
  let h = `<table class="t ${opt.cls || ''}">`;
  rows.forEach((row, r) => {
    h += '<tr>';
    row.forEach((cell, c) => {
      const tag = r === 0 && opt.head !== false ? 'th' : (c === 0 && rh && opt.head !== false ? 'th' : 'td');
      const k = hl.has(r + ',' + c) ? ' class="hl"' : '';
      h += `<${tag}${k}>${cell}</${tag}>`;
    });
    h += '</tr>';
  });
  return h + '</table>';
};

/* G({n:{a:[x,y]...}, e:'a-b:1 c>d:4', w:100, h:60, hl:'a-b', lab:{a:'0'}})
   Graph figure spec rendered to SVG by the UI.
   '-' undirected edge, '>' directed edge, ':w' optional weight. */
window.G = function (spec) { return Object.assign({ type: 'graph' }, spec); };

/* Array / tree figure helpers (rendered by UI). */
window.ARR = function (vals, opt = {}) { return Object.assign({ type: 'array', vals }, opt); };
window.TREE = function (arr, opt = {}) { return Object.assign({ type: 'heap', vals: arr }, opt); };
window.IMG = function (src, opt = {}) { return Object.assign({ type: 'img', src }, opt); };

/* Pseudocode block: pass lines; leading spaces preserved. */
window.code = function (s) {
  const esc = s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<pre class="code">${esc.replace(/^\n/, '')}</pre>`;
};
