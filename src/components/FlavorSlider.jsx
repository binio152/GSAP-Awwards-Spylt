import { useRef } from "react";
import { flavorlists } from "../constants/flavorLists";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useResponsive } from "../libs/useResponsive";

const FlavorSlider = () => {
  const { isMobile } = useResponsive();
  const sliderRef = useRef(null);

  useGSAP(() => {
    const scrollWidth =
      sliderRef.current.scrollWidth - (1 / 3) * window.innerWidth;
    const flavorCards = gsap.utils.toArray(".flavor-card");

    if (!isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".flavor-section",
          start: "2% top",
          end: `+=${scrollWidth}px`,
          scrub: true,
          pin: true,
        },
      });
      tl.to(
        ".flavor-section",
        {
          x: `-${scrollWidth}px`,
          ease: "power1.inOut",
        },
        "<",
      );

      flavorCards.forEach((card) => {
        const elements = card.querySelector(".flavor-elements");

        gsap.fromTo(
          elements,
          {
            scale: 0.8,
            rotate: 16,
            yPercent: -3,
            transformOrigin: "center center",
          },
          {
            scale: 1,
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              containerAnimation: tl,
              start: "left 65%",
              end: "right 35%",
              scrub: true,
            },
          },
        );
      });
    }

    flavorCards.forEach((card) => {
      const elements = card.querySelector(".flavor-elements");
      const names = card.querySelector(".names");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "left 65%",
          end: "right 35%",
          scrub: true,
        },
      });
      tl.from(elements, {
        scale: 0.8,
        rotate: 16,
        yPercent: -3,
        ease: "power3.inOut",
      });
      tl.from(names, { opacity: 0, ease: "power1.inOut", duration: 0.2 }, "<");
    });
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
              alt=""
              className="absolute bottom-0"
            />

            <img
              src={`/images/${flavor.color}-drink.webp`}
              alt=""
              className="drinks"
            />

            <img
              src={`/images/${flavor.color}-elements.webp`}
              alt=""
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
