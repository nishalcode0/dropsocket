import Navbar from '../components/landing/NavBar.jsx'
import Hero from '../components/landing/Hero.jsx'
import SubHero from '../components/landing/Sub-Hero.jsx'
import Features from '../components/landing/Features.jsx'
import Pricing from '../components/landing/Pricing.jsx'
import CTA from '../components/landing/CTA.jsx'
import Footer from '../components/landing/Footer.jsx'
import FAQ from '../components/landing/FAQ.jsx'

export default function LandingPage () {
  return (
  <>
    <Navbar />
    <Hero /> 
    <SubHero />
    <Features />
    <Pricing />
    <FAQ />
    <CTA />
    <Footer />
    </>
  )
}
