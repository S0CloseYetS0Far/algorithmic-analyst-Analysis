/* Midterm 2023 — 3rd semester (model answer) */
{
const S = 'Midterm 2023 S3';
also('m24c-1', S);
Q({ id: 'm23c-2', ch: 'anA', src: S, type: 'mcq', q: `What is the cost function T(n) (number of times <code>value += 1</code> runs)?` + code(`int value = 0;
for (int i = 0; i < n; i++)
    for (int j = 0; j < i; j++)
        value += 1;`),
  opts: ['n', 'n + 1', 'n(n − 1)/2', 'n(n + 1)/2'], ans: 2,
  sol: `For each i the inner loop runs i times: 0 + 1 + … + (n − 1) = n(n − 1)/2.` });
also('f24c-t4', S);
Q({ id: 'm23c-3', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = O(g(n)) and g(n) = O(h(n)), then:`, opts: ['h(n) = Ω(f(n))', 'h(n) = O(f(n))', 'h(n) = Θ(f(n))', 'None of the above'], ans: 0,
  sol: `Transitivity gives f = O(h), equivalently h = Ω(f).` });
Q({ id: 'm23c-4', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 5n log n and g(n) = n log 5n, then:`, opts: ['f = O(g)', 'f = Θ(g)', 'f = Ω(g)'], ans: 1,
  sol: `g(n) = n(log 5 + log n) = Θ(n log n) = Θ(f).` });
also('f23a-8', S);
Q({ id: 'm23c-6', ch: 'anB', src: S, type: 'mcq', q: `Let f(n) = 2<sup>2n</sup>. A correct asymptotic upper bound for f(n) is:`,
  opts: ['O(2)', 'O(2ⁿ)', 'O(2<sup>2n</sup>)', 'All answers are correct', 'All answers are incorrect'], ans: 2,
  sol: `2<sup>2n</sup> = 4ⁿ, and 4ⁿ/2ⁿ = 2ⁿ → ∞, so it is <i>not</i> O(2ⁿ). Only O(2<sup>2n</sup>) works.` });
Q({ id: 'm23c-7', ch: 'dc', src: S, type: 'mcq', q: `Which approach is adopted in divide & conquer algorithms?`, opts: ['Top-down', 'Bottom-up', 'Both', 'None of the above'], ans: 0,
  sol: `D&C starts from the full problem and splits it recursively (top-down).` });
also('f24c-t9', S);
Q({ id: 'm23c-8', ch: 'dc', src: S, type: 'mcq', q: `Solution of <span class="m">T(n) = 8T(n/2) + 1000n²</span> (master method):`, opts: ['O(n²)', 'O(n)', 'O(n³)', 'O(n log n)'], ans: 2,
  sol: `n<sup>log₂8</sup> = n³; f(n) = 1000n² = O(n<sup>3−ε</sup>) → case 1 → Θ(n³). Constants like 1000 don't matter.` });
Q({ id: 'm23c-9', ch: 'sort1', src: S, type: 'mcq', q: `Worst-case running times of insertion sort and merge sort, respectively:`,
  opts: ['O(n log n), O(n log n)', 'O(n log n), O(n²)', 'O(n²), O(n²)', 'O(n²), O(n log n)'], ans: 3, sol: `Insertion Θ(n²) (reverse order); merge Θ(n lg n) always.` });
also('m23b-5', S);

Q({ id: 'm23c-tf', ch: 'anA', src: S, type: 'open', q: `Compute the running time function T(n) in terms of n, then give its Big-O.` + code(`1  function(n) {
2      for i = 1 to n*n
3          for j = 1 to n
4              print "*";
5  }`),
  sol: tbl([['Line', 'Cost', 'Times'], ['2', 'c₂', 'n² + 1'], ['3', 'c₃', 'n²(n + 1)'], ['4', 'c₄', 'n² · n = n³']]) +
    `<p>T(n) = c₂(n² + 1) + c₃(n³ + n²) + c₄n³ = (c₃ + c₄)n³ + (c₂ + c₃)n² + c₂ → <b>O(n³)</b>.</p>
     <p class="note">The posted model answer wrote c₄·n for line 4; the print runs n³ times. The final O(n³) is the same.</p>` });
Q({ id: 'm23c-lg', ch: 'anB', src: S, type: 'open', q: `Find O, c and n<sub>0</sub> for f(n) = log(n + 5).`,
  sol: `<p>For n ≥ 5: log(n + 5) ≤ log(2n) = 1 + log n. For n ≥ 2: 1 ≤ log n, so 1 + log n ≤ 2 log n.</p><p><b>f(n) = O(log n), c = 2, n<sub>0</sub> = 5</b> (the model answer wrote n<sub>0</sub> = 2, but the first step needs n ≥ 5).</p>` });
Q({ id: 'm23c-rt', ch: 'dc', src: S, type: 'open', q: `Recursion tree for <span class="m">T(n) = 3T(n/4) + n²</span>: (1) sub-problem size at level i; (2) total cost of level i; (3) number of levels; (4) total cost (Big-O).`,
  sol: `<p><b>1)</b> n/4<sup>i</sup>. <b>2)</b> 3<sup>i</sup> · c(n/4<sup>i</sup>)² = <b>(3/16)<sup>i</sup> cn²</b>. <b>3)</b> <b>log₄ n + 1</b> levels.</p>
        <p><b>4)</b> T(n) = Σ<sub>i=0..log₄n−1</sub> (3/16)<sup>i</sup> cn² + Θ(n<sup>log₄3</sup>) &lt; cn²/(1 − 3/16) + Θ(n<sup>log₄3</sup>) = (16/13)cn² + Θ(n<sup>0.79</sup>) → <b>O(n²)</b>.</p>` });
Q({ id: 'm23c-mm', ch: 'dc', src: S, type: 'open', q: `Solve with the master method: <span class="m">T(n) = 4T(n/4) + n²</span>.`,
  sol: `a = 4, b = 4 → n<sup>log₄4</sup> = n. f(n) = n² = Ω(n<sup>1+ε</sup>); regularity 4(n/4)² = n²/4 ≤ ¼·n² ✓ → <b>case 3 → Θ(n²)</b>.` });
Q({ id: 'm23c-is', ch: 'sort1', src: S, type: 'open', q: `Apply insertion sort to {89, 45, 68, 90, 29, 34, 17}. Then: I) its time complexity (worst/average/best); II) is it stable? III) is it in place?`,
  sol: tbl([['Pass', 'Array'], ['0', '89 | 45 68 90 29 34 17'], ['1', '45 89 | 68 90 29 34 17'], ['2', '45 68 89 | 90 29 34 17'], ['3', '45 68 89 90 | 29 34 17'], ['4', '29 45 68 89 90 | 34 17'], ['5', '29 34 45 68 89 90 | 17'], ['6', '17 29 34 45 68 89 90']]) +
    `<p><b>I)</b> Worst Θ(n²), average Θ(n²), best Θ(n). <b>II)</b> Yes, stable. <b>III)</b> Yes, in place.</p>` });
Q({ id: 'm23c-ms', ch: 'sort1', src: S, type: 'open', q: `Apply merge sort to {E, X, A, M, P, L, E} (alphabetical). Then: I) is it stable? II) is it in place? III) its time complexity.`,
  sol: `<p>Split: EXA | MPLE → E | XA, MP | LE → singletons.</p><p>Merge: XA → AX; E + AX → AEX. MP → MP; LE → EL; MP + EL → ELMP. AEX + ELMP → <b>A E E L M P X</b>.</p>
        <p><b>I)</b> Yes, stable. <b>II)</b> No — MERGE needs Θ(n) extra space. <b>III)</b> Θ(n lg n).</p>` });
}
