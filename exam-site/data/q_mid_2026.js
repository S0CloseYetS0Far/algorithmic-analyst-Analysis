/* Midterm 2026 — 2nd semester (no key: solved here) */
{
const S = 'Midterm 2026 S2';
const Y = '<b class="yes">yes</b>', N = 'no';

Q({ id: 'm26-asy', ch: 'anB', src: S, type: 'open',
  q: `For each pair (f, g), write yes/no: is f = O(g), o(g), Ω(g), ω(g), Θ(g)?` +
    tbl([['f', 'g', 'O', 'o', 'Ω', 'ω', 'Θ'], ['n² log² n', 'n² · 2<sup>log n</sup>', '', '', '', '', ''], ['log(n!)', 'n log n', '', '', '', '', ''], ['2ⁿ', '3ⁿ', '', '', '', '', ''], ['n<sup>1/2</sup> · log n', 'n<sup>2/3</sup>', '', '', '', '', '']]),
  sol: tbl([['f', 'g', 'O', 'o', 'Ω', 'ω', 'Θ'],
    ['n² log² n', 'n²·2<sup>log n</sup> = n³', Y, Y, N, N, N],
    ['log(n!)', 'n log n', Y, N, Y, N, Y],
    ['2ⁿ', '3ⁿ', Y, Y, N, N, N],
    ['n<sup>1/2</sup> log n', 'n<sup>2/3</sup>', Y, Y, N, N, N]]) +
    `<ul><li>2<sup>log n</sup> = n, so g = n³ and log² n = o(n).</li><li>log(n!) = Θ(n log n) by Stirling.</li><li>2ⁿ/3ⁿ = (2/3)ⁿ → 0.</li><li>n<sup>1/2</sup> log n / n<sup>2/3</sup> = log n / n<sup>1/6</sup> → 0.</li></ul>` });

Q({ id: 'm26-rx', ch: 'linsort', src: S, type: 'mcq',
  q: `What is the order after the <b>third pass</b> of (LSD) radix sort on {bCaa, AaBb, aAab, AbcZ, Zzza, Ddcb}? Character order: A &lt; B &lt; … &lt; Z &lt; a &lt; b &lt; … &lt; z.`,
  opts: ['{AbcZ, bCaa, Zzza, AaBb, aAab, Ddcb}', '{aAab, bCaa, AaBb, AbcZ, Ddcb, Zzza}', '{AaBb, bCaa, aAab, AbcZ, Ddcb, Zzza}', '{AaBb, AbcZ, Ddcb, Zzza, aAab, bCaa}'], ans: 1,
  sol: `<p>Pass 1 (4th char Z &lt; a &lt; b): AbcZ, bCaa, Zzza, AaBb, aAab, Ddcb. <i>(that is option A)</i></p>
        <p>Pass 2 (3rd char B &lt; a &lt; c &lt; z): AaBb, bCaa, aAab, AbcZ, Ddcb, Zzza.</p>
        <p>Pass 3 (2nd char A &lt; C &lt; a &lt; b &lt; d &lt; z): <b>aAab, bCaa, AaBb, AbcZ, Ddcb, Zzza</b>.</p>` });

Q({ id: 'm26-mm', ch: 'dc', src: S, type: 'mcq', q: `The master method CANNOT be used when:`,
  opts: ['the problem is divided by a number larger than one', 'the number of subproblems is one or more', 'the size of the subproblems is larger than the size of the original problem', 'All the above'], ans: 2,
  sol: `b &gt; 1 and a ≥ 1 are exactly the conditions the theorem <i>needs</i> (A, B). It fails when subproblems are not smaller (C).` });

Q({ id: 'm26-rev', ch: 'sort1', src: S, type: 'mcq', q: `Which algorithm performs worst on a reverse-sorted array?`,
  opts: ['Insertion Sort', 'Heap Sort', 'Merge Sort', 'Counting Sort'], ans: 0,
  sol: `Reverse order is insertion sort's worst case: element j shifts past all j − 1 earlier elements → Θ(n²). Heap and merge sort stay Θ(n lg n). <span class="note">(Options C and D were cut off in the scan; they are reconstructed here.)</span>` });

Q({ id: 'm26-sc', ch: 'linsort', src: S, type: 'match',
  q: `Choose the MOST suitable sorting algorithm for each scenario (Merge Sort, Heap Sort, Counting Sort, Insertion Sort).`,
  left: ['A to-do list that is usually in order: after adding a task only a couple are slightly out of place; fix them without re-sorting everything.', 'Sort a very large set of salary records quickly, with consistent performance, keeping equal elements in order.', 'Sort hundreds of exam scores, each an integer 0–100, as fast as possible; extra memory is fine.', 'An embedded device with very limited RAM must sort readings quickly; no memory-heavy extra arrays.'],
  right: ['Merge Sort', 'Heap Sort', 'Counting Sort', 'Insertion Sort'],
  ans: [3, 0, 2, 1],
  sol: `1 → Insertion (nearly sorted ≈ linear). 2 → Merge (stable, always Θ(n lg n)). 3 → Counting (k = 101, Θ(n + k)). 4 → Heap (in place, Θ(n lg n)).` });

Q({ id: 'm26-rt', ch: 'dc', src: S, type: 'open',
  q: `Recurrence <span class="m">T(n) = T(n/2) + T(n/4) + T(n/4) + n</span> for n &gt; 1, Θ(1) for n ≤ 1.<br>1) Draw the recursion tree (at least up to level 3, plus leaves). 2) Determine the cost of each level, including the leaf level. 3) Give the total cost in Big-O and explain.`,
  sol: `<p><b>1)</b> Root n → children n/2, n/4, n/4 → grandchildren n/4, n/8, n/8 | n/8, n/16, n/16 | n/8, n/16, n/16 → …</p>` +
    tbl([['Level', 'Nodes (sizes)', 'Cost'], ['0', 'n', 'n'], ['1', 'n/2, n/4, n/4', 'n'], ['2', 'n/4, n/8×4, n/16×4', 'n'], ['3', '…', 'n (until the shallow branches start to end)']]) +
    `<p><b>2)</b> The fractions add to ½ + ¼ + ¼ = 1, so every full level costs exactly <b>n</b>. The leftmost (n/2) branch is deepest: log₂ n levels; the n/4 branches end after log₄ n levels, so the lower levels cost ≤ n. Leaf level: the number of leaves satisfies L(n) = L(n/2) + 2L(n/4) = Θ(n), so the leaves cost <b>Θ(n)</b>.</p>
     <p><b>3)</b> Between n·log₄ n (full levels) and n·log₂ n (all levels at most n) → <b>T(n) = Θ(n log n)</b>.</p>` });

Q({ id: 'm26-mt', ch: 'dc', src: S, type: 'open',
  q: `Using the master method, complete the table and give Θ(T(n)); if it does not apply, say why.` +
    tbl([['T(n)', 'f(n)', 'n<sup>log<sub>b</sub>a</sup>', 'Case', 'Θ(T(n))'], ['2T(n/2) + n', '', '', '', ''], ['2T(n/2) + n²', '', '', '', ''], ['4T(n/2) + n', '', '', '', '']]),
  sol: tbl([['T(n)', 'f(n)', 'n<sup>log<sub>b</sub>a</sup>', 'Case', 'Θ(T(n))'],
    ['2T(n/2) + n', 'n', 'n', '2', 'Θ(n lg n)'],
    ['2T(n/2) + n²', 'n²', 'n', '3 (2(n/2)² = ½n² ≤ c·n², c = ½)', 'Θ(n²)'],
    ['4T(n/2) + n', 'n', 'n²', '1 (n = O(n<sup>2−ε</sup>))', 'Θ(n²)']]) });
}
