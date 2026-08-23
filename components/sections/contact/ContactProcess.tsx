'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ListenUnderstandIllustration,
  ResearchAnalyzeIllustration,
  PlanStrategizeIllustration,
  ExecuteDeliverIllustration,
  MeasureOptimizeIllustration,
  GrowthScaleIllustration,
} from '@/components/common/ContactIllustrations';

const IMPACT_STEPS = [
  {
    step: '01',
    title: 'Listen & Understand',
    desc: 'We learn about your goals, challenges, and target audience.',
    illustration: ListenUnderstandIllustration,
  },
  {
    step: '02',
    title: 'Research & Analyze',
    desc: 'We dive deep into your industry, competitors, and market opportunities.',
    illustration: ResearchAnalyzeIllustration,
  },
  {
    step: '03',
    title: 'Plan & Strategize',
    desc: 'We create a customized strategy and roadmap tailored for your business.',
    illustration: PlanStrategizeIllustration,
  },
  {
    step: '04',
    title: 'Execute & Deliver',
    desc: 'Our expert team brings the plan to life with precision and creativity.',
    illustration: ExecuteDeliverIllustration,
  },
  {
    step: '05',
    title: 'Measure & Optimize',
    desc: 'We track performance, analyze data, and optimize for maximum growth.',
    illustration: MeasureOptimizeIllustration,
  },
  {
    step: '06',
    title: 'Growth & Scale',
    desc: 'We help you scale sustainably and achieve long-term success.',
    illustration: GrowthScaleIllustration,
  },
];

export const ContactProcess: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white py-20 sm:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="contact-process-heading"
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
            id="contact-process-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111F] dark:text-white mb-3"
          >
            How We <span className="text-brand-orange">Create Impact</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
            A simple, transparent process to deliver exceptional results.
          </p>
        </motion.div>

        {/* 6-Step Horizontal Roadmap */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
          {IMPACT_STEPS.map((item, idx) => {
            const Illustration = item.illustration;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-gray-50 dark:bg-[#13243B]/25 border border-gray-200/70 dark:border-[#13243B] relative group hover:border-brand-orange/40 hover:-translate-y-1 transition-all shadow-xs"
              >
                {/* 3D Illustration Container */}
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#0B1320] border border-brand-orange/25 flex items-center justify-center p-2 mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  <Illustration size={38} className="w-full h-full object-contain" />
                </div>

                {/* Step Badge */}
                <div className="w-7 h-7 rounded-full bg-brand-orange text-white font-bold font-inter text-xs flex items-center justify-center mb-2.5 shadow-brand-glow/30">
                  {item.step}
                </div>

                {/* Title */}
                <h3 className="font-playfair text-base font-bold text-[#08111F] dark:text-white mb-1.5 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
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

export default ContactProcess;
