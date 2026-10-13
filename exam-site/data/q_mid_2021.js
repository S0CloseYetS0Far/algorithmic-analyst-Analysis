/* Midterm 2, 2021 (model answer) */
{
const S = 'Midterm 2 2021';

Q({ id: 'm21b-1', ch: 'linsort', src: S, type: 'mcq',
  q: `List: 7, 107, 408, 210, 15, 329, 141, 53, 663. What is the list after the <b>first pass</b> of radix sort?`,
  opts: ['7, 15, 53, 107, 141, 210, 329, 408, 663', '7, 107, 408, 210, 15, 329, 141, 53, 663', '210, 141, 53, 663, 15, 7, 107, 408, 329', 'All the above answers are incorrect'], ans: 2,
  sol: `Pass 1 stably sorts by the units digit: 0 → 210; 1 → 141; 3 → 53, 663; 5 → 15; 7 → 7, 107; 8 → 408; 9 → 329.` });
Q({ id: 'm21b-2', ch: 'linsort', src: S, type: 'mcq', q: `In radix sort, to sort binary numbers, ______ buckets are needed.`,
  opts: ['1', '2', '3', '10'], ans: 1, sol: `The radix (base) is 2, so each digit is 0 or 1 → 2 buckets.` });
Q({ id: 'm21b-3', ch: 'linsort', src: S, type: 'mcq', q: `We can apply ______ sort on any list of items.`,
  opts: ['Counting', 'Bucket', 'Merge', 'Linear'], ans: 2,
  sol: `Merge sort is comparison-based, so it only needs a way to compare keys. Counting sort needs small integer keys; bucket sort assumes uniformly distributed keys in [0, 1).` });

const dg = { n: { a: [405, 1085], b: [650, 1085], f: [800, 1085], c: [405, 1260], d: [650, 1260], e: [840, 1260], g: [940, 1188] },
  e: 'b>a:5 a>c:4 c>b:-7 b>c:5 d>b:6 c>d:3 d>e:1 f>g:3 g>f:4', bend: { 'c>b': 0.25, 'b>c': 0.25, 'f>g': -0.3, 'g>f': -0.3 } };
Q({ id: 'm21b-4', ch: 'g1', src: S, type: 'mcq',
  q: `In what order are vertices <b>finished</b> (discovered and fully explored) by DFS starting from vertex a? (alphabetical tie-breaking)`,
  fig: G(dg),
  opts: ['b → e → d → c → a', 'b → e → d → c → a → g → f', 'a → c → b → d → e → f → g', 'All the above answers are incorrect'], ans: 1,
  sol: `a → c (only edge out of a). From c try b: b's neighbours a, c are gray → <b>b finishes</b>. Back at c try d → e: <b>e finishes</b>, then <b>d</b>, <b>c</b>, <b>a</b>. DFS restarts at the unvisited vertex f → g: <b>g</b>, then <b>f</b>. Option (a) forgets the second tree.` });
Q({ id: 'm21b-5', ch: 'g3', src: S, type: 'mcq', q: `To find the shortest path from vertex a to every other vertex in the same graph, we can use:`,
  fig: G(dg),
  opts: ["Dijkstra's algorithm", 'Bellman-Ford algorithm', 'Both (a) and (b)', 'All the above answers are incorrect'], ans: 3,
  sol: `The cycle b → c → b weighs 5 + (−7) = −2: a <b>negative-weight cycle</b> reachable from a. Shortest paths to b, c, d, e are undefined (−∞). Bellman-Ford would only <i>detect</i> the cycle; Dijkstra fails. So neither.` });
Q({ id: 'm21b-6', ch: 'g1', src: S, type: 'mcq', q: `To pass through <b>each vertex</b> of the same graph, we can use:`,
  fig: G(dg),
  opts: ['Breadth-first search', 'Depth-first search', 'Both (a) and (b)', 'Neither'], ans: 1,
  sol: `The graph is not connected ({f, g} is unreachable from a). DFS, as defined in the course (CLRS), loops over <i>all</i> vertices and restarts from each white one, producing a forest that covers every vertex. BFS(G, s) only reaches vertices reachable from s.` });

const dj = { n: { a: [585, 385], b: [840, 385], c: [462, 468], d: [718, 468], e: [950, 468], f: [585, 552], g: [840, 552] },
  e: 'a>b:2 c>a:4 a>d:1 b>d:3 b>e:10 d>c:2 d>e:3 c>f:5 d>f:8 d>g:4 e>g:6 f>g:1' };
Q({ id: 'm21b-dj', ch: 'g3', src: S, type: 'open',
  q: `Run <b>Dijkstra's algorithm</b> from a. (i) Fill d and π for every vertex. (ii) In which order are vertices removed from the priority queue?`,
  fig: G(dj),
  sol: tbl([['Vertex', 'a', 'b', 'c', 'd', 'e', 'f', 'g'], ['d', '0', '2', '3', '1', '4', '8', '5'], ['π', 'nil', 'a', 'd', 'a', 'd', 'c', 'd']]) +
    `<p>a(0): b 2, d 1. d(1): c 3, e 4, f 9, g 5. b(2): no change (d 5, e 12). c(3): f = 8 (3 + 5 &lt; 9). e(4): g stays 5. g(5). f(8).</p>
     <p><b>Order: a, d, b, c, e, g, f.</b></p>`,
  solFig: G(Object.assign({ hl: 'a>b a>d d>c d>e c>f d>g', lab: { a: '0', b: '2', c: '3', d: '1', e: '4', f: '8', g: '5' } }, dj)) });

const pr = { n: { D: [280, 447], E: [627, 395], C: [866, 387], B: [514, 457], F: [746, 477], I: [986, 437], G: [1104, 437], A: [401, 523], H: [866, 490] },
  e: 'D-E:80 D-B:90 D-A:100 E-B:50 E-F:110 E-C:120 B-A:10 B-F:40 A-F:30 A-H:20 F-H:140 C-I:70 C-G:60 I-G:150 I-H:130 H-G:160' };
Q({ id: 'm21b-pr', ch: 'g2', src: S, type: 'open',
  q: `For this weighted undirected graph: (i) give the order in which edges are added to the MST by <b>Prim's algorithm</b> starting at A; (ii) draw the MST; (iii) give its total cost.`,
  fig: G(pr),
  sol: `<p>A: keys B 10, H 20, F 30, D 100. Add <b>A–B</b> (10) → E 50, D 90. Add <b>A–H</b> (20) → I 130, G 160. Add <b>A–F</b> (30). Add <b>B–E</b> (50) → D 80, C 120. Add <b>D–E</b> (80). Add <b>E–C</b> (120) → I 70, G 60. Add <b>C–G</b> (60). Add <b>C–I</b> (70).</p>
    <p><b>Order: A-B, A-H, A-F, B-E, D-E, E-C, C-G, C-I. Total cost = 440.</b></p>`,
  solFig: G(Object.assign({ hl: 'B-A A-H A-F E-B D-E E-C C-G C-I' }, pr)) });

Q({ id: 'm21b-hs', ch: 'heap', src: S, type: 'open',
  q: `Illustrate heapsort on A = {4, 6, 2, 1, 7}, assuming the max-heap has already been built. Draw the heap, then show the tree and array after each step.`,
  sol: `<p>Max-heap: <b>[7, 6, 2, 1, 4]</b> (root 7; children 6, 2; 6's children 1, 4).</p>` +
    tbl([['Step', 'swap root ↔ last, then MAX-HEAPIFY', 'Array'], ['1', '7 ↔ 4 → [4, 6, 2, 1 | 7] → heapify', '6, 4, 2, 1 | 7'], ['2', '6 ↔ 1 → [1, 4, 2 | 6, 7] → heapify', '4, 1, 2 | 6, 7'], ['3', '4 ↔ 2 → [2, 1 | 4, 6, 7]', '2, 1 | 4, 6, 7'], ['4', '2 ↔ 1', '1 | 2, 4, 6, 7']]) +
    `<p>Sorted: <b>1, 2, 4, 6, 7</b>.</p>`,
  fig: TREE([7, 6, 2, 1, 4]) });

Q({ id: 'm21b-kr', ch: 'g2', src: S, type: 'open',
  q: `Consider MST-KRUSKAL:` + code(`MST-KRUSKAL(G, w)
1  A = ∅
2  for each vertex v ∈ G.V
3      MAKE-SET(v)
4  sort the edges of G.E into nondecreasing order by weight w
5  for each edge (u, v) ∈ G.E, taken in nondecreasing order by weight
6      if FIND-SET(u) ≠ FIND-SET(v)
7          A = A ∪ {(u, v)}
8          UNION(u, v)
9  return A`) + `a) If the edge weights are uniformly distributed over [0, 1), how can Kruskal be made more efficient? b) What is the overall time complexity of the modified algorithm?`,
  sol: `<p><b>a)</b> Replace the comparison sort on line 4 with <b>bucket sort</b>: uniform keys in [0, 1) are sorted in expected O(E) time instead of O(E lg E).</p>
    <p><b>b)</b> Lines 2–3: O(V). Line 4: O(E) expected. Lines 5–8: E FIND-SET/UNION operations. The model answer gives <b>O(V + E + E lg V) = O(E lg V)</b>, counting each disjoint-set operation as O(lg V). (With union by rank + path compression they cost O(α(V)), making the whole algorithm almost linear, O(E α(V)) expected.)</p>` });
}
