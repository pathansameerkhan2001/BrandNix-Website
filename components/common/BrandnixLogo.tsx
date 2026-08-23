'use client';

import React from 'react';
import Link from 'next/link';

interface BrandnixLogoProps {
  className?: string;
  href?: string;
  size?: 'sm' | 'md' | 'lg';
  forceDark?: boolean;
}

/**
 * Official Brandnix Logo
 * Directly renders the official image assets:
 * - Dark Theme: White + Orange official Brandnix logo
 * - Light Theme: Dark Navy + Orange official Brandnix logo
 */
export const BrandnixLogo: React.FC<BrandnixLogoProps> = ({
  className = '',
  href = '/',
  size = 'md',
  forceDark = false,
}) => {
  // Height sizing: Mobile h-[38px] to h-[42px]; Desktop h-[46px] to h-[50px]
  const heightStyles =
    size === 'sm'
      ? 'h-[36px] sm:h-[40px] max-w-[210px] sm:max-w-[230px]'
      : size === 'lg'
      ? 'h-[50px] sm:h-[56px] max-w-[290px] sm:max-w-[330px]'
      : 'h-[44px] sm:h-[48px] max-w-[250px] sm:max-w-[280px]';

  const logoContent = (
    <div className={`inline-flex items-center select-none group cursor-pointer ${className}`}>
      {forceDark ? (
        <img
          src="/images/brandnix-logo-dark.png"
          alt="Brandnix Digital Solutions — Where Vision Becomes Growth"
          className={`w-auto ${heightStyles} object-contain transition-opacity duration-150 group-hover:opacity-95 block`}
          width={763}
          height={188}
          loading="eager"
        />
      ) : (
        <>
          {/* 1. Dark Mode Logo (White + Orange) - Shown in dark mode */}
          <img
            src="/images/brandnix-logo-dark.png"
            alt="Brandnix Digital Solutions — Where Vision Becomes Growth"
            className={`w-auto ${heightStyles} object-contain transition-opacity duration-150 group-hover:opacity-95 hidden dark:block dark-logo`}
            width={763}
            height={188}
            loading="eager"
          />

          {/* 2. Light Mode Logo (Navy + Orange) - Shown in light mode */}
          <img
            src="/images/brandnix-logo-light.png"
            alt="Brandnix Digital Solutions — Where Vision Becomes Growth"
            className={`w-auto ${heightStyles} object-contain transition-opacity duration-150 group-hover:opacity-95 block dark:hidden light-logo`}
            width={939}
            height={247}
            loading="eager"
          />
        </>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        aria-label="Brandnix Digital Solutions — Home"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded p-1 -m-1 inline-flex items-center"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default BrandnixLogo;
