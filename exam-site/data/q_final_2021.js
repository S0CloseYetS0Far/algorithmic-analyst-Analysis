/* Final 2021 — online (LMS) exam, 40 questions; one student's answers were visible, checked here */
{
const S = 'Final 2021';
const ks = `<span class="hint">0/1 knapsack: item 1 (w 1, b 20), item 2 (w 2, b 30), item 3 (w 3, b 40); capacity 4.</span> `;
const ksTable = tbl([['i \\ w', '0', '1', '2', '3', '4'], ['0', '0', '0', '0', '0', '0'], ['1', '0', '20', '20', '20', '20'], ['2', '0', '20', '30', '50', '50'], ['3', '0', '20', '30', '50', '60']]);
const kq = (id, q, opts, ans, extra) => Q({ id, ch: 'dp', src: S, type: 'mcq', q: ks + q, opts, ans, sol: ksTable + `<p>${extra}</p>` });
kq('f21-1', 'V[1,1] = ?', ['0', '20', '30', '50'], 1, `V[1,1]: only item 1 is available and it fits (w = 1) → 20.`);
kq('f21-2', 'V[2,2] = ?', ['20', '30', '50', '60'], 1, `V[2,2] = max(V[1,2] = 20, 30 + V[1,0] = 30) = 30.`);
kq('f21-3', 'Which items are included in the knapsack?', ['Only item three', 'Items 1 and 2', 'Items 1 and 3', 'All three items'], 2, `V[3,4] = 60 ≠ V[2,4] = 50 → item 3 in, w = 1 → V[2,1] = V[1,1] → item 2 out → item 1 in. Items 1 and 3 (weight 4, benefit 60).`);
kq('f21-4', 'V[0,0] = ?', ['0', '20', '30', '50'], 0, `Row 0 (no items) is all zeros.`);
kq('f21-5', 'V[3,3] = ?', ['20', '30', '50', '60'], 2, `V[3,3] = max(V[2,3] = 50, 40 + V[2,0] = 40) = 50.`);
kq('f21-6', 'The maximum benefit of the items in the knapsack is stored in:', ['V[0,0]', 'V[3,4]', 'V[3,3]', 'V[2,4]'], 1, `The answer is always in the last cell V[n, W] = V[3,4].`);
kq('f21-7', 'What is the maximum benefit?', ['20', '30', '50', '60'], 3, `V[3,4] = max(50, 40 + V[2,1] = 60) = 60.`);
kq('f21-8', 'V[2,3] = ?', ['20', '30', '50', '60'], 2, `V[2,3] = max(V[1,3] = 20, 30 + V[1,1] = 50) = 50.`);

Q({ id: 'f21-9', ch: 'dc', src: S, type: 'mcq', q: `Master method on <span class="m">T(n) = T(n/2) + n²</span>:`,
  opts: ['Case 1, T(n) = Θ(1)', 'Case 2, T(n) = Θ(log n)', 'Case 3, T(n) = Θ(n²)', 'Master method cannot be used.'], ans: 2,
  sol: `a = 1, b = 2 → n<sup>0</sup> = 1. f(n) = n² = Ω(n<sup>0+ε</sup>), and regularity holds: (n/2)² = n²/4 ≤ ¼·n². Case 3 → Θ(n²).` });
Q({ id: 'f21-10', ch: 'dc', src: S, type: 'mcq', q: `For <span class="m">T(n) = T(n/2) + 2n</span>, the size of each subproblem produced at each step is:`,
  opts: ['equal to the size of the original problem', 'half the size of the original problem', 'double the size of the original problem', 'All the above answers are incorrect'], ans: 1, sol: `The argument is n/2.` });
Q({ id: 'f21-11', ch: 'dc', src: S, type: 'mcq', q: `For <span class="m">T(n) = T(n/2) + 3n</span>, the number of subproblems produced at each step is:`,
  opts: ['1', '2', '3', 'Cannot be determined'], ans: 0, sol: `The coefficient a in front of T(·) is 1 — one subproblem (like binary search).` });
also('f24b-s9', S);
Q({ id: 'f21-13', ch: 'dc', src: S, type: 'mcq', q: `Asymptotic relationship between <span class="m">T₁(n) = 4T(n/2) + n²</span> and <span class="m">T₂(n) = T(n/2) + 1</span>:`,
  opts: ['T₁ = O(T₂)', 'T₁ = Ω(T₂)', 'T₁ = Θ(T₂)', 'All the above are correct'], ans: 1,
  sol: `T₁ = Θ(n² lg n) (case 2), T₂ = Θ(lg n) (case 2). So T₁ grows faster: T₁ = Ω(T₂).` });
Q({ id: 'f21-14', ch: 'anB', src: S, type: 'mcq', q: `Asymptotic relationship between f(n) = 2ⁿ and g(n) = n<sup>10000</sup>:`,
  opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above are correct'], ans: 1,
  sol: `Any exponential cⁿ (c &gt; 1) eventually beats any polynomial, however large the degree.` });
Q({ id: 'f21-15', ch: 'dp', src: S, type: 'mcq', q: `With dynamic programming for 0/1 knapsack, the time to determine which items must be included (after the table is filled) is:`,
  opts: ['O(Wn)', 'O(n)', 'O(W)', 'All the above answers are incorrect.'], ans: 1,
  sol: `The traceback walks from V[n, W] up one row per item, doing O(1) work each step → O(n). (Filling the table is O(nW).)` });
Q({ id: 'f21-16', ch: 'np', src: S, type: 'mcq', q: `Finding the longest path between two points in a graph is:`,
  opts: ['an optimization problem', 'a decision problem', 'Both a and b', 'Neither'], ans: 0,
  sol: `"Find the longest" asks for the best value → optimization. The decision version would be "is there a path of length ≥ k?".` });
Q({ id: 'f21-17', ch: 'np', src: S, type: 'mcq', q: `Using brute force on the SAT problem with 5 variables, we need to check ______ combinations.`,
  opts: ['5', '10', '25', '32'], ans: 3, sol: `Each variable is T/F → 2⁵ = 32 truth assignments.` });
Q({ id: 'f21-18', ch: 'intro', src: S, type: 'mcq', q: `Brute force algorithms:`,
  opts: ['try all possible solutions', 'guarantee to find the optimal (best) solution', 'are expensive', 'All the above answers are correct'], ans: 3,
  sol: `Exhaustive search tries every candidate, so it always finds the optimum, but it is usually exponential.` });
Q({ id: 'f21-19', ch: 'greedy', src: S, type: 'tf', q: `The solution of any greedy algorithm is always optimal.`, ans: false,
  sol: `Greedy makes locally optimal choices that may not be globally optimal (e.g. greedy on 0/1 knapsack, coin systems like {1, 3, 4} for 6).` });
Q({ id: 'f21-20', ch: 'g3', src: S, type: 'tf', q: `The Bellman-Ford algorithm is an example of a greedy algorithm.`, ans: true,
  sol: `In this course Bellman-Ford is taught in "Greedy Graph Algorithms — Part 2", so the expected answer is <b>True</b>. <span class="note">Strictly speaking, Bellman-Ford is usually classified as <i>dynamic programming</i> (it makes no greedy choice; it relaxes all edges |V|−1 times). Dijkstra is the greedy one.</span>` });
Q({ id: 'f21-21', ch: 'intro', src: S, type: 'mcq', q: `Trying all possible solutions of a problem except those that cannot be a valid solution is the ______ algorithmic strategy.`,
  opts: ['Dynamic programming', 'Divide-and-conquer', 'Backtracking', 'Greedy'], ans: 2,
  sol: `Backtracking builds candidates step by step and abandons (prunes) a partial candidate as soon as it cannot lead to a valid solution.` });
Q({ id: 'f21-22', ch: 'np', src: S, type: 'mcq', q: `To prove that a problem X is NP-complete, you need to prove that:`,
  opts: ['X ∈ NP', 'For all Y ∈ NP, Y ≤<sub>p</sub> X', 'Both a and b', 'All answers are incorrect'], ans: 2, sol: `NP-complete = in NP + NP-hard.` });
Q({ id: 'f21-23', ch: 'np', src: S, type: 'mcq', q: `Problems that can be solved in polynomial time are known as:`,
  opts: ['intractable', 'tractable', 'decision', 'NP-complete'], ans: 1, sol: `Tractable (class P).` });
Q({ id: 'f21-24', ch: 'np', src: S, type: 'tf', q: `If any NP-complete problem can be solved in polynomial time, then every problem in NP can also be solved in polynomial time.`, ans: true,
  sol: `Every NP problem reduces to that NP-complete problem in polynomial time.` });
Q({ id: 'f21-25', ch: 'intro', src: S, type: 'tf', q: `Before designing an algorithm, you should decide first whether the solution is exact or approximate.`, ans: true,
  sol: `Part of the design process in the slides: understand the problem → decide on computational means, <b>exact vs approximate solving</b>, data structures and design technique → design → prove correctness → analyse → code.` });
Q({ id: 'f21-26', ch: 'np', src: S, type: 'mcq', q: `To solve the 3-SAT problem in reasonable time, you should <u>not</u> use:`,
  opts: ['an approximation algorithm', 'a heuristic approach', 'brute force (check every combination of the variables)', 'All the answers are correct'], ans: 2, sol: `Brute force is exponential (2ⁿ assignments).` });
Q({ id: 'f21-27', ch: 'np', src: S, type: 'tf', q: `It has been proven that P = NP.`, ans: false, sol: `Still an open problem (a Millennium Prize problem).` });
Q({ id: 'f21-28', ch: 'np', src: S, type: 'tf', q: `Let X be a problem in NP. If X is not NP-hard, then it is not NP-complete.`, ans: true, sol: `NP-complete requires NP-hardness.` });
Q({ id: 'f21-29', ch: 'np', src: S, type: 'mcq', q: `X is an NP problem and Y is an NP-complete problem. If Y ≤<sub>p</sub> X, then X is:`,
  opts: ['NP-complete', 'NP-hard', 'Both a and b', 'All the above answers are incorrect'], ans: 2,
  sol: `Y ≤<sub>p</sub> X with Y NP-complete makes X NP-hard; together with X ∈ NP, X is NP-complete. Both hold.` });
Q({ id: 'f21-30', ch: 'np', src: S, type: 'mcq', q: `If you have a problem that is NP-complete, it is preferable to:`,
  opts: ['search for an optimal solution', 'find a solution using approximation algorithms', 'search for a polynomial-time algorithm to solve it', 'All the above answers are incorrect'], ans: 1, sol: `Settle for near-optimal approximations instead of an intractable exact search.` });
Q({ id: 'f21-31', ch: 'np', src: S, type: 'tf', q: `Consider problems X and Y. If X is an NP problem and X is polynomial-time reducible to Y, then Y is an NP problem.`, ans: true,
  sol: `The course slides state: "If R ≤<sub>p</sub> Q and R is NP, Q is also NP" → expected answer <b>True</b>. <span class="note">Mathematically this does not follow — a reduction X ≤<sub>p</sub> Y only shows Y is at least as hard as X (Y could even be undecidable). Answer True on this course's exams.</span>` });
Q({ id: 'f21-32', ch: 'np', src: S, type: 'tf', q: `Showing that TSP ≤<sub>p</sub> HAM-CYCLE can be used to prove that TSP is NP-complete.`, ans: false,
  sol: `Wrong direction. To show TSP is NP-hard, reduce the known NP-complete problem to it: HAM-CYCLE ≤<sub>p</sub> TSP.` });
Q({ id: 'f21-33', ch: 'g3', src: S, type: 'mcq', q: `______ is used to find shortest paths in a graph that contains a negative-weight edge but no negative-weight cycles.`,
  opts: ['Dijkstra', 'Bellman-Ford', 'Both', 'Neither'], ans: 1, sol: `Bellman-Ford handles negative edges (and detects negative cycles). Dijkstra needs non-negative weights.` });
Q({ id: 'f21-34', ch: 'g3', src: S, type: 'mcq', q: `Applying Bellman-Ford to a graph with 10 vertices requires ______ passes.`,
  opts: ['4', '9', '10', 'Cannot be determined'], ans: 1, sol: `|V| − 1 = 9 passes (plus an optional 10th check for negative cycles).` });
Q({ id: 'f21-35', ch: 'g1', src: S, type: 'mcq', q: `Select the correct statement about BFS and DFS:`,
  opts: ['Time complexity of DFS is lower while space complexity is the same.', 'Time complexity of BFS is lower while space complexity is the same.', 'Space complexity of DFS is lower while time complexity is the same.', 'Space complexity of BFS is lower while time complexity is the same.'], ans: 2,
  sol: `Both are Θ(V + E) time. DFS only stores the current path (depth), while BFS's queue may hold a whole level — so DFS typically uses less memory.` });
also('f24b-s3', S);
Q({ id: 'f21-37', ch: 'greedy', src: S, type: 'mcq', q: `Fractional knapsack: items (w, b) = (10, 30), (5, 25), (20, 40), (5, 20); capacity 50. What is the most efficient way to solve it?`,
  opts: ['Brute force', 'Dynamic programming', 'Greedy algorithm', 'All the above answers are incorrect'], ans: 2, sol: `Fractional knapsack is solved optimally by the greedy ratio rule in O(n lg n).` });
Q({ id: 'f21-38', ch: 'greedy', src: S, type: 'mcq', q: `Same fractional knapsack (capacity 50; items (10, 30), (5, 25), (20, 40), (5, 20)). What is the total (maximum) benefit?`,
  opts: ['75', '45', '115', '25'], ans: 2, sol: `Total weight 10 + 5 + 20 + 5 = 40 ≤ 50 → every item fits completely: 30 + 25 + 40 + 20 = 115.` });
Q({ id: 'f21-39', ch: 'greedy', src: S, type: 'mcq', q: `Same fractional knapsack. Which items will you choose?`,
  opts: ['Items 2 and 4 and part of item 1', 'Only item 2', 'Items 1, 2, 4 and part of item 3', 'All four items'], ans: 3, sol: `Capacity 50 exceeds the total weight 40.` });
Q({ id: 'f21-40', ch: 'greedy', src: S, type: 'mcq', q: `Same fractional knapsack. What is the total weight of the items included?`,
  opts: ['5', '20', '40', '50'], ans: 2, sol: `All items: 10 + 5 + 20 + 5 = 40 (10 units of capacity stay unused).` });
}
