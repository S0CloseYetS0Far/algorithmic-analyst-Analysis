/* Midterm 2024 — 2nd semester (no key: solved here) */
{
const S = 'Midterm 2024 S2';
const tf = (id, ch, q, ans, sol) => Q({ id, ch, src: S, type: 'tf', q, ans, sol });
tf('m24b-t1', 'anB', `In asymptotic analysis, constants and lower-order terms are ignored.`, true, `Only the growth rate for large n matters: 3n² + 5n + 7 = Θ(n²).`);
tf('m24b-t2', 'dc', `Recurrence relations always result in exponential solutions.`, false, `Most give polynomial/log solutions: T(n) = T(n/2) + 1 = Θ(lg n), 2T(n/2) + n = Θ(n lg n). Only some (e.g. T(n) = 2T(n − 1) + 1) are exponential.`);
tf('m24b-t3', 'sort1', `Merge sort uses a divide-and-conquer strategy to sort an array.`, true, `Divide into halves, conquer recursively, combine with MERGE.`);
tf('m24b-t4', 'sort1', `Insertion sort is more efficient than merge sort for sorting large datasets.`, false, `Insertion sort is Θ(n²) on average/worst; merge sort is Θ(n lg n). Insertion sort only wins on small or nearly sorted inputs.`);

also('m24a-1', S);
Q({ id: 'm24b-2', ch: 'anB', src: S, type: 'mcq', q: `Arrange the functions in order of growth (slowest to fastest):`,
  opts: ['O(2ⁿ), O(√log n), O(n log n), O(n²)', 'O(√log n), O(n log n), O(n²), O(2ⁿ)', 'O(n log n), O(√log n), O(n²), O(2ⁿ)', 'O(2ⁿ), O(n log n), O(n²), O(√log n)'], ans: 1,
  sol: `√log n &lt; n log n &lt; n² &lt; 2ⁿ.` });
Q({ id: 'm24b-3', ch: 'sort1', src: S, type: 'mcq', q: `Which of the following sorting algorithms does NOT work in place?`,
  opts: ['Merge Sort', 'Insertion Sort', 'Both', 'Neither'], ans: 0, sol: `Merge sort needs Θ(n) auxiliary arrays (L and R) for MERGE. Insertion sort only uses O(1) extra space.` });
Q({ id: 'm24b-4', ch: 'anB', src: S, type: 'mcq', q: `For the recurrence <span class="m">T(n) = 2T(n/2) + n</span>, which statement is true?`,
  opts: ['T(n) = ω(n² log n)', 'T(n) = ω(n log n)', 'T(n) = ω(n)', 'T(n) = ω(n²)'], ans: 2,
  sol: `T(n) = Θ(n lg n), which grows strictly faster than n → ω(n). It is <i>not</i> ω(n lg n) (same order).` });
Q({ id: 'm24b-th', ch: 'anB', src: S, type: 'open', q: `Prove that <span class="m">f(n) = 3n² − n</span> is Θ(n²) and find c<sub>1</sub>, c<sub>2</sub>, n<sub>0</sub>.`,
  sol: `<p>Upper: 3n² − n ≤ 3n² for n ≥ 1.</p><p>Lower: n ≤ n² for n ≥ 1, so 3n² − n ≥ 3n² − n² = 2n².</p><p><b>c<sub>1</sub> = 2, c<sub>2</sub> = 3, n<sub>0</sub> = 1</b> → 2n² ≤ 3n² − n ≤ 3n².</p>` });
Q({ id: 'm24b-bo', ch: 'anB', src: S, type: 'open', q: `Find the Big-O of <span class="m">f(n) = (5n⁴ + 7n³ − 1)(3n³ − 4n² + 8)</span>.`,
  sol: `The leading terms multiply: 5n⁴ · 3n³ = 15n⁷, all other products are lower degree → <b>O(n⁷)</b> (product rule: O(n⁴)·O(n³)).` });
Q({ id: 'm24b-cap', ch: 'anA', src: S, type: 'open', q: `A computer performs 10⁷ operations per second. An algorithm needs n² operations. What is the largest input size n it can handle in <b>2 hours</b>?`,
  sol: `<p>2 h = 7200 s → 7200 × 10⁷ = 7.2 × 10¹⁰ operations.</p><p>n² ≤ 7.2 × 10¹⁰ → n ≤ √(7.2 × 10¹⁰) ≈ 268,328.2.</p><p><b>n = 268,328</b> (268,328² = 71,999,915,584 ≤ 7.2 × 10¹⁰).</p>` });

Q({ id: 'm24b-rt', ch: 'dc', src: S, type: 'open', q: `<span class="m">T(n) = 3T(n/2) + n</span>. A) Draw the recursion tree. B) Number of levels. C) Total cost (Big-O).`,
  sol: tbl([['Level i', 'nodes', 'size', 'level cost'], ['0', '1', 'n', 'n'], ['1', '3', 'n/2', '(3/2)n'], ['2', '9', 'n/4', '(9/4)n'], ['i', '3<sup>i</sup>', 'n/2<sup>i</sup>', '(3/2)<sup>i</sup> n'], ['lg n', '3<sup>lg n</sup> = n<sup>lg 3</sup>', '1', 'n<sup>lg 3</sup>']]) +
    `<p><b>B)</b> n/2<sup>i</sup> = 1 → i = lg n → <b>lg n + 1 levels</b>.</p>
     <p><b>C)</b> Σ<sub>i=0..lg n −1</sub> (3/2)<sup>i</sup> n = 2n((3/2)<sup>lg n</sup> − 1) = 2n<sup>lg 3</sup> − 2n; plus leaves n<sup>lg 3</sup>. Total = 3n<sup>lg 3</sup> − 2n = <b>Θ(n<sup>lg 3</sup>) ≈ O(n<sup>1.585</sup>)</b>. The costs grow geometrically, so the leaves dominate (master case 1).</p>` });

Q({ id: 'm24b-mt', ch: 'dc', src: S, type: 'open', q: `Identify the master-theorem case and Θ for each:` +
    tbl([['T(n)', 'Case', 'Θ'], ['7T(n/2) + n² log n', '', ''], ['3T(n/4) + n² + n³', '', ''], ['3T(n/3) + n²/(log n)²', '', ''], ['9T(n/3) + n²', '', '']]),
  sol: tbl([['T(n)', 'n<sup>log<sub>b</sub>a</sup>', 'Case', 'Θ'],
    ['7T(n/2) + n² log n', 'n<sup>lg 7</sup> ≈ n<sup>2.81</sup>', '1', 'Θ(n<sup>lg 7</sup>)'],
    ['3T(n/4) + n² + n³', 'n<sup>0.79</sup>', '3 (3(n/4)³ = (3/64)n³)', 'Θ(n³)'],
    ['3T(n/3) + n²/(log n)²', 'n', '3 (f = Ω(n<sup>1.5</sup>); 3f(n/3) ≈ f(n)/3)', 'Θ(n²/log² n)'],
    ['9T(n/3) + n²', 'n²', '2', 'Θ(n² log n)']]) });

also('f24a-9', S);
Q({ id: 'm24b-ib', ch: 'sort1', src: S, type: 'open', q: `Give the best-case time complexity of insertion sort and an example array of size 5 that produces it.`,
  sol: `<b>Θ(n)</b> — when the input is already sorted, e.g. <b>[1, 2, 3, 4, 5]</b> (for ascending order): each element is compared once with its left neighbour and never moved (n − 1 comparisons).` });

Q({ id: 'm24b-mm', ch: 'sort1', src: S, type: 'open', q: `Complete Modified-Merge-Sort, which switches to Insertion Sort when the subarray size is ≤ 10:` + code(`Modified-Merge-Sort(A, p, r)
  if p < r
      if (1) ____________
          Insertion_Sort(A, p, r)
      else
          q = (2) ____________
          Modified-Merge-Sort(A, p, q)
          Modified-Merge-Sort(A, (3) ____, (4) ____)
          (5) ____________`) + `B) What is the overall time complexity? 1. O(n²) 2. O(n log n) 3. O(n log n + k²) 4. O(n log k), k ≤ 10`,
  sol: tbl([['Blank', 'Answer'], ['(1)', 'r − p + 1 ≤ 10'], ['(2)', '⌊(p + r) / 2⌋'], ['(3)', 'q + 1'], ['(4)', 'r'], ['(5)', 'MERGE(A, p, q, r)']]) +
    `<p><b>B) Option 2, O(n log n).</b> There are n/k small subarrays, each insertion-sorted in O(k²) → O(nk); merging takes lg(n/k) levels of O(n) → O(n lg(n/k)). Total O(nk + n lg(n/k)) and with k ≤ 10 a constant this is O(n lg n).</p>` });
}
