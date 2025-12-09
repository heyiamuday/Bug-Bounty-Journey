# Obsidian Integration Guide

Complete guide to using Obsidian with your Bug Bounty Journey site.

## 📖 Quick Start

### Step 1: Open Your Project as a Vault

1. **Open Obsidian**
2. Click **"Open folder as vault"** (or "Open another vault")
3. Navigate to: `/homme/bughunterrr/yourfloderpath`
4. Click **"Open"**

Your entire project is now an Obsidian vault! 🎉

### Step 2: Navigate to Content Folders

In Obsidian's file explorer (left sidebar), you'll see:
```
2026-Hacking-Journey/
├── src/
│   └── content/
│       ├── logs/      ← Write daily logs here
│       └── reviews/   ← Write weekly reviews here
```

**Tip**: Collapse other folders (like `node_modules`, `.github`, etc.) to focus only on your content folders.

---

## 📝 Creating Templates

Obsidian templates make it super easy to create new logs and reviews with proper frontmatter.

### Setting Up Templates

1. **Create a Templates Folder**:
   - Right-click in Obsidian file explorer
   - Create new folder: `.obsidian-templates`
   - This folder won't be published to your site

2. **Enable Templates Plugin**:
   - Open Settings (⚙️ icon) → Core plugins
   - Enable **"Templates"**
   - Go to Templates settings
   - Set "Template folder location" to: `.obsidian-templates`

### Daily Log Template

Create: `.obsidian-templates/Daily Log.md`

```markdown
---
title: "Day {{date:X}}: "
date: {{date:YYYY-MM-DD}}
quarter: 1
week: 11
tags: []
executionScore: 
description: ""
---

## Today's Progress

### What I Did
- 

### Key Learnings


### Tomorrow's Focus
- 

## Mindset Check

```

### Weekly Review Template

Create: `.obsidian-templates/Weekly Review.md`

```markdown
---
title: "Q1 Week 11 Review: "
date: {{date:YYYY-MM-DD}}
quarter: 1
week: 11
weekProgress: 0
wins:
  - ""
challenges:
  - ""
nextWeekFocus:
  - ""
description: ""
---

## Week X Review: 

### Major Wins 🎯


### Challenges Faced 🚧


### Key Metrics


### Next Week's Battle Plan 📋


### Mindset Shift


---

*"Your quote here"*
```

### Using Templates

1. Navigate to `src/content/logs/` or `src/content/reviews/`
2. Create a new note (Ctrl/Cmd + N)
3. Press **Ctrl/Cmd + T** (or click the Templates icon)
4. Select "Daily Log" or "Weekly Review"
5. Fill in the placeholders (title, tags, scores, etc.)
6. Write your content!

---

## 🎨 Recommended Obsidian Settings

### File Naming Convention

**For Daily Logs**: Use this format: `YYYY-MM-DD-slug.md`
- Example: `2025-12-09-first-bug-found.md`
- This ensures proper chronological ordering

**For Weekly Reviews**: Use this format: `qX-week-Y-review.md`
- Example: `q1-week-11-review.md`

### Settings to Configure

**Settings → Files and Links:**
- ✅ "Automatically update internal links" - ON
- Default location for new notes → "In the folder specified below"
- Folder: `src/content/logs` (for quick access)

**Settings → Editor:**
- ✅ "Strict line breaks" - ON (for better markdown compatibility)
- ✅ "Show frontmatter" - ON (to see and edit YAML easily)

---

## 🔄 Git Workflow from Obsidian

You have two options for syncing your content to GitHub:

### Option 1: Obsidian Git Plugin (Recommended)

1. **Install the Plugin**:
   - Settings → Community plugins → Browse
   - Search for "Obsidian Git"
   - Install and Enable

2. **Configure**:
   - Go to Obsidian Git settings
   - Set "Vault backup interval" to 10 minutes (or your preference)
   - Enable "Auto pull on startup"
   - Enable "Auto backup"

3. **How It Works**:
   - Every 10 minutes, it auto-commits and pushes your changes
   - Your site auto-deploys via GitHub Actions
   - **You never have to leave Obsidian!** 🚀

4. **Manual Sync**:
   - Press **Ctrl/Cmd + P** (Command Palette)
   - Type "Obsidian Git: Commit all changes"
   - Your changes are pushed to GitHub

### Option 2: Terminal Commands

If you prefer manual control:

```bash
# After writing content in Obsidian
cd /home/bughunter/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey
git add src/content/
git commit -m "Add daily log for Dec 9"
git push
```

Your site will rebuild automatically!

---

## 🎯 Daily Workflow Example

### Morning Routine

1. **Open Obsidian** → Your vault
2. **Navigate** to `src/content/logs/`
3. **Create new note** (Ctrl/Cmd + N)
4. **Insert template** (Ctrl/Cmd + T → "Daily Log")
5. **Name the file**: `2025-12-09-day-8.md`
6. **Update frontmatter**:
   - Fill in title: "Day 8: Mastered XSS"
   - Set tags: `["xss", "portswigger", "learning"]`
   - Set executionScore: `9`

### End of Day

7. **Write your log** - what you learned, what you did
8. **Save** (auto-saves, but Ctrl/Cmd + S to be sure)
9. **Sync** (automatic if using Obsidian Git plugin)
10. **Check GitHub Actions** - your site is deploying!
11. **Visit your site** - see your new log live!

---

## 💡 Pro Tips

### 1. Use Daily Notes

Enable the Daily Notes plugin:
- Settings → Core plugins → Daily Notes → ON
- Configure template to use your Daily Log template
- Set location to `src/content/logs`
- Click the calendar icon to create today's log instantly!

### 2. Tag Organization

Create a consistent tagging system:
```yaml
# Vulnerability types
tags: ["xss", "sql-injection", "csrf", "ssrf", "idor"]

# Activities
tags: ["learning", "hunting", "writeup", "tools"]

# Platforms
tags: ["portswigger", "hackerone", "bugcrowd", "tryhackme"]

# Progress
tags: ["breakthrough", "stuck", "milestone"]
```

### 3. Link Between Notes

Reference other logs in Obsidian:
```markdown
Today I applied what I learned in [[2025-12-01-day-1]] about recon.
```

These links work great in Obsidian but won't break your Astro site!

### 4. Preview Mode

- Use **Ctrl/Cmd + E** to toggle between edit and preview mode
- See how your markdown will render
- Check if code blocks look good

### 5. Mobile Obsidian (Optional)

- Install Obsidian on your phone
- Use Obsidian Sync or Git plugin
- Write logs on the go!

---

## 📁 Folder Structure in Obsidian

```
2026-Hacking-Journey/        ← Your vault root
├── .obsidian-templates/     ← Your templates (hidden from site)
│   ├── Daily Log.md
│   └── Weekly Review.md
├── src/
│   └── content/
│       ├── logs/            ← WRITE HERE: Daily logs
│       │   ├── 2025-12-01-day-1.md
│       │   ├── 2025-12-02-day-2.md
│       │   └── 2025-12-09-day-8.md  ← New!
│       └── reviews/         ← WRITE HERE: Weekly reviews
│           └── q1-week-12-review.md
├── README.md                ← Documentation
└── ... (other project files)
```

**Focus only on**: `src/content/logs/` and `src/content/reviews/`

---

## ✅ Checklist: Getting Started

- [ ] Open project folder as Obsidian vault
- [ ] Create `.obsidian-templates/` folder
- [ ] Enable Templates plugin
- [ ] Create Daily Log template
- [ ] Create Weekly Review template
- [ ] Install Obsidian Git plugin (optional but recommended)
- [ ] Configure Git plugin for auto-sync
- [ ] Create your first daily log using template
- [ ] Push to GitHub and verify it appears on your site!

---

## 🚨 Common Issues

### Issue: Frontmatter looks messy
**Solution**: Settings → Editor → "Show frontmatter" - toggle it on/off to see it formatted

### Issue: My log doesn't show on the site
**Solution**: Check these:
1. File is in `src/content/logs/` or `src/content/reviews/`
2. Frontmatter is valid YAML (no syntax errors)
3. Date is in correct format: `YYYY-MM-DD`
4. Changes are pushed to GitHub
5. GitHub Actions workflow completed successfully

### Issue: Template variables don't work
**Solution**: Make sure you're using double curly braces: `{{date:YYYY-MM-DD}}`

### Issue: Git conflicts
**Solution**: 
```bash
git pull --rebase
# Fix any conflicts
git add .
git rebase --continue
git push
```

---

## 🎉 You're All Set!

Your workflow is now:
1. **Write in Obsidian** (beautiful, fast, offline)
2. **Auto-sync** (Obsidian Git plugin handles it)
3. **Auto-deploy** (GitHub Actions builds your site)
4. **Live site updated** (at https://heyiamuday.github.io/bug-bounty-journey/)

**All you do is write. The rest is automatic!** ✨

---

## 📚 Additional Resources

- [Obsidian Templates Documentation](https://help.obsidian.md/Plugins/Templates)
- [Obsidian Git Plugin](https://github.com/denolehov/obsidian-git)
- [Daily Notes Plugin Guide](https://help.obsidian.md/Plugins/Daily+notes)

Happy documenting your bug bounty journey! 🚀🔐
