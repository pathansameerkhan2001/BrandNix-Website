'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ExternalLink, Sparkles, TrendingUp, Layers, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/common/Button';

interface ProjectItem {
  id: string;
  title: string;
  category: string;
  categorySlug: 'web' | 'marketing' | 'social' | 'branding';
  description: string;
  tags: string[];
  metrics: string;
  imageSrc: string;
}

const PROJECTS: ProjectItem[] = [
  {
    id: 'luxe-ecommerce',
    title: 'NexStore E-Commerce Platform',
    category: 'Web Development',
    categorySlug: 'web',
    description: 'High-conversion headless e-commerce store with instantaneous checkout flows, real-time inventory management, and 98+ PageSpeed rating.',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS', 'Headless CMS'],
    metrics: '+184% Conversion Lift',
    imageSrc: '/images/projects/project-ecommerce.png',
  },
  {
    id: 'growth-marketing',
    title: 'HyperGrowth Performance Marketing',
    category: 'Digital Marketing',
    categorySlug: 'marketing',
    description: 'Multi-channel acquisition strategy blending precision Google Search & Meta advertising with server-side CAPI tracking.',
    tags: ['Google Ads', 'Meta Ads', 'GA4 Analytics', 'CRO'],
    metrics: '4.8x ROAS Generated',
    imageSrc: '/images/projects/project-marketing-campaign.png',
  },
  {
    id: 'apex-branding',
    title: 'Apex Cloud Systems Brand Identity',
    category: 'Branding & UI/UX',
    categorySlug: 'branding',
    description: 'Complete brand architecture refresh including logo suite, interactive Figma design system, and unified digital guidelines.',
    tags: ['Brand Identity', 'UI/UX Design', 'Design System', 'Typography'],
    metrics: '3x Brand Recall Lift',
    imageSrc: '/images/services/services-hero-laptop.png',
  },
  {
    id: 'viral-social',
    title: 'OmniSocial Organic & Paid Scale',
    category: 'Social Media',
    categorySlug: 'social',
    description: 'End-to-end short-form vertical reel production and influencer outreach strategy driving millions of organic impressions.',
    tags: ['Reels & Video', 'Social Strategy', 'Influencer Marketing'],
    metrics: '2.4M+ Organic Impressions',
    imageSrc: '/images/services/brandnix-services-hero-large.jpg',
  },
];

const CATEGORIES = [
  { label: 'All Projects', slug: 'all' },
  { label: 'Web Development', slug: 'web' },
  { label: 'Digital Marketing', slug: 'marketing' },
  { label: 'Social Media', slug: 'social' },
  { label: 'Branding & UI/UX', slug: 'branding' },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.categorySlug === activeFilter);

  return (
    <main className="min-h-screen bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white flex flex-col transition-colors duration-200">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 bg-white dark:bg-[#08111F] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            PROVEN TRACK RECORD
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#08111F] dark:text-white mb-4">
            Our Selected <span className="text-brand-orange">Work & Case Studies</span>
          </h1>
          <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
            Explore how we partner with ambitious companies to build high-performance web applications, viral social campaigns, and scalable growth engines.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map(cat => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setActiveFilter(cat.slug)}
                className={`px-5 py-2 rounded-full font-inter text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat.slug
                    ? 'bg-brand-orange text-white shadow-brand-glow'
                    : 'bg-gray-100 dark:bg-[#13243B]/60 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#13243B]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 pb-24 bg-gray-50 dark:bg-[#0B1320] border-t border-gray-200/80 dark:border-[#13243B]">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                key={proj.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group rounded-3xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] overflow-hidden hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-2xl flex flex-col"
              >
                {/* Project Image Box */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#08111F] relative border-b border-gray-100 dark:border-[#13243B]">
                  <img
                    src={proj.imageSrc}
                    alt={proj.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#08111F]/80 backdrop-blur-md border border-white/10 text-white text-xs font-semibold">
                    {proj.metrics}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs font-inter font-bold text-brand-orange uppercase tracking-wider mb-2">
                      {proj.category}
                    </div>
                    <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#08111F] dark:text-white leading-snug group-hover:text-brand-orange transition-colors mb-3">
                      {proj.title}
                    </h3>
                    <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                      {proj.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {proj.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-[#08111F] text-[11px] font-inter font-medium text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-inter text-xs sm:text-sm font-bold text-brand-orange group-hover:gap-3 transition-all"
                    >
                      <span>Start a Project Like This</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
