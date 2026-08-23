'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Target, Users, ShieldCheck } from 'lucide-react';
import Button from '@/components/common/Button';

const VALUE_POINTS = [
  {
    id: 'customized',
    icon: Settings,
    title: 'Customized Solutions',
    desc: 'Tailored to your goals and industry.',
  },
  {
    id: 'result-oriented',
    icon: Target,
    title: 'Result Oriented',
    desc: 'Strategies that deliver measurable growth.',
  },
  {
    id: 'expert-team',
    icon: Users,
    title: 'Expert Team',
    desc: 'Skilled professionals by your side.',
  },
  {
    id: 'support',
    icon: ShieldCheck,
    title: 'End-to-End Support',
    desc: 'From planning to execution and beyond.',
  },
];

export const PackagesHero: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden transition-colors duration-300"
      aria-labelledby="packages-hero-heading"
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
              <span>PACKAGES</span>
            </div>

            {/* 2. Main Heading */}
            <h1
              id="packages-hero-heading"
              className="font-playfair text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-bold tracking-tight text-[#0B1320] dark:text-white leading-[1.12] mb-5"
            >
              Choose the Right Package<br />
              <span className="text-brand-orange">Fuel Your Growth</span>
            </h1>

            {/* 3. Supporting Copy */}
            <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 max-w-xl">
              Powerful, result-driven packages designed to help businesses build a strong digital presence, engage their audience, and achieve sustainable growth.
            </p>

            {/* 4. Action Buttons */}
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
                href="#all-packages"
                variant="outline"
                size="lg"
                className="px-7 sm:px-8 py-3.5 text-sm sm:text-base font-semibold border-gray-300 dark:border-[#13243B] text-[#0B1320] dark:text-white hover:border-brand-orange hover:text-brand-orange"
              >
                Explore Packages
              </Button>
            </div>

            {/* 5. 4 Value Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-[#13243B]/60 w-full">
              {VALUE_POINTS.map((pt) => {
                const Icon = pt.icon;
                return (
                  <div key={pt.id} className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-inter text-xs sm:text-sm font-bold text-[#0B1320] dark:text-white">
                        {pt.title}
                      </span>
                      <span className="font-inter text-[11px] text-gray-500 dark:text-gray-400">
                        {pt.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: MacBook Dashboard Analytics Visual (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[620px] lg:max-w-[780px] xl:max-w-[900px] 2xl:max-w-[980px] select-none flex items-center justify-center lg:justify-end overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="/images/packages/brandnix-packages-hero.jpg"
                alt="Brandnix Digital Growth Packages Dashboard Setup"
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

export default PackagesHero;
