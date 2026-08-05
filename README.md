# My Journey from Software Engineer to AI Engineer — Presentation

A personal-narrative slide deck: my path from joining JoBins as a software engineer to becoming
an AI engineer, with JoBins' transformation into an AI-leading product company as the backdrop.

## Deck

- [`index.html`](index.html) — [reveal.js](https://revealjs.com/) deck shell, loading reveal.js and its
  plugins from the local `node_modules/reveal.js` npm package
- [`slides.md`](slides.md) — the slide content, authored in markdown via reveal.js's markdown plugin

Keeping the content in `slides.md` means new chapters are just more markdown — no HTML editing needed.

## Viewing the deck

reveal.js is installed as an npm dependency, so the deck needs `node_modules` in place and must be
served over HTTP (the markdown plugin fetches `slides.md`, which browsers block over `file://`).

```sh
# Install dependencies (reveal.js + a static file server)
npm install

# Serve the deck
npm start
# (equivalent: npm run dev)
# then visit the printed http://localhost:8000 URL
```

Standard reveal.js controls apply: arrow keys / space to navigate, `Esc` for slide overview,
`S` for speaker notes.

## Deck structure

Slides are separated by a line containing only `---` (see `data-separator` in `index.html`).
The deck is organized into **chapters**, each a self-contained run of slides:

1. Chapter title slide (`Chapter N · When`)
2. Scene-setting — where I was, what the status quo looked like
3. What I tried — the experiment or decision
4. What happened — the result
5. What it changed — impact, and (where relevant) the numbers behind it

To add a chapter:

- Append a new run of slides after the last chapter (see the "Chapter 4 · Coming Soon" placeholder)
- Add a row to the "My Chapters" index slide near the top of the deck
- Follow the same arc as the existing chapters (Where I was → What I tried → What happened → What it changed)

## Personal-memory placeholders

Some slides contain a marker like `` `[add memory: first day at JoBins]` `` — these are intentional
placeholders for personal color that hasn't been provided yet. Replace them with real memories;
never invent biographical detail to fill them in.

## Chapter 2 cost model (reference)

| Parameter | Value |
|---|---|
| Dextra price | ¥60 / resume |
| GPT-3.5 price | $0.002 / 1K tokens (`gpt-3.5-turbo`, March 2023 launch pricing) |
| Tokens per resume | ~5,000 |
| USD→JPY | ¥140 |
| GPT-3.5 cost / resume | 5 × $0.002 × 140 = ¥1.40 |
| Cost reduction | (60 − 1.4) / 60 = 97.7% |

Savings scale linearly: `monthly_savings = volume × ¥58.6`.
