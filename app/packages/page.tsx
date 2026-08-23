'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PackagesHero from '@/components/sections/packages/PackagesHero';
import PackagesGrid from '@/components/sections/packages/PackagesGrid';
import PackagesProcess from '@/components/sections/packages/PackagesProcess';
import PackagesWhyChoose from '@/components/sections/packages/PackagesWhyChoose';
import PackagesCta from '@/components/sections/packages/PackagesCta';

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white flex flex-col transition-colors duration-200">
      {/* 1. Official Sticky Brandnix Header (with dynamic /packages active state) */}
      <Header />

      {/* 2. Packages Hero with Laptop Analytics Dashboard Setup */}
      <PackagesHero />

      {/* 3. All Packages Grid (12 Solution Packages) */}
      <PackagesGrid />

      {/* 4. Our Proven 6-Step Process */}
      <PackagesProcess />

      {/* 5. Why Choose Brandnix? (6 Value Pillars) */}
      <PackagesWhyChoose />

      {/* 6. Dark Rocket CTA Banner */}
      <PackagesCta />

      {/* 7. Official Global Brandnix Footer */}
      <Footer />
    </main>
  );
}
