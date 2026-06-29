import React from 'react'
import { Link } from 'react-router-dom'
import { Layers, FlaskConical, Grid3x3, ArrowRight } from 'lucide-react'

const SOIL_PROPERTIES = [
  'pH (H₂O)', 'Organic Carbon', 'Total Nitrogen', 'Available Phosphorus',
  'Exchangeable Cations', 'CEC', 'Bulk Density', 'Texture (Sand/Silt/Clay)',
  'Electrical Conductivity', 'Micronutrients (Zn, Fe, Mn, Cu)'
]

const PROGRAMMES = [
  { code: 'KCEP',   name: 'Kenya Cereal Enhancement Programme',         color: 'var(--soil-amber)' },
  { code: 'KCSAP',  name: 'Kenya Climate Smart Agriculture Project',     color: 'var(--soil-green)' },
  { code: 'AGRA',   name: 'Alliance for a Green Revolution in Africa',   color: 'var(--soil-cyan)'  },
  { code: 'FAOKE',  name: 'FAO Kenya Programme',                         color: 'var(--soil-brown)' },
]

const LAYER_TYPES = [
  { icon: Grid3x3,     label: 'Legacy Soil Maps',     count: '13 datasets',   desc: 'Digitized historical soil survey maps' },
  { icon: Layers,      label: 'Digital Soil Maps',    count: 'DSM outputs',   desc: 'ML-predicted soil property surfaces' },
  { icon: FlaskConical, label: 'Point Observations',  count: '1,447 records', desc: 'Lab & field sample locations' },
]

export default function Data() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="eyebrow mb-3">Soil Data</div>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Kenya Soil Dataset
          </h2>
          <Link
            to="/data/explore-layers"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: 'var(--soil-cyan)' }}
          >
            Explore all layers <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — Soil properties */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <FlaskConical size={16} style={{ color: 'var(--soil-brown)' }} />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Soil Properties Measured
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {SOIL_PROPERTIES.map((prop) => (
                <span
                  key={prop}
                  className="text-xs font-medium px-3 py-1.5 rounded-sm border"
                  style={{ borderColor: 'var(--soil-amber)', color: 'var(--soil-brown)', background: 'var(--soil-cream)' }}
                >
                  {prop}
                </span>
              ))}
            </div>

            {/* Sampling hierarchy */}
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
              Sampling Design
            </div>
            <div className="space-y-2">
              {[
                { code: 'PSU', name: 'Primary Sampling Unit',   level: 'National' },
                { code: 'SSU', name: 'Secondary Sampling Unit', level: 'Regional' },
                { code: 'TSU', name: 'Tertiary Sampling Unit',  level: 'Field' },
              ].map(({ code, name, level }) => (
                <div
                  key={code}
                  className="flex items-center gap-3 px-4 py-3 rounded-sm border border-gray-100"
                >
                  <div
                    className="w-10 h-10 rounded-sm font-bold text-sm flex items-center justify-center text-white flex-shrink-0"
                    style={{ background: 'var(--soil-brown)' }}
                  >
                    {code}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">{name}</div>
                    <div className="text-xs text-gray-400">{level} scale</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Source programmes + layer types */}
          <div>
            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
              Source Programmes
            </div>
            <div className="space-y-2 mb-10">
              {PROGRAMMES.map(({ code, name, color }) => (
                <div key={code} className="flex items-center gap-3 px-4 py-3 rounded-sm border border-gray-100 card-lift">
                  <div
                    className="w-2 self-stretch rounded-full flex-shrink-0"
                    style={{ background: color }}
                  />
                  <div>
                    <span className="text-sm font-bold text-gray-800">{code}</span>
                    <span className="text-xs text-gray-500 ml-2">{name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-sm font-semibold text-gray-700 uppercase tracking-wide mb-4">
              Available Layer Types
            </div>
            <div className="grid grid-cols-3 gap-3">
              {LAYER_TYPES.map(({ icon: Icon, label, count, desc }) => (
                <div
                  key={label}
                  className="p-4 rounded-sm text-center border border-gray-100 card-lift"
                >
                  <Icon size={20} className="mx-auto mb-2" style={{ color: 'var(--soil-cyan)' }} />
                  <div className="text-xs font-bold text-gray-800">{count}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
