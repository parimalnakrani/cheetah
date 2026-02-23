import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { CheetahExperience } from "./components/CheetahExperience";
import { FirstLook } from "./components/FirstLook";
import { BuiltForSpeedCarousel } from "./components/BuiltForSpeedCarousel";
import { CinematicBanner } from "./components/CinematicBanner";
import { Essentials } from "./components/Essentials";
import { Footer } from "./components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-dark">
      <CheetahExperience />
      <FirstLook />
      <BuiltForSpeedCarousel />
      <CinematicBanner />
      <Essentials />
      <Footer />
    </div>
  );
}

export default App;
