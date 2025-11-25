import Hero from '@/components/Hero'
import LogoSlider from '@/components/LogoSlider'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import About from '@/components/About'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <LogoSlider />
      <Services />
      <HowItWorks />
      <About />
      <Contact />
    </div>
  )
}

