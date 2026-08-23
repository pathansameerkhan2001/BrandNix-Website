'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/Button';

export const PackagesCta: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#0B1320] py-20 sm:py-24 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Dark Rounded CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#0B1320] border border-[#13243B] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white"
        >
          {/* Left: Rocket Emblem & Content */}
          <div className="flex items-center gap-5 sm:gap-7">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-orange text-white flex items-center justify-center flex-shrink-0 shadow-brand-glow">
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Ready to Take Your Business to the <span className="text-brand-orange">Next Level?</span>
              </h2>
              <p className="font-inter text-xs sm:text-sm text-gray-300 mt-2 max-w-xl">
                Let&apos;s build something amazing together. Choose a package and start your growth journey today!
              </p>
            </div>
          </div>

          {/* Right: Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold shadow-brand-glow"
            >
              Let&apos;s Get Started
            </Button>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-brand-orange transition-colors py-2 px-3"
            >
              <MessageSquare className="w-4 h-4 text-brand-orange" />
              <span>Or WhatsApp Us</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default PackagesCta;
