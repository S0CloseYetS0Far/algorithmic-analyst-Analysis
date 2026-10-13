/* Final, May 2013 (CS215, no key: solved here). Repeats several questions of the Dec 2013 final. */
{
const S = 'Final May 2013';
also('f13-3', S); also('f13-5a', S); also('f13-5b2', S); also('f13-5b3', S); also('f13-5b4', S); also('f13-6a', S);
/* "Final-2" is a phone photo of the Dec 2013 paper */
['f13-1b', 'f13-2', 'f13-3', 'f13-4', 'f13-5b1', 'f13-5b2', 'f13-5b3', 'f13-5b4', 'f13-6b'].forEach(id => also(id, 'Final-2 (photo)'));
also('f13b-ss', 'Final-2 (photo)');

Q({ id: 'f13b-1', ch: 'dp', src: S, type: 'open',
  q: `0/1 knapsack with W<sub>max</sub> = 12. Find the optimal solution: the maximum benefit and the items needed. Show your reasoning.` +
    tbl([['Item', 'a', 'b', 'c', 'd', 'e'], ['Benefit', '15', '12', '9', '16', '17'], ['Weight', '2', '5', '3', '4', '6']]),
  sol: tbl([['i \\ w', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    ['a', '0', '0', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15', '15'],
    ['b', '0', '0', '15', '15', '15', '15', '15', '27', '27', '27', '27', '27', '27'],
    ['c', '0', '0', '15', '15', '15', '24', '24', '27', '27', '27', '36', '36', '36'],
    ['d', '0', '0', '15', '15', '16', '24', '31', '31', '31', '40', '40', '43', '43'],
    ['e', '0', '0', '15', '15', '16', '24', '31', '31', '32', '40', '40', '43', '48']], { hl: [[5, 13]] }) +
    `<p>V[e,12] = max(43, 17 + V[d,6] = 48) = 48 → e in, w = 6. V[d,6] = 31 ≠ V[c,6] = 24 → d in, w = 2. V[c,2] = V[b,2] = V[a,2] = 15 → a in.</p>
     <p><b>Items {a, d, e}: weight 2 + 4 + 6 = 12, maximum benefit = 48.</b></p>` });

const dj = { n: { A: [1100, 405], B: [600, 495], C: [1575, 530], D: [1100, 630], E: [600, 735], F: [1575, 750], G: [850, 890], H: [1340, 900], I: [1080, 1010], J: [585, 1085], K: [1575, 1100] },
  e: 'A-B:3 A-C:4 A-F:5 B-D:6 B-J:8 C-F:3 D-E:3 D-G:5 D-H:6 E-G:4 F-H:8 F-K:7 G-I:2 G-J:8 I-J:6 H-I:7 J-K:8' };
Q({ id: 'f13b-2', ch: 'g3', src: S, type: 'open',
  q: `Using <b>Dijkstra's algorithm</b>, find the shortest path from A to I in this undirected graph. Show the steps, the table and the resulting path.`,
  fig: G(dj),
  sol: tbl([['Extract', 'd updates'],
    ['A (0)', 'B 3, C 4, F 5'],
    ['B (3)', 'D 9, J 11'],
    ['C (4)', 'F stays 5 (4 + 3 = 7)'],
    ['F (5)', 'H 13, K 12'],
    ['D (9)', 'E 12, G 14 (H stays 13)'],
    ['J (11)', 'I 17 (G stays 14, K stays 12)'],
    ['E (12)', '—'],
    ['K (12)', '—'],
    ['H (13)', 'I stays 17 (13 + 7 = 20)'],
    ['G (14)', 'I = 16'],
    ['I (16)', 'done']]) +
    `<p><b>Shortest path A → B → D → G → I, length 3 + 6 + 5 + 2 = 16.</b> (A → B → J → I is 17.)</p>`,
  solFig: G(Object.assign({ hl: 'A-B B-D D-G G-I', lab: { A: '0', B: '3', D: '9', G: '14', I: '16' } }, dj)) });

Q({ id: 'f13b-tf', ch: 'np', src: S, type: 'tf',
  q: `Suppose A ≤<sub>p</sub> B. If A ∈ P, then B ∈ P.`, ans: false,
  sol: `False — the reduction only lets us use B to solve A, not the other way around. An easy A can reduce to a very hard B.` });

Q({ id: 'f13b-ss', ch: 'np', src: S, type: 'open',
  q: `Subset-sum: given a set S of positive integers and a positive integer t, is there a subset S′ ⊆ S whose sum is exactly t? (e.g. S = {1, 2, 3, 14, 49, 98}, t = 101 → S′ = {1, 2, 98}).<br>Assuming subset-sum is NP-complete, show that the (0/1) <b>knapsack</b> problem is NP-complete by reducing subset-sum to knapsack.`,
  sol: `<p><b>Knapsack (decision):</b> given items with weights w<sub>i</sub>, values v<sub>i</sub>, capacity W and target V — is there a subset with Σw ≤ W and Σv ≥ V?</p>
    <p><b>1. Knapsack ∈ NP:</b> a certificate is the chosen subset; summing weights and values takes O(n).</p>
    <p><b>2. Reduction subset-sum ≤<sub>p</sub> knapsack:</b> for each s ∈ S create an item with <b>w = v = s</b>; set <b>W = V = t</b>. This takes O(n) time.</p>
    <p><b>3. Correctness:</b> if S′ sums to t, picking those items gives weight t ≤ W and value t ≥ V → yes. Conversely, a knapsack solution has Σs ≤ t and Σs ≥ t, hence Σs = t → a valid S′.</p>
    <p>Since a known NP-complete problem reduces to knapsack and knapsack ∈ NP, <b>knapsack is NP-complete</b>.</p>` });
}
