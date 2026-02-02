"use client";

import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSubtext(true);
    }, 1500); // Delay for subtext
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-[#03081a] to-slate-950 overflow-hidden px-4 text-center">
      {/* Decorative Elements */}
      <div className="ambient-glow top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10" />
      <div className="ambient-glow bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10" />
      
      {/* Subtle Sparkles */}
      <div className="sparkle top-[20%] left-[15%] animate-sparkle" />
      <div className="sparkle top-[60%] left-[10%] animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="sparkle top-[30%] right-[15%] animate-sparkle" style={{ animationDelay: '1.5s' }} />
      <div className="sparkle bottom-[20%] right-[20%] animate-sparkle" style={{ animationDelay: '0.5s' }} />

      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full" />
      
      <h1 className="relative font-serif text-5xl md:text-7xl lg:text-9xl text-white font-light tracking-tight animate-fade-in drop-shadow-2xl">
        Today isn’t just <br className="md:hidden" /> about results.
      </h1>
      
      <div className={`mt-8 md:mt-12 transition-all duration-[2500ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${showSubtext ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="font-sans text-lg md:text-xl lg:text-2xl text-slate-400 font-light tracking-[0.3em] uppercase">
          It’s about discipline, sacrifice, and resilience.
        </p>
      </div>

      <div className="absolute bottom-12 animate-bounce opacity-20">
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-gold/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
