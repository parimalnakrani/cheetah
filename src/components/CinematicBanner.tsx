import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const CinematicBanner: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // Parallax effect on the background image
      gsap.fromTo(
        imageRef.current,
        { yPercent: -15 },
        {
          yPercent: 15,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Text reveal effect
      gsap.from(textRef.current, {
        scale: 0.8,
        opacity: 0,
        y: 100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-white py-12 px-6 md:px-12 overflow-hidden"
    >
      <div className="relative w-full h-[85vh] overflow-hidden rounded-3xl bg-carbon flex items-end justify-center">
        <img
          ref={imageRef}
          src="/assets/images/cheetah.jpg"
          alt="Cheetah Savanna"
          className="absolute inset-x-0 w-full h-[150%] object-cover opacity-80"
          style={{ top: "-25%" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent"></div>
        <h2
          ref={textRef}
          className="relative z-10 text-6xl md:text-9xl font-antonio font-bold uppercase tracking-tighter text-white mb-12 text-center drop-shadow-2xl"
        >
          OWN THE WILD
        </h2>
      </div>
    </section>
  );
};
