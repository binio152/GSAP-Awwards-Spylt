import { useResponsive } from "../libs/useResponsive";
import { nutrientLists } from "../constants/flavorLists";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

const NutritionSection = () => {
  const { isMobile } = useResponsive();
  const lists = nutrientLists;

  useGSAP(() => {
    const titleSplit = SplitText.create(".nutrition-title", {
      type: "chars",
    });
    const descriptionSplit = SplitText.create(".nutrition-description", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".nutrition-section",
          start: isMobile ? "top 60%" : "5% center",
          end: "65% center",
          scrub: true,
        },
      })
      .from(titleSplit.chars, {
        yPercent: 100,
        stagger: 0.02,
        ease: "power3.inOut",
      })
      .to(
        ".nutrition-text-scroll",
        {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
          ease: "power1.inOut",
        },
        ">-0.2s",
      )
      .from(descriptionSplit.words, {
        yPercent: 300,
        rotate: 2,
        duration: 1,
        stagger: 0.05,
        ease: "power1.inOut",
      })

      .from(
        ".nutrition-amount",
        {
          xPercent: -10,
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        ">-0.2s",
      )
      .from(
        ".nutrition-label",
        {
          xPercent: -10,
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
        },
        "<",
      );
  });

  return (
    <section className="nutrition-section">
      <img
        src="/images/slider-dip.png"
        alt=""
        className="w-full object-cover"
      />

      <img src="/images/big-img.png" alt="" className="big-img" />

      <div className="flex md:flex-row flex-col justify-between items-center md:px-10 px-5 mt-14 md:mt-0">
        <div className="relative inline-block">
          <div className="general-title relative flex flex-col justify-center items-center gap-24">
            <div className="overflow-hidden place-self-start">
              <h1 className="nutrition-title scale-80">It still does</h1>
            </div>
            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="nutrition-text-scroll place-self-start scale-80"
            >
              <div className="bg-yellow-brown pb-5 md:pt-0 pt-3 md:px-5 px-3">
                <h2 className="text-milk-yellow ">Body Good</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:justify-center items-center translate-y-5 md:-translate-y-5">
          <div className="md:max-w-xs max-w-md">
            <p className="nutrition-description text-lg md:text-right text-balance font-paragraph font-semibold">
              Milk contains a wide array of nutrients, including vitamins,
              minerals, and protein, and this is lactose free
            </p>
          </div>
        </div>

        <div className="nutrition-box">
          <div className="list-wrapper">
            {nutrientLists.map((nutrient, index) => (
              <div key={index} className="relative flex-1 col-center">
                <div>
                  <p className="nutrition-label md:text-lg text-md font-paragraph font-semibold tracking-tight">
                    {nutrient.label}
                  </p>
                  <p className="font-paragraph md:text-sm text-xs mt-1 md:mt-2">
                    up to
                  </p>
                  <p className="nutrition-amount text-xl md:text-4xl tracking-tighter font-bold">
                    {nutrient.amount}
                  </p>
                </div>

                {index !== lists.length - 1 && (
                  <div className="spacer-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionSection;
