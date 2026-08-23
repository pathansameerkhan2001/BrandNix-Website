'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageSrc: string;
}

const POSTS: BlogPost[] = [
  {
    id: 'scaling-conversion-rates',
    title: 'How to Double Your Conversion Rates with Next.js Core Web Vitals Optimization',
    excerpt: 'Discover why page speed and responsive layout shifts directly impact your Google search rankings and paid ad return on ad spend (ROAS).',
    category: 'Web Development',
    author: 'Sameer Khan',
    date: 'Aug 20, 2026',
    readTime: '6 min read',
    imageSrc: '/images/packages/brandnix-packages-hero.jpg',
  },
  {
    id: 'b2b-lead-generation-playbook',
    title: 'The Modern B2B Growth Playbook: Combining Paid Search with Intent Retargeting',
    excerpt: 'A comprehensive walkthrough of how we structure high-intent Google Search campaigns alongside Meta custom audiences to lower CPA.',
    category: 'Digital Marketing',
    author: 'Arifullah Hussaini Syed',
    date: 'Aug 18, 2026',
    readTime: '8 min read',
    imageSrc: '/images/services/brandnix-services-hero-large.jpg',
  },
  {
    id: 'viral-short-form-video-strategy',
    title: 'How to Build an Organic Social Media Flywheel That Actually Converts to Revenue',
    excerpt: 'Stop posting vanity content. Here is our 5-pillar editorial framework for short-form reels, trending audios, and customer storytelling.',
    category: 'Social Media',
    author: 'Abdullah Shaik',
    date: 'Aug 14, 2026',
    readTime: '5 min read',
    imageSrc: '/images/contact/brandnix-contact-hero.jpg',
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white flex flex-col transition-colors duration-200">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-16 pb-16 bg-white dark:bg-[#08111F] overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
            INSIGHTS & STRATEGIES
          </div>
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#08111F] dark:text-white mb-4">
            The Brandnix <span className="text-brand-orange">Growth Journal</span>
          </h1>
          <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Practical strategies, technical insights, and marketing breakdowns written by our practitioners.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 pb-24 bg-gray-50 dark:bg-[#0B1320] border-t border-gray-200/80 dark:border-[#13243B]">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POSTS.map((post, idx) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="group rounded-3xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] overflow-hidden hover:border-brand-orange/50 transition-all duration-300 hover:-translate-y-1.5 shadow-xs hover:shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#08111F] relative border-b border-gray-100 dark:border-[#13243B]">
                    <img
                      src={post.imageSrc}
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#08111F]/80 backdrop-blur-md border border-white/10 text-brand-orange text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-4 text-xs font-inter text-gray-500 dark:text-gray-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h2 className="font-playfair text-lg sm:text-xl font-bold text-[#08111F] dark:text-white leading-snug group-hover:text-brand-orange transition-colors mb-3">
                      {post.title}
                    </h2>

                    <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-0 border-t border-gray-100 dark:border-[#13243B]/80 mt-auto flex items-center justify-between">
                  <span className="text-xs font-inter text-gray-500 dark:text-gray-400">
                    By {post.author}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 font-inter text-xs font-bold text-brand-orange group-hover:gap-2 transition-all"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
