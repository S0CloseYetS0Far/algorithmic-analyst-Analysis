(function () {
'use strict';

const CH = window.CHAPTERS;
const QB = window.QB;
if (window.resolveAliases) window.resolveAliases();
const chById = Object.fromEntries(CH.map(c => [c.id, c]));
const $app = document.getElementById('app');
const reduced = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ------------------------------------------------------------------ storage */
const KEY = 'algoExamBank.v1';
let store = { p: {}, notes: {}, last: {}, theme: '' };
try { const raw = localStorage.getItem(KEY); if (raw) store = Object.assign(store, JSON.parse(raw)); } catch (e) { /* storage blocked */ }
function save() { try { localStorage.setItem(KEY, JSON.stringify(store)); } catch (e) { /* ignore */ } }
const st = id => store.p[id] || '';
function mark(id, v) {
  if (v === 's' && store.p[id]) return; // revealing never downgrades a graded answer
  store.p[id] = v; save();
}
function cellCls(q) {
  if (q.unsolved) return (store.notes[q.id] || '').trim() ? 'g' : 'ns';
  const s = st(q.id);
  return s === 'r' ? 'b' : s ? 'g' : '';
}

/* ------------------------------------------------------------------ theme */
function applyTheme() {
  if (store.theme) document.documentElement.setAttribute('data-theme', store.theme);
  else document.documentElement.removeAttribute('data-theme');
}
applyTheme();
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') ||
    (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  store.theme = cur === 'dark' ? 'light' : 'dark';
  save(); applyTheme();
}

/* ------------------------------------------------------------------ helpers */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const pad2 = n => String(n).padStart(2, '0');
const TYPE_NAME = { mcq: 'Multiple choice', tf: 'True / False', short: 'Fill in the blank', open: 'Problem', match: 'Matching', order: 'Ordering' };
const TORD = { tf: 0, mcq: 1, short: 2, match: 3, order: 4, open: 5 };
function srcRank(q) {
  const s = q.src[0] || ''; const y = (s.match(/(20\d\d)/) || [0, 0])[1];
  const sem = (s.match(/S(\d)/) || [0, 0])[1];
  const kind = /Final/.test(s) ? 3 : /Mid/.test(s) ? 2 : 1;
  return +y * 100 + kind * 10 + +sem;
}
function chapterQs(chId) {
  return QB.filter(q => q.ch === chId)
    .map((q, k) => [q, k])
    .sort((a, b) => ((a[0].unsolved ? 1 : 0) - (b[0].unsolved ? 1 : 0)) || (TORD[a[0].type] - TORD[b[0].type]) || (srcRank(b[0]) - srcRank(a[0])) || (a[1] - b[1]))
    .map(x => x[0]);
}
function chStats(chId) {
  const qs = QB.filter(q => q.ch === chId);
  const solvable = qs.filter(q => !q.unsolved);
  const r = solvable.filter(q => st(q.id) === 'r').length;
  const a = solvable.filter(q => st(q.id)).length;
  return { n: qs.length, m: solvable.length, r, a, ns: qs.length - solvable.length };
}
function chColor(s) { return s.a === 0 ? '' : (s.m && s.r / s.m >= 0.8 ? 'black' : 'gray'); }
function hash32(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
function seededShuffle(arr, seed) {
  const a = arr.slice(); let x = seed || 1;
  for (let i = a.length - 1; i > 0; i--) { x = (Math.imul(x, 1103515245) + 12345) >>> 0; const j = x % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function shuffle(arr) { return seededShuffle(arr, (Math.random() * 4294967295) >>> 0); }
const plain = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' ').trim(); };

let toastT;
function toast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.appendChild(t); }
  t.textContent = msg; t.classList.add('on');
  clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('on'), 1800);
}
function copyText(text, fallbackEl) {
  const ok = () => toast('Copied to clipboard');
  const fail = () => { if (fallbackEl) { fallbackEl.hidden = false; fallbackEl.value = text; fallbackEl.focus(); fallbackEl.select(); } toast('Select the text and copy it'); };
  try { navigator.clipboard.writeText(text).then(ok, fail); } catch (e) { fail(); }
}

/* ------------------------------------------------------------------ figures */
let svgId = 0;
function svgGraph(spec) {
  const N = spec.n, names = Object.keys(N);
  const E = spec.e.trim().split(/\s+/).map(tok => {
    const m = tok.match(/^([A-Za-z0-9]+)([->])([A-Za-z0-9]+)(?::(-?[\d.]+))?$/);
    return m ? { u: m[1], v: m[3], dir: m[2] === '>', w: m[4] } : null;
  }).filter(Boolean);
  const xs = names.map(k => N[k][0]), ys = names.map(k => N[k][1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), minY = Math.min(...ys), maxY = Math.max(...ys);
  const dx = maxX - minX, dy = maxY - minY;
  let dmin = Infinity;
  for (let i = 0; i < names.length; i++) for (let j = i + 1; j < names.length; j++) {
    const a = N[names[i]], b = N[names[j]]; dmin = Math.min(dmin, Math.hypot(a[0] - b[0], a[1] - b[1]));
  }
  let s = Math.min(dx ? 520 / dx : Infinity, dy ? 300 / dy : Infinity);
  if (!isFinite(s)) s = 1;
  if (isFinite(dmin) && dmin > 0 && dmin * s < 66) s = 66 / dmin;
  const R = 17, pad = 36;
  const P = {};
  names.forEach(k => { P[k] = [(N[k][0] - minX) * s + pad, (N[k][1] - minY) * s + pad]; });
  const W = Math.max(dx * s + 2 * pad, 120), H = Math.max(dy * s + 2 * pad, 90);
  const id = 'g' + (++svgId);
  const keyset = new Set(E.filter(e => e.dir).map(e => e.u + '>' + e.v));
  const hl = new Set((spec.hl || '').split(/\s+/).filter(Boolean).map(t => t.split(/[->]/).sort().join('|')));
  const curve = spec.curve || {};
  let under = '', lines = '', labels = '';
  const ext = [0, 0, W, H];
  const grow = (x, y, m) => { ext[0] = Math.min(ext[0], x - m); ext[1] = Math.min(ext[1], y - m); ext[2] = Math.max(ext[2], x + m); ext[3] = Math.max(ext[3], y + m); };
  for (const e of E) {
    const a = P[e.u], b = P[e.v]; if (!a || !b) continue;
    const mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2;
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]) || 1;
    const nx = -(b[1] - a[1]) / len, ny = (b[0] - a[0]) / len;
    let off = 0;
    const ck = e.u + (e.dir ? '>' : '-') + e.v;
    if (curve[ck] != null) off = curve[ck];
    else if (e.dir && keyset.has(e.v + '>' + e.u)) off = Math.max(18, len * 0.16);
    const cx = mx + nx * off * 2, cy = my + ny * off * 2;
    if (off) grow(0.25 * a[0] + 0.5 * cx + 0.25 * b[0], 0.25 * a[1] + 0.5 * cy + 0.25 * b[1], 22);
    const trim = (p, q, r) => { const L = Math.hypot(q[0] - p[0], q[1] - p[1]) || 1; return [p[0] + (q[0] - p[0]) * r / L, p[1] + (q[1] - p[1]) * r / L]; };
    const p0 = trim(a, [cx, cy], R + 1), p1 = trim(b, [cx, cy], R + (e.dir ? 3 : 1));
    const d = off ? `M${p0[0].toFixed(1)},${p0[1].toFixed(1)} Q${cx.toFixed(1)},${cy.toFixed(1)} ${p1[0].toFixed(1)},${p1[1].toFixed(1)}`
      : `M${p0[0].toFixed(1)},${p0[1].toFixed(1)} L${p1[0].toFixed(1)},${p1[1].toFixed(1)}`;
    if (hl.has([e.u, e.v].sort().join('|'))) under += `<path class="g-hl" d="${d}"/>`;
    lines += `<path class="g-e" d="${d}"${e.dir ? ` marker-end="url(#${id}a)"` : ''}/>`;
    if (e.w != null) {
      let lx, ly;
      if (off) { lx = 0.25 * a[0] + 0.5 * cx + 0.25 * b[0]; ly = 0.25 * a[1] + 0.5 * cy + 0.25 * b[1]; const sg = Math.sign(off) || 1; lx += nx * 11 * sg; ly += ny * 11 * sg; }
      else { const sg = (nx < 0 || (nx === 0 && ny < 0)) ? 1 : -1; lx = mx + nx * 11 * sg; ly = my + ny * 11 * sg; }
      labels += `<text class="g-w" x="${lx.toFixed(1)}" y="${ly.toFixed(1)}">${esc(e.w.replace('-', '−'))}</text>`;
    }
  }
  let nodes = '';
  for (const k of names) {
    const [x, y] = P[k];
    nodes += `<circle class="g-n" cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${R}"/><text class="g-t" x="${x.toFixed(1)}" y="${y.toFixed(1)}">${esc(k)}</text>`;
    if (spec.lab && spec.lab[k] != null) {
      const t = String(spec.lab[k]); const w = 8 + t.length * 7.4;
      const bx = x + R - 6, by = y - R - 14;
      nodes += `<rect class="g-labbg" x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${w.toFixed(1)}" height="16" rx="3"/><text class="g-lab" x="${(bx + w / 2).toFixed(1)}" y="${(by + 8.5).toFixed(1)}">${esc(t)}</text>`;
    }
  }
  const vw = ext[2] - ext[0], vh = ext[3] - ext[1];
  return `<svg viewBox="${ext[0].toFixed(0)} ${ext[1].toFixed(0)} ${vw.toFixed(0)} ${vh.toFixed(0)}" style="width:${vw.toFixed(0)}px" role="img" aria-label="graph figure">
    <defs><marker id="${id}a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="9" markerHeight="9" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--ink)"/></marker></defs>
    ${under}${lines}${labels}${nodes}</svg>`;
}
function svgTree(vals, opt) {
  const n = vals.length, L = Math.floor(Math.log2(n)) + 1;
  const W0 = Math.max(Math.pow(2, L - 1) * 46, 180), lvl = 58, R = 16;
  const hasNull = vals.some(v => v == null);
  const cellW = 34, arrW = hasNull ? 0 : n * cellW;
  const W = Math.max(W0, arrW) + 24, off = (W - W0) / 2;
  const pos = i => { const d = Math.floor(Math.log2(i + 1)); const k = i - (Math.pow(2, d) - 1); return [off + (k + 0.5) * W0 / Math.pow(2, d), 26 + d * lvl]; };
  let edges = '', nodes = '';
  for (let i = 0; i < n; i++) {
    if (vals[i] == null) continue;
    const [x, y] = pos(i);
    for (const c of [2 * i + 1, 2 * i + 2]) if (c < n && vals[c] != null) { const [x2, y2] = pos(c); edges += `<line class="g-e" x1="${x}" y1="${y}" x2="${x2}" y2="${y2}"/>`; }
    nodes += `<circle class="g-n" cx="${x}" cy="${y}" r="${R}"/><text class="g-t" x="${x}" y="${y}">${esc(vals[i])}</text>`;
  }
  let arr = '', H = 26 + (L - 1) * lvl + R + 14;
  if (!hasNull) {
    const ax = (W - arrW) / 2, ay = H + 6;
    for (let i = 0; i < n; i++) {
      arr += `<rect class="g-cell" x="${ax + i * cellW}" y="${ay}" width="${cellW}" height="26"/><text class="g-t" x="${ax + i * cellW + cellW / 2}" y="${ay + 13}">${esc(vals[i])}</text><text class="g-ai" x="${ax + i * cellW + cellW / 2}" y="${ay + 38}">${i + 1}</text>`;
    }
    H = ay + 48;
  }
  return `<svg viewBox="0 0 ${W} ${H}" style="width:${W}px" role="img" aria-label="heap figure">${edges}${nodes}${arr}</svg>`;
}
function svgArray(vals, opt) {
  const base = opt.base == null ? 0 : opt.base, cw = 38, W = vals.length * cw + 20, H = 64;
  let s = '';
  vals.forEach((v, i) => {
    const x = 10 + i * cw;
    s += `<text class="g-ai" x="${x + cw / 2}" y="12">${i + base}</text><rect class="g-cell" x="${x}" y="22" width="${cw}" height="30"/><text class="g-t" x="${x + cw / 2}" y="37">${esc(v)}</text>`;
  });
  return `<svg viewBox="0 0 ${W} ${H}" style="width:${W}px" role="img" aria-label="array figure">${s}</svg>`;
}
function figHTML(f) {
  if (!f) return '';
  let svg = '';
  if (f.type === 'graph') svg = svgGraph(f);
  else if (f.type === 'heap') svg = svgTree(f.vals, f);
  else if (f.type === 'array') svg = svgArray(f.vals, f);
  else if (f.type === 'img') svg = `<img src="${esc(f.src)}" alt="figure">`;
  return `<div class="fig">${f.cap ? `<div class="fcap">${esc(f.cap)}</div>` : ''}${svg}</div>`;
}
function figsHTML(list) { const l = list.filter(Boolean); return l.length ? `<div class="figs">${l.map(figHTML).join('')}</div>` : ''; }
/* wrap bare tables so wide ones scroll inside their own box */
function wrapTables(html) { return html.replace(/<table class="t/g, '<div class="tscroll"><table class="t').replace(/<\/table>/g, '</table></div>'); }

/* ------------------------------------------------------------------ chapter graph (hero) */
const GNODES = {
  intro: [50, 220, 'Intro'], anA: [155, 110, 'Counting steps'], anB: [165, 330, 'Asymptotics'], dc: [280, 220, 'Recurrences'],
  sort1: [385, 100, 'Insert · Merge'], heap: [495, 60, 'Heaps'], extra: [615, 50, 'Extra topics'], linsort: [500, 180, 'Linear sorts'],
  greedy: [395, 330, 'Greedy'], dp: [520, 395, 'Dynamic prog.'], g1: [605, 270, 'BFS · DFS'], g2: [700, 170, 'MST'],
  g3: [735, 300, 'Shortest paths'], np: [630, 400, 'NP'], lp: [748, 405, 'Linear prog.']
};
const GEDGES = [['intro', 'anA'], ['intro', 'anB'], ['anA', 'anB'], ['anA', 'dc'], ['anB', 'dc'], ['dc', 'sort1'], ['sort1', 'heap'], ['heap', 'extra'],
  ['sort1', 'linsort'], ['heap', 'linsort'], ['dc', 'greedy'], ['greedy', 'dp'], ['dp', 'g1'], ['greedy', 'g2'], ['heap', 'g2'], ['g1', 'g2'],
  ['g2', 'g3'], ['dp', 'g3'], ['g3', 'np'], ['dp', 'np'], ['np', 'lp']];
function bfs(src) {
  const adj = {}; Object.keys(GNODES).forEach(k => adj[k] = []);
  GEDGES.forEach(([a, b]) => { adj[a].push(b); adj[b].push(a); });
  Object.values(adj).forEach(l => l.sort((x, y) => chById[x].n - chById[y].n));
  const d = { [src]: 0 }, order = [[src, null]], Qu = [src];
  while (Qu.length) { const u = Qu.shift(); for (const v of adj[u]) if (d[v] == null) { d[v] = d[u] + 1; order.push([v, u]); Qu.push(v); } }
  return { d, order };
}
const BFS = bfs('intro');
function chapterGraphSVG() {
  const ek = (a, b) => [a, b].sort().join('|');
  let s = `<svg id="chgraph" viewBox="0 0 800 462" role="group" aria-label="Chapter graph: each vertex is a chapter, edges link chapters that build on each other">`;
  for (const [a, b] of GEDGES) { const p = GNODES[a], q = GNODES[b]; s += `<line class="e" data-e="${ek(a, b)}" x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}"/>`; }
  for (const c of CH) {
    const [x, y, lbl] = GNODES[c.id]; const stt = chStats(c.id); const frac = stt.m ? stt.r / stt.m : 0;
    const circ = 2 * Math.PI * 27;
    s += `<g class="v ${chColor(stt)}" data-ch="${c.id}" tabindex="0" role="link" aria-label="Chapter ${c.n}: ${esc(c.title)}">
      <circle class="ring" cx="${x}" cy="${y}" r="27" stroke-dasharray="${(frac * circ).toFixed(1)} ${circ.toFixed(1)}" transform="rotate(-90 ${x} ${y})"/>
      <circle class="body" cx="${x}" cy="${y}" r="21"/><text class="num" x="${x}" y="${y}">${c.n}</text>
      <text class="lbl" x="${x}" y="${y + 41}">${esc(lbl)}</text>
      <text class="d" x="${x}" y="${y - 32}">d=${BFS.d[c.id]}</text></g>`;
  }
  return s + '</svg>';
}
let graphTimer = null, animatedOnce = false;
function runBFSAnimation() {
  const svg = document.getElementById('chgraph'); if (!svg) return;
  const lines = [...document.querySelectorAll('.pseudo .ln[data-l]')];
  const setLine = l => lines.forEach(x => x.classList.toggle('on', +x.dataset.l === l));
  if (reduced || animatedOnce) { setLine(6); return; }
  animatedOnce = true;
  const real = {};
  svg.querySelectorAll('.v').forEach(g => { real[g.dataset.ch] = g.getAttribute('class'); g.setAttribute('class', 'v'); });
  let k = 0, prev = null;
  graphTimer = setInterval(() => {
    if (prev) svg.querySelector(`.v[data-ch="${prev}"]`).setAttribute('class', real[prev]);
    if (k >= BFS.order.length) { clearInterval(graphTimer); graphTimer = null; setLine(6); return; }
    const [v, p] = BFS.order[k];
    svg.querySelector(`.v[data-ch="${v}"]`).setAttribute('class', 'v disc');
    if (p) {
      const e = svg.querySelector(`.e[data-e="${[v, p].sort().join('|')}"]`);
      if (e) { e.classList.add('run'); setTimeout(() => { e.classList.remove('run'); e.classList.add('tree'); }, 260); }
    }
    setLine(Math.min(5, 1 + Math.floor(k * 5 / BFS.order.length)));
    prev = v; k++;
  }, 200);
}

/* ------------------------------------------------------------------ views */
const view = { mode: 'home', ch: null, base: [], list: [], i: 0, filter: 'all', shuffled: false };
const ui = {}; // per-question transient answer state
function stopTimers() { if (graphTimer) { clearInterval(graphTimer); graphTimer = null; } }

function topBar() {
  const solved = QB.filter(q => st(q.id) === 'r').length;
  return `<header class="bar"><div class="bar-in">
    <a class="brand" href="#" data-home><span class="sq"></span>ALGO·EXAM·BANK</a><span class="spacer"></span>
    <span class="stat">solved ${solved} / ${QB.filter(q => !q.unsolved).length}</span>
    <button class="iconbtn" id="theme-btn" type="button" aria-label="Switch light or dark theme">◐ Theme</button>
  </div></header>`;
}
function legendHTML() {
  return `<div class="legend"><span><i class="sw"></i>WHITE · untouched</span><span><i class="sw gray"></i>GRAY · attempted</span><span><i class="sw black"></i>BLACK · solved</span><span><i class="sw ns"></i>needs your answer</span></div>`;
}
function sourcesList() {
  const m = {};
  QB.forEach(q => q.src.forEach(s => { m[s] = (m[s] || 0) + 1; }));
  const kind = s => /^Final/.test(s) ? 0 : /^Mid/.test(s) ? 1 : /^Quiz|^Eval/.test(s) ? 2 : 3;
  return Object.keys(m).sort((a, b) => kind(a) - kind(b) || ((b.match(/20\d\d/) || [0])[0] - (a.match(/20\d\d/) || [0])[0]) || a.localeCompare(b))
    .map(s => `<span class="chip">${esc(s)} <b>${m[s]}</b></span>`).join('');
}
function unsolvedExport() {
  const qs = QB.filter(q => q.unsolved);
  return qs.map(q => `[${q.id}] ${chById[q.ch].title} · ${q.src.join(', ')}\nQ: ${plain(q.q)}\nMy answer: ${(store.notes[q.id] || '').trim() || '(not answered yet)'}`).join('\n\n');
}

function renderHome() {
  view.mode = 'home';
  const totalQ = QB.length, papers = new Set(QB.flatMap(q => q.src)).size;
  const solved = QB.filter(q => st(q.id) === 'r').length;
  const nUns = QB.filter(q => q.unsolved).length;
  const rows = CH.map(c => {
    const s = chStats(c.id); const qs = chapterQs(c.id);
    return `<li><button class="chrow" type="button" data-ch="${c.id}">
      <span class="idx">${pad2(c.n)}<small>d=${BFS.d[c.id]}</small></span>
      <span class="main"><span class="t">${esc(c.title)}</span><span class="proc">${esc(c.proc)}</span><span class="blurb">${esc(c.blurb)}</span>
        <span class="cells" aria-hidden="true">${qs.map(q => `<i class="${cellCls(q)}"></i>`).join('')}</span></span>
      <span class="count"><b>${s.n}</b>${s.r} solved${s.ns ? ` · ${s.ns} open` : ''}</span></button></li>`;
  }).join('');
  $app.innerHTML = topBar() + `<main class="wrap">
    <section class="hero">
      <div>
        <div class="eyebrow">CS1312 · Design &amp; Analysis of Algorithms</div>
        <h1>Every past exam question, <span class="hl">sorted by chapter</span> and solved.</h1>
        <pre class="pseudo" aria-label="How this bank was built, as pseudocode"><span class="ln"><i></i><span><span class="proc">Exam-Prep</span>(<i>papers</i>)</span></span><span class="ln" data-l="1"><i>1</i><span><i>Q</i> ← <span class="proc">Extract</span>(<i>papers</i>)   <span class="cm">▷ |Q| = ${totalQ}</span></span></span><span class="ln" data-l="2"><i>2</i><span><span class="kw">for</span> each <i>q</i> ∈ <i>Q</i></span></span><span class="ln" data-l="3"><i>3</i><span>    <i>q.solution</i> ← <span class="proc">Solve</span>(<i>q</i>)</span></span><span class="ln" data-l="4"><i>4</i><span>    <span class="proc">Insert</span>(<i>Adj</i>[<i>q.ch</i>], <i>q</i>)   <span class="cm">▷ 15 lists</span></span></span><span class="ln" data-l="5"><i>5</i><span><span class="kw">for</span> each chapter <i>c</i> in BFS order</span></span><span class="ln" data-l="6"><i>6</i><span>    <span class="proc">Practice</span>(<i>c</i>) <span class="kw">until</span> <i>c.color</i> = <span class="kw">black</span></span></span></pre>
        <div class="hero-meta"><span>n = <b>${totalQ}</b> questions</span><span><b>${papers}</b> exam papers</span><span>solved <b>${solved}</b> / ${totalQ - nUns}</span>${nUns ? `<span><b>${nUns}</b> waiting for your answer</span>` : ''}</div>
        <div class="hero-actions"><button class="btn" type="button" data-ch="intro">Start chapter 1 →</button><button class="btn ghost" type="button" data-mix>Randomized quiz · 10</button></div>
      </div>
      <div class="graph-card">
        <div class="cap"><span>G = (chapters, “builds on” edges)</span><span>BFS from vertex 1</span></div>
        ${chapterGraphSVG()}
        ${legendHTML()}
      </div>
    </section>
    <div class="sec-head"><h2>Adj[course]</h2><span class="hint">Pick a chapter. Each square is one question.</span></div>
    <ul class="adj">${rows}</ul>
    <details class="sources"><summary>Input: ${papers} papers (finals, midterms, quizzes 2013–2026)</summary><div class="srcgrid">${sourcesList()}</div>
      <p class="hint">A question that appeared on several papers is stored once and lists every paper it came from. Where a printed answer key was wrong, the solution says so.</p></details>
    <div class="foot">
      <span>${nUns ? `<button class="btn ghost small" type="button" id="exp-btn">Copy my answers to not-solved questions</button>` : ''}</span>
      <span><button class="btn ghost small" type="button" id="reset-btn">Reset all progress</button></span>
    </div>
    <textarea class="copybox" id="exp-box" hidden aria-label="Your answers to not-solved questions"></textarea>
  </main>`;
  runBFSAnimation();
}

function filterList(base, f) {
  if (f === 'quick') return base.filter(q => q.type === 'tf' || q.type === 'mcq');
  if (f === 'prob') return base.filter(q => !['tf', 'mcq'].includes(q.type) && !q.unsolved);
  if (f === 'todo') return base.filter(q => !q.unsolved && st(q.id) !== 'r');
  if (f === 'ns') return base.filter(q => q.unsolved);
  return base;
}
function openChapter(chId, keepHash) {
  stopTimers();
  view.mode = 'ch'; view.ch = chId; view.filter = 'all'; view.shuffled = false;
  view.base = chapterQs(chId); view.list = view.base.slice();
  const lastId = store.last[chId]; const li = view.list.findIndex(q => q.id === lastId);
  view.i = li >= 0 ? li : 0;
  if (!keepHash) setHash('ch-' + chId);
  renderChapter(); window.scrollTo(0, 0);
}
function openMix(keepHash) {
  stopTimers();
  view.mode = 'mix'; view.ch = 'mix'; view.filter = 'all'; view.shuffled = true;
  view.base = shuffle(QB.filter(q => !q.unsolved)).slice(0, 10); view.list = view.base.slice(); view.i = 0;
  if (!keepHash) setHash('mix');
  renderChapter(); window.scrollTo(0, 0);
}
function setHash(h) {
  const want = h ? '#' + h : '';
  if (location.hash === want) return;
  try { history.pushState(null, '', want || location.pathname + location.search); } catch (e) { /* history blocked */ }
}

function renderChapter() {
  const isMix = view.mode === 'mix';
  const c = isMix ? { n: 'R', title: 'Randomized quiz', proc: 'Randomized-Quiz(Q, 10)' } : chById[view.ch];
  const counts = { all: view.base.length, quick: filterList(view.base, 'quick').length, prob: filterList(view.base, 'prob').length, todo: filterList(view.base, 'todo').length, ns: filterList(view.base, 'ns').length };
  const solved = view.base.filter(q => st(q.id) === 'r').length;
  const fbtn = (k, label) => counts[k] || k === 'all' ? `<button class="tbtn" type="button" data-filter="${k}" aria-pressed="${view.filter === k}">${label}<span class="n">${counts[k]}</span></button>` : '';
  $app.innerHTML = topBar() + `<main class="wrap">
    <button class="back" type="button" data-home>← Adj[course]</button>
    <header class="ch-head"><div class="big${isMix ? ' mark' : ''}">${isMix ? 'R' : pad2(c.n)}</div><h1>${esc(c.title)}</h1><div class="proc">${esc(c.proc)}</div></header>
    <div class="toolbar">
      ${fbtn('all', 'All')}${fbtn('quick', 'Choice & T/F')}${fbtn('prob', 'Problems')}${fbtn('todo', 'Unfinished')}${fbtn('ns', 'Not solved')}
      <span class="grow"></span>
      ${isMix ? `<button class="tbtn" type="button" data-redraw>New draw</button>` : `<button class="tbtn" type="button" data-shuffle aria-pressed="${view.shuffled}">Shuffle</button>`}
      <span class="progress-txt">solved ${solved} / ${view.base.filter(q => !q.unsolved).length}</span>
    </div>
    <div class="arr-wrap"><div class="arr-label"><span>Q[0‥${Math.max(view.list.length - 1, 0)}]  n = ${view.list.length}</span><span>${legendHTML().replace('class="legend"', 'class="legend" style="gap:4px 12px"')}</span></div>
      <div class="arr" id="arr" role="tablist" aria-label="Questions">${view.list.map((q, k) => `<button type="button" role="tab" class="${cellCls(q)}${k === view.i ? ' cur' : ''}" data-i="${k}" aria-selected="${k === view.i}" aria-label="Question ${k}">${k}</button>`).join('')}</div></div>
    <div id="qslot"></div>
  </main>`;
  renderQuestion();
}
function refreshCells() {
  document.querySelectorAll('#arr button').forEach(b => {
    const k = +b.dataset.i; const q = view.list[k];
    b.className = cellCls(q) + (k === view.i ? ' cur' : ''); b.setAttribute('aria-selected', k === view.i);
  });
  const p = document.querySelector('.progress-txt');
  if (p) p.textContent = `solved ${view.base.filter(q => st(q.id) === 'r').length} / ${view.base.filter(q => !q.unsolved).length}`;
  const s = document.querySelector('.bar .stat');
  if (s) s.textContent = `solved ${QB.filter(q => st(q.id) === 'r').length} / ${QB.filter(q => !q.unsolved).length}`;
}
function goto(k) {
  if (!view.list.length) return;
  view.i = Math.max(0, Math.min(view.list.length - 1, k));
  if (view.mode === 'ch') { store.last[view.ch] = view.list[view.i].id; save(); }
  refreshCells(); renderQuestion();
  const cur = document.querySelector('#arr .cur');
  if (cur && cur.scrollIntoView) cur.scrollIntoView({ block: 'nearest', inline: 'center', behavior: reduced ? 'auto' : 'smooth' });
}

/* ------------------------------------------------------------------ question rendering */
function stateTag(q) {
  if (q.unsolved) return '<span class="tag ns">Not solved</span>';
  const s = st(q.id);
  return s === 'r' ? '<span class="tag st-b">Solved</span>' : s ? '<span class="tag st-g">Attempted</span>' : '';
}
function renderQuestion() {
  const slot = document.getElementById('qslot');
  const q = view.list[view.i];
  if (!q) { slot.innerHTML = `<div class="qcard"><div class="empty">Nothing here with this filter. Pick another filter above.</div></div>`; return; }
  const u = ui[q.id] || (ui[q.id] = {});
  const chTag = view.mode === 'mix' ? `<span class="tag">Ch ${chById[q.ch].n} · ${esc(chById[q.ch].title)}</span>` : '';
  const figs = figsHTML([q.fig].concat(q.figs || []));
  slot.innerHTML = `<article class="qcard" aria-live="polite">
    <div class="qhead"><span class="qi">Q[${view.i}]</span><span class="tag">${TYPE_NAME[q.type]}</span>${chTag}${stateTag(q)}
      <div class="srcs">${q.src.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div></div>
    <div class="qbody"><div class="qtext">${wrapTables(q.q)}</div>${figs}<div id="ans"></div><div id="solslot"></div></div>
    <div class="qnav"><button class="btn ghost small" type="button" data-prev ${view.i === 0 ? 'disabled' : ''}>← Previous</button>
      <span class="keys"><kbd>←</kbd> <kbd>→</kbd> move · <kbd>1</kbd>–<kbd>9</kbd> pick · <kbd>S</kbd> solution</span>
      <button class="btn small" type="button" data-next ${view.i >= view.list.length - 1 ? 'disabled' : ''}>Next →</button></div>
  </article>`;
  renderAnswer(q, u);
  if (u.revealed) showSolution(q, true);
}
function solHTML(q) {
  return `<div class="sol"><div class="sol-h">Solution</div><div class="sol-body">${wrapTables(q.sol || '')}${figsHTML([q.solFig])}</div></div>`;
}
function showSolution(q, silent) {
  const u = ui[q.id] || (ui[q.id] = {});
  const slot = document.getElementById('solslot'); if (!slot || q.unsolved) return;
  if (slot.innerHTML) return;
  slot.innerHTML = solHTML(q); u.revealed = true;
  if (!silent) { mark(q.id, 's'); refreshCells(); }
}
function verdict(ok, extra) {
  return `<div class="verdict ${ok ? 'ok' : 'bad'}">${ok ? '✓ Correct' : '✗ Not quite'}${extra ? `<span class="hint" style="font-weight:500">${extra}</span>` : ''}</div>`;
}
function renderAnswer(q, u) {
  const box = document.getElementById('ans');
  if (q.unsolved) {
    box.innerHTML = `<div class="missing"><h4>Not solved yet</h4>${q.missing || 'I could not produce a reliable solution for this one.'}</div>
      <div class="field"><label for="note-${q.id}">Your answer (saved on this device)</label><textarea id="note-${q.id}" data-note="${q.id}" placeholder="Write your answer here, then copy it and send it to Claude."></textarea></div>
      <div class="actions"><button class="btn small" type="button" data-copyone>Copy my answer</button></div>
      <textarea class="copybox" id="copyone-box" hidden aria-label="Answer text"></textarea>`;
    box.querySelector('textarea[data-note]').value = store.notes[q.id] || '';
    return;
  }
  if (q.type === 'mcq' || q.type === 'tf') {
    const opts = q.type === 'tf' ? ['True', 'False'] : q.opts;
    const ans = q.type === 'tf' ? [q.ans ? 0 : 1] : [].concat(q.ans);
    const cls = q.type === 'mcq' && (q.bank || q.grid) ? (q.grid ? 'grid' : 'bank') : '';
    const keyOf = k => q.type === 'tf' ? (k ? 'F' : 'T') : (opts.length > 9 ? String.fromCharCode(97 + k) : String.fromCharCode(65 + k));
    box.innerHTML = `<div class="opts ${cls}" role="group" aria-label="Options">${opts.map((o, k) => {
      let c = '';
      if (u.picked != null) { if (ans.includes(k)) c = 'ok'; else if (k === u.picked) c = 'bad'; else c = 'dim'; }
      return `<button type="button" class="opt ${c}" data-opt="${k}" ${u.picked != null ? 'disabled' : ''}><span class="k">${keyOf(k)}</span><span>${o}</span></button>`;
    }).join('')}</div>${u.picked != null ? verdict(ans.includes(u.picked), ans.length > 1 ? 'More than one option is accepted.' : '') + `<div class="actions"><button class="btn ghost small" type="button" data-retry>Try again</button></div>` : `<div class="actions"><button class="btn ghost small" type="button" data-reveal>Show solution</button></div>`}`;
    return;
  }
  if (q.type === 'short') {
    const done = u.result != null;
    box.innerHTML = `<div class="field"><label for="sa-${q.id}">Your answer</label><input id="sa-${q.id}" type="text" autocomplete="off" spellcheck="false" class="${done ? (u.result ? 'ok' : 'bad') : ''}" ${done ? 'disabled' : ''}></div>
      ${done ? verdict(u.result, u.result ? '' : 'Compare with the solution below.') : ''}
      <div class="actions">${done ? (u.result ? '' : `<button class="btn ghost small" type="button" data-self="r">My answer was right</button>`) + `<button class="btn ghost small" type="button" data-retry>Try again</button>` : `<button class="btn small" type="button" data-check>Check</button><button class="btn ghost small" type="button" data-reveal>Show solution</button>`}</div>`;
    box.querySelector('input').value = u.value || '';
    return;
  }
  if (q.type === 'match') {
    const sel = u.sel || (u.sel = q.left.map(() => -1));
    const done = !!u.checked;
    box.innerHTML = `<div class="match">${q.left.map((l, k) => {
      const c = done ? (sel[k] === q.ans[k] ? 'ok' : 'bad') : '';
      return `<div class="row ${c}"><div>${l}</div><select data-m="${k}" ${done ? 'disabled' : ''} aria-label="Match for item ${k + 1}"><option value="-1">Choose…</option>${q.right.map((r, j) => `<option value="${j}" ${sel[k] === j ? 'selected' : ''}>${plain(r)}</option>`).join('')}</select>${done && c === 'bad' ? `<div class="fix">→ ${q.right[q.ans[k]]}</div>` : ''}</div>`;
    }).join('')}</div>
    ${done ? verdict(q.ans.every((a, k) => sel[k] === a), `${q.ans.filter((a, k) => sel[k] === a).length} of ${q.ans.length} matched`) : ''}
    <div class="actions">${done ? `<button class="btn ghost small" type="button" data-retry>Try again</button>` : `<button class="btn small" type="button" data-check>Check</button><button class="btn ghost small" type="button" data-reveal>Show solution</button>`}</div>`;
    return;
  }
  if (q.type === 'order') {
    const seq = u.seq || (u.seq = []);
    const disp = seededShuffle(q.items.map((_, k) => k), hash32(q.id));
    const full = seq.length === q.items.length, done = !!u.checked;
    const ok = done && seq.every((v, k) => v === q.ans[k]);
    box.innerHTML = `<div class="hint" style="margin-top:14px">Click the items from slowest-growing to fastest.</div>
      <div class="order-slots ${done ? (ok ? 'ok' : 'bad') : ''}" aria-label="Your order">${seq.map(k => `<span class="ochip">${q.items[k]}</span>`).join('') || '<span class="hint">empty</span>'}</div>
      <div class="order-pool">${disp.map(k => `<button type="button" class="ochip" data-pick="${k}" ${seq.includes(k) || done ? 'disabled' : ''}>${q.items[k]}</button>`).join('')}</div>
      ${done ? verdict(ok, ok ? '' : 'Correct order: ' + q.ans.map(k => plain(q.items[k])).join(' < ')) : ''}
      <div class="actions">${done ? `<button class="btn ghost small" type="button" data-retry>Try again</button>` : `<button class="btn small" type="button" data-check ${full ? '' : 'disabled'}>Check</button><button class="btn ghost small" type="button" data-undo ${seq.length ? '' : 'disabled'}>Undo</button><button class="btn ghost small" type="button" data-reveal>Show solution</button>`}</div>`;
    return;
  }
  // open problem
  const graded = u.graded;
  box.innerHTML = `<div class="field"><label for="sc-${q.id}">Work it out (saved on this device)</label><textarea id="sc-${q.id}" data-scratch="${q.id}" placeholder="Your working: tables, steps, final answer…"></textarea></div>
    <div class="actions">${u.revealed ? (graded ? `<span class="verdict ${graded === 'r' ? 'ok' : 'bad'}" style="margin:0">${graded === 'r' ? '✓ Marked as solved' : '✗ Marked as missed'}</span>` : `<span class="hint">How did you do?</span><button class="btn small" type="button" data-self="r">I got it</button><button class="btn ghost small" type="button" data-self="w">I missed it</button>`) : `<button class="btn small" type="button" data-reveal>Show solution</button>`}</div>`;
  box.querySelector('textarea').value = (store.notes['s:' + q.id]) || '';
}

/* ------------------------------------------------------------------ interactions */
function currentQ() { return view.list[view.i]; }
function pickOption(k) {
  const q = currentQ(); if (!q || !(q.type === 'mcq' || q.type === 'tf') || q.unsolved) return;
  const u = ui[q.id] || (ui[q.id] = {}); if (u.picked != null) return;
  const opts = q.type === 'tf' ? 2 : q.opts.length; if (k < 0 || k >= opts) return;
  const ans = q.type === 'tf' ? [q.ans ? 0 : 1] : [].concat(q.ans);
  u.picked = k; mark(q.id, ans.includes(k) ? 'r' : 'w');
  renderAnswer(q, u); showSolution(q, true); u.revealed = true; refreshCells(); updateStateTag(q);
}
function updateStateTag(q) {
  const head = document.querySelector('.qhead'); if (!head) return;
  head.querySelectorAll('.tag.st-b, .tag.st-g').forEach(t => t.remove());
  const t = stateTag(q); if (t && !q.unsolved) head.querySelector('.srcs').insertAdjacentHTML('beforebegin', t);
}
const normAns = s => String(s).toLowerCase().replace(/[−–]/g, '-').replace(/^\s*[oθ]\s*\((.*)\)\s*$/i, '$1').replace(/[\s()]/g, '').replace(/\^/g, '').replace(/²/g, '2').replace(/ⁿ/g, 'n');

document.addEventListener('click', e => {
  const t = e.target.closest('button, [data-ch], a[data-home]'); if (!t) return;
  if (t.matches('[data-home]')) { e.preventDefault(); goHome(); return; }
  if (t.id === 'theme-btn') { toggleTheme(); return; }
  if (t.matches('[data-mix]') || t.matches('[data-redraw]')) { openMix(); return; }
  if (t.dataset.ch && !t.closest('#qslot')) { openChapter(t.dataset.ch); return; }
  if (t.id === 'reset-btn') {
    if (t.dataset.armed) { store.p = {}; store.notes = {}; store.last = {}; save(); Object.keys(ui).forEach(k => delete ui[k]); toast('Progress reset'); renderHome(); }
    else { t.dataset.armed = '1'; t.textContent = 'Click again to erase all progress'; setTimeout(() => { if (t.isConnected) { delete t.dataset.armed; t.textContent = 'Reset all progress'; } }, 3500); }
    return;
  }
  if (t.id === 'exp-btn') { copyText(unsolvedExport(), document.getElementById('exp-box')); return; }
  if (t.dataset.filter) {
    view.filter = t.dataset.filter; const curId = currentQ() && currentQ().id;
    let l = filterList(view.base, view.filter); if (view.shuffled) l = shuffle(l);
    view.list = l; const k = l.findIndex(q => q.id === curId); view.i = k >= 0 ? k : 0;
    renderChapter(); return;
  }
  if (t.matches('[data-shuffle]')) {
    view.shuffled = !view.shuffled; const curId = currentQ() && currentQ().id;
    const l = filterList(view.base, view.filter); view.list = view.shuffled ? shuffle(l) : l;
    const k = view.list.findIndex(q => q.id === curId); view.i = view.shuffled ? 0 : Math.max(0, k);
    renderChapter(); return;
  }
  if (t.closest('#arr') && t.dataset.i != null) { goto(+t.dataset.i); return; }
  if (t.matches('[data-prev]')) { goto(view.i - 1); return; }
  if (t.matches('[data-next]')) { goto(view.i + 1); return; }

  const q = currentQ(); if (!q) return; const u = ui[q.id] || (ui[q.id] = {});
  if (t.dataset.opt != null) { pickOption(+t.dataset.opt); return; }
  if (t.matches('[data-reveal]')) { showSolution(q); renderAnswer(q, u); updateStateTag(q); return; }
  if (t.matches('[data-retry]')) { delete u.picked; delete u.result; delete u.checked; u.seq = []; if (q.type === 'match') u.sel = q.left.map(() => -1); renderAnswer(q, u); return; }
  if (t.matches('[data-self]')) {
    mark(q.id, t.dataset.self); u.graded = t.dataset.self; if (q.type === 'short') u.result = t.dataset.self === 'r';
    if (!u.revealed) showSolution(q, true); u.revealed = true; renderAnswer(q, u); refreshCells(); updateStateTag(q); return;
  }
  if (t.matches('[data-check]')) {
    if (q.type === 'short') {
      const v = document.querySelector('#ans input').value; u.value = v; if (!v.trim()) return;
      const ok = (q.accept || []).some(a => normAns(a) === normAns(v));
      u.result = ok; mark(q.id, ok ? 'r' : 'w'); showSolution(q, true); u.revealed = true;
    } else if (q.type === 'match') {
      if (u.sel.some(x => x < 0)) { toast('Match every item first'); return; }
      u.checked = true; const ok = q.ans.every((a, k) => u.sel[k] === a); mark(q.id, ok ? 'r' : 'w'); showSolution(q, true); u.revealed = true;
    } else if (q.type === 'order') {
      u.checked = true; const ok = u.seq.every((v, k) => v === q.ans[k]); mark(q.id, ok ? 'r' : 'w'); showSolution(q, true); u.revealed = true;
    }
    renderAnswer(q, u); refreshCells(); updateStateTag(q); return;
  }
  if (t.dataset.pick != null) { u.seq = (u.seq || []).concat(+t.dataset.pick); renderAnswer(q, u); return; }
  if (t.matches('[data-undo]')) { u.seq = (u.seq || []).slice(0, -1); renderAnswer(q, u); return; }
  if (t.matches('[data-copyone]')) {
    const text = `[${q.id}] ${chById[q.ch].title} · ${q.src.join(', ')}\nQ: ${plain(q.q)}\nMy answer: ${(store.notes[q.id] || '').trim() || '(empty)'}`;
    copyText(text, document.getElementById('copyone-box')); return;
  }
});
document.addEventListener('keydown', e => {
  if (e.target.closest && e.target.closest('#chgraph .v') && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); openChapter(e.target.closest('.v').dataset.ch); return; }
  if (view.mode === 'home') return;
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || tag === 'select') {
    if (e.key === 'Enter' && tag === 'input') { const b = document.querySelector('#ans [data-check]'); if (b) b.click(); }
    return;
  }
  if (e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === 'ArrowRight') { goto(view.i + 1); e.preventDefault(); }
  else if (e.key === 'ArrowLeft') { goto(view.i - 1); e.preventDefault(); }
  else if (e.key === 's' || e.key === 'S') { const b = document.querySelector('#ans [data-reveal]'); if (b) b.click(); }
  else if (/^[1-9]$/.test(e.key)) pickOption(+e.key - 1);
  else if (/^[a-l]$/i.test(e.key)) { const q = currentQ(); if (q && q.type === 'mcq') pickOption(e.key.toLowerCase().charCodeAt(0) - 97); else if (q && q.type === 'tf' && /^[tf]$/i.test(e.key)) pickOption(e.key.toLowerCase() === 't' ? 0 : 1); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.dataset && t.dataset.note) { store.notes[t.dataset.note] = t.value; save(); refreshCells(); }
  else if (t.dataset && t.dataset.scratch) { store.notes['s:' + t.dataset.scratch] = t.value; save(); }
  else if (t.matches && t.matches('#ans input')) { const q = currentQ(); if (q) (ui[q.id] || (ui[q.id] = {})).value = t.value; }
});
document.addEventListener('change', e => {
  const t = e.target; if (!t.dataset || t.dataset.m == null) return;
  const q = currentQ(); const u = ui[q.id] || (ui[q.id] = {}); u.sel[+t.dataset.m] = +t.value;
});

function goHome() { stopTimers(); setHash(''); renderHome(); window.scrollTo(0, 0); }
function route() {
  const h = location.hash.replace(/^#/, '');
  if (h.startsWith('ch-') && chById[h.slice(3)]) openChapter(h.slice(3), true);
  else if (h === 'mix') openMix(true);
  else { stopTimers(); renderHome(); }
}
window.addEventListener('popstate', route);
route();
})();
