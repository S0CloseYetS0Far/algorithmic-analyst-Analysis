/* Final 2023 — 1st semester (graded student sheet) and 3rd semester (no key) */
{
const S = 'Final 2023 S1';

Q({ id: 'f23a-1', ch: 'anB', src: S, type: 'mcq', q: `Which Big-O notation represents the best (most efficient) time complexity?`,
  opts: ['O(n)', 'O(1)', 'O(n²)', 'O(log n)'], ans: 1, sol: `Constant time does not grow with n at all.` });
Q({ id: 'f23a-2', ch: 'linsort', src: S, type: 'mcq', q: `Which of the following algorithms has a time complexity of O(n)?`,
  opts: ['Heap Sort', 'Radix Sort', 'Merge Sort', 'Binary Search'], ans: 1,
  sol: `Radix sort is Θ(d(n + k)) — linear for a fixed number of digits d. Heap/merge sort are Θ(n lg n); binary search is Θ(lg n).` });
Q({ id: 'f23a-3', ch: 'anB', src: S, type: 'mcq', q: `The big-O of <span class="m">f(n) = 2ⁿ + 6n² + 3ⁿ</span> is:`,
  opts: ['O(2ⁿ)', 'O(n²)', 'O(n)', 'O(3ⁿ)'], ans: 3, sol: `3ⁿ dominates 2ⁿ (their ratio (3/2)ⁿ → ∞) and every polynomial.` });
Q({ id: 'f23a-4', ch: 'anB', src: S, type: 'mcq', q: `What is the asymptotic relationship between <span class="m">log(n<sup>log 6</sup>)</span> and <span class="m">log(6<sup>log n</sup>)</span>?`,
  opts: ['log n<sup>log 6</sup> is O(log 6<sup>log n</sup>)', 'log n<sup>log 6</sup> is Θ(log 6<sup>log n</sup>)', 'log n<sup>log 6</sup> is Ω(log 6<sup>log n</sup>)', 'All of the above'], ans: 3,
  sol: `log(n<sup>log 6</sup>) = log 6 · log n and log(6<sup>log n</sup>) = log n · log 6 — they are equal, so O, Θ and Ω all hold.` });
Q({ id: 'f23a-5', ch: 'sort1', src: S, type: 'mcq', q: `Which of the following is a stable sorting algorithm?`,
  opts: ['Merge sort', 'Quicksort', 'Selection sort', 'All of the above'], ans: 0,
  sol: `Merge sort keeps equal keys in input order (MERGE takes from the left half on ties). Quicksort and selection sort are not stable.` });
Q({ id: 'f23a-6', ch: 'dc', src: S, type: 'mcq', q: `Recurrence <span class="m">T(n) = T(n) + 1</span>, using the master method:`,
  opts: ['Case 1, T(n) = Θ(1)', 'Case 2, T(n) = Θ(log n)', 'Case 3, T(n) = Θ(1)', 'Master method cannot be used.'], ans: 3,
  sol: `Here b = 1 (the subproblem is not smaller), but the master method needs b &gt; 1.` });
Q({ id: 'f23a-7', ch: 'dc', src: S, type: 'mcq', q: `For the recurrence <span class="m">T(n) = 3T(n/4) + n²</span>, the sub-problem size at level i is:`,
  opts: ['log₆ n', 'n/4<sup>i</sup>', 'log₄ n', 'None of the above'], ans: 1,
  sol: `Each level divides the size by 4: n, n/4, n/16, …, n/4<sup>i</sup>. (The tree has log₄ n + 1 levels.)` });
Q({ id: 'f23a-8', ch: 'anB', src: S, type: 'mcq', q: `Given √n and n<sup>sin n</sup> (n &gt; 0), then:`,
  opts: ['√n = O(n<sup>sin n</sup>)', 'n<sup>sin n</sup> = O(√n)', 'n<sup>sin n</sup> = Ω(√n)', 'All answers are incorrect.'], ans: 3,
  sol: `sin n oscillates in [−1, 1] forever, so n<sup>sin n</sup> keeps swinging between ≈ 1/n and ≈ n. It is infinitely often far above √n and infinitely often far below it — the two functions are not comparable.` });
Q({ id: 'f23a-9', ch: 'heap', src: S, type: 'mcq', q: `A binary min-heap is stored in an array. Which array represents a binary min-heap?`,
  opts: ['25, 12, 13, 16, 8, 10, 14', '8, 10, 14, 13, 12, 25, 16', '8, 12, 16, 13, 10, 8, 14', '8, 14, 12, 13, 10, 8, 16'], ans: 1,
  sol: `Check A[parent] ≤ A[child]. (B): 8 ≤ 10, 14; 10 ≤ 13, 12; 14 ≤ 25, 16 ✓. (A) root 25 is not the minimum; (C) 12 has child 10; (D) 14 has child 13.` ,
  solFig: TREE([8, 10, 14, 13, 12, 25, 16]) });
Q({ id: 'f23a-10', ch: 'linsort', src: S, type: 'mcq', q: `Counting sort performs ______ comparisons between input elements.`,
  opts: ['0', 'n', 'n log n', 'n²'], ans: 0, sol: `Counting sort never compares keys — it counts occurrences and uses keys as indices.` });

Q({ id: 'f23a-th', ch: 'anB', src: S, type: 'open', q: `Show that <span class="m">f(n) = 3n² + 2n + 4</span> is Θ(n²) and find the constants c<sub>1</sub>, c<sub>2</sub> and n<sub>0</sub>.`,
  sol: `<p>Upper: 3n² + 2n + 4 ≤ 3n² + 2n² + 4n² = 9n² for n ≥ 1.</p><p>Lower: 3n² + 2n + 4 ≥ 3n² for n ≥ 1.</p>
        <p>So c<sub>1</sub>n² ≤ f(n) ≤ c<sub>2</sub>n² with <b>c<sub>1</sub> = 3, c<sub>2</sub> = 9, n<sub>0</sub> = 1</b> → f(n) = Θ(n²).</p>` });
Q({ id: 'f23a-ord', ch: 'anB', src: S, type: 'open', q: `Sort in increasing order of asymptotic growth: 5ⁿ, n<sup>log n</sup>, 4 log n, n⁴.`,
  sol: `<b>4 log n &lt; n⁴ &lt; n<sup>log n</sup> &lt; 5ⁿ</b>. n<sup>log n</sup> = 2<sup>log² n</sup> beats every polynomial (log n eventually exceeds 4) but loses to 5ⁿ = 2<sup>n log 5</sup> since log² n = o(n).` });
Q({ id: 'f23a-om', ch: 'anB', src: S, type: 'open', q: `Express <span class="m">n³/1000 + 100n² − 100n + 3</span> in Ω-notation.`,
  sol: `<p>For n ≥ 1, 100n² − 100n ≥ 0, so f(n) ≥ n³/1000 = c·n³ with c = 1/1000, n<sub>0</sub> = 1.</p><p><b>f(n) = Ω(n³)</b> (in fact Θ(n³)).</p>` });
Q({ id: 'f23a-alg', ch: 'anA', src: S, type: 'open', q: `What is the time complexity of this algorithm in the most precise Big-O?` + code(`Algo(n)
  for i = 1 to n
      for j = 1 to 2^i
          print(j)`),
  sol: `<p>The inner loop runs 2<sup>i</sup> times, so the total is Σ<sub>i=1..n</sub> 2<sup>i</sup> = 2<sup>n+1</sup> − 2.</p><p><b>Θ(2ⁿ)</b>. (n·2ⁿ is an upper bound but not the most precise.)</p>` });

Q({ id: 'f23a-rt', ch: 'dc', src: S, type: 'open',
  q: `Recursion tree for <span class="m">T(n) = 4T(n/2) + n</span> (n &gt; 1), T(1) = 1.<br>A) Draw the tree. B) Number of levels and cost at level i. C) Number of leaves. D) Total cost (big-O), showing details.`,
  sol: `<p><b>A)</b> Root cost n; it has 4 children of cost n/2; each has 4 children of cost n/4; …</p>` +
    tbl([['Level i', 'nodes', 'cost per node', 'level cost'], ['0', '1', 'n', 'n'], ['1', '4', 'n/2', '2n'], ['2', '16', 'n/4', '4n'], ['i', '4<sup>i</sup>', 'n/2<sup>i</sup>', '2<sup>i</sup>n'], ['lg n (leaves)', '4<sup>lg n</sup> = n²', 'T(1) = 1', 'n²']]) +
    `<p><b>B)</b> Size n/2<sup>i</sup> = 1 → i = lg n, so <b>lg n + 1 levels</b>; cost at level i = <b>2<sup>i</sup>n</b>.</p>
     <p><b>C)</b> Leaves = 4<sup>lg n</sup> = n<sup>lg 4</sup> = <b>n²</b>.</p>
     <p><b>D)</b> Internal: Σ<sub>i=0..lg n −1</sub> 2<sup>i</sup>n = n(2<sup>lg n</sup> − 1) = n² − n. Leaves: n². Total = 2n² − n = <b>Θ(n²)</b> (agrees with master case 1).</p>` });

Q({ id: 'f23a-mm', ch: 'dc', src: S, type: 'open', q: `Solve with the master method: <span class="m">T(n) = 8T(n/2) + n³</span>.`,
  sol: `a = 8, b = 2 → n<sup>log<sub>2</sub>8</sup> = n³ = Θ(f(n)) → <b>case 2 → T(n) = Θ(n³ lg n)</b>.` });

Q({ id: 'f23a-hs', ch: 'heap', src: S, type: 'open',
  q: `File sizes 26, 77, 1, 61, 11, 59 are sorted in <b>descending</b> order with heapsort (using a min-heap).<br>A) Draw the initial heap before the min-heap is built. B) Draw the initial min-heap. C) Give the array after one iteration (popping 1 from the root). D) After 11 is popped and the heap restructured, what is the new root?`,
  fig: TREE([26, 77, 1, 61, 11, 59]),
  sol: `<p><b>A)</b> As given: root 26; children 77, 1; then 61, 11, 59.</p>
    <p><b>B)</b> BUILD-MIN-HEAP: i = 3 (1 ≤ 59) ok; i = 2: 77 ↔ 11 → [26, 11, 1, 61, 77, 59]; i = 1: 26 ↔ 1 → <b>[1, 11, 26, 61, 77, 59]</b>.</p>
    <p><b>C)</b> Swap root with last → [59, 11, 26, 61, 77 | 1]; MIN-HEAPIFY: 59 ↔ 11 → <b>[11, 59, 26, 61, 77, 1]</b> (59's children 61, 77 are larger).</p>
    <p><b>D)</b> Swap 11 with 77 → [77, 59, 26, 61 | 11, 1]; heapify: 77 ↔ 26 → root <b>26</b>.</p>`,
  solFig: TREE([1, 11, 26, 61, 77, 59]) });

Q({ id: 'f23a-dna', ch: 'linsort', src: S, type: 'open',
  q: `Sort the DNA sequences ACGG, AAAA, TCCA, AGCT, CAAT with radix sort (alphabet order A &lt; C &lt; G &lt; T). Show the list after each pass.`,
  sol: tbl([['Original', 'Pass 1 (4th char)', 'Pass 2 (3rd)', 'Pass 3 (2nd)', 'Pass 4 (1st)'],
    ['ACGG', 'AAAA', 'AAAA', 'AAAA', 'AAAA'], ['AAAA', 'TCCA', 'CAAT', 'CAAT', 'ACGG'], ['TCCA', 'ACGG', 'TCCA', 'TCCA', 'AGCT'], ['AGCT', 'AGCT', 'AGCT', 'ACGG', 'CAAT'], ['CAAT', 'CAAT', 'ACGG', 'AGCT', 'TCCA']], { rowHead: false }) +
    `<p>Each pass is a stable sort on one position, starting from the last character. Final: AAAA, ACGG, AGCT, CAAT, TCCA.</p>` });
}

{
const S = 'Final 2023 S3';
Q({ id: 'f23c-1', ch: 'sort1', src: S, type: 'mcq', q: `How many passes does an insertion sort algorithm consist of (for N elements)?`,
  opts: ['N', 'N − 1', 'N + 1', 'N²'], ans: 1, sol: `Elements 2..N are each inserted once into the sorted prefix → N − 1 passes.` });
also('f24a-8', S);
also('f24c-t5', S);
Q({ id: 'f23c-4', ch: 'sort1', src: S, type: 'mcq', q: `Which sorting algorithm takes the least time when all elements of the input array are identical?`,
  opts: ['Heap sort', 'Merge sort', 'Insertion sort', 'All the above answers are correct'], ans: 2,
  sol: `Identical keys = already sorted input → insertion sort's best case Θ(n): each element is compared once and never moved. Merge sort stays Θ(n lg n).` });
also('f24c-t8', S);
Q({ id: 'f23c-6', ch: 'dp', src: S, type: 'mcq', q: `To apply dynamic programming, a problem must have two key properties: optimal substructure and:`,
  opts: ['It has overlapping subproblems.', 'It has multiple subproblems.', 'It contains no overlapping subproblems.', 'It consists of a single problem.', 'All answers are incorrect.'], ans: 0,
  sol: `Optimal substructure + overlapping subproblems.` });
Q({ id: 'f23c-7', ch: 'np', src: S, type: 'mcq', q: `A problem that can be solved in O(n<sup>c</sup>) time, where c is a positive number, belongs to the set of:`,
  opts: ['NP-Complete problems.', 'NP problems.', 'P problems.', 'Problems solvable in exponential time.', 'All answers are incorrect.'], ans: 2,
  sol: `Polynomial time = class P (the most specific answer; P is of course also inside NP).` });
Q({ id: 'f23c-8', ch: 'np', src: S, type: 'mcq', q: `A computational problem in which the aim is to find a solution with the best possible score, according to some objective function, is:`,
  opts: ['A decision problem.', 'A polynomial problem.', 'An NP-Complete problem.', 'An NP problem.', 'All answers are incorrect.'], ans: 4,
  sol: `That is the definition of an <b>optimization</b> problem — not listed, so "all answers are incorrect".` });
Q({ id: 'f23c-9', ch: 'greedy', src: S, type: 'mcq', q: `The objective of the knapsack problem is:`,
  opts: ['To get minimum total value in the knapsack.', 'To get maximum weight in the knapsack.', 'To get minimum weight in the knapsack.', 'To get maximum total value in the knapsack.'], ans: 3,
  sol: `Maximise the total value subject to the weight capacity.` });
also('f24c-t6', S);
also('f24a-asy', S);
Q({ id: 'f23c-th', ch: 'anB', src: S, type: 'open', q: `Find Θ, c<sub>1</sub>, c<sub>2</sub>, n<sub>0</sub> for <span class="m">f(n) = n² + √n</span>.`,
  sol: `<p>For n ≥ 1, √n ≤ n², so n² ≤ n² + √n ≤ 2n².</p><p><b>f(n) = Θ(n²)</b> with c<sub>1</sub> = 1, c<sub>2</sub> = 2, n<sub>0</sub> = 1.</p>` });
Q({ id: 'f23c-it', ch: 'dc', src: S, type: 'open', q: `Give the tight bound of <span class="m">T(n) = 4T(n/2) + n²</span> using (1) the iteration method and (2) the master method.`,
  sol: `<p><b>Iteration:</b> T(n) = 4T(n/2) + n² = 16T(n/4) + 4(n/2)² + n² = 16T(n/4) + 2n² = 64T(n/8) + 3n² = … = 4<sup>k</sup>T(n/2<sup>k</sup>) + kn².</p>
        <p>n/2<sup>k</sup> = 1 → k = lg n: T(n) = n²·T(1) + n² lg n = <b>Θ(n² lg n)</b>.</p>
        <p><b>Master:</b> a = 4, b = 2, n<sup>log<sub>2</sub>4</sup> = n² = f(n) → case 2 → Θ(n² lg n).</p>` });
Q({ id: 'f23c-foo', ch: 'dc', src: S, type: 'open', q: `Determine the complexity of this code in Big-O (hint: recursion tree).` + code(`foo(n) {
  if (n == 0) return;
  foo(n - 1);
  foo(n - 1);
  print n;
}`),
  sol: `<p>T(n) = 2T(n − 1) + c. The recursion tree is a full binary tree of depth n: level i has 2<sup>i</sup> calls each doing c work.</p>
        <p>Total = c(1 + 2 + 4 + … + 2<sup>n</sup>) = c(2<sup>n+1</sup> − 1) = <b>O(2ⁿ)</b>.</p>` });

const m = { n: { 0: [160, 255], 2: [550, 80], 6: [795, 255], 7: [510, 325], 1: [280, 455], 3: [405, 625], 5: [130, 800], 4: [625, 795] },
  e: '0-2:29 0-6:51 0-7:31 0-1:32 0-5:60 7-6:25 7-1:21 7-4:46 6-4:51 3-5:18 3-4:34 5-4:40' };
Q({ id: 'f23c-kr', ch: 'g2', src: S, type: 'open',
  q: `Use <b>Kruskal's algorithm</b>: (A) draw the MST, (B) give the MCST value, (C) give the order in which edges are added. (D) If Prim's algorithm starts at vertex 0, in what order are vertices removed from the priority queue?`,
  fig: G(m),
  sol: `<p>Sorted: 3-5 18, 1-7 21, 6-7 25, 0-2 29, 0-7 31, 0-1 32, 3-4 34, 4-5 40, 4-7 46, 0-6 51, 4-6 51, 0-5 60.</p>
    <p><b>(C)</b> (3,5), (1,7), (6,7), (0,2), (0,7), [0-1 rejected], (3,4), [4-5 rejected], (4,7) → 7 edges, done.</p>
    <p><b>(B)</b> 18 + 21 + 25 + 29 + 31 + 34 + 46 = <b>204</b>.</p>
    <p><b>(D) Prim from 0:</b> 0 → 2 (29) → 7 (31) → 1 (21) → 6 (25) → 4 (46) → 3 (34) → 5 (18). Order: <b>0, 2, 7, 1, 6, 4, 3, 5</b>.</p>`,
  solFig: G(Object.assign({ hl: '3-5 7-1 7-6 0-2 0-7 3-4 7-4' }, m)) });

const bf = { n: { A: [420, 350], B: [575, 250], E: [705, 340], C: [465, 480], D: [645, 475] }, e: 'A>B:-1 A>C:4 B>C:3 B>D:2 B>E:2 D>C:5 D>B:1 E>D:-3' };
Q({ id: 'f23c-bf', ch: 'g3', src: S, type: 'open',
  q: `(A) Which algorithm must be used to find shortest paths from A in this graph: Dijkstra or Bellman-Ford? (B) Why? (C) Give the shortest path and cost from A to C, D and E. (D) Write the in-degree of every vertex.`,
  fig: G(bf),
  sol: `<p><b>(A) Bellman-Ford.</b> <b>(B)</b> The graph has negative edge weights (−1, −3); Dijkstra's greedy choice is only correct for non-negative weights. There is no negative cycle (B→D→B = 3, B→E→D→B = 0).</p>` +
    tbl([['From A to', 'Path', 'Cost'], ['C', 'A → B → C', '2'], ['D', 'A → B → E → D', '−2'], ['E', 'A → B → E', '1']]) +
    `<p>(B itself: A → B, cost −1.)</p><p><b>(D)</b> in-degree: A 0, B 2, C 3, D 2, E 1.</p>`,
  solFig: G(Object.assign({ hl: 'A>B B>C B>E E>D', lab: { A: '0', B: '−1', C: '2', D: '−2', E: '1' } }, bf)) });

Q({ id: 'f23c-fk', ch: 'greedy', src: S, type: 'open',
  q: `Items (liters, lifetime): 1 (10, 8), 2 (200, 14), 3 (50, 2), 4 (20, 80). You want maximum total lifetime, may take a whole item or part of it, and cannot exceed 100 liters.<br>A) What problem is this? B) What type of algorithm solves it? C) Apply it: which items, how many liters each, and the maximum lifetime.`,
  sol: `<p><b>A)</b> Fractional knapsack. <b>B)</b> Greedy (by lifetime per liter).</p>` +
    tbl([['Item', '1', '2', '3', '4'], ['lifetime / liter', '0.8', '0.07', '0.04', '4']]) +
    `<p>Order 4, 1, 2, 3. Take item 4: 20 L (80). Item 1: 10 L (8) → 30 L. Item 2: the remaining 70 L of 200 → 14 × 70/200 = 4.9. Knapsack full.</p>
     <p><b>Item 4: 20 L, item 1: 10 L, item 2: 70 L, item 3: 0 L. Max lifetime = 80 + 8 + 4.9 = 92.9.</b></p>` });
}
