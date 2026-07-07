import { Hero } from "@/components/sections/hero";
import { SectorStrip } from "@/components/sections/sector-strip";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { FirstParty } from "@/components/sections/first-party";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Comparison } from "@/components/sections/comparison";
import { UseCases } from "@/components/sections/use-cases";
import { Security } from "@/components/sections/security";
import { ResultsTeaser } from "@/components/sections/results-teaser";
import { Commitments } from "@/components/sections/commitments";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectorStrip />
      <Problem />
      <Solution />
      <FirstParty />
      <HowItWorks />
      <Comparison />
      <UseCases />
      <Security />
      <ResultsTeaser />
      <Commitments />
      <Faq />
      <FinalCta />
    </main>
  );
}
