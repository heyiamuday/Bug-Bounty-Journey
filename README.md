# 365-Day Bug Bounty Challenge 🎯

A comprehensive, transparently documented journey tracking one person's 365-day bug bounty challenge using GitHub Pages and the Minimal Mistakes Jekyll theme.

**Live Site**: [Visit the Challenge](https://heyiamuday.github.io/Bug-Bounty-Journey/)

---

## 📋 Overview

This repository contains the complete setup and content for a 365-day bug bounty challenge website, featuring:

- ✅ **365 Daily Logs** - Short-form entries tracking daily progress, findings, and learnings
- ✅ **52 Weekly Reviews** - Long-form blog posts with comprehensive analysis
- ✅ **Static Pages** - About, Challenge Overview, Impossible List
- ✅ **Dynamic Timeline** - Chronological view of all daily logs
- ✅ **Tag System** - Filter content by security topic or day number
- ✅ **Responsive Design** - Built with Minimal Mistakes Jekyll theme

---

## 🗂️ Repository Structure

```
Bug-Bounty-Journey/
├── _config.yml                    # Main Jekyll configuration
├── _data/
│   └── navigation.yml            # Navigation menu configuration
├── _layouts/
│   └── log.html                  # Custom layout for daily logs
├── _logs/                         # Daily logs collection
│   ├── 2025-12-02-day-001.md
│   ├── 2025-12-03-day-002.md
│   └── ...
├── _posts/                        # Weekly review blog posts
│   ├── 2025-12-08-week-01-review.md
│   ├── 2025-12-15-week-02-review.md
│   └── ...
├── _pages/                        # Static pages
│   ├── about.md
│   ├── challenge.md
│   ├── impossible-list.md
│   ├── timeline.md
│   ├── blog.md
│   └── tags.md
├── index.md                       # Homepage
├── Gemfile                        # Ruby dependencies
├── .gitignore                     # Git exclusions
├── SETUP_GUIDE.md                # Detailed setup instructions
└── README.md                      # This file
```

---

## 🚀 Quick Start

### Prerequisites

- Git
- Ruby 2.7+ (for local testing)
- Jekyll 4.3+
- A GitHub account

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/heyiamuday/Bug-Bounty-Journey.git
   cd Bug-Bounty-Journey
   ```

2. **Install dependencies**:
   ```bash
   bundle install
   ```

3. **Serve locally**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Visit**: `http://localhost:4000/Bug-Bounty-Journey`

### Deployment

Push to GitHub and enable Pages in repository Settings:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

Then:
1. Go to Settings → Pages
2. Select "main" branch as source
3. Wait for build completion
4. Visit: `https://heyiamuday.github.io/Bug-Bounty-Journey`

---

## 📝 Creating Content

### Adding a Daily Log

**File**: `_logs/YYYY-MM-DD-day-NNN.md`

**Template**:
```markdown
---
layout: log
title: "Day NNN: [Title]"
date: YYYY-MM-DD
author: "Your Name"
tags:
  - day-NNN
  - [theme-tag]
excerpt: "[Brief summary]"
---

## Day NNN: [Title]

### Goal for Today
[Content]

### What I Did
[Content]

### Key Findings
[Content]

### Challenges Encountered
[Content]

### What I Learned
[Content]

### Tomorrow's Focus
[Content]

---

**Stats for Today:**
- ⏱️ Time Spent: [X hours]
- 🎯 Findings: [X]
- 🧠 Key Takeaway: [Key insight]
```

### Adding a Weekly Review

**File**: `_posts/YYYY-MM-DD-week-NN-review.md`

**Template**:
```markdown
---
layout: single
title: "Week NN Review: [Title]"
date: YYYY-MM-DD
categories:
  - weekly-review
tags:
  - week-NN
  - [other-tags]
excerpt: "[Summary]"
---

## Week NN Review: [Title]

### Week Stats
[Statistics table]

### Daily Breakdown
[Day-by-day summary]

### Key Learnings
[Insights from the week]

### Tactical Adjustments
[Changes for next week]

### Challenges & Solutions
[Obstacles overcome]

### Next Week's Focus
[Goals for upcoming week]

---
```

---

## 🏷️ Tagging System

### Day Tags
- `day-001` through `day-365`

### Theme Tags (Examples)
- `challenge-kickoff` - Challenge launch
- `reconnaissance` - Recon work
- `web-app-security` - Web app testing
- `api-security` - API security
- `authentication` - Auth bypass
- `logic-flaws` - Business logic
- `privilege-escalation` - Priv esc
- `code-review` - Code analysis
- `tool-evaluation` - Tool testing
- `incident-analysis` - Post-mortems

### Week Tags
- `week-01` through `week-52`

### Custom Tags
Feel free to add theme-specific tags like:
- `mental-health`, `coding`, `fitness`, `learning`, etc.

---

## 🎨 Customization

### Configuration (`_config.yml`)

Key settings to update:

```yaml
title: "Your Challenge Title"
description: "Your description"
url: "https://your-username.github.io"
baseurl: "/Bug-Bounty-Journey"
repository: "your-username/Bug-Bounty-Journey"

author:
  name: "Your Name"
  avatar: "/assets/images/bio-photo.jpg"
  bio: "Your bio"
  email: "your-email@example.com"
```

### Theme Color

Change in `_config.yml`:
```yaml
minimal_mistakes_skin: "air"  # Options: air, aqua, contrast, dark, dirt, neon, mint, plum, sunrise
```

### Navigation (`_data/navigation.yml`)

Add or modify navigation links:
```yaml
main:
  - title: "Home"
    url: /
  - title: "Custom Page"
    url: /custom-page/
```

---

## 📖 Documentation

### Detailed Setup Guide
See `SETUP_GUIDE.md` for comprehensive setup instructions.

### Jekyll Documentation
- [Jekyll Docs](https://jekyllrb.com)
- [Minimal Mistakes Theme](https://mmistakes.github.io/minimal-mistakes/)

### GitHub Pages
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## 📊 Content Statistics

| Item | Count |
|------|-------|
| Daily Logs | 365 (goal) |
| Weekly Reviews | 52 (goal) |
| Static Pages | 6 |
| Total Posts | 417+ |

---

## 🔑 Key Features

### Daily Logs (`_logs/` collection)
- Custom `log` layout with navigation
- Chronological timeline view
- Tag-based filtering
- Previous/next log navigation

### Weekly Reviews (`_posts/`)
- Standard Jekyll posts with categories
- Statistics and analysis
- Links to related daily logs
- Searchable and tageable

### Timeline Page
- Automated listing of all logs
- Chronological ordering
- Tag display for each log
- Excerpt preview

### Static Pages
- **About**: Personal introduction
- **Challenge**: Challenge overview and goals
- **Impossible List**: Ambitious goals
- **Timeline**: All daily logs archive
- **Blog**: All weekly reviews archive

---

## 🛠️ Troubleshooting

### Build Fails Locally

```bash
# Clear cache
rm -rf _site .jekyll-cache

# Reinstall dependencies
bundle install

# Try serving again
bundle exec jekyll serve
```

### Site Not Appearing on GitHub Pages

1. Check Settings → Pages
2. Verify main branch is selected
3. Wait up to 10 minutes for build
4. Check Actions tab for build errors

### Navigation Menu Not Showing

1. Verify `_data/navigation.yml` exists
2. Check YAML syntax (no tab characters)
3. Clear browser cache

### Logs Not Displaying

1. Check folder name: `_logs/` (with underscore)
2. Verify file naming: `YYYY-MM-DD-day-NNN.md`
3. Check front matter YAML
4. Verify `_config.yml` has collection defined

---

## 📅 Content Calendar

Suggested Publishing Schedule:

- **Daily**: Every evening (e.g., 9 PM)
  - New day's log entry
  - File: `_logs/YYYY-MM-DD-day-NNN.md`

- **Weekly**: Every Sunday evening (e.g., 6 PM)
  - Weekly review post
  - File: `_posts/YYYY-MM-DD-week-NN-review.md`

---

## 💡 Best Practices

### Daily Logs
- ✅ Consistent time (set a reminder)
- ✅ At least one theme tag
- ✅ Day number tag required
- ✅ Meaningful excerpt (shows in timeline)
- ✅ Links to resources/references
- ✅ Statistics tracking

### Weekly Reviews
- ✅ Published on Sunday evening
- ✅ 1,000+ words minimum
- ✅ Include statistics table
- ✅ Daily breakdown
- ✅ Links to relevant logs
- ✅ Clear next week focus

### General
- ✅ Commit regularly to GitHub
- ✅ Use consistent naming conventions
- ✅ Review YAML syntax
- ✅ Test locally before deploying
- ✅ Maintain tag consistency

---

## 🤝 Contributing

This is a personal challenge documentation site, but feel free to:

- ⭐ Star the repository
- 🔗 Share the site with others
- 💬 Leave feedback or suggestions
- 📢 Inspire others to start their own challenges

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to:
- Use this as a template for your own challenge
- Fork and customize for your journey
- Share and inspire others

---

## 🔗 Links

- **Live Site**: [Bug Bounty Challenge](https://heyiamuday.github.io/Bug-Bounty-Journey/)
- **GitHub Repository**: [heyiamuday/Bug-Bounty-Journey](https://github.com/heyiamuday/Bug-Bounty-Journey)
- **Challenge Start**: December 2, 2025
- **Challenge End**: December 1, 2026

---

## 📞 Questions?

Refer to:
1. **SETUP_GUIDE.md** - Detailed setup instructions
2. **Jekyll Docs** - Technical documentation
3. **GitHub Issues** - Report problems

---

## 🎯 Challenge Stats

| Metric | Target |
|--------|--------|
| Days | 365 |
| Vulnerabilities | 100+ |
| Hours Invested | 1,460+ |
| Weekly Reviews | 52 |
| Learning Resources | 30+ |
| Technical Posts | 50+ |

---

**Ready to start your own 365-day challenge?** Use this template and document your journey! 🚀

---

**Last Updated**: December 2, 2025  
**Version**: 1.0  
**Status**: Active
