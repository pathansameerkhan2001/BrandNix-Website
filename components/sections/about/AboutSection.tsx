'use client';

import React from 'react';
import AboutHeroIntro from './AboutHeroIntro';
import AboutWhoWhat from './AboutWhoWhat';
import AboutBackgroundStory from './AboutBackgroundStory';
import AboutTeam from './AboutTeam';
import AboutCta from './AboutCta';

export const AboutSection: React.FC = () => {
  return (
    <div id="about-us" className="w-full flex flex-col">
      {/* 1. About Intro Hero & Office Reception Visual */}
      <AboutHeroIntro />

      {/* 2. Who We Are + What We Do Side-by-Side Area */}
      <AboutWhoWhat />

      {/* 3. Our Background Milestones + Our Story Narrative */}
      <AboutBackgroundStory />

      {/* 4. The People Behind Brandnix — Team Grid */}
      <AboutTeam />

      {/* 5. Final About CTA Banner */}
      <AboutCta />
    </div>
  );
};

export default AboutSection;
