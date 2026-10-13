# Atelier matematic

A Romanian mathematics study guide and interactive study website, organized from 40 photographed notebook pages.

- 25 lessons on laws of composition, algebraic structures, primitives and integration.
- 88 worked examples, 80 flashcards and 28 questions with explanations.
- Visual experiments for primitives, shifted multiplication, modular addition and choosing an integration method.
- A printable guide with formula reference, memory prompts, practice questions and answer key.

**Live website (GitHub Pages):** [Atelier matematic](https://o1tean.github.io/atelier-matematic/)

**PDF:** [Ghid matematica](Ghid-matematica.pdf)

The notes were rewritten for clarity and calculations were checked. Conflicting source statements, corrections and completed calculations are identified in the relevant lessons. This is a study synthesis, rather than a facsimile or official exam syllabus. Original photos are not included.

## Use locally

Open `index.html`, or serve this folder with any static HTTP server. For example:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No build, account, server database or external CDN is needed. Lesson and flashcard progress is stored in this browser only. `ghid.html` is a complete reading and printing version that works without JavaScript.

## Content and implementation

`content.json` contains the lesson and quiz data; `data.js` exposes the same data to the browser. The fixed texts of the reading guide (cover, introduction, section headings, closing notes) live in `tools/guide-strings.json`. After editing either file, rebuild the derived files:

```sh
node tools/build.cjs
```

This rewrites `data.js` and `ghid.html` (keeping the current table-of-contents page numbers). Add `--pdf` to also render `Ghid-matematica.pdf` and recompute the page numbers; that step needs the `playwright` package with Chromium (see below) and `pdftotext` from poppler. The website uses plain HTML, CSS and JavaScript. Mathematical notation uses vendored [KaTeX 0.16.22](https://katex.org/) under its MIT license (`vendor/katex/LICENSE`).

For browser checks, install Playwright in a development environment and run:

```sh
BASE_URL=http://localhost:8000 node tests/check.cjs
BROWSER=firefox BASE_URL=https://o1tean.github.io/atelier-matematic/ node tests/check.cjs
BROWSER=firefox BROWSER_CHANNEL=moz-firefox BASE_URL=https://o1tean.github.io/atelier-matematic/ node tests/check.cjs
BROWSER=webkit BASE_URL=https://o1tean.github.io/atelier-matematic/ node tests/check.cjs
```

Use `npx playwright install chromium firefox webkit` to install the test browsers. WebKit exercises that rendering engine; it is not the installed Safari application. With Playwright versions supporting Firefox WebDriver BiDi, `BROWSER_CHANNEL=moz-firefox` selects the installed Firefox. Optional `BROWSER_PATH` selects a compatible executable; `CHROME_PATH` remains supported for Chromium.

On macOS 27, Firefox may fail before opening a page because its shared app-data folder is protected ([upstream issue](https://github.com/microsoft/playwright/issues/42768)). Set `CFFIXED_USER_HOME` for the test process to an absolute, empty directory under `work/qa`; this isolates test data without changing the installed browser or system settings.

The checks cover lessons, mathematical rendering, quiz feedback/retry, flashcards, progress persistence, mobile overflow and visual experiments. Reports and screenshots go to `work/qa/<browser>` (or `SCREENSHOT_DIR`) and are not deployed.

## Publishing

GitHub Pages is enabled and publishes the repository root from `main`. `.nojekyll` keeps the static files intact. Pushing updates to `main` republishes the site.
