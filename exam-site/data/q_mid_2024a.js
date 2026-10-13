/* Midterm 2024 — 1st semester (no key: solved here) */
{
const S = 'Midterm 2024 S1';
const Y = '<b class="yes">yes</b>', N = 'no';

Q({ id: 'm24a-1', ch: 'anB', src: S, type: 'mcq', q: `Which Big-O represents the best (most efficient) time complexity?`,
  opts: ['O(n²)', 'O(lg(n!))', 'O(2<sup>lg n</sup>)', 'O(n lg n)'], ans: 2,
  sol: `2<sup>lg n</sup> = n → O(n). lg(n!) = Θ(n lg n). So the order is n &lt; n lg n = lg(n!) &lt; n².` });
Q({ id: 'm24a-2', ch: 'dc', src: S, type: 'mcq', q: `Master method on <span class="m">T(n) = 4T(n/5) + 5n</span>:`,
  opts: ['Case 1, Θ(n<sup>log₅4</sup>)', 'Case 2, Θ(n<sup>log₅4</sup> log n)', 'Case 3, Θ(n)', 'Master method cannot be used'], ans: 2,
  sol: `n<sup>log₅4</sup> ≈ n<sup>0.86</sup>; f(n) = 5n = Ω(n<sup>0.86+ε</sup>). Regularity: 4·5(n/5) = 4n = (4/5)·5n, c = 4/5 &lt; 1 ✓ → case 3, Θ(n).` });
Q({ id: 'm24a-3', ch: 'heap', src: S, type: 'mcq', q: `Which array represents a binary max-heap?`,
  opts: ['30, 13, 10, 2, 3, 14, 11', '30, 13, 10, 14, 11, 2, 3', '30, 13, 14, 2, 3, 10, 11', '30, 3, 14, 10, 11, 2, 13'], ans: 2,
  sol: `(C): 30 ≥ 13, 14; 13 ≥ 2, 3; 14 ≥ 10, 11 ✓. (A) 10 has child 14; (B) 13 has child 14; (D) 3 has children 10, 11.`, solFig: TREE([30, 13, 14, 2, 3, 10, 11]) });
Q({ id: 'm24a-4', ch: 'sort1', src: S, type: 'mcq', q: `Which is NOT a stable sorting algorithm in its typical implementation?`,
  opts: ['Counting sort', 'Merge sort', 'Insertion sort', 'Heap sort'], ans: 3,
  sol: `Heapsort swaps the root with far-away elements, so equal keys can change order. Counting sort (placing right-to-left), merge sort and insertion sort are stable.` });
Q({ id: 'm24a-5', ch: 'heap', src: S, type: 'mcq', q: `We are sorting eight integers with heapsort and have just finished some heapify operations. The array now looks like: 16, 14, 15, 10, 12, 27, 28. How many heapify operations have been performed on the root of the heap?`,
  opts: ['1', '2', '3', '4'], ans: 1,
  sol: `Every heapsort iteration moves the current maximum to the end and then heapifies the root. The largest values 27, 28 are already in their final places at the end and the front [16, 14, 15, 10, 12] is still a heap → <b>2</b> root heapify operations. (This is a well-known GATE question; the array is printed with 7 values.)` });
Q({ id: 'm24a-6', ch: 'sort1', src: S, type: 'mcq', q: `Worst-case time complexity of insertion sort when the insertion position is found with binary search?`,
  opts: ['O(n²)', 'O(n)', 'O(n² log n)', 'O(n log n)'], ans: 0,
  sol: `Binary search cuts comparisons to O(lg n) per element (O(n lg n) total), but each insertion may still shift up to j − 1 elements → Θ(n²) moves.` });
also('f23a-th', S);
Q({ id: 'm24a-asy', ch: 'anB', src: S, type: 'open',
  q: `For each pair (A, B), write yes/no: is A = O, o, Ω, ω, Θ of B?` +
    tbl([['A', 'B', 'O', 'o', 'Ω', 'ω', 'Θ'], ['2ⁿ', '2<sup>n/2</sup>', '', '', '', '', ''], ['n<sup>log m</sup>', 'm<sup>log n</sup>', '', '', '', '', ''], ['log n + 100', 'log n² + n³', '', '', '', '', ''], ['n<sup>7/4</sup>', 'n log₂ n', '', '', '', '', '']]),
  sol: tbl([['A', 'B', 'O', 'o', 'Ω', 'ω', 'Θ'],
    ['2ⁿ', '2<sup>n/2</sup>', N, N, Y, Y, N],
    ['n<sup>log m</sup>', 'm<sup>log n</sup>', Y, N, Y, N, Y],
    ['log n + 100', 'log n² + n³', Y, Y, N, N, N],
    ['n<sup>7/4</sup>', 'n log₂ n', N, N, Y, Y, N]]) +
    `<ul><li>2ⁿ / 2<sup>n/2</sup> = 2<sup>n/2</sup> → ∞.</li><li>n<sup>log m</sup> = 2<sup>log n · log m</sup> = m<sup>log n</sup> — identical.</li><li>B is dominated by n³.</li><li>n<sup>7/4</sup> / (n log n) = n<sup>3/4</sup>/log n → ∞.</li></ul>` });

Q({ id: 'm24a-rt', ch: 'dc', src: S, type: 'open',
  q: `<span class="m">T(n) = T(n/2) + n²</span> (n &gt; 1), T(1) = 1. 1) Draw the recursion tree. 2) Number of levels. 3) Total cost (Big-O).`,
  sol: `<p><b>1)</b> A single chain: n² → (n/2)² → (n/4)² → … → T(1).</p>
        <p><b>2)</b> n/2<sup>i</sup> = 1 → i = lg n, so <b>lg n + 1 levels</b>.</p>
        <p><b>3)</b> Σ<sub>i=0..lg n −1</sub> n²/4<sup>i</sup> + 1 ≤ n² · 1/(1 − ¼) + 1 = (4/3)n² + 1 → <b>O(n²)</b> (the root dominates; agrees with master case 3).</p>` });
also('f24a-3', S);
also('f23a-mm', S);

Q({ id: 'm24a-cs', ch: 'linsort', src: S, type: 'open',
  q: `Counting sort on A = [4, 2, 3, 0, 9, 1, 4] (keys 0..9). 1) Write C′ after accumulating. 2) Write the output array B after the first iteration of the placement loop.`,
  sol: tbl([['i', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], ['count', '1', '1', '1', '1', '2', '0', '0', '0', '0', '1'], ['C′', '1', '2', '3', '4', '6', '6', '6', '6', '6', '7']]) +
    `<p>First iteration takes A[7] = 4 → B[C′[4]] = B[6] = 4, then C′[4] = 5.</p>` +
    tbl([['B', '1', '2', '3', '4', '5', '6', '7'], ['', '', '', '', '', '', '4', '']]) });

Q({ id: 'm24a-hp', ch: 'heap', src: S, type: 'open',
  q: `A = [23, 17, 14, 6, 13, 10, 1, 5, 7, 12]. 1) Is A a max-heap? Draw it. 2) If necessary, apply MAX-HEAPIFY so that all nodes satisfy the max-heap property.`,
  fig: TREE([23, 17, 14, 6, 13, 10, 1, 5, 7, 12]),
  sol: `<p><b>1) No.</b> Node 4 holds 6 but its right child (index 9) holds 7 &gt; 6.</p>
        <p><b>2)</b> MAX-HEAPIFY(A, 4): swap 6 ↔ 7 → <b>[23, 17, 14, 7, 13, 10, 1, 5, 6, 12]</b>, now a valid max-heap.</p>`,
  solFig: TREE([23, 17, 14, 7, 13, 10, 1, 5, 6, 12]) });

Q({ id: 'm24a-hs', ch: 'heap', src: S, type: 'open',
  q: `Given the max-heap below, draw the heap after the <b>first iteration</b> of HEAPSORT(A).`,
  fig: TREE([100, 19, 36, 17, 3, 25, 1, 2, 7]),
  sol: `<p>Swap root 100 with the last element 7 → [7, 19, 36, 17, 3, 25, 1, 2 | 100], heap-size 8.</p>
        <p>MAX-HEAPIFY(1): 7 ↔ 36 → 7 ↔ 25 → <b>[36, 19, 25, 17, 3, 7, 1, 2 | 100]</b>.</p>`,
  solFig: TREE([36, 19, 25, 17, 3, 7, 1, 2]) });
}
