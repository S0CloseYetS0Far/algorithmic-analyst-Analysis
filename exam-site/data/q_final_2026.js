/* Final 2026 — 1st semester (model answer) */
{
const S26a = 'Final 2026 S1';

Q({ id: 'f26a-1', ch: 'extra', src: S26a, type: 'mcq',
  q: `During the insert operation of an AVL tree, there are at most ______ rotations needed.`,
  opts: ['zero', 'one', 'two', "Can't tell"], ans: 2,
  sol: `After an insertion, rebalancing the lowest unbalanced ancestor fixes the whole tree. That fix is either a single rotation or a double rotation (two single rotations), so at most <b>two</b>.` });

Q({ id: 'f26a-2', ch: 'anB', src: S26a, type: 'mcq',
  q: `Which expression grows the fastest as n → ∞?`,
  opts: ['n<sup>π</sup>', 'π<sup>n</sup>', 'n<sup>5(log n)²</sup>', '2<sup>log⁴ n</sup>'], ans: 1,
  sol: `π<sup>n</sup> is exponential. The others: n<sup>π</sup> is polynomial; n<sup>5(log n)²</sup> = 2<sup>5 log³ n</sup> and 2<sup>log⁴ n</sup> are quasi-polynomial (2 to a power of log n) — all slower than c<sup>n</sup>.` });

Q({ id: 'f26a-3', ch: 'anB', src: S26a, type: 'mcq',
  q: `Which expression grows the fastest as n → ∞?`,
  opts: ['n<sup>2.3</sup>', 'n<sup>2.4</sup>', 'n²√n', 'n²'], ans: 2,
  sol: `n²√n = n<sup>2.5</sup>, the largest exponent.` });

Q({ id: 'f26a-4', ch: 'extra', src: S26a, type: 'mcq',
  q: `The main problem with linear probing is:`,
  opts: ['high collision', 'primary clustering', 'high space requirement', 'high load factor'], ans: 1,
  sol: `Linear probing fills consecutive slots, forming long runs ("primary clusters") that make later probes longer.` });

Q({ id: 'f26a-5', ch: 'sort1', src: S26a, type: 'mcq',
  q: `You want to "re-sort" a huge database after a few changes were applied to its sorted contents. Which algorithm is most efficient for this input?`,
  opts: ['Insertion sort', 'Merge sort', 'Heap sort', 'Counting sort'], ans: 0,
  sol: `The input is nearly sorted. Insertion sort runs in O(n + d) where d is the number of inversions — almost linear here (its best case is Θ(n)). Merge/heap sort stay Θ(n lg n).` });

Q({ id: 'f26a-6', ch: 'extra', src: S26a, type: 'mcq',
  q: `Which of the following is considered a <b>disadvantage</b> of using an AVL tree?`,
  opts: ['All operations have logarithmic worst-case time complexity.',
    'Height balancing introduces only a constant overhead to the speed of insertions and deletions.',
    'It is more difficult to implement and debug compared to a standard Binary Search Tree.',
    'AVL trees are not self-balancing, leading to potential performance issues.'], ans: 2,
  sol: `A and B are advantages; D is false (AVL trees are self-balancing). The real drawback is implementation complexity (rotations, height bookkeeping).` });

Q({ id: 'f26a-7', ch: 'g3', src: S26a, type: 'mcq',
  q: `In Dijkstra's shortest-path algorithm, how many times can an edge be relaxed?`,
  opts: ['More than once in a graph with a cycle.', 'Exactly once', '|V| − 1', 'Never, since it avoids cycles entirely.'], ans: 1,
  sol: `Each vertex u is extracted from the queue once, and only then are its outgoing edges relaxed — so every edge is relaxed exactly once. (Bellman-Ford relaxes each edge |V|−1 times.)` });

Q({ id: 'f26a-8', ch: 'greedy', src: S26a, type: 'mcq',
  q: `Fractional knapsack, capacity W = 40. Items: A (value 60, weight 10), B (value 100, weight 20), C (value 120, weight 30). Which item is picked <u>partially</u> in the optimal solution?`,
  opts: ['Item A', 'Item B', 'Item C', 'None'], ans: 2,
  sol: `Ratios: A = 6, B = 5, C = 4. Take A (10), then B (30 total), then only 10 of C's 30 units fit → C is partial. Profit = 60 + 100 + 40 = 200.` });

Q({ id: 'f26a-9', ch: 'greedy', src: S26a, type: 'mcq',
  q: `Same items as before (A: 60/10, B: 100/20, C: 120/30) but capacity W = 20. What is the maximum profit (fractional knapsack)?`,
  opts: ['40', '60', '110', 'All the above answers are correct.'], ans: 2,
  sol: `Take all of A (value 60, weight 10), then 10/20 of B (value 50). Total = <b>110</b>.` });

Q({ id: 'f26a-10', ch: 'extra', src: S26a, type: 'mcq',
  q: `A compiler's symbol table must store and retrieve variable names and memory locations. It mostly does exact lookups, rarely needs sorted order, and needs very fast (typically O(1)) access. Which data structure fits best?`,
  opts: ['AVL tree', 'Hash table', 'Binary search tree', 'Directed graph'], ans: 1,
  sol: `Hash tables give expected O(1) insert/lookup by key; ordering is not needed.` });

/* Fill-in-the-blanks with a word bank → each blank becomes a choice question */
const npBank = ['P', 'NP-hard', 'NP', 'NP-complete', 'Brute force approach', 'P = NP', 'Approximation algorithm', 'Longest path', 'Shortest path problem', 'Optimization', 'Decision'];
const fb = (id, q, ans, sol) => Q({ id, ch: 'np', src: S26a, type: 'mcq', bank: true, q: q + ' <span class="hint">(word bank)</span>', opts: npBank, ans, sol });
fb('f26a-fb1', `Maximization problems are the type of ______ problems that search for the solution with the maximum value.`, 9, `Maximization and minimization are both optimization problems.`);
fb('f26a-fb2', `If graph coloring problem ∈ P then 3-SAT ∈ ______.`, 0, `Graph (k-)coloring and 3-SAT are both NP-complete; they reduce to each other in polynomial time, so a polynomial algorithm for one gives one for the other.`);
fb('f26a-fb3', `Let X be a problem that belongs to the class NP. If X is not NP-hard, then it is not ______.`, 3, `NP-complete = NP ∩ NP-hard. Without NP-hardness it cannot be NP-complete.`);
fb('f26a-fb4', `Part of the ______ problems can be solved in polynomial time.`, [2, 9, 10], `Part of NP (namely P ⊆ NP) is solvable in polynomial time. The model answer also accepted "optimization" or "decision".`);
fb('f26a-fb5', `The ______ problem is an intractable problem.`, [7, 1, 3], `Longest (simple) path is NP-hard — no known polynomial algorithm. NP-hard / NP-complete were also accepted.`);
fb('f26a-fb6', `The ATM problem presented in your project with the Saudi currency system is a ______ problem.`, [0, 2, 9], `Making change with Saudi denominations is solved greedily in polynomial time → P (NP / Optimization were also accepted).`);
fb('f26a-fb7', `______ belongs to P.`, 8, `Shortest path is solvable in polynomial time (Dijkstra, Bellman-Ford).`);
fb('f26a-fb8', `If X is NP-complete, then X is NP-hard and is ______.`, 2, `By definition NP-complete problems are NP-hard and in NP.`);
fb('f26a-fb9', `To solve 3-SAT problems in reasonable time, you should NOT use the ______.`, 4, `Brute force tries all 2<sup>n</sup> truth assignments — exponential.`);
fb('f26a-fb10', `It has not been proven whether ______ or not.`, 5, `P = NP is the famous open question.`);

/* Scenario → algorithm */
const gAlg = ['BFS', 'DFS', "Prim's", "Kruskal's", "Dijkstra's", 'Bellman-Ford'];
const sc = (id, q, ans, sol) => Q({ id, ch: 'g3', src: S26a, type: 'mcq', q: `<span class="hint">Choose the most suitable graph algorithm.</span> ` + q, opts: gAlg, ans, sol });
sc('f26a-sc1', `A telecom company wants to expand its fiber network to connect all communities. It already has a <b>sorted list</b> of potential fiber lines, each with an installation cost. Connect all communities at minimum total cost without loops.`, 3,
  `Minimum spanning tree with edges already sorted by cost → Kruskal (its main cost is the sort, which is already done).`);
sc('f26a-sc2', `A GPS system needs the shortest route between two locations in a city. All roads have a minimum distance of 8 km (no negative weights). Which algorithm always gives the most efficient route?`, 4,
  `Single-source shortest path with non-negative weights → Dijkstra.`);
sc('f26a-sc3', `On a social network each user is a node and a friendship is an <b>unweighted</b> edge. Find the minimum number of friend connections linking two users in no more than O(|V| + |E|).`, 0,
  `Shortest path in an unweighted graph = fewest edges → BFS, O(V + E).`);
sc('f26a-sc4', `A delivery driver wants shortest routes to several locations. Costs can be zero or even <b>negative</b> (discounts), and we must make sure no negative-cost cycle breaks the calculation.`, 5,
  `Negative edge weights + detection of negative cycles → Bellman-Ford.`);
sc('f26a-sc5', `In a maze project, determine whether there is a path from entrance to exit by exploring routes and <b>backtracking</b> at dead ends.`, 1,
  `Go deep, backtrack at dead ends → DFS.`);
sc('f26a-sc6', `Install a fiber network starting from the central Data Center in a <b>dense</b> graph. Expand outward from the Data Center, picking the cheapest link that brings a new building online, until all buildings are connected at minimum total cost.`, 2,
  `Growing a single tree outward from a root by the cheapest crossing edge is exactly Prim's algorithm (and it suits dense graphs).`);

const k26 = { n: { a: [335, 170], b: [398, 108], c: [398, 256], d: [552, 158], e: [552, 256], f: [640, 178] }, e: 'a-b:1 b-d:2 b-e:3 d-f:1.5 d-e:4 a-c:5' };
Q({ id: 'f26a-kr', ch: 'g2', src: S26a, type: 'open',
  q: `Apply <b>Kruskal's algorithm</b> to find the minimum-cost spanning tree. Record each selected edge, whether it is included, and the disjoint sets after the step. Then draw the MCST and give its total cost.`,
  fig: G(k26),
  sol: tbl([['Selected edge', 'Included?', 'Sets'],
    ['—', '—', '{a},{b},{c},{d},{e},{f}'],
    ['(a,b) 1', 'yes', '{a,b},{c},{d},{e},{f}'],
    ['(d,f) 1.5', 'yes', '{a,b},{c},{d,f},{e}'],
    ['(b,d) 2', 'yes', '{a,b,d,f},{c},{e}'],
    ['(b,e) 3', 'yes', '{a,b,d,f,e},{c}'],
    ['(d,e) 4', 'no (same set)', '{a,b,d,f,e},{c}'],
    ['(a,c) 5', 'yes', '{a,b,c,d,e,f}']]) +
    `<p><b>Total cost = 1 + 1.5 + 2 + 3 + 5 = 12.5</b></p>
     <p class="note">The published model answer wrote 18, which does not match the edge weights shown — the sum of the chosen edges is 12.5.</p>`,
  solFig: G(Object.assign({ hl: 'a-b d-f b-d b-e a-c' }, k26)) });

Q({ id: 'f26a-ks', ch: 'dp', src: S26a, type: 'open',
  q: `A caterer can deliver at most <b>5 kg</b>. Maximise the total taste score (0/1 knapsack, dynamic programming). Fill the table V[i, w], list the chosen dishes and the optimal score.` +
    tbl([['Dish i', '1', '2', '3', '4'], ['Taste t<sub>i</sub>', '30', '35', '50', '40'], ['Weight w<sub>i</sub> (kg)', '2', '3', '5', '7']]),
  sol: tbl([['i \\ w', '0', '1', '2', '3', '4', '5'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['1', '0', '0', '30', '30', '30', '30'],
    ['2', '0', '0', '30', '35', '35', '65'],
    ['3', '0', '0', '30', '35', '35', '65'],
    ['4', '0', '0', '30', '35', '35', '65']], { hl: [[5, 6]] }) +
    `<p>Row 2 at w = 5: max(30, 35 + V[1,2] = 65) = 65. Dish 3 (w = 5) gives only 50 &lt; 65; dish 4 (w = 7) never fits.</p>
     <p>Trace back from V[4,5] = 65: equal to row 3 and row 2 → dish 2 taken (65 ≠ 30), w = 2 → dish 1 taken.</p>
     <p><b>Dishes {1, 2}, optimal score = 65.</b></p>` });
}
