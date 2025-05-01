import { HeroSection } from "./components/HeroSection";
import { HowToHelpSection } from "./components/HowToHelpSection";
import { MakeDonationSection } from "./components/MakeDonationSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <div className="px-6 md:px-[72px] lg:w-[1085px] m-auto mt-[38px] md:-[44px] lg:-[72px]">
        <WhoWeAreSection />
        <HowToHelpSection />
        <MakeDonationSection />
      </div>
    </main>
  )
}