'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/common/Button';

export const CtaSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="relative bg-white dark:bg-[#0B1320] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-[#13243B]/40"
      aria-labelledby="cta-section-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full relative z-10">
        <div className="rounded-3xl bg-gray-50/90 dark:bg-[#0E1726] border border-gray-200/80 dark:border-[#13243B] overflow-hidden shadow-xl lg:grid lg:grid-cols-12 items-center">
          
          {/* LEFT COLUMN: Content & CTA (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-10 lg:p-12 xl:p-14 lg:col-span-7 flex flex-col items-start"
          >
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4 sm:mb-5">
              <span>READY TO GROW YOUR BUSINESS?</span>
            </div>

            {/* 2. Headline */}
            <h2
              id="cta-section-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1320] dark:text-white leading-[1.15] tracking-tight mb-4 sm:mb-5"
            >
              Let&apos;s Build Something<br />
              <span>Exceptional </span>
              <span className="text-brand-orange">Together.</span>
            </h2>

            {/* 3. Supporting Text */}
            <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Tell us about your project and let&apos;s create something impactful together.
            </p>

            {/* 4. Primary Action Button */}
            <div className="w-full sm:w-auto">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto min-h-[52px] px-8 sm:px-10 py-3.5 sm:py-4 text-base font-bold shadow-brand-glow rounded-xl"
              >
                Get In Touch
              </Button>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Diagonal / Curved Brandnix Desk Visual (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[320px] relative overflow-hidden bg-[#0B1320]"
          >
            <img
              src="/images/brandnix-workspace-mission.jpg"
              alt="Brandnix Digital Strategy & Growth Workspace"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            {/* Subtle inner gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-50/40 dark:from-[#0E1726]/60 via-transparent to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CtaSection;
