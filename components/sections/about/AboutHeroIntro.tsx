'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const AboutHeroIntro: React.FC = () => {
  return (
    <section
      id="about-intro"
      className="relative bg-[#0B1320] text-white pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24 overflow-hidden border-t border-[#13243B]/60"
      aria-labelledby="about-main-heading"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-brand-blue/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
          
          {/* LEFT COLUMN: Editorial Intro & Startup Mindset (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-5 flex flex-col items-start"
          >
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-5">
              <span>ABOUT US</span>
            </div>

            {/* 2. Main Heading */}
            <h2
              id="about-main-heading"
              className="font-playfair text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-bold text-white leading-[1.14] tracking-tight mb-6"
            >
              We’re Just Getting<br />
              Started, But Our<br />
              <span className="text-brand-orange">Vision Is Big.</span>
            </h2>

            {/* 3. Supporting Paragraph */}
            <p className="font-inter text-base sm:text-lg text-gray-300 leading-relaxed mb-8 max-w-lg">
              Brandnix is a startup digital solutions firm on a mission to help businesses grow with creativity, technology, and smart strategies.
            </p>

            {/* 4. Startup Mindset Bullet */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#13243B]/30 border border-[#13243B] max-w-md group hover:border-brand-orange/40 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-sm sm:text-base font-bold text-white">
                  A startup mindset.
                </span>
                <span className="font-inter text-xs sm:text-sm text-gray-300">
                  A future full of impact.
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Modern Office Reception Image with Floating Quote (7 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 xl:col-span-7 w-full flex items-center justify-center lg:justify-end relative"
          >
            <div className="relative w-full max-w-[620px] lg:max-w-[780px] xl:max-w-[900px] 2xl:max-w-[980px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#13243B] bg-[#0E1726] group">
              <img
                src="/images/about/brandnix-reception-hd.jpg"
                alt="Brandnix Headquarters Office Reception"
                className="w-full h-auto max-h-[500px] xl:max-h-[560px] object-cover object-center transform group-hover:scale-[1.02] transition-transform duration-700"
                width={1024}
                height={682}
                loading="eager"
              />

              {/* Floating Quote Card */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 max-w-[280px] sm:max-w-[320px] p-4 sm:p-5 rounded-2xl bg-[#0B1320]/95 backdrop-blur-md border border-brand-orange/30 shadow-2xl">
                <span className="text-3xl text-brand-orange font-playfair leading-none block mb-1.5 select-none">
                  “
                </span>
                <p className="font-inter text-xs sm:text-sm text-gray-200 leading-relaxed italic">
                  We may be new, but we&apos;re driven by purpose, passion, and possibilities.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutHeroIntro;
