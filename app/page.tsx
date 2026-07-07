import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/sections/hero";
import { SectorStrip } from "@/components/sections/sectors";
import { Problem } from "@/components/sections/problem";
import { Platform } from "@/components/sections/platform";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Security } from "@/components/sections/security";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";
import { faqs } from "@/components/sections/faq-data";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <SectorStrip />
        <Problem />
        <Platform />
        <HowItWorks />
        <Security />
        <Faq />
        <Cta />
      </main>
      <Contact />
      <Footer />
    </>
  );
}
