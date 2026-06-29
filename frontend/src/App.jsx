import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DataPage from './pages/DataPage'
import MapsPage from './pages/MapsPage'
import DocumentsPage from './pages/DocumentsPage'

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/nsid" element={<AboutPage section="nsid" />} />
          <Route path="/about/kenya-soils" element={<AboutPage section="kenya-soils" />} />
          <Route path="/data" element={<DataPage />} />
          <Route path="/data/soil-data" element={<DataPage section="soil-data" />} />
          <Route path="/data/explore-layers" element={<DataPage section="explore-layers" />} />
          <Route path="/maps" element={<MapsPage />} />
          <Route path="/documents" element={<DocumentsPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
