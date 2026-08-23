'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/sections/services/ServicesHero';
import ServicesTrustStrip from '@/components/sections/services/ServicesTrustStrip';
import ServicesGrid from '@/components/sections/services/ServicesGrid';
import ServicesBenefitStrip from '@/components/sections/services/ServicesBenefitStrip';
import ServicesWhyChoose from '@/components/sections/services/ServicesWhyChoose';
import ServicesCta from '@/components/sections/services/ServicesCta';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#0B1320] text-[#0B1320] dark:text-white flex flex-col transition-colors duration-200">
      {/* 1. Official Sticky Brandnix Header (with active /services state) */}
      <Header />

      {/* 2. Services Hero with Analytics Dashboard & Trust Badges */}
      <ServicesHero />

      {/* 3. Horizontal Value / Trust Strip */}
      <ServicesTrustStrip />

      {/* 4. Core Services (10 Identical Service Cards in 5-Column Grid) */}
      <ServicesGrid />

      {/* 5. Horizontal Benefits Strip */}
      <ServicesBenefitStrip />

      {/* 6. Why Choose BRANDNIX? Section */}
      <ServicesWhyChoose />

      {/* 7. Warm Orange-Tinted Action CTA */}
      <ServicesCta />

      {/* 8. Official Global Brandnix Footer */}
      <Footer />
    </main>
  );
}
