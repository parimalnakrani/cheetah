import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    id: 1,
    title: "EXPLOSIVE ACCELERATION",
    category: "Speed",
    tagline: "0 to 60 in a heartbeat.",
    img: "/assets/images/cheetah_speed_1771813561428.webp",
  },
  {
    id: 2,
    title: "UNMATCHED AGILITY",
    category: "Agility",
    tagline: "Turn on a dime.",
    img: "/assets/images/cheetah_agility_1771813579028.webp",
  },
  {
    id: 3,
    title: "RAW POWER",
    category: "Power",
    tagline: "Built for the relentless.",
    img: "/assets/images/cheetah_power_1771813596605.webp",
  },
  {
    id: 4,
    title: "PREDATORY INSTINCT",
    category: "Control",
    tagline: "Dominate your environment.",
    img: "/assets/images/cheetah_control_1771813616983.webp",
  },
];

export const BuiltForSpeedCarousel: React.FC = () => {
  const container = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: "top 95%",
          once: true,
        },
      });

      tl.from(".header-anim", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".card-anim",
        {
          x: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.5",
      );
    },
    { scope: container },
  );

  const scrollLeft = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (scrollRef.current)
      scrollRef.current.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section
      ref={container}
      className="bg-white py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="flex justify-between items-end mb-12">
        <h2 className="header-anim text-5xl md:text-7xl font-antonio font-bold uppercase tracking-tighter text-dark">
          Built for Speed
        </h2>
        <div className="header-anim flex gap-4">
          <button
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-dark text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-dark text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-colors"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {CARDS.map((card) => (
          <div
            key={card.id}
            className="card-anim min-w-[85vw] md:min-w-[400px] snap-center shrink-0"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-3xl mb-6 relative">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 left-4 bg-white text-dark px-3 py-1 text-xs font-bold uppercase tracking-widest">
                {card.category}
              </div>
            </div>
            <h3 className="text-2xl font-antonio font-bold uppercase tracking-tight text-dark mb-2">
              {card.title}
            </h3>
            <p className="text-gray-600 font-archivo">{card.tagline}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
