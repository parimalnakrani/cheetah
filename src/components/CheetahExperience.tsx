import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 121;

export const CheetahExperience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fgCanvasRef = useRef<HTMLCanvasElement>(null);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    if (loadingProgress < 100) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [loadingProgress]);

  useEffect(() => {
    if (!fgCanvasRef.current || !containerRef.current) return;

    const fgCtx = fgCanvasRef.current.getContext("2d");
    if (!fgCtx) return;

    // Load images
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    // We create a dummy object to animate the frame property
    const airpods = {
      frame: 1,
    };

    const render = () => {
      const frameNum = Math.floor(airpods.frame);
      const img = images[frameNum - 1];
      if (!img) return;

      const width = fgCanvasRef.current!.width;
      const height = fgCanvasRef.current!.height;

      // Render Foreground (cover)
      fgCtx.clearRect(0, 0, width, height);
      // Calculate cover dimensions
      const hRatio = width / img.width;
      const vRatio = height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (width - img.width * ratio) / 2;
      const centerShift_y = (height - img.height * ratio) / 2;

      fgCtx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio,
      );
    };

    // Preload images
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/assets/ezgif-frame-${paddedIndex}.webp`;
      images.push(img);

      img.onload = () => {
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / TOTAL_FRAMES) * 100));
        if (loadedCount === 1) {
          // Initial render
          render();
        }
      };
    }

    // Resize handler
    const handleResize = () => {
      // Foreground canvas
      if (fgCanvasRef.current) {
        fgCanvasRef.current.width = window.innerWidth;
        fgCanvasRef.current.height = window.innerHeight;
      }

      render();
    };

    // Set initial size
    handleResize();
    window.addEventListener("resize", handleResize);

    // Setup ScrollTrigger
    const scrollTrigger = gsap.to(airpods, {
      frame: TOTAL_FRAMES,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=800%",
        scrub: 1,
      },
      onUpdate: render, // Use requestAnimationFrame in production or direct call since scrub is already rAF driven by Lenis/GSAP
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      scrollTrigger.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Loading Overlay */}
      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark text-white transition-all duration-700 ease-in-out ${
          loadingProgress === 100
            ? "opacity-0 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <div className="flex flex-col items-center max-w-sm w-full px-6">
          <img
            src="/assets/images/logo.webp"
            alt="Cheetah Logo"
            className="h-16 w-auto mb-8 animate-pulse"
          />
          <div className="w-full bg-zinc-800 h-1 rounded-full overflow-hidden mb-4">
            <div
              className="bg-primary h-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <div className="flex justify-between w-full text-sm font-light text-zinc-400">
            <span>Loading Experience...</span>
            <span className="font-mono">{loadingProgress}%</span>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="relative h-[800vh] bg-dark">
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden flex items-center justify-center">
          {/* Logo */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 z-20">
            <img
              src="/assets/images/logo.webp"
              alt="Cheetah Logo"
              className="h-16 w-auto"
            />
          </div>

          {/* Foreground Canvas */}
          <canvas
            ref={fgCanvasRef}
            className="absolute top-0 left-0 w-full h-full object-cover block z-10 pointer-events-none"
          />
        </div>
      </div>
    </>
  );
};
