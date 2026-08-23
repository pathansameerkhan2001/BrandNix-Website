'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Star } from 'lucide-react';
import Button from '@/components/common/Button';

export const ServicesHero: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden transition-colors duration-300"
      aria-labelledby="services-hero-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-orange/[0.04] dark:bg-brand-orange/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Content & CTAs (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left"
          >
            {/* 1. Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-5">
              <span>DIGITAL GROWTH PARTNER</span>
            </div>

            {/* 2. Main Heading */}
            <h1
              id="services-hero-heading"
              className="font-playfair text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-bold tracking-tight text-[#0B1320] dark:text-white leading-[1.12] mb-5"
            >
              Smart Solutions<br />
              <span>That </span>
              <span className="text-brand-orange">Drive Real Growth</span>
            </h1>

            {/* 3. Supporting Copy */}
            <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-xl">
              From strategy to execution, we provide end-to-end digital solutions to help businesses grow, scale and succeed in the digital world.
            </p>

            {/* 4. Three Benefits Checklist */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 mb-8">
              <div className="flex items-center gap-1.5 font-inter text-xs sm:text-sm font-semibold text-[#0B1320] dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Scale Faster</span>
              </div>
              <div className="flex items-center gap-1.5 font-inter text-xs sm:text-sm font-semibold text-[#0B1320] dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Reach More Customers</span>
              </div>
              <div className="flex items-center gap-1.5 font-inter text-xs sm:text-sm font-semibold text-[#0B1320] dark:text-gray-200">
                <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Build a Strong Online Brand</span>
              </div>
            </div>

            {/* 5. Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              <Button
                href="/#contact"
                variant="primary"
                size="lg"
                className="px-7 sm:px-8 py-3.5 text-sm sm:text-base font-bold shadow-brand-glow"
              >
                Get Started
              </Button>
              <Button
                href="#core-services"
                variant="outline"
                size="lg"
                className="px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold border-gray-300 dark:border-[#13243B] text-[#0B1320] dark:text-white hover:border-brand-orange hover:text-brand-orange"
              >
                Explore Services
              </Button>
            </div>

            {/* 6. Trust Indicators */}
            <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200 dark:border-[#13243B]/60 font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <span className="font-bold text-[#0B1320] dark:text-white">4.9/5</span>
              <span>Client Satisfaction</span>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <span className="font-semibold text-[#0B1320] dark:text-white">100+ Successful Projects</span>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Enlarged Hero Visual occupying full right half (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[620px] lg:max-w-[780px] xl:max-w-[900px] 2xl:max-w-[980px] select-none flex items-center justify-center lg:justify-end overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="/images/services/brandnix-services-hero-large.jpg"
                alt="Brandnix Digital Growth Analytics Dashboard, MacBook, and Strategy Setup"
                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                width={1024}
                height={682}
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
