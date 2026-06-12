import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { SectorStrip } from "@/components/sections/sector-strip";
import { Problem } from "@/components/sections/problem";
import { Platform } from "@/components/sections/platform";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Orchestration } from "@/components/sections/orchestration";
import { Security } from "@/components/sections/security";
import { UseCases } from "@/components/sections/use-cases";
import { Integrations } from "@/components/sections/integrations";
import { Commitments } from "@/components/sections/commitments";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectorStrip />
        <Problem />
        <Platform />
        <HowItWorks />
        <Orchestration />
        <Security />
        <UseCases />
        <Integrations />
        <Commitments />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
