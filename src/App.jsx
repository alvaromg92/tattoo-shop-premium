import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Styles from './sections/Styles'
import Gallery from './sections/Gallery'
import About from './sections/About'
import Testimonials from './sections/Testimonials'
import CTA from './sections/CTA'
import Footer from './sections/Footer'


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Styles />
      <Gallery />
      <About />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
