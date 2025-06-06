import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancialFreedom,
  HeroSection,
  JoinSection,
  OffersSection,
} from "@/components";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <OffersSection />
      <FinancialFreedom />
      <FinancialFuture />
      <section id="join">
        <JoinSection />
      </section>
      <FAQ />
    </main>
  );
}
