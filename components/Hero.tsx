'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';
import HeroVisual from '@/components/HeroVisual';

export const Hero: React.FC = () => {
  return (
    <section
      className="relative bg-[#F8F9FB] sm:bg-white lg:dark:bg-[#0B1320] overflow-x-clip pt-4 sm:pt-6 lg:pt-8 xl:pt-10 pb-8 sm:pb-12 lg:pb-16 xl:pb-20 min-h-0 lg:min-h-[680px] xl:min-h-[740px] flex items-center transition-colors duration-200"
      aria-labelledby="hero-main-heading"
    >
      {/* Background ambient lighting for depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-orange/[0.04] lg:dark:bg-brand-blue/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[350px] sm:w-[500px] h-[350px] sm:h-[500px] bg-brand-orange/[0.03] lg:dark:bg-brand-orange/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1620px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full relative z-10">
        {/*
          RESPONSIVE 2-COLUMN / VERTICAL FLOW:
          - Desktop (lg:): 12-column grid (Left 5 cols = Content, Right 7 cols = Visual)
          - Mobile / Tablet (<lg): Normal vertical flow (order-1 = Visual, order-2 = Content)
        */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
          
          {/* 1. Visual Column:
              On Mobile: order-1 (appears immediately after Header, fully contained, natural aspect ratio)
              On Desktop: order-2 (occupies right 7 columns)
          */}
          <div className="order-1 lg:order-2 lg:col-span-7 w-full mb-6 sm:mb-8 lg:mb-0 flex justify-center">
            <HeroVisual />
          </div>

          {/* 2. Content Column:
              On Mobile: order-2 (appears underneath Visual with normal vertical flow)
              On Desktop: order-1 (occupies left 5 columns)
          */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start lg:-translate-y-4 xl:-translate-y-8"
          >
            {/* A. Eyebrow Badge (Appears AFTER hero image with 24-32px spacing) */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 min-[375px]:px-3.5 min-[375px]:py-1.5 rounded-full bg-amber-50/90 lg:dark:bg-[#13243B]/80 border border-amber-300/70 lg:dark:border-brand-orange/40 text-[#D97706] lg:dark:text-brand-warm mb-6 sm:mb-7 lg:mb-4 shadow-xs select-none">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-orange animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-[10px] min-[375px]:text-xs font-bold tracking-[0.14em] min-[375px]:tracking-[0.2em] uppercase font-inter whitespace-nowrap">
                DIGITAL SOLUTIONS THAT
              </span>
            </div>

            {/* B. Main Headline - Completely independent normal flex flow */}
            <h1
              id="hero-main-heading"
              className="font-playfair text-[40px] min-[360px]:text-[44px] min-[375px]:text-[48px] min-[414px]:text-[52px] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] sm:leading-[1.12] mb-5 sm:mb-6 lg:mb-5 select-none"
            >
              <span className="block text-[#0B1320] lg:dark:text-white">
                Drive Growth.
              </span>
              <span className="block text-brand-orange mt-0.5 sm:mt-1">
                Build Brands.
              </span>
            </h1>

            {/* C. Supporting Description - Clean mobile readability */}
            <p className="font-inter text-base min-[375px]:text-[17px] sm:text-lg lg:text-lg xl:text-xl text-[#475569] lg:dark:text-gray-300 max-w-[360px] sm:max-w-xl font-normal leading-[1.6] mb-7 sm:mb-8 lg:mb-8 text-center lg:text-left">
              We help businesses grow online with smart strategies, creative solutions and technology that delivers measurable results.
            </p>

            {/* D. Primary CTA (Let's Talk →) */}
            <div className="w-full max-w-[360px] sm:max-w-none px-4 sm:px-0 flex justify-center lg:justify-start">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] sm:min-h-[56px] text-base sm:text-lg font-bold px-8 sm:px-10 py-3.5 sm:py-4 shadow-brand-glow rounded-xl"
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
