"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import Link from "next/link";
import { useCallback } from "react";
import TrueFocus from "../components/TrueFocus/TrueFocus";

export default function HomePage() {
  const scrollToWithDuration = useCallback((targetId: string, duration = 500) => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const startY = window.scrollY;
    const targetY = element.getBoundingClientRect().top + startY;
    const diff = targetY - startY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const scroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutQuad(progress);
      window.scrollTo(0, startY + diff * ease);
      if (elapsed < duration) requestAnimationFrame(scroll);
    };

    requestAnimationFrame(scroll);
  }, []);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToWithDuration("projects", 500);
  };

  return (
    <div id="home" className="relative w-full min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">
      <BackgroundBeams />

      <motion.div className="relative z-10 text-center px-6" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        {/* Name and Role */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">Muhammad Habi</span>
        </h1>

        <div className="mb-8">
          <TrueFocus sentence="Fullstack Developer" manualMode={true} blurAmount={2} borderColor="cyan" animationDuration={0.7} pauseBetweenAnimations={1} />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            href="#projects"
            onClick={handleScrollToProjects}
            className="text-sm font-medium text-white rounded-xl bg-zinc-900/60 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 backdrop-blur-md p-3 px-4 flex items-center justify-center transition-all duration-300 shadow-md hover:shadow-cyan-400/20"
          >
            🚀 View Projects
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
