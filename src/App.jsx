import { ScrollSmoother, ScrollTrigger, TextPlugin } from "gsap/all";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MessageSection from "./components/MessageSection";
import FlavorSection from "./components/FlavorSection";
import NutritionSection from "./components/NutritionSection";
import BenefitSection from "./components/BenefitSection";
import TestimonialSection from "./components/TestimonialSection";
import FooterSection from "./components/Footer";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(TextPlugin);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return (
    <main>
      <Navbar />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
