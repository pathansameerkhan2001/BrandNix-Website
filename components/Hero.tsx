'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import HeroVisual from '@/components/HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0B1320] overflow-hidden pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-12 sm:pb-16 lg:pb-20 xl:pb-24 min-h-[660px] lg:min-h-[740px] xl:min-h-[780px] flex items-center transition-colors duration-300"
      aria-labelledby="hero-main-heading"
    >
      {/* Background ambient lighting for depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/5 dark:bg-brand-blue/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-brand-orange/[0.04] dark:bg-brand-orange/[0.08] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1620px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        {/*
          RESPONSIVE 2-COLUMN LAYOUT:
          - Desktop (lg:): 12-column grid with generous horizontal gap
          - Left 5 cols (~42%) = Content
          - Right 7 cols (~58%) = Enlarged Ecosystem Visual
          - Mobile / Tablet (<lg): Flex-column with order-1 for Ecosystem Visual, order-2 for Content
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
          
          {/* Visual Column:
              On Mobile: order-1 (appears immediately after Header)
              On Desktop: order-2 (occupies right 7 columns, enlarged prominent scale)
          */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full mb-8 sm:mb-10 lg:mb-0 flex justify-center">
            <HeroVisual />
          </div>

          {/* Content Column:
              On Mobile: order-2 (appears beneath Visual naturally)
              On Desktop: order-1 (occupies left 5 columns, upper-middle vertical alignment)
          */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start lg:-translate-y-8 xl:-translate-y-12 2xl:-translate-y-14"
          >
            {/* 1. Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50/80 dark:bg-[#13243B]/80 border border-amber-300/80 dark:border-brand-orange/40 text-[#D97706] dark:text-brand-warm mb-5 sm:mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase font-inter">
                DIGITAL SOLUTIONS THAT
              </span>
            </div>

            {/* 2. Main Headline (Playfair Display) */}
            <h1
              id="hero-main-heading"
              className="font-playfair text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.12] mb-5 sm:mb-6 select-none"
            >
              <span className="block text-[#0B1320] dark:text-white">
                Drive Growth.
              </span>
              <span className="block text-brand-orange mt-1 sm:mt-2">
                Build Brands.
              </span>
            </h1>

            {/* 3. Supporting Copy (Inter) */}
            <p className="font-inter text-base sm:text-lg xl:text-xl text-gray-600 dark:text-gray-300 max-w-xl font-normal leading-relaxed mb-7 sm:mb-9 text-center lg:text-left">
              We help businesses grow online with smart strategies, creative solutions and technology that delivers measurable results.
            </p>

            {/* 4. Single Primary CTA (Strictly ONLY Let's Talk →) */}
            <div className="flex justify-center lg:justify-start w-full">
              <Button
                href="#contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto text-base sm:text-lg font-bold px-8 sm:px-10 py-4 shadow-brand-glow"
              >
                Let&apos;s Talk
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
