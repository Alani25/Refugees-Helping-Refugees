import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProgramsSection } from "@/components/programs-section"
import { VolunteerSection } from "@/components/volunteer-section"
import { ImpactSection } from "@/components/impact-section"
import { LocationSection } from "@/components/location-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="programs">
        <ProgramsSection />
      </div>
      <div id="volunteer">
        <VolunteerSection />
      </div>
      <div id="impact">
        <ImpactSection />
      </div>
      <LocationSection />
      <Footer />
    </main>
  )
}
