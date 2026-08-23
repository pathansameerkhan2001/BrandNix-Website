'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Search, HeartHandshake, Lightbulb, Headphones } from 'lucide-react';

const WHY_CHOOSE_ITEMS = [
  {
    id: 'exp-team',
    icon: Users,
    title: 'Experienced Team',
    desc: 'Skilled professionals with years of industry experience.',
  },
  {
    id: 'data-driven',
    icon: TrendingUp,
    title: 'Data-Driven Approach',
    desc: 'We make decisions backed by data and real insights.',
  },
  {
    id: 'transparent',
    icon: Search,
    title: 'Transparent Process',
    desc: 'Clear communication and honest reporting at every step.',
  },
  {
    id: 'client-centric',
    icon: HeartHandshake,
    title: 'Client-Centric',
    desc: 'Your success is our priority. We grow when you grow.',
  },
  {
    id: 'innovative',
    icon: Lightbulb,
    title: 'Innovative Solutions',
    desc: 'We use the latest tools, techniques, and creativity.',
  },
  {
    id: 'support',
    icon: Headphones,
    title: 'Reliable Support',
    desc: 'We’re always here to support you, whenever you need us.',
  },
];

export const PackagesWhyChoose: React.FC = () => {
  return (
    <section
      className="relative bg-gray-50 dark:bg-[#0E1726] text-[#0B1320] dark:text-white py-20 sm:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="packages-why-choose-heading"
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
            id="packages-why-choose-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1320] dark:text-white"
          >
            Why Choose <span className="text-brand-orange">Brandnix?</span>
          </h2>
        </motion.div>

        {/* 6-Column / 3-Column Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.06 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] hover:border-brand-orange/40 transition-colors group shadow-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center mb-3.5 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-playfair text-sm sm:text-base font-bold text-[#0B1320] dark:text-white mb-1.5 group-hover:text-brand-orange transition-colors">
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

export default PackagesWhyChoose;
