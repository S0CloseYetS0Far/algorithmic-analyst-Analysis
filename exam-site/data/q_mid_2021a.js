/* Midterm 1, 2021 (online, a student's picks were visible — verified here) */
{
const S = 'Midterm 1 2021';

Q({ id: 'm21a-3', ch: 'anA', src: S, type: 'mcq', q: `Two main measures for the efficiency of an algorithm are:`,
  opts: ['Processor and memory', 'Complexity and capacity', 'Time and space', 'Data and space'], ans: 2, sol: `Running time and memory (space) usage.` });
Q({ id: 'm21a-4', ch: 'anB', src: S, type: 'tf', q: `For any two functions f(n) and g(n), either f(n) = O(g(n)) or g(n) = O(f(n)).`, ans: false,
  sol: `Some functions are incomparable, e.g. f(n) = n and g(n) = n<sup>1 + sin n</sup>, which oscillates between n⁰ and n² forever.` });
also('m21a-4', 'Midterm 1 2021 (2nd form)');
Q({ id: 'm21a-5', ch: 'dc', src: S, type: 'mcq', q: `missingNumber returns the missing number in a sorted array A of n integers in the range 1 to n+1. Which recurrence represents its running time?` + code(`missingNumber(A[], i, j)
  if (i >= j)
      if (i == A[i]) return i + 1
      else return i
  m = (i + j) / 2
  if (A[m] > m) return missingNumber(A, i, m)
  else          return missingNumber(A, m + 1, j)`),
  opts: ['T(n) = 2T(n/2) + 1, T(1) = 1', 'T(n) = T(n/2) + 1, T(1) = 1', 'T(n) = T(n/2) + n, T(1) = 1', 'T(n) = T(n/2) + 1, T(1) = n'], ans: 1,
  sol: `Like binary search: constant work, then <b>one</b> recursive call on half of the range → T(n) = T(n/2) + 1 = Θ(lg n).` });
const rt = `<span class="hint">Recursion tree for T(n) = T(n/10) + c, T(1) = 1.</span> `;
const rtSol = `<p>Each level has a single node. Level i has size n/10<sup>i</sup> and cost c; the last level (i = log<sub>10</sub> n) is one leaf costing T(1) = 1.</p>`;
Q({ id: 'm21a-6', ch: 'dc', src: S, type: 'mcq', q: rt + `The total cost of all levels is:`, opts: ['O(c·log<sub>10</sub> n + 1)', 'O(log<sub>10</sub> n)', 'O(n·log<sub>10</sub> n)', 'Both a and b are correct'], ans: 3,
  sol: rtSol + `<p>Total = c·log<sub>10</sub> n + 1 = Θ(log n), so (a) and (b) both hold.</p>` });
Q({ id: 'm21a-11', ch: 'dc', src: S, type: 'mcq', q: rt + `The total cost of all subproblems in the <b>last level</b> is:`, opts: ['1', 'n·c', 'c', 'n'], ans: 0, sol: rtSol + `<p>Only one leaf: total 1.</p>` });
Q({ id: 'm21a-13', ch: 'dc', src: S, type: 'mcq', q: rt + `The cost of <b>each subproblem</b> in the last level is:`, opts: ['1', 'n·c', 'c', 'n'], ans: 0, sol: rtSol + `<p>A leaf is T(1) = 1.</p>` });
Q({ id: 'm21a-20', ch: 'dc', src: S, type: 'mcq', q: rt + `The exact total cost of subproblems in each level <b>except the last</b> is:`, opts: ['1', 'c', 'c/10<sup>i</sup>', '10c'], ans: 1, sol: rtSol + `<p>One node per level, cost c (the additive term does not depend on n).</p>` });
Q({ id: 'm21a-7', ch: 'dc', src: S, type: 'mcq', q: `Master method on <span class="m">T(n) = 2T(n/4) + √n</span>:`,
  opts: ['Case 1, T(n) = Θ(√n)', 'Case 2, T(n) = Θ(√n · log n)', 'Case 3, T(n) = Θ(√n)', 'Master method cannot be used'], ans: 1,
  sol: `a = 2, b = 4 → n<sup>log<sub>4</sub>2</sup> = n<sup>1/2</sup> = √n = f(n) → case 2 → Θ(√n lg n).` });
Q({ id: 'm21a-8', ch: 'anB', src: S, type: 'mcq', q: `Asymptotic relationship between f(n) = log(n<sup>log 17</sup>) and g(n) = log(17<sup>log n</sup>):`,
  opts: ['f = O(g)', 'f = Ω(g)', 'f = Θ(g)', 'All the above are correct'], ans: 3,
  sol: `log(n<sup>log 17</sup>) = log 17 · log n = log n · log 17 = log(17<sup>log n</sup>). Equal functions satisfy O, Ω and Θ.` });
Q({ id: 'm21a-9', ch: 'anB', src: S, type: 'mcq', q: `If f(n) · g(n) = O(n³), which of these is consistent?`,
  opts: ['f(n) = g(n) = n³', 'f(n) ≠ n³ and g(n) ≠ n³', 'f(n) = n and g(n) = n²', 'f(n) = n³ and g(n) = n'], ans: 2,
  sol: `n · n² = n³ = O(n³) ✓. (a) gives n⁶ and (d) gives n⁴ — not O(n³). (b) is not forced: f = n³, g = 1 also works.` });
Q({ id: 'm21a-10', ch: 'dc', src: S, type: 'tf', q: `The substitution method comprises two steps: guessing the form of the solution and using induction to show that the guess is valid.`, ans: true,
  sol: `Exactly: (1) guess, (2) prove by mathematical induction (and find the constants).` });
Q({ id: 'm21a-12', ch: 'dc', src: S, type: 'mcq', q: `Using the substitution method to solve <span class="m">T(n) = T(n − 2) + 2</span>, T(1) = 1, the solution guess is:`,
  opts: ['T(n) = log n', 'T(n) = n', 'T(n) = log n + 1', 'T(n) = n log n'], ans: 1,
  sol: `T(1) = 1, T(3) = 3, T(5) = 5 … → guess T(n) = n. Check: T(n) = (n − 2) + 2 = n ✓.` });
Q({ id: 'm21a-15', ch: 'dc', src: S, type: 'mcq', q: `To solve <span class="m">T(n) = T(n − 2) + 2</span>, T(1) = 1, by substitution, we assume the guess holds for:`,
  opts: ['k/2', 'k − 1', 'k − 2', 'k'], ans: 2,
  sol: `Inductive hypothesis: T(k − 2) = k − 2 (the argument the recurrence calls). Then T(k) = T(k − 2) + 2 = k.` });
Q({ id: 'm21a-14', ch: 'anB', src: S, type: 'tf', q: `For all positive f, g, h: if f(n) = O(g(n)) and f(n) = Ω(h(n)), then g(n) = Ω(h(n)).`, ans: true,
  sol: `h ≤ c₁f ≤ c₂g eventually, so g = Ω(h).` });
Q({ id: 'm21a-16', ch: 'dc', src: S, type: 'mcq', q: `Based on time complexity, which algorithm would you choose?`,
  opts: ['A: solves 2 subproblems of size n/2, combines in O(n)', 'B: solves 2 subproblems of size n/2, combines in O(1)', 'C: solves 2 subproblems of size 2n, combines in O(n)', 'Cannot be determined'], ans: 1,
  sol: `A: 2T(n/2) + n = Θ(n lg n). B: 2T(n/2) + 1 = Θ(n) (master case 1). C grows the problem — it never terminates. B is fastest.` });
Q({ id: 'm21a-17', ch: 'dc', src: S, type: 'mcq', q: `Master method on <span class="m">T(n) = T(n) + 1</span>:`,
  opts: ['Case 1, Θ(1)', 'Case 2, Θ(log n)', 'Case 3, Θ(1)', 'Master method cannot be used'], ans: 3, sol: `b = 1: the problem never shrinks. The master method requires b &gt; 1.` });
also('m21a-17', 'Final 2023 S1');
Q({ id: 'm21a-18', ch: 'dc', src: S, type: 'tf', q: `Can the substitution method be used to prove that <span class="m">T(n) = 2T(n/2) + n</span>, T(1) = 1, is O(n log n + n)?`, ans: true,
  sol: `<p>Yes. Guess T(n) ≤ n lg n + n. Inductive step: T(n) = 2T(n/2) + n ≤ 2[(n/2) lg(n/2) + n/2] + n = n lg n − n + n + n = n lg n + n ✓. Base: T(1) = 1 = 1·0 + 1 ✓.</p>
    <p class="note">The answer selected on the scanned sheet was "False"; that pick appears to be wrong.</p>` });
}
