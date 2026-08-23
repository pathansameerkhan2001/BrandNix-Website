'use client';

import React from 'react';
import WhoWeAre from './WhoWeAre';
import OurProcess from './OurProcess';
import WhyChooseUs from './WhyChooseUs';
import WhatWeDo from './WhatWeDo';
import CtaSection from './CtaSection';

export const HomeOverviewSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col">
      {/* 1. WHO WE ARE — Growth Partner & Enhanced Mission Visual */}
      <WhoWeAre />

      {/* 2. OUR PROCESS — 4-Step Connected Roadmap */}
      <OurProcess />

      {/* 3. WHY BUSINESSES CHOOSE BRANDNIX — 4 Focus Pillars */}
      <WhyChooseUs />

      {/* 4. WHAT WE DO — 5 Digital Services Showcase */}
      <WhatWeDo />

      {/* 5. CALL TO ACTION — Let's Build Something Exceptional Together */}
      <CtaSection />
    </div>
  );
};

export default HomeOverviewSection;
