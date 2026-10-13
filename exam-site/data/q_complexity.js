/* "Complete the worst-case complexity table" rows from Final 2013, 2015 and 2016,
   split into one question per algorithm so each lands in its own chapter. */
{
const OPTS = ['O(log n)', 'O(n)', 'O(n + k)', 'O(n log n)', 'O(n²)', 'O(2ⁿ)', 'O(nW)', 'O(V + E)', 'O(E log V)', 'O((V + E) log V)', 'O(V²)', 'O(VE)'];
const I = Object.fromEntries(OPTS.map((o, i) => [o, i]));
const cx = (id, ch, src, algo, ans, sol) => Q({ id, ch, src, type: 'mcq', grid: true,
  q: `Worst-case running time of <b>${algo}</b>?`, opts: OPTS, ans: [].concat(ans).map(a => I[a]), sol });

cx('cx-ksdp', 'dp', ['Final 2013', 'Final 2016 S2'], '0/1 knapsack using dynamic programming', 'O(nW)', `The table has (n + 1)(W + 1) cells, each filled in O(1). (Pseudo-polynomial: W is a number, not an input length.)`);
cx('cx-ksbf', 'dp', ['Final 2013', 'Final 2015 S1'], '0/1 knapsack using brute force', 'O(2ⁿ)', `All 2ⁿ subsets of the n items are tried (each checked in O(n), so O(n·2ⁿ) strictly).`);
cx('cx-bfs', 'g1', ['Final 2013', 'Final 2016 S2'], 'breadth-first search (adjacency list)', 'O(V + E)', `Each vertex is enqueued once and each adjacency list scanned once.`);
cx('cx-dfs', 'g1', ['Final 2013', 'Final 2015 S1'], 'depth-first search (adjacency list)', 'O(V + E)', `Each vertex is visited once; each edge examined once (twice if undirected).`);
cx('cx-kruskal', 'g2', 'Final 2013', "Kruskal's MST algorithm", 'O(E log V)', `Sorting the edges costs O(E lg E) = O(E lg V) (since E &lt; V², lg E &lt; 2 lg V); the disjoint-set operations are almost linear.`);
cx('cx-prim', 'g2', ['Final 2013', 'Final 2015 S1', 'Final 2016 S2'], "Prim's MST algorithm (binary heap)", 'O(E log V)', `V EXTRACT-MINs and up to E DECREASE-KEYs, each O(lg V): O((V + E) lg V) = O(E lg V) for a connected graph.`);
cx('cx-dijkstra', 'g3', ['Final 2013', 'Final 2016 S2'], "Dijkstra's shortest-path algorithm", ['O((V + E) log V)', 'O(V²)'],
  `With a binary-heap priority queue: O((V + E) lg V). With a plain array as the queue: O(V² + E) = O(V²) — the 2016 key used this version, the 2013 key the heap version. Both are accepted here.`);
cx('cx-bellman', 'g3', ['Final 2013', 'Final 2015 S1'], 'Bellman-Ford', 'O(VE)', `|V| − 1 passes, each relaxing all |E| edges. (The 2013 key wrongly listed O(V + E).)`);
cx('cx-selection', 'sort1', 'Final 2015 S1', 'selection sort', 'O(n²)', `Always n(n − 1)/2 comparisons, whatever the input.`);
cx('cx-insertion', 'sort1', ['Final 2015 S1', 'Final 2016 S2'], 'insertion sort', 'O(n²)', `Reverse-sorted input shifts every element past all earlier ones: Σ(j − 1) = n(n − 1)/2.`);
cx('cx-merge', 'sort1', 'Final 2016 S2', 'merge sort', 'O(n log n)', `T(n) = 2T(n/2) + Θ(n) in every case.`);
cx('cx-heapsort', 'heap', 'Final 2015 S1', 'heapsort', 'O(n log n)', `BUILD-MAX-HEAP O(n) + (n − 1) MAX-HEAPIFY calls of O(lg n).`);
cx('cx-heapify', 'heap', 'Final 2016 S2', 'MAX-HEAPIFY', 'O(log n)', `It walks down one root-to-leaf path: O(h) = O(lg n).`);
cx('cx-counting', 'linsort', 'Final 2015 S1', 'counting sort (n elements in the range 0..k)', 'O(n + k)', `Two loops over k counters and two loops over the n elements.`);
cx('cx-bucket', 'linsort', 'Final 2016 S2', 'bucket sort', 'O(n²)',
  `If every key falls into the same bucket, insertion sort on that bucket costs Θ(n²). The <i>expected</i> time for uniformly distributed input is Θ(n) — the 2016 key wrote O(n), which is the average case, not the worst.`);
}
