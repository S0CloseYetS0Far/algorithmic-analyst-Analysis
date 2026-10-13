/* Final 2025 — 2nd and 3rd semester (no key: solved here) */
{
const S = 'Final 2025 S2';

Q({ id: 'f25b-1', ch: 'g1', src: S, type: 'mcq',
  q: `Which of the following is an example of an O(1) time algorithm?`,
  opts: ['Accessing the weight of an edge in an adjacency-matrix representation', 'Finding the largest/smallest element in a graph', 'Determining if a specific item is in the optimal knapsack solution using the traceback method', 'Calculating the minimum cost of a path in a weighted graph'], ans: 0,
  sol: `An adjacency matrix gives w(u, v) by direct indexing M[u][v] — constant time. The others need scanning, a traceback over n rows, or a shortest-path algorithm.` });

Q({ id: 'f25b-2', ch: 'anB', src: S, type: 'mcq',
  q: `What is the closest (tightest) time complexity of <span class="m">f(n) = n² + log n</span>?`,
  opts: ['O(n log n)', 'O(n log² n)', 'O(n²)', 'O(n² + n log² n)'], ans: 2,
  sol: `Keep the dominant term: n² grows faster than log n, so f(n) = Θ(n²). Option D is also an upper bound but not the simplest/closest form.` });

Q({ id: 'f25b-3', ch: 'anB', src: S, type: 'mcq',
  q: `Which expression grows the fastest as n → ∞?`,
  opts: ['√n log n', '∛n log n', '∛n log² n', '√n log² n + ∛n log n'], ans: 3,
  sol: `√n beats ∛n (n<sup>1/2</sup> vs n<sup>1/3</sup>), and log² n beats log n. D contains √n log² n, the largest term.` });

Q({ id: 'f25b-4', ch: 'dc', src: S, type: 'mcq',
  q: `Solve <span class="m">T(n) = 9T(n/3) + n²</span> (hint: master method).`,
  opts: ['O(n²)', 'O(n³)', 'O(n² log n)', 'Cannot be solved using the master theorem'], ans: 2,
  sol: `a = 9, b = 3 → n<sup>log<sub>3</sub>9</sup> = n². f(n) = n² = Θ(n<sup>log<sub>b</sub>a</sup>) → case 2 → T(n) = Θ(n² lg n).` });

Q({ id: 'f25b-5', ch: 'heap', src: S, type: 'mcq',
  q: `After applying BUILD-MAX-HEAP to the array [7, 2, 5, 8, 4], the result is:`,
  opts: ['[8, 7, 5, 2, 4]', '[8, 5, 7, 2, 4]', '[7, 8, 5, 2, 4]', '(option D was cut off in the scan)'], ans: 0,
  fig: TREE([7, 2, 5, 8, 4]),
  sol: `<p>n = 5, so call MAX-HEAPIFY for i = ⌊5/2⌋ = 2 down to 1.</p>
        <p>i = 2 (value 2, children 8, 4): swap with 8 → [7, 8, 5, 2, 4].</p>
        <p>i = 1 (value 7, children 8, 5): swap with 8 → [8, 7, 5, 2, 4]; 7 at index 2 has children 2, 4 → fine.</p>
        <p><b>[8, 7, 5, 2, 4]</b></p>`,
  solFig: TREE([8, 7, 5, 2, 4]) });

Q({ id: 'f25b-6', ch: 'g3', src: S, type: 'mcq',
  q: `Which of the following algorithms is designed <b>without</b> using a queue in its implementation?`,
  opts: ['Bellman-Ford', 'Breadth-First Search (BFS)', "Dijkstra's Algorithm", "Prim's Algorithm"], ans: 0,
  sol: `Bellman-Ford just loops |V|−1 times over the edge list. BFS uses a FIFO queue; Dijkstra and Prim use a min-priority queue.` });

Q({ id: 'f25b-7', ch: 'linsort', src: S, type: 'mcq',
  q: `Fruits: apple, banana, kiwi, peach, grape, pear, melon, plum. Radix sort is applied letter by letter from the rightmost character to the leftmost. How many passes are needed?`,
  opts: ['4 passes', '5 passes', '6 passes', '7 passes'], ans: 2,
  sol: `Radix sort needs one pass per character position of the longest key. The longest word is "banana" with 6 letters (shorter words are padded) → <b>6 passes</b>.` });

Q({ id: 'f25b-8', ch: 'linsort', src: S, type: 'mcq',
  q: `How many comparisons are made by Counting Sort when sorting n elements in the range [0, k]?`,
  opts: ['O(n + k)', 'O(n log k)', 'O(k log n)', 'None of the above'], ans: 3,
  sol: `Counting sort is <i>not</i> comparison-based: it never compares two keys, it only counts and indexes. So "comparisons" = 0 → none of the listed bounds. (Its <i>running time</i> is Θ(n + k) — if the question meant time, A would be the intended answer.)` });

Q({ id: 'f25b-9', ch: 'greedy', src: S, type: 'mcq',
  q: `You distribute tasks among workers to minimise the maximum workload of any worker. Each task has a processing time and tasks can be assigned in any order; the goal is to balance the load. Which approach is best suited?`,
  opts: ['Dynamic Programming', 'Greedy Algorithm', 'Bellman-Ford Algorithm', "Prim's Algorithm"], ans: 1,
  sol: `Load balancing: repeatedly give the next (largest) task to the currently least-loaded worker — a greedy rule that gives a good, provably bounded result. Bellman-Ford and Prim are graph algorithms and do not apply.` });

Q({ id: 'f25b-10', ch: 'g2', src: S, type: 'mcq',
  q: `Design a communication network between cities: every city must be connected directly or indirectly, the cost of every possible cable is known, and the total cost must be minimum. Which algorithm?`,
  opts: ['Bellman-Ford Algorithm', "Dijkstra's Algorithm", 'Dynamic Programming', "Prim's Algorithm"], ans: 3,
  sol: `Connect everything at minimum total cost = minimum spanning tree → Prim's (or Kruskal's).` });

Q({ id: 'f25b-m1', ch: 'np', src: S, type: 'match',
  q: `Match each concept with its description.`,
  left: ['P (Polynomial Time)', 'NP (Nondeterministic Polynomial)', 'NP-Complete', 'NP-Hard', '3-SAT', 'Polynomial Reduction', 'Cook-Levin Theorem', 'Heuristics'],
  right: ['All problems solvable in polynomial time.', 'Hardest problems in NP that are both in NP and NP-Hard.', 'Problems that can be verified in polynomial time but may not be solvable in polynomial time.', 'An NP-Complete problem that involves determining the satisfiability of a formula in CNF form.', 'Problems that are at least as hard as NP-Complete problems but may not be in NP.', 'Approaches to find good but not guaranteed optimal solutions to NP-Complete problems.', 'Established the first NP-Complete problem, Boolean Satisfiability (SAT).', 'Transforming one problem into another in polynomial time to compare complexity.'],
  ans: [0, 2, 1, 4, 3, 7, 6, 5],
  sol: `P → A, NP → C, NP-Complete → B, NP-Hard → E, 3-SAT → D, Polynomial Reduction → H, Cook-Levin → G, Heuristics → F.` });

Q({ id: 'f25b-m2', ch: 'linsort', src: S, type: 'match',
  q: `Choose the most suitable sorting algorithm for each scenario.`,
  left: ['The dataset contains integers within a small, known range (e.g., 1 to 1000).', 'A large dataset where stability is important and you need O(n log n).', 'A nearly sorted array with only a few elements out of order.', 'Sort a large list of integers with varying digit lengths, such as phone numbers or zip codes.', 'Memory is a constraint; you cannot use extra memory for auxiliary arrays.'],
  right: ['Merge Sort', 'Insertion Sort', 'Heap Sort', 'Counting Sort', 'Radix Sort'],
  ans: [3, 0, 1, 4, 2],
  sol: `Small key range → Counting sort (Θ(n + k)). Stable + guaranteed n lg n → Merge sort. Nearly sorted → Insertion sort (≈ linear). Multi-digit keys → Radix sort. No extra memory → Heap sort (in place, O(n lg n)).` });

Q({ id: 'f25b-cs', ch: 'linsort', src: S, type: 'open',
  q: `Apply <b>Counting Sort</b> to A = [5, 2, 1, 4, 2, 1] (values in 1..5).<br>1) Show C after the counting step. 2) Show C after the cumulative-sum step. 3) What is the time complexity of counting sort?`,
  sol: tbl([['index', '1', '2', '3', '4', '5'], ['C after counting', '2', '2', '0', '1', '1'], ['C after cumulative sum', '2', '4', '4', '5', '6']]) +
    `<p>Placing from right to left gives B = [1, 1, 2, 2, 4, 5].</p><p><b>Time: Θ(n + k)</b> (n = 6 elements, k = 5 possible values).</p>` });

const dj = { n: { A: [95, 195], B: [355, 55], C: [340, 235], D: [585, 262], E: [335, 415], G: [580, 435], F: [830, 440] },
  e: 'A>B:2 A>C:7 A>E:12 E>A:4 C>B:3 B>D:2 C>D:1 C>E:2 D>F:2 G>D:1 E>G:7 F>G:2' };
Q({ id: 'f25b-dj', ch: 'g3', src: S, type: 'open',
  q: `Run <b>Dijkstra's algorithm</b> from A. In what order are vertices removed from the priority queue? Fill v.d, v.π and the order for every vertex.`,
  fig: G(dj),
  sol: `<p>A(0) → B = 2, C = 7, E = 12. B(2) → D = 4. D(4) → F = 6. F(6) → G = 8. C(7) → E = min(12, 9) = 9 (D stays 4). G(8) → nothing better. E(9) → nothing better.</p>` +
    tbl([['V', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], ['v.d', '0', '2', '7', '4', '9', '6', '8'], ['v.π', 'nil', 'A', 'A', 'B', 'C', 'D', 'F'], ['order', '1', '2', '5', '3', '7', '4', '6']]) +
    `<p><b>Order: A, B, D, F, C, G, E.</b></p>`,
  solFig: G(Object.assign({ hl: 'A>B A>C B>D C>E D>F F>G', lab: { A: '0', B: '2', C: '7', D: '4', E: '9', F: '6', G: '8' } }, dj)) });

const kr = { n: { A: [62, 220], B: [318, 45], C: [308, 228], D: [545, 238], E: [295, 428], G: [548, 432], F: [810, 450] },
  e: 'A-B:2 A-C:7 A-E:8 B-C:3 B-D:4 C-D:1 C-E:5 D-G:10 D-F:6 E-G:9 G-F:0' };
Q({ id: 'f25b-kr', ch: 'g2', src: S, type: 'open',
  q: `Using <b>Kruskal's algorithm</b>, find the MST, keeping track of the sets and the selected edges (first row: sets {A}…{G}, edge (F, G), included). Give the total MST cost.`,
  fig: G(kr),
  sol: tbl([['Step', 'Sets (before)', 'Edge', 'Included?'],
    ['1', '{A}{B}{C}{D}{E}{F}{G}', '(F,G) 0', 'yes'],
    ['2', '{A}{B}{C}{D}{E}{F,G}', '(C,D) 1', 'yes'],
    ['3', '{A}{B}{C,D}{E}{F,G}', '(A,B) 2', 'yes'],
    ['4', '{A,B}{C,D}{E}{F,G}', '(B,C) 3', 'yes'],
    ['5', '{A,B,C,D}{E}{F,G}', '(B,D) 4', 'no (same set)'],
    ['6', '{A,B,C,D}{E}{F,G}', '(C,E) 5', 'yes'],
    ['7', '{A,B,C,D,E}{F,G}', '(D,F) 6', 'yes'],
    ['8', '{A,B,C,D,E,F,G}', '(A,C) 7', 'no'],
    ['9', '{A,B,C,D,E,F,G}', '(A,E) 8', 'no'],
    ['10', '{A,B,C,D,E,F,G}', '(E,G) 9', 'no'],
    ['11', '{A,B,C,D,E,F,G}', '(D,G) 10', 'no']]) +
    `<p><b>Total MST cost = 0 + 1 + 2 + 3 + 5 + 6 = 17.</b></p>`,
  solFig: G(Object.assign({ hl: 'G-F C-D A-B B-C C-E D-F' }, kr)) });

Q({ id: 'f25b-fk', ch: 'greedy', src: S, type: 'open',
  q: `Fractional knapsack with capacity <b>W = 10 kg</b>. If two items have the same benefit/weight ratio, take the lighter one first. Fill b/w and the knapsack table (weight, items, cost).` +
    tbl([['Item', '1', '2', '3', '4'], ['Benefit', '10', '15', '40', '25'], ['Weight', '1', '3', '4', '5']]),
  sol: tbl([['Item', '1', '2', '3', '4'], ['b/w', '10', '5', '10', '5']]) +
    `<p>Order: item 1 (ratio 10, lighter), item 3 (10), item 2 (5, lighter), item 4 (5).</p>` +
    tbl([['Knapsack weight', 'Items in knapsack', 'Cost'], ['1', '1', '10'], ['5', '1, 3', '50'], ['8', '1, 3, 2', '65'], ['10', '1, 3, 2, ⅖ of 4', '65 + 25·(2/5) = 75']]) +
    `<p><b>Maximum benefit = 75.</b></p>` });

Q({ id: 'f25b-ks', ch: 'dp', src: S, type: 'open',
  q: `0/1 knapsack, capacity <b>5 kg</b>, same four items (benefits 10, 15, 40, 25; weights 1, 3, 4, 5). Fill the DP table, find the items and the optimal profit.`,
  sol: tbl([['i \\ w', '0', '1', '2', '3', '4', '5'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['1', '0', '10', '10', '10', '10', '10'],
    ['2', '0', '10', '10', '15', '25', '25'],
    ['3', '0', '10', '10', '15', '40', '50'],
    ['4', '0', '10', '10', '15', '40', '50']], { hl: [[5, 6]] }) +
    `<p>Trace: V[4,5] = V[3,5] → item 4 out. V[3,5] = 50 ≠ V[2,5] = 25 → item 3 in, w = 1. V[2,1] = V[1,1] → item 2 out. V[1,1] = 10 → item 1 in.</p>
     <p><b>Items {1, 3}, optimal profit = 50.</b></p>` });
}

{
const S = 'Final 2025 S3';

Q({ id: 'f25c-1', ch: 'anA', src: S, type: 'mcq',
  q: `Which of the following is an example of an O(1) time operation?`,
  opts: ['Traversing all elements of a linked list.', 'Accessing the top element of a stack.', 'Inserting an element into a sorted array while maintaining the sorted order.', 'Reversing a string.'], ans: 1,
  sol: `Peeking at the top of a stack is constant time. Traversal and reversal are Θ(n); sorted insertion shifts up to n elements.` });

Q({ id: 'f25c-2', ch: 'anB', src: S, type: 'mcq',
  q: `Which expression grows the fastest as n → ∞?`,
  opts: ['n log n', '√n log n', 'n log² n', 'log² n + n log n'], ans: 2,
  sol: `n log² n = (n log n)·log n, which beats n log n (option D is Θ(n log n)) and √n log n.` });

Q({ id: 'f25c-3', ch: 'g2', src: S, type: 'mcq',
  q: `Undirected graph on {A, B, C, D, E} with edges A–B (2), A–C (2), B–C (3), B–D (1), C–D (1), D–E (4), C–E (5). Prim's algorithm starts at A, ties broken alphabetically. Which node is the <b>third</b> to be added to the growing MST?`,
  opts: ['Node C', 'Node D', 'Node B', 'Node E'], ans: 1,
  fig: G({ n: { A: [0, 50], B: [60, 0], C: [60, 100], D: [130, 50], E: [200, 100] }, e: 'A-B:2 A-C:2 B-C:3 B-D:1 C-D:1 D-E:4 C-E:5' }),
  sol: `Order of insertion: A (start) → B (key 2, wins the tie with C alphabetically) → D (key 1 via B) → C (key 1 via D) → E (key 4 via D). Counting the start vertex as the first, the third node is <b>D</b>. MST weight = 2 + 1 + 1 + 4 = 8.` });

Q({ id: 'f25c-4', ch: 'linsort', src: S, type: 'mcq',
  q: `Using Counting Sort on a dataset with range 0 to 10<sup>6</sup> and only 100 elements, what is the biggest issue?`,
  opts: ['Time complexity', 'Space complexity', 'Instability', "It's comparison-based"], ans: 1,
  sol: `The count array needs k + 1 = 10<sup>6</sup> + 1 cells to sort just 100 numbers — huge memory waste (time Θ(n + k) also suffers, but the defining problem is the k-sized array).` });

Q({ id: 'f25c-5', ch: 'linsort', src: S, type: 'mcq',
  q: `In Radix Sort, how is Counting Sort typically applied?`,
  opts: ['Applied once after all digit passes to finalize the sorted order.', 'Applied before each digit pass to arrange elements by future digits.', 'Applied at each digit from least to most significant to ensure stability.', 'Applied at each digit from most to least significant to ensure stability.'], ans: 2,
  sol: `LSD radix sort runs a stable counting sort once per digit, from least significant to most significant.` });

Q({ id: 'f25c-6', ch: 'g3', src: S, type: 'mcq',
  q: `Time complexity of Dijkstra's algorithm using a min-heap priority queue?`,
  opts: ['O(|V|² lg |E|)', 'O(|E|)', 'O((|V| + |E|) lg |V|)', 'O(|V| lg (|E| + |V|))'], ans: 2,
  sol: `|V| EXTRACT-MIN and up to |E| DECREASE-KEY operations, each O(lg V) → O((V + E) lg V).` });

Q({ id: 'f25c-7', ch: 'g3', src: S, type: 'mcq',
  q: `In Bellman-Ford, how many edge relaxations are needed in the worst case?`,
  opts: ['|V| − 1 times over all E edges', '|E| − 1 times over all E edges', '|V lg V| times over all E edges', '|V + E| times over all E edges'], ans: 0,
  sol: `A shortest simple path has at most |V| − 1 edges, so |V| − 1 passes over all edges suffice → Θ(VE).` });

Q({ id: 'f25c-8', ch: 'dp', src: S, type: 'mcq',
  q: `Which principle allows dynamic programming to break problems into reusable subproblems?`,
  opts: ['Memorization', 'Greedy', 'Overlapping subproblems', 'Divide and Conquer'], ans: 2,
  sol: `DP exploits overlapping subproblems (solve each once, reuse the stored answer) together with optimal substructure. Memoization is a technique for implementing it.` });

Q({ id: 'f25c-9', ch: 'greedy', src: S, type: 'mcq',
  q: `If the knapsack capacity W is larger than the total weight of all items, what does the fractional knapsack algorithm do?`,
  opts: ['Takes no items', 'Takes all items fully', 'Takes only the highest value item', 'Fails'], ans: 1,
  sol: `Everything fits, so the greedy loop takes every item completely.` });

Q({ id: 'f25c-10', ch: 'greedy', src: S, type: 'mcq',
  q: `Fractional knapsack, capacity <b>W = 30</b>. Items: A (60, w 10), B (100, w 20), C (120, w 30). Which item is picked <u>partially</u>?`,
  opts: ['Item A', 'Item B', 'Item C', 'None'], ans: 3,
  sol: `Ratios 6, 5, 4. Take A (10) and B (20): the knapsack is exactly full at 30, so nothing is taken partially. Profit 160. (Compare W = 40, where C is partial.)` });
}
