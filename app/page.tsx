import { BackgroundEffects } from "@/components/portfolio/background-effects"
import { Navbar } from "@/components/portfolio/navbar"
import { Hero } from "@/components/portfolio/hero"
import { Metrics } from "@/components/portfolio/metrics"
import { About } from "@/components/portfolio/about"
import { FeaturedWork } from "@/components/portfolio/featured-work"
import { Experience } from "@/components/portfolio/experience"
import { Skills } from "@/components/portfolio/skills"
import { Education } from "@/components/portfolio/education"
import { Research } from "@/components/portfolio/research"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BackgroundEffects />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <About />
        <FeaturedWork />
        <Experience />
        <Skills />
        <Education />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
