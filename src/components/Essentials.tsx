import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ESSENTIALS = [
  {
    id: 1,
    title: "Speed",
    img: "/assets/images/cheetah_in_motion.webp",
  },
  {
    id: 2,
    title: "Strength",
    img: "/assets/images/cheetah_strength_1771813650791.webp",
  },
  {
    id: 3,
    title: "Instinct",
    img: "/assets/images/cheetah_instinct_1771813666642.webp",
  },
];

export const Essentials: React.FC = () => {
  const container = useRef<HTMLElement>(null);

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
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".card-anim",
        {
          y: 50,
          scale: 1.05,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4",
      );
    },
    { scope: container },
  );

  return (
    <section ref={container} className="bg-white py-24 px-6 md:px-12">
      <h2 className="header-anim text-5xl md:text-7xl font-antonio font-bold uppercase tracking-tighter text-dark mb-12">
        The Essentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ESSENTIALS.map((item) => (
          <div
            key={item.id}
            className="card-anim relative aspect-[3/4] group overflow-hidden rounded-3xl bg-gray-100"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Pill Button placed over bottom-left */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white text-dark px-6 py-3 rounded-full font-bold uppercase tracking-wider hover:bg-dark hover:text-white transition-colors duration-300 cursor-pointer shadow-xl">
              <span>{item.title}</span>
              <ArrowUpRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
