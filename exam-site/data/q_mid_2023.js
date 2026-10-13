/* Midterm 2023 — 2nd semester (graded student sheet; verified) */
{
const S = 'Midterm 2023 S2';
also('f23a-1', S);
Q({ id: 'm23b-2', ch: 'anB', src: S, type: 'mcq', q: `The big-O of <span class="m">f(n) = 2ⁿ + nⁿ + 6n² + 3n</span> is:`, opts: ['O(2ⁿ)', 'O(n²)', 'O(nⁿ)', 'None of the above'], ans: 2,
  sol: `nⁿ / 2ⁿ = (n/2)ⁿ → ∞, so nⁿ dominates.` });
Q({ id: 'm23b-3', ch: 'heap', src: S, type: 'mcq', q: `Heapsort sorts an array in place and has the following complexity:`, opts: ['O(n)', 'O(log n)', 'O(n²)', 'None of the above'], ans: 3,
  sol: `Heapsort is O(n lg n): BUILD-MAX-HEAP O(n) + (n − 1) MAX-HEAPIFY calls of O(lg n). Not listed → D.` });
also('f23a-4', S);
Q({ id: 'm23b-5', ch: 'sort1', src: S, type: 'mcq', q: `A sorting technique is called stable if it:`,
  opts: ['Takes O(n log n) time', 'Maintains the relative order of occurrence of non-distinct (equal) elements', 'Uses the divide-and-conquer paradigm', 'Takes O(n) space'], ans: 1, sol: `Stability = equal keys keep their input order.` });
Q({ id: 'm23b-6', ch: 'heap', src: S, type: 'mcq', q: `A max-heap is a heap where each parent is ≥ its children. Which tree is a max-heap?`,
  figs: [TREE([10, 8, 6, 4, null, 5, 2, null, null, null, null, 1], { cap: '(A)' }), TREE([10, 8, 6, 4, 5, 1, 2], { cap: '(B)' }), TREE([10, 5, 6, 4, 8, 2, 1], { cap: '(C)' }), TREE([5, 2, 8, 1, 4, 6, 10], { cap: '(D)' })],
  opts: ['(A)', '(B)', '(C)', '(D)'], ans: 1,
  sol: `(B) satisfies both the order and the shape. (A) has the right values ordering but is not a <i>nearly complete</i> tree (8 is missing a right child while level 3 already has a node). (C): 5 has child 8. (D): 2 &lt; 4 and the root is not the maximum.` });
Q({ id: 'm23b-7', ch: 'sort1', src: S, type: 'mcq', q: `The running time of merge sort in the worst case is:`, opts: ['O(n log n)', 'O(n²)', 'O(1)', 'O(n)'], ans: 0, sol: `Θ(n lg n) in every case.` });
Q({ id: 'm23b-8', ch: 'dc', src: S, type: 'mcq', q: `Master method on <span class="m">T(n) = T(n/2) + 1</span>:`,
  opts: ['Case 1, Θ(1)', 'Case 2, Θ(log n)', 'Case 3, Θ(1)', 'Master method cannot be used'], ans: 1, sol: `a = 1, b = 2 → n⁰ = 1 = f(n) → case 2 → Θ(lg n) (binary search).` });
also('m24c-7', S);
Q({ id: 'm23b-10', ch: 'anB', src: S, type: 'tf', q: `For any two functions f(n) and g(n), if f(n) = Θ(g(n)) then f(n) = O(g(n)) and f(n) = Ω(g(n)).`, ans: true,
  sol: `Θ is exactly "both O and Ω" (Θ(g) = O(g) ∩ Ω(g)).` });

Q({ id: 'm23b-th', ch: 'anB', src: S, type: 'open', q: `T(n) = 4n² + 3n. What is the Θ-notation of T(n)? Give the constants c<sub>1</sub> and c<sub>2</sub>.`,
  sol: `<p>4n² ≤ 4n² + 3n ≤ 4n² + 3n² = 7n² for n ≥ 1.</p><p><b>T(n) = Θ(n²), c<sub>1</sub> = 4, c<sub>2</sub> = 7, n<sub>0</sub> = 1.</b></p>` });
Q({ id: 'm23b-ord', ch: 'anB', src: S, type: 'order', q: `List the functions from the lowest to the highest order of growth.`,
  items: ['2<sup>100</sup>', '10<sup>√n</sup>', 'n<sup>log n</sup>', '√(nⁿ)'], ans: [0, 2, 1, 3],
  sol: `<p>Compare as powers of 2 (log₂ of each):</p>` + tbl([['f(n)', 'log₂ f(n)'], ['2<sup>100</sup>', '100 (constant)'], ['n<sup>log n</sup>', 'log² n'], ['10<sup>√n</sup>', '√n · log₂10 ≈ 3.32√n'], ['√(nⁿ) = n<sup>n/2</sup>', '(n/2) log n']]) +
    `<p>log² n = o(√n), so <b>2<sup>100</sup> &lt; n<sup>log n</sup> &lt; 10<sup>√n</sup> &lt; √(nⁿ)</b>. (The graded sheet put 10<sup>√n</sup> before n<sup>log n</sup> and lost marks for it.)</p>` });

Q({ id: 'm23b-rt', ch: 'dc', src: S, type: 'open', q: `Recursion tree for <span class="m">T(n) = T(n/4) + n</span> (n &gt; 1), Θ(1) for n = 1. i) Number of levels. ii) Cost of level i (except the last). iii) Cost of the last level. iv) Total cost T(n) in O-notation.`,
  sol: `<p><b>i)</b> n/4<sup>i</sup> = 1 → i = log₄ n → <b>log₄ n + 1 levels</b>.</p>
        <p><b>ii)</b> One node of size n/4<sup>i</sup> → cost <b>n/4<sup>i</sup></b>.</p>
        <p><b>iii)</b> One leaf: <b>T(1) = Θ(1)</b>.</p>
        <p><b>iv)</b> T(n) = Σ<sub>i=0..log₄n − 1</sub> n(¼)<sup>i</sup> + T(1) &lt; n · 1/(1 − ¼) + T(1) = (4/3)n + T(1) → <b>O(n)</b>.</p>` });
Q({ id: 'm23b-mm', ch: 'dc', src: S, type: 'open', q: `Use the master method to give the tight upper bound for <span class="m">T(n) = 3T(n/5) + (log n)²</span>.`,
  sol: `<p>a = 3, b = 5 → n<sup>log₅3</sup> ≈ n<sup>0.68</sup>. f(n) = log² n = O(n<sup>0.68 − ε</sup>) (any polylog grows slower than any polynomial).</p><p><b>Case 1 → T(n) = Θ(n<sup>log₅3</sup>) ≈ O(n<sup>0.68</sup>).</b></p>` });

Q({ id: 'm23b-is', ch: 'sort1', src: S, type: 'open', q: `Illustrate each iteration of sorting A = {5, 4, 3, 12, 14, 2} using (a) insertion sort and (b) merge sort (show results after each combine step).`,
  sol: `<p><b>(a) Insertion sort</b></p>` +
    tbl([['Iteration', 'Array'], ['start', '5 | 4 3 12 14 2'], ['insert 4', '4 5 | 3 12 14 2'], ['insert 3', '3 4 5 | 12 14 2'], ['insert 12', '3 4 5 12 | 14 2'], ['insert 14', '3 4 5 12 14 | 2'], ['insert 2', '2 3 4 5 12 14']]) +
    `<p><b>(b) Merge sort</b> — split [5 4 3] [12 14 2] → [5 4] [3] and [12 14] [2] → singletons. Combines: [4 5], [3 4 5], [12 14], [2 12 14], then <b>[2 3 4 5 12 14]</b>.</p>` });

Q({ id: 'm23b-mh', ch: 'heap', src: S, type: 'open', q: `Using a <b>min-heap</b>, apply heapsort to A = {30, 54, 12, 4, 40}. (a) Draw the min-heap. (b) Show the tree and array after each of the 4 sorting steps.`,
  fig: TREE([30, 54, 12, 4, 40]),
  sol: `<p><b>(a)</b> BUILD-MIN-HEAP: i = 2: 54 ↔ 4 → [30, 4, 12, 54, 40]; i = 1: 30 ↔ 4 → [4, 30, 12, 54, 40] (30 ≤ 54, 40 ok). Min-heap = <b>[4, 30, 12, 54, 40]</b>.</p>` +
    tbl([['Step', 'swap root ↔ last, MIN-HEAPIFY', 'Array (heap | sorted part)'], ['1', '4 ↔ 40 → heapify 40', '12, 30, 40, 54 | 4'], ['2', '12 ↔ 54 → heapify 54', '30, 54, 40 | 12, 4'], ['3', '30 ↔ 40 → heapify', '40, 54 | 30, 12, 4'], ['4', '40 ↔ 54', '54 | 40, 30, 12, 4']]) +
    `<p>Result: <b>54, 40, 30, 12, 4</b> — a min-heap gives <i>descending</i> order.</p>`,
  solFig: TREE([4, 30, 12, 54, 40]) });
}
