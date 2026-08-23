'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactFormSection from '@/components/sections/contact/ContactFormSection';
import ContactProcess from '@/components/sections/contact/ContactProcess';
import ContactWhyChoose from '@/components/sections/contact/ContactWhyChoose';
import ContactCta from '@/components/sections/contact/ContactCta';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white flex flex-col transition-colors duration-200">
      {/* 1. Official Sticky Brandnix Header (with /contact active state) */}
      <Header />

      {/* 2. Contact Hero with MacBook Connect Dashboard Setup */}
      <ContactHero />

      {/* 3. Send Us a Message Form & Get in Touch Channels */}
      <ContactFormSection />

      {/* 4. How We Create Impact (6 Process Steps) */}
      <ContactProcess />

      {/* 5. Why Businesses Choose Brandnix (6 Value Pillars) */}
      <ContactWhyChoose />

      {/* 6. Ready to Start Your Project CTA Banner */}
      <ContactCta />

      {/* 7. Official Global Brandnix Footer */}
      <Footer />
    </main>
  );
}
