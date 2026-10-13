#!/usr/bin/env node
// Regenerates data.js and ghid.html from content.json and tools/guide-strings.json.
// With --pdf it also renders Ghid-matematica.pdf and recomputes the table-of-contents
// page numbers (needs the playwright package with Chromium, and pdftotext from poppler).
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const root = path.join(__dirname, '..');
const katex = require(path.join(root, 'vendor/katex/katex.min.js'));
const content = JSON.parse(fs.readFileSync(path.join(root, 'content.json'), 'utf8'));
const G = JSON.parse(fs.readFileSync(path.join(__dirname, 'guide-strings.json'), 'utf8'));
const ghidPath = path.join(root, 'ghid.html'), pdfPath = path.join(root, 'Ghid-matematica.pdf');
const L = content.lessons, Q = content.questions;
const COVER_ART = `<svg class="cover-art" viewBox="0 0 640 235" aria-hidden="true"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="#dfe6e0" stroke-width=".8"></path></pattern></defs><rect width="640" height="235" fill="url(#grid)"></rect><path d="M20 195H625M88 220V18" fill="none" stroke="#758779" stroke-width="1.3"></path><path d="M25 199C125 198 145 176 203 131S306 16 367 39S483 190 624 82" fill="none" stroke="#244e3b" stroke-width="3"></path><path d="M25 201C166 201 182 143 247 136S382 164 447 120S524 24 624 31" fill="none" stroke="#ab8851" stroke-width="2"></path><circle cx="247" cy="136" r="5" fill="#ab8851"></circle><circle cx="367" cy="39" r="5" fill="#244e3b"></circle><text x="601" y="215" font-family="Georgia,serif" font-style="italic" font-size="20" fill="#244e3b">x</text><text x="67" y="30" font-family="Georgia,serif" font-style="italic" font-size="20" fill="#244e3b">y</text></svg>`;

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const unesc = s => s.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const errors = [];
function math(tex, display = false) {
  try { return katex.renderToString(String(tex), { displayMode: display, throwOnError: true, trust: false, output: 'htmlAndMathml' }); }
  catch (e) { errors.push(`${tex} :: ${e.message.split('\n')[0]}`); return `<span class="text-math">${esc(tex)}</span>`; }
}
// plain text with inline \( \) and \[ \] maths; HTML-escaped outside the maths
const rich = s => esc(s).replace(/\\\(([\s\S]*?)\\\)/g, (_, m) => math(unesc(m))).replace(/\\\[([\s\S]*?)\\\]/g, (_, m) => math(unesc(m), true));
// text from guide-strings.json that may carry its own tags (<br>, <strong>, <a>)
const richHtml = s => String(s ?? '').replace(/\\\(([\s\S]*?)\\\)/g, (_, m) => math(m)).replace(/\\\[([\s\S]*?)\\\]/g, (_, m) => math(m, true));
const pad = n => String(n).padStart(2, '0');
const sources = l => l.sourceIds.map(n => 'S' + pad(n)).join(' · ');

function guideHtml(pages) {
  const page = id => pages[id] ?? '';
  let h = `<!DOCTYPE html><html lang="ro"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(G.title)}</title><meta name="description" content="${esc(G.metaDescription).replace(/"/g, '&quot;')}"><link rel="stylesheet" href="vendor/katex/katex.min.css"><link rel="stylesheet" href="guide.css"></head><body><div class="screen-toolbar"><a href="index.html">${esc(G.toolbarBack)}</a><a href="Ghid-matematica.pdf" download="">${esc(G.toolbarPdf)}</a><button onclick="window.print()">${esc(G.toolbarPrint)}</button></div><main><section class="cover" aria-label="Coperta">
    <p class="imprint">${esc(G.imprint)} <span>${esc(G.imprintSub)}</span></p>
    <h1>${G.coverTitle}</h1>
    <p class="cover-subtitle">${esc(G.coverSubtitle)}</p>
    <p class="cover-intro">${rich(G.coverIntro)}</p>
    <div class="cover-stats"><p><strong>${L.length}</strong> ${esc(G.statLessons)}</p><p><strong>${L.reduce((a, l) => a + l.examples.length, 0)}</strong> ${esc(G.statExamples)}</p><p><strong>${Q.length}</strong> ${esc(G.statQuestions)}</p></div>
    ${COVER_ART}
    <p class="cover-caption">${esc(G.coverCaption)}</p>
  </section><section class="intro page-start" id="cum-inveti">
    <p class="eyebrow">${esc(G.introEyebrow)}</p><h2>${esc(G.introTitle)}</h2>
    <p class="lead">${rich(G.introLead)}</p>
    <p>${rich(G.introP1)}</p>
    <ol class="study-method"><li>${richHtml(G.method1)}</li><li>${richHtml(G.method2)}</li><li>${richHtml(G.method3)}</li><li>${richHtml(G.method4)}</li></ol>
    <h3>${esc(G.pathsTitle)}</h3>
    <div class="learning-path"><p><strong>${esc(G.pathAlgebraLabel)}</strong></p><p>${rich(G.pathAlgebra)}</p><p><strong>${esc(G.pathAnalysisLabel)}</strong></p><p>${rich(G.pathAnalysis)}</p></div>
    <h3>${esc(G.conditionsTitle)}</h3>
    <p>${richHtml(G.conditionsP)}</p>
    <p>${richHtml(G.naturalsP)}</p>
    <p>${richHtml(G.sourcesP)}</p>
  </section><nav class="contents page-start" id="cuprins" aria-label="${esc(G.tocTitle)}"><p class="eyebrow">${esc(G.tocEyebrow)}</p><h2>${esc(G.tocTitle)}</h2>`;
  for (const g of ['Algebră', 'Analiză']) {
    h += `<h3>${esc(g)}</h3><ol>` + L.map((l, i) => l.group === g ? `<li><a href="#${l.id}"><span class="toc-index">${pad(i + 1)}</span><span>${rich(l.title)}</span><span class="toc-page">${page(l.id)}</span></a></li>` : '').join('') + '</ol>';
  }
  h += `<div class="toc-end"><a href="#formular">${esc(G.formularTitle)} <span>${page('formular')}</span></a><a href="#exercitii">${esc(G.exercisesTitle)} <span>${page('exercitii')}</span></a><a href="#raspunsuri">${esc(G.answersTitle)} <span>${page('raspunsuri')}</span></a><a href="#surse">${esc(G.sourcesTitle)} <span>${page('surse')}</span></a></div></nav>`;
  L.forEach((l, i) => {
    const first = L.findIndex(x => x.group === l.group) === i;
    h += `<article class="lesson ${first ? 'chapter-start' : ''}" id="${l.id}">
    <header class="lesson-header"><p class="eyebrow">${esc(G.lessonWord)} ${pad(i + 1)} <span>${esc(l.group)}</span></p><h2>${rich(l.title)}</h2><p class="lesson-summary">${rich(l.summary)}</p><p class="source-line">${esc(G.sourcesWord)} ${sources(l)}</p></header>
    <section class="rules" aria-label="${esc(G.rulesHeading)}"><h3>${esc(G.rulesHeading)}</h3>${l.rules.map(r => `<div class="rule"><h4>${rich(r.label)}</h4><div class="formula">${math(r.formula)}</div><p>${rich(r.explanation)}</p></div>`).join('')}</section>
    <section class="examples" aria-label="${esc(G.examplesHeading)}"><h3>${esc(G.examplesHeading)}</h3>${l.examples.map((e, j) => `<div class="example"><h4><span class="example-number">${pad(j + 1)}</span>${rich(e.question)}</h4><ol class="steps">${e.steps.map(s => `<li>${rich(s)}</li>`).join('')}</ol><p class="answer"><strong>${esc(G.resultLabel)}</strong> ${rich(e.answer)}</p></div>`).join('')}</section>
    <section class="recall" aria-label="${esc(G.recallHeading)}"><h3>${esc(G.recallHeading)}</h3><p class="section-intro">${rich(G.recallIntro)}</p>${l.recall.map(c => `<div class="recall-item"><p class="recall-question">${rich(c.q)}</p><p class="recall-answer">${rich(c.a)}</p></div>`).join('')}</section>
    <section class="cautions"><h3>${esc(G.cautionsHeading)}</h3><ul>${l.pitfalls.map(p => `<li>${rich(p)}</li>`).join('')}</ul></section>
  </article>`;
  });
  h += `<section class="reference page-start" id="formular"><p class="eyebrow">${esc(G.formularEyebrow)}</p><h2>${esc(G.formularTitle)}</h2><p class="lead">${rich(G.formularLead)}</p>` +
    L.map((l, i) => `<div class="reference-item"><h3><a href="#${l.id}">${pad(i + 1)} ${rich(l.title)}</a></h3>${l.rules.slice(0, 2).map(r => `<div class="formula"><span class="reference-label">${rich(r.label)}</span> ${math(r.formula)}</div>`).join('')}</div>`).join('') + '</section>';
  h += `<section class="practice page-start" id="exercitii"><p class="eyebrow">${esc(G.exercisesEyebrow)}</p><h2>${esc(G.exercisesTitle)}</h2><p class="lead">${rich(G.exercisesLead)}</p>` +
    Q.map((q, i) => `<div class="practice-question"><p class="question-topic">${pad(i + 1)} · ${esc(q.group)} · ${rich(q.topic)}</p><h3>${rich(q.q)}</h3><ol class="options" type="A">${q.options.map(o => `<li>${rich(o)}</li>`).join('')}</ol></div>`).join('') + '</section>';
  h += `<section class="answer-key page-start" id="raspunsuri"><p class="eyebrow">${esc(G.answersEyebrow)}</p><h2>${esc(G.answersTitle)}</h2><p class="lead">${rich(G.answersLead)}</p>` +
    Q.map((q, i) => `<div class="key-item"><h3>${pad(i + 1)} <span class="key-letter">${String.fromCharCode(65 + q.answer)}</span> ${rich(q.options[q.answer])}</h3><p>${rich(q.explanation)}</p></div>`).join('') + '</section>';
  h += `<section class="source-notes page-start" id="surse"><p class="eyebrow">${esc(G.sourcesEyebrow)}</p><h2>${esc(G.sourcesTitle)}</h2><p>${rich(G.sourcesP1)}</p><p>${rich(G.sourcesP2)}</p>` +
    L.filter(l => l.notes && l.notes.length).map(l => `<div class="note-item"><h3>${rich(l.title)}</h3><p class="source-line">${sources(l)}</p>${l.notes.map(n => `<p>${rich(n)}</p>`).join('')}</div>`).join('') +
    `<p class="closing-note">${rich(G.closingNote)}</p></section></main></body></html>`;
  return h;
}

// Page numbers currently printed in ghid.html, so a rebuild without --pdf keeps them.
function currentPages() {
  const pages = {};
  if (!fs.existsSync(ghidPath)) return pages;
  const html = fs.readFileSync(ghidPath, 'utf8');
  for (const m of html.matchAll(/href="#([^"]+)"><span class="toc-index">\d+<\/span><span>.*?<\/span><span class="toc-page">(\d*)<\/span>/g)) pages[m[1]] = m[2];
  for (const m of html.matchAll(/<a href="#(formular|exercitii|raspunsuri|surse)">[^<]*<span>(\d*)<\/span>/g)) pages[m[1]] = m[2];
  return pages;
}

// Finds the PDF page of every lesson and back-matter section from the extracted text (whitespace-insensitive).
function pageMap(pdf) {
  const squash = s => s.normalize('NFC').replace(/[\s:\u200b]+/g, '');
  const pages = execFileSync('pdftotext', ['-layout', pdf, '-']).toString().split('\f').map(squash);
  const map = { pageCount: pages.filter(Boolean).length };
  const find = (needle, from, extra = () => true) => pages.findIndex((t, i) => i >= from && t.includes(squash(needle)) && extra(t));
  L.forEach((l, i) => {
    let p = find(`${G.lessonWord} ${pad(i + 1)}`, 3);
    if (p < 0) p = find(l.title, 3, t => !t.includes(squash(G.tocTitle)));
    if (p < 0) throw new Error(`lesson not found in the PDF text: ${l.title}`);
    map[l.id] = p + 1;
  });
  const last = Math.max(...L.map(l => map[l.id]));
  for (const [id, title] of [['formular', G.formularTitle], ['exercitii', G.exercisesTitle], ['raspunsuri', G.answersTitle], ['surse', G.sourcesTitle]]) {
    const p = find(title, last - 1);
    if (p < 0) throw new Error(`section not found in the PDF text: ${title}`);
    map[id] = p + 1;
  }
  return map;
}

async function renderPdf(out) {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.goto('file://' + ghidPath, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
  } finally { await browser.close(); }
}

function writeGuide(pages) {
  fs.writeFileSync(ghidPath, guideHtml(pages));
  if (errors.length) { console.error('KaTeX errors:\n' + errors.join('\n')); process.exit(1); }
}

(async () => {
  fs.writeFileSync(path.join(root, 'data.js'), 'window.STUDY = ' + JSON.stringify(content, null, 2) + ';\n');
  let pages = currentPages();
  writeGuide(pages);
  console.log(`data.js and ghid.html written (${L.length} lessons, ${Q.length} questions)`);
  if (!process.argv.includes('--pdf')) return;
  const tmp = path.join(os.tmpdir(), 'ghid-pass.pdf');
  for (let pass = 1; pass <= 3; pass++) {               // ponytail: page numbers settle in 2 passes; 3 is a safety cap
    await renderPdf(tmp);
    const next = pageMap(tmp);
    const stable = JSON.stringify(next) === JSON.stringify(pages);
    pages = next;
    writeGuide(pages);
    if (stable) break;
  }
  fs.renameSync(tmp, pdfPath);
  console.log(`Ghid-matematica.pdf written, ${pages.pageCount} pages, lessons start on page ${pages[L[0].id]}`);
})().catch(e => { console.error(e.message); process.exit(1); });
