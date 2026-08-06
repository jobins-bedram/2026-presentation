# My Journey from Software Engineer to AI Engineer — Presentation

A personal-narrative slide deck: my path from joining JoBins as a software engineer to becoming
an AI engineer, with JoBins' transformation into an AI-leading product company as the backdrop.

## Deck

Built with [Vite](https://vitejs.dev/), [reveal.js](https://revealjs.com/), and
[Tailwind CSS](https://tailwindcss.com/) (v4, via `@tailwindcss/vite`).

- [`index.html`](index.html) — the deck shell (an empty `.slides` container)
- [`slides/`](slides/) — the slide content, one HTML file per section of the talk
  (`00-title` … `06-chapter-4`), imported in order by `main.js` via Vite `?raw` imports
- [`main.js`](main.js) — injects the slide partials and initializes reveal.js (plugins: highlight, notes)
- [`style.css`](style.css) — Tailwind + reveal.js CSS imports (layered so utilities override the
  theme, and the theme survives Tailwind's preflight) plus the deck theme: warm paper background,
  dusty-blue palette, Playfair Display headings
- [`decorations.svg`](decorations.svg) — the abstract circles/rings/dots drawn in the viewport corners
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

All memory placeholders have been filled in or removed. If a future slide needs one, mark it with
`<span class="memory">…</span>` (styled as an orange TODO chip in `style.css`) — and replace it with
a real memory; never invent biographical detail to fill it in.

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
