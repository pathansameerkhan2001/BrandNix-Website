'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Compass, Rocket, TrendingUp } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'We learn about your business, goals and challenges.',
    icon: Search,
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'We create a smart, data-backed strategy just for you.',
    icon: Compass,
  },
  {
    step: '03',
    title: 'Execute',
    description: 'Our team brings the plan to life with precision and creativity.',
    icon: Rocket,
  },
  {
    step: '04',
    title: 'Grow',
    description: 'We optimize, improve and help your business grow consistently.',
    icon: TrendingUp,
  },
];

export const OurProcess: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white py-16 sm:py-20 lg:py-24 xl:py-28 overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-[#13243B]/40"
      aria-labelledby="our-process-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-orange/5 dark:bg-brand-blue/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-brand-orange/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            OUR PROCESS
          </div>
          <h2
            id="our-process-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1320] dark:text-white tracking-tight leading-tight"
          >
            Smart Solutions. <span className="text-brand-orange">Real Impact.</span>
          </h2>
        </motion.div>

        {/* 4-Step Process Timeline */}
        <div className="relative">
          
          {/* Desktop Connecting Dashed Line (Positioned through the middle of the numbered circles) */}
          <div
            className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-[1.5px] border-t-2 border-dashed border-gray-200 dark:border-gray-700/60 z-0 pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  {/* Step Number + Icon Badge */}
                  <div className="relative mb-6 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white dark:bg-[#0B1320] border-2 border-gray-200 dark:border-[#13243B] group-hover:border-brand-orange text-brand-orange flex items-center justify-center shadow-xs dark:shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-glow/30">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Small step number tag */}
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-amber-50 dark:bg-[#13243B] border border-amber-300 dark:border-brand-orange/40 text-[10px] font-bold text-brand-orange tracking-wider shadow-xs">
                      {step.step}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#0B1320] dark:text-white mb-2.5 group-hover:text-brand-orange transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-[240px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurProcess;
