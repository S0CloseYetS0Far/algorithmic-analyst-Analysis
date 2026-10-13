/* Quiz 2023 (Dr. Dhuha Noureddine, graded student sheet; verified) */
{
const S = 'Quiz 2023 (Dr. Dhuha)';
Q({ id: 'qz23c-1', ch: 'intro', src: S, type: 'mcq', q: `What is an algorithm?`, opts: ['A flowchart', 'Step-by-step instructions used to solve a problem', 'A decision', 'A pseudocode'], ans: 1,
  sol: `An algorithm is a finite, well-defined step-by-step procedure that turns input into output. Flowcharts and pseudocode are just ways of <i>writing</i> one.` });
Q({ id: 'qz23c-2', ch: 'anA', src: S, type: 'mcq', q: `How is time complexity measured?`, opts: ['By counting the number of primitive operations performed by the algorithm on a given input size', 'By counting the number of algorithms in an algorithm', 'By counting the size of data input to the algorithm', 'None of the above'], ans: 0,
  sol: `Theoretical analysis counts primitive operations as a function of the input size n.` });
Q({ id: 'qz23c-3', ch: 'anA', src: S, type: 'mcq', q: `Time complexity of this code?` + code(`int i, j, k = 0;
for (i = n/2; i <= n; i++)
    for (j = 2; j <= n; j = j * 2)
        k = k + n/2;`),
  opts: ['O(n)', 'O(n²)', 'O(n log n)', 'O(n² log n)'], ans: 2, sol: `Outer loop: n/2 + 1 iterations. Inner loop doubles j: ⌊lg n⌋ iterations. Total (n/2)·lg n = Θ(n lg n).` });
Q({ id: 'qz23c-4', ch: 'anB', src: S, type: 'mcq', q: `Which is the slowest (largest) running time?`, opts: ['O(n)', 'O(n²)', 'O(2ⁿ)', 'O(n!)'], ans: 3, sol: `n! grows faster than 2ⁿ (n! ≥ (n/2)<sup>n/2</sup>).` });
Q({ id: 'qz23c-5', ch: 'dc', src: S, type: 'mcq', q: `Complexity of T(n) = 3T(n − 1) for n &gt; 0, T(0) = 1:`, opts: ['O(n³)', 'O(nⁿ)', 'O(3ⁿ)', 'O(n log n)'], ans: 2, sol: `Iterating: T(n) = 3T(n−1) = 3²T(n−2) = … = 3ⁿT(0) = 3ⁿ.` });

const Y = '✓';
Q({ id: 'qz23c-rel', ch: 'anB', src: S, type: 'open', q: `Find the relation (O, Ω or Θ) between each pair:<br>a. f = 2<sup>log n</sup>, g = n<sup>√n</sup><br>b. f = 2n, g = 3n<br>c. f = 2<sup>n+1</sup>, g = 2ⁿ<br>d. f = 2<sup>2n</sup>, g = 2ⁿ`,
  sol: tbl([['', 'Simplify', 'Relation'], ['a', '2<sup>log n</sup> = n vs n<sup>√n</sup>', 'f = O(g) (even o(g))'], ['b', 'both linear', '<b>f = Θ(g)</b>'], ['c', '2<sup>n+1</sup> = 2·2ⁿ', '<b>f = Θ(g)</b>'], ['d', '2<sup>2n</sup> = 4ⁿ', 'f = Ω(g) (even ω(g))']]) +
    `<p class="note">Common mistake on the graded copy: writing O for (b) and Ω for (c). Constant factors don't change the order: 2n vs 3n and 2·2ⁿ vs 2ⁿ are Θ. Only a constant <i>in the exponent</i> (d) does.</p>` });
Q({ id: 'qz23c-it', ch: 'dc', src: S, type: 'open', q: `Use the <b>iteration method</b> to give the tight upper bound of T(n) = T(n/3) + n (n &gt; 1), T(1) = 1.`,
  sol: `<p>T(n) = T(n/3) + n = T(n/9) + n/3 + n = T(n/27) + n/9 + n/3 + n = … = T(n/3<sup>k</sup>) + n Σ<sub>i=0..k−1</sub> (1/3)<sup>i</sup>.</p>
        <p>Stop at n/3<sup>k</sup> = 1 → k = log₃ n: T(n) = 1 + n · (1 − (1/3)<sup>k</sup>)/(1 − 1/3) ≤ 1 + (3/2)n.</p><p><b>T(n) = O(n)</b>.</p>` });
}
