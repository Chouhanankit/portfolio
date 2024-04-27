import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import FactSection from './components/FactSection'
import SkillSection from './components/SkillSection'
import Resume from './components/Resume'
import PortfolioSection from './components/PortfolioSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div id='main'>
        <AboutSection />
        {/* <FactSection /> */}
        <SkillSection />
        <Resume />
        <PortfolioSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default App