/* Quiz 1, 2025/2026 — 1st semester (graded sheet: 4/10; the grader's marks confirm the answers below) */
{
const S = 'Quiz 1 2025 S1';
Q({ id: 'qz25-1', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 5.2n³ + 20n + 1 and g(n) = 1.5n³, then:`, opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above answers are correct'], ans: 3,
  sol: `Both are Θ(n³) — the coefficients 5.2 vs 1.5 are just constants — so O, Ω and Θ all hold. (Picking only (a) was marked wrong.)` });
Q({ id: 'qz25-2', ch: 'anA', src: S, type: 'mcq', q: `An algorithm runs in n operations on a computer doing 1000 operations per <b>hour</b>. What is the largest n solvable within a day?`, opts: ['1000', '24000', '3600', '86400'], ans: 1, sol: `24 h × 1000 = 24,000 operations ≥ n.` });
Q({ id: 'qz25-3', ch: 'anB', src: S, type: 'mcq', q: `Given f(n) = 7n⁵ + n and g(n) = 5n³, which c and n<sub>0</sub> prove f(n) = Ω(g(n))?`, opts: ['c = 5, n₀ = 2', 'c = 100, n₀ = 2', 'c = 10, n₀ = 1', 'All the above answers are correct'], ans: 0,
  sol: `Need 7n⁵ + n ≥ c·5n³ for n ≥ n₀. (a) c = 5: 7n⁵ ≥ 25n³ ⇔ n² ≥ 25/7 ≈ 3.6, true for n ≥ 2 ✓ (n = 2: 226 ≥ 200). (b) n = 2: 226 ≥ 4000 ✗. (c) n = 1: 8 ≥ 50 ✗.` });
Q({ id: 'qz25-4', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = n³ + n, then f(n) is:`, opts: ['O(n³ + n)', 'o(n³ + n)', 'ω(n³ + n)', 'All the above answers are incorrect'], ans: 0,
  sol: `Every function is O of itself, but never o or ω of itself (those are strict).` });
also('qz22-3', S);
also('qz21-10', S);
also('qz21-8', S);
Q({ id: 'qz25-8', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 3ⁿ and g(n) = (√n)ⁿ, then:`, opts: ['f grows faster than g', 'f grows slower than g', 'f and g have the same rate of growth', 'Cannot be determined'], ans: 1,
  sol: `log f = n log 3, log g = (n/2) log n; the second wins, so 3ⁿ = o((√n)ⁿ). (Answer (a) was marked wrong on the graded sheet.)` });
Q({ id: 'qz25-sa', ch: 'anA', src: S, type: 'open', q: `Time complexity (most precise Big-O) of the two segments:` + code(`Segment A                     Segment B
j ← 1                         i ← 1
for j <= n do                 while i < n do
    k ← 1                         if 0 < n
    for k <= j do                     j ← 1
        print j                       for j <= n² do
        k ← k + 1                         j ← j + 1
    endFor                        else
    j ← j + 1                         print n
endFor                            endIf
                                  i ← i * 2
                              endWhile`),
  sol: `<p><b>A:</b> the inner loop runs j times → 1 + 2 + … + n = n(n + 1)/2 → <b>O(n²)</b>.</p>
        <p><b>B:</b> i doubles → ⌈lg n⌉ outer iterations; the condition 0 &lt; n is always true, so each iteration runs the n² loop → <b>O(n² log n)</b>.</p>
        <p class="note">The printed paper says "j ← i + 1" inside the loop; that is a typo for j ← j + 1 (otherwise the loop never ends). The graded answer O(n² log n) assumes j ← j + 1.</p>` });
}
