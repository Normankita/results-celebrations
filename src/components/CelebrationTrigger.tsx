"use client";

import React, { useState } from "react";
import Fireworks from "./Fireworks";

const CelebrationTrigger = () => {
  const [isCelebrating, setIsCelebrating] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false);

  const toggleCelebration = () => {
    setIsCelebrating(!isCelebrating);
  };

  return (
    <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center bg-[#01030d] px-4 py-32 overflow-hidden">
      <Fireworks active={isCelebrating} />
      
      {/* Ambient background particles - continuous celebration layer */}
      <div className="absolute inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="sparkle animate-sparkle" 
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.2
            }} 
          />
        ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center space-y-16">
        <button
          onClick={toggleCelebration}
          className={`px-14 py-6 rounded-full border font-serif text-2xl tracking-[0.25em] uppercase transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] glass
            ${isCelebrating 
              ? 'bg-gold/90 text-slate-950 scale-110 shadow-[0_0_80px_rgba(251,191,36,0.5)] border-transparent' 
              : 'text-gold/80 border-gold/20 hover:border-gold/60 hover:text-gold hover:shadow-[0_0_40px_rgba(251,191,36,0.2)] hover:scale-105'}`}
        >
          {isCelebrating ? "Victory is Theirs" : "Celebrate Their Victory"}
        </button>

        <div className="flex items-center space-y-4 flex-col">
          <p className="text-slate-600 text-[10px] tracking-[0.4em] uppercase font-light">Atmosphere Control</p>
          <button 
            onClick={() => setIsMusicOn(!isMusicOn)}
            className={`p-4 rounded-full glass border transition-all duration-700 ${isMusicOn ? 'text-white border-white/20 bg-white/5' : 'text-slate-500 border-transparent'}`}
          >
            {isMusicOn ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4V5z"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Disclaimer for music */}
      {isMusicOn && (
        <p className="absolute bottom-8 text-slate-600 text-[10px] tracking-widest uppercase animate-fade-in">
          Imagine a cinematic orchestral swell...
        </p>
      )}
    </section>
  );
};

export default CelebrationTrigger;
