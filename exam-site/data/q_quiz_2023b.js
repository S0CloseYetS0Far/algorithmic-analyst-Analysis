/* Quiz 2, 2023 (Dr. Fahman Saeed, graded student sheet; verified) */
{
const S = 'Quiz 2 2023';
const tf = (id, ch, q, ans, sol) => Q({ id, ch, src: S, type: 'tf', q, ans, sol });
tf('qz23b-1', 'linsort', `Radix sort is in-place.`, false, `Each digit pass (counting sort) writes into a separate output array B and uses a count array — Θ(n + k) extra space.`);
tf('qz23b-2', 'linsort', `Counting sort is stable.`, true, `The placement loop scans A from right to left and fills each value's slots from the back, so equal keys keep their input order.`);
tf('qz23b-3', 'g3', `For all weighted graphs and all vertices s and t, Bellman-Ford starting at s will always return a shortest path to t.`, false,
  `If a negative-weight cycle is reachable from s, shortest paths are undefined — Bellman-Ford returns FALSE instead. (Also, t may be unreachable.)`);
tf('qz23b-4', 'g3', `If all edges in a graph have distinct weights, then the shortest path between two vertices is unique.`, false,
  `Distinct edge weights make the <i>MST</i> unique, not shortest paths. Counter-example: s→a (1), a→t (4) and s→b (2), b→t (3) — two shortest paths of length 5.`);
tf('qz23b-5', 'linsort', `To sort n integers in the range 1 to n², a good implementation of radix sort is asymptotically faster in the worst case than any comparison sort.`, true,
  `Write the numbers in base n: just 2 digits, each pass a counting sort with k = n → Θ(2(n + n)) = Θ(n), beating the Ω(n lg n) comparison lower bound.`);
tf('qz23b-6', 'linsort', `Radix sort does not work correctly (does not produce the correct output) if each digit is sorted with INSERTION SORT instead of COUNTING SORT.`, false,
  `Radix sort only needs the per-digit sort to be <b>stable</b>. Insertion sort is stable, so the output is still correct — it is just slower (Θ(n²) per pass in the worst case).`);

Q({ id: 'qz23b-cs', ch: 'linsort', src: S, type: 'open', q: `Sort A = {5, 7, 5, 2, 1, 1} with counting sort (values 1..7). Show C (counts), C′ (cumulative), the output B, and C′ after all elements are placed.`,
  fig: ARR([5, 7, 5, 2, 1, 1], { base: 1 }),
  sol: tbl([['i', '1', '2', '3', '4', '5', '6', '7'], ['C (counts)', '2', '1', '0', '0', '2', '0', '1'], ['C′ (cumulative)', '2', '3', '3', '3', '5', '5', '6'], ['C′ at the end', '0', '2', '3', '3', '3', '5', '5']]) +
    tbl([['B', '1', '2', '3', '4', '5', '6'], ['', '1', '1', '2', '5', '5', '7']]) +
    `<p>At the end C′[i] = number of elements strictly smaller than i (each placement decremented the counter).</p>` });

const dg = { n: { d: [110, 195], s: [360, 195], a: [600, 195], b: [110, 440], c: [360, 440], e: [610, 440] }, e: 's>d s>a s>c d>c c>b b>d c>e e>s' };
Q({ id: 'qz23b-dfs', ch: 'g1', src: S, type: 'open', q: `Run DFS on the directed graph starting at vertex s (alphabetical tie-breaking). Give d (discovery), f (finish) and π for every vertex.`,
  fig: G(dg),
  sol: tbl([['Vertex', 'a', 'b', 'c', 'd', 'e', 's'], ['d', '2', '5', '4', '6', '9', '1'], ['f', '3', '8', '11', '7', '10', '12'], ['π', 's', 'c', 's', 'b', 'c', 'nil']]) +
    `<p>s(1) → a(2), dead end, a finishes 3 → c(4) → b(5) → d(6): d → c is gray (back edge) → d finishes 7, b 8 → c → e(9): e → s is gray → e finishes 10, c 11 → s → d already black → s finishes 12.</p>`,
  solFig: G(Object.assign({ hl: 's>a s>c c>b b>d c>e' }, dg)) });

const pg = { n: { A: [95, 75], B: [95, 440], C: [370, 255], D: [555, 70], E: [735, 250], F: [555, 430] }, e: 'A-B:1 A-C:2 B-C:3 C-D:4 C-E:5 C-F:6 D-E:7 E-F:8' };
Q({ id: 'qz23b-pr', ch: 'g2', src: S, type: 'open', q: `Use <b>Prim's algorithm</b> (start at A) to find the MST of this graph. Draw it and give the value of the MCST.`,
  fig: G(pg),
  sol: tbl([['Extract', 'key updates'], ['A (0)', 'B = 1, C = 2'], ['B (1)', 'C stays 2 (3 &gt; 2)'], ['C (2)', 'D = 4, E = 5, F = 6'], ['D (4)', 'E stays 5 (7 &gt; 5)'], ['E (5)', 'F stays 6 (8 &gt; 6)'], ['F (6)', '—']]) +
    `<p>Tree edges A–B, A–C, C–D, C–E, C–F. <b>MCST = 1 + 2 + 4 + 5 + 6 = 18.</b></p>`,
  solFig: G(Object.assign({ hl: 'A-B A-C C-D C-E C-F' }, pg)) });
}
