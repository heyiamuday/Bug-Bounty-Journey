# PROMPTS.md — AI Prompt Pack for Bug Bounty Journey

Use these exact prompts with your AI (copy-paste). They are grouped by purpose: daily posts, sprint updates, write-ups, commit messages, dashboard code, and repo housekeeping. Each prompt asks the AI to **return only the requested content** so it’s ready to paste into files or commit.

---

## 1) Generate a single daily Jekyll markdown entry

```
Create a Jekyll markdown file for a daily bug-bounty entry. Return only the markdown content (no explanation).

Frontmatter fields (fill values):
- title: "Day {DAY} - {DATE}" (e.g. "Day 450 - 2025-11-06")
- day_number: {DAY}
- date: {YYYY-MM-DD}
- working_days: {WORKING_DAYS}
- total_days: {TOTAL_DAYS}
- status: {STATUS}    # e.g. restarting, working, rest
- tags: [comma-separated tags]
- time_spent: {MINUTES}    # integer
- targets_attempted: {INT}
- reports_submitted: {INT}
- category: {category}

Body structure required (use headings and bullet points):
# Day {DAY} - {DATE}

## Summary (1–2 sentences)

## Focus for today (3–6 bullet points)

## Tasks completed (3–6 short bullets)

## What I learned (3 concise bullets)

## Blockers (1–3 bullets)

## Reflection (2–4 sentences)

Only return the finished markdown file content.
```

---

## 2) Bulk-generate N day skeleton files

```
Generate {N} Jekyll markdown skeleton files for `_journey/` named Day{START}..Day{END}.md. For each file, include frontmatter with these fields: title, day_number, date (incremental starting from {START_DATE}), working_days (same for all: {WORKING_DAYS}), total_days: {TOTAL_DAYS}, status: planned, tags: [], time_spent: 0, targets_attempted: 0, reports_submitted: 0, category: "uncategorized".

For the body of each file include headings: "Summary", "Focus for today", "Tasks completed", "What I learned", "Blockers", and "Reflection" — but leave the sections empty or with placeholder one-line suggestions. Return the files concatenated separated by a comment line `<!-- FILE: Day{NUM}.md -->`. Return only the concatenated markdown content.
```

---

## 3) Create a 21-day sprint start file

```
Create a 21-day sprint markdown file titled "21-Day Sprint — Start Date: {YYYY-MM-DD}". Return only the markdown content. Include:
- A short goal statement
- Day-by-day template (Day 1..Day 21) with the same mini-template as daily entries but collapsed into one-line placeholders for each day.
- Metrics section listing what to track and how to update frontmatter.
- A short checklist of weekly review actions.
```

---

## 4) Convert short notes into a full write-up (report)

```
I will paste raw notes below between triple backticks. Convert them into a clear, professional bug bounty write-up ready to publish. Use these sections and output only the markdown:
- Title
- Target (program name and URL)
- Summary (1–2 sentences of impact)
- Vulnerability type
- Timeline (date discovered, reported, response)
- Technical details (step-by-step reproduction with requests/responses and code samples where needed)
- Proof of concept (concise)
- Impact & severity
- Mitigations & remediation
- References

Raw notes:
```

{PASTE_NOTES}

```

Only return the formatted markdown write-up.
```

---

## 5) Generate concise commit message for a new day file

```
Write a short, conventional commit-style Git commit message for adding Day {DAY} entry: one-line summary and a 1–2 sentence extended description. Include Changed files list if known: `_journey/Day{DAY}.md`. Return only the commit message text.
```

---

## 6) Generate a GitHub PR description for a sprint or batch of days

```
Write a GitHub Pull Request description for adding Day {START}..Day {END} entries and dashboard files. Include:
- Short summary
- Files added/modified (list)
- How to preview locally (Jekyll commands)
- Testing steps
- Checklist (frontmatter correctness, dashboard renders, journey.json generated)
Return only the markdown PR description.
```

---

## 7) Dashboard / Chart.js code snippets (small, pasteable)

**A — Line chart for `time_spent`**

```
Write a minimal Chart.js JavaScript snippet that fetches `/journey.json` and renders a line chart of `time_spent` over `date` into a canvas with id `lineChart`. No explanations — return only JavaScript code.
```

**B — Bar chart for `targets_attempted`**

```
Write a minimal Chart.js JavaScript snippet that fetches `/journey.json` and renders a bar chart of `targets_attempted` over `date` into a canvas with id `barChart`. No explanations — return only JavaScript code.
```

**C — Pie chart for `category` distribution**

```
Write a minimal Chart.js JavaScript snippet that fetches `/journey.json` and renders a pie chart of counts grouped by `category` into a canvas with id `pieChart`. No explanations — return only JavaScript code.
```

---

## 8) Small DOM table renderer for recent entries

```
Provide a short JS function `renderRecentTable(data)` that accepts parsed `journey.json` array and populates a table body `#recentTable tbody` with the last 10 entries. Each row: Day, Date, Tags, Time (min), Targets. Return only JS code.
```

---

## 9) Generate a short `PROMPTS.md` usage guide entry (for you)

```
Write a 6–8 line user guide explaining how to use this PROMPTS.md file: where to paste prompts, how to replace placeholders, and how to commit generated files. Return only the text in plain markdown.
```

---

## 10) Commit message templates & Git commands

```
Give me 3 short conventional commit message templates for: (1) add daily entry, (2) add dashboard files, (3) update impossible list. Also provide the exact git commands to add, commit, and push the new files in one step. Return only the text.
```

---

## 11) Update Impossible List / Roadmap prompt

```
I will paste the current Impossible List and Roadmap below. Rewrite them to be concise, measurable, and time-bound. Return only the updated markdown content. Paste current content below between triple backticks.
```

---

## 12) Safety & consistency guard (use before committing)

```
Given the markdown content for Day {DAY} (I will paste it), run these checks and return a JSON object with booleans and messages:
- frontmatter present and includes required fields
- date in YYYY-MM-DD format
- day_number matches title
- time_spent numeric
- tags as array
- length of body >= 100 characters
Return JSON only.

Paste the markdown content below between triple backticks.
```

---

## 13) Weekly summary generator

```
Using the last 7 entries (I will paste their markdowns), generate a short weekly summary of progress: successes, key learnings, blockers, next week's goals. Output only markdown.
```

---

## 14) Create a GitHub Pages deployment checklist

```
Return a 10-step checklist to deploy and validate a Jekyll-based GitHub Pages site after pushing commits. Include common fixes if the site doesn't build. Return only text.
```

---

## 15) Prompt to ask AI to generate code but include testable output

```
Write a small JS module that exports a function `parseJourneyData(json)` that accepts the `journey.json` text and returns an array of objects with parsed `dateObj`, `time_spent` as number, and `day_number` as number. Include a short example of usage in a comment. Return only JS code.
```

---

### Tips for use

* Replace placeholders like `{DAY}`, `{DATE}`, `{N}`, `{START_DATE}`, `{WORKING_DAYS}` before sending prompts.
* Always request "return only" content when you want pasteable outputs.
* Save frequently and keep a `PROMPTS_LOG.md` to track which prompts worked best.

Good luck — I can also generate a `PROMPTS.md` file in your repo or bulk-generate Day files if you want.
