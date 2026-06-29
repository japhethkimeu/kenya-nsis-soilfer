import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Download, ArrowRight, BookOpen, ClipboardList, BarChart3 } from 'lucide-react'

const DOC_CATEGORIES = [
  {
    icon: BookOpen,
    label: 'SoilFER Project',
    color: 'var(--soil-cyan)',
    items: ['Project Overview', 'Kenya Country Brief', 'SoilFER Framework Document', 'Annual Progress Reports']
  },
  {
    icon: ClipboardList,
    label: 'Kenya Soil Surveys',
    color: 'var(--soil-brown)',
    items: ['National Soil Survey Report', 'NARL Soil Data Inventory', 'County Soil Characterization', 'Sampling Protocols']
  },
  {
    icon: BarChart3,
    label: 'Technical Manuals',
    color: 'var(--soil-green)',
    items: ['Digital Soil Mapping Guide', 'NSID Data Schema', 'Laboratory Methods Manual', 'GIS Data Standards']
  },
]

export default function Documents() {
  return (
    <section className="py-20 px-6" style={{ background: 'var(--soil-cream)' }}>
      <div className="max-w-7xl mx-auto">

        <div className="eyebrow mb-3">Documents</div>
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Knowledge Resources
          </h2>
          <Link
            to="/documents"
            className="inline-flex items-center gap-2 text-sm font-semibold"
            style={{ color: 'var(--soil-brown)' }}
          >
            Browse all documents <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DOC_CATEGORIES.map(({ icon: Icon, label, color, items }) => (
            <div key={label} className="bg-white rounded-sm border border-gray-100 overflow-hidden card-lift">
              <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-3">
                <Icon size={18} style={{ color }} />
                <span className="font-semibold text-gray-800 text-sm">{label}</span>
              </div>
              <div className="divide-y divide-gray-50">
                {items.map((doc) => (
                  <a
                    key={doc}
                    href="/documents"
                    className="flex items-center justify-between px-6 py-3 hover:bg-gray-50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={13} className="text-gray-300" />
                      <span className="text-sm text-gray-600 group-hover:text-gray-900">{doc}</span>
                    </div>
                    <Download size={13} className="text-gray-300 group-hover:text-gray-500 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
