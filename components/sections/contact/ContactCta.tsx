'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';
import Button from '@/components/common/Button';

export const ContactCta: React.FC = () => {
  return (
    <section className="relative bg-white dark:bg-[#08111F] py-20 sm:py-24 overflow-hidden transition-colors duration-300">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Dark Rounded CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-30px' }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-[#08111F] border border-[#13243B] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white"
        >
          {/* Left: 3D Laptop & Rocket Graphic + Content */}
          <div className="flex items-center gap-6 sm:gap-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-amber-500/20 to-brand-blue/20 border border-brand-orange/30 flex items-center justify-center flex-shrink-0 p-3 shadow-brand-glow/20">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                {/* Laptop Base */}
                <rect x="10" y="22" width="44" height="28" rx="3" fill="#0B1320" stroke="#334155" strokeWidth="1.5" />
                <rect x="13" y="25" width="38" height="22" rx="1.5" fill="#1E293B" />
                <path d="M4 50H60C61 50 62 50.8 61.5 52L60 55H4L2.5 52C2 50.8 3 50 4 50Z" fill="#64748B" />
                {/* 3D Launching Rocket Piercing Screen */}
                <g transform="translate(18, 4)">
                  <path d="M12 36C10 40 14 44 14 44C14 44 18 41 16 37Z" fill="#EF4444" />
                  <path d="M14 28L30 12C35 7 37 4 37 4C37 4 34 6 29 11L13 27C12 28 12 30 13 31L14 28Z" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1" />
                  <path d="M30 11C35 6 37 4 37 4C37 4 35 6 30 11Z" fill="#EF4444" />
                  <path d="M16 26L10 28L13 22Z" fill="#F59E0B" />
                  <path d="M26 16L28 10L22 13Z" fill="#F59E0B" />
                  <circle cx="25" cy="16" r="3" fill="#0284C7" />
                </g>
              </svg>
            </div>
            <div className="flex flex-col">
              <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
                Ready to <span className="text-brand-orange">Start Your Project?</span>
              </h2>
              <p className="font-inter text-xs sm:text-sm text-gray-300 mt-2 max-w-xl">
                Let&apos;s discuss your ideas and create a plan that drives real growth for your business.
              </p>
            </div>
          </div>

          {/* Right: Dual CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
            <Button
              href="#contact-form-section"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto px-8 py-4 text-base font-bold shadow-brand-glow"
            >
              Schedule a Free Consultation
            </Button>
            <Link
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-brand-orange transition-colors py-2 px-3"
            >
              <MessageSquare className="w-4 h-4 text-brand-orange" />
              <span>Or WhatsApp Us: +91 98765 43210</span>
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactCta;
