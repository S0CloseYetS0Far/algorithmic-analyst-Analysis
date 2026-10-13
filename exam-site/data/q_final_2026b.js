/* Final 2026 — 2nd semester (no key: solved here) */
{
const S = 'Final 2026 S2';

Q({ id: 'f26b-1', ch: 'dc', src: S, type: 'mcq',
  q: `Solve <span class="m">T(n) = 2T(n/2) + n</span>, T(1) = 1, with the <b>iteration method</b>. What is T(n) after expanding to the k<sup>th</sup> step?`,
  opts: ['T(n) = 2<sup>k</sup> T(n/2<sup>k</sup>) + k·n', 'T(n) = 2<sup>k</sup> T(n/2<sup>k</sup>) + Σ<sub>i=0</sub><sup>log n</sup> n/2<sup>i</sup>', 'T(n) = 2T(n/2<sup>k</sup>) + k·n', 'T(n) = 2<sup>k</sup> T(n/2<sup>k</sup>) + n<sup>k</sup>'], ans: 0,
  sol: `<p>T(n) = 2T(n/2) + n = 2[2T(n/4) + n/2] + n = 4T(n/4) + 2n = 8T(n/8) + 3n = … = <b>2<sup>k</sup>T(n/2<sup>k</sup>) + kn</b>.</p>
        <p>Each level contributes exactly n. Stop at n/2<sup>k</sup> = 1 → k = lg n, so T(n) = n·T(1) + n lg n = Θ(n lg n).</p>` });

Q({ id: 'f26b-2', ch: 'linsort', src: S, type: 'mcq',
  q: `Input A = [1, 3, 2, 5, 4, 3, 7, 6, 2, 1]. When <b>Counting Sort</b> is applied, what is the counter array C after the <b>third loop</b> completes?`,
  opts: ['C = [2, 2, 2, 1, 1, 1, 1]', 'C = [2, 4, 6, 7, 8, 9, 10]', 'C = [1, 3, 5, 6, 7, 8, 9]', 'C = [2, 4, 5, 6, 8, 9, 10]'], ans: 1,
  sol: `<p>Loop 1 zeroes C. Loop 2 counts occurrences of values 1..7: [2, 2, 2, 1, 1, 1, 1]. Loop 3 makes it cumulative (C[i] = number of elements ≤ i):</p>
        <p class="m">[2, 4, 6, 7, 8, 9, 10]</p><p>(Loop 4 then places elements into B from right to left.)</p>` });

Q({ id: 'f26b-3', ch: 'dc', src: S, type: 'mcq',
  q: `If a problem can be solved by combining solutions of <b>non-overlapping</b> sub-problems, the strategy is called:`,
  opts: ['Dynamic programming', 'Greedy', 'Divide and conquer', 'Brute force'], ans: 2,
  sol: `Divide & conquer splits into independent (disjoint) subproblems. Dynamic programming is used when subproblems <i>overlap</i>.` });

Q({ id: 'f26b-4', ch: 'linsort', src: S, type: 'mcq',
  q: `Which statement is TRUE regarding Radix Sort?`,
  opts: ['Radix Sort is a comparison-based sorting algorithm.', 'Radix Sort starts the sorting from the Most Significant Digit.', 'Radix Sort must use a stable sorting algorithm.', 'The space complexity of Radix Sort is always O(1).'], ans: 2,
  sol: `LSD radix sort sorts digit by digit starting from the <i>least</i> significant digit, and each pass must be stable so the order from earlier digits is preserved. It is not comparison-based and needs extra space (e.g., counting sort uses O(n + k)).` });

Q({ id: 'f26b-5', ch: 'dc', src: S, type: 'mcq',
  q: `Using the master method on <span class="m">T(n) = ½ T(n/2) + 2n</span>:`,
  opts: ['Case 1, T(n) = Θ(n<sup>log 0.5</sup>)', 'Case 2, T(n) = Θ(n<sup>log 0.5</sup> log n)', 'Case 3, T(n) = Θ(n)', 'Master method cannot be used.'], ans: 3,
  sol: `The master theorem requires a ≥ 1 and b &gt; 1. Here a = ½ &lt; 1 (fewer than one subproblem makes no sense), so it does not apply.` });

Q({ id: 'f26b-6', ch: 'np', src: S, type: 'mcq',
  q: `Which statement best describes a <b>Hamiltonian cycle</b>?`,
  opts: ['A cycle that visits every edge of a graph exactly once.', 'A cycle that contains all the vertices of the graph exactly once and returns to the starting vertex.', 'A path that contains all the edges of the graph exactly once.', 'A path that connects two vertices using the minimum total weight.'], ans: 1,
  sol: `Hamiltonian = every <b>vertex</b> exactly once, returning to the start. (Every <i>edge</i> once is an Euler tour.)` });

Q({ id: 'f26b-7', ch: 'g1', src: S, type: 'mcq',
  q: `BFS on a graph stored as an adjacency list with V vertices and E edges runs in:`,
  opts: ['O(V²)', 'O(E log V)', 'O(V + E)', 'O(VE)'], ans: 2,
  sol: `Each vertex is enqueued/dequeued once (O(V)) and each adjacency list is scanned once (O(E)). With an adjacency matrix it would be O(V²).` });

Q({ id: 'f26b-8', ch: 'g1', src: S, type: 'mcq',
  q: `Running DFS on a graph with several disconnected components — which statement is correct?`,
  opts: ['DFS always produces exactly one DFS tree regardless of the graph structure.', 'DFS cannot be applied to disconnected graphs.', 'DFS produces multiple trees only when the graph contains cycles.', 'DFS may produce more than one DFS tree, resulting in a DFS forest.'], ans: 3,
  sol: `DFS restarts from every still-white vertex, so each restart creates a new tree → a depth-first forest.` });

Q({ id: 'f26b-9', ch: 'g3', src: S, type: 'mcq',
  q: `At each step of Dijkstra's algorithm, which vertex is selected next?`,
  opts: ['The unvisited vertex with the largest degree.', 'The unvisited vertex with the smallest distance from the source.', 'A random unvisited vertex.', 'The most recently visited vertex.'], ans: 1,
  sol: `EXTRACT-MIN on the priority queue: the vertex with the smallest tentative distance d[v] — the greedy choice.` });

Q({ id: 'f26b-10', ch: 'g3', src: S, type: 'mcq',
  q: `When Dijkstra's algorithm terminates, what information do we get?`,
  opts: ['Only the shortest path to one destination.', 'The minimum spanning tree of the graph.', 'All cycles in the graph.', 'The shortest distance from the source to every reachable vertex.'], ans: 3,
  sol: `It solves the <i>single-source</i> shortest-path problem: d[v] for every vertex (and π gives the shortest-path tree).` });

/* NP word bank */
const bank = ['P', 'NP', 'NP-Complete', 'NP-Hard', 'Nondeterministic polynomial', 'shortest', 'longest', 'Non polynomial', 'Heuristics', 'Approximation algorithms', 'P = NP', 'Graph coloring problem', 'Sorting', 'Brute force', 'A ≤<sub>p</sub> B', 'B ≤<sub>p</sub> A', 'Minimization', 'Maximization', 'CIRCUIT-SAT'];
const fb = (id, q, ans, sol) => Q({ id, ch: 'np', src: S, type: 'mcq', bank: true, q: q + ' <span class="hint">(word bank)</span>', opts: bank, ans, sol });
fb('f26b-fb1', `______ is an intractable problem.`, 11, `Graph coloring (deciding k-colorability) is NP-complete — no known polynomial algorithm.`);
fb('f26b-fb2', `Finding the lowest production costs through better selection of existing resources is a type of ______ problem.`, 16, `"Lowest cost" → minimization (an optimization problem).`);
fb('f26b-fb3', `Any tractable problem is a ______ problem.`, 0, `Tractable = solvable in polynomial time = class P.`);
fb('f26b-fb4', `______ is a tractable problem.`, 12, `Sorting runs in O(n lg n) — polynomial.`);
fb('f26b-fb5', `Any P problem is an ______ problem.`, 1, `P ⊆ NP: if you can solve it in polynomial time you can certainly verify it.`);
fb('f26b-fb6', `NP stands for ______.`, 4, `Nondeterministic Polynomial (time).`);
fb('f26b-fb7', `It has not been proven yet that ______.`, 10, `P = NP (or P ≠ NP) is still open.`);
fb('f26b-fb8', `If A ≤<sub>p</sub> B and A is NP, B is ______.`, 1, `The course slides state the theorem "If R ≤<sub>p</sub> Q and R is NP, Q is also NP", so the expected answer is <b>NP</b>. (Strictly, a reduction only says B is at least as hard as A; membership of B in NP does not follow in general.)`);
Q({ id: 'f26b-fb9', ch: 'np', src: S, type: 'mcq',
  q: `Finding the ______ path problem is a P problem, while finding the ______ path is an NP-Complete problem.`,
  opts: ['shortest … longest', 'longest … shortest', 'shortest … shortest', 'longest … longest'], ans: 0,
  sol: `Shortest paths: Dijkstra / Bellman-Ford (polynomial). Longest simple path: NP-complete (it generalises Hamiltonian path).` });
fb('f26b-fb10', `If A ≤<sub>p</sub> B and A is NP-Complete, then B is ______.`, 3, `Every NP problem reduces to A and hence to B → B is NP-Hard (NP-complete only if B ∈ NP as well).`);
fb('f26b-fb11', `To prove a problem A is NP-complete, we need to find a known NP-complete problem B where ______.`, 15, `Reduce the known hard problem <i>to</i> the new one: B ≤<sub>p</sub> A (and show A ∈ NP).`);
fb('f26b-fb12', `Let A be a problem in NP. If A is not NP-hard, then it is not ______.`, 2, `NP-Complete = NP ∩ NP-Hard.`);
fb('f26b-fb13', `If we find an algorithm that solves 3-SAT in polynomial time, then the Hamiltonian cycle problem becomes a ______ problem.`, 0, `3-SAT is NP-complete, so every NP problem (including Hamiltonian cycle) reduces to it → all of NP would be in P.`);
fb('f26b-fb14', `The first NP-complete problem is the ______.`, 18, `Cook–Levin theorem: satisfiability was the first problem proven NP-complete; in CLRS the starting point is CIRCUIT-SAT — the only option in this word bank.`);
fb('f26b-fb15', `To solve NP-complete problems, use ______ that are guaranteed to be within some factor of the optimum.`, 9, `Approximation algorithms come with a guaranteed ratio; heuristics do not.`);
fb('f26b-fb16', `Do not use the ______ approach to solve the 3-SAT problem in reasonable time.`, 13, `Brute force checks all 2<sup>n</sup> assignments.`);

/* Bellman-Ford */
const bf = { n: { A: [340, 508], B: [462, 442], C: [466, 570], D: [570, 502] }, e: 'A>B:4 A>C:5 B>C:-2 B>D:6 D>B:1 C>D:3' };
Q({ id: 'f26b-bf', ch: 'g3', src: S, type: 'open',
  q: `Apply the <b>Bellman-Ford algorithm</b> from source <b>A</b>, relaxing edges in the order <span class="m">BC → BD → DB → CD → AB → AC</span>. Fill the d and π table after <b>each pass</b>.`,
  fig: G(bf),
  sol: `<p>Initial: d = (A 0, B ∞, C ∞, D ∞), π all nil.</p>
    <p><b>Pass 1</b> — BC, BD, DB, CD: tails are ∞, nothing changes. AB: d[B] = 4, π = A. AC: d[C] = 5, π = A.</p>` +
    tbl([['Pass 1', 'A', 'B', 'C', 'D'], ['d', '0', '4', '5', '∞'], ['π', '—', 'A', 'A', '—']]) +
    `<p><b>Pass 2</b> — BC: 4 + (−2) = 2 &lt; 5 → d[C] = 2, π = B. BD: 4 + 6 = 10 → d[D] = 10, π = B. DB: 11 &gt; 4, no. CD: 2 + 3 = 5 &lt; 10 → d[D] = 5, π = C. AB, AC: no change.</p>` +
    tbl([['Pass 2', 'A', 'B', 'C', 'D'], ['d', '0', '4', '2', '5'], ['π', '—', 'A', 'B', 'C']]) +
    `<p><b>Pass 3</b> (|V| − 1 = 3) — no edge relaxes (DB: 6 &gt; 4; BD: 10 &gt; 5 …). Table unchanged.</p>` +
    tbl([['Pass 3', 'A', 'B', 'C', 'D'], ['d', '0', '4', '2', '5'], ['π', '—', 'A', 'B', 'C']]) +
    `<p>Final check finds no further relaxation → no negative cycle (cycle B→C→D→B weighs −2 + 3 + 1 = 2). Shortest paths: B: A→B (4), C: A→B→C (2), D: A→B→C→D (5).</p>`,
  solFig: G(Object.assign({ hl: 'A>B B>C C>D', lab: { A: '0', B: '4', C: '2', D: '5' } }, bf)) });

const gAlg = ['BFS', 'DFS', "Prim's", "Kruskal's", "Dijkstra's", 'Bellman-Ford'];
const sc = (id, q, ans, sol) => Q({ id, ch: 'g3', src: S, type: 'mcq', q: `<span class="hint">Choose the most suitable graph algorithm.</span> ` + q, opts: gAlg, ans, sol });
sc('f26b-sc1', `An ISP wants to connect all cities with fiber-optic cables at minimum installation cost. The network is <b>dense</b>, with many possible connections.`, 2, `MST on a dense graph → Prim (O(V²) with an array, or O(E lg V)) avoids sorting all the many edges.`);
sc('f26b-sc2', `A financial network has transactions with gains or losses (<b>negative</b> edge weights). Find the minimum cost from one account to all others and detect suspicious negative cycles.`, 5, `Negative weights + negative-cycle detection → Bellman-Ford.`);
sc('f26b-sc3', `A security analyst checks whether a compromised machine can reach a sensitive server, exploring each connection as deeply as possible before backtracking.`, 1, `"As deep as possible, then backtrack" → DFS.`);
sc('f26b-sc4', `A government builds a railway connecting all towns at minimum total construction cost. The list of possible segments is <b>already sorted</b> by cost.`, 3, `MST with pre-sorted edges → Kruskal.`);
sc('f26b-sc5', `A ride-sharing app needs the cheapest route from the driver's location to every other location; all road costs are positive.`, 4, `Single source, non-negative weights → Dijkstra.`);

const mst = { n: { B: [325, 888], C: [490, 880], A: [680, 885], D: [250, 1025], E: [500, 1020], F: [680, 1015] }, e: 'B-C:10 C-A:3 B-D:4 D-C:2 C-E:6 E-A:2 D-E:1 E-F:3' };
Q({ id: 'f26b-kr', ch: 'g2', src: S, type: 'open',
  q: `Build the minimum cost spanning tree with <b>Kruskal's algorithm</b>: give the order in which edges are added, draw the MCST and give its cost.`,
  fig: G(mst),
  sol: `<p>Sorted edges: DE 1, DC 2, EA 2, CA 3, EF 3, BD 4, CE 6, BC 10.</p>` +
    tbl([['Step', 'Edge', 'Action'], ['1', 'D–E (1)', 'add'], ['2', 'D–C (2)', 'add'], ['3', 'E–A (2)', 'add'], ['4', 'C–A (3)', 'reject — C and A already connected (C–D–E–A)'], ['5', 'E–F (3)', 'add'], ['6', 'B–D (4)', 'add → 5 edges, done']]) +
    `<p><b>Order added: DE, DC, EA, EF, BD. Cost = 1 + 2 + 2 + 3 + 4 = 12.</b></p>`,
  solFig: G(Object.assign({ hl: 'D-E D-C E-A E-F B-D' }, mst)) });

Q({ id: 'f26b-pr', ch: 'g2', src: S, type: 'open',
  q: `Same graph — build the MCST with <b>Prim's algorithm</b> starting at <b>A</b> (alphabetical tie-breaking). Give the order in which vertices leave the queue, draw the tree and give its cost.`,
  fig: G(mst),
  sol: tbl([['Extract', 'key updates (key / π)'],
    ['A (0)', 'C = 3 / A,  E = 2 / A'],
    ['E (2)', 'D = 1 / E,  F = 3 / E  (C stays 3)'],
    ['D (1)', 'C = 2 / D,  B = 4 / D'],
    ['C (2)', 'B stays 4 (10 &gt; 4)'],
    ['F (3)', '—'],
    ['B (4)', '—']]) +
    `<p><b>Order: A, E, D, C, F, B.</b> Tree edges: A–E 2, E–D 1, D–C 2, E–F 3, D–B 4. <b>Cost = 12</b> (same tree as Kruskal).</p>`,
  solFig: G(Object.assign({ hl: 'E-A D-E D-C E-F B-D' }, mst)) });

Q({ id: 'f26b-lp', ch: 'lp', src: S, type: 'open',
  q: `Maximize <span class="m">z = 5x<sub>1</sub> + 3x<sub>2</sub></span> subject to <span class="m">2x<sub>1</sub> + 4x<sub>2</sub> ≤ 8</span>, <span class="m">x<sub>1</sub>, x<sub>2</sub> ≥ 0</span>.<br>(A) Apply the <b>simplex algorithm</b>, showing all details. (B) Give x<sub>1</sub>, x<sub>2</sub> and z.`,
  sol: `<p>Add slack s<sub>1</sub>: 2x<sub>1</sub> + 4x<sub>2</sub> + s<sub>1</sub> = 8; objective row z − 5x<sub>1</sub> − 3x<sub>2</sub> = 0.</p>` +
    tbl([['Basic', 'z', 'x1', 'x2', 's1', 'b', 'ratio'], ['z', '1', '−5', '−3', '0', '0', ''], ['s1', '0', '2', '4', '1', '8', '8/2 = 4']], { hl: [[2, 2]] }) +
    `<p>Pivot column x<sub>1</sub> (most negative, −5); only row s<sub>1</sub> → pivot = 2. R2 ← R2/2, then R1 ← R1 + 5·R2:</p>` +
    tbl([['Basic', 'z', 'x1', 'x2', 's1', 'b'], ['z', '1', '0', '7', '5/2', '20'], ['x1', '0', '1', '2', '1/2', '4']]) +
    `<p>No negative entries in the z row → optimal.</p><p><b>x<sub>1</sub> = 4, x<sub>2</sub> = 0, z = 20.</b></p>` });
}
