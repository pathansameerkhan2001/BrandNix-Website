'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Settings, CheckCircle2 } from 'lucide-react';

const SERVICES_LIST = [
  'Digital Marketing',
  'Website Development',
  'Social Media Management',
  'AI Solutions & Automation',
  'Branding & Design',
];

export const AboutWhoWhat: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0E1726] py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="who-what-heading"
    >
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8 xl:gap-10 items-stretch">
          
          {/* LEFT: WHO WE ARE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gray-50 dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] p-6 sm:p-8 xl:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center shadow-xs"
          >
            {/* Meeting Room Image */}
            <div className="w-full sm:w-[42%] h-52 sm:h-60 lg:h-68 flex-shrink-0 rounded-2xl overflow-hidden shadow-md border border-gray-200 dark:border-[#13243B]/80 bg-[#0B1320]">
              <img
                src="/images/about/brandnix-boardroom-card.png"
                alt="Brandnix Conference Room"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={480}
                height={290}
              />
            </div>

            {/* Who We Are Content */}
            <div className="w-full sm:w-[58%] flex flex-col justify-center">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B1320] dark:text-white">
                  Who <span className="text-brand-orange">We Are</span>
                </h3>
              </div>

              <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
                We are a team of creative thinkers, strategists, and tech enthusiasts who came together with one goal — to empower businesses with digital solutions that make a real difference.
              </p>
              <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                As a startup, we bring fresh ideas, personal attention, and unmatched dedication to every project we take.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: WHAT WE DO CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-3xl bg-gray-50 dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] p-6 sm:p-8 xl:p-10 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center shadow-xs"
          >
            {/* What We Do Content */}
            <div className="w-full sm:w-[55%] flex flex-col justify-center order-2 sm:order-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Settings className="w-4 h-4" />
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B1320] dark:text-white">
                  What <span className="text-brand-orange">We Do</span>
                </h3>
              </div>

              <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                We help businesses build their digital presence, attract the right audience, and achieve sustainable growth.
              </p>

              {/* Service Checklist */}
              <ul className="space-y-2">
                {SERVICES_LIST.map((srv) => (
                  <li key={srv} className="flex items-center gap-2 font-inter text-xs sm:text-sm font-medium text-[#0B1320] dark:text-gray-200">
                    <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0" />
                    <span>{srv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Laptop Dashboard Visual */}
            <div className="w-full sm:w-[45%] flex-shrink-0 flex items-center justify-center order-1 sm:order-2">
              <img
                src="/images/about/brandnix-laptop-card.png"
                alt="Brandnix Technology Solutions & Digital Marketing Dashboard"
                className="w-full h-auto max-h-56 sm:max-h-64 object-contain transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={560}
                height={291}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutWhoWhat;
