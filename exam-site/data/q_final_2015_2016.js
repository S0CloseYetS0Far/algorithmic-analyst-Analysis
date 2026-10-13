/* Final 2015 S1 and Final 2016 S2 (CS216, model answers; corrected where noted) */
{
const S = 'Final 2015 S1';
also('f13-3', S);

Q({ id: 'f15-m', ch: 'intro', src: S, type: 'match', q: `Match each description with the most appropriate term.`,
  left: ['It chooses the locally optimal choice hoping it gives a globally optimal solution.', 'A very general problem-solving technique that systematically enumerates all possible solutions and tests them.', 'It permits negative-weight edges when computing shortest paths.', 'It improves performance because partial results are never calculated twice.', 'An algorithm used to compute a minimal spanning tree.', 'Trying to find the best solution among all feasible solutions.', 'Merge sort is an example of this technique.', 'An optimization problem that can be solved using dynamic programming.'],
  right: ["Prim's algorithm", 'Matrix-chain multiplication', 'Divide and conquer', 'Memoization', 'Optimization problem', 'Bellman-Ford algorithm', 'Brute-force technique', 'Greedy approach'],
  ans: [7, 6, 5, 3, 0, 4, 2, 1],
  sol: `Greedy → locally optimal choices; brute force → enumerate everything; Bellman-Ford → negative weights; memoization → never recompute; Prim → MST; optimization problem → best feasible solution; divide & conquer → merge sort; matrix-chain multiplication → classic DP problem.` });

Q({ id: 'f15-mm', ch: 'dc', src: S, type: 'open', q: `Using the master theorem, decide which algorithm is faster: <br>A: T(n) = T(n/2) + 1 <br>B: T(n) = 9T(n/3) + n²`,
  sol: `<p><b>A:</b> a = 1, b = 2, n<sup>log₂1</sup> = 1 = f(n) → case 2 → Θ(lg n).</p><p><b>B:</b> a = 9, b = 3, n<sup>log₃9</sup> = n² = f(n) → case 2 → Θ(n² lg n).</p><p><b>A is faster.</b></p>` });

Q({ id: 'f15-ks', ch: 'dp', src: S, type: 'open', q: `A voucher lets you take at most 8 lbs of items, each taken whole or not at all.` +
    tbl([['Item i', '1', '2', '3', '4'], ['Value b<sub>i</sub>', '$15', '$10', '$9', '$5'], ['Weight w<sub>i</sub>', '1', '5', '3', '4']]) +
    `I. What is this problem called and which technique solves it? II. Fill the DP matrix. III. Which items give the maximum value and what is it? IV. Running time of the technique?`,
  sol: `<p><b>I.</b> The 0/1 knapsack problem — dynamic programming.</p>` +
    tbl([['i \\ w', '0', '1', '2', '3', '4', '5', '6', '7', '8'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['1', '0', '15', '15', '15', '15', '15', '15', '15', '15'],
      ['2', '0', '15', '15', '15', '15', '15', '25', '25', '25'],
      ['3', '0', '15', '15', '15', '24', '24', '25', '25', '25'],
      ['4', '0', '15', '15', '15', '24', '24', '25', '25', '29']], { hl: [[5, 9]] }) +
    `<p><b>III.</b> V[4,8] = 29 ≠ V[3,8] → item 4, w = 4; V[3,4] = 24 ≠ V[2,4] → item 3, w = 1; V[2,1] = V[1,1] → skip 2; item 1. <b>Items {1, 3, 4}, value $29.</b></p><p><b>IV.</b> Θ(nW).</p>` });

Q({ id: 'f15-mc', ch: 'dp', src: S, type: 'open', q: `Matrix chain ⟨A1, A2, A3, A4⟩ with dimensions p = (5, 4, 6, 2, 7). 1. Optimal cost for the whole chain? 2. Optimal cost of ⟨A3, A4⟩? 3. Range of k for m[2,4]? 4. s[2,3]? 5. Optimal parenthesization of ⟨A1, A2, A3⟩? 6. Optimal parenthesization of the whole chain?`,
  sol: `<p>m[i, j] = min<sub>i ≤ k &lt; j</sub> m[i, k] + m[k+1, j] + p<sub>i−1</sub>p<sub>k</sub>p<sub>j</sub>.</p>` +
    tbl([['m', '1', '2', '3', '4'], ['1', '0', '120', '88', '158'], ['2', '', '0', '48', '104'], ['3', '', '', '0', '84'], ['4', '', '', '', '0']]) +
    tbl([['s', '2', '3', '4'], ['1', '1', '1', '3'], ['2', '', '2', '3'], ['3', '', '', '3']]) +
    `<p>m[1,3] = min(0 + 48 + 5·4·2 = 88, 120 + 0 + 5·6·2 = 180) = 88. m[2,4] = min(0 + 84 + 4·6·7 = 252, 48 + 0 + 4·2·7 = 104) = 104. m[1,4] = min(0 + 104 + 140, 120 + 84 + 210, 88 + 0 + 70) = 158.</p>
     <p><b>1.</b> 158. <b>2.</b> 6·2·7 = 84. <b>3.</b> k ∈ {2, 3}. <b>4.</b> s[2,3] = 2. <b>5.</b> (A1(A2A3)). <b>6.</b> ((A1(A2A3))A4).</p>` });

const dj = { n: { S: [345, 472], A: [460, 393], B: [575, 393], C: [460, 472], D: [575, 472], E: [690, 472], F: [518, 550] }, e: 'S>A:3 S>C:2 S>F:6 C>A:2 A>B:6 A>D:1 C>D:3 B>E:1 D>E:4 F>E:2' };
Q({ id: 'f15-dj', ch: 'g3', src: S, type: 'open', q: `Run Dijkstra from S. I. In what order are vertices removed from the priority queue? II. What is the shortest path from S to E?`,
  fig: G(dj),
  sol: `<p>S(0): A 3, C 2, F 6. C(2): A stays 3, D 5. A(3): B 9, D 4. D(4): E 8. F(6): E stays 8. E(8). B(9).</p>
    <p><b>I.</b> S, C, A, D, F, E, B. <b>II.</b> S → A → D → E, cost 8. (S → F → E also costs 8 — a tie; the key gives the one Dijkstra records first.)</p>`,
  solFig: G(Object.assign({ hl: 'S>A S>C A>D D>E A>B S>F', lab: { S: '0', A: '3', B: '9', C: '2', D: '4', E: '8', F: '6' } }, dj)) });

Q({ id: 'f15-leaf', ch: 'g2', src: S, type: 'open', q: `A complete undirected graph on {a, b, c, d} has edge weights given by W (W<sub>ij</sub> = weight of {i, j}). What is the minimum possible weight of a spanning tree T in which vertex a is a <b>leaf</b>?` +
    tbl([['', 'a', 'b', 'c', 'd'], ['a', '0', '1', '8', '1'], ['b', '1', '0', '12', '4'], ['c', '8', '12', '0', '7'], ['d', '1', '4', '7', '0']]),
  sol: `<p>If a is a leaf, removing it leaves a spanning tree of {b, c, d}, and a hangs on by exactly one edge.</p>
    <p>Cheapest tree on {b, c, d}: b–d 4 + c–d 7 = 11 (b–c is 12). Cheapest edge from a: 1 (to b or d).</p>
    <p><b>Minimum weight = 12.</b> (The unrestricted MST a–b, a–d, c–d = 9 has a with degree 2.)</p>` });
}

{
const S = 'Final 2016 S2';
Q({ id: 'f16-1', ch: 'dc', src: S, type: 'mcq', q: `The binary search algorithm is an example of algorithms that use:`, opts: ['Brute force', 'Divide and conquer', 'Dynamic programming', 'Iterative improvement'], ans: 1,
  sol: `Split the sorted range in half and recurse into one half: T(n) = T(n/2) + 1.` });
Q({ id: 'f16-2', ch: 'heap', src: S, type: 'mcq', q: `Which node violates the min-heap property?`, fig: TREE([4, 6, 5, 8, 9, 3, 2]), opts: ['4', '5', '6', '9'], ans: 1,
  sol: `Node 5 has children 3 and 2, both smaller.` });
Q({ id: 'f16-3', ch: 'greedy', src: S, type: 'mcq', q: `The main idea of greedy algorithms is:`, opts: ['Searching for local optimal solutions', 'Making locally optimal choices in order to achieve a globally optimal solution', 'Searching for all possible global optimal solutions', 'Making locally optimal choices in order to achieve a solution'], ans: 1,
  sol: `Greedy picks what looks best right now, hoping it leads to the global optimum.` });
Q({ id: 'f16-4', ch: 'g2', src: S, type: 'mcq', q: `Finding the minimum total wiring to connect a set of computers is an instance of:`, opts: ['Shortest path problem', 'Minimum spanning tree problem', '0/1 knapsack problem', 'Fractional knapsack problem'], ans: 1,
  sol: `Connect everything with minimum total cost and no cycles → MST.` });
also('f24b-s3', S);
Q({ id: 'f16-6', ch: 'dp', src: S, type: 'mcq', q: `Which statement about memoization is NOT correct?`, opts: ['It solves only the sub-problems that are necessary', 'It deals with overlapping sub-problems', 'It improves performance because partial results are never calculated twice', 'Every time it meets a sub-problem, new or seen before, it computes it again and stores the solution'], ans: 3,
  sol: `Memoization looks the answer up if it was seen before — it never recomputes. (D describes plain recursion.)` });

const bf = { n: { 1: [190, 470], 2: [310, 335], 3: [310, 580], 4: [495, 335], 5: [495, 580], 6: [598, 470] }, e: '1>2:2 1>3:4 2>4:1 2>3:-3 2>5:5 3>4:-4 3>5:-2 5>4:4 4>6:8 5>6:6' };
Q({ id: 'f16-bf', ch: 'g3', src: S, type: 'open', q: `Find the shortest paths from node 1 to every node with the Bellman-Ford algorithm. Show the d values after each pass.`,
  fig: G(bf),
  sol: tbl([['Pass', '1', '2', '3', '4', '5', '6'], ['0', '0', '∞', '∞', '∞', '∞', '∞'], ['1', '0', '2', '4', '∞', '∞', '∞'], ['2', '0', '2', '−1', '−5', '−3', '∞'], ['3', '0', '2', '−1', '−5', '−3', '3'], ['4', '0', '2', '−1', '−5', '−3', '3'], ['5', '0', '2', '−1', '−5', '−3', '3']]) +
    `<p>(The rows depend on the edge order; this is the key's order.) Final: d = (0, 2, −1, −5, −3, 3) via 1→2 (2), 1→2→3 (−1), 1→2→3→4 (−5), 1→2→3→5 (−3), 1→2→3→4→6 = 1→2→3→5→6 = 3. No negative cycles.</p>`,
  solFig: G(Object.assign({ hl: '1>2 2>3 3>4 3>5 4>6', lab: { 1: '0', 2: '2', 3: '−1', 4: '−5', 5: '−3', 6: '3' } }, bf)) });

const kg = { n: { a: [220, 845], b: [430, 845], e: [330, 900], c: [535, 895], f: [230, 945], d: [430, 948] }, e: 'a-b:4 a-f:1 b-e:5 b-c:4 e-d:6 c-d:2 f-d:8' };
Q({ id: 'f16-kr1', ch: 'g2', src: S, type: 'open', q: `1. Give an efficient stopping criterion for Kruskal's algorithm. 2. Apply Kruskal to graph G: illustrate the steps, draw the MST and give its cost.`,
  fig: G(kg),
  sol: `<p><b>1.</b> A spanning tree has exactly |V| − 1 edges: keep a counter of accepted edges and stop as soon as it reaches |V| − 1, instead of scanning all remaining edges.</p>` +
    tbl([['Edge', 'w', 'Action'], ['a–f', '1', 'add'], ['c–d', '2', 'add'], ['a–b', '4', 'add'], ['b–c', '4', 'add'], ['b–e', '5', 'add → 5 edges, stop'], ['e–d, f–d', '6, 8', 'not needed']]) +
    `<p><b>Cost = 1 + 2 + 4 + 4 + 5 = 16.</b></p>`,
  solFig: G(Object.assign({ hl: 'a-f c-d a-b b-c b-e' }, kg)) });
Q({ id: 'f16-kr2', ch: 'g2', src: S, type: 'open', q: `Using Kruskal's algorithm, find a minimum-cost spanning tree of the same graph G that <b>must contain</b> the edges (f, d), (e, d) and (b, c). Show the first step, draw the tree and give its cost.`,
  fig: G(kg),
  sol: `<p>Start with the forced edges already in T: T = {(f,d), (e,d), (b,c)}, sets {a}, {b, c}, {d, e, f}. Then continue Kruskal on the remaining edges in sorted order:</p>
    <p><b>Step 1:</b> (a, f) 1 — different sets → add; sets {b, c}, {a, d, e, f}. <b>Step 2:</b> (c, d) 2 → add; all vertices joined (5 edges).</p>
    <p><b>Cost = 8 + 6 + 4 + 1 + 2 = 21.</b> <span class="note">The key's "step 1" took (c, d) first, skipping the lighter (a, f), but its final tree and cost 21 are the same.</span></p>`,
  solFig: G(Object.assign({ hl: 'f-d e-d b-c a-f c-d' }, kg)) });

Q({ id: 'f16-ks', ch: 'dp', src: S, type: 'open', q: `0/1 knapsack, W = 5. Find the optimal solution with dynamic programming (max benefit and items).` +
    tbl([['Item', '1', '2', '3', '4'], ['Benefit', '6', '12', '4', '9'], ['Weight', '1', '5', '3', '4']]),
  sol: tbl([['i \\ w', '0', '1', '2', '3', '4', '5'], ['0', '0', '0', '0', '0', '0', '0'], ['1', '0', '6', '6', '6', '6', '6'], ['2', '0', '6', '6', '6', '6', '12'], ['3', '0', '6', '6', '6', '10', '12'], ['4', '0', '6', '6', '6', '10', '15']], { hl: [[5, 6]] }) +
    `<p>V[4,5] = 15 ≠ V[3,5] → item 4, w = 1; V[3,1] = V[2,1] = V[1,1] → items 3, 2 skipped; item 1 taken. <b>Items {1, 4}, benefit 15.</b></p>` });

Q({ id: 'f16-mc', ch: 'dp', src: S, type: 'open', q: `Chain ⟨A1, A2, A3, A4⟩ with dimensions 2×5, 5×4, 4×2, 2×4.<br>1. Which technique computes the optimal number of multiplications? 2. How many ways are there to fully parenthesize 4 matrices? 3. What do tables M and S store? 4. Optimal cost of ⟨A2, A3, A4⟩? 5. Optimal cost of ⟨A3, A4⟩? 6. k that splits ⟨A2, A3, A4⟩ optimally? 7. Optimal parenthesization of all four.`,
  sol: tbl([['M', 'A1', 'A2', 'A3', 'A4'], ['A1', '0', '40', '56', '72'], ['A2', '', '0', '40', '80'], ['A3', '', '', '0', '32'], ['A4', '', '', '', '0']]) +
    tbl([['S', 'A2', 'A3', 'A4'], ['A1', '1', '2', '3'], ['A2', '', '2', '3'], ['A3', '', '', '3']]) +
    `<p><b>1.</b> Dynamic programming. <b>2.</b> 5 (Catalan number C₃). <b>3.</b> M[i, j] = minimum number of scalar multiplications for A<sub>i..j</sub>; S[i, j] = the split point k achieving it. <b>4.</b> M[2,4] = min(0 + 32 + 5·4·4 = 112, 40 + 0 + 5·2·4 = 80) = <b>80</b>. <b>5.</b> 4·2·4 = <b>32</b>. <b>6.</b> k = <b>3</b>. <b>7.</b> M[1,4] = min(120, 104, 56 + 16 = 72) at k = 3, and S[1,3] = 2 → <b>(((A1 A2) A3) A4)</b>.</p>` });
}
