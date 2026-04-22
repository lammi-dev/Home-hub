# 🏠 Home Hub – Deployment Guide

Your Home Hub app is ready to go live. Follow these steps exactly.

---

## Step 1 — Create a GitHub account (5 mins)
1. Go to **github.com**
2. Click "Sign up" — use your personal email
3. Verify your email

---

## Step 2 — Put your files on GitHub (5 mins)
1. Once logged in, click the **+** icon (top right) → "New repository"
2. Name it: `home-hub`
3. Set to **Public**
4. Click "Create repository"
5. On the next screen, click **"uploading an existing file"**
6. Drag and drop ALL files from this folder:
   - `index.html`
   - `manifest.json`
   - `vercel.json`
7. Click "Commit changes"

---

## Step 3 — Deploy to Vercel (5 mins)
1. Go to **vercel.com**
2. Click "Sign up" → choose "Continue with GitHub"
3. Click "Add New Project"
4. Find your `home-hub` repo and click **Import**
5. Leave all settings as they are — just click **Deploy**
6. Wait ~30 seconds ⏳
7. 🎉 Your app is live! Vercel gives you a URL like `home-hub-xyz.vercel.app`

---

## Step 4 — Get your own domain (optional, ~£10/year)
1. Go to **namecheap.com**
2. Search for a domain (e.g. `victoriashomehub.co.uk`)
3. Buy it
4. In Vercel → your project → Settings → Domains → Add your domain
5. Follow Vercel's instructions to connect it (takes 10–30 mins)

---

## Step 5 — Install on your phone (free!)
Once your app is live:

**iPhone:**
1. Open your URL in Safari
2. Tap the Share button (box with arrow)
3. Scroll down → "Add to Home Screen"
4. Tap "Add"
5. It now opens like a real app!

**Android:**
1. Open your URL in Chrome
2. Tap the 3-dot menu
3. "Add to Home screen"

---

## Making future updates
1. Open `index.html` in any text editor (or Cursor with Claude)
2. Make your changes
3. Go back to GitHub → your repo → `index.html` → click the pencil icon to edit
4. Or drag the new file in — GitHub will update it automatically
5. Vercel redeploys in ~30 seconds automatically

---

## Costs
| What | Cost |
|------|------|
| GitHub | Free |
| Vercel hosting | Free |
| Domain name | ~£10/year (optional) |

---

## Need help?
Open this folder in Cursor, open Claude, and say:
> "Help me update my Home Hub app — here's the index.html file"

Claude will help you make any changes in plain English.
