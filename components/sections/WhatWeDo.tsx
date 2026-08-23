'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Megaphone, Share2, TrendingUp, PenTool } from 'lucide-react';
import Button from '@/components/common/Button';

interface ServiceCardItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const SERVICES: ServiceCardItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    description: 'Modern, fast and SEO-friendly websites that convert visitors into customers.',
    icon: Code2,
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven campaigns that boost visibility, generate leads and grow your brand.',
    icon: Megaphone,
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand, engage audiences and grow your presence across platforms.',
    icon: Share2,
  },
  {
    id: 'seo-optimization',
    title: 'SEO Optimization',
    description: 'Improve search rankings and get discovered by the right audience.',
    icon: TrendingUp,
  },
  {
    id: 'branding-design',
    title: 'Branding & Design',
    description: 'Creative branding and visual identities that make your brand unforgettable.',
    icon: PenTool,
  },
];

export const WhatWeDo: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-[#0B1320] text-white py-20 sm:py-24 lg:py-28 xl:py-32 overflow-hidden"
      aria-labelledby="what-we-do-heading"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-blue/30 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            WHAT WE DO
          </div>
          <h2
            id="what-we-do-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
          >
            Digital Services That<br />
            Accelerate Your Growth
          </h2>
        </motion.div>

        {/* 5 Sleek Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {SERVICES.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-[#13243B]/30 hover:bg-[#13243B]/60 border border-[#13243B] hover:border-brand-orange/40 p-6 sm:p-7 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-brand-glow/20"
              >
                {/* Glowing Orange Icon */}
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-brand-orange/20 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                {/* Service Title */}
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-2.5 leading-snug group-hover:text-brand-orange transition-colors">
                  {srv.title}
                </h3>

                {/* Service Description */}
                <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {srv.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Center CTA: Explore All Services */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 sm:mt-16 flex justify-center"
        >
          <Button
            href="#contact"
            variant="outline"
            size="md"
            className="border-gray-700 hover:border-brand-orange text-white hover:text-brand-orange px-8 py-3.5 rounded-xl text-sm font-semibold"
          >
            <span>Explore All Services</span>
          </Button>
        </motion.div>

      </div>
    </section>
  );
};

export default WhatWeDo;
