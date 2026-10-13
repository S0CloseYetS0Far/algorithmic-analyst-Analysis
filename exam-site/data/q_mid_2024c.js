/* Midterm 2024 — 3rd semester (graded student sheet; verified) */
{
const S = 'Midterm 2024 S3';
Q({ id: 'm24c-1', ch: 'anA', src: S, type: 'mcq', q: `Examples of O(1) algorithms are:`,
  opts: ['Multiplying two numbers', 'Assigning some value to a variable', 'Displaying some integer on the console', 'All of the above'], ans: 3,
  sol: `Each is a single primitive operation whose cost does not depend on any input size.` });
also('f24c-t5', S);
Q({ id: 'm24c-3', ch: 'anB', src: S, type: 'mcq', q: `The big-O of <span class="m">f(n) = 5n + 2ⁿ + 6n²</span> is:`, opts: ['O(n²)', 'O(n)', 'O(1)', 'O(2ⁿ)'], ans: 3, sol: `The exponential term dominates.` });
also('f24c-t2', S);
also('f23a-5', S);
also('m21a-17', S);
Q({ id: 'm24c-7', ch: 'dc', src: S, type: 'mcq', q: `For <span class="m">T(n) = 4T(n/6) + n</span>, the number of levels in the recursion tree is:`,
  opts: ['log₆ n + 1', 'log₄ n + 1', 'log₂ n + 1', 'n'], ans: 0, sol: `Sizes n, n/6, n/36, … reach 1 at depth log₆ n → log₆ n + 1 levels (depths 0 … log₆ n).` });
also('f23a-10', S);

Q({ id: 'm24c-bo', ch: 'anB', src: S, type: 'open', q: `<span class="m">T(n) = 10n³ + 3n log n</span>. What is the big-O of T(n), and what are the closest constants c and n<sub>0</sub>?`,
  sol: `<p>For n ≥ 1, n log n ≤ n³, so 10n³ + 3n log n ≤ 10n³ + 3n³ = 13n³.</p><p><b>T(n) = O(n³), c = 13, n<sub>0</sub> = 1.</b></p>` });
Q({ id: 'm24c-rt', ch: 'dc', src: S, type: 'open', q: `Use the recursion-tree method on <span class="m">T(n) = 2T(n/2) + 1</span> (n &gt; 1), Θ(1) for n = 1.`,
  sol: tbl([['Level i', 'nodes', 'cost'], ['0', '1', '1'], ['1', '2', '2'], ['2', '4', '4'], ['i', '2<sup>i</sup>', '2<sup>i</sup>'], ['lg n (leaves)', 'n', 'n·Θ(1)']]) +
    `<p>Total = Σ<sub>i=0..lg n −1</sub> 2<sup>i</sup> + n = (n − 1) + n = 2n − 1 = <b>Θ(n)</b>.</p>` });
also('f23a-mm', S);
Q({ id: 'm24c-alg', ch: 'anA', src: S, type: 'open', q: `What is the time complexity of this algorithm (most precise Big-O)?` + code(`i ← 1
while i <= n do
    j ← 2
    while j <= i
        print j
        j ← j * 2
    endwhile
    i ← i + 1
endwhile`),
  sol: `The outer loop runs n times; for a given i the inner loop doubles j, running ⌊lg i⌋ times. Total Σ<sub>i=1..n</sub> lg i = lg(n!) = Θ(n lg n) → <b>O(n log n)</b>.` });

Q({ id: 'm24c-cs', ch: 'linsort', src: S, type: 'open', q: `How many loops are there in the counting sort algorithm? Give each one's Big-O, and the overall running time.`,
  sol: code(`COUNTING-SORT(A, B, k)
1  for i = 0 to k             C[i] = 0                 // O(k)
2  for j = 1 to A.length      C[A[j]] = C[A[j]] + 1    // O(n)
3  for i = 1 to k             C[i] = C[i] + C[i-1]     // O(k)
4  for j = A.length downto 1  B[C[A[j]]] = A[j]
                              C[A[j]] = C[A[j]] - 1    // O(n)`) +
    `<p><b>4 loops</b>: two O(k) and two O(n). Total T(n) = 2·O(n) + 2·O(k) = <b>Θ(n + k)</b> (Θ(n) when k = O(n)). There is no recursion — the "recurrence" is just this sum.</p>` });

Q({ id: 'm24c-hp', ch: 'heap', src: S, type: 'open', q: `List [38, 27, 43, 3, 9, 82, 10]. 1) Write the list after building the max-heap. 2) Apply radix sort to the same (original) list.`,
  fig: TREE([38, 27, 43, 3, 9, 82, 10]),
  sol: `<p><b>1)</b> i = 3: 43 ↔ 82 → [38, 27, 82, 3, 9, 43, 10]. i = 2: 27 ≥ 3, 9. i = 1: 38 ↔ 82, then 38 ↔ 43 → <b>[82, 27, 43, 3, 9, 38, 10]</b>.</p>` +
    `<p><b>2)</b> Radix sort (2 digits, pad with 0):</p>` +
    tbl([['', '1', '2', '3', '4', '5', '6', '7'], ['Input', '38', '27', '43', '03', '09', '82', '10'], ['Pass 1 (units)', '10', '82', '43', '03', '27', '38', '09'], ['Pass 2 (tens)', '03', '09', '10', '27', '38', '43', '82']]),
  solFig: TREE([82, 27, 43, 3, 9, 38, 10]) });
}
