'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

// 01 - Website Design & Development Illustration
export const WebDevServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-wd-screen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="srv-wd-phone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <filter id="srv-wd-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#3B82F6" floodOpacity="0.4" />
      </filter>
    </defs>
    
    {/* Monitor Stand */}
    <path d="M24 43H32V47H24V43Z" fill="#64748B" />
    <path d="M19 47H37C37.5 47 38 47.5 38 48C38 48.5 37.5 49 37 49H19C18.5 49 18 48.5 18 48C18 47.5 18.5 47 19 47Z" fill="#94A3B8" />

    {/* Monitor Body */}
    <rect x="6" y="8" width="38" height="28" rx="4" fill="#0B1320" stroke="#475569" strokeWidth="1.2" />
    <rect x="8" y="11" width="34" height="22" rx="2" fill="url(#srv-wd-screen)" filter="url(#srv-wd-glow)" />

    {/* Browser Bar */}
    <rect x="8" y="11" width="34" height="5" rx="2" fill="#0F172A" fillOpacity="0.75" />
    <circle cx="11.5" cy="13.5" r="1.2" fill="#EF4444" />
    <circle cx="15" cy="13.5" r="1.2" fill="#F59E0B" />
    <circle cx="18.5" cy="13.5" r="1.2" fill="#22C55E" />
    <rect x="22" y="12.5" width="17" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.3" />

    {/* Code Brackets on Screen */}
    <path d="M16 23L12 26L16 29" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M21 21L19 31" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 23L28 26L24 29" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

    {/* Responsive Mobile Device on Right */}
    <rect x="36" y="20" width="14" height="26" rx="3.5" fill="#0B1320" stroke="#64748B" strokeWidth="1.2" />
    <rect x="38" y="23" width="10" height="20" rx="2" fill="url(#srv-wd-phone)" />
    <rect x="40" y="26" width="6" height="2" rx="0.5" fill="#FFFFFF" />
    <rect x="40" y="30" width="4" height="2" rx="0.5" fill="#FFFFFF" fillOpacity="0.8" />
    <circle cx="43" cy="41" r="0.9" fill="#FFFFFF" />
  </svg>
);

// 02 - Digital Marketing Illustration
export const DigitalMarketingServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-dm-mega" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="srv-dm-cone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="srv-dm-wave" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    
    {/* Megaphone Handle */}
    <path d="M17 31L13 41C12.5 42.5 14 43.5 15.5 43L19 32" fill="#D97706" stroke="#B45309" strokeWidth="1" />
    
    {/* Megaphone Main Cone */}
    <path d="M15 20L35 11V37L15 28V20Z" fill="url(#srv-dm-cone)" stroke="#94A3B8" strokeWidth="1" />
    
    {/* Megaphone Back Chamber */}
    <rect x="9" y="20" width="7" height="9" rx="2" fill="url(#srv-dm-mega)" />
    
    {/* Megaphone Front Bell Rim */}
    <ellipse cx="35" cy="24" rx="3.5" ry="13" fill="url(#srv-dm-mega)" stroke="#D97706" strokeWidth="1" />
    
    {/* Sound Propagation Waves (Multi-Color) */}
    <path d="M42 16C45 18 47 21 47 24C47 27 45 30 42 32" stroke="url(#srv-dm-wave)" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M47 11C51 14 53 19 53 24C53 29 51 34 47 37" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Spark / Growth Star */}
    <g transform="translate(38, 5)">
      <polygon points="4,0 5,3 8,4 5,5 4,8 3,5 0,4 3,3" fill="#EF4444" />
    </g>
  </svg>
);

// 03 - Social Media Marketing Illustration
export const SocialMediaServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-smm-insta" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#EC4899" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    
    {/* Central 2x2 App Grid Card */}
    <rect x="7" y="7" width="42" height="42" rx="10" fill="#0B1320" stroke="#334155" strokeWidth="1.2" />

    {/* 1. Facebook Blue App Badge (Top Left) */}
    <rect x="12" y="12" width="14" height="14" rx="3.5" fill="#1877F2" />
    <text x="21" y="23" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="12" textAnchor="middle">f</text>

    {/* 2. Instagram Gradient App Badge (Top Right) */}
    <rect x="30" y="12" width="14" height="14" rx="3.5" fill="url(#srv-smm-insta)" />
    <rect x="33" y="15" width="8" height="8" rx="2" stroke="#FFFFFF" strokeWidth="1.2" fill="none" />
    <circle cx="37" cy="19" r="2" stroke="#FFFFFF" strokeWidth="1" fill="none" />
    <circle cx="39.5" cy="16.5" r="0.6" fill="#FFFFFF" />

    {/* 3. LinkedIn Blue App Badge (Bottom Left) */}
    <rect x="12" y="30" width="14" height="14" rx="3.5" fill="#0A66C2" />
    <text x="19" y="41" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="10" textAnchor="middle">in</text>

    {/* 4. YouTube / Twitter Red/Cyan Badge (Bottom Right) */}
    <rect x="30" y="30" width="14" height="14" rx="3.5" fill="#FF0000" />
    <polygon points="35,34 40,37 35,40" fill="#FFFFFF" />

    {/* Floating 3D Heart Over center */}
    <g transform="translate(22, 22)">
      <circle cx="6" cy="6" r="6" fill="#EC4899" stroke="#FFFFFF" strokeWidth="1" />
      <path d="M6 9S3 7.2 3 5.4C3 4.2 3.9 3.3 5.1 3.3C5.7 3.3 6 3.6 6 3.6S6.3 3.3 6.9 3.3C8.1 3.3 9 4.2 9 5.4C9 7.2 6 9 6 9Z" fill="#FFFFFF" />
    </g>
  </svg>
);

// 04 - Search Engine Optimization (SEO) Illustration
export const SeoServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-seo-rim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="srv-seo-lens" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E0F2FE" />
        <stop offset="100%" stopColor="#BAE6FD" />
      </linearGradient>
    </defs>
    
    {/* Analytics Bar Graph Behind Lens */}
    <g transform="translate(6, 12)">
      <rect x="2" y="18" width="5" height="14" rx="1" fill="#94A3B8" />
      <rect x="9" y="12" width="5" height="20" rx="1" fill="#3B82F6" />
      <rect x="16" y="6" width="5" height="26" rx="1" fill="#22C55E" />
      <rect x="23" y="0" width="5" height="32" rx="1" fill="#F59E0B" />
    </g>

    {/* Large 3D Magnifying Glass */}
    <g transform="translate(14, 6)">
      {/* Handle */}
      <path d="M22 24L34 36C35.5 37.5 37.5 35.5 36 34L24 22" stroke="#0B1320" strokeWidth="5" strokeLinecap="round" />
      <path d="M22 24L34 36C35.5 37.5 37.5 35.5 36 34L24 22" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
      
      {/* Lens Circle Rim */}
      <circle cx="14" cy="14" r="13" fill="url(#srv-seo-lens)" stroke="url(#srv-seo-rim)" strokeWidth="3" />
      
      {/* Bullseye Concentric Targets inside Lens */}
      <circle cx="14" cy="14" r="7.5" stroke="#EF4444" strokeWidth="1.5" fill="none" />
      <circle cx="14" cy="14" r="3" fill="#EF4444" />
      
      {/* Upward Growth Arrow inside Lens */}
      <path d="M8 18L13 13L16 16L20 10M20 10H16.5M20 10V13.5" stroke="#16A34A" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 05 - Google Ads & PPC Advertising Illustration
export const GoogleAdsServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-ga-blue" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4285F4" />
        <stop offset="100%" stopColor="#2563EB" />
      </linearGradient>
      <linearGradient id="srv-ga-yellow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBC05" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
      <linearGradient id="srv-ga-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#34A853" />
        <stop offset="100%" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    
    {/* 3D Google Ads Diagonal Ribbon Loops */}
    <g transform="translate(10, 10)">
      {/* Blue Bar (Angled) */}
      <rect x="4" y="14" width="10" height="24" rx="5" transform="rotate(-30 4 14)" fill="url(#srv-ga-blue)" />
      
      {/* Yellow/Orange Bar (Angled) */}
      <rect x="22" y="2" width="10" height="24" rx="5" transform="rotate(30 22 2)" fill="url(#srv-ga-yellow)" />
      
      {/* Green End Dot */}
      <circle cx="27" cy="27" r="5" fill="url(#srv-ga-green)" />
    </g>

    {/* Target Pointer / Click Cursor */}
    <g transform="translate(32, 28)">
      <polygon points="0,0 4,14 7,10 12,12 14,8 9,7 13,3" fill="#0B1320" stroke="#FFFFFF" strokeWidth="1.5" />
    </g>
  </svg>
);

// 06 - WhatsApp Marketing & Automation Illustration
export const WhatsappServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-wa-green" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#128C7E" />
      </linearGradient>
    </defs>
    
    {/* WhatsApp Green Bubble with Tail */}
    <path
      d="M28 6C15.8 6 6 15.8 6 28C6 32.2 7.2 36.1 9.3 39.4L6 49L16 45.8C19.2 47.8 23.5 49 28 49C40.2 49 50 39.2 50 28C50 15.8 40.2 6 28 6Z"
      fill="url(#srv-wa-green)"
    />
    
    {/* Telephone Handset Inside Bubble */}
    <path
      d="M37 32.5C36.4 32.3 33.7 31 33.2 30.8C32.7 30.6 32.3 30.5 32 31C31.7 31.5 30.7 32.7 30.4 33C30.1 33.3 29.8 33.4 29.2 33.1C28.6 32.8 26.8 32.2 24.6 30.2C22.9 28.7 21.7 26.8 21.4 26.2C21.1 25.6 21.4 25.3 21.7 25C21.9 24.8 22.3 24.3 22.6 23.9C22.9 23.5 23 23.2 23.2 22.8C23.4 22.4 23.3 22 23.1 21.7C22.9 21.4 22 19.1 21.6 18.2C21.2 17.3 20.8 17.4 20.5 17.4C20.2 17.4 19.8 17.4 19.4 17.4C19 17.4 18.4 17.5 17.9 18C17.4 18.5 16 19.8 16 22.6C16 25.4 18 28.1 18.3 28.5C18.6 28.9 22.3 34.6 27.9 37C29.2 37.6 30.3 38 31.1 38.3C32.4 38.7 33.6 38.6 34.5 38.5C35.5 38.3 37.6 37.2 38 36C38.4 34.8 38.4 33.7 38.3 33.5C38.1 33.3 37.6 32.7 37 32.5Z"
      fill="#FFFFFF"
    />

    {/* Automation Gear in top right */}
    <g transform="translate(34, 4)">
      <circle cx="8" cy="8" r="7" fill="#F59E0B" stroke="#B45309" strokeWidth="1" />
      <circle cx="8" cy="8" r="3" fill="#0B1320" />
      <rect x="7" y="0" width="2" height="3" fill="#F59E0B" />
      <rect x="7" y="13" width="2" height="3" fill="#F59E0B" />
      <rect x="0" y="7" width="3" height="2" fill="#F59E0B" />
      <rect x="13" y="7" width="3" height="2" fill="#F59E0B" />
    </g>
  </svg>
);

// 07 - Email Marketing Illustration
export const EmailMarketingServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-em-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="srv-em-letter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    
    {/* Popping Out Letter/Content */}
    <rect x="14" y="8" width="28" height="22" rx="3" fill="url(#srv-em-letter)" stroke="#D97706" strokeWidth="1" />
    <rect x="18" y="12" width="20" height="2.5" rx="1" fill="#FFFFFF" />
    <rect x="18" y="17" width="14" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.8" />
    <rect x="18" y="21" width="10" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.6" />

    {/* Envelope Main Body */}
    <path d="M8 20L28 32L48 20V42C48 44 46.5 45.5 44.5 45.5H11.5C9.5 45.5 8 44 8 42V20Z" fill="url(#srv-em-body)" stroke="#94A3B8" strokeWidth="1.2" />
    
    {/* Envelope Fold Lines */}
    <path d="M8 44L23 30M48 44L33 30" stroke="#CBD5E1" strokeWidth="1.5" />
    
    {/* Envelope Open Flap Behind Letter */}
    <polygon points="8,20 28,32 48,20" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1.2" />

    {/* Floating Growth Indicator Top Right */}
    <g transform="translate(36, 4)">
      <circle cx="7" cy="7" r="6.5" fill="#22C55E" />
      <path d="M4 7L6.5 9.5L10 4.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 08 - Content Creation Illustration
export const ContentCreationServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-cc-doc" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F8FAFC" />
      </linearGradient>
      <linearGradient id="srv-cc-pencil" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    
    {/* Document Paper Sheet with Folded Corner */}
    <path
      d="M12 6H34L44 16V46C44 48 42.5 49.5 40.5 49.5H15.5C13.5 49.5 12 48 12 46V6Z"
      fill="url(#srv-cc-doc)"
      stroke="#94A3B8"
      strokeWidth="1.2"
    />
    
    {/* Folded Corner Flap */}
    <polygon points="34,6 34,16 44,16" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />

    {/* Content Lines */}
    <rect x="18" y="14" width="12" height="3" rx="1.5" fill="#F59E0B" />
    <rect x="18" y="21" width="20" height="2" rx="1" fill="#64748B" />
    <rect x="18" y="26" width="18" height="2" rx="1" fill="#94A3B8" />
    <rect x="18" y="31" width="16" height="2" rx="1" fill="#94A3B8" />
    <rect x="18" y="36" width="12" height="2" rx="1" fill="#94A3B8" />

    {/* 3D Diagonal Pencil Writing on Document */}
    <g transform="translate(24, 20)">
      <path d="M22 2L26 6L8 24L3 25L4 20L22 2Z" fill="url(#srv-cc-pencil)" stroke="#B45309" strokeWidth="0.8" />
      <polygon points="3,25 6,24 4,22" fill="#0B1320" />
      <rect x="19" y="4" width="5" height="3" rx="0.5" fill="#EF4444" transform="rotate(45 19 4)" />
    </g>
  </svg>
);

// 09 - E-Commerce Solutions Illustration
export const EcommerceServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-ec-cart" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="srv-ec-bag" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="srv-ec-box" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    
    {/* Product Parcel Inside Cart */}
    <g transform="translate(22, 14)">
      <rect x="0" y="4" width="13" height="12" rx="2" fill="url(#srv-ec-box)" />
      <rect x="5" y="4" width="3" height="12" fill="#B45309" />
      <rect x="0" y="8" width="13" height="3" fill="#B45309" />
    </g>

    {/* Shopping Bag Behind Cart */}
    <g transform="translate(13, 10)">
      <rect x="0" y="6" width="12" height="14" rx="2" fill="url(#srv-ec-bag)" />
      <path d="M3 6V4C3 2.5 4.5 1 6 1C7.5 1 9 2.5 9 4V6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* 3D Wireframe Shopping Cart */}
    <path d="M8 12H13L18 31H38L42 17H15" stroke="url(#srv-ec-cart)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M19 23H39M20 27H37" stroke="url(#srv-ec-cart)" strokeWidth="1.5" strokeLinecap="round" />
    
    {/* Cart Wheels */}
    <circle cx="20" cy="38" r="3.5" fill="#0B1320" stroke="#F59E0B" strokeWidth="1.5" />
    <circle cx="36" cy="38" r="3.5" fill="#0B1320" stroke="#F59E0B" strokeWidth="1.5" />

    {/* Floating Payment Checkmark Badge */}
    <g transform="translate(36, 8)">
      <circle cx="7" cy="7" r="6" fill="#10B981" />
      <path d="M4 7L6.5 9.5L10 4.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// 10 - Conversion Rate Optimization (CRO) Illustration
export const CroServiceIllustration: React.FC<IllustrationProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="srv-cro-arr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
    </defs>
    
    {/* 4 Multi-Color Ascending Analytics Bar Pillars */}
    <rect x="8" y="34" width="7" height="14" rx="2" fill="#64748B" />
    <rect x="18" y="26" width="7" height="22" rx="2" fill="#3B82F6" />
    <rect x="28" y="18" width="7" height="30" rx="2" fill="#8B5CF6" />
    <rect x="38" y="10" width="7" height="38" rx="2" fill="#F59E0B" />

    {/* Upward Growth Trend Line */}
    <path d="M11 30L21 22L31 14L43 6" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="43,2 47,8 40,8" fill="#22C55E" />

    {/* Floating Conversion Indicator Badge */}
    <g transform="translate(32, 2)">
      <circle cx="8" cy="8" r="7" fill="#EF4444" stroke="#FFFFFF" strokeWidth="1" />
      <text x="8" y="11" fill="#FFFFFF" fontFamily="sans-serif" fontWeight="bold" fontSize="9" textAnchor="middle">%</text>
    </g>
  </svg>
);
