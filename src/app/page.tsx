import { MotionConfig } from "framer-motion";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CredentialBar from "@/components/CredentialBar";
import Specialties from "@/components/Specialties";
import Trajectory from "@/components/Trajectory";
import Clinic from "@/components/Clinic";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <Loader />
        <Nav />
        <main id="main">
          <Hero />
          <CredentialBar />
          <Specialties />
          <Trajectory />
          <Clinic />
          <Testimonials />
          <Faq />
          <CtaSection />
        </main>
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  );
}
