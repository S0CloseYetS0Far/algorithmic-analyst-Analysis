/* Quizzes 2026 — 2nd semester: Quiz 1 (partly answered sheet) and Quiz 2 & Evaluation (no key) */
{
const S = 'Quiz 1 2026 S2';
Q({ id: 'qz26-1', ch: 'anB', src: S, type: 'open', unsolved: true,
  q: `What is the closest Big-O for <span class="m">f(n) = n log n + √(n<sup>?</sup>)</span>?`,
  missing: `The exponent under the square root is blurred in the photo (it looks like 3, but could be 2), and the student's answer "n²" fits neither reading. My work for both readings:
    <ul><li>If f(n) = n log n + √(n³) = n log n + n<sup>1.5</sup> → <b>O(n<sup>1.5</sup>) = O(n√n)</b>, since log n = o(√n).</li>
    <li>If f(n) = n log n + √(n²) = n log n + n → <b>O(n log n)</b>.</li></ul>
    Check the exponent on the original paper and add the correct answer.` });
Q({ id: 'qz26-2', ch: 'anB', src: S, type: 'open', q: `If f(n) = 2<sup>3n</sup> and g(n) = 2ⁿ, write the relationship between f and g in terms of Ω.`,
  sol: `2<sup>3n</sup> = 8ⁿ, and 8ⁿ / 2ⁿ = 4ⁿ → ∞, so <b>f(n) = Ω(g(n))</b> (in fact ω(g(n)); g = O(f)).` });
const Y = '<b class="yes">yes</b>', N = 'no';
Q({ id: 'qz26-3', ch: 'anB', src: S, type: 'open', q: `For each pair, which relationships hold (O, o, Ω, ω, Θ)?` +
    tbl([['f', 'g', 'O', 'o', 'Ω', 'ω', 'Θ'], ['n<sup>log m</sup>', 'm<sup>log n</sup>', '', '', '', '', ''], ['n<sup>7/4</sup>', 'n log₂ n', '', '', '', '', '']]),
  sol: tbl([['f', 'g', 'O', 'o', 'Ω', 'ω', 'Θ'], ['n<sup>log m</sup>', 'm<sup>log n</sup>', Y, N, Y, N, Y], ['n<sup>7/4</sup>', 'n log₂ n', N, N, Y, Y, N]]) +
    `<p>n<sup>log m</sup> = 2<sup>log m · log n</sup> = m<sup>log n</sup>. And n<sup>7/4</sup> / (n log n) = n<sup>3/4</sup> / log n → ∞, so n<sup>7/4</sup> grows <i>faster</i>. (The answered sheet had the second row backwards.)</p>` });
Q({ id: 'qz26-4', ch: 'anB', src: S, type: 'order', q: `Sort in increasing order of asymptotic growth.`, items: ['5ⁿ', 'n<sup>log n</sup>', '4 log n', 'n<sup>1000</sup>'], ans: [2, 3, 1, 0],
  sol: `<b>4 log n &lt; n<sup>1000</sup> &lt; n<sup>log n</sup> &lt; 5ⁿ</b>. n<sup>log n</sup> beats any fixed polynomial once log n &gt; 1000, but n<sup>log n</sup> = 2<sup>log² n</sup> is still below 5ⁿ = 2<sup>n log 5</sup>.` });
}
{
const S = 'Quiz 2 2026 S2';
Q({ id: 'qz26b-lcs', ch: 'dp', src: S, type: 'open', q: `Use dynamic programming to find the length and the actual LCS of X = ABA and Y = ACCBA. Fill the table c[i, j].`,
  sol: tbl([['', 'j', '0', '1 A', '2 C', '3 C', '4 B', '5 A'],
    ['i', '0', '0', '0', '0', '0', '0', '0'],
    ['1', 'A', '0', '1 ↖', '1 ←', '1 ←', '1 ←', '1 ↖'],
    ['2', 'B', '0', '1 ↑', '1 ↑', '1 ↑', '2 ↖', '2 ←'],
    ['3', 'A', '0', '1 ↖', '1 ↑', '1 ↑', '2 ↑', '3 ↖']], { hl: [[4, 7]], rowHead: false }) +
    `<p>c[i, j] = c[i−1, j−1] + 1 if x<sub>i</sub> = y<sub>j</sub>, else max(c[i−1, j], c[i, j−1]).</p>
     <p>Trace ↖ from c[3,5]: A (3,5) → B (2,4) → A (1,1). <b>LCS = ABA, length 3.</b></p>` });
Q({ id: 'qz26b-fk', ch: 'greedy', src: S, type: 'open', q: `Fractional knapsack, W = 40. Items: A (benefit 60, weight 30), B (60, 20), C (120, 30). 1) Use a greedy algorithm to choose the items (show details). 2) What is the total benefit?`,
  sol: tbl([['Item', 'A', 'B', 'C'], ['b/w', '2', '3', '4']]) +
    `<p>Order C, B, A. Take all of C (w = 30, benefit 120). 10 kg left: take 10/20 of B → 30. Knapsack full.</p><p><b>C fully + ½ of B; total benefit = 150.</b></p>` });
Q({ id: 'qz26b-as', ch: 'greedy', src: S, type: 'open', q: `Select the maximum number of non-overlapping activities with a greedy algorithm. Show all details.` +
    tbl([['Activity', 'x', 'y', 'z', 'w', 't'], ['Start', '3', '1', '5', '8', '0'], ['Finish', '5', '4', '7', '9', '6']]),
  sol: `<p>Sort by finish time: y (1–4), x (3–5), t (0–6), z (5–7), w (8–9).</p>` +
    tbl([['Activity', 'start ≥ last finish?', 'Selected'], ['y (1, 4)', 'first', '✓ (last finish = 4)'], ['x (3, 5)', '3 &lt; 4', '✗'], ['t (0, 6)', '0 &lt; 4', '✗'], ['z (5, 7)', '5 ≥ 4', '✓ (last finish = 7)'], ['w (8, 9)', '8 ≥ 7', '✓']]) +
    `<p><b>{y, z, w} — 3 activities.</b></p>` });
}
{
const S = 'Evaluation 2026 S2';
Q({ id: 'ev26-1', ch: 'greedy', src: S, type: 'open', q: `Coins {1, 5, 10, 50, 100, 500}, infinite supply. Apply a <b>greedy</b> algorithm to make change for n = 12 with the minimum number of coins. Show details.`,
  sol: `Repeatedly take the largest coin ≤ remaining: 12 → 10 (rem 2) → 1 (rem 1) → 1 (rem 0). <b>Coins 10, 1, 1 → 3 coins.</b>` });
Q({ id: 'ev26-2', ch: 'dp', src: S, type: 'open', q: `Same coins {1, 5, 10, 50, 100, 500}. Apply <b>dynamic programming</b> to find the minimum number of coins for n = 12; fill the table C[0..12].`,
  sol: `<p>C[0] = 0, C[a] = 1 + min over coins d ≤ a of C[a − d].</p>` +
    tbl([['a', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], ['C[a]', '0', '1', '2', '3', '4', '1', '2', '3', '4', '5', '1', '2', '3']], { hl: [[1, 13]] }) +
    `<p><b>C[12] = 3</b> (10 + 1 + 1), same as greedy.</p>` });
Q({ id: 'ev26-3', ch: 'greedy', src: S, type: 'mcq', q: `With denominations {1, 5, 10, 50, 100, 500} (infinite supply), which algorithm is better to use?`, opts: ['Brute force', 'Greedy', 'Dynamic programming'], ans: 1,
  sol: `This is a canonical coin system (like real currencies): greedy is always optimal here and runs fastest.` });
Q({ id: 'ev26-4', ch: 'greedy', src: S, type: 'open', q: `If the denominations change to {1, 6, 10}, which coins does the <b>greedy</b> algorithm select for n = 12?`,
  sol: `10, 1, 1 — <b>3 coins</b> (not optimal).` });
Q({ id: 'ev26-5', ch: 'dp', src: S, type: 'open', q: `With denominations {1, 6, 10}, which coins does a <b>dynamic programming</b> algorithm select for n = 12?`,
  sol: `<b>6 + 6 — 2 coins.</b> (C[12] = 1 + min(C[11], C[6], C[2]) = 1 + min(2, 1, 2) = 2.)` });
Q({ id: 'ev26-6', ch: 'dp', src: S, type: 'mcq', q: `With denominations {1, 6, 10}, which algorithm gives the optimal solution?`, opts: ['Brute force', 'Greedy', 'Dynamic programming'], ans: [2, 0],
  sol: `Greedy fails (3 coins vs 2). DP is optimal and efficient (O(nk)). Brute force would also find the optimum, but in exponential time — the intended answer is <b>dynamic programming</b>.` });
}
