'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronDown, Rocket, MessageSquare, ShieldCheck, Zap, Target, Users, TrendingUp } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/common/Button';
import { ServiceCategoryData } from '@/data/servicesData';
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

interface CategoryTemplateProps {
  data: ServiceCategoryData;
}

export type ServiceVisualProps = {
  className?: string;
  size?: string | number;
};

export type ServiceVisual = React.ComponentType<ServiceVisualProps>;

const CATEGORY_ILLUSTRATION_MAP: Record<string, ServiceVisual> = {
  'custom-website-development': WebDevServiceIllustration,
  'ecommerce-development': EcommerceServiceIllustration,
  'cms-development': WebsiteDevIllustration,
  'wordpress-development': WebsiteMaintIllustration,
  'web-application-development': WebDevServiceIllustration,
  'landing-page-development': LeadGenIllustration,
  'website-redesign': WebsiteDevIllustration,
  'ui-ux-design': BrandingDesignIllustration,
  'website-speed-optimization': CroServiceIllustration,
  'website-security': WebsiteMaintIllustration,
  'maintenance-and-support': WebsiteMaintIllustration,

  'social-media-strategy': SocialMediaMktIllustration,
  'social-media-management': SocialMediaMgmtIllustration,
  'content-creation-and-design': ContentCreationServiceIllustration,
  'daily-posting-and-scheduling': ContentReelsIllustration,
  'reels-and-video-creation': ContentReelsIllustration,
  'community-management': SocialMediaMgmtIllustration,
  'social-media-advertising': SocialMediaServiceIllustration,
  'influencer-marketing': ContentReelsIllustration,
  'social-media-audit': SeoServiceIllustration,
  'hashtag-and-trend-research': SocialMediaMktIllustration,
  'performance-analytics-and-reporting': CroServiceIllustration,

  'seo': SeoServiceIllustration,
  'google-ads': GoogleAdsServiceIllustration,
  'meta-ads': SocialMediaServiceIllustration,
  'conversion-rate-optimization': CroServiceIllustration,
  'email-marketing': EmailMarketingServiceIllustration,
  'content-marketing': ContentCreationServiceIllustration,
  'online-reputation-management': ShieldCheck,
  'analytics-and-reporting': CroServiceIllustration,
  'marketing-automation': AiSolutionsIllustration,
  'lead-generation': LeadGenIllustration,

  'branding-and-identity-design': BrandingDesignIllustration,
  'graphic-design-services': BrandingDesignIllustration,
  'video-production': ContentReelsIllustration,
  'ai-solutions-and-automation': AiSolutionsIllustration,
  'crm-setup-and-integration': AiSolutionsIllustration,
  'whatsapp-business-api': WhatsappServiceIllustration,
  'growth-hacking': StartupPkgIllustration,
  'virtual-assistance': OutsourcingIllustration,
  'outsourcing-services': OutsourcingIllustration,
  'business-consulting': Target,
  'custom-software-solutions': CustomSolutionsIllustration,
};

export const CategoryLandingTemplate: React.FC<CategoryTemplateProps> = ({ data }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white flex flex-col transition-colors duration-200">
      <Header />

      {/* 1. Category Hero Section */}
      <section className="relative bg-white dark:bg-[#08111F] pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-5">
                {data.eyebrow}
              </div>

              <h1 className="font-playfair text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] font-bold tracking-tight text-[#08111F] dark:text-white leading-[1.14] mb-5">
                {data.heroHeading}{' '}
                <span className="text-brand-orange">{data.heroHighlight}</span>
              </h1>

              <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl">
                {data.heroDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Button href="/contact" variant="primary" size="lg" className="px-8 py-3.5 font-bold shadow-brand-glow">
                  Get Started →
                </Button>
                <Button href="#services-list" variant="outline" size="lg" className="px-8 py-3.5 font-semibold">
                  View Solutions ↓
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-gray-200 dark:border-[#13243B]/80 w-full text-xs font-inter text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Custom Strategy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Proven Track Record</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                  <span>Dedicated Support</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-6 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-[680px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 dark:border-[#13243B]">
                <img
                  src={data.heroImage}
                  alt={data.title}
                  className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
                  width={1024}
                  height={682}
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 2. Why This Service Matters */}
      <section className="py-20 bg-gray-50 dark:bg-[#0E1726] border-t border-gray-200/80 dark:border-[#13243B]">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#08111F] dark:text-white mb-3">
              {data.whyItMatters.heading}
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
              {data.whyItMatters.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.whyItMatters.points.map((pt, idx) => (
              <div
                key={pt.title}
                className="p-6 rounded-2xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 text-brand-orange font-bold text-sm flex items-center justify-center mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-playfair text-base sm:text-lg font-bold text-[#08111F] dark:text-white mb-2">
                  {pt.title}
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Services & Solutions Grid */}
      <section id="services-list" className="py-20 sm:py-24 bg-white dark:bg-[#08111F]">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
              SERVICES INCLUDED
            </div>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08111F] dark:text-white mb-3">
              Comprehensive <span className="text-brand-orange">{data.title}</span> Solutions
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Explore our specialized capabilities designed to scale your business.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.services.map((srv) => {
              const IconComp = CATEGORY_ILLUSTRATION_MAP[srv.slug] || WebDevServiceIllustration;
              const detailHref = `/services/${data.slug}/${srv.slug}`;

              return (
                <div
                  key={srv.slug}
                  className="group rounded-2xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] p-6 flex flex-col justify-between hover:border-brand-orange/40 hover:-translate-y-1.5 transition-all shadow-xs hover:shadow-xl"
                >
                  <div>
                    {/* Icon Container */}
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/[0.14] to-white/80 dark:from-amber-500/[0.12] dark:to-[#13243B]/80 border border-brand-orange/30 dark:border-brand-orange/25 flex items-center justify-center p-2 mb-4 group-hover:scale-105 transition-transform shadow-xs">
                      {typeof IconComp === 'function' ? (
                        <IconComp size={40} className="w-full h-full object-contain" />
                      ) : null}
                    </div>

                    <h3 className="font-playfair text-base sm:text-lg font-bold text-[#08111F] dark:text-white leading-snug group-hover:text-brand-orange transition-colors min-h-[44px] flex items-center">
                      {srv.title}
                    </h3>

                    <div className="h-[2px] w-8 bg-brand-orange/30 group-hover:w-14 group-hover:bg-brand-orange transition-all my-3" />

                    <p className="font-inter text-xs sm:text-[13px] text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {srv.shortDesc}
                    </p>

                    {srv.deliverables && (
                      <ul className="space-y-1.5 mb-6">
                        {srv.deliverables.map((del) => (
                          <li key={del} className="flex items-start gap-2 text-xs font-inter text-gray-500 dark:text-gray-400">
                            <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange flex-shrink-0 mt-0.5" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-100 dark:border-[#13243B]/80 flex items-center justify-between">
                    <Link
                      href={detailHref}
                      className="inline-flex items-center gap-1 font-inter text-xs font-bold text-brand-orange group-hover:gap-2 transition-all"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="text-[11px] font-inter font-semibold px-2.5 py-1 rounded bg-gray-100 dark:bg-[#0B1320] text-gray-700 dark:text-gray-300 hover:bg-brand-orange hover:text-white transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Process Roadmap */}
      <section className="py-20 bg-gray-50 dark:bg-[#0E1726] border-t border-gray-200/80 dark:border-[#13243B]">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#08111F] dark:text-white mb-2">
              Our Strategic <span className="text-brand-orange">Process</span>
            </h2>
            <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
              How we take your project from initial concept to high-impact execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
            {data.process.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-white dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] text-center"
              >
                <div className="w-10 h-10 rounded-full bg-brand-orange text-white font-bold text-sm flex items-center justify-center mx-auto mb-3 shadow-brand-glow">
                  {step.step}
                </div>
                <h3 className="font-playfair text-base font-bold text-[#08111F] dark:text-white mb-1.5">
                  {step.title}
                </h3>
                <p className="font-inter text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FAQs Accordion */}
      <section className="py-20 bg-white dark:bg-[#08111F] border-t border-gray-200/80 dark:border-[#13243B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 w-full">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl sm:text-4xl font-bold text-[#08111F] dark:text-white mb-2">
              Frequently Asked <span className="text-brand-orange">Questions</span>
            </h2>
            <p className="font-inter text-sm text-gray-600 dark:text-gray-300">
              Clear answers to common questions about our {data.title} services.
            </p>
          </div>

          <div className="space-y-4">
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl bg-gray-50 dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-playfair text-base sm:text-lg font-bold text-[#08111F] dark:text-white"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-orange transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-200/60 dark:border-[#13243B]/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Dark Project CTA */}
      <section className="py-20 bg-gray-50 dark:bg-[#0E1726]">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="rounded-3xl bg-[#08111F] border border-[#13243B] p-8 sm:p-12 lg:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-brand-orange text-white flex items-center justify-center flex-shrink-0 shadow-brand-glow">
                <Rocket className="w-8 h-8 sm:w-10 sm:h-10" />
              </div>
              <div>
                <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                  Ready to Elevate Your <span className="text-brand-orange">{data.title}?</span>
                </h2>
                <p className="font-inter text-xs sm:text-sm text-gray-300 mt-2 max-w-xl">
                  Let&apos;s build a tailored strategy that delivers measurable growth and outpaces your competitors.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full lg:w-auto">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto px-8 py-4 font-bold shadow-brand-glow">
                Schedule a Consultation
              </Button>
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-brand-orange transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-brand-orange" />
                <span>WhatsApp: +91 98765 43210</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CategoryLandingTemplate;
