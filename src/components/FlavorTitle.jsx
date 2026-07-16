import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";

const FlavorTitle = () => {
  useGSAP(() => {
    const firstText = SplitText.create(".first-text-split", {
      type: "chars",
      mask: "chars",
    });
    const secondText = SplitText.create(".second-text-split", {
      type: "chars",
      mask: "chars",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".flavor-title",
        start: "top center",
        end: "70% center",
        scrub: true,
      },
    });

    tl.from(firstText.chars, {
      opacity: 0,
      rotate: 3,
      yPercent: 100,
      stagger: 0.02,
      ease: "power1.inOut",
    });

    tl.to(
      ".flavor-text-scroll",
      {
        duration: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.inOut",
      },
      ">-0.2s",
    );

    tl.from(
      secondText.chars,
      {
        opacity: 0,
        rotate: 3,
        yPercent: 100,
        stagger: 0.02,
        ease: "power1.inOut",
      },
      ">-0.3s",
    );

    tl.from(".flavors", { opacity: 0 }, "<");
  });

  return (
    <div className="flavor-title general-title col-center h-full 2xl:gap-30 xl:gap-20 gap-14 ">
      <div className="overflow-hidden lg:py-0 py-3 first-text-split">
        <h1>We have 6</h1>
      </div>

      <div
        style={{
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        }}
        className="flavor-text-scroll"
      >
        <div className="bg-mid-brown pb-5 2xl:pt-0 pt-3 2xl:px-5 px-3">
          <h2 className="text-milk lg:text-[6rem] md:tex[5rem] sm:text-[4rem] text-[3rem] leading-[6vw]">
            freaking
          </h2>
        </div>
      </div>

      <div className="overflow-hidden 2xl:py-0 lg:py-0 py-3 second-text-split">
        <h1>delicious flavors</h1>
      </div>
    </div>
  );
};

export default FlavorTitle;
