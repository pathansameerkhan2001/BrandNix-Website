'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Headphones, Sparkles } from 'lucide-react';

export const WhoWeAre: React.FC = () => {
  return (
    <section
      id="overview"
      className="relative bg-white dark:bg-[#0B1320] py-20 sm:py-24 lg:py-28 xl:py-32 overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-[#13243B]/40"
      aria-labelledby="who-we-are-heading"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-18 items-center">
          
          {/* LEFT COLUMN: Editorial Content & 3 Value Points (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4 w-fit">
              <span>WHO WE ARE</span>
            </div>

            {/* 2. Main Heading */}
            <h2
              id="who-we-are-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-[44px] xl:text-5xl font-bold text-[#0B1320] dark:text-white leading-[1.18] tracking-tight mb-6"
            >
              More Than an Agency,<br />
              <span className="text-[#0B1320] dark:text-white">We&apos;re Your </span>
              <span className="text-brand-orange">Growth Partner.</span>
            </h2>

            {/* 3. Supporting Paragraphs */}
            <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Brandnix is a team of digital strategists, designers, marketers and technologists who love solving problems and creating opportunities.
            </p>
            <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              We combine creativity, data and technology to build digital experiences that help brands grow and stay ahead.
            </p>

            {/* 4. Three Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 lg:gap-6 pt-8 border-t border-gray-200 dark:border-[#13243B]">
              
              {/* Pillar 1: Strategic Thinking */}
              <div className="flex flex-col group">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="font-inter text-sm sm:text-base font-bold text-[#0B1320] dark:text-white mb-1.5">
                  Strategic Thinking
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  We plan for long-term growth, not just short-term wins.
                </p>
              </div>

              {/* Pillar 2: Result Focused */}
              <div className="flex flex-col sm:border-l sm:border-gray-200 dark:sm:border-[#13243B] sm:pl-5 lg:pl-6 group">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="font-inter text-sm sm:text-base font-bold text-[#0B1320] dark:text-white mb-1.5">
                  Result Focused
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  Every solution we build is designed to deliver real business impact.
                </p>
              </div>

              {/* Pillar 3: Reliable Support */}
              <div className="flex flex-col sm:border-l sm:border-gray-200 dark:sm:border-[#13243B] sm:pl-5 lg:pl-6 group">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Headphones className="w-5 h-5" />
                </div>
                <h3 className="font-inter text-sm sm:text-base font-bold text-[#0B1320] dark:text-white mb-1.5">
                  Reliable Support
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                  We work with you as a partner and stay with you at every step.
                </p>
              </div>

            </div>
          </motion.div>

          {/* RIGHT COLUMN: Enhanced 3D Mission Artwork Showcase (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl dark:shadow-2xl border border-gray-200/80 dark:border-[#13243B] bg-[#0B1320] group">
              {/* Mission 3D Artwork */}
              <img
                src="/images/brandnix-mission-3d.jpg"
                alt="Brandnix Mission Desk Setup — Empowering Businesses with Strategic Digital Solutions"
                className="w-full h-auto object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                width={1024}
                height={819}
                loading="lazy"
              />

              {/* Floating Overlay Badge: Our Mission */}
              <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 max-w-[260px] sm:max-w-[300px] p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 dark:bg-[#0B1320]/95 backdrop-blur-md border border-brand-orange/30 shadow-2xl">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-6 h-6 rounded-md bg-brand-orange/15 text-brand-orange flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-inter text-xs sm:text-sm font-bold text-[#0B1320] dark:text-white">
                    Our Mission
                  </span>
                </div>
                <p className="font-inter text-[11px] sm:text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                  To empower businesses with innovative digital solutions that drive sustainable growth.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
