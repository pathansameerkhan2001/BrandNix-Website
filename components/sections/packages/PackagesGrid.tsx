'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import {
  WebsiteDevIllustration,
  WebsiteMaintIllustration,
  SocialMediaMktIllustration,
  SocialMediaMgmtIllustration,
  ContentReelsIllustration,
  StartupPkgIllustration,
  OutsourcingIllustration,
  EcommerceIllustration,
  BrandingDesignIllustration,
  AiSolutionsIllustration,
  LeadGenIllustration,
  CustomSolutionsIllustration,
} from '@/components/common/PackageIllustrations';

interface PackageItem {
  id: string;
  title: string;
  illustration: React.ComponentType<{ className?: string; size?: number }>;
  features: string[];
}

const PACKAGES_LIST: PackageItem[] = [
  {
    id: 'web-dev',
    title: 'Website Development',
    illustration: WebsiteDevIllustration,
    features: [
      'Custom Website Design',
      'Responsive & Mobile Friendly',
      'SEO Optimized Structure',
      'Fast Loading & Secure',
      'Content Management System',
      'Integration & Functionality',
      'Testing & Launch Support',
    ],
  },
  {
    id: 'web-maintenance',
    title: 'Website Maintenance',
    illustration: WebsiteMaintIllustration,
    features: [
      'Regular Updates & Backups',
      'Security Monitoring',
      'Bug Fixes & Technical Support',
      'Site Speed Optimization',
      'Content Updates',
      'Uptime Monitoring',
      'Monthly Performance Report',
    ],
  },
  {
    id: 'social-media-mkt',
    title: 'Social Media Marketing',
    illustration: SocialMediaMktIllustration,
    features: [
      'Strategy Development',
      'Audience Research',
      'Page Optimization',
      'Ad Campaign Management',
      'Performance Tracking',
      'Monthly Reporting',
      'Growth & Engagement Focus',
    ],
  },
  {
    id: 'social-media-mgmt',
    title: 'Social Media Handling & Management',
    illustration: SocialMediaMgmtIllustration,
    features: [
      'Daily Page Management',
      'Content Scheduling',
      'Community Management',
      'Inbox & Comment Management',
      'Performance Analysis',
      'Organic Growth',
      'Monthly Reporting',
    ],
  },
  {
    id: 'content-reels',
    title: 'Content Posting, Reels & Influencer Marketing',
    illustration: ContentReelsIllustration,
    features: [
      'Content Strategy & Planning',
      'Regular Posts & Reels',
      'Creative Design & Captions',
      'Hashtag & Trend Research',
      'Influencer Outreach',
      'Campaign Management',
      'Performance Tracking',
    ],
  },
  {
    id: 'startup-pkg',
    title: 'Startup Building Package',
    illustration: StartupPkgIllustration,
    features: [
      'Business Idea Validation',
      'Market Research',
      'Brand Identity Development',
      'Website & Digital Presence',
      'Go-To-Market Strategy',
      'Mentorship & Consulting',
      'Growth Roadmap',
    ],
  },
  {
    id: 'outsourcing',
    title: 'Outsourcing Services',
    illustration: OutsourcingIllustration,
    features: [
      'Process Outsourcing',
      'Virtual Assistance',
      'Data Entry & Management',
      'Customer Support',
      'HR & Admin Support',
      'Accounting & Bookkeeping',
      'Scalable & Cost Efficient',
    ],
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Solutions',
    illustration: EcommerceIllustration,
    features: [
      'E-Commerce Website',
      'Store Setup & Customization',
      'Payment Gateway Integration',
      'Product Management',
      'Order & Customer Management',
      'Marketing & Promotion',
      'Analytics & Reporting',
    ],
  },
  {
    id: 'branding-design',
    title: 'Branding & Identity Design',
    illustration: BrandingDesignIllustration,
    features: [
      'Logo & Visual Identity',
      'Brand Guidelines',
      'Business Card & Stationery',
      'Brand Strategy',
      'Packaging Design',
      'Rebranding Services',
      'Brand Consistency',
    ],
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions & Automation',
    illustration: AiSolutionsIllustration,
    features: [
      'AI Chatbots & Assistants',
      'Workflow Automation',
      'CRM Automation',
      'Lead Generation Bots',
      'AI Integration Services',
      'Business Process Automation',
      'Smart Analytics & Insights',
    ],
  },
  {
    id: 'lead-gen',
    title: 'Lead Generation & Sales Growth',
    illustration: LeadGenIllustration,
    features: [
      'Lead Generation Strategy',
      'Landing Page Creation',
      'Email Marketing Campaigns',
      'Sales Funnel Development',
      'Conversion Optimization',
      'Lead Nurturing',
      'Performance Tracking',
    ],
  },
  {
    id: 'custom-solutions',
    title: 'Other Custom Solutions',
    illustration: CustomSolutionsIllustration,
    features: [
      'Software Development',
      'Mobile App Development',
      'Custom Integrations',
      'API Development',
      'Business Consulting',
      'Technology Solutions',
      'And Much More...',
    ],
  },
];

export const PackagesGrid: React.FC = () => {
  return (
    <section
      id="all-packages"
      className="relative bg-gray-50 dark:bg-[#0E1726] text-[#0B1320] dark:text-white py-20 sm:py-24 lg:py-28 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="packages-grid-heading"
    >
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-14 sm:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            OUR PACKAGES
          </div>
          <h2
            id="packages-grid-heading"
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0B1320] dark:text-white mb-3"
          >
            Solutions for <span className="text-brand-orange">Every Business Need</span>
          </h2>
          <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
            Whether you&apos;re a startup, small business, or enterprise, we have the perfect package to help you grow, scale, and succeed.
          </p>
        </motion.div>

        {/* 4-Column Grid with 12 Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES_LIST.map((pkg, idx) => {
            const Illustration = pkg.illustration;
            return (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.08 }}
                className="group rounded-2xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl hover:border-brand-orange/50"
              >
                <div>
                  {/* Top: Premium 3D Illustration Container (56px x 56px) + Title */}
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/[0.14] to-white/80 dark:from-amber-500/[0.12] dark:to-[#13243B]/80 border border-brand-orange/30 dark:border-brand-orange/25 flex items-center justify-center p-2 flex-shrink-0 shadow-xs group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:border-brand-orange/50 transition-all duration-300">
                      <Illustration size={44} className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300 drop-shadow-xs" />
                    </div>
                    <h3 className="font-playfair text-base sm:text-lg font-bold text-[#0B1320] dark:text-white leading-snug group-hover:text-brand-orange transition-colors">
                      {pkg.title}
                    </h3>
                  </div>

                  {/* Accent Line */}
                  <div className="h-[2px] w-8 bg-brand-orange/30 group-hover:w-14 group-hover:bg-brand-orange transition-all duration-300 mb-5" />

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 mb-6">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2 text-xs sm:text-[13px] font-inter text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#13243B]/60">
                  <Link
                    href="/#contact"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#0B1320] text-white hover:bg-brand-orange dark:bg-[#13243B] dark:hover:bg-brand-orange text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all shadow-xs group-hover:shadow-brand-glow/30"
                  >
                    <span>Let&apos;s Get Started</span>
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

export default PackagesGrid;
