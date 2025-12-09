# Phase System - 12 Week Year Structure

## Overview

Your Bug Bounty Journey uses a **Phase system** to break down each 12-week quarter into tactical focuses. This eliminates confusion between yearly quarters (Q1-Q4) and internal structure.

## Structure

### Quarters (High-Level)
- **Q1, Q2, Q3, Q4**: Four 12-week cycles in a year
- Each quarter represents a complete "year" in the 12 Week Year methodology

### Phases (Internal Structure)
Each 12-week quarter is divided into **3 Phases** of **4 weeks each**:

| Phase | Weeks | Focus | Description |
|-------|-------|-------|-------------|
| **Phase 1** | 12-9 | **Foundation** | Building fundamentals, setup, learning basics |
| **Phase 2** | 8-5 | **Execution** | Active hunting, applying knowledge, getting results |
| **Phase 3** | 4-1 | **Mastery** | Advanced techniques, optimization, crushing goals |

## Why Phases?

✅ **Clarity**: No confusion between "quarter" and internal divisions
✅ **Tactical Focus**: Each phase has a specific purpose
✅ **Urgency**: Countdown within phases (W12→W9→W8→W5→W4→W1)
✅ **Planning**: Easier to plan 4-week sprints vs 12-week marathons

## Using Phases in Your Logs

### Daily Log Example
```yaml
---
title: "Day 5: XSS Discovery"
date: 2025-12-09
quarter: 1        # Overall quarter (Q1, Q2, Q3, or Q4)
week: 11          # Week number (12-1 countdown)
phase: 2          # Phase 1, 2, or 3
tags: ["xss"]
executionScore: 9
---
```

### Weekly Review Example
```yaml
---
title: "Q1 Week 11 Review: Execution Mode"
date: 2025-12-15
quarter: 1
week: 11
phase: 2          # Still in Phase 2 (Execution)
weekProgress: 75
wins:
  - "Found 2 XSS vulnerabilities"
---
```

## File Naming with Phases

You can use **any filename** you want! Examples:

### Daily Logs:
- ✅ `2025-12-09-day-5.md`
- ✅ `2025-12-09-xss-found.md`
- ✅ `2025-12-09_W11_day-5.md`  
- ✅ `p2-week-11-day-5.md`

### Weekly Reviews:
- ✅ `q1-week-11-review.md`
- ✅ `p2-w11-review.md` ← **You mentioned this format!**
- ✅ `2025-12-15-week-11.md`

**The filename doesn't matter** - Astro uses the frontmatter `date` field to sort content!

## Phase-Specific Strategies

### Phase 1: Foundation (Weeks 12-9)
**Goal**: Build solid fundamentals

- Learn core concepts
- Set up tools and environment
- Complete training modules
- Create processes and templates
- **Don't worry about results yet**

### Phase 2: Execution (Weeks 8-5)
**Goal**: Apply and execute

- Active bug hunting daily
- Submit reports (even duplicates count!)
- Build muscle memory
- Iterate on methodology
- **Focus on volume and consistency**

### Phase 3: Mastery (Weeks 4-1)
**Goal**: Optimize and crush goals

- Go for high-severity bugs
- Chain vulnerabilities
- Refine techniques
- Hit quarter goals
- **Sprint to the finish!**

## How It Appears on Your Site

The Timeline page now shows phase badges:

```
┌─────────────────────────────┐
│ Q1 - Week 11                │
│ Phase 2: Execution          │
└─────────────────────────────┘
```

## Automatic Phase Detection

If you don't specify a `phase` in frontmatter, it's automatically determined:

```typescript
function getPhaseFromWeek(week: number): number {
  if (week >= 9) return 1; // Phase 1: Weeks 12-9
  if (week >= 5) return 2; // Phase 2: Weeks 8-5
  return 3;                 // Phase 3: Weeks 4-1
}
```

So even old logs without `phase` will display correctly!

## Your Current Status

Based on your logs:
- **Quarter**: Q1 (First 12-week cycle)
- **Week**: 11 (11 weeks remaining)
- **Phase**: 2 - Execution Mode
- **Strategy**: Active hunting, building consistency

## Quick Reference

| Week | Phase | Focus |
|------|-------|-------|
| 12, 11, 10, 9 | 1 | Foundation |
| 8, 7, 6, 5 | 2 | Execution |
| 4, 3, 2, 1 | 3 | Mastery |

---

**All set! Use phases to structure your journey and maintain tactical focus throughout each quarter.** 🚀
