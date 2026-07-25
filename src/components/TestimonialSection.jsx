import { useRef } from "react";
import { cards } from "../constants/flavorLists";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useResponsive } from "../libs/useResponsive";

const TestimonialSection = () => {
  const { isMobile } = useResponsive();
  const vdRef = useRef([]);

  useGSAP(() => {
    gsap.set(".testimonials-section", { marginTop: "-120vh" });
    gsap.set(".testimonials-section .sec-title", { xPercent: -16 });
    gsap.set(".testimonials-section .vd-card", { yPercent: 145 });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "-10% bottom",
          end: "200% top",
          scrub: true,
        },
      })
      .to(".testimonials-section .first-title", { xPercent: 70 })
      .to(".testimonials-section .sec-title", { xPercent: 25 }, "<")
      .to(".testimonials-section .third-title", { xPercent: -50 }, "<");

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".testimonials-section",
          start: "10% top",
          end: "200% top",
          scrub: 1.3,
          pin: true,
        },
        delay: 0.5,
      })
      .to(".vd-card", { yPercent: 50, stagger: 0.3, ease: "power1.inOut" });
  });

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  if (isMobile) return null;

  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card md:scale-56 xl:scale-60 2xl:scale-68 ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
