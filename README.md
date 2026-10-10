# Atelier matematic

A Romanian mathematics study guide and interactive study website, organized from 40 photographed notebook pages.

- 25 lessons on laws of composition, algebraic structures, primitives and integration.
- 88 worked examples, 80 flashcards and 28 questions with explanations.
- Visual experiments for primitives, shifted multiplication, modular addition and choosing an integration method.
- A printable guide with formula reference, memory prompts, practice questions and answer key.

**Website:** https://o1tean.github.io/atelier-matematic/

**PDF:** [Ghid matematica](Ghid-matematica.pdf)

The notes were rewritten for clarity and calculations were checked. Conflicting source statements, corrections and completed calculations are identified in the relevant lessons. This is a study synthesis, rather than a facsimile or official exam syllabus. Original photos are not included.

## Use locally

Open `index.html`, or serve this folder with any static HTTP server. For example:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. No build, account, server database or external CDN is needed. Lesson and flashcard progress is stored in this browser only. `ghid.html` is a complete reading and printing version that works without JavaScript.

## Content and implementation

`content.json` contains the lesson and quiz data; `data.js` exposes the same data to the browser. If editing content, regenerate `data.js` from that JSON and update the PDF/reading guide to keep the versions consistent. The website uses plain HTML, CSS and JavaScript. Mathematical notation uses vendored [KaTeX 0.16.22](https://katex.org/) under its MIT license (`vendor/katex/LICENSE`).

For browser checks, install Playwright in a development environment and run:

```sh
BASE_URL=http://localhost:8000 node tests/check.cjs
```

The checks cover lessons, mathematical rendering, quiz feedback/retry, flashcards, progress persistence, mobile overflow and visual experiments. Screenshots are QA artifacts and are not deployed.

## Publishing

GitHub Pages publishes the repository root from `main`. `.nojekyll` keeps the static files intact. Pushing updates to `main` republishes the site.
