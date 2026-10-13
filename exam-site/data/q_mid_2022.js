/* Midterm 2, 2022 — 2nd semester (blank paper + photos of a graded copy; verified) */
{
const S = 'Midterm 2 2022';
Q({ id: 'm22-1', ch: 'sort1', src: S, type: 'mcq', q: `Merge sort follows the ______ design technique.`, opts: ['Incremental', 'Greedy', 'Divide and conquer', 'All the above answers are incorrect'], ans: 2, sol: `Divide in halves, conquer recursively, combine by merging. (Insertion sort is the incremental one.)` });
Q({ id: 'm22-2', ch: 'linsort', src: S, type: 'mcq', q: `You sort n integers in the range [0..n³] (k = n³) with counting sort. The running time is:`, opts: ['n', 'n log n', 'n³', 'n⁴'], ans: 2,
  sol: `Counting sort is Θ(n + k) = Θ(n + n³) = Θ(n³) — worse than comparison sorting here. (Radix sort in base n would do it in Θ(n): 3 digits.)` });
also('f21-35', S);
Q({ id: 'm22-4', ch: 'linsort', src: S, type: 'mcq', q: `List: 365, 6443, 642, 223, 532, 2, 432. What is the output after the first pass of radix sort?`,
  opts: ['642, 532, 2, 432, 6443, 223, 365', '365, 6443, 642, 223, 532, 2, 432', '223, 2, 365, 432, 532, 6443, 642', 'All the above answers are incorrect'], ans: 0,
  sol: `Stable sort on the units digit: 2 → 642, 532, 2, 432; 3 → 6443, 223; 5 → 365.` });
Q({ id: 'm22-5', ch: 'linsort', src: S, type: 'mcq', q: `To sort a list of 5 numbers uniformly distributed over [0, 1) with bucket sort, we create ______ buckets.`, opts: ['1', '5', '10', 'Cannot be determined'], ans: 1,
  sol: `BUCKET-SORT makes n buckets (B[0..n−1]) and puts A[i] in bucket ⌊n·A[i]⌋ → 5 buckets.` });

const g = { n: { 1: [655, 360], 2: [868, 360], 4: [506, 396], 3: [767, 471], 5: [539, 578], 6: [702, 585] }, e: '4>1 1>2 1>3 2>3 1>6 3>6 6>5 5>4' };
const gq = (id, q, opts, ans, sol) => Q({ id, ch: 'g1', src: S, type: 'mcq', q, fig: G(g), opts, ans, sol });
gq('m22-6', `In the directed graph, the path 1, 2, 3, 6, 5, 4 is a:`, ['Cycle', 'Circuit', 'Hamiltonian cycle', 'All the above answers are incorrect'], 3,
  `It visits every vertex once but ends at 4 without returning to 1, so it is a (Hamiltonian) <i>path</i>, not a cycle/circuit. Adding the edge 4 → 1 would make it a Hamiltonian cycle.`);
gq('m22-7', `The in-degree of vertex 6 is:`, ['1', '2', '3', 'All the above answers are incorrect'], 1, `Edges into 6: 1 → 6 and 3 → 6. (Its out-degree is 1: 6 → 5.)`);
gq('m22-8', `Choose the correct statement:`, ['The path 1, 2, 3, 1 is simple', 'Vertex 6 is reachable from vertex 5', 'The graph is an unconnected graph', 'All the above answers are correct'], 1,
  `5 → 4 → 1 → 3 → 6 reaches 6. (a) There is no edge 3 → 1, and a path repeating vertex 1 is not simple. (c) Every vertex reaches every other — the graph is (strongly) connected.`);
gq('m22-9', `DFS starting at vertex 1 (numerical tie-breaking): in which order are vertices discovered and <b>fully explored</b> (finished)?`, ['1, 2, 3, 6, 5, 4', '4, 5, 6, 3, 2, 1', '1, 2, 3, 4, 5, 6', '2, 3, 6, 5, 4, 1'], 1,
  `Discovery: 1 → 2 → 3 → 6 → 5 → 4. Vertex 4's only neighbour 1 is gray, so 4 finishes first, then 5, 6, 3, 2, 1. Option (a) is the <i>discovery</i> order.`);
gq('m22-10', `Which path is a Hamiltonian cycle?`, ['1, 2, 3, 1', '1, 2, 3, 6, 5, 4, 1', '1, 2, 3, 6, 5, 4, 1, 3', '1, 3, 6, 5, 4, 1'], 1,
  `Every vertex exactly once and back to the start, using existing edges 1→2→3→6→5→4→1. (d) skips vertex 2; (c) repeats 1 and 3.`);

also('f23c-kr', S);
also('m23b-mh', S);
Q({ id: 'm22-kr', ch: 'g2', src: S, type: 'open',
  q: `Consider MST-KRUSKAL (sort edges, then FIND-SET/UNION over them). a) If the edge weights are <b>integers not significantly greater than the number of edges</b>, how can Kruskal's algorithm be made more efficient? b) What is the overall time complexity of the modified version?`,
  sol: `<p><b>a)</b> Replace the comparison sort on line 4 with <b>counting sort</b> (keys are small integers in 0..k with k = O(E)), which sorts the edges in Θ(E + k) = Θ(E) instead of Θ(E lg E).</p>
    <p><b>b)</b> MAKE-SET loop O(V) + sorting O(E) + E FIND-SET/UNION operations. Counting each disjoint-set operation as O(lg V) (as in the course's model answer for the bucket-sort version) gives <b>O(V + E + E lg V) = O(E lg V)</b>; with union-by-rank and path compression the loop is O(E α(V)), so the whole algorithm becomes almost linear, O(E α(V)).</p>` });
}
