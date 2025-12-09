# Bug Bounty Journey

My 2026 Bug Bounty Journey - Documenting the path from beginner to bug bounty hunter using the 12 Week Year methodology.

## 🎯 About

This repository contains the source code for my bug bounty learning journey tracker. The site is built with Astro and deployed to GitHub Pages.

**Live Site:** [https://heyiamuday.github.io/bug-bounty-journey/](https://heyiamuday.github.io/bug-bounty-journey/)

## 🚀 Features

- **12 Week Year Tracking**: Structured approach with 4 quarters of 12 weeks each
- **Daily Logs**: Short execution updates with tags and scores
- **Weekly Reviews**: Comprehensive analysis of progress, wins, and challenges
- **Peaceful Dark Theme**: Easy on the eyes for long reading sessions
- **Obsidian Friendly**: Write content in Obsidian, sync via Git
- **Tag System**: Organize logs by vulnerability types and techniques

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [TailwindCSS](https://tailwindcss.com)
- **Content**: Markdown & MDX
- **Deployment**: GitHub Pages via GitHub Actions
- **Writing**: Obsidian

## 📝 Content Structure

```
src/content/
├── logs/          # Daily execution logs
│   └── YYYY-MM-DD-slug.md
└── reviews/       # Weekly reviews
    └── qX-week-Y-review.md
```

## 🏃 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📖 Writing Content

### Daily Log Template

```markdown
---
title: "Day X: Your Title"
date: YYYY-MM-DD
quarter: 1-4
week: 1-12
tags: ["tag1", "tag2"]
executionScore: 1-10
description: "Brief description"
---

Your content here...
```

### Weekly Review Template

```markdown
---
title: "QX Week Y Review: Theme"
date: YYYY-MM-DD
quarter: 1-4
week: 1-12
weekProgress: 0-100
wins:
  - "Win 1"
  - "Win 2"
challenges:
  - "Challenge 1"
nextWeekFocus:
  - "Focus 1"
description: "Brief description"
---

Your review content...
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Connect

Follow the journey and feel free to reach out!

- GitHub: [@heyiamuday](https://github.com/heyiamuday)

---

Built with 💚 using Astro
