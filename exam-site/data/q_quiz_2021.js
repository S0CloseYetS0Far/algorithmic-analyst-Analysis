/* Quizzes 2021 — Quiz 1 (male & female forms, online) and Quiz 2 (online, graded with keys) */
{
const S = 'Quiz 1 2021';
Q({ id: 'qz21-1', ch: 'intro', src: S, type: 'tf', q: `Analyzing algorithms is no longer important because computers have gotten so fast.`, ans: false,
  sol: `Computers are fast but not infinitely fast, and memory is not free. A Θ(n²) vs Θ(n lg n) difference dwarfs any hardware speed-up for large n.` });
Q({ id: 'qz21-2', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 2ⁿ + n, then:`, opts: ['f(n) = O(2ⁿ)', 'f(n) = O(nⁿ)', 'f(n) = O(2ⁿ + n)', 'All the above answers are correct'], ans: 3,
  sol: `All three are valid upper bounds (O only needs f ≤ c·g eventually). O(2ⁿ) is the tightest, but the question asks which are true.` });
also('qz21-2', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-4', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 3ⁿ and g(n) = 3<sup>n²</sup>, then:`, opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above answers are correct'], ans: 0, sol: `3<sup>n²</sup>/3ⁿ = 3<sup>n² − n</sup> → ∞.` });
Q({ id: 'qz21-4m', ch: 'anB', src: 'Quiz 1 2021 (male)', type: 'mcq', q: `If f(n) = 3ⁿ and g(n) = 3<sup>2n</sup>, then:`, opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above answers are correct'], ans: 0,
  sol: `3<sup>2n</sup> = 9ⁿ, and 3ⁿ/9ⁿ = (1/3)ⁿ → 0. Exponentials with different bases are <i>not</i> Θ of each other — constants in the exponent matter.` });
Q({ id: 'qz21-5', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 3ⁿ and g(n) = (√n)ⁿ, then:`, opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above answers are correct'], ans: 0,
  sol: `Take logs: log f = n log 3, log g = (n/2) log n. Since (n/2) log n grows faster than n log 3, g dominates → f = O(g) (indeed o(g)).` });
also('qz21-5', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-6', ch: 'anB', src: S, type: 'tf', q: `The values c = 2 and n<sub>0</sub> = 1 can be used to prove f(n) = O(n³) where f(n) = n³ + 1.`, ans: true,
  sol: `n³ + 1 ≤ n³ + n³ = 2n³ for all n ≥ 1.` });
also('qz21-6', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-7', ch: 'anB', src: S, type: 'mcq', q: `Which statement is NOT correct?`, opts: ['30n + 8 is O(n²)', '30n + 8 is Ω(1)', '30n + 8 is ω(n)', '30n + 8 is O(n)'], ans: 2,
  sol: `ω(n) means strictly faster than n; 30n + 8 = Θ(n), so it is not ω(n). The others are true.` });
also('qz21-7', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-8', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = (2n⁷ + n⁴ + 10n³)(3m⁴ + 2m³ + 1), then:`, opts: ['f = O(n¹¹)', 'f = O(n⁷m⁴)', 'f = O(n⁷)', 'All the above answers are incorrect'], ans: 1,
  sol: `Two independent size parameters: keep the leading term of each factor → O(n⁷ m⁴).` });
also('qz21-8', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-9', ch: 'anA', src: S, type: 'mcq', q: `Time complexity of this algorithm?` + code(`if (condition is true) {
    j = 1
    while (j <= n) {
        i = n
        while (i >= 0)
            i = i / 2
        j = j + 1
    }
} else {
    k = 0
    while (k < n)  k = k + 1
    t = 0
    while (t < n)  t = t + 2
}`),
  opts: ['n log n', 'n', 'n²', '½n + n'], ans: 0,
  sol: `<p>Worst case = the larger branch. If-branch: outer loop n times × inner halving loop ≈ lg n times → <b>n log n</b>. Else-branch: n + n/2 = 1.5n.</p>
        <p class="note">Strictly, <code>while (i >= 0)</code> with integer division never stops once i = 0 (0/2 = 0). The intended condition is i &gt; 0 (or i ≥ 1); the intended answer is n log n.</p>` });
also('qz21-9', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-10', ch: 'anA', src: S, type: 'mcq', q: `Algorithms A and B are implemented in the same language. On inputs of the same size, A runs in 0.5 ms and B in 1 ms. Then:`, opts: ['A is faster than B', 'B is faster than A', 'A and B have the same speed', 'Cannot be determined'], ans: 3,
  sol: `One timing experiment says nothing about growth rate: it may come from different hardware, a lucky input, or a small n where B's lower-order terms dominate. Experimental timing has these limitations (slides: results may not be indicative for other inputs; the same hardware/software must be used) — so we cannot conclude.` });
also('qz21-10', 'Quiz 1 2021 (male)');
Q({ id: 'qz21-m2', ch: 'anA', src: 'Quiz 1 2021 (male)', type: 'mcq', q: `A computer performs 100 operations per second and an algorithm takes n operations. What is the largest input size n that finishes within a minute?`, opts: ['100', '360000', '71', '6000'], ans: 3,
  sol: `60 s × 100 ops/s = 6000 operations ≥ n → n = 6000.` });
also('qz21-1', 'Quiz 1 2021 (male)');
}
{
const S = 'Quiz 2 2021';
Q({ id: 'qz21b-1', ch: 'linsort', src: S, type: 'mcq', q: `To implement radix sort, ______ sort can be used (for each digit).`, opts: ['Heap', 'Merge', 'Both (a) and (b) are correct', 'Both (a) and (b) are incorrect'], ans: 1,
  sol: `Each digit pass must be <b>stable</b>. Merge sort is stable; heapsort is not.` });
Q({ id: 'qz21b-2', ch: 'anA', src: S, type: 'tf', q: `Using the suitable searching algorithm, searching for an item in an <b>ordered</b> list of n items may need n comparisons.`, ans: false,
  sol: `Binary search on a sorted list needs at most ⌊lg n⌋ + 1 comparisons.` });
Q({ id: 'qz21b-3', ch: 'linsort', src: S, type: 'tf', q: `If a comparison sort is used inside radix sort, then the time complexity will not be linear.`, ans: true,
  sol: `Each pass would cost Θ(n lg n), giving Θ(d · n lg n). Radix sort is linear only with a linear-time stable digit sort such as counting sort.` });
Q({ id: 'qz21b-4', ch: 'heap', src: S, type: 'mcq', q: `The difference between merge sort and heap sort is that:`, opts: ['Merge sort is faster than heap sort', 'Heap sort is in place while merge sort is not', 'Heap sort is stable while merge sort is not', 'All the above answers are correct'], ans: 1,
  sol: `Both are Θ(n lg n). Heapsort uses O(1) extra space; merge sort needs Θ(n). Merge sort is the stable one.` });
Q({ id: 'qz21b-5', ch: 'sort1', src: S, type: 'mcq', q: `Which of the following uses the largest amount of space for sorting?`, opts: ['Heapsort', 'Insertion sort', 'Merge sort', 'All the above algorithms are the same'], ans: 2, sol: `Merge sort needs Θ(n) auxiliary space; the others sort in place.` });
Q({ id: 'qz21b-6', ch: 'heap', src: S, type: 'mcq', q: `The asymptotically tight upper bound of building a max-heap is:`, opts: ['O(n)', 'O(n log n)', 'O(log n)', 'All the above answers are incorrect'], ans: 0,
  sol: `BUILD-MAX-HEAP: most nodes are near the bottom; Σ<sub>h</sub> ⌈n/2<sup>h+1</sup>⌉·O(h) = O(n Σ h/2<sup>h</sup>) = O(n).` });
Q({ id: 'qz21b-7', ch: 'sort1', src: S, type: 'mcq', q: `The correct insertion-sort steps on A = [3, 6, 2, 1] are:`,
  opts: ['[3,6,2,1] → [1,3,6,2] → [1,2,3,6] then [1,2,3,6]', '[3,6,2,1] → [6,2,3,1] → [6,1,2,3] then [1,2,3,6]', '[3,6,2,1] → [1,6,2,3] → [1,2,6,3] then [1,2,3,6]', '[3,6,2,1] → [3,6,2,1] → [2,3,6,1] then [1,2,3,6]'], ans: 3,
  sol: `Insert 6: no move. Insert 2 into [3, 6]: [2, 3, 6, 1]. Insert 1: [1, 2, 3, 6].` });
Q({ id: 'qz21b-8', ch: 'linsort', src: S, type: 'mcq', q: `It is suitable to apply ______ sort if the inputs are distributed uniformly over [0, 1).`, opts: ['Insertion', 'Radix', 'Bucket', 'Counting'], ans: 2, sol: `Bucket sort: expected Θ(n) for uniformly distributed keys.` });
Q({ id: 'qz21b-9', ch: 'heap', src: S, type: 'tf', q: `To sort a list in descending order (largest to smallest) with heapsort, we use a max-heap.`, ans: false,
  sol: `Heapsort moves the root to the end of the array each step. With a max-heap the largest ends up last → ascending. For descending order use a <b>min</b>-heap.` });
Q({ id: 'qz21b-10', ch: 'sort1', src: S, type: 'mcq', q: `The best algorithm to sort a nearly sorted list is:`, opts: ['Merge sort', 'Heap sort', 'Insertion sort', 'All the above answers are correct'], ans: 2, sol: `Insertion sort runs in Θ(n + inversions) ≈ linear on nearly sorted data.` });
}
