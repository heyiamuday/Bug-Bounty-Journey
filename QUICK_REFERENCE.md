# ⚡ Quick Reference Card

## File Creation Checklist

### ✅ Configuration Files (4)
- [x] `_config.yml` - Main Jekyll configuration with logs collection
- [x] `_data/navigation.yml` - Navigation menu
- [x] `Gemfile` - Ruby dependencies
- [x] `.gitignore` - Git exclusions

### ✅ Layouts (1)
- [x] `_layouts/log.html` - Custom log layout

### ✅ Pages (6)
- [x] `_pages/about.md` → `/about/`
- [x] `_pages/challenge.md` → `/challenge/`
- [x] `_pages/impossible-list.md` → `/impossible-list/`
- [x] `_pages/timeline.md` → `/timeline/`
- [x] `_pages/blog.md` → `/blog/`
- [x] `index.md` → `/`

### ✅ Collections (2)
- [x] `_logs/2025-12-02-day-001.md` - Sample daily log
- [x] `_posts/2025-12-08-week-01-review.md` - Sample weekly review

### ✅ Documentation (3)
- [x] `README.md` - Project overview
- [x] `SETUP_GUIDE.md` - Detailed setup
- [x] `FILE_SUMMARY.md` - File documentation

**Total: 16 files created ✅**

---

## 🚀 Deployment in 3 Steps

### Step 1: Push to GitHub
```bash
cd /home/bughunter/BUG~REALM/BUG-BOUNTY-JOURNEY/Bug-Bounty-Journey
git add .
git commit -m "Initial setup: 365-day challenge site"
git push origin main
```

### Step 2: Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Select "main" branch as source
4. Click Save

### Step 3: Visit Your Site
- **URL**: `https://heyiamuday.github.io/Bug-Bounty-Journey`
- **Wait**: 5-10 minutes for build to complete

---

## 📝 Daily Workflow

### Every Evening
```bash
# Create new daily log
cd _logs/
# Create file: YYYY-MM-DD-day-NNN.md

# Example for Day 2 (Dec 3):
# File: 2025-12-03-day-002.md
```

**Front Matter Template**:
```yaml
---
layout: log
title: "Day NNN: [Your Title]"
date: YYYY-MM-DD
author: "Your Name"
tags:
  - day-NNN
  - [theme-tag]
excerpt: "[Brief summary]"
---
```

### Every Sunday Evening
```bash
# Create weekly review
cd _posts/
# Create file: YYYY-MM-DD-week-NN-review.md

# Example for Week 1 (Dec 8):
# File: 2025-12-08-week-01-review.md
```

**Front Matter Template**:
```yaml
---
layout: single
title: "Week NN Review: [Title]"
date: YYYY-MM-DD
categories:
  - weekly-review
tags:
  - week-NN
excerpt: "[Summary]"
---
```

### After Creating Content
```bash
git add .
git commit -m "Add: Day NNN log" # or "Add: Week NN review"
git push origin main
```

---

## 🏷️ Tagging Quick Reference

### Required Tags (Every Log Must Have)

**Day Number** (Pick one):
- `day-001`, `day-002`, ..., `day-365`

**Theme** (Pick one or more):
- `challenge-kickoff` - Starting the challenge
- `reconnaissance` - Recon work
- `web-app-security` - Web app testing
- `api-security` - API testing
- `authentication` - Auth/bypass techniques
- `logic-flaws` - Business logic bugs
- `privilege-escalation` - Priv esc work
- `code-review` - Source code analysis
- `tool-evaluation` - Testing tools
- `incident-analysis` - Post-mortems

### Optional Custom Tags
- `mental-health`, `fitness`, `learning`, `burnout`, etc.

### Usage Example
```yaml
tags:
  - day-001
  - challenge-kickoff
  - mindset
```

---

## 🔗 Site Navigation

```
Homepage (/)
  │
  ├─ About Me (/about/)
  ├─ Challenge (/challenge/)
  ├─ Impossible List (/impossible-list/)
  ├─ Weekly Reviews (/blog/)
  ├─ 365 Day Timeline (/timeline/)
  └─ Tags (/tags/)
```

---

## 📊 Key Metrics

| Metric | Value |
|--------|-------|
| Daily Logs Goal | 365 |
| Weekly Reviews Goal | 52 |
| Total Posts | 417 |
| Time per Day | 4 hours |
| Total Hours | 1,460+ |

---

## ⚙️ Important Config Values (To Customize)

**File: `_config.yml`**

```yaml
# Line 1: Your title
title: "365-Day Bug Bounty Challenge"

# Line 5: Your site description
description: "My bug bounty journey..."

# Line 10: Your site URL
url: "https://heyiamuday.github.io"

# Line 11: Repository base path
baseurl: "/Bug-Bounty-Journey"

# Line 28-30: Author info
author:
  name: "Your Name"
  email: "your@email.com"
  bio: "Your bio here"
```

---

## 📁 File Naming Convention

### Daily Logs
```
_logs/YYYY-MM-DD-day-NNN.md
        ↑      ↑   ↑
      Date   dash Day number (3 digits)

Examples:
2025-12-02-day-001.md ✅
2025-12-03-day-002.md ✅
2025-12-25-day-023.md ✅
2026-01-01-day-031.md ✅
```

### Weekly Reviews
```
_posts/YYYY-MM-DD-week-NN-review.md
         ↑      ↑    ↑
       Date   dash Week number

Examples:
2025-12-08-week-01-review.md ✅
2025-12-15-week-02-review.md ✅
2026-01-05-week-05-review.md ✅
```

---

## 🐛 Troubleshooting Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Logs not showing | Check file in `_logs/` with correct format |
| Build fails | Remove cache: `rm -rf _site .jekyll-cache` |
| Nav menu missing | Check `_data/navigation.yml` YAML syntax |
| Site not updating | Wait 5-10 min, clear browser cache |
| Tags not working | Verify tag names, check `_config.yml` |

---

## 📚 Documentation Map

| Need Help With | Read This |
|----------------|-----------|
| Overall project | `README.md` |
| Step-by-step setup | `SETUP_GUIDE.md` |
| Files created | `FILE_SUMMARY.md` |
| Quick answers | `QUICK_REFERENCE.md` ← You are here |
| Sample content | `_logs/2025-12-02-day-001.md` |
| Sample review | `_posts/2025-12-08-week-01-review.md` |

---

## 💡 Pro Tips

### 1. **Use Template Files**
Copy the sample log and review templates, then customize. Faster than writing from scratch.

### 2. **Batch Tagging**
Create a list of theme tags you use frequently. Copy and paste to speed up log creation.

### 3. **Schedule Posts**
Use a calendar to plan which days you'll focus on specific topics (e.g., "Monday = API Security").

### 4. **Backup Locally**
Keep a local copy: `git clone <your-repo>` on your backup drive.

### 5. **Tag Consistency**
Use same tag names every time. This helps with filtering and statistics.

### 6. **Link Between Content**
In weekly reviews, link to relevant daily logs: `[Day 1 log](/log/2025-12-02-day-001/)`

### 7. **Update Regularly**
Push to GitHub after each log entry or review. Don't wait for batch updates.

### 8. **Test Locally**
Before major changes, test locally: `bundle exec jekyll serve`

---

## 🎯 30-Day Milestone Checklist

### Days 1-7 (First Week)
- [ ] Create daily logs for each day (7 files)
- [ ] Write and publish first weekly review
- [ ] Set up basic tagging system
- [ ] Share site with friends
- [ ] Fix any initial issues

### Days 8-14 (Second Week)
- [ ] Create daily logs for each day (7 files)
- [ ] Write and publish second weekly review
- [ ] Refine log template if needed
- [ ] Add header images (optional)
- [ ] Build small audience

### Days 15-21 (Third Week)
- [ ] Create daily logs for each day (7 files)
- [ ] Write and publish third weekly review
- [ ] Analyze trending tags
- [ ] Update Impossible List progress
- [ ] Post on social media

### Days 22-30 (Fourth Week)
- [ ] Create daily logs for each day (9 files)
- [ ] Write and publish fourth weekly review
- [ ] Celebrate 1 month milestone!
- [ ] Plan next month focus areas
- [ ] Review and adjust workflow

---

## 🚀 Rapid Deployment Checklist

### Pre-Push Checklist
- [ ] All files in `/Bug-Bounty-Journey/` folder
- [ ] `_config.yml` updated with your name
- [ ] `_data/navigation.yml` exists
- [ ] `_pages/` folder has all pages
- [ ] `_logs/` folder created with sample log
- [ ] `_posts/` folder created with sample review
- [ ] No YAML syntax errors in front matter
- [ ] `.gitignore` file created

### Push to GitHub
```bash
git add .
git commit -m "Initial setup"
git push origin main
```

### Enable Pages (Settings)
1. Repository Settings
2. Pages section
3. Select main branch
4. Wait 5 minutes

### Verify Site
- Visit: `https://heyiamuday.github.io/Bug-Bounty-Journey/`
- Check: All pages load (/, /about/, /timeline/)
- Verify: Navigation menu works
- Test: Tags page functions

---

## 📞 Emergency Support

**If build fails:**
```bash
rm -rf _site .jekyll-cache
bundle install
bundle exec jekyll serve
```

**If site won't update:**
1. Check GitHub Actions in repository
2. Look for error messages
3. Verify YAML syntax in all `.md` files
4. Try clearing browser cache (Ctrl+Shift+R)

**If tags don't work:**
1. Verify `jekyll-archives` in `_config.yml`
2. Check tag names are lowercase with hyphens
3. Verify pages layout (should be `archive`)

---

## ✨ Customization Layers

### Layer 1: Configuration (Easy)
- Update `_config.yml` - Your name, email, description
- Update `_data/navigation.yml` - Menu items

### Layer 2: Content (Easy)
- Add daily logs to `_logs/`
- Add weekly reviews to `_posts/`
- Update static pages in `_pages/`

### Layer 3: Styling (Medium)
- Change theme skin in `_config.yml`
- Add custom CSS in `assets/css/`
- Customize `_layouts/log.html`

### Layer 4: Advanced (Hard)
- Modify Jekyll plugins
- Create custom includes
- Build custom layouts

**Recommended**: Start with Layers 1-2, then explore Layer 3 if desired.

---

**Version**: 1.0  
**Last Updated**: December 2, 2025  
**Status**: Ready to Deploy 🚀

---

💡 **TIP**: Bookmark this page for quick reference during your 365-day journey!
