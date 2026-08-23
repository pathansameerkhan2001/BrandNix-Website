'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

// 01 - Website Development Illustration
export const WebsiteDevIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="wd-monitor-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E293B" />
        <stop offset="100%" stopColor="#0B1320" />
      </linearGradient>
      <linearGradient id="wd-screen-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.9" />
      </linearGradient>
      <linearGradient id="wd-orange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="wd-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="3" stdDeviation="2" floodColor="#0B1320" floodOpacity="0.3" />
      </filter>
    </defs>
    
    {/* Base Monitor Stand */}
    <path d="M24 43H32V47H24V43Z" fill="#64748B" />
    <path d="M20 47H36C36.5 47 37 47.5 37 48C37 48.5 36.5 49 36 49H20C19.5 49 19 48.5 19 48C19 47.5 19.5 47 20 47Z" fill="#94A3B8" />
    
    {/* Monitor Body */}
    <rect x="6" y="8" width="38" height="28" rx="4" fill="url(#wd-monitor-bg)" filter="url(#wd-shadow)" stroke="#475569" strokeWidth="1" />
    {/* Monitor Screen Area */}
    <rect x="8" y="11" width="34" height="22" rx="2" fill="url(#wd-screen-glow)" />
    
    {/* Browser Bar */}
    <rect x="8" y="11" width="34" height="5" rx="2" fill="#0F172A" fillOpacity="0.7" />
    <circle cx="11.5" cy="13.5" r="1" fill="#EF4444" />
    <circle cx="14.5" cy="13.5" r="1" fill="#F59E0B" />
    <circle cx="17.5" cy="13.5" r="1" fill="#22C55E" />
    <rect x="21" y="12.5" width="18" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.25" />
    
    {/* Code Brackets on Screen */}
    <path d="M16 23L12 26L16 29" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21L19 31" stroke="#F59E0B" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M24 23L28 26L24 29" stroke="#FFFFFF" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />

    {/* Floating Responsive Mobile Device on Right */}
    <rect x="36" y="20" width="14" height="26" rx="3" fill="#0F172A" filter="url(#wd-shadow)" stroke="#64748B" strokeWidth="1" />
    <rect x="38" y="23" width="10" height="20" rx="1.5" fill="url(#wd-orange)" />
    <rect x="40" y="26" width="6" height="2" rx="0.5" fill="#FFFFFF" />
    <rect x="40" y="30" width="4" height="2" rx="0.5" fill="#FFFFFF" fillOpacity="0.8" />
    <circle cx="43" cy="41" r="0.8" fill="#FFFFFF" />
  </svg>
);

// 02 - Website Maintenance Illustration
export const WebsiteMaintIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="wm-screen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#0369A1" />
      </linearGradient>
      <linearGradient id="wm-gear" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="wm-shield" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
    </defs>
    
    {/* Base Laptop */}
    <rect x="8" y="10" width="36" height="25" rx="3" fill="#0B1320" stroke="#334155" strokeWidth="1" />
    <rect x="11" y="13" width="30" height="19" rx="2" fill="url(#wm-screen)" />
    <path d="M4 35H48C49 35 50 35.8 49.5 37L48 40H4L2.5 37C2 35.8 3 35 4 35Z" fill="#64748B" />
    <rect x="22" y="36" width="8" height="1.5" rx="0.5" fill="#94A3B8" />

    {/* 3D Gear */}
    <g transform="translate(34, 18)">
      <circle cx="9" cy="9" r="8" fill="url(#wm-gear)" stroke="#B45309" strokeWidth="0.8" />
      <circle cx="9" cy="9" r="3.5" fill="#0B1320" />
      {/* Gear Teeth */}
      <rect x="7.5" y="-1" width="3" height="3" rx="0.5" fill="#F59E0B" />
      <rect x="7.5" y="16" width="3" height="3" rx="0.5" fill="#F59E0B" />
      <rect x="-1" y="7.5" width="3" height="3" rx="0.5" fill="#F59E0B" />
      <rect x="16" y="7.5" width="3" height="3" rx="0.5" fill="#F59E0B" />
    </g>

    {/* Security Shield */}
    <g transform="translate(14, 17)">
      <path d="M7 0L14 3V8C14 12.5 11 16 7 17C3 16 0 12.5 0 8V3L7 0Z" fill="url(#wm-shield)" />
      <path d="M4 8L6.5 10.5L10.5 5.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 03 - Social Media Marketing Illustration
export const SocialMediaMktIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="smm-phone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" />
        <stop offset="100%" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="smm-heart" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#E11D48" />
      </linearGradient>
      <linearGradient id="smm-bubble" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="smm-insta" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    
    {/* Smartphone Frame */}
    <rect x="15" y="8" width="26" height="42" rx="5" fill="#0B1320" stroke="#334155" strokeWidth="1" />
    <rect x="17" y="12" width="22" height="34" rx="3" fill="url(#smm-phone)" />
    <circle cx="28" cy="10" r="1" fill="#64748B" />

    {/* App Visual Content on Screen */}
    <rect x="20" y="16" width="16" height="12" rx="2" fill="url(#smm-insta)" />
    <rect x="20" y="31" width="16" height="3" rx="1.5" fill="#FFFFFF" fillOpacity="0.9" />
    <rect x="20" y="36" width="10" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.6" />

    {/* Floating 3D Heart Notification */}
    <g transform="translate(6, 14)">
      <circle cx="9" cy="9" r="8" fill="url(#smm-heart)" />
      <path d="M9 13S5 10 5 7.5C5 5.8 6.3 4.5 8 4.5C8.8 4.5 9 5 9 5S9.2 4.5 10 4.5C11.7 4.5 13 5.8 13 7.5C13 10 9 13 9 13Z" fill="#FFFFFF" />
    </g>

    {/* Floating Like / Thumb Badge */}
    <g transform="translate(36, 28)">
      <circle cx="8" cy="8" r="7.5" fill="#2563EB" />
      <path d="M6 10V7M6 7H7.5L9.5 4.5V3.5C9.5 3.5 10.5 4 10.5 5V7H12C12.5 7 13 7.5 13 8L12.5 10.5C12.3 11.2 11.5 11.5 10.8 11.5H7.5C6.7 11.5 6 10.8 6 10Z" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Floating Comment Badge */}
    <g transform="translate(33, 6)">
      <rect x="0" y="0" width="15" height="12" rx="4" fill="url(#smm-bubble)" />
      <circle cx="4.5" cy="6" r="1" fill="#FFFFFF" />
      <circle cx="7.5" cy="6" r="1" fill="#FFFFFF" />
      <circle cx="10.5" cy="6" r="1" fill="#FFFFFF" />
    </g>
  </svg>
);

// 04 - Social Media Handling & Management Illustration
export const SocialMediaMgmtIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="smmg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0284C7" />
        <stop offset="100%" stopColor="#4F46E5" />
      </linearGradient>
      <linearGradient id="smmg-orange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    
    {/* Central Community Dashboard Phone */}
    <rect x="14" y="9" width="28" height="40" rx="5" fill="#0B1320" stroke="#334155" strokeWidth="1" />
    <rect x="17" y="13" width="22" height="32" rx="3" fill="url(#smmg-grad)" />

    {/* User Avatars Connection on Screen */}
    <circle cx="28" cy="22" r="4.5" fill="url(#smmg-orange)" />
    <path d="M22 31C22 28.5 24.5 27 28 27C31.5 27 34 28.5 34 31V33H22V31Z" fill="#FFFFFF" />
    
    {/* Community Chat Cloud 1 */}
    <g transform="translate(4, 12)">
      <circle cx="7" cy="7" r="6.5" fill="#10B981" />
      <path d="M5 7L6.5 8.5L9.5 5.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Community Chat Cloud 2 */}
    <g transform="translate(37, 10)">
      <rect x="0" y="0" width="14" height="11" rx="3.5" fill="#F59E0B" />
      <path d="M4 5.5H10M4 8H8" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* Management Activity Graph at bottom */}
    <rect x="20" y="38" width="3" height="4" rx="0.5" fill="#22C55E" />
    <rect x="25" y="36" width="3" height="6" rx="0.5" fill="#F59E0B" />
    <rect x="30" y="34" width="3" height="8" rx="0.5" fill="#38BDF8" />
  </svg>
);

// 05 - Content Posting, Reels & Influencer Marketing Illustration
export const ContentReelsIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="cr-screen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EC4899" />
        <stop offset="50%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
      <linearGradient id="cr-play" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    
    {/* Video Camera Phone */}
    <rect x="15" y="8" width="26" height="42" rx="5" fill="#0B1320" stroke="#334155" strokeWidth="1" />
    <rect x="17" y="12" width="22" height="34" rx="3" fill="url(#cr-screen)" />

    {/* 3D Play Button In Center */}
    <circle cx="28" cy="28" r="8" fill="#FFFFFF" fillOpacity="0.9" />
    <polygon points="26,24 33,28 26,32" fill="url(#cr-play)" />

    {/* Floating Video Film Frame Top Right */}
    <g transform="translate(36, 10)">
      <rect x="0" y="0" width="14" height="12" rx="2.5" fill="#EF4444" />
      <polygon points="5,4 10,6 5,8" fill="#FFFFFF" />
    </g>

    {/* Floating Influencer Star Badge Left */}
    <g transform="translate(6, 26)">
      <circle cx="7" cy="7" r="6.5" fill="#F59E0B" />
      <polygon points="7,2 8.5,5.5 12,6 9.5,8.5 10,12 7,10 4,12 4.5,8.5 2,6 5.5,5.5" fill="#FFFFFF" />
    </g>
  </svg>
);

// 06 - Startup Building Package Illustration
export const StartupPkgIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="sp-rocket" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="sp-fire" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
      <linearGradient id="sp-wing" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    
    {/* Rocket Body Angled 45 deg */}
    <g transform="translate(8, 8)">
      {/* Fiery Exhaust */}
      <path d="M9 31C8 35 11 39 11 39C11 39 15 36 14 32Z" fill="url(#sp-fire)" />
      <circle cx="11.5" cy="35" r="2.5" fill="#FBBF24" />

      {/* Main Rocket Fuselage */}
      <path d="M12 28L28 12C33 7 35 4 35 4C35 4 32 6 27 11L11 27C10 28 10 30 11 31C12 32 14 32 15 31L12 28Z" fill="url(#sp-rocket)" stroke="#CBD5E1" strokeWidth="0.8" />
      
      {/* Rocket Nosecone Tip */}
      <path d="M28 11C33 6 35 4 35 4C35 4 33 6 28 11Z" fill="#EF4444" />
      
      {/* Wings */}
      <path d="M14 26L8 28L11 22Z" fill="url(#sp-wing)" />
      <path d="M24 16L26 10L20 13Z" fill="url(#sp-wing)" />
      
      {/* Window */}
      <circle cx="23" cy="16" r="3.5" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
      <circle cx="22" cy="15" r="1" fill="#FFFFFF" />
    </g>

    {/* Idea Lightbulb in top left */}
    <g transform="translate(6, 6)">
      <circle cx="7" cy="7" r="5" fill="#F59E0B" />
      <path d="M6 12H8" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" />
    </g>

    {/* Upward Growth Arrow in bottom right */}
    <g transform="translate(36, 34)">
      <circle cx="7" cy="7" r="6" fill="#10B981" />
      <path d="M4 9L10 3M10 3H6M10 3V7" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 07 - Outsourcing Services Illustration
export const OutsourcingIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="os-node1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="os-node2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="os-node3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
    </defs>
    
    {/* Interconnecting Network Bridges */}
    <path d="M16 38L28 18L40 38" stroke="#94A3B8" strokeWidth="2" strokeDasharray="3 2" />
    <path d="M16 38H40" stroke="#94A3B8" strokeWidth="2" />

    {/* Center Laptop / Hub */}
    <rect x="22" y="24" width="12" height="9" rx="1.5" fill="#0B1320" stroke="#475569" strokeWidth="0.8" />
    <rect x="24" y="26" width="8" height="5" rx="0.5" fill="#38BDF8" />
    <rect x="20" y="33" width="16" height="2" rx="0.5" fill="#64748B" />

    {/* Member 1 Top (Leader / Project Manager) */}
    <g transform="translate(21, 8)">
      <circle cx="7" cy="7" r="6.5" fill="url(#os-node2)" />
      <path d="M4 11C4 9.5 5.5 8 7 8C8.5 8 10 9.5 10 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="5.5" r="2" fill="#FFFFFF" />
    </g>

    {/* Member 2 Left (Developer / Remote Specialist) */}
    <g transform="translate(9, 32)">
      <circle cx="7" cy="7" r="6.5" fill="url(#os-node1)" />
      <path d="M4 11C4 9.5 5.5 8 7 8C8.5 8 10 9.5 10 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="5.5" r="2" fill="#FFFFFF" />
    </g>

    {/* Member 3 Right (Support / Operations) */}
    <g transform="translate(33, 32)">
      <circle cx="7" cy="7" r="6.5" fill="url(#os-node3)" />
      <path d="M4 11C4 9.5 5.5 8 7 8C8.5 8 10 9.5 10 11" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="5.5" r="2" fill="#FFFFFF" />
    </g>
  </svg>
);

// 08 - E-Commerce Solutions Illustration
export const EcommerceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="ec-cart" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="ec-bag" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="ec-box" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    
    {/* Product Parcel Inside Cart */}
    <g transform="translate(22, 14)">
      <rect x="0" y="4" width="13" height="12" rx="2" fill="url(#ec-box)" />
      <rect x="5" y="4" width="3" height="12" fill="#B45309" />
      <rect x="0" y="8" width="13" height="3" fill="#B45309" />
    </g>

    {/* Shopping Bag Behind Cart */}
    <g transform="translate(13, 10)">
      <rect x="0" y="6" width="12" height="14" rx="2" fill="url(#ec-bag)" />
      <path d="M3 6V4C3 2.5 4.5 1 6 1C7.5 1 9 2.5 9 4V6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* 3D Wireframe Shopping Cart */}
    <path d="M8 12H13L18 31H38L42 17H15" stroke="url(#ec-cart)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 23H39M20 27H37" stroke="url(#ec-cart)" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Cart Wheels */}
    <circle cx="20" cy="38" r="3.5" fill="#0B1320" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="36" cy="38" r="3.5" fill="#0B1320" stroke="#F59E0B" strokeWidth="1.5" />

    {/* Floating Payment / Sales Checkmark */}
    <g transform="translate(36, 8)">
      <circle cx="7" cy="7" r="6" fill="#10B981" />
      <path d="M4 7L6.5 9.5L10 4.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 09 - Branding & Identity Design Illustration
export const BrandingDesignIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="bd-palette" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFBEB" />
        <stop offset="100%" stopColor="#FEF3C7" />
      </linearGradient>
      <linearGradient id="bd-pen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    
    {/* Artist Palette */}
    <path
      d="M10 26C10 16 18 8 28 8C38 8 46 15 46 25C46 32 41 35 37 35C35 35 34 33.5 32 33.5C30 33.5 28.5 35 28.5 37C28.5 40.5 25 44 20 44C14 44 10 36 10 26Z"
      fill="url(#bd-palette)"
      stroke="#D97706"
      strokeWidth="1.5"
    />
    
    {/* Vibrant Paint Swatches */}
    <circle cx="19" cy="18" r="3.5" fill="#EF4444" />
    <circle cx="28" cy="15" r="3.5" fill="#F59E0B" />
    <circle cx="37" cy="19" r="3.5" fill="#3B82F6" />
    <circle cx="40" cy="27" r="3.5" fill="#8B5CF6" />
    
    {/* Palette Grip Hole */}
    <ellipse cx="18" cy="33" rx="3" ry="4" fill="#0B1320" />

    {/* Designer Vector Stylus Tool */}
    <g transform="translate(28, 20)">
      <path d="M16 2L18 4L4 18L1 19L2 16L16 2Z" fill="url(#bd-pen)" stroke="#9A3412" strokeWidth="0.8" />
      <polygon points="1,19 4,18 2,16" fill="#0B1320" />
      <circle cx="16" cy="4" r="1" fill="#FFFFFF" />
    </g>
  </svg>
);

// 10 - AI Solutions & Automation Illustration
export const AiSolutionsIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="ai-chip" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1E1B4B" />
        <stop offset="100%" stopColor="#0B1320" />
      </linearGradient>
      <linearGradient id="ai-glow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#3B82F6" />
      </linearGradient>
    </defs>
    
    {/* Chip Connector Pins */}
    <g stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round">
      <line x1="18" y1="6" x2="18" y2="10" />
      <line x1="28" y1="6" x2="28" y2="10" />
      <line x1="38" y1="6" x2="38" y2="10" />
      
      <line x1="18" y1="46" x2="18" y2="50" />
      <line x1="28" y1="46" x2="28" y2="50" />
      <line x1="38" y1="46" x2="38" y2="50" />
      
      <line x1="6" y1="18" x2="10" y2="18" />
      <line x1="6" y1="28" x2="10" y2="28" />
      <line x1="6" y1="38" x2="10" y2="38" />
      
      <line x1="46" y1="18" x2="50" y2="18" />
      <line x1="46" y1="28" x2="50" y2="28" />
      <line x1="46" y1="38" x2="50" y2="38" />
    </g>

    {/* Main Silicon Processor */}
    <rect x="10" y="10" width="36" height="36" rx="6" fill="url(#ai-chip)" stroke="#4338CA" strokeWidth="1.5" />
    <rect x="16" y="16" width="24" height="24" rx="3" fill="url(#ai-glow)" fillOpacity="0.3" stroke="#8B5CF6" strokeWidth="1" />

    {/* Neural Circuit Lines */}
    <circle cx="28" cy="28" r="4" fill="#F59E0B" />
    <circle cx="22" cy="22" r="2" fill="#38BDF8" />
    <circle cx="34" cy="22" r="2" fill="#38BDF8" />
    <circle cx="22" cy="34" r="2" fill="#38BDF8" />
    <circle cx="34" cy="34" r="2" fill="#38BDF8" />
    
    <path d="M22 22L28 28L34 22M22 34L28 28L34 34" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

// 11 - Lead Generation & Sales Growth Illustration
export const LeadGenIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="lg-target" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#B91C1C" />
      </linearGradient>
      <linearGradient id="lg-arrow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    
    {/* Target Bullseye Rings */}
    <circle cx="26" cy="30" r="18" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
    <circle cx="26" cy="30" r="12" fill="#FFFFFF" stroke="#EF4444" strokeWidth="1.5" />
    <circle cx="26" cy="30" r="6" fill="url(#lg-target)" />

    {/* Upward Sales Growth Arrow piercing target */}
    <path d="M12 44L38 18" stroke="url(#lg-arrow)" strokeWidth="3" strokeLinecap="round" />
    <polygon points="38,13 42,22 33,18" fill="url(#lg-arrow)" />

    {/* Lead Notification Stars */}
    <g transform="translate(36, 6)">
      <circle cx="7" cy="7" r="6.5" fill="#10B981" />
      <path d="M7 3.5V10.5M3.5 7H10.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </g>
    <circle cx="12" cy="18" r="2" fill="#F59E0B" />
  </svg>
);

// 12 - Other Custom Solutions Illustration
export const CustomSolutionsIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="cs-puz1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="cs-puz2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
      <linearGradient id="cs-puz3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="cs-puz4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    
    {/* 4 Interlocking Puzzle Blocks */}
    {/* Top Left Block (Blue) */}
    <rect x="11" y="11" width="16" height="16" rx="3" fill="url(#cs-puz1)" />
    <circle cx="19" cy="19" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />
    
    {/* Top Right Block (Orange) */}
    <rect x="29" y="11" width="16" height="16" rx="3" fill="url(#cs-puz2)" />
    <circle cx="37" cy="19" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />

    {/* Bottom Left Block (Purple) */}
    <rect x="11" y="29" width="16" height="16" rx="3" fill="url(#cs-puz4)" />
    <circle cx="19" cy="37" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />

    {/* Bottom Right Block (Green) */}
    <rect x="29" y="29" width="16" height="16" rx="3" fill="url(#cs-puz3)" />
    <circle cx="37" cy="37" r="2.5" fill="#FFFFFF" fillOpacity="0.8" />

    {/* Center Code Indicator */}
    <circle cx="28" cy="28" r="5" fill="#0B1320" stroke="#F59E0B" strokeWidth="1.2" />
    <path d="M26 26.5L24.5 28L26 29.5M30 26.5L31.5 28L30 29.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
  </svg>
);
