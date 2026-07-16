import { ScrollSmoother, ScrollTrigger, TextPlugin } from "gsap/all";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MessageSection from "./components/MessageSection";
import FlavorSection from "./components/FlavorSection";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
gsap.registerPlugin(TextPlugin);

const App = () => {
  //   useGSAP(() => {
  //     ScrollSmoother.create({
  //       smooth: 3,
  //       effects: true,
  //     });
  //   });
  return (
    <main>
      <Navbar />
      <HeroSection />

      <MessageSection />

      <FlavorSection />
      <div className="h-[200dvh]"></div>
    </main>
  );
};

export default App;
