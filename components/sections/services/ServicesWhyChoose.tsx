'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Gem, Handshake, Sprout } from 'lucide-react';

const WHY_CHOOSE_ITEMS = [
  {
    id: 'customized-strategies',
    icon: Rocket,
    title: 'Customized Strategies',
    description: 'Solutions tailored to your business goals.',
  },
  {
    id: 'measurable-results',
    icon: Gem,
    title: 'Measurable Results',
    description: 'Real growth with data-driven insights.',
  },
  {
    id: 'affordable-pricing',
    icon: Handshake,
    title: 'Affordable Pricing',
    description: 'High-quality services at the right budget.',
  },
  {
    id: 'growth-focused',
    icon: Sprout,
    title: 'Growth Focused',
    description: 'We turn your vision into lasting success.',
  },
];

export const ServicesWhyChoose: React.FC = () => {
  return (
    <section
      className="relative bg-white dark:bg-[#0B1320] py-20 sm:py-24 overflow-hidden transition-colors duration-300"
      aria-labelledby="why-choose-services-heading"
    >
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Dark Container Box */}
        <div className="rounded-3xl bg-[#0B1320] border border-[#13243B] p-8 sm:p-12 lg:p-14 shadow-2xl text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Header Column (4 cols) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-4 flex flex-col border-b lg:border-b-0 lg:border-r border-[#13243B] pb-8 lg:pb-0 lg:pr-10"
            >
              <h2
                id="why-choose-services-heading"
                className="font-playfair text-3xl sm:text-4xl lg:text-[40px] font-bold text-white leading-tight mb-4"
              >
                Why Choose<br />
                <span className="text-brand-orange">BRANDNIX?</span>
              </h2>
              <p className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed">
                We don&apos;t just market — we build digital systems that grow your business.
              </p>
            </motion.div>

            {/* Right 4 Benefits Grid (8 cols) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {WHY_CHOOSE_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#13243B]/30 border border-[#13243B] hover:border-brand-orange/40 transition-colors group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="font-playfair text-base sm:text-lg font-bold text-white mb-1 group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesWhyChoose;
