'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SERVICE_MEGA_MENU } from '@/data/navigation';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// 4 Category Header Icons
const WebCategoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="5" width="26" height="19" rx="3" fill="#08111F" stroke="#3B82F6" strokeWidth="1.5" />
    <rect x="5" y="7" width="22" height="14" rx="1.5" fill="#1E293B" />
    <path d="M12 11L8 14L12 17M20 11L24 14L20 17" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 10L15 18" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M11 28H21M16 24V28" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const SocialCategoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 11L20 5V24L7 18V11Z" fill="#8B5CF6" fillOpacity="0.2" stroke="#8B5CF6" strokeWidth="1.5" />
    <path d="M20 9C23 11 25 13 25 15C25 17 23 19 20 20" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    <rect x="3" y="11" width="5" height="7" rx="1.5" fill="#F59E0B" />
    <path d="M9 19L7 26" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const MarketingCategoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="18" width="4" height="10" rx="1" fill="#94A3B8" />
    <rect x="11" y="13" width="4" height="15" rx="1" fill="#3B82F6" />
    <rect x="18" y="8" width="4" height="20" rx="1" fill="#22C55E" />
    <rect x="25" y="4" width="4" height="24" rx="1" fill="#F59E0B" />
    <path d="M6 16L13 11L20 6L27 3" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const OtherCategoryIcon = () => (
  <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10" height="10" rx="2.5" fill="#3B82F6" />
    <rect x="18" y="4" width="10" height="10" rx="2.5" fill="#F59E0B" />
    <rect x="4" y="18" width="10" height="10" rx="2.5" fill="#8B5CF6" />
    <rect x="18" y="18" width="10" height="10" rx="2.5" fill="#22C55E" />
  </svg>
);

const CATEGORY_ICONS = {
  web: WebCategoryIcon,
  social: SocialCategoryIcon,
  marketing: MarketingCategoryIcon,
  other: OtherCategoryIcon,
};

export const ServicesMegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`absolute top-full left-1/2 -translate-x-1/2 w-[92vw] max-w-[1240px] pt-3 z-50 transition-all duration-300 ${
        isOpen
          ? 'opacity-100 visible translate-y-0 pointer-events-auto'
          : 'opacity-0 invisible -translate-y-2 pointer-events-none'
      }`}
      onMouseLeave={onClose}
      role="region"
      aria-label="Services Mega Menu"
    >
      <div className="bg-white dark:bg-[#08111F] border border-gray-200/90 dark:border-[#13243B] rounded-3xl shadow-[0_20px_60px_rgba(8,17,31,0.18)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-6 sm:p-8 backdrop-blur-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-gray-100 dark:divide-[#13243B]">
          
          {SERVICE_MEGA_MENU.map((cat, idx) => {
            const IconComponent = CATEGORY_ICONS[cat.iconType];
            return (
              <div
                key={cat.id}
                className={`flex flex-col justify-between ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-6 xl:pl-8' : ''}`}
              >
                <div>
                  {/* Category Header */}
                  <Link
                    href={cat.href}
                    onClick={onClose}
                    className="group/cat flex items-center gap-3 pb-3 mb-3 border-b border-gray-100 dark:border-[#13243B]/80"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/[0.08] dark:bg-amber-500/10 border border-brand-orange/20 flex items-center justify-center flex-shrink-0 group-hover/cat:scale-105 transition-transform">
                      <IconComponent />
                    </div>
                    <h3 className="font-playfair text-sm xl:text-[15px] font-bold text-[#08111F] dark:text-white tracking-wide group-hover/cat:text-brand-orange transition-colors">
                      {cat.title}
                    </h3>
                  </Link>

                  {/* Service Items Link List */}
                  <ul className="space-y-1 my-2">
                    {cat.items.map((item) => (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className="group/link flex items-center justify-between py-1.5 px-2 rounded-lg text-[13px] font-inter text-gray-600 dark:text-gray-300 hover:text-brand-orange hover:bg-brand-orange/[0.06] dark:hover:bg-brand-orange/10 transition-all"
                        >
                          <span className="leading-snug">{item.label}</span>
                          <ArrowRight className="w-3 h-3 text-brand-orange opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all flex-shrink-0 ml-1.5" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Category CTA */}
                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#13243B]/80">
                  <Link
                    href={cat.href}
                    onClick={onClose}
                    className="w-full py-2 px-3 rounded-xl border border-brand-orange/30 hover:border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white font-inter text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>{cat.ctaText}</span>
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};

export default ServicesMegaMenu;
