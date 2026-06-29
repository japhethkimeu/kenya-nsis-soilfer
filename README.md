# NSID Kenya — National Soil Information and Data Portal

[![SoilFER Project](https://img.shields.io/badge/SoilFER-GCP%2FGLO%2F1127%2FUSA-00AEEF)](https://www.fao.org/soilfer)
[![GeoNode](https://img.shields.io/badge/Powered%20by-GeoNode%205-6B3A1F)](https://geonode.org)
[![KALRO](https://img.shields.io/badge/Hosted%20at-KALRO%2FNARL-2E7D32)](https://www.kalro.org)

Kenya's digital infrastructure for standardized, reliable, and accessible spatial soil data — from legacy surveys to machine-learning digital soil maps.

> **SoilFER Project** · GCP/GLO/1127/USA · Implemented by FAO · Funded by U.S. Department of State / USAID  
> Anchored at the National Agricultural Research Laboratories (NARL), KALRO, Kabete

---

## Overview

The **National Soil Information and Data (NSID) portal** is a GeoNode-based geospatial platform with a custom React frontend. It provides:

- Collation and harmonization of **13 legacy soil datasets** (1,447 records across 13 counties)
- Digital soil maps (DSM) from ML-predicted soil property surfaces
- Integration with the **FerSIS** decision support system for fertilizer recommendations
- Web-based geospatial services (WMS/WFS via GeoServer)
- ISO 19115 metadata management

**Source programmes:** KCEP · KCSAP · AGRA · FAOKE

---

## Tech Stack

| Layer       | Technology                                    |
|-------------|-----------------------------------------------|
| Backend     | GeoNode 5 (Django 5, Python 3.12)             |
| Geo engine  | GeoServer 2.23.x + PostGIS 15                 |
| Frontend    | React 18 + Vite + Tailwind CSS                |
| Database    | PostgreSQL 15 + PostGIS                       |
| Task queue  | Celery + Redis                                |
| Proxy       | Nginx                                         |
| Deployment  | Docker + docker-compose                       |

---

## Repository Structure

```
kenya-nsis-soilfer/
├── nsis_kenya/                  # Django/GeoNode custom project
│   ├── templates/geonode/       # Override GeoNode base templates
│   │   └── base.html            # Loads React app into GeoNode
│   ├── static/nsis_kenya/       # Compiled React assets (after build)
│   └── settings.py              # Custom GeoNode settings
│
├── frontend/                    # React source
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar/          # Partner strip + dropdowns + auth
│   │   │   ├── Hero/            # Full-bleed hero with soil stats
│   │   │   ├── About/           # NSID overview + mission cards
│   │   │   ├── Data/            # Soil properties + layer types
│   │   │   ├── Maps/            # Geoportal section
│   │   │   ├── Documents/       # Document library
│   │   │   └── Footer/          # Partner logos + links
│   │   ├── pages/               # Route-level page components
│   │   └── assets/              # Logo files (FAO, KALRO, etc.)
│   ├── vite.config.js           # Builds into nsis_kenya/static/
│   └── package.json
│
├── docker-compose.yml           # Full stack: db, geoserver, django, nginx, redis
├── Dockerfile                   # Multi-stage: React build → GeoNode image
├── .env.sample                  # Environment variable template
└── README.md
```

---

## Quick Start — Local Development

### Prerequisites
- Docker Desktop (or Docker + docker-compose on Linux)
- Node.js 20+ (for frontend development)
- Git

### 1. Clone the repository

```bash
git clone https://github.com/japhethkimeu/kenya-nsis-soilfer.git
cd kenya-nsis-soilfer
```

### 2. Configure environment

```bash
cp .env.sample .env
# Edit .env — set passwords and SECRET_KEY
```

### 3. Build the React frontend

```bash
cd frontend
npm install
npm run build
cd ..
```

### 4. Start the stack

```bash
docker-compose build --no-cache
docker-compose up -d

# Watch logs
docker-compose logs -f django
```

### 5. Access the portal

| Service        | URL                          |
|----------------|------------------------------|
| NSID Portal    | http://localhost/            |
| GeoNode Admin  | http://localhost/admin/      |
| GeoServer      | http://localhost/geoserver/  |
| API            | http://localhost/api/v2/     |

Default admin credentials are set in `.env` (`GEOSERVER_ADMIN_USER` / `GEOSERVER_ADMIN_PASSWORD`).

### 6. Frontend development (hot reload)

```bash
cd frontend
npm run dev
# React dev server at http://localhost:5173
# API calls proxy to GeoNode at http://localhost:8000
```

---

## Uploading Legacy Soil Datasets

For the 13 legacy datasets, use direct PostGIS import rather than the web UI:

```bash
# Connect to the PostGIS container
docker-compose exec db psql -U geonode -d nsis_kenya_data

# From outside the container — bulk load a shapefile
docker-compose exec django bash
shp2pgsql -I -s 4326 /path/to/soil_data.shp public.kcep_soil_samples | \
  psql -U geonode -d nsis_kenya_data

# Sync to GeoNode after loading
./manage.sh updatelayers -w geonode -f kcep_soil_samples
```

---

## Migration to KALRO Production Server

### 1. Update .env for production

```bash
SITEURL=https://nsid.kalro.go.ke/
DJANGO_HOSTNAME=nsid.kalro.go.ke
HTTPS_HOST=nsid.kalro.go.ke
DOCKER_ENV=production
LETSENCRYPT_MODE=production
LETSENCRYPT_EMAIL=admin@kalro.go.ke
DEBUG=False
```

### 2. Dump databases from local

```bash
docker-compose exec db pg_dump -U geonode nsis_kenya      > nsis_kenya.sql
docker-compose exec db pg_dump -U geonode nsis_kenya_data > nsis_kenya_data.sql
scp nsis_kenya.sql nsis_kenya_data.sql user@kalro-server:~/
```

### 3. Restore on KALRO server

```bash
# On KALRO server — after git clone + docker-compose up
docker-compose exec db psql -U geonode -d nsis_kenya      < nsis_kenya.sql
docker-compose exec db psql -U geonode -d nsis_kenya_data < nsis_kenya_data.sql
```

### 4. Update internal URL references

```bash
docker-compose exec django bash
./manage.sh migrate_baseurl \
  --source-address=localhost \
  --target-address=nsid.kalro.go.ke
./manage.sh set_all_layers_metadata -d
```

---

## Theming

The colour palette is derived from the SoilFER project logo:

| Token           | Hex       | Use                         |
|-----------------|-----------|-----------------------------|
| `soil-cyan`     | `#00AEEF` | Primary actions, links      |
| `soil-brown`    | `#6B3A1F` | Soil/earth, headings        |
| `soil-green`    | `#2E7D32` | Agriculture, success states |
| `soil-amber`    | `#E8930A` | Accents, eyebrows           |
| `soil-cream`    | `#F5F0E8` | Section backgrounds         |
| `soil-dark`     | `#1A1008` | Navbar, footer              |

To modify the theme, edit `frontend/src/index.css` and `frontend/tailwind.config.js`, then rebuild:

```bash
cd frontend && npm run build
```

---

## Partners

| Organisation | Role |
|---|---|
| **KALRO / NARL** | Host institution, data custodian |
| **FAO** | Technical implementation |
| **MoALD Kenya** | Government mandate |
| **USAID / U.S. Dept. of State** | Funding |

---

## Licence

Data and documents are subject to KALRO/FAO data governance policies.  
Software (custom templates and frontend) is released under the **MIT License**.

---

*Developed as part of the SoilFER Project — Soil Mapping for Resilient Agrifood Systems in Central America and Sub-Saharan Africa.*
