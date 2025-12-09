# Obsidian Setup - Your Questions Answered

## Question 1: Opening Vault at `src/content/` Instead of Project Root

### ✅ **Yes, this is PERFECTLY FINE!**

In fact, it might be **better** for your workflow!

### **Pros of using `src/content/` as vault:**
- ✅ Cleaner view - only see your logs and reviews
- ✅ No distractions from code files, node_modules, etc.
- ✅ Faster Obsidian startup (smaller vault)
- ✅ Focus only on content creation

### **Cons:**
- ❌ Can't access templates from `.obsidian-templates/` (one level up)
- ❌ Can't access README.md or other project docs

### **Solution: Move Templates Inside `src/content/`**

Since you opened vault at `src/content/`, do this:

1. **Move templates folder**:
```bash
cd /home/bughunter/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey
mv .obsidian-templates src/content/.obsidian-templates
```

2. **Update Obsidian template settings**:
   - Obsidian Settings → Templates
   - Template folder location: `.obsidian-templates`
   - (It will now find them relative to your vault root at `src/content/`)

3. **Your folder structure becomes**:
```
src/content/              ← Your Obsidian vault root
├── .obsidian-templates/  ← Templates folder
│   ├── Daily Log.md
│   └── Weekly Review.md
├── logs/                 ← Daily logs
└── reviews/              ← Weekly reviews
```

**This is actually ideal!** ✨

---

## Question 2: Obsidian Git Plugin on Mobile

### ✅ **Yes, it works on mobile!**

**Setup:**

1. **Install Obsidian on Android/iOS**
2. **Clone your repository on mobile** (one-time setup):
   - Use an app like:
     - **Termux** (Android) 
     - **Working Copy** (iOS)
   - Clone: `git clone https://github.com/heyiamuday/bug-bounty-journey.git`
   
3. **Open vault in Obsidian Mobile**:
   - Open the `src/content/` folder as vault

4. **Install Obsidian Git plugin on mobile**:
   - Settings → Community plugins → Browse → "Obsidian Git"
   - Install and enable

5. **Configure credentials** (one-time):
   - The plugin will handle git operations
   - You may need to set up SSH keys or GitHub token

### **How it works on mobile:**

- Write logs on your phone
- Obsidian Git auto-commits every 10 minutes
- Auto-pushes to GitHub
- Your site auto-deploys! 🚀

### **Easier alternative for mobile:**

If Git setup on mobile is too complex, use **Obsidian Sync**:
- Paid service ($4/month)
- Syncs between devices automatically
- Then push from desktop when you get home

---

## Question 3: Adding Custom Frontmatter Fields (Like `day: 2`)

### ✅ **You can add ANY custom fields you want!**

The Astro content schema I created is flexible. Here's what you need to know:

### **Current Schema** (in `src/content/config.ts`):

```typescript
const logsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    quarter: z.number().min(1).max(4),
    week: z.number().min(1).max(12),
    tags: z.array(z.string()).default([]),
    executionScore: z.number().min(0).max(10).optional(),
    description: z.string().optional(),
  }),
});
```

### **To Add `day` Field:**

You have two options:

#### **Option 1: Just Add It (Simple - Recommended)**

Just add `day: 2` to your frontmatter - **it will be ignored by the schema but won't break anything!**

```yaml
---
title: "Day 2: SQL Injection Deep Dive"
date: 2025-12-02
quarter: 1
week: 12
day: 2           ← Just add it!
tags: ["sql-injection"]
executionScore: 9
---
```

**This works because**: The schema validates required fields but ignores extra fields by default.

⚠️ **However**: You won't be able to access `day` in your Astro components.

#### **Option 2: Update Schema (If You Want to Use It)**

If you want to **display** the day number on your site:

1. **Edit `src/content/config.ts`**:

```typescript
const logsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    quarter: z.number().min(1).max(4),
    week: z.number().min(1).max(12),
    day: z.number().optional(),          ← Add this line
    tags: z.array(z.string()).default([]),
    executionScore: z.number().min(0).max(10).optional(),
    description: z.string().optional(),
  }),
});
```

2. **Use it in components** (optional):

In `src/components/LogCard.astro` or any page:
```astro
{log.data.day && <span>Day {log.data.day}</span>}
```

### **Do You Need to Make Changes?**

**Short answer: NO!**

- Just add `day: 2` to frontmatter
- It won't break anything
- Site will build successfully

**Only update schema IF**:
- You want to enforce the field as required
- You want to display it on your site
- You want TypeScript autocompletion for it

---

## Recommended Workflow for You

Based on your setup:

1. **Vault location**: ✅ Keep using `src/content/` as vault root
2. **Move templates**: Run the command above to move templates into `src/content/`
3. **Mobile sync**: Install Obsidian Git or use Obsidian Sync
4. **Custom fields**: Add whatever you want to frontmatter - it's flexible!

### **Your Daily Workflow:**

```
📱 Mobile or 💻 Desktop
  ↓
Open Obsidian (src/content/ vault)
  ↓
Create new log from template
  ↓
Add your custom fields (day, etc.)
  ↓
Write content
  ↓
Save (Obsidian Git auto-syncs every 10 min)
  ↓
🚀 Site auto-deploys!
```

---

## Quick Commands

### Move templates to src/content:
```bash
cd /home/bughunter/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey
mv .obsidian-templates src/content/.obsidian-templates
git add .
git commit -m "Move templates to content folder"
git push
```

### Add .gitignore for Obsidian files:
```bash
echo ".obsidian/" >> .gitignore
git add .gitignore
git commit -m "Ignore Obsidian config"
git push
```

This prevents Obsidian's settings from being synced (which you don't need).

---

## Summary

✅ **Vault at `src/content/`**: Perfect! Move templates there.
✅ **Mobile Obsidian Git**: Yes, it works! Set up once.
✅ **Custom `day` field**: Just add it! No changes needed.

**You're all set to start writing!** 🎉
