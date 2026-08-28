'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[780px] lg:max-w-[920px] xl:max-w-[1040px] 2xl:max-w-[1140px] mx-auto flex items-center justify-center select-none lg:-translate-y-2 xl:-translate-y-4 overflow-visible">
      {/* 
        Official Brandnix Growth Ecosystem Artwork:
        - 100% uncropped, native artwork with all 3D icons, labels, and orbital nodes fully visible
        - Large, prominent scale matching dark theme proportions
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex items-center justify-center pointer-events-none overflow-visible"
      >
        {/* Dark Theme Ecosystem Artwork */}
        <img
          src="/images/brandnix-hero-ecosystem-clean.png"
          alt="Brandnix Digital Growth Ecosystem (Dark)"
          className="hidden dark:block w-full h-auto max-h-[220px] min-[375px]:max-h-[250px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[640px] xl:max-h-[760px] 2xl:max-h-[860px] object-contain"
          width={721}
          height={561}
          loading="eager"
          decoding="async"
        />

        {/* Light Theme Ecosystem Artwork (Full Scale, Crisp & Clean) */}
        <img
          src="/images/brandnix-hero-ecosystem-light.png"
          alt="Brandnix Digital Growth Ecosystem (Light)"
          className="block dark:hidden w-full h-auto max-h-[220px] min-[375px]:max-h-[250px] sm:max-h-[320px] md:max-h-[380px] lg:max-h-[640px] xl:max-h-[760px] 2xl:max-h-[860px] object-contain"
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
