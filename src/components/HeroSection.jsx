import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useResponsive } from "../libs/useResponsive";

const HeroSection = () => {
  const { isMobile, isTablet } = useResponsive();

  useGSAP(() => {
    gsap.set([".hero-text-scroll", ".hero-button", ".hero-text"], {
      opacity: 0,
    });

    const titleSplit = SplitText.create(".hero-title", {
      type: "chars",
    });

    const tl = gsap.timeline();

    tl.to([".hero-text-scroll", ".hero-button"], {
      opacity: 1,
      duration: 1.2,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "expo.inOut",
      delay: isMobile ? 0 : 1.5,
    });
    tl.from(
      titleSplit.chars,
      {
        opacity: 1,
        yPercent: 200,
        stagger: 0.05,
        ease: "power1.inOut",
      },
      "<+0.6s",
    );
    tl.to(
      ".hero-text",
      {
        onStart: isTablet,
        opacity: 1,
        ease: "power1.inOut",
        duration: 0.3,
      },
      "<+0.4s",
    );

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "1% top",
        end: "bottom top",
        scrub: true,
      },
    });
    heroTl.to(".hero-container", {
      rotate: isMobile ? 0 : -2,
      scale: 1.05,
      yPercent: isMobile ? 0 : 6,
      ease: "power1.inOut",
    });
  });

  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        {isTablet ? (
          <>
            {isMobile && (
              <img
                src="/images/hero-bg.png"
                className="absolute bottom-40 size-full object-cover"
              />
            )}
            <img
              src="/images/hero-img.png"
              className="absolute scale-80 -bottom-5 left-1/2 -translate-x-1/2 object-auto"
            />
          </>
        ) : (
          <video
            src="/videos/hero-bg.mp4"
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="hero-content scale-80">
          <div className="overflow-hidden">
            <h1 className="hero-title ignore">Freaking Delicious</h1>
          </div>
          <div
            style={{
              clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
            }}
            className="hero-text-scroll ignore"
          >
            <div className="hero-subtitle">
              <h1>Protein + Caffine </h1>
            </div>
          </div>

          <h2 className="hero-text font-semibold">
            Fuel Your Fun with Every Single Sip
          </h2>

          <div className="hero-button">
            <p>Chug a SPYLT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
