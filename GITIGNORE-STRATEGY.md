# .gitignore Strategy for Obsidian Folders

## Question 1: Custom Obsidian Folders & .gitignore

### **YES - folders in .gitignore won't be pushed to GitHub**

If you add a folder to `.gitignore`, it will NOT be tracked by Git and won't be deployed to GitHub.

### Example: Creating a "templates" folder

```bash
# In Obsidian, create folder: src/content/templates/

# Add to .gitignore:
echo "templates/" >> src/content/.gitignore

# Or add to root .gitignore:
echo "src/content/templates/" >> .gitignore
```

**Result**: The `templates/` folder stays on your local machine only.

### Common Obsidian Folders to Ignore:

```
# src/content/.gitignore

# Obsidian configuration
.obsidian/

# Personal folders (don't deploy to site)
templates/
personal/
drafts/
private/
scratch/
archive/

# Any folder starting with underscore
_*/
```

---

## Question 2: Why .obsidian-templates Exists (and why it's NOT ignored)

### **The Strategy:**

There are TWO types of templates:

#### 1. **.obsidian/** folder (IGNORED ✅)
- **Contains**: Your personal Obsidian settings, plugins, workspace layout
- **Purpose**: Local configuration for YOUR Obsidian instance
- **Shareable?**: NO - everyone has different settings
- **In .gitignore?**: YES

#### 2. **.obsidian-templates/** folder (TRACKED ✅)
- **Contains**: Markdown templates for daily logs and weekly reviews
- **Purpose**: Standardized content templates for the site
- **Shareable?**: YES - everyone writing logs should use the same format
- **In .gitignore?**: NO

### **Why Templates Should Be Tracked:**

1. **Consistency**: Everyone uses the same frontmatter structure
2. **Documentation**: New users see how to format logs
3. **Version Control**: Template improvements are saved in Git
4. **Collaboration**: If someone clones your repo, they get the templates

### **Comparison:**

| Folder | Purpose | Tracked in Git? | Why? |
|--------|---------|-----------------|------|
| `.obsidian/` | Personal settings | ❌ NO | Different for each user |
| `.obsidian-templates/` | Content templates | ✅ YES | Same for everyone |
| `templates/` (your custom) | Your private templates | ❌ NO (if you want) | Your choice! |

### **Your Options for Templates:**

**Option A: Keep templates in Git (Current)**
- Good for: Sharing with others, consistency
- `.obsidian-templates/` ← Tracked in Git

**Option B: Make templates local-only**
- Good for: Personal templates you don't want to share
- Add to `.gitignore`:
  ```
  .obsidian-templates/
  ```

**Option C: Both!**
- Shared templates: `.obsidian-templates/` ← Tracked
- Personal templates: `templates/` ← Ignored

---

## Question 3: Old Review File Names (kwm-week-11-review)

### **The Problem:**

The `dist/` folder (build output) has old HTML files with the old naming convention:
- `dist/reviews/kwm-week-11-review/` ❌ OLD
- `dist/reviews/kwm-week-12-review/` ❌ OLD

Your source files are correct:
- `src/content/reviews/p1-week-11-review.md` ✅ CORRECT
- `src/content/reviews/p1-week-12-review.md` ✅ CORRECT

### **Why This Happened:**

The `dist/` folder is built from source. When you renamed the files, the old HTML files stayed in `dist/` because:
1. You renamed the source files
2. The build created new HTML files
3. But the old HTML files weren't deleted

### **The Fix:**

Simple - just rebuild!

```bash
# Delete old build
rm -rf dist/

# Rebuild with current file names
npm run build
```

The new build will have:
- `dist/reviews/p1-week-11-review/` ✅ NEW
- `dist/reviews/p1-week-12-review/` ✅ NEW

---

## Quick Decision Guide

### "Should I ignore this folder?"

Ask yourself:

1. **Is it personal/private?** → YES, ignore it
2. **Does it contain settings?** → YES, ignore it
3. **Should it appear on the website?** → NO, ignore it
4. **Is it content for the site?** → NO, don't ignore it
5. **Should others use it?** → NO, don't ignore it

### Examples:

| Folder | Ignore? | Reason |
|--------|---------|--------|
| `.obsidian/` | ✅ YES | Personal settings |
| `.obsidian-templates/` | ❌ NO | Shared templates |
| `logs/` | ❌ NO | Site content |
| `reviews/` | ❌ NO | Site content |
| `drafts/` | ✅ YES | Private, not ready |
| `personal-notes/` | ✅ YES | Private |
| `dist/` | ✅ YES | Build output (already ignored) |
| `node_modules/` | ✅ YES | Dependencies (already ignored) |

---

## Recommended .gitignore Setup

### Root `.gitignore`:
```
# build output
dist/
.astro/

# dependencies
node_modules/

# Obsidian configuration
.obsidian/

# Personal/private content
src/content/drafts/
src/content/personal/
src/content/private/
```

### `src/content/.gitignore`:
```
# Obsidian configuration  
.obsidian/

# Personal folders
drafts/
personal/
private/
scratch/
_*/
```

---

## Summary

1. ✅ **YES** - Folders in .gitignore won't deploy to GitHub
2. ✅ `.obsidian-templates/` is tracked because it's shared content templates (different from personal .obsidian settings)
3. ✅ Old `kwm-week-*` files in `dist/` are stale - just rebuild to fix

**Rebuild command:**
```bash
rm -rf dist && npm run build
```
