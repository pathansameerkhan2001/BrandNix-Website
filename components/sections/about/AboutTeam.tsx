'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useAnimationFrame, animate } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleIconType: 'marketing' | 'operations' | 'technology' | 'design' | 'hr' | 'systems' | 'support' | 'finance' | 'sales';
  expertise: string[];
  imageSrc: string;
  objectPosition?: string;
  waveOffset: number; // in pixels
}

// 9 Distinct 3D Multi-Color Role Icons
const MarketingRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="14" width="4" height="7" rx="1" fill="#3B82F6" />
    <rect x="8" y="10" width="4" height="11" rx="1" fill="#8B5CF6" />
    <rect x="14" y="6" width="4" height="15" rx="1" fill="#F59E0B" />
    <path d="M4 11L10 6L16 2L22 4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="22" cy="4" r="2" fill="#EF4444" />
  </svg>
);

const OperationsRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="6" fill="#3B82F6" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="2" />
    <circle cx="12" cy="12" r="2.5" fill="#F59E0B" />
    <rect x="11" y="2" width="2" height="4" rx="0.5" fill="#F59E0B" />
    <rect x="11" y="18" width="2" height="4" rx="0.5" fill="#F59E0B" />
    <rect x="2" y="11" width="4" height="2" rx="0.5" fill="#3B82F6" />
    <rect x="18" y="11" width="4" height="2" rx="0.5" fill="#3B82F6" />
  </svg>
);

const TechRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="13" rx="2" fill="#0B1320" stroke="#3B82F6" strokeWidth="1.5" />
    <path d="M8 8.5L5.5 10.5L8 12.5M16 8.5L18.5 10.5L16 12.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 7.5L11 13.5" stroke="#8B5CF6" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M8 20H16M12 17V20" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const DesignRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12C4 7.5 7.5 4 12 4C16.5 4 20 7.5 20 12C20 15.5 17.5 17 15.5 17C14.5 17 14 16 13 16C12 16 11 17 11 18.5C11 20 9.5 21 8 21C5.5 21 4 17 4 12Z" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
    <circle cx="8" cy="9" r="1.5" fill="#EF4444" />
    <circle cx="12" cy="7.5" r="1.5" fill="#F59E0B" />
    <circle cx="16" cy="9" r="1.5" fill="#3B82F6" />
    <circle cx="8" cy="15" r="1.5" fill="#22C55E" />
  </svg>
);

const HrRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="8" r="3.5" fill="#22C55E" />
    <path d="M3 18C3 15 5.5 14 9 14C12.5 14 15 15 15 18" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="9" r="2.5" fill="#3B82F6" />
    <path d="M15 17C15.5 15.8 17 15 19 15C21 15 22.5 15.8 22.5 17" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const SystemsRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="6" rx="2" fill="#0B1320" stroke="#3B82F6" strokeWidth="1.5" />
    <circle cx="6" cy="7" r="1" fill="#22C55E" />
    <circle cx="9" cy="7" r="1" fill="#F59E0B" />
    <rect x="3" y="14" width="18" height="6" rx="2" fill="#0B1320" stroke="#22C55E" strokeWidth="1.5" />
    <circle cx="6" cy="17" r="1" fill="#22C55E" />
    <circle cx="9" cy="17" r="1" fill="#3B82F6" />
  </svg>
);

const SupportRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 12C4 7.5 7.5 4 12 4C16.5 4 20 7.5 20 12C20 15.5 17.5 17 15.5 17C14.5 17 14 16 13 16C12 16 11 17 11 18.5C11 20 9.5 21 8 21C5.5 21 4 17 4 12Z" fill="#3B82F6" fillOpacity="0.15" stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="3" y="11" width="3" height="6" rx="1" fill="#F59E0B" />
    <rect x="18" y="11" width="3" height="6" rx="1" fill="#F59E0B" />
    <path d="M19 16C19 19 16 20 13 20H12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
    <circle cx="11" cy="20" r="1.5" fill="#EF4444" />
  </svg>
);

const FinanceRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="3" width="16" height="18" rx="2.5" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="1.5" />
    <rect x="7" y="7" width="10" height="2" rx="1" fill="#F59E0B" />
    <rect x="7" y="11" width="8" height="1.5" rx="0.5" fill="#64748B" />
    <rect x="7" y="14" width="6" height="1.5" rx="0.5" fill="#64748B" />
    <circle cx="16" cy="16" r="3" fill="#22C55E" />
    <path d="M15 16L15.8 16.8L17.2 15.2" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SalesRoleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" fill="#3B82F6" fillOpacity="0.15" stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="7" y="12" width="2.5" height="5" rx="0.75" fill="#3B82F6" />
    <rect x="10.75" y="9" width="2.5" height="8" rx="0.75" fill="#22C55E" />
    <rect x="14.5" y="6" width="2.5" height="11" rx="0.75" fill="#F59E0B" />
    <path d="M7 10L11 7L16 4M16 4H13M16 4V7" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ROLE_ICONS = {
  marketing: MarketingRoleIcon,
  operations: OperationsRoleIcon,
  technology: TechRoleIcon,
  design: DesignRoleIcon,
  hr: HrRoleIcon,
  systems: SystemsRoleIcon,
  support: SupportRoleIcon,
  finance: FinanceRoleIcon,
  sales: SalesRoleIcon,
};

// Exact team mapping using verified files in public/images/Team
const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'arifullah-syed',
    name: 'Arifullah Hussaini Syed',
    role: 'Marketing & Growth',
    roleIconType: 'marketing',
    expertise: ['Digital Marketing', 'Branding', 'Advertising', 'SEO', 'Social Media', 'Lead Generation'],
    imageSrc: '/images/Team/Arifullah.jpeg',
    objectPosition: 'center 15%',
    waveOffset: 0,
  },
  {
    id: 'parvez-syed',
    name: 'Parvez Syed',
    role: 'Operations & Business Management',
    roleIconType: 'operations',
    expertise: ['Business Operations', 'Sales', 'Business Development', 'Client Management', 'Partnerships', 'Service Delivery'],
    imageSrc: '/images/Team/Parvez.jpeg',
    objectPosition: 'center 12%',
    waveOffset: 6,
  },
  {
    id: 'sameer-khan',
    name: 'Sameer Khan',
    role: 'Technology & Software',
    roleIconType: 'technology',
    expertise: ['Web Development', 'Software Solutions', 'AI', 'Automation', 'Digital Products', 'Technical Solutions'],
    imageSrc: '/images/Team/sameer.jpg',
    objectPosition: 'center 14%',
    waveOffset: -4,
  },
  {
    id: 'abdullah-shaik',
    name: 'Abdullah Shaik',
    role: 'VFX / UI/UX Designer / Animator / Content',
    roleIconType: 'design',
    expertise: ['VFX', 'UI/UX Design', 'Animation', 'Visual Design', 'Content Creation'],
    imageSrc: '/images/Team/Abdullah.jpeg',
    objectPosition: 'center 18%',
    waveOffset: 5,
  },
  {
    id: 'hafeez-hussain',
    name: 'Hafeez Hussain',
    role: 'Human Resources & People',
    roleIconType: 'hr',
    expertise: ['Recruitment', 'Team Management', 'HR Operations', 'Training', 'Employee Development', 'Company Culture'],
    imageSrc: '/images/Team/Hafeez.png',
    objectPosition: 'center 15%',
    waveOffset: 0,
  },
  {
    id: 'tameem-shaikh',
    name: 'Tameem Shaikh',
    role: 'System Engineer',
    roleIconType: 'systems',
    expertise: ['Server Management', 'Website Optimization', 'Performance', 'Infrastructure', 'System Monitoring', 'Smooth Website Operations'],
    imageSrc: '/images/Team/Tameem.png',
    objectPosition: 'center 15%',
    waveOffset: -5,
  },
  {
    id: 'prasanna-kumar',
    name: 'Prasanna Kumar',
    role: 'Executive Team / Client Support',
    roleIconType: 'support',
    expertise: ['24/7 Client Support', 'Client Communication', 'Executive Support', 'Issue Coordination', 'Customer Assistance'],
    imageSrc: '/images/Team/Prasanna.png',
    objectPosition: 'center 15%',
    waveOffset: 4,
  },
  {
    id: 'imran-syed',
    name: 'Imran Syed',
    role: 'Client & Invoice Management',
    roleIconType: 'finance',
    expertise: ['Client Invoices', 'Documentation', 'Company Standards', 'Process Management', 'Client Coordination'],
    imageSrc: '/images/Team/Imran.png',
    objectPosition: 'center 15%',
    waveOffset: 0,
  },
  {
    id: 'shafi-shaik',
    name: 'Shafi Shaik',
    role: 'Sales & Business Development',
    roleIconType: 'sales',
    expertise: ['Sales', 'Business Development', 'Client Acquisition', 'Lead Generation', 'Client Relations', 'Business Growth'],
    imageSrc: '/images/Team/Shafi.jpeg',
    objectPosition: 'center 15%',
    waveOffset: -4,
  },
];

// Triplicate the 9 team members for seamless infinite marquee loop
const TRAIN_ITEMS = [...TEAM_MEMBERS, ...TEAM_MEMBERS, ...TEAM_MEMBERS];

// Constants for card width + gap
const CARD_WIDTH = 330; // approx px per card
const GAP = 28; // gap px
const ONE_SET_WIDTH = TEAM_MEMBERS.length * (CARD_WIDTH + GAP); // 9 * 358 = 3222px

export const AboutTeam: React.FC = () => {
  // SINGLE SOURCE OF TRUTH for pause state
  const [isManualPaused, setIsManualPaused] = useState(false);
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const isPaused = isManualPaused || selectedMemberId !== null || isHovered;

  // Single motion value for the carousel position
  const x = useMotionValue(0);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  const speed = 45; // pixels per second

  // Coordinated single animation loop via Framer Motion's useAnimationFrame
  useAnimationFrame((time, delta) => {
    if (isPausedRef.current) return;

    // Shift x by delta time fraction
    const moveBy = (delta / 1000) * speed;
    let nextX = x.get() - moveBy;

    // Wrap seamlessly without jump
    if (nextX <= -ONE_SET_WIDTH) {
      nextX += ONE_SET_WIDTH;
    }
    x.set(nextX);
  });

  // Toggle pause/play on main button
  const handleTogglePlayPause = () => {
    setIsManualPaused((prev) => !prev);
    if (selectedMemberId) {
      setSelectedMemberId(null);
    }
  };

  // Toggle selection on card click
  const handleCardClick = (id: string) => {
    setSelectedMemberId((prev) => (prev === id ? null : id));
  };

  // Manual Arrow Navigation (Left / Right)
  const handleArrow = (direction: 'left' | 'right') => {
    const shift = direction === 'left' ? (CARD_WIDTH + GAP) : -(CARD_WIDTH + GAP);
    let targetX = x.get() + shift;

    if (targetX > 0) {
      targetX -= ONE_SET_WIDTH;
    } else if (targetX <= -(ONE_SET_WIDTH * 2)) {
      targetX += ONE_SET_WIDTH;
    }

    animate(x, targetX, {
      type: 'spring',
      stiffness: 250,
      damping: 28,
    });
  };

  return (
    <section
      id="team"
      className="relative bg-white dark:bg-[#08111F] py-20 sm:py-24 lg:py-28 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
      aria-labelledby="about-team-heading"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-brand-orange/5 dark:bg-brand-blue/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl text-center md:text-left mx-auto md:mx-0"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
              OUR TEAM
            </div>
            <h2
              id="about-team-heading"
              className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#08111F] dark:text-white tracking-tight mb-3"
            >
              The People Behind <span className="text-brand-orange">Brandnix</span>
            </h2>
            <p className="font-inter text-sm sm:text-base text-gray-600 dark:text-gray-300">
              A small team with big dreams and unstoppable energy.
            </p>
          </motion.div>

          {/* Accessible Single-Source-of-Truth Manual Controls: Play/Pause & Left/Right Arrows */}
          <div className="flex items-center justify-center md:justify-end gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={handleTogglePlayPause}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-gray-200 dark:border-[#13243B] bg-white dark:bg-[#0B1320] text-gray-700 dark:text-gray-300 hover:border-brand-orange hover:text-brand-orange flex items-center justify-center transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label={isPaused ? 'Play team carousel' : 'Pause team carousel'}
            >
              {isPaused ? <Play className="w-4 h-4 text-brand-orange" /> : <Pause className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => handleArrow('left')}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-gray-200 dark:border-[#13243B] bg-white dark:bg-[#0B1320] text-gray-700 dark:text-gray-300 hover:border-brand-orange hover:text-brand-orange flex items-center justify-center transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label="Previous team member"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleArrow('right')}
              className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full border border-gray-200 dark:border-[#13243B] bg-white dark:bg-[#0B1320] text-gray-700 dark:text-gray-300 hover:border-brand-orange hover:text-brand-orange flex items-center justify-center transition-all shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              aria-label="Next team member"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>

      {/* ================= CONTINUOUS TEAM TRAIN TRACK ================= */}
      <div
        className="relative w-full overflow-hidden group/train py-6 select-none touch-pan-y"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)',
        }}
      >
        {/* Single Coordinated Framer Motion Track */}
        <motion.div
          style={{ x }}
          className="flex gap-7 w-max cursor-grab active:cursor-grabbing touch-pan-y"
          drag="x"
          dragConstraints={{ left: -ONE_SET_WIDTH * 2, right: 0 }}
          dragElastic={0.05}
          onDragStart={() => setIsHovered(true)}
          onDragEnd={() => setIsHovered(false)}
        >
          {TRAIN_ITEMS.map((member, idx) => {
            const IconComp = ROLE_ICONS[member.roleIconType];
            const isSelected = selectedMemberId === member.id;

            return (
              <div
                key={`${member.id}-${idx}`}
                onClick={() => handleCardClick(member.id)}
                style={{
                  transform: `translateY(${member.waveOffset}px)`,
                }}
                className={`w-[270px] min-[375px]:w-[295px] sm:w-[320px] lg:w-[335px] flex-shrink-0 group rounded-3xl bg-white dark:bg-[#13243B]/40 border p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'border-brand-orange shadow-2xl scale-[1.03] -translate-y-2 ring-2 ring-brand-orange/30'
                    : 'border-gray-200/80 dark:border-[#13243B] hover:border-brand-orange/60 hover:-translate-y-2 hover:scale-[1.03] shadow-xs hover:shadow-2xl'
                }`}
                title={isSelected ? 'Click to resume movement' : 'Click to inspect member'}
              >
                <div>
                  {/* Premium Circular Portrait Frame */}
                  <div className="flex justify-center mb-5 pt-1">
                    <div className="relative group-hover:-translate-y-1 transition-transform duration-300">
                      
                      {/* Outer Glowing Gradient Ring */}
                      <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-tr from-brand-orange via-purple-500 to-blue-500 blur-[2px] transition-opacity duration-300 ${
                        isSelected ? 'opacity-100' : 'opacity-40 group-hover:opacity-100 animate-pulse'
                      }`} />
                      
                      {/* Inner Circular Card Container */}
                      <div className="relative w-[135px] h-[135px] sm:w-[150px] sm:h-[150px] rounded-full p-[3px] bg-white dark:bg-[#08111F] shadow-[0_10px_25px_rgba(8,17,31,0.12)]">
                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-100 dark:bg-[#0B1320] border-2 border-brand-orange/40 group-hover:border-brand-orange transition-colors duration-300">
                          <img
                            src={member.imageSrc}
                            alt={member.name}
                            style={{ objectPosition: member.objectPosition || 'center top' }}
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Centered Name */}
                  <div className="text-center mb-2">
                    <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#08111F] dark:text-white leading-snug group-hover:text-brand-orange transition-colors">
                      {member.name}
                    </h3>
                  </div>

                  {/* Centered Role with 3D Colored Icon */}
                  <div className="flex items-center justify-center gap-2 mb-4 pb-3.5 border-b border-gray-100 dark:border-[#13243B]/80">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/[0.08] dark:bg-amber-500/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComp />
                    </div>
                    <span className="font-inter text-xs font-bold text-brand-orange uppercase tracking-wider text-center">
                      {member.role}
                    </span>
                  </div>

                  {/* Left-Aligned Key Specializations */}
                  <div className="space-y-1.5">
                    <span className="font-inter text-[10.5px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
                      KEY SPECIALIZATIONS:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {member.expertise.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-lg bg-gray-50 dark:bg-[#0B1320] border border-gray-200/60 dark:border-[#13243B] text-[11px] font-inter text-gray-700 dark:text-gray-300 hover:border-brand-orange/40 hover:text-brand-orange hover:-translate-y-0.5 transition-all duration-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className="mt-5 pt-2">
                  <div className="h-[2.5px] w-8 bg-brand-orange/30 group-hover:w-full group-hover:bg-brand-orange transition-all duration-500 rounded-full" />
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;
