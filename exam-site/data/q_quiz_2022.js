/* Quiz 2022 (two photos, questions 2–10 visible; highlighted picks checked) */
{
const S = 'Quiz 2022';
Q({ id: 'qz22-2', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = n<sup>log n</sup> and g(n) = n<sup>√n</sup>, then:`, opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'Cannot be determined'], ans: 0,
  sol: `log f = log² n and log g = √n log n; log² n = o(√n log n), so f = o(g) ⊂ O(g). (Same pair as the Quiz 1 2023 limit question.)` });
Q({ id: 'qz22-3', ch: 'anB', src: S, type: 'mcq', q: `If f(n) is <b>not</b> O(g(n)), then:`, opts: ['g(n) is O(f(n))', 'f(n) is Ω(g(n))', 'g(n) is Θ(f(n))', 'Cannot be determined'], ans: 3,
  sol: `Not every pair is comparable. f could oscillate (e.g. f = n<sup>1+sin n</sup>, g = n): f is not O(g), yet f is not Ω(g) either. So nothing follows.` });
Q({ id: 'qz22-4', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = Θ(g(n)), then:`, opts: ['f = O(g)', 'g = Ω(f)', 'g = Θ(f)', 'All the above answers are correct'], ans: 3,
  sol: `Θ implies O and Ω, and Θ is symmetric (g = Θ(f)); g = Ω(f) follows from f = O(g) by transpose symmetry.` });
Q({ id: 'qz22-5', ch: 'anB', src: S, type: 'mcq', q: `If running times are f(n) = n<sup>1000</sup> and g(n) = 2ⁿ, then:`, opts: ['f(n) is faster than g(n)', 'f(n) is slower than g(n)', 'f(n) and g(n) have the same speed', 'Cannot be determined'], ans: 0,
  sol: `n<sup>1000</sup> = o(2ⁿ): for large enough n the polynomial-time algorithm takes far less time, i.e. it is the <i>faster</i> algorithm (even though for small n, 2ⁿ is smaller).` });
Q({ id: 'qz22-6', ch: 'anA', src: S, type: 'mcq', q: `An algorithm takes f(n) = n² seconds. What is the largest problem size n that can be solved within t = 1 week?`, opts: ['293', '777', '1000', 'All the above answers are incorrect'], ans: 1,
  sol: `1 week = 7 × 24 × 3600 = 604,800 s. n² ≤ 604,800 → n ≤ 777.7 → n = 777.` });
Q({ id: 'qz22-7', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = n³ + n, then:`, opts: ['f = O(n³ + n)', 'f = O(n³)', 'f = ω(log n)', 'All the above answers are correct'], ans: 3, sol: `All three hold: f is Θ(n³), so it is O(n³), O(itself), and grows strictly faster than log n.` });
Q({ id: 'qz22-8', ch: 'anB', src: S, type: 'mcq', q: `Which values of c and n<sub>0</sub> prove f(n) = O(g(n)) for f(n) = n³ + n and g(n) = n³?`, opts: ['c = 2 and n₀ = 2', 'c = 1 and n₀ = 1', 'c = 1 and n₀ = 2', 'All the above answers are correct'], ans: 0,
  sol: `n³ + n ≤ 2n³ ⇔ n ≤ n³, true for n ≥ 1 (so n₀ = 2 also works). With c = 1 we would need n³ + n ≤ n³, which is never true.` });
Q({ id: 'qz22-9', ch: 'anB', src: S, type: 'mcq', q: `If f(n) = (4n² + n)(n²) and g(n) = (5n⁵ + n³) + (7n⁵), then:`, opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above answers are correct'], ans: 0, sol: `f = 4n⁴ + n³ = Θ(n⁴) (product rule), g = 12n⁵ + n³ = Θ(n⁵) (sum rule) → f = O(g).` });
Q({ id: 'qz22-10', ch: 'anA', src: S, type: 'mcq', q: `The more suitable approach to compare two algorithms is:`, opts: ['an experimental study', 'a theoretical analysis', 'Both a and b are correct answers', 'All the above answers are incorrect'], ans: 1,
  sol: `Theoretical analysis covers all inputs and is independent of hardware/software; experiments need an implementation, the same environment and may miss inputs.` });
}
