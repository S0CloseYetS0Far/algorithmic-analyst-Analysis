// Builds the site from src/ + data/.
//   index.html                -> full document for opening locally (double-click)
//   dist/algo-exam-bank.html  -> single self-contained page body for publishing
// Run: node build.js
const fs = require('fs');
const path = require('path');

const root = __dirname;
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const dataFiles = ['bank.js', ...fs.readdirSync(path.join(root, 'data')).filter(f => /^q_.*\.js$/.test(f)).sort()];

const title = 'Algorithms Exam Bank';
const fonts = [
  'https://fonts.googleapis.com/css2?family=Martian+Mono:wdth,wght@75..112.5,300..800&display=swap',
  'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible+Next:wght@400;500;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,600;1,400&display=swap',
];
const fontLinks = ['<link rel="preconnect" href="https://fonts.googleapis.com">', '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>']
  .concat(fonts.map(f => `<link rel="stylesheet" href="${f}">`)).join('\n');
const shell = '<div id="app"><noscript><p style="padding:24px;font-family:monospace">This page needs JavaScript to run the practice questions.</p></noscript></div>';

// 1) local multi-file page
const local = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
${fontLinks}
<link rel="stylesheet" href="src/style.css">
</head>
<body>
${shell}
${dataFiles.map(f => `<script src="data/${f}"></script>`).join('\n')}
<script src="src/app.js"></script>
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), local);

// 2) single-file page body (the publisher adds doctype/head/body)
const safe = s => s.replace(/<\/script/gi, '<\\/script');
const single = `<title>${title}</title>
${fontLinks}
<style>
${read('src/style.css')}
</style>
${shell}
<script>
${dataFiles.map(f => safe(read('data/' + f))).join('\n;\n')}
</script>
<script>
${safe(read('src/app.js'))}
</script>
`;
fs.mkdirSync(path.join(root, 'dist'), { recursive: true });
fs.writeFileSync(path.join(root, 'dist', 'algo-exam-bank.html'), single);
console.log(`index.html + dist/algo-exam-bank.html (${(single.length / 1024).toFixed(0)} KB, ${dataFiles.length} data files)`);
