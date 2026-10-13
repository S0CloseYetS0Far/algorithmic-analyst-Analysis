/* Final 2024 — 1st semester (model answer shown in class) */
{
const S = 'Final 2024 S1';

Q({ id: 'f24a-1', ch: 'anB', src: S, type: 'mcq',
  q: `What is the closest time complexity of <span class="m">f(n) = n log 4 + log n</span>?`,
  opts: ['O(n)', 'O(n log n)', 'O(log n)', 'O(n log(n²))'], ans: 0,
  sol: `log 4 is a constant, so n log 4 = Θ(n), which dominates log n → O(n).` });

Q({ id: 'f24a-2', ch: 'np', src: S, type: 'mcq',
  q: `To which class does the CNF-satisfiability problem belong?`,
  opts: ['NP', 'P', 'NP-complete', 'NP-hard', 'All answers are incorrect'], ans: 2,
  sol: `CNF-SAT is in NP (a truth assignment is checked in polynomial time) and is NP-hard (Cook–Levin), hence NP-complete — the most precise answer.` });

Q({ id: 'f24a-3', ch: 'dc', src: S, type: 'mcq',
  q: `Using the master method, <span class="m">T(n) = 2T(n/2) + n log n</span> is:`,
  opts: ['Θ(n)', 'Θ(n log n)', 'Θ(log n)', "Can't solve"], ans: 3,
  sol: `n<sup>log<sub>2</sub>2</sup> = n. f(n) = n lg n is larger than n, but not <i>polynomially</i> larger (n lg n / n = lg n &lt; n<sup>ε</sup> for every ε &gt; 0). It falls in the gap between case 2 and case 3, so the basic master method cannot solve it. (The answer is Θ(n lg² n), e.g. by a recursion tree.)` });

Q({ id: 'f24a-4', ch: 'dp', src: S, type: 'mcq',
  q: `A 0/1 knapsack problem has 6 items. How many item combinations must the brute-force approach examine?`,
  opts: ['6', '12', '32', '64'], ans: 3,
  sol: `Each item is in or out → 2<sup>6</sup> = 64 subsets.` });

Q({ id: 'f24a-5', ch: 'dp', src: S, type: 'mcq',
  q: `Which technique efficiently solves optimization problems by breaking them into smaller <b>overlapping</b> subproblems while avoiding redundant calculations?`,
  opts: ['Divide and conquer', 'Branch and bound', 'Dynamic programming', 'Greedy'], ans: 2,
  sol: `Overlapping subproblems + storing results (table/memo) = dynamic programming.` });

Q({ id: 'f24a-6', ch: 'np', src: S, type: 'mcq',
  q: `For the graph coloring problem, which statement is the <b>optimization</b> version?`,
  opts: ['For a graph G = (V, E) and an integer k, can G be colored using k colors?', 'Determine the chromatic number of a graph G = (V, E).', 'For G and k, how many distinct k-colorings are possible?', 'None of the above.'], ans: 1,
  sol: `Finding the minimum number of colors (chromatic number) is the optimization problem; "can it be colored with k colors?" is the decision version.` });

Q({ id: 'f24a-7', ch: 'g3', src: S, type: 'mcq',
  q: `Shortest paths to all vertices of a graph from a given vertex are obtained by:`,
  opts: ["Kruskal's algorithm", 'BFS', "Dijkstra's algorithm", 'DFS'], ans: 2,
  sol: `Single-source shortest paths on a weighted graph → Dijkstra. (BFS only works if all edges have equal weight; Kruskal builds an MST.)` });

Q({ id: 'f24a-8', ch: 'g1', src: S, type: 'mcq',
  q: `The Breadth First Search algorithm uses a ______ data structure for its implementation.`,
  opts: ['Queue', 'Stack', 'Tree', 'All the above answers are incorrect'], ans: 0,
  sol: `BFS processes vertices in FIFO order using a queue (DFS uses a stack / recursion).` });

Q({ id: 'f24a-9', ch: 'sort1', src: S, type: 'mcq',
  q: `List = [7, 11, 3, 10, 17, 23, 1, 4, 21, 5]. What is the partially sorted list after <b>three complete passes</b> of insertion sort in <b>descending</b> order?`,
  opts: ['11, 10, 7, 3, 17, 23, 1, 4, 21, 5', '11, 17, 23, 10, 7, 21, 5, 4, 3, 1', '3, 7, 11, 10, 17, 23, 1, 4, 21, 5', '23, 21, 17, 10, 3, 7, 1, 4, 11, 5', 'None of the above'], ans: 0,
  sol: `Pass 1 inserts 11 → [11, 7, 3, …]. Pass 2 inserts 3 → [11, 7, 3, …] (already in place). Pass 3 inserts 10 → [11, 10, 7, 3, 17, 23, 1, 4, 21, 5]. Only the first four elements are sorted so far.` });

Q({ id: 'f24a-10', ch: 'sort1', src: S, type: 'mcq',
  q: `What is the recurrence relation of Merge Sort?`,
  opts: ['T(n) = T(n−2) + O(n)', 'T(n) = T(n−1) + O(n)', 'T(n) = 2T(n/2) + O(n)', 'T(n) = T(n/2) + T(n) + O(1)'], ans: 2,
  sol: `Two halves sorted recursively, then a linear-time MERGE: T(n) = 2T(n/2) + Θ(n) = Θ(n lg n).` });

Q({ id: 'f24a-asy', ch: 'anB', src: S, type: 'open',
  q: `For each pair f(n) (rows) and g(n) (columns), write O, Ω or Θ depending on whether f = O(g), f = Ω(g) or f = Θ(g). Give only the strongest relation (lg = log<sub>2</sub>).` +
    tbl([['f \\ g', 'n', 'n lg n', 'n²'], ['n lg² n', '', '', ''], ['2<sup>lg² n</sup>', '', '', ''], ['lg(n!)', '', '', ''], ['n<sup>lg 3</sup>', '', '', '']]),
  sol: tbl([['f \\ g', 'n', 'n lg n', 'n²'], ['n lg² n', 'Ω', 'Ω', 'O'], ['2<sup>lg² n</sup>', 'Ω', 'Ω', 'Ω'], ['lg(n!)', 'Ω', 'Θ', 'O'], ['n<sup>lg 3</sup>', 'Ω', 'Ω', 'O']]) +
    `<ul><li>n lg² n = (n lg n)·lg n: above n lg n, below n².</li>
     <li>2<sup>lg² n</sup> = (2<sup>lg n</sup>)<sup>lg n</sup> = n<sup>lg n</sup>: super-polynomial, above all three.</li>
     <li>lg(n!) = Θ(n lg n) (Stirling).</li>
     <li>n<sup>lg 3</sup> ≈ n<sup>1.585</sup>: between n lg n and n².</li></ul>` });

Q({ id: 'f24a-mm', ch: 'dc', src: S, type: 'open',
  q: `Solve with the master method: <span class="m">T(n) = 2T(n/3) + n²</span>.`,
  sol: `<p>a = 2, b = 3, n<sup>log<sub>3</sub>2</sup> ≈ n<sup>0.63</sup>. f(n) = n² = Ω(n<sup>0.63 + ε</sup>) (e.g. ε = 1).</p>
        <p>Regularity: a·f(n/b) = 2(n/3)² = (2/9)n² ≤ c·n² with c = 2/9 &lt; 1 ✓.</p>
        <p><b>Case 3 → T(n) = Θ(n²).</b></p>` });

Q({ id: 'f24a-cs', ch: 'linsort', src: S, type: 'open',
  q: `Sort {2, 5, 3, 0, 2, 3, 0, 3} with counting sort.<br>1) C after the cumulative sum. 2) The first element placed into B and where. 3) C after placing it. 4) B after the second element is placed.`,
  fig: ARR([2, 5, 3, 0, 2, 3, 0, 3], { base: 1 }),
  sol: tbl([['index', '0', '1', '2', '3', '4', '5'], ['counts', '2', '0', '2', '3', '0', '1'], ['C (cumulative)', '2', '2', '4', '7', '7', '8']]) +
    `<p>Scan A from the right. A[8] = 3 → B[C[3]] = B[7] = 3, then C[3] = 6:</p>` +
    tbl([['B', '1', '2', '3', '4', '5', '6', '7', '8'], ['after 1st', '', '', '', '', '', '', '3', '']]) +
    tbl([['index', '0', '1', '2', '3', '4', '5'], ['C', '2', '2', '4', '6', '7', '8']]) +
    `<p>A[7] = 0 → B[C[0]] = B[2] = 0, then C[0] = 1:</p>` +
    tbl([['B', '1', '2', '3', '4', '5', '6', '7', '8'], ['after 2nd', '', '0', '', '', '', '', '3', '']]) });

const g = { n: { 1: [380, 510], 2: [655, 490], 3: [255, 650], 4: [515, 635], 5: [795, 618], 6: [380, 775], 7: [650, 765] },
  e: '1>2:2 1>4:1 2>4:3 2>5:10 3>1:4 3>6:5 4>3:2 4>5:2 4>6:8 4>7:4 5>7:6 7>6:1' };
Q({ id: 'f24a-g1', ch: 'g1', src: S, type: 'open',
  q: `For this directed graph: (1) What is the degree of vertex 4? What is the in-degree of vertex 6? (2) Show the adjacency-list representation.`,
  fig: G(g),
  sol: `<p><b>deg(4) = 6</b> (in: 1→4, 2→4; out: 4→3, 4→5, 4→6, 4→7). <b>in-deg(6) = 3</b> (3→6, 4→6, 7→6).</p>` +
    tbl([['vertex', 'adjacency list (neighbour, weight)'], ['1', '→ (2, 2) → (4, 1)'], ['2', '→ (4, 3) → (5, 10)'], ['3', '→ (1, 4) → (6, 5)'], ['4', '→ (3, 2) → (5, 2) → (6, 8) → (7, 4)'], ['5', '→ (7, 6)'], ['6', '/ (empty)'], ['7', '→ (6, 1)']]) });

Q({ id: 'f24a-g2', ch: 'g3', src: S, type: 'open',
  q: `Same graph: apply <b>Dijkstra's algorithm</b> from vertex 1 and fill in d and π for every vertex.`,
  fig: G(g),
  sol: `<p>Extract 1 (0): d2 = 2, d4 = 1. Extract 4 (1): d3 = 3, d5 = 3, d6 = 9, d7 = 5. Extract 2 (2): no improvement (5 via 2 would be 12). Extract 3 (3): d6 = 8. Extract 5 (3): 7 stays 5. Extract 7 (5): d6 = 6. Extract 6.</p>` +
    tbl([['Vertex', '1', '2', '3', '4', '5', '6', '7'], ['d', '0', '2', '3', '1', '3', '6', '5'], ['π', 'nil', '1', '4', '1', '4', '7', '4']]),
  solFig: G(Object.assign({ hl: '1>2 1>4 4>3 4>5 4>7 7>6', lab: { 1: '0', 2: '2', 3: '3', 4: '1', 5: '3', 6: '6', 7: '5' } }, g)) });

Q({ id: 'f24a-ks', ch: 'dp', src: S, type: 'open',
  q: `A thief can carry at most <b>5 kg</b> and must take each item entirely or not at all (0/1 knapsack). Which items maximise the value? Fill the DP table.` +
    tbl([['Item', 'Weight (kg)', 'Value ($)'], ['Mirror', '2', '30'], ['Silver nugget', '3', '40'], ['Painting', '4', '50'], ['Vase', '5', '60']]),
  sol: tbl([['i \\ w', '0', '1', '2', '3', '4', '5'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['1 Mirror', '0', '0', '30', '30', '30', '30'],
    ['2 Silver', '0', '0', '30', '40', '40', '70'],
    ['3 Painting', '0', '0', '30', '40', '50', '70'],
    ['4 Vase', '0', '0', '30', '40', '50', '70']], { hl: [[5, 6]] }) +
    `<p><b>Maximum value = 70 → Mirror + Silver nugget</b> (2 + 3 = 5 kg). Traceback: V[4,5] = V[3,5] = V[2,5] = 70 ≠ V[1,5] → silver in, w = 2 → V[1,2] = 30 → mirror in.</p>` });
}
