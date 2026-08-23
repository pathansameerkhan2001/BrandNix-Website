'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutSection from '@/components/sections/about/AboutSection';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] dark:bg-[#0B1320] text-[#0B1320] dark:text-white flex flex-col transition-colors duration-200">
      {/* 1. Official Sticky Brandnix Header (with dynamic /about active state) */}
      <Header />

      {/* 2. Complete Production-Ready About Us Page Experience */}
      <AboutSection />

      {/* 3. Official Global Brandnix Footer */}
      <Footer />
    </main>
  );
}
