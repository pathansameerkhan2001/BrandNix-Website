'use client';

import React from 'react';
import { Rocket, Target, Users, Clock } from 'lucide-react';

const TRUST_ITEMS = [
  {
    id: 'result-driven',
    icon: Rocket,
    title: 'Result Driven',
    description: 'We focus on what matters.',
  },
  {
    id: 'tailored-solutions',
    icon: Target,
    title: 'Tailored Solutions',
    description: 'Custom strategies for your business.',
  },
  {
    id: 'expert-team',
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled professionals at your service.',
  },
  {
    id: 'transparent-process',
    icon: Clock,
    title: 'Transparent Process',
    description: 'Dedicated to your growth.',
  },
];

export const ServicesTrustStrip: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#0E1726] border-y border-gray-200/80 dark:border-[#13243B] py-6 sm:py-7 transition-colors duration-300">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200 dark:lg:divide-[#13243B]">
          {TRUST_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3.5 px-0 lg:px-6 xl:px-8 first:pl-0 last:pr-0 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair text-sm sm:text-base font-bold text-[#0B1320] dark:text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesTrustStrip;
