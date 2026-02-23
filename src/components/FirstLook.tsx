import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const FirstLook: React.FC = () => {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".reveal-text", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
      }).from(
        ".fade-up",
        {
          y: 30,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.5",
      );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="bg-white text-dark py-24 px-6 md:px-12 flex flex-col items-center text-center"
    >
      <div className="overflow-hidden mb-4">
        <span className="reveal-text inline-block text-sm font-bold uppercase tracking-widest">
          First Look
        </span>
      </div>
      <div className="overflow-hidden mb-8">
        <h2 className="reveal-text inline-block text-6xl md:text-8xl font-antonio font-bold uppercase tracking-tighter leading-none max-w-4xl">
          FASTER THAN FEAR
        </h2>
      </div>
      <p className="fade-up text-xl md:text-2xl font-archivo max-w-[600px] leading-relaxed mb-10 text-[#333]">
        A new era of velocity is here. Engineered to break boundaries, defy
        expectations, and unleash pure, unadulterated speed on every terrain.
      </p>
      <button className="fade-up bg-dark text-white rounded-full px-8 py-4 font-bold uppercase tracking-wider hover:bg-carbon transition-colors duration-300">
        Discover the Tech
      </button>
    </section>
  );
};
