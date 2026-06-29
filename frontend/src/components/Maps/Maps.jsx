import React from 'react'
import { Link } from 'react-router-dom'
import { Map, ExternalLink, ArrowRight } from 'lucide-react'

const MAP_CATEGORIES = [
  {
    title: 'National Soil Maps',
    scale: '1:250,000 – 1:1,000,000',
    desc: 'Full Kenya coverage — soil types, texture classes, and fertility zones at national scale.',
    href: '/maps?view=national',
    accent: 'var(--soil-brown)',
  },
  {
    title: 'County Soil Maps',
    scale: 'County level',
    desc: 'Sub-national soil distribution maps for the 13 counties covered by SoilFER legacy data.',
    href: '/maps?view=county',
    accent: 'var(--soil-green)',
  },
  {
    title: 'Digital Soil Maps',
    scale: '250m – 1km resolution',
    desc: 'Machine-learning predicted soil property surfaces: SOC, pH, N, P, CEC across Kenya.',
    href: '/maps?view=dsm',
    accent: 'var(--soil-cyan)',
  },
  {
    title: 'Soil Sample Points',
    scale: 'Point layer',
    desc: 'Geolocated laboratory and field sample observations from KCEP, KCSAP, AGRA, and FAOKE.',
    href: '/maps?view=samples',
    accent: 'var(--soil-amber)',
  },
]

export default function Maps() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--soil-dark)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="eyebrow mb-3">Geoportal</div>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Soil Maps &amp; Spatial Data
          </h2>
          <a
            href="/catalogue"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: 'var(--soil-cyan)' }}
          >
            Open full GeoPortal <ExternalLink size={14} />
          </a>
        </div>

        {/* Map category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {MAP_CATEGORIES.map(({ title, scale, desc, href, accent }) => (
            <Link
              key={title}
              to={href}
              className="group block p-6 rounded-sm border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/5"
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-4"
                style={{ background: accent + '25', border: `1px solid ${accent}40` }}
              >
                <Map size={18} style={{ color: accent }} />
              </div>
              <div
                className="text-xs font-semibold tracking-wider uppercase mb-1"
                style={{ color: accent }}
              >
                {scale}
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-gray-100">
                {title}
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
              <div className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: accent }}>
                View layer <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>

        {/* GeoNode embed placeholder */}
        <div
          className="rounded-sm border border-white/10 overflow-hidden"
          style={{ height: '340px', background: '#0D0804' }}
        >
          <div className="flex flex-col items-center justify-center h-full gap-4 text-center px-6">
            <Map size={40} className="opacity-20 text-white" />
            <div className="text-gray-400 text-sm">
              Interactive map viewer powered by GeoNode &amp; GeoServer
            </div>
            <a
              href="/maps/new"
              className="btn-primary text-sm"
              style={{ background: 'var(--soil-cyan)' }}
            >
              Open Map Viewer <ExternalLink size={14} />
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
