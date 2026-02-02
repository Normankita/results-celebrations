"use client";

import React, { useEffect, useRef, useState } from "react";

const WordsThatMatter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const statements = [
    "Consistency beat pressure.",
    "Excellence is now a habit.",
    "This is proof.",
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[90vh] w-full flex flex-col items-center justify-center bg-[#010413] px-4 py-40 overflow-hidden"
    >
      {/* Background depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(30,64,175,0.05)_0%,transparent_70%)]" />
      
      <div className="max-w-5xl w-full space-y-12 text-center relative z-10">
        {statements.map((statement, index) => (
          <div 
            key={index}
            className="overflow-hidden py-2"
          >
            <h3 
              className={`font-serif text-4xl md:text-6xl lg:text-8xl text-white font-extralight transition-all duration-[2000ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}
              style={{ transitionDelay: isVisible ? `${index * 600}ms` : '0ms' }}
            >
              <span className={index === 1 ? "text-gradient-gold drop-shadow-[0_0_30px_rgba(251,191,36,0.1)]" : "opacity-90"}>
                {statement}
              </span>
            </h3>
          </div>
        ))}
      </div>

      {/* Subtle bottom gradient sweep */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-800 to-transparent opacity-20" />
    </section>
  );
};

export default WordsThatMatter;
