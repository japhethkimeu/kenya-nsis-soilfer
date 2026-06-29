import React from 'react'
import Hero from '../components/Hero/Hero'
import About from '../components/About/About'
import Data from '../components/Data/Data'
import Maps from '../components/Maps/Maps'
import Documents from '../components/Documents/Documents'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Data />
      <Maps />
      <Documents />
    </>
  )
}
