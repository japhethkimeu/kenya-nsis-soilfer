import React from 'react'
import { Map } from 'lucide-react'

export default function MapsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="eyebrow mb-3">Maps</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Geoportal</h1>
      <p className="text-gray-500 text-lg mb-10">
        Soil maps at different scales for the whole country and/or counties —
        powered by GeoNode and GeoServer WMS.
      </p>
      <a
        href="/maps/new"
        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-sm"
        style={{ background: 'var(--soil-cyan)' }}
      >
        <Map size={16} /> Open Map Viewer
      </a>
    </div>
  )
}
