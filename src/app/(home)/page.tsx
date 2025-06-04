import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancialFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section id="about">
        <Featured />
        <OffersSection />
      </section>
      <FinancialFreedom />
      <FinancialFuture />
      <section id="program">
        <IntroSection />
      </section>
      <section id="join">
        <JoinSection />
      </section>
      <FAQ />
    </main>
  );
}
