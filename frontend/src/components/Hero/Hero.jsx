import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Database, Map, FileText } from 'lucide-react'

const BASE = import.meta.env.DEV ? '' : '/static/nsis_kenya'

const QUICK_LINKS = [
  { icon: Database, label: 'Explore Soil Data',    href: '/data/explore-layers',  color: 'var(--soil-amber)' },
  { icon: Map,      label: 'View Soil Maps',        href: '/maps',                 color: 'var(--soil-cyan)'  },
  { icon: FileText, label: 'Browse Documents',      href: '/documents',            color: 'var(--soil-green)' },
]

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col">

      {/* Background photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${BASE}/assets/background-photo.png')` }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Soil layer depth strip — left edge signature element */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 soil-layers opacity-80" />

      {/* Main hero content */}
      <div className="relative flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 w-full">
          <div className="max-w-3xl">

            <div className="eyebrow mb-4">SoilFER Kenya · GCP/GLO/1127/USA</div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              National Soil
              <br />
              <span style={{ color: 'var(--soil-cyan)' }}>Information &amp; Data</span>
              <br />
              Portal
            </h1>

            <p className="text-gray-300 text-lg sm:text-xl max-w-xl leading-relaxed mb-8">
              Kenya's digital infrastructure for standardized, reliable, and accessible
              spatial soil data — from legacy surveys to digital soil maps.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/data/explore-layers" className="btn-primary text-base">
                Explore Layers <ArrowRight size={16} />
              </Link>
              <Link to="/about/nsid" className="btn-outline text-base">
                About NSID
              </Link>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-10">
              {[
                { value: '13',   label: 'Counties Covered'    },
                { value: '1,447', label: 'Soil Records'       },
                { value: '13',   label: 'Legacy Datasets'     },
                { value: '4',    label: 'Partner Programmes'  },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="stat-accent">{value}</div>
                  <div className="text-gray-400 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick-access cards pinned to bottom */}
      <div className="relative w-full">
        <div className="max-w-7xl mx-auto px-6 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 -mb-px">
            {QUICK_LINKS.map(({ icon: Icon, label, href, color }) => (
              <Link
                key={href}
                to={href}
                className="flex items-center gap-4 px-8 py-5 bg-white/10 backdrop-blur-sm border-t border-x border-white/10 hover:bg-white/20 transition-all group last:border-r-0"
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ background: color, opacity: 0.9 }}
                >
                  <Icon size={18} color="white" />
                </div>
                <div>
                  <div className="text-white text-sm font-semibold group-hover:translate-x-0.5 transition-transform">
                    {label}
                  </div>
                  <div className="text-gray-400 text-xs">Open portal →</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
