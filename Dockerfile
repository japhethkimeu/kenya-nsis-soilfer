# ── Stage 1: Build React frontend ────────────────────────────────────────────
FROM node:20-alpine AS frontend-builder

WORKDIR /app/frontend
COPY frontend/package.json frontend/package-lock.json* ./
RUN npm ci --silent

COPY frontend/ ./
RUN npm run build
# Output lands in /app/nsis_kenya/static/nsis_kenya (per vite.config.js outDir)

# ── Stage 2: GeoNode Django app ───────────────────────────────────────────────
FROM geonode/geonode:4.4.0

LABEL maintainer="Japheth Kimeu <japhethkimeu@github>" \
      project="NSID Kenya — SoilFER GCP/GLO/1127/USA"

# Copy the full project
WORKDIR /usr/src/nsis_kenya
COPY . .

# Copy compiled React assets from Stage 1
COPY --from=frontend-builder /app/nsis_kenya/static/nsis_kenya ./nsis_kenya/static/nsis_kenya

# Copy logo/image assets into static
RUN mkdir -p ./nsis_kenya/static/nsis_kenya/assets
COPY frontend/src/assets/ ./nsis_kenya/static/nsis_kenya/assets/

# Install Python deps
RUN pip install --no-cache-dir -e .

# Collect all static files (Django + React)
RUN python manage.py collectstatic --noinput \
    --settings=nsis_kenya.settings 2>/dev/null || true

EXPOSE 8000
