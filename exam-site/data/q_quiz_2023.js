/* Quiz 1, 2023 (Dr. Fahman Saeed, model answer — corrected where noted) */
{
const S = 'Quiz 1 2023';
also('f24a-1', S);
Q({ id: 'qz23-2', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = sin(n) and g(n) = n·sin(n):`, opts: ['f(n) is O(g(n))', 'f(n) is Ω(g(n))', 'Neither f(n) is O(g(n)) nor f(n) is Ω(g(n))', 'None of the above'], ans: 2,
  sol: `f/g = 1/n where sin n ≠ 0, but g hits 0 (or changes sign) infinitely often while f does not vanish at the same rate, so no constant bound works in either direction — the functions are incomparable.` });
also('m23c-3', S);
Q({ id: 'qz23-4', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = O(g(n)), then f(n) + g(n) is:`, opts: ['O(g(n))', 'O(f(n))', 'O(f(n)·g(n))', 'Cannot be determined'], ans: 0,
  sol: `f + g = O(max(f, g)) and f ≤ c·g, so f + g ≤ (c + 1)g.` });
Q({ id: 'qz23-5', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = log n + 1, then:`, opts: ['f(n) = Ω(1)', 'f(n) = Θ(log n + 1)', 'f(n) = O(log n)', 'All the above'], ans: 3,
  sol: `log n + 1 ≥ 1, it is trivially Θ of itself, and log n + 1 ≤ 2 log n for n ≥ 2. All true.` });
Q({ id: 'qz23-a', ch: 'anA', src: S, type: 'open', q: `Time complexity (most precise Big-O):` + code(`i ← 1
for i <= n do
    j ← 3
    for j <= i do
        print j
    endFor
endFor`),
  sol: `For i ≥ 3 the inner loop runs i − 2 times: Σ<sub>i=3..n</sub>(i − 2) = (n − 2)(n − 1)/2 → <b>O(n²)</b>.` });
Q({ id: 'qz23-b', ch: 'anA', src: S, type: 'open', q: `(Bonus) Give a closed form for Σ<sub>i=a</sub><sup>b</sup> i.`,
  sol: `<p>Σ<sub>i=a..b</sub> i = Σ<sub>i=1..b</sub> i − Σ<sub>i=1..a−1</sub> i = b(b + 1)/2 − (a − 1)a/2 = <b>(a + b)(b − a + 1)/2</b>.</p><p class="note">The posted key wrote b(b+1)/2 − a(a+1)/2, which drops the term i = a.</p>` });
Q({ id: 'qz23-c', ch: 'anB', src: S, type: 'open', q: `Find the Big-O of log(24n⁵); show the steps and find c and n<sub>0</sub>.`,
  sol: `<p>log(24n⁵) = log 24 + 5 log n. Since log₂ 24 ≈ 4.58 ≤ log n for n ≥ 24: log(24n⁵) ≤ log n + 5 log n = 6 log n.</p><p><b>O(log n), c = 6, n<sub>0</sub> = 24</b> (the key used n<sub>0</sub> = 32, which also works).</p>` });
Q({ id: 'qz23-3a', ch: 'anA', src: S, type: 'open', q: `An algorithm takes n² operations on a computer doing 5² operations per second. What is the largest input size n solvable within <b>a week</b>?`,
  sol: `<p>Operations in a week = 25 × 60 × 60 × 24 × 7 = 15,120,000.</p><p>n² ≤ 15,120,000 → n ≤ 3888.44 → <b>n = 3888</b>.</p><p class="note">The key rounded up to 3889, but 3889² = 15,124,321 exceeds the budget — the largest feasible n is 3888.</p>` });
Q({ id: 'qz23-3b', ch: 'anB', src: S, type: 'open', q: `Using limits, find the asymptotic relationship between f(n) = n<sup>log n</sup> and g(n) = n<sup>√n</sup>.`,
  sol: `<p>Compare logarithms: log f = log² n, log g = √n log n. Their ratio log² n / (√n log n) = log n / √n.</p>
    <p>L'Hôpital: lim (1/(n ln 2)) / (1/(2√n)) = lim 2/(√n ln 2) = 0. So log f − log g → −∞ and f/g → 0.</p>
    <p><b>f(n) = o(g(n))</b>, hence f(n) = O(g(n)).</p>` });
}
