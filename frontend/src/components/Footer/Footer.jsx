import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, ExternalLink } from 'lucide-react'

const BASE = import.meta.env.DEV ? '' : '/static/nsis_kenya'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--soil-dark)' }}>

      {/* Soil layer strip */}
      <div className="soil-layers h-1 w-full" />

      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-14">

          {/* Brand col */}
          <div className="md:col-span-1">
            <img src={`${BASE}/assets/soilfer.png`} alt="SoilFER" className="h-10 mb-4 object-contain" />
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              National Soil Information and Data Portal for Kenya — digital infrastructure
              for evidence-based soil management and climate-smart agriculture.
            </p>
            <a
              href="mailto:narl@kalro.org"
              className="inline-flex items-center gap-2 text-xs"
              style={{ color: 'var(--soil-cyan)' }}
            >
              <Mail size={12} /> narl@kalro.org
            </a>
          </div>

          {/* Links */}
          {[
            {
              title: 'Portal',
              links: [
                { label: 'About NSID',       href: '/about/nsid' },
                { label: 'Kenya Soils',       href: '/about/kenya-soils' },
                { label: 'Explore Layers',    href: '/data/explore-layers' },
                { label: 'Soil Maps',         href: '/maps' },
                { label: 'Documents',         href: '/documents' },
              ]
            },
            {
              title: 'GeoNode',
              links: [
                { label: 'Map Viewer',        href: '/maps/new' },
                { label: 'Data Catalogue',    href: '/catalogue' },
                { label: 'Upload Dataset',    href: '/catalogue/upload' },
                { label: 'GeoServer WMS',     href: '/geoserver/web/' },
                { label: 'API',               href: '/api/v2/' },
              ]
            },
            {
              title: 'Partners',
              links: [
                { label: 'KALRO',             href: 'https://www.kalro.org',    external: true },
                { label: 'FAO Kenya',          href: 'https://www.fao.org/kenya', external: true },
                { label: 'MoALD Kenya',        href: 'https://kilimo.go.ke',    external: true },
                { label: 'SoilFER Project',    href: 'https://www.fao.org/soilfer', external: true },
              ]
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <div className="text-white text-xs font-semibold uppercase tracking-widest mb-4">
                {title}
              </div>
              <ul className="space-y-2.5">
                {links.map(({ label, href, external }) => (
                  <li key={label}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 text-sm hover:text-gray-300 transition-colors inline-flex items-center gap-1"
                      >
                        {label} <ExternalLink size={10} />
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Partner logos */}
        <div className="border-t border-white/10 pt-10 mb-8">
          <div className="text-xs text-gray-600 uppercase tracking-widest mb-5">Implemented by</div>
          <div className="flex flex-wrap items-center gap-8">
            <img src={`${BASE}/assets/kenya-govt.png`} alt="Republic of Kenya" className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={`${BASE}/assets/kalro.png`}      alt="KALRO"             className="h-10 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <img src={`${BASE}/assets/FAO.png`}        alt="FAO"               className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity brightness-0 invert" />
            <div className="ml-auto flex items-center gap-6">
              <span className="text-xs text-gray-600">Funded by</span>
              <img src={`${BASE}/assets/usa.png`}       alt="USA"               className="h-7 object-contain opacity-70 hover:opacity-100 transition-opacity" />
              <img src={`${BASE}/assets/dept-state.png`} alt="U.S. Dept. of State" className="h-9 object-contain opacity-70 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-wrap items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} NSID Kenya · SoilFER Project GCP/GLO/1127/USA ·
            Powered by <a href="https://geonode.org" className="hover:text-gray-400 underline">GeoNode</a>
          </p>
          <div className="flex gap-4">
            <Link to="/documents" className="text-gray-600 text-xs hover:text-gray-400">Data Policy</Link>
            <Link to="/about/nsid" className="text-gray-600 text-xs hover:text-gray-400">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
