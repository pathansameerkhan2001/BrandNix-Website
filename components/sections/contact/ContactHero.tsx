'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  QuickResponseIllustration,
  ExpertConsultationIllustration,
  ConfidentialSafeIllustration,
  ResultDrivenIllustration,
} from '@/components/common/ContactIllustrations';

const HERO_BENEFITS = [
  {
    id: 'quick-response',
    title: 'Quick Response',
    desc: 'We reply within 24 business hours.',
    illustration: QuickResponseIllustration,
  },
  {
    id: 'expert-consultation',
    title: 'Expert Consultation',
    desc: 'Get free expert advice for your business.',
    illustration: ExpertConsultationIllustration,
  },
  {
    id: 'confidential-safe',
    title: 'Confidential & Safe',
    desc: 'Your information is 100% secure with us.',
    illustration: ConfidentialSafeIllustration,
  },
  {
    id: 'result-driven',
    title: 'Result Driven',
    desc: 'Solutions focused on real growth & ROI.',
    illustration: ResultDrivenIllustration,
  },
];

export const ContactHero: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 overflow-hidden transition-colors duration-300"
      aria-labelledby="contact-hero-heading"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-orange/[0.04] dark:bg-brand-orange/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Content & 4 Benefit Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-start text-left"
          >
            {/* 1. Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-5">
              <span>CONTACT US</span>
            </div>

            {/* 2. Main Heading */}
            <h1
              id="contact-hero-heading"
              className="font-playfair text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] 2xl:text-[60px] font-bold tracking-tight text-[#08111F] dark:text-white leading-[1.12] mb-5"
            >
              Let&apos;s Build Something<br />
              <span className="text-brand-orange">Amazing Together.</span>
            </h1>

            {/* 3. Supporting Copy */}
            <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
              Have a project in mind or need expert advice? We&apos;re here to help you grow, scale, and succeed.
            </p>

            {/* 4. 4 Hero Benefit Pillars */}
            <div className="grid grid-cols-2 gap-5 pt-6 border-t border-gray-200 dark:border-[#13243B]/60 w-full">
              {HERO_BENEFITS.map((item) => {
                const Illustration = item.illustration;
                return (
                  <div key={item.id} className="flex items-start gap-3 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/[0.12] to-white/90 dark:from-amber-500/[0.1] dark:to-[#13243B]/80 border border-brand-orange/25 flex items-center justify-center p-2 flex-shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                      <Illustration size={36} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-inter text-xs sm:text-sm font-bold text-[#08111F] dark:text-white leading-snug">
                        {item.title}
                      </span>
                      <span className="font-inter text-[11px] text-gray-500 dark:text-gray-400 mt-0.5 leading-tight">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT COLUMN: MacBook "Let's Connect" Dashboard Visual (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[620px] lg:max-w-[780px] xl:max-w-[900px] 2xl:max-w-[980px] select-none flex items-center justify-center lg:justify-end overflow-hidden rounded-2xl sm:rounded-3xl">
              <img
                src="/images/contact/brandnix-contact-hero.jpg"
                alt="Brandnix Digital Solutions Let's Connect Contact Setup"
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

export default ContactHero;
