'use client';

import React from 'react';
import { Target, Lightbulb, Cog, TrendingUp, Rocket } from 'lucide-react';

const BENEFITS = [
  {
    id: 'strategy',
    icon: Target,
    title: 'Strategy',
    subtitle: 'That Works',
  },
  {
    id: 'creative',
    icon: Lightbulb,
    title: 'Creative',
    subtitle: 'Design',
  },
  {
    id: 'automation',
    icon: Cog,
    title: 'Smart',
    subtitle: 'Automation',
  },
  {
    id: 'conversions',
    icon: TrendingUp,
    title: 'Higher',
    subtitle: 'Conversions',
  },
  {
    id: 'growth',
    icon: Rocket,
    title: 'Long-Term',
    subtitle: 'Growth',
  },
];

export const ServicesBenefitStrip: React.FC = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-[#0E1726] border-y border-gray-200/80 dark:border-[#13243B] py-8 transition-colors duration-300">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-0 lg:divide-x lg:divide-gray-200 dark:lg:divide-[#13243B]">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex items-center gap-3.5 px-0 lg:px-6 xl:px-8 first:pl-0 last:pr-0 group justify-center sm:justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-playfair text-sm sm:text-base font-bold text-[#0B1320] dark:text-white leading-tight">
                    {item.title}
                  </span>
                  <span className="font-inter text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {item.subtitle}
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

export default ServicesBenefitStrip;
