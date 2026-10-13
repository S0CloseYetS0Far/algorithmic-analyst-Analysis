/* Final 2024 — 2nd semester (no key: solved here) */
{
const S = 'Final 2024 S2';

const bfg = { n: { A: [430, 290], B: [508, 290], C: [590, 290], D: [500, 352] }, e: 'A>B:1 B>C:1 A>D:99 D>B:-300', curve: { 'A>C': -60 } };
bfg.e += ' A>C:0';
Q({ id: 'f24b-s1', ch: 'g3', src: S, type: 'short',
  q: `The Bellman-Ford algorithm can be used to find the shortest paths in the graph below, and it will need ______ passes.`,
  fig: G(bfg), accept: ['3', 'three', '|v|-1', 'v-1'],
  sol: `Bellman-Ford performs |V| − 1 = 4 − 1 = <b>3</b> passes over all edges. (Dijkstra would fail here because of the −300 edge: the true distances are B = −201 via A→D→B, C = −200.)` });

Q({ id: 'f24b-s2', ch: 'anB', src: S, type: 'short',
  q: `If f(n) = log n, then f(n) = ω(______).`, accept: ['1', 'c', 'constant', 'loglogn', 'log log n', 'lglgn'],
  sol: `Any function that grows strictly slower than log n, e.g. <b>1</b> (a constant) or log log n. ω is a strict (non-tight) lower bound.` });

Q({ id: 'f24b-s3', ch: 'g1', src: S, type: 'short',
  q: `______ algorithm can be used to identify the strongly connected components.`, accept: ['dfs', 'depth first search', 'depth-first search'],
  sol: `<b>DFS</b> — run DFS to get finishing times, run DFS on Gᵀ in decreasing finish order; each tree of the second DFS is an SCC.` });

Q({ id: 'f24b-s4', ch: 'g2', src: S, type: 'short',
  q: `The number of edges in a spanning tree of an n-vertex undirected graph is ______ edges.`, accept: ['n-1', 'n - 1', '|v|-1'],
  sol: `<b>n − 1</b>: a tree on n vertices always has n − 1 edges.` });

Q({ id: 'f24b-s5', ch: 'sort1', src: S, type: 'short',
  q: `______ is a stable and in-place sorting algorithm.`, accept: ['insertion sort', 'insertion', 'bubble sort', 'bubble'],
  sol: `<b>Insertion sort</b> (bubble sort also qualifies). Merge sort is stable but not in place; heapsort is in place but not stable.` });

Q({ id: 'f24b-s6', ch: 'dc', src: S, type: 'short',
  q: `For T(n) = T(n/4) + 2n, the size of each subproblem generated at each step is ______ the size of the original problem.`, accept: ['1/4', 'quarter', 'one quarter', 'one fourth', '1/4 of'],
  sol: `<b>1/4</b> — the argument is n/4 (b = 4).` });

Q({ id: 'f24b-s7', ch: 'dc', src: S, type: 'short',
  q: `The asymptotic relationship between T<sub>1</sub>(n) = 4T(n/2) + n² and T<sub>2</sub>(n) = T(n/2) + 1 is T<sub>1</sub>(n) = ___(T<sub>2</sub>(n)).`, accept: ['ω', 'omega', 'Ω', 'little omega', 'big omega', 'w'],
  sol: `T<sub>1</sub>: a = 4, b = 2, n<sup>log 4</sup> = n² = f(n) → case 2 → Θ(n² lg n). T<sub>2</sub>: a = 1, b = 2, n⁰ = 1 = f(n) → case 2 → Θ(lg n). So T<sub>1</sub> = <b>Ω(T<sub>2</sub>)</b> — in fact ω(T<sub>2</sub>).` });

Q({ id: 'f24b-s8', ch: 'linsort', src: S, type: 'short',
  q: `To apply ______ sort, each input should be an integer.`, accept: ['counting', 'counting sort', 'radix', 'radix sort'],
  sol: `<b>Counting sort</b> uses the keys as array indices, so they must be (small) integers. (Radix sort also works digit-by-digit on integers.)` });

Q({ id: 'f24b-s9', ch: 'dc', src: S, type: 'short',
  q: `If T(n) = 2T(n/2) + n, then case ______ of the master method applies.`, accept: ['2', 'two', 'case 2'],
  sol: `n<sup>log<sub>2</sub>2</sup> = n = f(n) → <b>case 2</b> → Θ(n lg n).` });

Q({ id: 'f24b-s10', ch: 'heap', src: S, type: 'short',
  q: `The MAX-HEAPIFY procedure on a max-heap runs in O(______).`, accept: ['lgn', 'log n', 'logn', 'lg n', 'h', 'log(n)'],
  sol: `<b>O(lg n)</b> — it floats a value down one path of a tree of height ⌊lg n⌋ (O(h)).` });

Q({ id: 'f24b-s11', ch: 'anB', src: S, type: 'short',
  q: `If f(n) = o(g(n)), then ______ grows faster.`, accept: ['g', 'g(n)', 'gn'],
  sol: `<b>g(n)</b>: little-o means f(n)/g(n) → 0.` });

Q({ id: 'f24b-s12', ch: 'anA', src: S, type: 'short',
  q: `Optimal solutions for searching unsorted data by comparing keys require Θ(______) comparisons.`, accept: ['n'],
  sol: `<b>Θ(n)</b> — without order, every element may have to be inspected (linear search).` });

Q({ id: 'f24b-s13', ch: 'anB', src: S, type: 'short',
  q: `If f(n) = n⁴ + n and g(n) = 2ⁿ + n, then f(n) + g(n) = O(______).`, accept: ['2^n', '2n', '2ⁿ'],
  sol: `O(max(f, g)) = <b>O(2ⁿ)</b> — exponential beats every polynomial.` });

Q({ id: 'f24b-s14', ch: 'sort1', src: S, type: 'short',
  q: `______ is a sorting algorithm that follows the divide-and-conquer approach.`, accept: ['merge sort', 'merge', 'mergesort', 'quick sort', 'quicksort'],
  sol: `<b>Merge sort</b> (quicksort as well).` });

Q({ id: 'f24b-m1', ch: 'np', src: S, type: 'mcq',
  q: `If a problem R is NP-Complete, then:`, opts: ['R is NP', 'R is NP-hard', 'Both answers a and b are correct', 'Both answers a and b are incorrect'], ans: 2,
  sol: `NP-complete = in NP and NP-hard.` });
Q({ id: 'f24b-m2', ch: 'np', src: S, type: 'mcq',
  q: `Choose the <b>correct</b> statement:`,
  opts: ['Decision problems can be maximization or minimization problems.', 'If any NP-complete problem can be solved in polynomial time, then every problem in NP can also be solved in polynomial time.', 'Heuristics may produce good solutions and guarantee the quality of their solution.', 'It has been proven that P = NP.'], ans: 1,
  sol: `Every NP problem reduces to any NP-complete problem, so one polynomial algorithm would give P = NP. Max/min are optimization (not decision) problems; heuristics give no guarantee; P = NP is open.` });
Q({ id: 'f24b-m3', ch: 'np', src: S, type: 'mcq',
  q: `The class P consists of:`, opts: ['all those problems that are solvable in polynomial time', 'problems that can be solved in time O(n<sup>k</sup>), where n is the input size', 'finding a Hamiltonian cycle problem', 'All the above answers are correct'], ans: [0, 1],
  sol: `(a) and (b) say the same thing — both are the definition of P. (c) is wrong: Hamiltonian cycle is NP-complete, so (d) is wrong too.` });
Q({ id: 'f24b-m4', ch: 'np', src: S, type: 'mcq',
  q: `Suppose A ≤<sub>p</sub> B. Which statement is <b>NOT</b> correct?`, opts: ['If B is P, then A is P.', 'If A is NP, then B is NP.', 'If A is NP-hard then B is NP-hard.', 'If A is NP-complete, then B is NP-complete.'], ans: 3,
  sol: `From A NP-complete we only get that B is NP-hard; B is NP-complete only if we also know B ∈ NP. (a) and (c) are standard; (b) is stated as a theorem in the course slides.` });

Q({ id: 'f24b-c1', ch: 'np', src: S, type: 'mcq', q: `The graph coloring problem is a(n) ______ problem.`, opts: ['tractable', 'intractable'], ans: 1, sol: `k-coloring (k ≥ 3) is NP-complete → intractable.` });
Q({ id: 'f24b-c2', ch: 'np', src: S, type: 'mcq', q: `To solve the 3-SAT problem in reasonable time you should use an:`, opts: ['approximation algorithm', 'exact polynomial-time algorithm'], ans: 0, sol: `No polynomial exact algorithm is known for NP-complete 3-SAT, so we settle for approximation/heuristics.` });
Q({ id: 'f24b-c3', ch: 'np', src: S, type: 'mcq', q: `Finding the ______ path is an NP-complete problem.`, opts: ['shortest', 'longest'], ans: 1, sol: `Longest simple path is NP-complete; shortest path is in P.` });
Q({ id: 'f24b-c4', ch: 'np', src: S, type: 'mcq', q: `To prove that TSP is NP-hard, we need to show that:`, opts: ['TSP ≤<sub>p</sub> HAM-CYCLE', 'HAM-CYCLE ≤<sub>p</sub> TSP'], ans: 1, sol: `Reduce the known NP-hard problem (HAM-CYCLE) <i>to</i> TSP.` });

Q({ id: 'f24b-rx', ch: 'linsort', src: S, type: 'open',
  q: `Sort [127, 324, 173, 4, 38, 217, 134] with <b>radix sort</b>. Show the array after each pass.`,
  sol: tbl([['', '1', '2', '3', '4', '5', '6', '7'],
    ['Array', '127', '324', '173', '4', '38', '217', '134'],
    ['Pass 1 (units)', '173', '324', '4', '134', '127', '217', '38'],
    ['Pass 2 (tens)', '4', '217', '324', '127', '134', '38', '173'],
    ['Pass 3 (hundreds)', '4', '38', '127', '134', '173', '217', '324']]) +
    `<p>Each pass is a <b>stable</b> sort on one digit (pad with leading zeros: 004, 038). Ties keep their previous order — e.g. in pass 1, 324, 004, 134 all end in 4 and stay in input order.</p>` });

const kr = { n: { a: [335, 85], b: [645, 80], c: [50, 265], d: [350, 268], e: [668, 258], f: [380, 495], g: [700, 490] },
  e: 'a-b:2 a-c:10 a-d:0 a-e:4 b-e:7 c-d:12 d-e:6 c-f:15 d-f:8 e-f:5 e-g:1 f-g:3' };
Q({ id: 'f24b-kr', ch: 'g2', src: S, type: 'open',
  q: `Use <b>Kruskal's algorithm</b> on this graph: (1) draw the MST, (2) give the order in which edges are added, (3) give the MST cost, (4) if Prim's algorithm started from vertex c, which would be the 5<sup>th</sup> edge added?`,
  fig: G(kr),
  sol: `<p>Sorted: ad 0, eg 1, ab 2, fg 3, ae 4, ef 5, de 6, be 7, df 8, ac 10, cd 12, cf 15.</p>
    <p><b>Kruskal order:</b> (a,d) 0, (e,g) 1, (a,b) 2, (f,g) 3, (a,e) 4, [ef, de, be, df rejected — cycles], (a,c) 10.</p>
    <p><b>MST cost = 0 + 1 + 2 + 3 + 4 + 10 = 20.</b></p>
    <p><b>Prim from c:</b> c → a (10) → d (0) → b (2) → e (4) → <b>g via (e,g) = 5th edge</b> → f via (f,g) 3.</p>`,
  solFig: G(Object.assign({ hl: 'a-d e-g a-b f-g a-e a-c' }, kr)) });

const dj = { n: { A: [480, 450], B: [395, 520], C: [485, 525], D: [575, 525], E: [485, 600], F: [575, 600] },
  e: 'B>A:3 A>C:1 B>C:5 C>D:2 C>E:4 E>F:1 D>F:5 D>A:6' };
Q({ id: 'f24b-dj', ch: 'g3', src: S, type: 'open',
  q: `Apply <b>Dijkstra's algorithm</b> from vertex <b>B</b>. (1) In which order are vertices removed from the priority queue? (2) Give the shortest-path tree: key (distance) and π of every vertex.`,
  fig: G(dj),
  sol: `<p>B(0): A = 3, C = 5. A(3): C = 4. C(4): D = 6, E = 8. D(6): F = 11. E(8): F = 9. F(9).</p>
    <p><b>Order: B, A, C, D, E, F.</b></p>` +
    tbl([['Vertex', 'A', 'B', 'C', 'D', 'E', 'F'], ['key', '3', '0', '4', '6', '8', '9'], ['π', 'B', 'nil', 'A', 'C', 'C', 'E']]) +
    `<p class="note">The scan is blurry on the A–D and D–F weights (5 or 6); the result is the same either way.</p>`,
  solFig: G(Object.assign({ hl: 'B>A A>C C>D C>E E>F', lab: { A: '3', B: '0', C: '4', D: '6', E: '8', F: '9' } }, dj)) });

Q({ id: 'f24b-ks', ch: 'dp', src: S, type: 'open',
  q: `Knapsack capacity <b>8</b>. Items (weight, benefit): 1 (2, 16), 2 (3, 15), 3 (4, 12), 4 (6, 24).<br>(A) As a <b>0/1 knapsack</b>, fill the DP table, give the items and total profit.`,
  sol: tbl([['i \\ w', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
    ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
    ['1', '0', '0', '16', '16', '16', '16', '16', '16', '16'],
    ['2', '0', '0', '16', '16', '16', '31', '31', '31', '31'],
    ['3', '0', '0', '16', '16', '16', '31', '31', '31', '31'],
    ['4', '0', '0', '16', '16', '16', '31', '31', '31', '40']], { hl: [[5, 9]] }) +
    `<p>V[4,8] = max(31, 24 + V[3,2] = 40) = 40 → item 4 in, w = 2 → V[3,2] = V[2,2] = V[1,2] = 16 → item 1 in.</p>
     <p><b>Items {1, 4}, profit = 40.</b></p>` });

Q({ id: 'f24b-fk', ch: 'greedy', src: S, type: 'open',
  q: `(B) Same items, capacity 8, but now as a <b>fractional knapsack</b>: which items are included and what is the total benefit? Items (weight, benefit): 1 (2, 16), 2 (3, 15), 3 (4, 12), 4 (6, 24).`,
  sol: tbl([['Item', '1', '2', '3', '4'], ['b/w', '8', '5', '3', '4']]) +
    `<p>Greedy by ratio: item 1 (w 2, 16) → item 2 (w 5, 31) → item 4: only 3 of 6 kg fit → ½ × 24 = 12.</p>
     <p><b>Items 1, 2 and ½ of item 4. Total benefit = 43.</b> (Better than the 0/1 optimum of 40, as expected.)</p>` });
}
