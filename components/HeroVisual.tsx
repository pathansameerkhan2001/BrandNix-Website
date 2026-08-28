'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  return (
    <div className="hero-visual relative w-full max-w-[460px] sm:max-w-[540px] md:max-w-[640px] lg:max-w-[880px] xl:max-w-[1020px] 2xl:max-w-[1140px] mx-auto flex items-center justify-center select-none overflow-visible bg-transparent lg:-translate-y-2 xl:-translate-y-4">
      {/* 
        Official Brandnix Growth Ecosystem Artwork:
        - 100% uncropped, native artwork with all 3D icons, labels, and orbital nodes fully visible
        - Zero black bars or background boxes in light mode; clean theme-aware visual presentation
        - Natural aspect ratio scaling on mobile and desktop without artificial height constraints
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex items-center justify-center pointer-events-none overflow-visible bg-transparent"
      >
        {/* Dark Theme Ecosystem Artwork (Desktop dark mode only) */}
        <img
          src="/images/brandnix-hero-ecosystem-clean.png"
          alt="Brandnix Digital Growth Ecosystem"
          className="hidden lg:dark:block w-full h-auto object-contain select-none bg-transparent"
          width={721}
          height={561}
          loading="eager"
          decoding="async"
        />

        {/* Light Theme Ecosystem Artwork (Mobile always & Desktop light mode) */}
        <img
          src="/images/brandnix-hero-ecosystem-light.png"
          alt="Brandnix Digital Growth Ecosystem"
          className="block lg:dark:hidden w-full h-auto object-contain select-none bg-transparent"
          width={924}
          height={556}
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  );
};

export default HeroVisual;
