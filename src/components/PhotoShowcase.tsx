"use client";

import React from "react";
import Image from "next/image";

const PhotoShowcase = () => {
  const photos = [
    {
      src: "/images/light.jpeg",
      alt: "Light's Celebration",
      title: "Vision & Grace",
    },
    {
      src: "/images/Cathy.jpeg",
      alt: "Cathy's Celebration",
      title: "Strength & Excellence",
    },
  ];

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center bg-slate-950 py-32 px-4 overflow-hidden">
      {/* Decorative Glows */}
      <div className="ambient-glow top-[20%] right-[-5%] w-[30%] h-[30%] bg-blue-500/5 rotate-12" />
      <div className="ambient-glow bottom-[20%] left-[-5%] w-[35%] h-[35%] bg-gold/5 -rotate-12" />

      <div className="max-w-7xl w-full relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-8">
        {/* Light's Photo */}
        <div className="flex-1 w-full order-1 md:order-1 flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] glass rounded-[2.5rem] p-5 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.03] animate-float">
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
              <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" sizes="50vw" priority />
            </div>
          </div>
          <p className="mt-6 md:hidden font-serif text-xl text-slate-500 tracking-widest uppercase opacity-40">Light</p>
        </div>

        {/* Central Titles - Shared Parity */}
        <div className="order-2 md:order-2 flex flex-col items-center justify-center text-center space-y-8 md:px-8 py-12 md:py-0">
          <div className="h-24 w-[1px] bg-gradient-to-b from-transparent via-gold/40 to-transparent hidden md:block" />
          
          <div className="space-y-6 relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full animate-pulse" />
            
            <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold font-light tracking-tight leading-none italic animate-glow">
              Vision & Grace
            </h4>
            
            <div className="flex items-center justify-center space-x-4 opacity-20">
              <div className="h-[1px] w-8 bg-gold" />
              <div className="w-1.5 h-1.5 border border-gold rounded-full rotate-45" />
              <div className="h-[1px] w-8 bg-gold" />
            </div>

            <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gradient-gold font-light tracking-tight leading-none italic animate-glow" style={{ animationDelay: '1.5s' }}>
              Strength & Excellence
            </h4>

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1 h-1 bg-gold rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <p className="font-sans text-[10px] tracking-[0.6em] uppercase text-slate-600 mt-12 hidden md:block opacity-60">
            A Journey Shared
          </p>

          <div className="h-24 w-[1px] bg-gradient-to-t from-transparent via-gold/40 to-transparent hidden md:block" />
        </div>

        {/* Catherine's Photo */}
        <div className="flex-1 w-full order-3 md:order-3 flex flex-col items-center">
          <div className="relative w-full aspect-[4/5] glass rounded-[2.5rem] p-5 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.03] animate-float" style={{ animationDelay: '2s' }}>
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-transparent opacity-50" />
            <div className="relative w-full h-full overflow-hidden rounded-[2rem]">
              <Image src={photos[1].src} alt={photos[1].alt} fill className="object-cover group-hover:scale-110 transition-transform duration-[2000ms]" sizes="50vw" />
            </div>
          </div>
          <p className="mt-6 md:hidden font-serif text-xl text-slate-500 tracking-widest uppercase opacity-40">Catherine</p>
        </div>
      </div>
    </section>
  );
};

export default PhotoShowcase;
