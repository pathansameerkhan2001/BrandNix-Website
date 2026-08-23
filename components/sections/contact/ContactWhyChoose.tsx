'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  NoFalsePromisesIllustration,
  TailoredForYouIllustration,
  TransparentCommIllustration,
  GrowthFocusedIllustration,
  CreativeInnovativeIllustration,
  ReliableDedicatedIllustration,
} from '@/components/common/ContactIllustrations';

const WHY_CHOOSE_ITEMS = [
  {
    id: 'no-false-promises',
    title: 'No False Promises',
    desc: 'We believe in realistic strategies and measurable results.',
    illustration: NoFalsePromisesIllustration,
  },
  {
    id: 'tailored-for-you',
    title: 'Tailored for You',
    desc: 'Every solution is customized to match your unique business goals.',
    illustration: TailoredForYouIllustration,
  },
  {
    id: 'transparent-comm',
    title: 'Transparent Communication',
    desc: 'Clear updates, honest reporting, and complete visibility at every step.',
    illustration: TransparentCommIllustration,
  },
  {
    id: 'growth-focused',
    title: 'Growth-Focused Approach',
    desc: 'We focus on what matters most — driving growth and maximizing ROI.',
    illustration: GrowthFocusedIllustration,
  },
  {
    id: 'creative-innovative',
    title: 'Creative & Innovative',
    desc: 'Fresh ideas and smart strategies that make your brand stand out.',
    illustration: CreativeInnovativeIllustration,
  },
  {
    id: 'reliable-dedicated',
    title: 'Reliable & Dedicated',
    desc: 'A dedicated team that works like an extension of your business.',
    illustration: ReliableDedicatedIllustration,
  },
];

export const ContactWhyChoose: React.FC = () => {
  return (
    <section
      className="relative bg-gray-50 dark:bg-[#0E1726] text-[#08111F] dark:text-white py-20 sm:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="contact-why-choose-heading"
    >
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2
            id="contact-why-choose-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111F] dark:text-white"
          >
            Why Businesses Choose <span className="text-brand-orange">Brandnix</span>
          </h2>
        </motion.div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Illustration = item.illustration;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] hover:border-brand-orange/40 hover:-translate-y-1 transition-all group shadow-xs"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/[0.12] to-white/90 dark:from-amber-500/[0.1] dark:to-[#13243B]/80 border border-brand-orange/25 flex items-center justify-center p-2 mb-3.5 group-hover:scale-110 transition-transform">
                  <Illustration size={38} className="w-full h-full object-contain" />
                </div>
                <h3 className="font-playfair text-sm sm:text-base font-bold text-[#08111F] dark:text-white mb-1.5 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>
                <p className="font-inter text-xs text-gray-500 dark:text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ContactWhyChoose;
