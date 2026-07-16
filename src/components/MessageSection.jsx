import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useResponsive } from "../libs/useResponsive";

const MessageSection = () => {
  const { isMobile } = useResponsive();

  useGSAP(() => {
    const firstMsg = SplitText.create(".first-message", { type: "words" });
    const secondMsg = SplitText.create(".second-message", { type: "words" });
    const thirdMsg = SplitText.create(".third-message", {
      type: "words, lines",
      linesClass: "paragraph-line",
      mask: "lines",
    });

    gsap.to(firstMsg.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".message-content",
        start: "top center",
        end: "30% center",
        scrub: true,
      },
    });

    gsap.to(secondMsg.words, {
      color: "#faeade",
      ease: "power1.in",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".message-content",
        start: "center center",
        end: "75% center",
        scrub: true,
      },
    });

    gsap.to(".msg-text-scroll", {
      scrollTrigger: {
        trigger: ".msg-text-scroll",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
      ease: "power3.inOut",
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100% )",
    });

    gsap.from(thirdMsg.lines, {
      scrollTrigger: {
        trigger: ".third-message",
        start: isMobile ? "top 45%" : "top 40%",
        end: isMobile ? "bottom 43%" : "bottom 30%",
        scrub: true,
      },

      rotate: -6,
      yPercent: -300,
      stagger: 0.1,
      opacity: 0,
      ease: "power3.inOut",
    });
  });

  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">Stir up your fearless past and</h1>

            <div
              style={{
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Fuel Up</h2>
              </div>
            </div>

            <h1 className="second-message">
              your future with every gulp of Perfect Protein
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p className="third-message">
                Rev up your rebel spirit and feed the adventure of life with
                SPYLT, where you’re one chug away from epic nostalgia and
                fearless fun.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
