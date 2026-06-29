import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Menu, X, ChevronDown, LogIn, UserPlus } from 'lucide-react'

// Asset paths — resolved after `vite build` into GeoNode static
const BASE = import.meta.env.DEV ? '' : '/static/nsis_kenya'
const assets = {
  soilfer:   `${BASE}/assets/soilfer.png`,
  fao:       `${BASE}/assets/FAO.png`,
  kalro:     `${BASE}/assets/kalro.png`,
  kenyaGovt: `${BASE}/assets/kenya-govt.png`,
  deptState: `${BASE}/assets/dept-state.png`,
  usa:       `${BASE}/assets/usa.png`,
}

const NAV_ITEMS = [
  {
    label: 'NSID',
    href: '/about',
    dropdown: [
      { label: 'About NSID', href: '/about/nsid', desc: 'Vision, mission & governance' },
      { label: 'Kenya Soils', href: '/about/kenya-soils', desc: 'National soil survey information' },
    ]
  },
  {
    label: 'Data',
    href: '/data',
    dropdown: [
      { label: 'Soil Data', href: '/data/soil-data', desc: 'Properties, chemistry, sampling design' },
      { label: 'Explore Layers', href: '/data/explore-layers', desc: 'Legacy & digital soil map layers' },
    ]
  },
  {
    label: 'Maps',
    href: '/maps',
    dropdown: [
      { label: 'Geoportal', href: '/maps', desc: 'Interactive GeoNode map viewer' },
      { label: 'Soil Maps by County', href: '/maps?view=county', desc: 'County-level soil distribution' },
      { label: 'National Soil Maps', href: '/maps?view=national', desc: 'Full Kenya coverage' },
    ]
  },
  {
    label: 'Documents',
    href: '/documents',
    dropdown: null
  },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setSearchOpen(false)
  }, [location])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/catalogue?search=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* ── Partner strip ── */}
      <div className="partner-strip hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img src={assets.kenyaGovt} alt="Republic of Kenya" className="h-8 object-contain" />
            <img src={assets.kalro}     alt="KALRO"              className="h-8 object-contain" />
            <img src={assets.fao}       alt="FAO"                className="h-7 object-contain" />
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400 tracking-wide">Funded by</span>
            <img src={assets.usa}       alt="USA"                className="h-6 object-contain" />
            <img src={assets.deptState} alt="U.S. Department of State" className="h-7 object-contain" />
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav
        className="w-full transition-all duration-300"
        style={{ background: scrolled ? 'rgba(26,16,8,0.97)' : 'var(--soil-dark)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo + wordmark */}
            <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
              <img src={assets.soilfer} alt="SoilFER" className="h-9 object-contain" />
              <div className="hidden sm:block">
                <div className="text-white font-semibold text-sm leading-tight tracking-wide">
                  NSID Kenya
                </div>
                <div className="text-gray-400 text-xs leading-tight">
                  National Soil Information &amp; Data Portal
                </div>
              </div>
            </Link>

            {/* Desktop nav — LEFT side items */}
            <div className="hidden lg:flex items-center gap-1 ml-8">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="nav-item relative">
                  <Link
                    to={item.href}
                    className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors duration-150 rounded-sm"
                  >
                    {item.label}
                    {item.dropdown && <ChevronDown size={13} className="opacity-60" />}
                  </Link>

                  {item.dropdown && (
                    <div className="nav-dropdown">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0 group"
                        >
                          <div className="text-sm font-medium text-gray-800 group-hover:text-[--soil-brown]">
                            {sub.label}
                          </div>
                          <div className="text-xs text-gray-500 mt-0.5">{sub.desc}</div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop — RIGHT side: search + auth */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              {/* Search */}
              <div className="relative">
                {searchOpen ? (
                  <form onSubmit={handleSearch} className="flex items-center">
                    <input
                      autoFocus
                      type="text"
                      placeholder="Search soil data..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-56 px-3 py-1.5 text-sm bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-sm focus:outline-none focus:border-[--soil-cyan]"
                    />
                    <button
                      type="button"
                      onClick={() => setSearchOpen(false)}
                      className="ml-1 text-gray-400 hover:text-white p-1"
                    >
                      <X size={16} />
                    </button>
                  </form>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="text-gray-300 hover:text-white p-2 transition-colors"
                    aria-label="Search"
                  >
                    <Search size={18} />
                  </button>
                )}
              </div>

              {/* Auth buttons — link to GeoNode endpoints */}
              <a
                href="/account/signup/"
                className="flex items-center gap-1.5 text-xs font-semibold text-gray-300 hover:text-white px-3 py-1.5 border border-white/20 rounded-sm transition-colors"
              >
                <UserPlus size={13} />
                Register
              </a>
              <a
                href="/account/login/"
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-sm transition-colors"
                style={{ background: 'var(--soil-cyan)', color: 'white' }}
              >
                <LogIn size={13} />
                Sign In
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-gray-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 pb-4">
            <div className="max-w-7xl mx-auto px-4 pt-3 space-y-1">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-sm"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 mt-1 space-y-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          to={sub.href}
                          className="block px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-sm"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-3 flex gap-3 border-t border-white/10">
                <a href="/account/signup/" className="flex-1 text-center text-xs font-semibold text-gray-300 border border-white/20 rounded-sm py-2">
                  Register
                </a>
                <a href="/account/login/" className="flex-1 text-center text-xs font-semibold text-white rounded-sm py-2" style={{ background: 'var(--soil-cyan)' }}>
                  Sign In
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

    </header>
  )
}
