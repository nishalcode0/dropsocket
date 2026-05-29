import Navbar from './NavBar.jsx'
import Hero from './Hero.jsx'
import SubHero from './Sub-Hero.jsx'
import Features from './Features.jsx'
import Pricing from './Pricing.jsx'
import CTA from './CTA.jsx'
import Footer from './Footer.jsx'
import FAQ from './FAQ.jsx'

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
