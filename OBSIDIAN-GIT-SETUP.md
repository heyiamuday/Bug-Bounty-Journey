# Obsidian Git Setup Guide - Kali Linux

Complete guide to setting up Obsidian with Git integration on Kali Linux.

## Prerequisites

- Kali Linux (or any Debian-based Linux)
- Git already installed and configured
- Your Bug Bounty Journey repository cloned locally

---

## Part 1: Install Obsidian on Kali Linux

### Option 1: AppImage (Recommended - Easiest)

1. **Download Obsidian**:
```bash
cd ~/Downloads
wget https://github.com/obsidianmd/obsidian-releases/releases/download/v1.5.3/Obsidian-1.5.3.AppImage
```

2. **Make it executable**:
```bash
chmod +x Obsidian-1.5.3.AppImage
```

3. **Run Obsidian**:
```bash
./Obsidian-1.5.3.AppImage
```

4. **Optional - Create desktop launcher**:
```bash
# Move to a permanent location
sudo mv Obsidian-1.5.3.AppImage /opt/obsidian/
sudo chmod +x /opt/obsidian/Obsidian-1.5.3.AppImage

# Create desktop entry
cat > ~/.local/share/applications/obsidian.desktop << 'EOF'
[Desktop Entry]
Name=Obsidian
Exec=/opt/obsidian/Obsidian-1.5.3.AppImage
Icon=obsidian
Type=Application
Categories=Office;
EOF
```

### Option 2: Using Flatpak

```bash
# Install Flatpak if not already installed
sudo apt update
sudo apt install flatpak

# Add Flathub repository
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Install Obsidian
flatpak install flathub md.obsidian.Obsidian

# Run Obsidian
flatpak run md.obsidian.Obsidian
```

---

## Part 2: Open Your Vault in Obsidian

1. **Launch Obsidian**

2. **Open folder as vault**:
   - Click "Open folder as vault"
   - Navigate to: `/home/bughunter/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey/src/content`
   - Click "Open"

3. **Trust the vault** (if prompted)

Your content folders (`logs/` and `reviews/`) should now be visible!

---

## Part 3: Configure Git (One-Time Setup)

### Set Git Credentials

If you haven't already, configure Git with your GitHub account:

```bash
cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey

# Set your name and email
git config user.name "Your Name"
git config user.email "your-email@example.com"

# Verify
git config --list | grep user
```

### Set Up Git Authentication

You need to authenticate with GitHub. Choose **one** method:

#### Method 1: Personal Access Token (Recommended)

1. **Create a GitHub Personal Access Token**:
   - Go to: https://github.com/settings/tokens
   - Click "Generate new token" → "Generate new token (classic)"
   - Give it a name: "Bug Bounty Journey - Obsidian"
   - Select scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy the token** (you won't see it again!)

2. **Configure Git to use token**:
```bash
# Store credentials (saves token so you don't have to enter it every time)
git config --global credential.helper store

# Make a test commit to save credentials
cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey
echo "test" > .test
git add .test
git commit -m "test"
git push
# Enter username: your-github-username
# Enter password: PASTE-YOUR-TOKEN-HERE

# Delete test file
git rm .test
git commit -m "Remove test file"
git push
```

Your token is now saved! Git won't ask for credentials again.

#### Method 2: SSH Keys

```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your-email@example.com"
# Press Enter for all prompts (default location)

# Start SSH agent
eval "$(ssh-agent -s)"

# Add key to agent
ssh-add ~/.ssh/id_ed25519

# Copy public key
cat ~/.ssh/id_ed25519.pub
# Copy the output

# Add to GitHub:
# 1. Go to https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste your public key
# 4. Click "Add SSH key"

# Update remote URL to use SSH
cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey
git remote set-url origin git@github.com:heyiamuday/bug-bounty-journey.git

# Test
git push
```

---

## Part 4: Install Obsidian Git Plugin

### Enable Community Plugins

1. In Obsidian, press `Ctrl + ,` (Settings)
2. Go to **"Community plugins"**
3. Click **"Turn on community plugins"**
4. Click **"Browse"**

### Install Obsidian Git

1. In the plugin browser, search for **"Obsidian Git"**
2. Click **"Install"**
3. Click **"Enable"**

---

## Part 5: Configure Obsidian Git Plugin

1. **Open Obsidian Git settings**:
   - Settings → Community plugins → Obsidian Git → ⚙️ (gear icon)

2. **Configure auto-commit**:
   ```
   ✅ Vault backup interval (minutes): 10
   ✅ Auto backup after file change: ON
   ✅ Auto pull interval (minutes): 10
   ✅ Pull updates on startup: ON
   ✅ Disable push: OFF (leave unchecked)
   ✅ Commit message: vault backup: {{date}}
   ```

3. **Advanced settings** (scroll down):
   ```
   Git path: /usr/bin/git  (or leave auto-detected)
   ```

4. **Save settings** (automatic)

---

## Part 6: Test the Setup

### Manual Test

1. **Create a test log**:
   - In Obsidian, navigate to `logs/` folder
   - Create new note: `test-git.md`
   - Add content:
   ```markdown
   ---
   title: "Test Git"
   date: 2025-12-09
   quarter: 1
   week: 11
   phase: 2
   tags: ["test"]
   executionScore: 10
   ---
   
   # Test
   
   Testing Obsidian Git integration!
   ```

2. **Commit manually using Command Palette**:
   - Press `Ctrl + P`
   - Type "Obsidian Git"
   - Select **"Obsidian Git: Commit all changes"**
   - Wait for notification: "Committed X files"

3. **Push to GitHub**:
   - Press `Ctrl + P`
   - Type "Obsidian Git"
   - Select **"Obsidian Git: Push"**
   - Wait for notification: "Pushed successfully"

4. **Verify on GitHub**:
   - Go to: https://github.com/heyiamuday/bug-bounty-journey
   - Check if `src/content/logs/test-git.md` appears

5. **Delete test file** (if successful):
   - Delete `test-git.md` in Obsidian
   - Commit and push again

### Auto-Commit Test

1. **Create another test file**
2. **Wait 10 minutes** (auto-commit interval)
3. **Check GitHub** - it should appear automatically!

---

## Part 7: Daily Workflow

Your workflow is now **fully automated**:

```
1. Open Obsidian
   ↓
2. Write in your logs/reviews
   ↓
3. Save (Ctrl + S)
   ↓
4. Wait 10 minutes (auto-commit happens)
   ↓
5. GitHub Actions auto-deploys your site
   ↓
6. Done! ✨
```

### Manual Sync (if needed)

**Quick sync** (Ctrl + P → type these commands):
- `Obsidian Git: Commit all changes` - Save changes
- `Obsidian Git: Push` - Upload to GitHub
- `Obsidian Git: Pull` - Download updates

**Or use keyboard shortcuts** (configure in Settings → Hotkeys):
- Set hotkey for "Obsidian Git: Commit and push"

---

## Troubleshooting

### Issue: "Git is not installed"

**Solution**:
```bash
# Install Git (if not already)
sudo apt update
sudo apt install git

# Verify installation
git --version
```

### Issue: "Authentication failed"

**Solution 1** - Re-enter credentials:
```bash
cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey

# Clear saved credentials
git config --global --unset credential.helper

# Try pushing (will ask for credentials again)
git push
```

**Solution 2** - Verify Personal Access Token has correct permissions:
- Go to https://github.com/settings/tokens
- Make sure your token has `repo` scope
- Generate a new one if needed

### Issue: "Permission denied (publickey)"

If using SSH:
```bash
# Test SSH connection
ssh -T git@github.com

# If it fails, check SSH agent
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519

# Try again
ssh -T git@github.com
# Should say: "Hi username! You've successfully authenticated..."
```

### Issue: Plugin says "Cannot find git"

**Solution**:
1. Find git path:
```bash
which git
# Output: /usr/bin/git
```

2. In Obsidian Git settings → "Git binary path"
   - Enter: `/usr/bin/git`

### Issue: "Merge conflicts"

**Solution**:
```bash
cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey

# Pull and resolve
git pull --rebase

# If conflicts, resolve manually in text editor
# Then:
git add .
git rebase --continue
git push
```

### Issue: Auto-commit not working

**Check**:
1. Settings → Obsidian Git → "Vault backup interval" is set
2. "Auto backup after file change" is ON
3. Check console for errors: `Ctrl + Shift + I` (Developer Console)

---

## Advanced: Command Line Aliases (Optional)

Add to `~/.bashrc` or `~/.zshrc`:

```bash
# Quick aliases for your Bug Bounty Journey
alias bbj="cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey"
alias bbj-push="bbj && git add . && git commit -m 'Update logs' && git push"
alias bbj-pull="bbj && git pull"
alias bbj-status="bbj && git status"

# Reload shell
source ~/.bashrc  # or source ~/.zshrc
```

Usage:
```bash
bbj          # Go to project
bbj-push     # Quick commit everything
bbj-status   # Check status
```

---

## Quick Reference Card

### Obsidian Git Commands (Ctrl + P)

| Command | What it does |
|---------|-------------|
| `Commit all changes` | Saves to local Git |
| `Push` | Uploads to GitHub |
| `Pull` | Downloads from GitHub |
| `Commit and push` | Saves + uploads (one step) |

### Git Command Line

```bash
cd ~/BUG~REALM/BUG-BOUNTY-JOURNEY/2026-Hacking-Journey

git status          # Check what changed
git add .           # Stage everything
git commit -m "msg" # Commit with message
git push            # Push to GitHub
git pull            # Pull from GitHub
```

---

## Summary

✅ **Installed**: Obsidian on Kali Linux
✅ **Opened**: `src/content/` as vault
✅ **Configured**: Git credentials (token or SSH)
✅ **Installed**: Obsidian Git plugin
✅ **Set up**: Auto-commit every 10 minutes
✅ **Tested**: Manual commit/push works

**You're all set! Write in Obsidian, Git handles the rest! 🚀**

---

## Need Help?

- **Obsidian Git docs**: https://github.com/denolehov/obsidian-git
- **Git basics**: https://git-scm.com/book/en/v2/Getting-Started-Git-Basics
- **GitHub tokens**: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token
