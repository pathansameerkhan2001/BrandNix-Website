'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';
import Button from '@/components/common/Button';

export const AboutCta: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#0E1726] pb-20 sm:pb-24 lg:pb-28 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Dark Rounded CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl sm:rounded-3xl bg-[#0B1320] border border-[#13243B] p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          {/* Left: Rocket Icon + Text */}
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-brand-orange flex items-center justify-center flex-shrink-0 shadow-brand-glow/20">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-inter text-xs sm:text-sm text-gray-300">
                We’re just getting started.
              </span>
              <span className="font-playfair text-lg sm:text-xl lg:text-2xl font-bold text-white leading-snug">
                Let’s build something amazing together.
              </span>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="flex-shrink-0 w-full sm:w-auto">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full sm:w-auto px-7 py-3.5 text-sm sm:text-base font-bold shadow-brand-glow"
            >
              Let’s Work Together
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutCta;
