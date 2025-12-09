# GitHub Pages Deployment Guide

## The Problem
GitHub Pages was trying to use Jekyll to build the site instead of using our custom Astro workflow.

## The Solution

### Step 1: Commit the .nojekyll file
```bash
cd /home/bughunter/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey
git add public/.nojekyll
git commit -m "Add .nojekyll to disable Jekyll"
git push
```

### Step 2: Configure GitHub Pages Settings

1. Go to your repository on GitHub: `https://github.com/heyiamuday/bug-bounty-journey`
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Build and deployment**:
   - **Source**: Select **GitHub Actions** (NOT "Deploy from a branch")
   
   ![This is critical - you must select "GitHub Actions"]

### Step 3: Verify the Workflow Runs

1. Go to the **Actions** tab in your repository
2. You should see a new workflow run starting automatically
3. Wait for it to complete (usually takes 1-2 minutes)
4. Once successful, your site will be live at: `https://heyiamuday.github.io/bug-bounty-journey/`

## What Each File Does

- `.github/workflows/deploy.yml` - GitHub Actions workflow that builds and deploys
- `public/.nojekyll` - Tells GitHub "don't use Jekyll, use our custom workflow"

## Common Issues

### Issue: "Source" option doesn't show "GitHub Actions"
**Solution**: Make sure the workflow file is pushed to the `main` branch first, then refresh the Settings page.

### Issue: Workflow fails with permissions error
**Solution**: 
1. Go to Settings → Actions → General
2. Scroll to "Workflow permissions"
3. Select "Read and write permissions"
4. Check "Allow GitHub Actions to create and approve pull requests"
5. Save

### Issue: 404 after deployment
**Solution**: The site might take a few minutes to propagate. Wait 5 minutes and try again.

## Checking Deployment Status

After pushing, check:
1. **Actions tab** - Verify the workflow completed successfully (green checkmark)
2. **Settings → Pages** - Should show "Your site is live at https://heyiamuday.github.io/bug-bounty-journey/"
3. Click the URL to verify the site loads

## If You Need to Redeploy

Just push any change to the `main` branch:
```bash
git add .
git commit -m "Update content"
git push
```

The workflow will automatically run and redeploy!
