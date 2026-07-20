# Kenya National Soil Information System (NSIS)

[![GeoNode](https://img.shields.io/badge/GeoNode-4.4-25bce2)](https://geonode.org/)
[![Docker](https://img.shields.io/badge/deployment-Docker%20Compose-2496ED)](https://www.docker.com/)
[![License](https://img.shields.io/badge/license-GPL--3.0-green)](LICENSE)

A GeoNode-based spatial data infrastructure (SDI) for hosting, discovering, and sharing Kenya's soil information, built for the **FAO SoilFER Project** and hosted at **KALRO/NARL Kabete**.

The portal provides a single access point for soil survey data, digital soil maps, and related geospatial layers, supporting harmonized data exchange with the Global Soil Information System (GloSIS) and national soil information needs.

**Live portal:** _add production URL here_
**Institution:** KALRO (Kenya Agricultural and Livestock Research Organization)
**Project:** FAO SoilFER

---

## About

This repository contains the custom GeoNode project powering the Kenya NSIS portal. It extends the standard [geonode-project](https://github.com/GeoNode/geonode-project) template with:

- Custom branding (SoilFER/FAO/KALRO/Kenya Government partner identity)
- Database-driven navigation via Django Admin's Menu/MenuItem system
- Custom static content pages (About, Partners, Data Policy, Contact)
- Deployment configuration for a Docker Compose stack on a production droplet

## Tech Stack

| Layer | Technology |
|---|---|
| SDI framework | GeoNode 4.4 |
| Backend | Django, GeoServer |
| Database | PostgreSQL / PostGIS |
| Deployment | Docker, Docker Compose, Ubuntu 24.04 |
| Frontend | MapStore2, Bootstrap, custom templates |

## Partners

FAO Kenya (FAOR KE) · KALRO · U.S. Department of State · Government of Kenya

---

## Quick Start (Docker)

Requirements: Docker Engine 20+ and Docker Compose.

```bash
git clone https://github.com/japhethkimeu/kenya-nsis-soilfer.git
cd kenya-nsis-soilfer

# Create environment file (see .env.sample for reference)
python create-envfile.py --env_type dev --hostname localhost

docker compose build
docker compose up -d
```

The site will be available at `http://localhost/`. Default admin credentials are set during environment file creation (see `.env`).

### Useful `create-envfile.py` options

| Flag | Purpose |
|---|---|
| `--env_type` | `dev` (DEBUG on, no SSL), `test` (local SSL cert), `prod` (Let's Encrypt SSL) |
| `--hostname` | Domain/IP that will serve the portal |
| `--https` | Enable SSL (required for `prod`) |
| `--email` | Admin email (required for Let's Encrypt in `prod`) |
| `--geonodepwd` / `--geoserverpwd` / `--pgpwd` | Admin passwords (randomly generated if omitted) |

Run `python create-envfile.py --help` for the full list.

## Development Mode

```bash
docker compose -f docker-compose.development.yml -f docker-compose.development.override.yml up
```

## Production Deployment

1. Point `.env` at the production hostname/IP:
   ```bash
   vim .env
   # replace localhost with the production hostname everywhere
   ```
2. Build and start:
   ```bash
   docker compose up --build -d
   ```
3. Stop services:
   ```bash
   docker compose stop
   ```

> **Warning:** `docker system prune -a` removes all unused images/containers on the host — use with care on a shared server.

## Backup & Restore

```bash
# Backup
docker exec -it django4nsid sh -c 'SOURCE_URL=$SOURCE_URL TARGET_URL=$TARGET_URL ./nsid/br/backup.sh $BKP_FOLDER_NAME'

# Restore
docker exec -it django4nsid sh -c 'SOURCE_URL=$SOURCE_URL TARGET_URL=$TARGET_URL ./nsid/br/restore.sh $BKP_FOLDER_NAME'
```

- `BKP_FOLDER_NAME` — shared backup folder name, mounted at `/$BKP_FOLDER_NAME/` (default: `backup_restore`)
- `SOURCE_URL` — server generating the backup
- `TARGET_URL` — server being synced

## Configuration Notes

- Increase PostgreSQL max connections via `POSTGRESQL_MAX_CONNECTIONS` in `.env` (default 100).
- Custom Python package requirements go in `requirements.txt` — pin the GeoNode branch/tag explicitly, e.g.:
  ```
  Django==3.2.16
  git+https://github.com/GeoNode/geonode.git@<branch>
  ```

## Contributing

Issues and pull requests are welcome. For substantial changes, please open an issue first to discuss what you'd like to change.

## License

Licensed under the [GNU General Public License v3.0](LICENSE), consistent with upstream GeoNode.

## Acknowledgments

Built on [GeoNode](https://geonode.org/) and the [geonode-project](https://github.com/GeoNode/geonode-project) template. Developed under the FAO SoilFER Project in partnership with KALRO, the Government of Kenya, and the U.S. Department of State.

