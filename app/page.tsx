import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import LatestDesigns from "@/components/LatestDesigns";
import Categories from "@/components/Categories";
import Packages from "@/components/Packages";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTAContact from "@/components/CTAContact";
import FAQ from "@/components/FAQ";
import StructuredData from "@/components/StructuredData";

export default function Home() {
  return (
    <main>
      <StructuredData />
      <Hero />
      <TrustBar />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 grid lg:grid-cols-[1fr_360px] gap-10 items-start">
        <LatestDesigns />
        <Categories />
      </section>
      <Packages />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTAContact />
    </main>
  );
}
