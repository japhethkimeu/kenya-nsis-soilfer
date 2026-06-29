import React from 'react'
import { Layers, FlaskConical } from 'lucide-react'

export default function DataPage({ section }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="eyebrow mb-3">Data</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        {section === 'explore-layers' ? 'Explore Layers' : 'Soil Data'}
      </h1>
      <p className="text-gray-500 text-lg mb-10">
        {section === 'explore-layers'
          ? 'Browse all available layers — legacy soil maps and digital soil maps — from the NSID GeoNode catalogue.'
          : 'Soil data composition: properties, wet chemistry, spectral procedures, units, and sampling design (PSU, SSU, TSU).'
        }
      </p>
      <a
        href={section === 'explore-layers' ? '/catalogue' : '/catalogue?category=soil_data'}
        className="btn-primary"
        style={{ background: 'var(--soil-cyan)', color: 'white', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontWeight: 600 }}
      >
        <Layers size={16} /> Open in GeoNode Catalogue
      </a>
    </div>
  )
}
