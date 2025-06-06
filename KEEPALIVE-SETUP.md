# 🚀 Quick Keepalive Setup

Your Supabase keepalive system is ready! Here's how to activate it:

## ✅ What's Already Done

- ✅ Keepalive API endpoint created (`/api/keepalive`)
- ✅ Keepalive script created (`scripts/keepalive.js`)
- ✅ GitHub Actions workflow created (`.github/workflows/keepalive.yml`)
- ✅ npm script added (`npm run keepalive`)

## 🎯 Next Steps (Choose One)

### Option 1: GitHub Actions (Recommended)

1. Push this code to GitHub
2. Go to your repo → Settings → Secrets and variables → Actions
3. Add secret: `SITE_URL` = `https://your-production-url.vercel.app`
4. The workflow will run daily automatically!

### Option 2: External Service (Easiest)

1. Sign up for [UptimeRobot](https://uptimerobot.com) (free)
2. Add HTTP monitor for: `https://your-production-url.vercel.app/api/keepalive`
3. Set check interval to 24 hours

### Option 3: Local Cron Job

```bash
# Add to crontab (runs daily at noon)
crontab -e
# Add this line:
0 12 * * * cd /path/to/project && SITE_URL=https://your-site.vercel.app node scripts/keepalive.js
```

## 🧪 Test It Now

```bash
# Test locally
npm run keepalive

# Test your production site
SITE_URL=https://your-site.vercel.app npm run keepalive
```

## 📖 Full Documentation

See `scripts/README-keepalive.md` for complete setup instructions and troubleshooting.

---

**Problem Solved!** Your Supabase database will stay active with daily automated requests. 🎉
