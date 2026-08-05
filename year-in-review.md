---
marp: true
theme: default
paginate: true
headingDivider: 2
footer: "JoBins · Year in Review"
---

<!-- _class: lead -->
<!-- _paginate: false -->

# JoBins: Becoming an AI-Leading Product Company

### A year in review, told in stories

Engineering · 2023 →

<!--
Deck structure: each story is a self-contained section
(Story N title slide → Situation → Experiment → Result → Impact).
To add a story, append a new section after the last one and
add a row to the "Stories" index slide below.
-->

## The Stories

| # | Year | Story |
|---|------|-------|
| 1 | 2023 | The ¥60 Resume — replacing Dextra with GPT-3.5 |
| 2 | …    | *(coming soon)* |

Each story follows the same arc: **Situation → Experiment → Result → Impact**

<!-- ====================== STORY 1 ====================== -->

## <!-- _class: lead --> Story 1 · 2023

# The ¥60 Resume

### How one prototype cut our resume-parsing cost by ~98%

## Situation

- Every resume that enters JoBins must be parsed into structured data
- We relied on **Dextra**, a third-party parsing service
- Price: **~¥60 per resume** — every single one
- Cost scaled linearly with our growth: more candidates, bigger bill
- Parsing was a black box: no control over quality, format, or roadmap

> The better we did as a business, the more we paid someone else.

## The Spark — Early 2023

- OpenAI releases **GPT-3.5** (`gpt-3.5-turbo`) — API access at **$0.002 / 1K tokens**
- The question worth an afternoon:

> *"Can a general-purpose LLM parse a resume as well as a purpose-built service — at a fraction of the cost?"*

- So we prototyped it: prompt in, resume text in, structured JSON out

## The Experiment

- Built a resume-parsing prototype on `gpt-3.5-turbo`
- One resume ≈ **5,000 tokens** end-to-end (resume text in + structured fields out)
- Compared extraction quality side-by-side against Dextra on real resumes

**Result: comparably good parsing quality.**

No fine-tuning. No new infrastructure. Just a well-designed prompt.

## The Math — Cost per Resume

| | Dextra | GPT-3.5 |
|---|---|---|
| Pricing model | flat fee per resume | $0.002 per 1K tokens |
| Usage per resume | 1 parse | ~5,000 tokens |
| Cost (USD) | — | 5 × $0.002 = **$0.010** |
| Cost (JPY @ ¥140/USD) | **¥60.0** | **¥1.4** |

<br>

# **~98% cheaper** <!-- fit -->

(1 − 1.4 / 60 = **97.7% cost reduction**)

## Impact — What That Means at Scale

Monthly savings at different volumes (¥60 → ¥1.4 per resume):

| Resumes / month | Dextra | GPT-3.5 | Saved / month | Saved / year |
|---:|---:|---:|---:|---:|
| 1,000 | ¥60,000 | ¥1,400 | **¥58,600** | ¥703,200 |
| 5,000 | ¥300,000 | ¥7,000 | **¥293,000** | ¥3,516,000 |
| 10,000 | ¥600,000 | ¥14,000 | **¥586,000** | ¥7,032,000 |
| 50,000 | ¥3,000,000 | ¥70,000 | **¥2,930,000** | ¥35,160,000 |

Savings grow with us — the cost curve no longer punishes growth.

## Beyond the Money

- **Independence** — no third-party lock-in for a core pipeline
- **Control** — we own the prompt, the schema, the quality bar
- **Speed** — new fields or formats are a prompt change, not a vendor request
- **A precedent** — proof that a small AI experiment can beat an established vendor

> Story 1 wasn't about saving ¥58 per resume.
> It was the moment JoBins started building with AI instead of buying around it.

## Assumptions & Sources (Story 1)

- **Dextra**: ~¥60 per resume (actual 2023 contract rate)
- **GPT-3.5**: `gpt-3.5-turbo`, launch pricing **$0.002 / 1K tokens** (March 2023).
  Conservative: OpenAI cut input pricing to $0.0015/1K in June 2023, so real cost was equal or lower
- **Tokens per resume**: ~5,000 (input + output combined, measured on the prototype)
- **FX**: **¥140 / USD** (2023-era average)
- Per-resume cost: 5,000 tokens × $0.002/1K = $0.010 × 140 = **¥1.40**
- Reduction: (60 − 1.4) / 60 = **97.7%**
- Volume table is parameterized because exact monthly volume varies; scale linearly for other volumes

<!-- ====================== STORY 2 (placeholder) ====================== -->

## <!-- _class: lead --> Story 2 · Coming Soon

# *(Next chapter)*

<!-- Duplicate the Story 1 section structure here:
     Story title → Situation → Experiment → Result → Impact → Assumptions -->

## <!-- _class: lead _paginate: false --> Thank You

### JoBins — ahead by building, not buying

*More stories to come.*
