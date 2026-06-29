"""
NSIS Kenya — GeoNode Custom Settings

Extends GeoNode's default settings. Override values for KALRO/NARL deployment.
"""

from geonode.settings import *  # noqa

# ── Site identity ──────────────────────────────────────────────────────────────
SITEURL = os.getenv('SITEURL', 'http://localhost/')
SITENAME = 'NSID Kenya'
SITE_HOST_NAME = os.getenv('DJANGO_HOSTNAME', 'localhost')

# ── Custom template & static directories ──────────────────────────────────────
TEMPLATES[0]['DIRS'].insert(0, os.path.join(BASE_DIR, 'nsis_kenya', 'templates'))

STATICFILES_DIRS += [
    os.path.join(BASE_DIR, 'nsis_kenya', 'static'),
]

# ── Installed apps — register NSIS custom app ─────────────────────────────────
INSTALLED_APPS += [
    'nsis_kenya',
]

# ── GeoNode UI customization ──────────────────────────────────────────────────
CLIENT_RESULTS_LIMIT = 20
API_LIMIT_PER_PAGE   = 200

# Catalogue defaults
DEFAULT_MAP_CRS = 'EPSG:4326'
DEFAULT_MAP_CENTER = [0.023, 37.906]   # Kenya centroid
DEFAULT_MAP_ZOOM   = 6

# ── Allowed hosts — extend for KALRO server ───────────────────────────────────
ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS', 'localhost,127.0.0.1').split(',')

# ── Database (overridden by .env / docker-compose) ────────────────────────────
DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': os.getenv('GEONODE_DATABASE', 'nsis_kenya'),
        'USER': os.getenv('GEONODE_DATABASE_USER', 'geonode'),
        'PASSWORD': os.getenv('GEONODE_DATABASE_PASSWORD', 'geonode'),
        'HOST': os.getenv('DATABASE_HOST', 'db'),
        'PORT': os.getenv('DATABASE_PORT', '5432'),
    },
    'datastore': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': os.getenv('GEONODE_GEODATABASE', 'nsis_kenya_data'),
        'USER': os.getenv('GEONODE_GEODATABASE_USER', 'geonode'),
        'PASSWORD': os.getenv('GEONODE_GEODATABASE_PASSWORD', 'geonode'),
        'HOST': os.getenv('DATABASE_HOST', 'db'),
        'PORT': os.getenv('DATABASE_PORT', '5432'),
    }
}

# ── Email (update for KALRO SMTP) ─────────────────────────────────────────────
EMAIL_BACKEND = os.getenv(
    'DJANGO_EMAIL_BACKEND',
    'django.core.mail.backends.console.EmailBackend'
)
DEFAULT_FROM_EMAIL = os.getenv('DEFAULT_FROM_EMAIL', 'noreply@nsid.kalro.go.ke')

# ── Security (production — set via .env) ─────────────────────────────────────
SECRET_KEY  = os.getenv('SECRET_KEY', 'CHANGE_ME_IN_PRODUCTION')
DEBUG       = os.getenv('DEBUG', 'False').lower() == 'true'
