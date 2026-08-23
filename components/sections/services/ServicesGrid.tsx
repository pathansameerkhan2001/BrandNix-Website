'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  WebDevServiceIllustration,
  DigitalMarketingServiceIllustration,
  SocialMediaServiceIllustration,
  SeoServiceIllustration,
  GoogleAdsServiceIllustration,
  WhatsappServiceIllustration,
  EmailMarketingServiceIllustration,
  ContentCreationServiceIllustration,
  EcommerceServiceIllustration,
  CroServiceIllustration,
} from '@/components/common/ServiceIllustrations';

export type ServiceIllustrationProps = {
  className?: string;
  size?: string | number;
};

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  illustration: React.ComponentType<ServiceIllustrationProps>;
  href: string;
}

const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description: 'Modern, responsive websites that are fast, user-friendly and built to convert.',
    illustration: WebDevServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven strategies to increase visibility, generate leads and boost sales.',
    illustration: DigitalMarketingServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    description: 'Build your brand, engage your audience and grow across major platforms.',
    illustration: SocialMediaServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your rankings and attract the right audience with proven SEO strategies.',
    illustration: SeoServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'google-ads',
    title: 'Google Ads & PPC Advertising',
    description: 'Target the right audience and get more customers with high-converting ads.',
    illustration: GoogleAdsServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'whatsapp',
    title: 'WhatsApp Marketing & Automation',
    description: 'Automate conversations, nurture leads and drive repeat business.',
    illustration: WhatsappServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Engage your audience with personalized emails that convert.',
    illustration: EmailMarketingServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'content',
    title: 'Content Creation',
    description: 'High-quality content that tells your story and connects with your audience.',
    illustration: ContentCreationServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    description: 'Custom online stores designed to sell more and scale your business.',
    illustration: EcommerceServiceIllustration,
    href: '/#contact',
  },
  {
    id: 'cro',
    title: 'Conversion Rate Optimization (CRO)',
    description: 'Optimize your website and funnels to turn more visitors into customers.',
    illustration: CroServiceIllustration,
    href: '/#contact',
  },
];

export const ServicesGrid: React.FC = () => {
  return (
    <section
      id="core-services"
      className="relative bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white py-20 sm:py-24 lg:py-28 overflow-hidden transition-colors duration-300"
      aria-labelledby="core-services-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            OUR CORE SERVICES
          </div>
          <h2
            id="core-services-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1320] dark:text-white mb-3"
          >
            Everything You Need to <span className="text-brand-orange">Grow Online</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Powerful Digital Solutions Designed to Deliver Measurable Results.
          </p>
        </motion.div>

        {/* 5-Column Grid with 10 identical service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-6">
          {CORE_SERVICES.map((service, idx) => {
            const Illustration = service.illustration;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (idx % 5) * 0.08 }}
                className="group rounded-2xl sm:rounded-3xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-lg hover:border-brand-orange/40 min-h-[320px]"
              >
                <div>
                  {/* Premium Custom 3D Illustration Container (56px x 56px) */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/[0.14] to-white/80 dark:from-amber-500/[0.12] dark:to-[#13243B]/80 border border-brand-orange/30 dark:border-brand-orange/25 flex items-center justify-center mb-5 p-2 shadow-xs group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:border-brand-orange/50 transition-all duration-300">
                    <Illustration
                      size={44}
                      className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-xs"
                    />
                  </div>

                  {/* Title with fixed minimum height for exact alignment */}
                  <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0B1320] dark:text-white leading-snug group-hover:text-brand-orange transition-colors min-h-[48px] flex items-center">
                    {service.title}
                  </h3>

                  {/* Subtle Accent Line */}
                  <div className="h-[2px] w-7 bg-brand-orange/30 group-hover:w-12 group-hover:bg-brand-orange transition-all duration-300 my-3" />

                  {/* Description */}
                  <p className="font-inter text-xs sm:text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Bottom-Aligned "Learn More ->" */}
                <div className="mt-auto pt-5">
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-1.5 font-inter text-xs sm:text-sm font-bold text-brand-orange group-hover:gap-2.5 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
