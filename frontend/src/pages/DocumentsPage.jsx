import React from 'react'
import { FileText } from 'lucide-react'

export default function DocumentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="eyebrow mb-3">Documents</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">All Documents</h1>
      <p className="text-gray-500 text-lg mb-10">
        SoilFER project documents, Kenya soil survey reports, technical manuals,
        and data governance frameworks.
      </p>
      <a
        href="/catalogue/?type=document"
        className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-white rounded-sm"
        style={{ background: 'var(--soil-brown)' }}
      >
        <FileText size={16} /> Browse in GeoNode
      </a>
    </div>
  )
}
