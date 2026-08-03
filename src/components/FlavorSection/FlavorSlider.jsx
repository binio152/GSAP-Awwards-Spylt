import { useRef } from "react";
import { flavorlists } from "@/constants/flavorLists";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useResponsive } from "@/libs/useResponsive";

const FlavorSlider = () => {
  const { isMobile } = useResponsive();
  const sliderRef = useRef(null);

  useGSAP(() => {
    const flavorCards = gsap.utils.toArray(".flavor-card", sliderRef.current);
    const scrollWidth =
      sliderRef.current.scrollWidth - (2 / 5) * window.innerWidth;

    if (isMobile) {
      flavorCards.forEach((card) => {
        const elements = card.querySelector(".flavor-elements");
        const names = card.querySelector(".names");

        gsap
          .timeline({
            scrollTrigger: {
              trigger: card,
              start: "left 65%",
              end: "right 35%",
              scrub: true,
            },
          })
          .from(elements, {
            scale: 0.8,
            rotate: 16,
            yPercent: -3,
            ease: "power3.inOut",
          })
          .from(
            names,
            { opacity: 0, ease: "power1.inOut", duration: 0.3 },
            "<",
          );
      });
    }

    if (!isMobile) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".flavor-section",
            start: "2% top",
            end: `+=${scrollWidth}px`,
            scrub: true,
            pin: true,
          },
          delay: 0.2,
        })
        .to(".flavor-section", { x: () => -scrollWidth, ease: "none" });
    }
  });

  return (
    <div ref={sliderRef} className="slider-wrapper">
      <div className="flavors scale-90">
        {flavorlists.map((flavor) => (
          <div
            key={flavor.name}
            className={`flavor-card relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${flavor.rotation}`}
          >
            <img
              src={`/images/${flavor.color}-bg.svg`}
              loading="eager"
              decoding="async"
              alt="drink-background"
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              loading="eager"
              decoding="async"
              alt="drink-image"
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              loading="eager"
              decoding="async"
              alt="drink-element"
              className="flavor-elements elements"
            />

            <h1 className="names">{flavor.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSlider;
