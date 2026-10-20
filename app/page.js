import IntroCurtain from "@/components/IntroCurtain";
import SmoothScroll from "@/components/SmoothScroll";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import TransformationStory from "@/components/TransformationStory";
import Marquee from "@/components/Marquee";
import Portfolio from "@/components/Portfolio";
import ReelsShowcase from "@/components/ReelsShowcase";
import Services from "@/components/Services";
import WebsiteDesign from "@/components/WebsiteDesign";
import PricingPlans from "@/components/PricingPlans";
import SingleServices from "@/components/SingleServices";
import WhyKalavia from "@/components/WhyKalavia";
import WorkProcess from "@/components/WorkProcess";
import OwnWork from "@/components/OwnWork";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Closing from "@/components/Closing";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <IntroCurtain />
      <SmoothScroll />
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <TransformationStory />
        <Marquee />
        <Portfolio />
        <ReelsShowcase />
        <Services />
        <WebsiteDesign />
        <PricingPlans />
        <SingleServices />
        <WhyKalavia />
        <WorkProcess />
        <OwnWork />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Closing />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
