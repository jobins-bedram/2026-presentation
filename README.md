# JoBins Year in Review — Presentation

A story-driven slide deck about transforming JoBins into an AI-leading product company.

## Deck

- [`year-in-review.md`](year-in-review.md) — Marp-compatible markdown slide deck

## Building the slides

The deck uses [Marp](https://marp.app/) front matter and `##`-level heading dividers.

```sh
# HTML
npx @marp-team/marp-cli year-in-review.md -o year-in-review.html

# PDF
npx @marp-team/marp-cli year-in-review.md --pdf

# Live preview while editing
npx @marp-team/marp-cli -s .
```

## Adding a new story

Each story is a self-contained section with the same narrative arc:

1. Story title slide (`Story N · Year`)
2. **Situation** — the status quo and its cost
3. **Experiment** — what we tried and why
4. **Result** — what happened
5. **Impact** — numbers first, then the strategic payoff
6. **Assumptions & Sources** — show the math so figures are defensible

To append a story:

- Copy the Story 1 section structure (see the placeholder Story 2 section)
- Add a row to the "Stories" index table near the top of the deck

## Story 1 cost model (reference)

| Parameter | Value |
|---|---|
| Dextra price | ¥60 / resume |
| GPT-3.5 price | $0.002 / 1K tokens (`gpt-3.5-turbo`, March 2023 launch pricing) |
| Tokens per resume | ~5,000 |
| USD→JPY | ¥140 |
| GPT-3.5 cost / resume | 5 × $0.002 × 140 = ¥1.40 |
| Cost reduction | (60 − 1.4) / 60 = 97.7% |

Savings scale linearly: `monthly_savings = volume × ¥58.6`.
