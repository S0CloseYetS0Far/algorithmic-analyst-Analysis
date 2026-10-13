/* Quiz 1, 2024 — 2nd semester (no key: solved here) */
{
const S = 'Quiz 1 2024 S2';
Q({ id: 'qz24-1', ch: 'anB', src: S, type: 'mcq', q: `The closest time complexity of f(n) = n log n + n is:`, opts: ['O(n)', 'O(log(n!))', 'O(n²)', 'O(log n)'], ans: 1,
  sol: `f(n) = Θ(n log n), and log(n!) = Θ(n log n) (Stirling), so O(log(n!)) is the tight bound. O(n²) is an upper bound but not the closest.` });
Q({ id: 'qz24-2', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = n³ log n + n, then:`, opts: ['f = Ω(n!)', 'f = Ω(log n)', 'f = Ω(n⁴)', 'All the above'], ans: 1,
  sol: `f = Θ(n³ log n): it is above log n, but below n⁴ (log n = o(n)) and far below n!.` });
Q({ id: 'qz24-3', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = 2<sup>n+1</sup> and g(n) = 2ⁿ, then f(n) is:`, opts: ['O(g(n))', 'Ω(g(n))', 'Θ(g(n))', 'All the above'], ans: 3, sol: `2<sup>n+1</sup> = 2·2ⁿ — a constant factor, so Θ (hence O and Ω).` });
Q({ id: 'qz24-4', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = n², then:`, opts: ['f = o(n³)', 'f = o(n log n)', 'f = o(n²)', 'f = o(n log(n²))'], ans: 0,
  sol: `Little-o needs f/g → 0: n²/n³ = 1/n → 0 ✓. n² is not o(n²) (ratio 1), and n log(n²) = 2n log n grows slower than n².` });
Q({ id: 'qz24-sel', ch: 'anA', src: S, type: 'open', q: `Time complexity (most precise Big-O) of:` + code(`Sort(List) {
  i = 0
  while (i < List.Length) {
      SmallestElement = List[i]
      j = i + 1
      while (j < List.Length) {
          if (SmallestElement > List[j])
              SmallestElement = List[j]
          j = j + 1
      }
      Swap(List[i], SmallestElement)
      i = i + 1
  }
}`),
  sol: `This is selection sort. For each i the inner loop runs n − i − 1 times: Σ<sub>i=0..n−1</sub>(n − i − 1) = n(n − 1)/2 → <b>O(n²)</b> (Θ(n²) in every case, since the scans don't stop early).` });
Q({ id: 'qz24-pf', ch: 'anB', src: S, type: 'open', q: `Prove that T(n) = n³ + 20n + 1 is <b>not</b> O(n²).`,
  sol: `<p>Suppose it were: there exist c &gt; 0, n<sub>0</sub> with n³ + 20n + 1 ≤ cn² for all n ≥ n<sub>0</sub>.</p>
        <p>Divide by n²: n + 20/n + 1/n² ≤ c, so n ≤ c for all n ≥ n<sub>0</sub>.</p>
        <p>That is impossible — take n = max(n<sub>0</sub>, c + 1). Contradiction, so <b>T(n) ≠ O(n²)</b>. (Equivalently lim T(n)/n² = ∞.)</p>` });
}
