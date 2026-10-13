/* Final 2024 — 3rd semester (no key: solved here) */
{
const S = 'Final 2024 S3';
const tf = (id, ch, q, ans, sol) => Q({ id, ch, src: S, type: 'tf', q, ans, sol });

tf('f24c-t1', 'heap', `Given two heaps with n elements each, it is possible to construct a single heap comprising all 2n elements in O(n) time.`, true,
  `Concatenate the two arrays and run BUILD-HEAP on the 2n elements — BUILD-HEAP is linear, O(2n) = O(n).`);
tf('f24c-t2', 'sort1', `Running merge sort on an array of size n which is already correctly sorted takes O(n) time.`, false,
  `Merge sort always splits down to size 1 and merges every level: Θ(n lg n) regardless of input order. (Insertion sort is the one that becomes Θ(n) on sorted input.)`);
tf('f24c-t3', 'g3', `On a connected, directed graph with only positive edge weights, Bellman-Ford runs asymptotically as fast as Dijkstra.`, false,
  `Bellman-Ford is Θ(VE) no matter what the weights are; Dijkstra is O((V + E) lg V).`);
tf('f24c-t4', 'anB', `If f(n) = O(g(n)) and g(n) = O(h(n)), then h(n) = Ω(f(n)).`, true,
  `Transitivity gives f = O(h), and f = O(h) ⇔ h = Ω(f) (transpose symmetry).`);
tf('f24c-t5', 'heap', `The array [10, 3, 5, 1, 4, 2] is a max heap.`, false,
  `Node 2 holds 3 but its right child (index 5) holds 4 &gt; 3 — the max-heap property fails.`);
tf('f24c-t6', 'anB', `If f(n) = 5n log n and g(n) = n log 5n, then f = Θ(g).`, true,
  `g(n) = n(log 5 + log n) = Θ(n log n), and f(n) = 5n log n = Θ(n log n).`);
tf('f24c-t7', 'heap', `Building a heap with n elements can always be done in O(n log n) time.`, true,
  `n insertions or BUILD-HEAP with n/2 heapify calls both fit in O(n lg n). (The tight bound for BUILD-HEAP is actually O(n), which is also O(n lg n).)`);
tf('f24c-t8', 'anB', `If f(n) = O(g(n)) and g(n) = O(f(n)), then f(n) = g(n).`, false,
  `It only gives f = Θ(g). Counter-example: f(n) = n, g(n) = 2n.`);
tf('f24c-t9', 'dc', `Divide & conquer algorithms use a top-down solving approach.`, true,
  `D&C starts from the whole problem and recursively splits it (top-down); bottom-up table filling is typical of dynamic programming.`);
tf('f24c-t10', 'np', `Every problem in NP can be solved in exponential time.`, true,
  `Try every certificate of polynomial length p(n) — there are 2<sup>p(n)</sup> of them — and verify each in polynomial time.`);
tf('f24c-t11', 'g1', `Breadth-first search (BFS) uses a QUEUE data structure.`, true, `FIFO queue of discovered (gray) vertices.`);
tf('f24c-t12', 'np', `Problems that can be solved in polynomial time are known as decision problems.`, false,
  `Those are the tractable problems, class <b>P</b>. "Decision problem" refers to a yes/no answer, not to running time.`);
tf('f24c-t13', 'greedy', `The fractional knapsack algorithm is a greedy algorithm in which items can be divided to obtain the maximum benefit.`, true,
  `Sort by value/weight and take greedily, splitting the last item — optimal for the fractional version.`);

Q({ id: 'f24c-it', ch: 'dc', src: S, type: 'open',
  q: `Solve <span class="m">T(n) = 2T(n − 1)</span>, T(0) = 1, using the <b>iteration method</b>.`,
  sol: `<p>T(n) = 2T(n−1) = 2·2T(n−2) = 2³T(n−3) = … = 2<sup>k</sup> T(n−k).</p>
        <p>Stop at n − k = 0 → k = n: T(n) = 2<sup>n</sup> T(0) = <b>2<sup>n</sup></b> → Θ(2<sup>n</sup>).</p>` });

Q({ id: 'f24c-mt', ch: 'dc', src: S, type: 'open',
  q: `Can the recurrence T(n) = 2T(n − 1) be solved with the master theorem? Justify.`,
  sol: `<b>No.</b> The master theorem only applies to T(n) = aT(n/b) + f(n) with a ≥ 1 and b &gt; 1, i.e. the subproblem size must be a <i>fraction</i> n/b of n. Here the size shrinks by subtraction (n − 1), so there is no b.` });

Q({ id: 'f24c-ms4', ch: 'sort1', src: S, type: 'open',
  q: `Revise merge sort so that it divides the n-element sequence into <b>four</b> subsequences of n/4 elements each (instead of two). Give the pseudocode and its complexity.`,
  sol: code(`MERGE-SORT-4(A, p, r)
  if p < r
      len = r - p + 1
      q1 = p + ⌊len/4⌋ - 1
      q2 = p + ⌊len/2⌋ - 1
      q3 = p + ⌊3·len/4⌋ - 1
      MERGE-SORT-4(A, p,      q1)
      MERGE-SORT-4(A, q1 + 1, q2)
      MERGE-SORT-4(A, q2 + 1, q3)
      MERGE-SORT-4(A, q3 + 1, r)
      MERGE(A, p, q1, q2)        // merge parts 1 and 2
      MERGE(A, q2 + 1, q3, r)    // merge parts 3 and 4
      MERGE(A, p, q2, r)         // merge the two halves`) +
    `<p>(Alternatively, a 4-way merge that repeatedly takes the minimum of four fronts — still Θ(n) per call.)</p>
     <p><b>Recurrence:</b> T(n) = 4T(n/4) + Θ(n). Master method: a = 4, b = 4, n<sup>log<sub>4</sub>4</sup> = n = f(n) → case 2 → <b>T(n) = Θ(n lg n)</b> — same order as ordinary merge sort.</p>` });

Q({ id: 'f24c-hp', ch: 'heap', src: S, type: 'open',
  q: `Array A = [4, 10, 3, 5, 1].<br>a) Draw it as a heap tree. b) Apply BUILD-MAX-HEAP, showing the steps. c) Show the array after <b>one</b> step of heapsort (after popping 10 from the root). d) If a <i>min</i>-heap were built instead, what is the root? e) What is the final array after heapsort using a <i>min</i>-heap?`,
  fig: TREE([4, 10, 3, 5, 1]),
  sol: `<p><b>a)</b> Root 4; children 10, 3; 10's children 5, 1 (shown above).</p>
    <p><b>b)</b> i = 2: 10 ≥ 5, 1 — no change. i = 1: 4 &lt; 10 → swap → [10, 4, 3, 5, 1]; 4 &lt; 5 → swap → <b>[10, 5, 3, 4, 1]</b>.</p>
    <p><b>c)</b> Swap A[1] ↔ A[5] → [1, 5, 3, 4 | 10], heap-size 4, MAX-HEAPIFY(1): 1 ↔ 5 → [5, 1, 3, 4], 1 ↔ 4 → <b>[5, 4, 3, 1, 10]</b>.</p>
    <p><b>d)</b> The minimum, <b>1</b>.</p>
    <p><b>e)</b> Heapsort with a min-heap moves the current minimum to the end each time → descending order <b>[10, 5, 4, 3, 1]</b>.</p>`,
  solFig: TREE([10, 5, 3, 4, 1]) });

Q({ id: 'f24c-2n', ch: 'np', src: S, type: 'open',
  q: `List the names of 3 algorithms that have time complexity O(2<sup>n</sup>).`,
  sol: `<ul><li>Brute-force 0/1 knapsack (try all 2<sup>n</sup> subsets).</li><li>Brute-force (3-)SAT: try all 2<sup>n</sup> truth assignments.</li><li>Naive recursive Fibonacci, T(n) = T(n−1) + T(n−2) + 1 = O(2<sup>n</sup>).</li><li>Also: Towers of Hanoi (2<sup>n</sup> − 1 moves), brute-force subset-sum.</li></ul>` });

Q({ id: 'f24c-ks', ch: 'dp', src: S, type: 'open',
  q: `0/1 knapsack, capacity 5. Item 1: value 6, weight 1; item 2: value 10, weight 2; item 3: value 12, weight 3. Using the DP table below, give the optimal value, the chosen items, and the time complexity of the DP algorithm.` +
    tbl([['item \\ cap', '0', '1', '2', '3', '4', '5'], ['0', '0', '0', '0', '0', '0', '0'], ['1', '0', '6', '6', '6', '6', '6'], ['2', '0', '6', '10', '16', '16', '16'], ['3', '0', '6', '10', '16', '18', '22']]),
  sol: `<p><b>Optimal value = V[3,5] = 22.</b> V[3,5] ≠ V[2,5] → item 3 in, capacity 2. V[2,2] = 10 ≠ V[1,2] = 6 → item 2 in, capacity 0.</p>
        <p><b>Items {2, 3}</b> (weights 2 + 3 = 5, values 10 + 12 = 22).</p>
        <p><b>Time: Θ(nW)</b> — one constant-time cell per (item, capacity) pair.</p>` });

Q({ id: 'f24c-pr', ch: 'g2', src: S, type: 'open',
  q: `Fill in the missing parts of MST-PRIM and give the running time of the marked lines (binary min-heap).` + code(`MST-PRIM(G, w, r)
1  for each u ∈ G.V
2      u.key = ∞
3      u.π = NIL
4  r.key = 0
5  ............
6  while ............
7      u = ............
8      for each v ∈ G.Adj[u]
9          if ......... and w(u, v) < v.key
10             v.π = u
11             v.key = w(u, v)`),
  sol: code(`5  Q = G.V                    // build min-priority queue on key
6  while Q ≠ ∅
7      u = EXTRACT-MIN(Q)
9          if v ∈ Q and w(u, v) < v.key`) +
    tbl([['Lines', 'Cost'], ['1–5', 'O(V)  (initialise + BUILD-MIN-HEAP)'], ['6', 'loop runs |V| times'], ['7', 'O(lg V) each → O(V lg V) total'], ['8', 'O(E) iterations in total (each adjacency list once); line 11 is a DECREASE-KEY, O(lg V) → O(E lg V)']]) +
    `<p><b>Total: O(V lg V + E lg V) = O(E lg V)</b> for a connected graph.</p>` });
}
