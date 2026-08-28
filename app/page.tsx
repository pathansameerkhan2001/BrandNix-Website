'use client';

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HomeOverviewSection from '@/components/sections/HomeOverviewSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] lg:dark:bg-[#0B1320] text-[#0B1320] lg:dark:text-white flex flex-col transition-colors duration-200">
      {/* 1. Official Sticky Brandnix Header */}
      <Header />

      {/* 2. Official Brandnix Hero Section */}
      <Hero />

      {/* 3. Next Section: Process, Services, Value, and CTA Flow */}
      <HomeOverviewSection />

      {/* 4. Global Footer */}
      <Footer />
    </main>
  );
}


