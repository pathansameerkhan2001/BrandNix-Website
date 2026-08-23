'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Button from '@/components/common/Button';

export const ServicesCta: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#0B1320] pb-20 sm:pb-24 lg:pb-28 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Warm Orange-Tinted Pill Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl bg-gradient-to-r from-amber-500/10 via-brand-orange/15 to-amber-500/10 dark:from-[#13243B]/80 dark:to-[#0E1726]/90 border border-brand-orange/30 p-7 sm:p-9 lg:p-11 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left: Rocket Emblem + Headings */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl bg-brand-orange text-white flex items-center justify-center flex-shrink-0 shadow-brand-glow">
              <Rocket className="w-7 h-7" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B1320] dark:text-white leading-snug">
                Let&apos;s Build Something Amazing Together!
              </h2>
              <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                Ready to grow your brand and achieve your goals?
              </p>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold shadow-brand-glow"
            >
              Let&apos;s Get Started
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesCta;
