'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target, Handshake, Headphones } from 'lucide-react';

interface ReasonItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const REASONS: ReasonItem[] = [
  {
    id: 'results',
    title: 'Results That Matter',
    description: 'Real strategies. Real people. Real results that impact your bottom line.',
    icon: Award,
  },
  {
    id: 'transparent',
    title: 'Transparent & Honest',
    description: 'Clear communication, honest reporting and complete transparency.',
    icon: Target,
  },
  {
    id: 'partnership',
    title: 'Growth Partnership',
    description: 'We grow when you grow. Long-term partnership is our priority.',
    icon: Handshake,
  },
  {
    id: 'support',
    title: 'Dedicated Support',
    description: 'We&apos;re always here when you need us, before, during and after the project.',
    icon: Headphones,
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      className="relative bg-gray-50/80 dark:bg-[#0E1726] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300 border-y border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="why-choose-us-heading"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            WHY BUSINESSES CHOOSE BRANDNIX
          </div>
          <h2
            id="why-choose-us-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1320] dark:text-white tracking-tight"
          >
            We Focus on <span className="text-brand-orange">What Matters Most</span>
          </h2>
        </motion.div>

        {/* 4 Feature Columns with circular icons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-8">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Dual Theme Icon */}
                <div className="w-14 h-14 rounded-full bg-white dark:bg-[#0B1320] text-brand-orange border border-amber-200/90 dark:border-brand-orange/20 shadow-xs dark:shadow-md flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-brand-orange/50 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Title */}
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#0B1320] dark:text-white mb-2 leading-snug group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-[240px]">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
