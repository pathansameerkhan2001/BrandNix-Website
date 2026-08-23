'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Understand',
    desc: 'We listen, research, and analyze your business, goals, and audience.',
  },
  {
    step: '02',
    title: 'Plan',
    desc: 'We create a customized strategy and roadmap tailored to your needs.',
  },
  {
    step: '03',
    title: 'Design',
    desc: 'Our team designs creative and effective solutions that align with your brand.',
  },
  {
    step: '04',
    title: 'Execute',
    desc: 'We implement the plan with precision, using the latest tools and trends.',
  },
  {
    step: '05',
    title: 'Optimize',
    desc: 'We monitor performance and optimize continuously for better results.',
  },
  {
    step: '06',
    title: 'Deliver Results',
    desc: 'We deliver measurable outcomes that drive growth and long-term success.',
  },
];

export const PackagesProcess: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white py-20 sm:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="packages-process-heading"
    >
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <h2
            id="packages-process-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1320] dark:text-white mb-3"
          >
            Our <span className="text-brand-orange">Proven Process</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
            A Strategic Approach to Deliver Exceptional Results
          </p>
        </motion.div>

        {/* 6-Step Horizontal Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {PROCESS_STEPS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50 dark:bg-[#13243B]/25 border border-gray-200/70 dark:border-[#13243B] relative group hover:border-brand-orange/40 transition-colors"
            >
              {/* Number Badge */}
              <div className="w-10 h-10 rounded-full bg-brand-orange text-white font-bold font-inter text-sm flex items-center justify-center mb-3.5 shadow-brand-glow/30 group-hover:scale-110 transition-transform">
                {item.step}
              </div>

              {/* Title */}
              <h3 className="font-playfair text-base font-bold text-[#0B1320] dark:text-white mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="font-inter text-xs text-gray-500 dark:text-gray-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PackagesProcess;
