'use strict';
// Run against a local HTTP server. Set BASE_URL, CHROME_PATH and NODE_PATH if needed.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../content.json'), 'utf8'));
const base = process.env.BASE_URL || 'http://127.0.0.1:8861';
const screenshots = process.env.SCREENSHOT_DIR || path.resolve('work/qa');
const failures = [], diagnostics = [], browserErrors = [];
let checks = 0;
const check = (condition, message) => { checks++; if (!condition) failures.push(message); };
fs.mkdirSync(screenshots, { recursive: true });

(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : {}) });
  try {
    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    page.on('pageerror', error => browserErrors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') browserErrors.push(message.text()); });
    const navigate = async hash => {
      await page.goto(`${base}/${hash || ''}`);
      await page.locator('#main h1').waitFor();
    };
    const route = async hash => {
      await page.evaluate(hash => { location.hash = hash; }, hash);
      await page.waitForFunction(hash => location.hash === hash, hash);
      await page.locator('#main h1').waitFor();
      await page.waitForFunction(() => !document.querySelector('.loading'));
    };
    const screenshot = async name => page.screenshot({ path: path.join(screenshots, `${name}.png`), fullPage: false });
    const focusInside = async (selector, message) => check(await page.evaluate(selector => document.querySelector(selector)?.contains(document.activeElement), selector), message);
    const layout = async name => {
      const issues = await page.evaluate(() => {
        const root = document.documentElement;
        const clipped = [...document.querySelectorAll('.example .katex-html,.recall-list .katex-html,.flash-content .katex-html')].flatMap(el => {
          if (!el.getClientRects().length) return [];
          const box = el.getBoundingClientRect();
          const parent = el.closest('.example,.recall-list details,.flashcard');
          const limit = parent.getBoundingClientRect();
          return box.right > limit.right + 3 || box.left < limit.left - 3 ? [{ text: el.textContent.slice(0, 100), width: Math.round(box.width), available: Math.round(limit.width) }] : [];
        });
        return { overflow: root.scrollWidth - root.clientWidth, clipped, mathErrors: window.mathErrors || [] };
      });
      check(issues.overflow <= 2, `${name}: document overflows horizontally by ${issues.overflow}px`);
      check(!issues.clipped.length, `${name}: ${issues.clipped.length} inline math expressions clipped`);
      if (issues.clipped.length) diagnostics.push({ name, clipped: issues.clipped });
      check(!issues.mathErrors.length, `${name}: KaTeX rejected ${issues.mathErrors.length} expressions`);
    };
    const keyboardClick = async selector => { await page.locator(selector).focus(); await page.keyboard.press('Enter'); };
    const slider = async (selector, key) => { await page.locator(selector).focus(); await page.keyboard.press(key); };

    await navigate('');
    check(await page.locator('.lesson-link').count() === data.lessons.length, 'All lessons appear in navigation');
    check(await page.locator('.lesson-card').count() === data.lessons.length, 'All lessons appear in the library');
    await layout('desktop home');
    await screenshot('desktop-home');
    await page.locator('[data-filter="Algebră"]').click();
    check(await page.locator('.lesson-card').count() === data.lessons.filter(l => l.group === 'Algebră').length, 'Algebra library filter');
    await page.locator('[data-filter="all"]').click();
    await page.locator('#search').fill('primitiva');
    check(await page.locator('.lesson-card').count() > 0, 'Search ignores accents');
    await page.locator('#search').fill('no-such-lesson-837');
    check(await page.locator('.empty').count() === 1, 'Search empty state');
    await page.locator('#search').fill('');

    for (const mobile of [false, true]) {
      await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 });
      if (mobile && await page.locator('#syllabus').getAttribute('open') !== null) await page.locator('#syllabus > summary').click();
      for (const lesson of data.lessons) {
        await route(`#lesson/${lesson.id}`);
        await page.waitForFunction(title => document.querySelector('.lesson-header h1')?.textContent === title, lesson.title);
        if (await page.locator('.example details summary').count()) {
          await keyboardClick('.example details summary >> nth=0');
          check(await page.locator('.example details').first().getAttribute('open') !== null, `${lesson.id}: keyboard opens example`);
        }
        await page.locator('.lesson-body details').evaluateAll(nodes => nodes.forEach(node => { node.open = true; }));
        check(await page.locator('.rule > .formula .katex').count() === lesson.rules.length, `${lesson.id}: every rule renders as math`);
        check(await page.locator('.example-head h3 .katex').evaluateAll(nodes => nodes.every(node => Number.parseFloat(getComputedStyle(node).fontSize) >= 12 && getComputedStyle(node).display !== 'block')), `${lesson.id}: example math retains readable inline layout`);
        await layout(`${mobile ? 'mobile' : 'desktop'} lesson ${lesson.id}`);
        if (mobile && /primitive-compuse|integrare-parti/.test(lesson.id)) await screenshot(`mobile-${lesson.id}`);
      }
    }
    await page.setViewportSize({ width: 1440, height: 1000 });
    await route(`#lesson/${data.lessons[0].id}`);
    await keyboardClick('#mark-done');
    check(await page.locator('#mark-done').getAttribute('aria-pressed') === 'true', 'Mark lesson as done');
    await page.reload();
    check(await page.locator('#mark-done').getAttribute('aria-pressed') === 'true', 'Lesson completion persists after reload');

    await route('#cards');
    await page.locator('#flip').waitFor();
    await page.locator('#card-filter').selectOption(data.lessons[0].id);
    const initialCards = data.lessons[0].recall.length;
    check((await page.locator('.card-meta').textContent()).includes(`1 / ${initialCards}`), 'Card lesson filter');
    await page.locator('#flip').focus();
    await page.keyboard.press('Space');
    check(await page.locator('#flip').getAttribute('aria-pressed') === 'true', 'Space flips a card');
    await focusInside('#flip', 'Focus survives card flip');
    await page.keyboard.press('Space');
    check(await page.locator('#flip').getAttribute('aria-pressed') === 'false', 'Space returns to question');
    await keyboardClick('#card-known');
    check((await page.locator('.flash-meter').textContent()).includes('1 din'), 'Known card count updates');
    await focusInside('#flash-stage', 'Focus survives marking known');
    await keyboardClick('#prev-card');
    await focusInside('#flash-stage', 'Focus survives previous card');
    check((await page.locator('.flash-meter').textContent()).includes('Această fișă este marcată'), 'Previous returns to known card');
    await keyboardClick('#card-repeat');
    check((await page.locator('.flash-meter').textContent()).includes('0 din'), 'Repeat clears known state');
    await keyboardClick('#prev-card');
    await keyboardClick('#card-known');
    await keyboardClick('#review-only');
    check((await page.locator('.card-meta').textContent()).includes(`/ ${initialCards - 1}`), 'Review excludes known cards');
    await route('#lab');
    await route('#cards');
    await page.locator('#card-filter').waitFor();
    check(await page.locator('#card-filter').inputValue() === data.lessons[0].id, 'Card filter survives route change');
    check(await page.locator('#review-only').getAttribute('aria-pressed') === 'true', 'Review mode survives route change');
    for (let i = 1; i < initialCards; i++) await keyboardClick('#card-known');
    check(await page.locator('#show-all-cards').count() === 1, 'Empty review deck is recoverable');
    await focusInside('#show-all-cards', 'Completing the review deck focuses its recovery button');
    await keyboardClick('#show-all-cards');
    check(await page.locator('#card-filter').inputValue() === 'all', 'Show all resets card filter');
    await keyboardClick('#next-card');
    await focusInside('#flash-stage', 'Focus survives next card');
    await page.reload();
    check((await page.locator('.flash-meter').textContent()).includes(`${initialCards} din`), 'Known cards persist after reload');
    check(await page.locator('#flip').evaluate(card => {
      const label = card.querySelector('.flash-label').getBoundingClientRect();
      const content = card.querySelector('.flash-content').getBoundingClientRect();
      const hint = card.querySelector('.flash-hint').getBoundingClientRect();
      return label.bottom <= content.top + 2 && content.bottom <= hint.top + 2;
    }), 'Flashcard label, content and hint occupy separate rows');
    await screenshot('desktop-cards');
    const allCards = data.lessons.flatMap(lesson => lesson.recall);
    const longestCard = allCards.reduce((best, card, i) => card.a.length > allCards[best].a.length ? i : best, 0);
    for (const mobile of [false, true]) {
      await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 });
      if (mobile && await page.locator('#syllabus').getAttribute('open') !== null) await page.locator('#syllabus > summary').click();
      for (let i = 0; i < allCards.length; i++) {
        await layout(`${mobile ? 'mobile' : 'desktop'} card ${i + 1} question`);
        await keyboardClick('#flip');
        await layout(`${mobile ? 'mobile' : 'desktop'} card ${i + 1} answer`);
        if (mobile && i === longestCard) await screenshot('mobile-long-card-answer');
        await keyboardClick('#flip');
        await keyboardClick('#next-card');
      }
    }
    await page.setViewportSize({ width: 1440, height: 1000 });

    await route('#quiz');
    await page.locator('.choice').first().waitFor();
    const wrongIndices = [2, 9, data.questions.length - 1];
    for (let i = 0; i < data.questions.length; i++) {
      const q = data.questions[i];
      check((await page.locator('.card-meta').textContent()).includes(`Întrebarea ${i + 1} / ${data.questions.length}`), `Quiz question ${i + 1} numbering`);
      const choice = wrongIndices.includes(i) ? (q.answer + 1) % q.options.length : q.answer;
      await keyboardClick(`[data-choice="${choice}"]`);
      check(await page.locator('.choice.correct').count() === 1, `Quiz question ${i + 1} marks correct answer`);
      check(await page.locator('.choice:disabled').count() === q.options.length, `Quiz question ${i + 1} locks answer`);
      check(await page.locator('.feedback').count() === 1, `Quiz question ${i + 1} provides explanation`);
      await focusInside('#quiz-next', `Quiz question ${i + 1} focuses next button after answer`);
      await layout(`quiz question ${i + 1}`);
      await page.keyboard.press('Enter');
      if (i + 1 < data.questions.length) await focusInside('#quiz-stage', `Quiz question ${i + 1} keeps focus after next`);
      else check(await page.evaluate(() => document.activeElement.tagName === 'BUTTON'), 'Quiz results keep focus on a usable button');
    }
    check((await page.locator('.score').textContent()).replace(/\s/g, '') === `${data.questions.length - wrongIndices.length}/${data.questions.length}`, 'Quiz final score');
    await screenshot('desktop-quiz-results');
    await keyboardClick('#retry-wrong');
    for (let i = 0; i < wrongIndices.length; i++) {
      const q = data.questions[wrongIndices[i]];
      check((await page.locator('.card-meta').textContent()).includes(`/ ${wrongIndices.length}`), 'Wrong-answer retry deck length');
      await keyboardClick(`[data-choice="${q.answer}"]`);
      await page.keyboard.press('Enter');
    }
    check((await page.locator('.score').textContent()).replace(/\s/g, '') === '3/3', 'Retry wrong answers can reach full score');
    await page.locator('#quiz-filter').selectOption('Algebră');
    const algebraQuestions = data.questions.filter(q => q.group === 'Algebră');
    check((await page.locator('.card-meta').textContent()).includes(`1 / ${algebraQuestions.length}`), 'Quiz algebra filter resets deck');
    await keyboardClick('[data-choice="0"]');
    await page.locator('#quiz-filter').selectOption('Analiză');
    check(await page.locator('.feedback').count() === 0, 'Changing quiz filter clears previous answer');
    check((await page.locator('.card-meta').textContent()).includes(`1 / ${data.questions.filter(q => q.group === 'Analiză').length}`), 'Quiz analysis filter starts at first question');
    check((await page.evaluate(() => JSON.parse(localStorage.getItem('atelier-matematic-v1')))).best === 100, 'Best quiz score persists');

    await route('#lab');
    await page.locator('#constant').waitFor();
    const derivativeBefore = await page.locator('#plot g path').first().getAttribute('d');
    const primitiveBefore = await page.locator('#plot g path').nth(1).getAttribute('d');
    await slider('#constant', 'End');
    check(await page.locator('#constant-value').textContent() === '2', 'Primitive constant slider reaches max');
    check(await page.locator('#plot g path').first().getAttribute('d') === derivativeBefore, 'Changing C preserves derivative curve');
    check(await page.locator('#plot g path').nth(1).getAttribute('d') !== primitiveBefore, 'Changing C shifts primitive curve');
    await slider('#point', 'Home');
    check((await page.locator('#primitive-output').textContent()).includes('3,24'), 'Point slider updates tangent slope x²');
    await screenshot('desktop-lab-primitive');
    await keyboardClick('[data-lab="law"]');
    await slider('#law-x', 'End');
    await slider('#law-y', 'End');
    check((await page.locator('#law-output').textContent()).includes('8 * 8 = 20'), 'Law sliders compute transformed product');
    await keyboardClick('[data-law-y="5"]');
    check((await page.locator('#law-output').textContent()).includes('8 * 5 = 8'), 'Law neutral button');
    await keyboardClick('[data-law-y="4"]');
    check((await page.locator('#law-output').textContent()).includes('8 * 4 = 4'), 'Law absorbing button');
    await keyboardClick('[data-lab="cayley"]');
    check(await page.locator('td[data-cell]').evaluateAll(cells => cells.every(cell => { const [x,y] = cell.dataset.cell.split('-').map(Number); return cell.textContent === String((x+y)%5); })), 'All 25 modulo table values');
    await slider('#mod-x', 'End');
    await slider('#mod-y', 'End');
    check(await page.locator('td.active').getAttribute('data-cell') === '4-4', 'Modulo sliders highlight selected table cell');
    check((await page.locator('#mod-output').textContent()).includes('4 ⊕ 4 = 8 mod 5 = 3'), 'Modulo output updates');
    await keyboardClick('[data-lab="methods"]');
    for (const method of ['linear','log','chain','parts']) {
      await keyboardClick(`[data-method="${method}"]`);
      check(await page.locator(`[data-method="${method}"]`).getAttribute('aria-pressed') === 'true', `Method selector ${method}`);
      check(await page.locator('#method-result .katex').count() === 1, `Method formula ${method}`);
    }
    for (const mobile of [false, true]) {
      await page.setViewportSize(mobile ? { width: 390, height: 844 } : { width: 1440, height: 1000 });
      if (mobile && await page.locator('#syllabus').getAttribute('open') !== null) await page.locator('#syllabus > summary').click();
      for (const lab of ['primitive','law','cayley','methods']) {
        await page.locator(`[data-lab="${lab}"]`).click();
        await layout(`${mobile ? 'mobile' : 'desktop'} lab ${lab}`);
        if (mobile) await screenshot(`mobile-lab-${lab}`);
      }
    }
    await route('#cards');
    await page.locator('#flip').waitFor();
    await layout('mobile cards');
    await screenshot('mobile-cards');
    await route('#quiz');
    await page.locator('#quiz-filter').waitFor();
    await page.locator('#quiz-filter').selectOption('all');
    await layout('mobile quiz');
    await screenshot('mobile-quiz');
    for (let i = 0; i < data.questions.length; i++) {
      await layout(`mobile quiz question ${i + 1}`);
      await keyboardClick(`[data-choice="${data.questions[i].answer}"]`);
      await layout(`mobile quiz explanation ${i + 1}`);
      await page.keyboard.press('Enter');
    }
    await route('');
    await page.locator('.hero').waitFor();
    await layout('mobile home');
    await screenshot('mobile-home');
    check(browserErrors.length === 0, `Browser errors: ${browserErrors.join('; ')}`);
    const report = { checks, failures, diagnostics, browserErrors };
    fs.writeFileSync(path.join(screenshots, 'report.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
    assert.equal(failures.length, 0, `${failures.length} browser checks failed`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error.stack); process.exitCode = 1; });
