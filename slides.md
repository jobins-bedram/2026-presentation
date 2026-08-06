# My Journey from Software Engineer to AI Engineer

### From building a CRM to building with AI

*JoBins' transformation into an AI-leading product company, told through my own path.*

`[add memory: presenter name / date / occasion for this talk]`

---

## My Chapters

| # | When | Chapter |
|---|------|---------|
| 1 | Nov 2020 | Joining JoBins — building the CRM & the core product |
| 2 | 2023 | The ¥60 Resume — the turning point toward AI |
| 3 | `[add memory: year]` | AI Interviews — a new kind of problem |
| 4 | … | *(next chapter — to be continued)* |

Each chapter follows the same arc: **Where I was → What I tried → What happened → What it changed**

<!--
Deck structure: each chapter is a self-contained set of horizontal slides.
To add a chapter, append a new run of slides after the last one and
add a row to "My Chapters" above.
-->

---

<!-- .slide: data-state="chapter" -->

## Chapter 1 · November 2020

# Joining JoBins

### Where my journey begins

---

## My First Day

- In November 2020, I joined JoBins as a software engineer
- My first real assignment was the **CRM project**
- That's where I met **Puncoz-san** — I was genuinely impressed by his work, and it planted a dream: to become as excellent an engineer as him

---

## Building the CRM

- I spent my early days heads-down on the CRM — learning the codebase, the team, the domain
- `[add memory: a specific CRM feature, bug, or win from this period]`
- Classic software engineering: requirements in, code out, ship, repeat

---

## Moving to the Core Product

- From the CRM, I moved onto the **JoBins core product** — the main platform our business runs on
- `[add memory: what I owned or shipped on the core product]`
- I was comfortable. I was a software engineer, and I was good at it

---

## Where Things Stood

- By early 2023, one part of our pipeline had been nagging at me for a while: **resume parsing**
- It worked, but it was expensive, and it wasn't ours
- I didn't know it yet, but that itch was about to change the direction of my career

---

<!-- .slide: data-state="chapter" -->

## Chapter 2 · 2023

# The ¥60 Resume

### The moment I started becoming an AI engineer

---

## Before the Spark

- Every resume that entered JoBins had to be parsed into structured data
- We relied on **Dextra**, a third-party parsing service, to do it
- Price: **~¥60 per resume** — every single one
- The cost scaled linearly with our growth: more candidates, bigger bill
- I didn't control the quality, the format, or the roadmap — someone else did

> The better we did as a business, the more we paid someone else.

---

## The Spark — Early 2023

- Then OpenAI released **GPT-3.5** (`gpt-3.5-turbo`) — API access at **$0.002 / 1K tokens**
- I couldn't stop thinking about one question:

> *"Can a general-purpose LLM parse a resume as well as a purpose-built service — at a fraction of the cost?"*

- So I gave myself an afternoon to find out

---

## What I Tried

- I built a resume-parsing prototype on `gpt-3.5-turbo`
- One resume ≈ **5,000 tokens** end-to-end (resume text in + structured fields out)
- I compared extraction quality side-by-side against Dextra, on real resumes

**Result: comparably good parsing quality.**

No fine-tuning. No new infrastructure. Just a well-designed prompt — and one afternoon of my time.

---

## The Math — Cost per Resume

| | Dextra | GPT-3.5 |
|---|---|---|
| Pricing model | flat fee per resume | $0.002 per 1K tokens |
| Usage per resume | 1 parse | ~5,000 tokens |
| Cost (USD) | — | 5 × $0.002 = **$0.010** |
| Cost (JPY @ ¥140/USD) | **¥60.0** | **¥1.4** |

<br>

# **~98% cheaper**

(1 − 1.4 / 60 = **97.7% cost reduction**)

---

## What That Meant at Scale

Monthly savings at different volumes (¥60 → ¥1.4 per resume):

| Resumes / month | Dextra | GPT-3.5 | Saved / month | Saved / year |
|---:|---:|---:|---:|---:|
| 1,000 | ¥60,000 | ¥1,400 | **¥58,600** | ¥703,200 |
| 5,000 | ¥300,000 | ¥7,000 | **¥293,000** | ¥3,516,000 |
| 10,000 | ¥600,000 | ¥14,000 | **¥586,000** | ¥7,032,000 |
| 50,000 | ¥3,000,000 | ¥70,000 | **¥2,930,000** | ¥35,160,000 |

Savings grow with us — the cost curve no longer punished growth.

---

## Beyond the Money — What Changed in Me

- **Independence** — no third-party lock-in for a core pipeline
- **Control** — we owned the prompt, the schema, the quality bar
- **Speed** — new fields or formats became a prompt change, not a vendor request
- **A precedent** — proof that a small AI experiment could beat an established vendor
- **And for me personally** — proof that I could build *with* AI, not just build software

> That afternoon wasn't about saving ¥58 per resume.
> It was the moment I started becoming an AI engineer instead of just a software engineer.

---

## Assumptions & Sources (Chapter 2)

- **Dextra**: ~¥60 per resume (actual 2023 contract rate)
- **GPT-3.5**: `gpt-3.5-turbo`, launch pricing **$0.002 / 1K tokens** (March 2023).
  Conservative: OpenAI cut input pricing to $0.0015/1K in June 2023, so real cost was equal or lower
- **Tokens per resume**: ~5,000 (input + output combined, measured on the prototype)
- **FX**: **¥140 / USD** (2023-era average)
- Per-resume cost: 5,000 tokens × $0.002/1K = $0.010 × 140 = **¥1.40**
- Reduction: (60 − 1.4) / 60 = **97.7%**
- Volume table is parameterized because exact monthly volume varies; scale linearly for other volumes

---

<!-- .slide: data-state="chapter" -->

## Chapter 3 · `[add memory: year]`

# AI Interviews

### A new kind of problem

---

## Where I Was

- After Chapter 2, I wasn't just the person who'd shipped a prompt anymore — I was someone JoBins looked to for what AI could do next
- The next project: **AI Interviews** — using AI to run interviews directly
- `[add memory: how the AI Interviews project came about, what problem it was meant to solve]`

---

## The New Problem

- This one didn't look like Chapter 2. Prompts and structured JSON weren't going to be enough
- AI Interviews meant **real-time video streaming** — and nobody on our team had ever built anything like that before
- It was a genuinely new type of problem for us: not a smarter prompt, but real-time media, latency, and infrastructure we'd never had to reason about
- `[add memory: first reaction to realizing video streaming was required — excitement, worry, both?]`

---

## What I Tried

- `[add memory: how we approached learning video streaming from zero — research, prototypes, tools/frameworks evaluated]`
- `[add memory: the technology or architecture we landed on]`
- `[add memory: biggest technical hurdle and how we got past it]`

---

## What Happened

- `[add memory: outcome — did it ship, what worked, what surprised us]`
- `[add memory: any numbers worth keeping, e.g. latency, interviews run, feedback]`

---

## What It Changed

- Chapter 2 taught me that a well-placed prompt could beat an established vendor
- Chapter 3 taught me something different: that being an AI engineer sometimes means learning an entirely new domain from zero, under pressure, as a team
- `[add memory: what this project changed in me / in how JoBins builds]`

> `[add memory: closing line for this chapter — the moment this became more than "the video streaming project"]`

<!-- Duplicate this chapter's run of slides for the next one:
     Chapter title → Where I was → The new problem → What I tried → What happened → What it changed -->

---

<!-- .slide: data-state="chapter" -->

## Chapter 4 · Coming Soon

# *(The next chapter of my journey)*

`[add memory: what happened after AI Interviews — new projects, new title, other AI work]`

---

<!-- .slide: data-paginate="false" -->

## Thank You

### My journey from software engineer to AI engineer — still being written

`[add memory: closing line / what I want the audience to take away]`
