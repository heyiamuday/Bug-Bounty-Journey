# 🚀 Quick Start - Bug Bounty Journey + Obsidian

## Your Setup (Perfect!)

✅ **Obsidian Vault**: `src/content/` folder
✅ **Templates**: `src/content/.obsidian-templates/`
✅ **Git Sync**: Use Obsidian Git plugin
✅ **Custom Fields**: Add whatever you want to frontmatter!

---

## Daily Workflow

### 1️⃣ Create Daily Log

**In Obsidian:**
- Navigate to `logs/` folder
- Create new note (Ctrl/Cmd + N)
- Insert template (Ctrl/Cmd + T → "Daily Log")
- Name file: `YYYY-MM-DD-slug.md`
  - Example: `2025-12-09-first-xss.md`

### 2️⃣ Fill Frontmatter

```yaml
---
title: "Day 5: First XSS Found!"
date: 2025-12-09
quarter: 1
week: 11
day: 5              ← Add any custom fields you want!
tags: ["xss", "breakthrough"]
executionScore: 10
description: "Found my first XSS vulnerability"
---
```

### 3️⃣ Write Content

Use markdown:
- Headers: `## Section`
- Lists: `- Item`
- Code: ` ```js code here``` `
- Bold: `**text**`

### 4️⃣ Sync

**With Obsidian Git plugin:**
- Auto-syncs every 10 minutes
- Or manually: Ctrl/Cmd + P → "Obsidian Git: Commit"

**Without plugin:**
```bash
git add src/content/
git commit -m "Add daily log"
git push
```

### 5️⃣ Check Your Site

Wait 1-2 minutes, then visit:
`https://heyiamuday.github.io/bug-bounty-journey/`

---

## Weekly Review

- Use same process
- Template: "Weekly Review"
- Save in `reviews/` folder
- Name: `qX-week-Y-review.md`

---

## Mobile Sync

### Option 1: Obsidian Git (Free)
1. Install Obsidian app on phone
2. Clone repo to phone (using Termux/Working Copy)
3. Open `src/content/` as vault
4. Install Obsidian Git plugin
5. Write on mobile, auto-syncs!

### Option 2: Obsidian Sync ($4/month)
- Syncs across all devices automatically
- Easier setup, paid

---

## Custom Fields

### ✅ You Can Add:
- `day: 5` - Day number in the journey
- `mood: "motivated"` - How you felt
- `hoursSpent: 4` - Time spent
- `platform: "HackerOne"` - Where you hunted
- Literally anything!

### ❌ No Code Changes Needed!

Just add them to frontmatter. The site will ignore unknown fields.

**If you want to display them**, edit `src/content/config.ts` and add the field to the schema.

---

## File Naming

### Daily Logs:
✅ `2025-12-09-day-5.md`
✅ `2025-12-09-first-xss.md`
✅ `2025-12-10_W11_day-6.md` ← Your style works too!

### Weekly Reviews:
✅ `q1-week-11-review.md`
✅ `q1-w11-review.md`

**Pro tip**: Be consistent! Pick one style and stick with it.

---

## Templates Location

Before: `/.obsidian-templates/` ❌ (couldn't access)
Now: `/src/content/.obsidian-templates/` ✅ (perfect!)

Remember to set in Obsidian:
Settings → Templates → Folder location: `.obsidian-templates`

---

## Troubleshooting

### ⚠️ Template not found
- Check: Settings → Templates → Folder: `.obsidian-templates`
- Verify templates exist in `src/content/.obsidian-templates/`

### ⚠️ Site doesn't update
- Check: GitHub Actions tab → Verify workflow ran
- Wait: Can take 2-3 minutes
- Check: `git status` → Make sure you pushed

### ⚠️ Frontmatter error
- Verify: YAML syntax (colons, spacing)
- Check: Date format is `YYYY-MM-DD`
- Ensure: No tabs, only spaces

---

## Quick Commands

```bash
# Check what changed
git status

# Add everything and push
git add .
git commit -m "Update logs"
git push

# Pull latest from GitHub
git pull
```

---

## URLs

📝 **Edit**: Your Obsidian vault at `src/content/`
🌐 **View**: https://heyiamuday.github.io/bug-bounty-journey/
📊 **Monitor**: https://github.com/heyiamuday/bug-bounty-journey/actions

---

**That's it! Just write in Obsidian, everything else is automatic.** ✨
