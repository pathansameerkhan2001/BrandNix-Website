'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, BookOpen, Calendar, Rocket, Target } from 'lucide-react';

const MILESTONES = [
  {
    id: 'founded',
    icon: Calendar,
    title: '2024',
    subtitle: 'Founded in',
  },
  {
    id: 'startup',
    icon: Rocket,
    title: 'Startup',
    subtitle: 'New Beginnings, Endless Possibilities',
  },
  {
    id: 'future',
    icon: Target,
    title: 'Future Ready',
    subtitle: 'Building solutions for tomorrow',
  },
];

export const AboutBackgroundStory: React.FC = () => {
  return (
    <section
      className="relative bg-[#0B1320] text-white py-20 sm:py-24 lg:py-28 xl:py-32 overflow-hidden border-t border-[#13243B]/60"
      aria-labelledby="background-story-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/3 w-[700px] h-[500px] bg-brand-blue/25 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-center">
          
          {/* LEFT: OUR BACKGROUND (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 flex flex-col sm:flex-row gap-8 items-start"
          >
            {/* 3 Milestones on Left */}
            <div className="flex flex-row sm:flex-col justify-between sm:justify-start gap-4 sm:gap-6 flex-shrink-0 w-full sm:w-auto">
              {MILESTONES.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.id}
                    className="flex flex-col items-center sm:items-start p-3 sm:p-4 rounded-2xl bg-[#13243B]/30 border border-[#13243B] hover:border-brand-orange/40 transition-colors w-full sm:w-[150px] group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-playfair text-base sm:text-lg font-bold text-white leading-tight">
                      {m.title}
                    </span>
                    <span className="font-inter text-[10px] sm:text-[11px] text-gray-300 mt-0.5 leading-snug">
                      {m.subtitle}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Background Narrative */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
                  Our <span className="text-brand-orange">Background</span>
                </h3>
              </div>

              <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Brandnix was founded in 2024 with a simple belief — great ideas, when combined with the right strategy and technology, can transform any business.
              </p>
              <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed">
                We may be at the beginning of our journey, but our team brings diverse skills, hands-on experience, and a hunger to create something meaningful.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: OUR STORY (6 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-6 flex flex-col sm:flex-row gap-6 sm:gap-8 items-center lg:border-l lg:border-[#13243B] lg:pl-10 xl:pl-14"
          >
            {/* Story Content */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-lg bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white">
                  Our <span className="text-brand-orange">Story</span>
                </h3>
              </div>

              <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                Brandnix started as a small idea among a group of passionate individuals who wanted to challenge the ordinary and create something extraordinary.
              </p>
              <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed mb-5">
                From late-night brainstorming to our first project, every step has been about learning, growing, and staying committed to our clients&apos; success.
              </p>

              {/* Highlight Quote Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#13243B]/40 border border-[#13243B] border-l-4 border-l-brand-orange">
                <p className="font-inter text-xs sm:text-sm font-semibold text-white leading-relaxed">
                  We are not here to be the biggest.<br />
                  <span className="text-brand-orange">We are here to be the best for you.</span>
                </p>
              </div>
            </div>

            {/* Sprout Growth Graphic */}
            <div className="w-28 sm:w-36 flex-shrink-0 flex items-center justify-center">
              <img
                src="/images/about/brandnix-growth-plant.png"
                alt="Brandnix Organic Growth Symbol"
                className="w-full h-auto max-h-36 object-contain transform hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutBackgroundStory;
