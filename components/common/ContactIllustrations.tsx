'use client';

import React from 'react';

interface IllustrationProps {
  className?: string;
  size?: number;
}

// ----------------------------------------------------
// HERO 4 BENEFIT ICONS
// ----------------------------------------------------

// 1. Quick Response (Paper plane / fast message in Orange + Blue)
export const QuickResponseIllustration: React.FC<IllustrationProps> = ({ className = '', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="qr-plane" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="qr-trail" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#60A5FA" />
      </linearGradient>
    </defs>
    {/* Motion speed trails */}
    <path d="M8 28H18M4 34H14M10 22H22" stroke="url(#qr-trail)" strokeWidth="2" strokeLinecap="round" />
    {/* 3D Paper Plane */}
    <polygon points="42,6 8,24 22,28 34,16 26,30 38,40" fill="url(#qr-plane)" />
    <polygon points="42,6 22,28 26,30" fill="#D97706" />
    <polygon points="42,6 26,30 38,40" fill="#FBBF24" />
  </svg>
);

// 2. Expert Consultation (Headset + Person in Blue + Orange)
export const ExpertConsultationIllustration: React.FC<IllustrationProps> = ({ className = '', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ec-headset" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="ec-bubble" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* User Silhouette */}
    <circle cx="24" cy="18" r="7" fill="#64748B" />
    <path d="M12 38C12 32 17 29 24 29C31 29 36 32 36 38V40H12V38Z" fill="#64748B" />
    {/* Headset Arc */}
    <path d="M10 22C10 14 16 8 24 8C32 8 38 14 38 22" stroke="url(#ec-headset)" strokeWidth="3.5" strokeLinecap="round" />
    <rect x="8" y="20" width="5" height="9" rx="2.5" fill="url(#ec-headset)" />
    <rect x="35" y="20" width="5" height="9" rx="2.5" fill="url(#ec-headset)" />
    <path d="M37 28L30 35H25" stroke="url(#ec-headset)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="24" cy="35" r="2" fill="#F59E0B" />
    {/* Floating Chat Bubble */}
    <g transform="translate(28, 4)">
      <rect x="0" y="0" width="16" height="12" rx="3.5" fill="url(#ec-bubble)" />
      <circle cx="4.5" cy="6" r="1.2" fill="#FFFFFF" />
      <circle cx="8" cy="6" r="1.2" fill="#FFFFFF" />
      <circle cx="11.5" cy="6" r="1.2" fill="#FFFFFF" />
    </g>
  </svg>
);

// 3. Confidential & Safe (Security Shield in Green + Orange)
export const ConfidentialSafeIllustration: React.FC<IllustrationProps> = ({ className = '', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="cs-shield" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
      <linearGradient id="cs-lock" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    {/* 3D Shield */}
    <path d="M24 4L40 10V22C40 32 33 40 24 44C15 40 8 32 8 22V10L24 4Z" fill="url(#cs-shield)" stroke="#16A34A" strokeWidth="1" />
    {/* Golden Lock & Keyhole */}
    <rect x="18" y="21" width="12" height="10" rx="2.5" fill="url(#cs-lock)" />
    <path d="M20 21V17C20 14.8 21.8 13 24 13C26.2 13 28 14.8 28 17V21" stroke="url(#cs-lock)" strokeWidth="2.5" fill="none" />
    <circle cx="24" cy="25" r="1.5" fill="#0B1320" />
    <path d="M24 26.5V28.5" stroke="#0B1320" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 4. Result Driven (Target + Growth Arrow in Orange + Purple)
export const ResultDrivenIllustration: React.FC<IllustrationProps> = ({ className = '', size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="rd-target" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="rd-arrow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    {/* Target Bullseye */}
    <circle cx="22" cy="26" r="16" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
    <circle cx="22" cy="26" r="10" stroke="#EF4444" strokeWidth="2" fill="none" />
    <circle cx="22" cy="26" r="4.5" fill="url(#rd-target)" />
    {/* 3D Piercing Growth Arrow */}
    <path d="M10 38L36 12" stroke="url(#rd-arrow)" strokeWidth="4" strokeLinecap="round" />
    <polygon points="36,6 42,18 30,12" fill="url(#rd-arrow)" />
  </svg>
);

// ----------------------------------------------------
// GET IN TOUCH 4 CONTACT CHANNELS
// ----------------------------------------------------

// Phone (Orange + Blue)
export const PhoneContactIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ct-phone" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="12" fill="#3B82F6" fillOpacity="0.1" />
    <path
      d="M15 11H20L22 17L19 19C20.5 22 23 24.5 26 26L28 23L34 25V30C34 31.5 32.5 33 31 33C21 33 13 25 13 15C13 13.5 14.5 11 15 11Z"
      fill="url(#ct-phone)"
      stroke="#D97706"
      strokeWidth="1.2"
    />
    <path d="M28 12C31 13 33 15 34 18M28 7C34 8 38 12 39 18" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

// Email (Blue + Orange)
export const EmailContactIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ct-mail-body" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="ct-mail-letter" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="12" fill="#F59E0B" fillOpacity="0.1" />
    {/* Popping Letter */}
    <rect x="12" y="10" width="24" height="16" rx="2" fill="url(#ct-mail-letter)" />
    <rect x="15" y="13" width="18" height="2" rx="1" fill="#FFFFFF" />
    <rect x="15" y="17" width="12" height="2" rx="1" fill="#FFFFFF" fillOpacity="0.8" />
    {/* Envelope Body */}
    <path d="M8 18L24 28L40 18V36C40 37.5 38.5 39 37 39H11C9.5 39 8 37.5 8 36V18Z" fill="url(#ct-mail-body)" />
    <polygon points="8,18 24,28 40,18" fill="#60A5FA" />
  </svg>
);

// Location (Red + Orange)
export const LocationContactIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ct-pin" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#DC2626" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="12" fill="#EF4444" fillOpacity="0.1" />
    {/* Pin Shadow on Ground */}
    <ellipse cx="24" cy="40" rx="9" ry="3" fill="#64748B" fillOpacity="0.3" />
    {/* 3D Map Pin */}
    <path d="M24 7C16.8 7 11 12.8 11 20C11 28 24 39 24 39C24 39 37 28 37 20C37 12.8 31.2 7 24 7Z" fill="url(#ct-pin)" />
    <circle cx="24" cy="19" r="5.5" fill="#FFFFFF" />
    <circle cx="24" cy="19" r="2.5" fill="#F59E0B" />
  </svg>
);

// WhatsApp (Vibrant Green)
export const WhatsappContactIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="ct-wa" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#25D366" />
        <stop offset="100%" stopColor="#128C7E" />
      </linearGradient>
    </defs>
    <rect x="4" y="4" width="40" height="40" rx="12" fill="#22C55E" fillOpacity="0.1" />
    {/* WhatsApp Chat Bubble */}
    <path
      d="M24 8C15.2 8 8 15.2 8 24C8 27.2 9 30.2 10.7 32.7L8 40L15.6 37.5C18 39.1 20.9 40 24 40C32.8 40 40 32.8 40 24C40 15.2 32.8 8 24 8Z"
      fill="url(#ct-wa)"
    />
    <path
      d="M30.5 28C30 27.8 27.7 26.7 27.3 26.5C26.9 26.3 26.6 26.2 26.3 26.6C26 27.1 25.2 28.1 24.9 28.4C24.6 28.7 24.4 28.7 23.9 28.5C23.4 28.2 21.9 27.7 20.1 26.1C18.7 24.9 17.8 23.3 17.5 22.8C17.2 22.3 17.5 22.1 17.7 21.8C17.9 21.6 18.2 21.2 18.4 20.9C18.6 20.6 18.7 20.3 18.9 20C19.1 19.7 19 19.3 18.8 19.1C18.6 18.9 17.9 17 17.6 16.3C17.3 15.5 17 15.6 16.7 15.6C16.5 15.6 16.2 15.6 15.8 15.6C15.5 15.6 15 15.7 14.6 16.1C14.2 16.5 13 17.6 13 19.9C13 22.2 14.6 24.4 14.9 24.7C15.2 25 18.2 29.6 22.7 31.6C23.8 32.1 24.6 32.4 25.3 32.6C26.3 32.9 27.3 32.8 28 32.7C28.8 32.5 30.5 31.6 30.8 30.6C31.1 29.6 31.1 28.7 31 28.5C30.9 28.4 30.7 28.1 30.5 28Z"
      fill="#FFFFFF"
    />
  </svg>
);

// ----------------------------------------------------
// PROCESS 6 STEPS ILLUSTRATIONS
// ----------------------------------------------------

export const ListenUnderstandIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="p-listen" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Human Head & Ear */}
    <circle cx="20" cy="24" r="14" fill="#3B82F6" fillOpacity="0.1" />
    <path d="M18 12C12 12 8 17 8 24C8 31 12 36 18 36" stroke="url(#p-listen)" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M18 17C14.5 17 12.5 20 12.5 24C12.5 28 14.5 31 18 31" stroke="url(#p-listen)" strokeWidth="2.5" strokeLinecap="round" />
    {/* Sound Waves into Ear */}
    <path d="M26 18C28 20 29 22 29 24C29 26 28 28 26 30" stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 14C35 17 37 20 37 24C37 28 35 31 32 34" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const ResearchAnalyzeIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="p-res-lens" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#38BDF8" />
        <stop offset="100%" stopColor="#0284C7" />
      </linearGradient>
      <linearGradient id="p-res-rim" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </linearGradient>
    </defs>
    {/* Document in Background */}
    <rect x="8" y="6" width="22" height="30" rx="3" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="1" />
    <rect x="12" y="11" width="14" height="2" rx="1" fill="#F59E0B" />
    <rect x="12" y="16" width="10" height="2" rx="1" fill="#64748B" />
    <rect x="12" y="21" width="12" height="2" rx="1" fill="#64748B" />
    {/* 3D Magnifying Glass */}
    <g transform="translate(14, 12)">
      <path d="M19 19L29 29" stroke="#0B1320" strokeWidth="4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="10" fill="url(#p-res-lens)" fillOpacity="0.4" stroke="url(#p-res-rim)" strokeWidth="2.5" />
      <path d="M8 12H16M12 8V16" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const PlanStrategizeIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="p-plan-t" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    {/* Strategy Board / Grid */}
    <circle cx="24" cy="24" r="18" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
    <circle cx="24" cy="24" r="11" stroke="#3B82F6" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
    <circle cx="24" cy="24" r="4" fill="url(#p-plan-t)" />
    {/* Strategy Arrows / Compass */}
    <path d="M24 6V11M24 37V42M6 24H11M37 24H42" stroke="#64748B" strokeWidth="2" strokeLinecap="round" />
    <polygon points="24,14 27,24 24,22 21,24" fill="#8B5CF6" />
    <polygon points="24,34 27,24 24,26 21,24" fill="#64748B" />
  </svg>
);

export const ExecuteDeliverIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="p-exec-rock" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="p-exec-fire" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EF4444" />
      </linearGradient>
    </defs>
    {/* Fiery Exhaust */}
    <path d="M12 36C10 39 12 43 12 43C12 43 16 41 15 37Z" fill="url(#p-exec-fire)" />
    {/* Launching Rocket */}
    <g transform="translate(6, 4)">
      <path d="M12 28L28 12C33 7 35 4 35 4C35 4 32 6 27 11L11 27C10 28 10 30 11 31C12 32 14 32 15 31L12 28Z" fill="url(#p-exec-rock)" stroke="#94A3B8" strokeWidth="1" />
      <path d="M28 11C33 6 35 4 35 4C35 4 33 6 28 11Z" fill="#EF4444" />
      <path d="M14 26L8 28L11 22Z" fill="#F59E0B" />
      <path d="M24 16L26 10L20 13Z" fill="#F59E0B" />
      <circle cx="23" cy="16" r="3" fill="#0284C7" stroke="#38BDF8" strokeWidth="1" />
    </g>
    <circle cx="36" cy="32" r="4" fill="#22C55E" />
    <path d="M34 32L35.5 33.5L38 31" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const MeasureOptimizeIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="p-opt-bar" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
    {/* Rising Analytics Bars */}
    <rect x="8" y="28" width="6" height="12" rx="1.5" fill="#94A3B8" />
    <rect x="17" y="21" width="6" height="19" rx="1.5" fill="url(#p-opt-bar)" />
    <rect x="26" y="14" width="6" height="26" rx="1.5" fill="#8B5CF6" />
    <rect x="35" y="7" width="6" height="33" rx="1.5" fill="#F59E0B" />
    {/* Upward Line with Dots */}
    <path d="M11 25L20 18L29 11L38 4" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="38" cy="4" r="3" fill="#22C55E" />
  </svg>
);

export const GrowthScaleIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="p-scale-arr" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#16A34A" />
      </linearGradient>
    </defs>
    {/* Ascending Trend Line Chart */}
    <path d="M8 38L18 28L26 33L38 12" stroke="url(#p-scale-arr)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="38,8 42,16 34,14" fill="url(#p-scale-arr)" />
    {/* Golden Success Star */}
    <g transform="translate(24, 6)">
      <circle cx="8" cy="8" r="7" fill="#F59E0B" />
      <polygon points="8,3 9.5,6.5 13,7 10.5,9.5 11,13 8,11 5,13 5.5,9.5 3,7 6.5,6.5" fill="#FFFFFF" />
    </g>
  </svg>
);

// ----------------------------------------------------
// WHY CHOOSE 6 BENEFITS ILLUSTRATIONS
// ----------------------------------------------------

export const NoFalsePromisesIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wc-nfp" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#1D4ED8" />
      </linearGradient>
    </defs>
    <path d="M24 4L40 10V22C40 32 33 40 24 44C15 40 8 32 8 22V10L24 4Z" fill="url(#wc-nfp)" />
    <path d="M16 22L22 28L32 16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TailoredForYouIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wc-tail" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="2" />
    <circle cx="24" cy="24" r="11" fill="url(#wc-tail)" />
    <path d="M19 24H29M24 19V29" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const TransparentCommIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wc-trans" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" />
        <stop offset="100%" stopColor="#0891B2" />
      </linearGradient>
    </defs>
    <rect x="8" y="10" width="24" height="20" rx="4" fill="url(#wc-trans)" />
    <circle cx="14" cy="18" r="1.5" fill="#FFFFFF" />
    <circle cx="20" cy="18" r="1.5" fill="#FFFFFF" />
    <circle cx="26" cy="18" r="1.5" fill="#FFFFFF" />
    <g transform="translate(18, 18)">
      <rect x="0" y="0" width="22" height="18" rx="4" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="1.5" />
      <path d="M5 8H17M5 12H13" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  </svg>
);

export const GrowthFocusedIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wc-gf" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#15803D" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="18" fill="#F0FDF4" stroke="#22C55E" strokeWidth="2" />
    <path d="M12 32L21 23L27 27L36 16" stroke="url(#wc-gf)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    <polygon points="36,12 40,19 32,18" fill="url(#wc-gf)" />
  </svg>
);

export const CreativeInnovativeIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wc-bulb" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#EA580C" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="20" r="12" fill="url(#wc-bulb)" />
    <path d="M18 30C18 32 20 34 24 34C28 34 30 32 30 30H18Z" fill="#94A3B8" />
    <rect x="21" y="34" width="6" height="3" rx="1" fill="#64748B" />
    <path d="M24 4V8M10 14L13 16M38 14L35 16M6 24H10M38 24H42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ReliableDedicatedIllustration: React.FC<IllustrationProps> = ({ className = '', size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="wc-rel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" />
        <stop offset="100%" stopColor="#6D28D9" />
      </linearGradient>
    </defs>
    <circle cx="24" cy="24" r="16" fill="url(#wc-rel)" />
    <circle cx="24" cy="24" r="7" fill="#0B1320" />
    {/* 4 Gear Teeth */}
    <rect x="22" y="4" width="4" height="6" rx="1" fill="#8B5CF6" />
    <rect x="22" y="38" width="4" height="6" rx="1" fill="#8B5CF6" />
    <rect x="4" y="22" width="6" height="4" rx="1" fill="#8B5CF6" />
    <rect x="38" y="22" width="6" height="4" rx="1" fill="#8B5CF6" />
    <path d="M21 24L23 26L27 22" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
