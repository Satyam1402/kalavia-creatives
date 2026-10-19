import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyKalavia from "@/components/WhyKalavia";
import PricingPlans from "@/components/PricingPlans";
import SingleServices from "@/components/SingleServices";
import WorkProcess from "@/components/WorkProcess";
import OwnWork from "@/components/OwnWork";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <WhyKalavia />
        <PricingPlans />
        <SingleServices />
        <WorkProcess />
        <OwnWork />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
