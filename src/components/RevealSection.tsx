"use client";

import React, { useEffect, useRef, useState } from "react";

const RevealSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sisters = [
    { name: "Light Leonard Kita", result: "Division One", delay: "0ms" },
    { name: "Catherine Godbless Kisanga", result: "Division One", delay: "0ms" },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 px-4 py-32 overflow-hidden"
    >
      {/* Decorative Sparkles */}
      <div className="sparkle top-[10%] left-[20%] animate-sparkle" />
      <div className="sparkle top-[40%] right-[10%] animate-sparkle" style={{ animationDelay: '1.2s' }} />
      <div className="sparkle bottom-[30%] left-[10%] animate-sparkle" style={{ animationDelay: '0.8s' }} />
      <div className="sparkle bottom-[10%] right-[30%] animate-sparkle" style={{ animationDelay: '2s' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 max-w-7xl w-full relative z-10">
        {sisters.map((sister, index) => (
          <div 
            key={index}
            className={`flex flex-col items-center text-center transition-all duration-[2500ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{ transitionDelay: isVisible ? `${index * 400}ms` : '0ms' }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-white font-extralight tracking-tight mb-8 drop-shadow-lg">
              {sister.name}
            </h2>
            <div className="relative group">
              <p className="text-lg md:text-xl text-slate-400 font-light tracking-[0.2em] uppercase mb-4 opacity-70">
                Result: <span className="text-gold opacity-100">{sister.result}</span>
              </p>
              <div 
                className={`h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent shadow-[0_0_20px_rgba(251,191,36,0.3)] transition-all duration-[3000ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? 'w-full scale-x-100' : 'w-0 scale-x-0'}`}
                style={{ transitionDelay: isVisible ? `${index * 400 + 1000}ms` : '0ms' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RevealSection;
