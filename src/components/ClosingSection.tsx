"use client";

import React from "react";

const ClosingSection = () => {
  const currentDate = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <footer className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 px-4 text-center overflow-hidden">
      {/* Very subtle ambient sparkles */}
      <div className="absolute inset-0 opacity-10">
        <div className="sparkle top-[15%] left-[25%] animate-sparkle" style={{ animationDuration: '5s' }} />
        <div className="sparkle top-[75%] right-[20%] animate-sparkle" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        <div className="sparkle top-[40%] left-[10%] animate-sparkle" style={{ animationDuration: '7s', animationDelay: '1s' }} />
      </div>

      <div className="max-w-2xl space-y-16 relative z-10">
        <h4 className="font-handwriting text-5xl md:text-8xl text-gold animate-fade-in drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
          Proud doesn’t begin <br /> to cover it.
        </h4>
        
        <div className="space-y-4 pt-16 animate-fade-in" style={{ animationDelay: '1.5s' }}>
          <p className="font-serif text-xl md:text-2xl text-slate-400 font-light tracking-[0.2em] italic opacity-60">
            With much love and admiration, Your Proud Brother,
          </p>
          <p className="font-handwriting text-4xl md:text-5xl text-slate-100 drop-shadow-md">
            Norman
          </p>
          <div className="pt-8">
            <p className="font-sans text-[10px] md:text-xs text-slate-600 tracking-[0.5em] uppercase">
              {currentDate}
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 opacity-5">
        <p className="text-[10px] tracking-[0.8em] uppercase text-slate-500 font-light">
          A Celebration of Growth and Grit
        </p>
      </div>
    </footer>
  );
};

export default ClosingSection;
