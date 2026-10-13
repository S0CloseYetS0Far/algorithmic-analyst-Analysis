/* Quiz 2, 2025 — 2nd semester (no key: solved here) */
{
const S = 'Quiz 2 2025 S2';
Q({ id: 'qz25b-bh', ch: 'heap', src: S, type: 'open', q: `What does the max-heap look like (as an array and as a binary tree) after running BUILD-MAX-HEAP on [5, 3, 8, 4, 1, 7, 9]?`,
  fig: TREE([5, 3, 8, 4, 1, 7, 9]),
  sol: `<p>n = 7 → heapify i = 3, 2, 1.</p>
    <p>i = 3 (8; children 7, 9): swap with 9 → [5, 3, 9, 4, 1, 7, 8].</p>
    <p>i = 2 (3; children 4, 1): swap with 4 → [5, 4, 9, 3, 1, 7, 8].</p>
    <p>i = 1 (5; children 4, 9): swap with 9 → [9, 4, 5, 3, 1, 7, 8]; continue at i = 3 (5; children 7, 8): swap with 8 → <b>[9, 4, 8, 3, 1, 7, 5]</b>.</p>`,
  solFig: TREE([9, 4, 8, 3, 1, 7, 5]) });
Q({ id: 'qz25b-1', ch: 'heap', src: S, type: 'mcq', q: `Heap sort is:`, opts: ['Stable and in-place', 'Unstable and in-place', 'Stable and not in-place', 'Unstable and not in-place'], ans: 1, sol: `In place (O(1) extra), but the root-to-end swaps can reorder equal keys → unstable.` });
const bg = { n: { A: [400, 70], B: [205, 190], C: [625, 175], E: [135, 430], D: [455, 410], F: [775, 400], G: [480, 635] }, e: 'A-B A-C A-D B-E C-E C-F D-F E-G F-G' };
Q({ id: 'qz25b-2', ch: 'g1', src: S, type: 'mcq', q: `Starting from vertex A, give the BFS traversal (alphabetical order).`, fig: G(bg),
  opts: ['A → B → C → D → E → F → G', 'A → C → D → B → F → E → G', 'A → B → D → C → G → E → F', 'A → D → C → B → F → E → G'], ans: 0,
  sol: `Dequeue A: enqueue B, C, D. Dequeue B: enqueue E. Dequeue C: E seen, enqueue F. Dequeue D: F seen. Dequeue E: enqueue G. Order A, B, C, D, E, F, G.` });
const wg = { n: { A: [60, 60], B: [300, 60], C: [60, 260], D: [300, 260] }, e: 'A>B:1 A>C:4 B>C:2 B>D:6 C>D:3' };
Q({ id: 'qz25b-3', ch: 'g2', src: S, type: 'mcq', q: `Find the MST and its weight for graph G (edges A–B 1, A–C 4, B–C 2, B–D 6, C–D 3; treat as undirected).`, fig: G({ n: wg.n, e: 'A-B:1 A-C:4 B-C:2 B-D:6 C-D:3' }),
  opts: ['{A–C, B–C}, 6', '{A–B, A–C, C–D}, 8', '{A–B, B–C, C–D}, 6', '{A–B, C–D}, 4'], ans: 2,
  sol: `Kruskal: AB 1 ✓, BC 2 ✓, CD 3 ✓ (3 edges for 4 vertices). Weight 6. (a) and (d) don't span all vertices.` });
Q({ id: 'qz25b-41', ch: 'g3', src: S, type: 'mcq', q: `Same graph G (directed as listed). In what order are nodes visited (extracted) by Dijkstra's algorithm from A?`, fig: G(wg),
  opts: ['A → B → C → D', 'A → C → B → D', 'A → B → D → C', 'A → C → D → B'], ans: 0,
  sol: `A(0): B 1, C 4. B(1): C = 3, D = 7. C(3): D = 6. D(6).` });
Q({ id: 'qz25b-42', ch: 'g3', src: S, type: 'mcq', q: `Shortest path from A to D (Dijkstra) in graph G:`, fig: G(wg),
  opts: ['A → B → D (cost 7)', 'A → C → D (cost 7)', 'A → B → C → D (cost 6)', 'A → D (cost 10)'], ans: 2, sol: `1 + 2 + 3 = 6.` });
Q({ id: 'qz25b-5', ch: 'g3', src: S, type: 'mcq', q: `Which is NOT a property of the Bellman-Ford algorithm?`, opts: ['It works with graphs containing negative weights', 'It detects negative-weight cycles', 'It finds shortest paths from a single source to all vertices', 'It uses a priority queue for optimization'], ans: 3,
  sol: `Bellman-Ford just relaxes every edge |V| − 1 times — no priority queue (that's Dijkstra).` });
}
