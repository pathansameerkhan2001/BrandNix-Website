'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const HeroVisual: React.FC = () => {
  return (
    <div className="relative w-full max-w-[720px] lg:max-w-[880px] xl:max-w-[1020px] 2xl:max-w-[1140px] mx-auto flex items-center justify-center select-none lg:-translate-y-2 xl:-translate-y-4 overflow-visible bg-transparent">
      {/* 
        Official Brandnix Growth Ecosystem Artwork:
        - 100% uncropped, native artwork with all 3D icons, labels, and orbital nodes fully visible
        - Zero black bars or background boxes in light mode; clean theme-aware visual presentation
        - Specific target heights:
          • 320–360px viewport: image area around 220–250px
          • 375–430px viewport: image area around 240–280px
          • Tablet / Desktop: scales fluidly to full scale
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full flex items-center justify-center pointer-events-none overflow-visible bg-transparent"
      >
        {/* Dark Theme Ecosystem Artwork */}
        <img
          src="/images/brandnix-hero-ecosystem-clean.png"
          alt="Brandnix Digital Growth Ecosystem"
          className="hidden dark:block w-full h-auto max-h-[225px] min-[360px]:max-h-[240px] min-[375px]:max-h-[255px] min-[414px]:max-h-[275px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[600px] xl:max-h-[720px] 2xl:max-h-[820px] object-contain select-none bg-transparent"
          width={721}
          height={561}
          loading="eager"
          decoding="async"
        />

        {/* Light Theme Ecosystem Artwork (Full Scale, Crisp & Clean with Zero Black Bars) */}
        <img
          src="/images/brandnix-hero-ecosystem-light.png"
          alt="Brandnix Digital Growth Ecosystem"
          className="block dark:hidden w-full h-auto max-h-[225px] min-[360px]:max-h-[240px] min-[375px]:max-h-[255px] min-[414px]:max-h-[275px] sm:max-h-[340px] md:max-h-[420px] lg:max-h-[600px] xl:max-h-[720px] 2xl:max-h-[820px] object-contain select-none bg-transparent"
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
