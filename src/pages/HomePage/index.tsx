import { HeroSection } from "./components/HeroSection";
import { HowToHelpSection } from "./components/HowToHelpSection";
import { MakeDonationSection } from "./components/MakeDonationSection";
import { WhereWeAreSection } from "./components/WhereWeAreSection";
import { WhoWeAreSection } from "./components/WhoWeAreSection";

export function HomePage() {
  return (
    <main>
      <HeroSection />

      <div className="px-6 md:px-[72px] lg:w-[1085px] m-auto mt-[38px] md:mt-[44px] lg:mt-[72px] flex flex-col gap-10 md:gap-11 lg:gap-[72px]">
        <WhoWeAreSection />
        <HowToHelpSection />
        <MakeDonationSection />
        <WhereWeAreSection />
      </div>
    </main>
  )
}