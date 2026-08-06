# My Journey from Software Engineer to AI Engineer — Presentation

A personal-narrative slide deck: my path from joining JoBins as a software engineer to becoming
an AI engineer, with JoBins' transformation into an AI-leading product company as the backdrop.

## Deck

Built with [Vite](https://vitejs.dev/), [reveal.js](https://revealjs.com/), and
[Tailwind CSS](https://tailwindcss.com/) (v4, via `@tailwindcss/vite`).

- [`index.html`](index.html) — the deck: every slide is a `<section>` in plain HTML, styled with
  Tailwind utilities on top of the reveal.js `black` theme
- [`main.js`](main.js) — reveal.js initialization (plugins: highlight, notes)
- [`style.css`](style.css) — Tailwind + reveal.js CSS imports (layered so utilities override the
  theme, and the theme survives Tailwind's preflight) plus deck-wide type-scale overrides
- [`vite.config.js`](vite.config.js) — Vite config with the Tailwind plugin

## Viewing the deck

```sh
npm install
npm run dev        # dev server with hot reload — visit the printed URL
npm run build      # production build into dist/
npm run preview    # serve the production build
```

Standard reveal.js controls apply: arrow keys / space to navigate, `Esc` for slide overview,
`S` for speaker notes.

## Deck structure

Each slide is a `<section>` inside `<div class="slides">` in `index.html`.
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
