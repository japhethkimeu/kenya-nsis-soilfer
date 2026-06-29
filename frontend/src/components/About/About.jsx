import React from 'react'
import { Link } from 'react-router-dom'
import { Target, Microscope, Globe, Users, ArrowRight } from 'lucide-react'

const MISSION_ITEMS = [
  {
    icon: Microscope,
    color: 'var(--soil-brown)',
    title: 'Generate & Maintain',
    body: 'National soil information and digital soil maps produced using standardized survey data, lab analysis, and remote sensing.'
  },
  {
    icon: Target,
    color: 'var(--soil-amber)',
    title: 'Data-Driven Management',
    body: 'Support soil fertility management, land use planning, and climate-smart agriculture at farm, landscape, and national scales.'
  },
  {
    icon: Globe,
    color: 'var(--soil-cyan)',
    title: 'Interoperable Access',
    body: 'Open geospatial services for researchers, planners, extension services, and policymakers — queryable and shareable.'
  },
  {
    icon: Users,
    color: 'var(--soil-green)',
    title: 'Capacity Building',
    body: 'Strengthening institutional capacity in digital soil mapping, geospatial analysis, and decision-support tools.'
  },
]

export default function About() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--soil-cream)' }}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div>
            <div className="eyebrow mb-3">About NSID</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Kenya's National Soil
              <br />
              Information System
            </h2>
          </div>
          <div>
            <p className="text-gray-600 leading-relaxed text-base">
              The <strong>National Soil Information and Data (NSID) portal</strong> addresses
              the fragmentation of Kenya's soil data across institutions — establishing an
              integrated, dynamic platform anchored at KALRO/NARL, Kabete, under the
              SoilFER Project implemented by FAO.
            </p>
            <Link to="/about/nsid" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold" style={{ color: 'var(--soil-brown)' }}>
              Full NSID overview <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Mission cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MISSION_ITEMS.map(({ icon: Icon, color, title, body }) => (
            <div key={title} className="bg-white rounded-sm p-6 card-lift border border-gray-100">
              <div
                className="w-11 h-11 rounded-sm flex items-center justify-center mb-4"
                style={{ background: color + '18' }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 text-sm">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        {/* Vision / Mission pull-quote */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div
            className="rounded-sm p-8 text-white"
            style={{ background: 'var(--soil-brown)' }}
          >
            <div className="text-xs font-semibold tracking-widest uppercase opacity-60 mb-3">Vision</div>
            <p className="text-lg font-medium leading-relaxed" style={{ fontFamily: 'Playfair Display, serif' }}>
              "Healthy, fertile, and resilient soil resources that sustainably support
              Kenya's agrifood systems, livelihoods, and climate resilience."
            </p>
          </div>
          <div
            className="rounded-sm p-8 border-2"
            style={{ borderColor: 'var(--soil-cyan)', background: 'white' }}
          >
            <div className="eyebrow mb-3">Partners</div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Designed and implemented through collaboration between the Ministry of Agriculture
              and Livestock Development, KALRO/NARL, and FAO, funded by the U.S. Department of State.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: 'var(--soil-cyan)', color: 'white' }}>MoALD</span>
              <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: 'var(--soil-green)', color: 'white' }}>KALRO</span>
              <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: 'var(--soil-brown)', color: 'white' }}>FAO</span>
              <span className="text-xs font-semibold px-2 py-1 rounded-sm" style={{ background: 'var(--soil-amber)', color: 'white' }}>U.S. Dept. of State</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
