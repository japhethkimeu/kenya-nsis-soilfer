#!/usr/bin/env bash
# ══════════════════════════════════════════════════════════════════════════════
# setup-github.sh — Initialise and push NSID Kenya to GitHub
# Run once from the project root: bash setup-github.sh
# ══════════════════════════════════════════════════════════════════════════════
set -e

REPO_NAME="kenya-nsis-soilfer"
GITHUB_USER="japhethkimeu"
REMOTE="https://github.com/${GITHUB_USER}/${REPO_NAME}.git"

echo "🌍 NSID Kenya — GitHub Setup"
echo "Repository: ${REMOTE}"
echo ""

# Initialise git if not already done
if [ ! -d ".git" ]; then
  git init
  echo "✅ Git repository initialised"
fi

# Stage all files
git add .
git status

echo ""
echo "📦 Creating initial commit..."
git commit -m "feat: initial NSID Kenya geoportal scaffold

- React 18 + Vite + Tailwind CSS frontend
- GeoNode 5 Django template overrides
- SoilFER colour palette (cyan, brown, green, amber)
- Navbar with partner strip (KALRO, FAO, MoALD, USAID)
- Hero section with background photo and soil depth accent
- About / Data / Maps / Documents sections
- Full docker-compose stack (db, geoserver, django, celery, redis, nginx)
- Multi-stage Dockerfile (React build → GeoNode image)
- .env.sample with local dev and KALRO production configs
- README with setup, dataset upload, and migration instructions

SoilFER Project GCP/GLO/1127/USA"

# Set main branch
git branch -M main

# Add remote (skip if already exists)
if git remote get-url origin &>/dev/null; then
  echo "ℹ️  Remote 'origin' already set to: $(git remote get-url origin)"
else
  git remote add origin "${REMOTE}"
  echo "✅ Remote added: ${REMOTE}"
fi

echo ""
echo "🚀 Pushing to GitHub..."
echo ""
echo "   Make sure you have created the repo first:"
echo "   → https://github.com/new"
echo "   → Repository name: ${REPO_NAME}"
echo "   → Leave it empty (no README, no .gitignore)"
echo ""
read -p "Press Enter when the repo is created on GitHub..."

git push -u origin main

echo ""
echo "✅ Done! Your repo is live at:"
echo "   https://github.com/${GITHUB_USER}/${REPO_NAME}"
