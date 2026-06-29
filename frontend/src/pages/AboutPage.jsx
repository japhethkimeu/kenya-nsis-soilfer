import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function AboutPage({ section }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {section === 'kenya-soils' ? <KenyaSoils /> : <NSIDContent />}
    </div>
  )
}

function NSIDContent() {
  return (
    <>
      <div className="eyebrow mb-3">About NSID</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        National Soil Information and Data System
      </h1>
      <p className="text-gray-500 text-lg leading-relaxed mb-10 border-l-4 pl-5" style={{ borderColor: 'var(--soil-cyan)' }}>
        The Government of Kenya, through the Ministry of Agriculture and Livestock Development
        (MoALD), is establishing the NSID portal as a core national digital platform for soil
        information management under the SoilFER Project.
      </p>

      {[
        {
          title: 'Vision',
          content: 'Healthy, fertile, and resilient soil resources that sustainably support Kenya\'s agrifood systems, livelihoods, and climate resilience.'
        },
        {
          title: 'Mission',
          content: null,
          bullets: [
            'Generate, integrate, and maintain national soil information and digital soil maps for Kenya',
            'Support data-driven soil fertility management, land use planning, and climate-smart agriculture at farm, landscape, and national scales',
            'Strengthen institutional and technical capacity in soil data management, digital soil mapping, and geospatial analysis',
            'Improve access to actionable soil information and decision-support tools for farmers, extension services, researchers, planners, and policymakers'
          ]
        },
        {
          title: 'Purpose of NSID',
          content: 'Limited access to harmonized, up-to-date, and spatially detailed soil information remains a major constraint to effective soil management, fertilizer recommendations, land restoration, and climate-resilient agricultural planning in Kenya. Existing soil data are often fragmented across institutions, stored in non-digital formats, or developed using inconsistent standards.',
        },
        {
          title: 'System Scope and Capabilities',
          content: null,
          bullets: [
            'Digital soil mapping based on standardized soil survey data including topsoil and subsoil',
            'Integration of field observations, laboratory analyses, remote sensing, and GIS-based spatial modeling',
            'Development of soil fertility and soil health indicators',
            'Support to Decision Support Systems (DSS) for integrated soil nutrient management',
            'Linkages to farmer-facing applications such as FerSIS App',
            'Visualization, querying, and sharing of soil information through web-based geospatial services'
          ]
        },
        {
          title: 'Data Governance and Access',
          content: 'Data access, use, and sharing within NSID are governed by national policies, institutional agreements, and FAO-supported data governance principles. The system promotes responsible data sharing, interoperability, and transparency while ensuring data quality, security, and appropriate use.'
        },
      ].map(({ title, content, bullets }) => (
        <section key={title} className="mb-10">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
          {content && <p className="text-gray-600 leading-relaxed">{content}</p>}
          {bullets && (
            <ul className="space-y-2 mt-2">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-gray-600 leading-relaxed">
                  <span className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0" style={{ background: 'var(--soil-amber)' }} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </>
  )
}

function KenyaSoils() {
  return (
    <>
      <div className="eyebrow mb-3">Kenya Soils</div>
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Kenya Soil Survey</h1>
      <p className="text-gray-600 leading-relaxed">
        Get information from the Kenya soil survey — NARL (National Agricultural Research Laboratories),
        Kabete. This section provides access to historical soil survey data, characterization results,
        and national soil classification information.
      </p>
    </>
  )
}
