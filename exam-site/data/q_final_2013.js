/* Final 2013 (CS215, model answer provided; corrected where the key was wrong) */
{

Q({
  id: 'f13-1b', ch: 'extra', src: 'Final 2013', type: 'open',
  q: `Give the pre-order, in-order and post-order tree walks of this binary tree.`,
  fig: TREE([11, 9, 12, 8, 12, 11, 13]),
  sol: `<p><b>Pre-order</b> (node, left, right): 11, 9, 8, 12, 12, 11, 13</p>
        <p><b>In-order</b> (left, node, right): 8, 9, 12, 11, 11, 12, 13</p>
        <p><b>Post-order</b> (left, right, node): 8, 12, 9, 11, 13, 12, 11</p>
        <p class="note">This tree is not a valid BST (12 sits in the left subtree of 11), so the in-order walk is not sorted.</p>`
});

Q({
  id: 'f13-2', ch: 'dp', src: 'Final 2013', type: 'open',
  q: `0/1 knapsack, capacity <span class="m">W = 10</span>. Find the optimal solution with dynamic programming: state the maximum benefit and the items chosen. Show the table.` +
    tbl([['Item', '1', '2', '3', '4', '5'], ['Benefit', '6', '12', '4', '9', '14'], ['Weight', '1', '5', '3', '4', '6']]),
  sol: `<p><span class="m">V[i, w] = max(V[i−1, w], b<sub>i</sub> + V[i−1, w − w<sub>i</sub>])</span> when <span class="m">w<sub>i</sub> ≤ w</span>.</p>` +
    tbl([['i \\ w', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'],
      ['1', '0', '6', '6', '6', '6', '6', '6', '6', '6', '6', '6'],
      ['2', '0', '6', '6', '6', '6', '12', '18', '18', '18', '18', '18'],
      ['3', '0', '6', '6', '6', '10', '12', '18', '18', '18', '22', '22'],
      ['4', '0', '6', '6', '6', '10', '15', '18', '18', '19', '22', '27'],
      ['5', '0', '6', '6', '6', '10', '15', '18', '20', '20', '22', '27']], { hl: [[6, 11]] }) +
    `<p><b>Max benefit = V[5,10] = 27.</b></p>
     <p>Trace back: V[5,10] = V[4,10] → item 5 not taken. V[4,10] ≠ V[3,10] → take item 4, w = 6. V[3,6] = V[2,6] → skip 3. V[2,6] ≠ V[1,6] → take item 2, w = 1. V[1,1] = 6 → take item 1.</p>
     <p><b>Items {1, 2, 4}</b> (weight 10, benefit 6 + 12 + 9 = 27).</p>`
});

Q({
  id: 'f13-3', ch: 'g2', src: 'Final 2013', type: 'open',
  q: `Find the minimum spanning tree using <b>Kruskal's algorithm</b>. Show the steps, the MST and its total length.`,
  fig: G({ n: { A: [305, 328], B: [405, 255], F: [563, 255], H: [657, 255], D: [475, 328], G: [657, 368], C: [398, 410], E: [548, 420] },
    e: 'A-B:3 A-D:5 A-C:2 B-D:2 B-F:13 C-D:2 C-E:5 D-F:6 D-G:3 D-E:4 F-H:3 F-G:2 H-G:6 E-G:6' }),
  sol: `<p>Sort edges by weight and add each one unless it closes a cycle:</p>` +
    tbl([['Edge', 'w', 'Included?'], ['AC', '2', 'yes'], ['BD', '2', 'yes'], ['CD', '2', 'yes'], ['FG', '2', 'yes'],
      ['AB', '3', 'no (cycle A-C-D-B)'], ['DG', '3', 'yes'], ['FH', '3', 'yes'], ['DE', '4', 'yes'],
      ['AD, CE, EG, DF, GH, BF', '≥5', 'no (all vertices already connected)']]) +
    `<p><b>MST length = 2+2+2+2+3+3+4 = 18</b> (7 edges for 8 vertices).</p>`,
  solFig: G({ n: { A: [305, 328], B: [405, 255], F: [563, 255], H: [657, 255], D: [475, 328], G: [657, 368], C: [398, 410], E: [548, 420] },
    e: 'A-B:3 A-D:5 A-C:2 B-D:2 B-F:13 C-D:2 C-E:5 D-F:6 D-G:3 D-E:4 F-H:3 F-G:2 H-G:6 E-G:6', hl: 'A-C B-D C-D F-G D-G F-H D-E' })
});

Q({
  id: 'f13-4', ch: 'g3', src: 'Final 2013', type: 'open',
  q: `Find the shortest paths from source <b>A</b> to every vertex using <b>Dijkstra's algorithm</b>. Show the table and the resulting shortest-path tree.`,
  fig: G({ n: { A: [330, 303], B: [408, 243], E: [513, 243], F: [630, 243], C: [408, 350], D: [513, 350], G: [630, 350] },
    e: 'A>B:3 A>C:5 B>E:2 B>C:1 C>B:3 C>E:9 C>D:4 E>F:4 E>D:4 D>E:6 E>G:1 D>A:7 D>F:3 G>F:1' }),
  sol: tbl([['Extracted', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
      ['init', '0', '∞', '∞', '∞', '∞', '∞', '∞'],
      ['A', '<b>0</b>', '3', '5', '∞', '∞', '∞', '∞'],
      ['B', '', '<b>3</b>', '4', '∞', '5', '∞', '∞'],
      ['C', '', '', '<b>4</b>', '8', '5', '∞', '∞'],
      ['E', '', '', '', '8', '<b>5</b>', '9', '6'],
      ['G', '', '', '', '8', '', '7', '<b>6</b>'],
      ['F', '', '', '', '8', '', '<b>7</b>', ''],
      ['D', '', '', '', '<b>8</b>', '', '', '']]) +
    `<p>Final distances: A 0, B 3, C 4 (A→B→C), D 8 (A→B→C→D), E 5 (A→B→E), G 6 (A→B→E→G), F 7 (A→B→E→G→F).</p>`,
  solFig: G({ n: { A: [330, 303], B: [408, 243], E: [513, 243], F: [630, 243], C: [408, 350], D: [513, 350], G: [630, 350] },
    e: 'A>B:3 A>C:5 B>E:2 B>C:1 C>B:3 C>E:9 C>D:4 E>F:4 E>D:4 D>E:6 E>G:1 D>A:7 D>F:3 G>F:1',
    hl: 'A>B B>C C>D B>E E>G G>F', lab: { A: '0', B: '3', C: '4', D: '8', E: '5', F: '7', G: '6' } })
});

Q({
  id: 'f13-5a', ch: 'np', src: 'Final 2013', type: 'open',
  q: `Explain what P, NP and NP-Complete problems are. What is meant by "is P = NP?"`,
  sol: `<ul>
    <li><b>P</b> — decision problems solvable in polynomial time, O(n<sup>k</sup>), on a deterministic machine.</li>
    <li><b>NP</b> — decision problems whose candidate solution (certificate) can be <i>verified</i> in polynomial time (equivalently, solvable in polynomial time by a non-deterministic machine). P ⊆ NP.</li>
    <li><b>NP-Complete</b> — a problem that is in NP <i>and</i> every NP problem reduces to it in polynomial time (it is NP-hard).</li>
    <li><b>P = NP?</b> — asks whether every problem whose solution can be verified in polynomial time can also be <i>solved</i> in polynomial time. It is unproven; if any NP-complete problem had a polynomial algorithm, then P = NP.</li></ul>`
});

const redOpts = ['True', 'False'];
Q({ id: 'f13-5b1', ch: 'np', src: 'Final 2013', type: 'tf',
  q: `Suppose <span class="m">A ≤<sub>p</sub> B</span> (A reduces to B in polynomial time). <br>If A ∈ NP-Complete and B ∈ NP, then B ∈ NP-Complete.`, ans: true,
  sol: `True. Every NP problem reduces to A, and A reduces to B, so every NP problem reduces to B (B is NP-hard). With B ∈ NP, B is NP-complete.` });
Q({ id: 'f13-5b2', ch: 'np', src: 'Final 2013', type: 'tf',
  q: `Suppose <span class="m">A ≤<sub>p</sub> B</span>. If B ∈ P, then A ∈ P.`, ans: true,
  sol: `True. To solve A: transform the instance to B in polynomial time, then solve B in polynomial time.` });
Q({ id: 'f13-5b3', ch: 'np', src: 'Final 2013', type: 'tf',
  q: `Suppose <span class="m">A ≤<sub>p</sub> B</span>. If A is NP-hard, then B is NP-hard.`, ans: true,
  sol: `True. B is "at least as hard" as A: any problem that reduces to A also reduces to B by chaining the reductions.` });
Q({ id: 'f13-5b4', ch: 'np', src: 'Final 2013', type: 'tf',
  q: `Suppose <span class="m">A ≤<sub>p</sub> B</span>. If B is NP-hard, then A is NP-hard.`, ans: false,
  sol: `False. The reduction goes the wrong way. A could be easy (even in P) — reducing an easy problem to a hard one says nothing about A.` });

Q({
  id: 'f13-6a', ch: 'g3', src: 'Final 2013 (bonus)', type: 'open',
  q: `Let G = (V, E) be a weighted directed graph with <b>exactly one</b> negative-weight edge and no negative-weight cycles. Give an algorithm that finds the shortest distance from s to all vertices with the same running time as Dijkstra.`,
  sol: `<p>Let the negative edge be (u, v).</p><ol>
    <li>Remove (u, v) and run Dijkstra from s → distances d<sub>s</sub>[·].</li>
    <li>Run Dijkstra from v (edge still removed) → distances d<sub>v</sub>[·].</li>
    <li>For every vertex t: dist(s, t) = min( d<sub>s</sub>[t], d<sub>s</sub>[u] + w(u, v) + d<sub>v</sub>[t] ).</li></ol>
    <p>A shortest path uses the negative edge at most once (no negative cycles), so it either avoids it or is s ⇝ u → v ⇝ t. Two Dijkstra runs + O(V) combination = same asymptotic time as Dijkstra.</p>`
});

Q({
  id: 'f13-6b', ch: 'np', src: 'Final 2013 (bonus)', type: 'open',
  q: `An <b>independent set</b> is a set of vertices no two of which are adjacent. Assume Independent-Set ∈ NP and the 3-CNF formula
     <span class="m">(x<sub>1</sub> ∨ x<sub>2</sub> ∨ ¬x<sub>3</sub>) ∧ (x<sub>2</sub> ∨ x<sub>3</sub> ∨ ¬x<sub>4</sub>) ∧ (x<sub>1</sub> ∨ ¬x<sub>2</sub> ∨ x<sub>4</sub>)</span>.
     Show (by reducing 3-CNF to a graph) that Independent Set is NP-complete. What is the size of the maximum independent set S? Hint: connect a literal to its negation.`,
  sol: `<p><b>Reduction.</b> For each clause make a triangle of its 3 literals (edges inside each clause). Also connect every literal x<sub>i</sub> to every occurrence of ¬x<sub>i</sub>. The formula with k clauses is satisfiable ⇔ the graph has an independent set of size k. Built in polynomial time, so 3-CNF ≤<sub>p</sub> Independent-Set; with IS ∈ NP, IS is NP-complete.</p>
    <p>(⇒) Pick one true literal from each clause: one vertex per triangle, and never both x and ¬x → independent, size k. (⇐) An independent set of size k has exactly one vertex per triangle and no complementary pair, so set those literals true → every clause satisfied.</p>
    <p><b>Max |S| = 3</b> (one per clause; e.g. x<sub>1</sub> = x<sub>2</sub> = x<sub>4</sub> = 1 lets us pick x<sub>1</sub> from clause 1, x<sub>2</sub> from clause 2 and x<sub>4</sub> from clause 3). It cannot exceed 3 since each triangle contributes at most one vertex.</p>`
});
}
