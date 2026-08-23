'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ChevronRight, Plus, Minus } from 'lucide-react';
import BrandnixLogo from '@/components/common/BrandnixLogo';
import ThemeToggle from '@/components/common/ThemeToggle';
import Button from '@/components/common/Button';
import { NAV_ITEMS, SERVICE_MEGA_MENU } from '@/data/navigation';
import ServicesMegaMenu from '@/components/navigation/ServicesMegaMenu';

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  // Monitor window scroll for subtle elevation styles
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on Escape key press or outside click
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsMegaMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Helper to check if a route is currently active
  const isItemActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      return false;
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesActive = pathname.startsWith('/services');

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08111F]/95 backdrop-blur-md shadow-header-dark border-b border-[#13243B]'
          : 'bg-[#08111F] border-b border-[#13243B]/60'
      }`}
    >
      {/* Main Header Container (Desktop height ~84px) */}
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-20 sm:h-[84px] flex items-center justify-between relative">
        
        {/* 1. Official Brandnix Logo */}
        <div className="flex-shrink-0 flex items-center">
          <BrandnixLogo size="md" href="/" forceDark />
        </div>

        {/* 2. Desktop Navigation Links (Center) */}
        <nav
          className="hidden lg:flex items-center space-x-7 xl:space-x-9"
          aria-label="Main Navigation"
        >
          {NAV_ITEMS.map((item) => {
            if (item.label === 'Services') {
              return (
                <div
                  key={item.label}
                  className="relative py-4"
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                >
                  <button
                    type="button"
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className={`flex items-center gap-1.5 py-2 text-sm xl:text-[15px] font-semibold transition-colors duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded ${
                      isServicesActive || isMegaMenuOpen
                        ? 'text-brand-orange'
                        : 'text-white hover:text-brand-orange'
                    }`}
                    aria-expanded={isMegaMenuOpen}
                    aria-haspopup="true"
                  >
                    <span>Services</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isMegaMenuOpen ? 'rotate-180 text-brand-orange' : 'text-white/80'
                      }`}
                      aria-hidden="true"
                    />
                    {isServicesActive && (
                      <span className="absolute bottom-1 left-0 right-0 h-[2.5px] bg-brand-orange rounded-full" />
                    )}
                  </button>
                </div>
              );
            }

            const active = isItemActive(item.href);

            if (active) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative group py-2 text-sm xl:text-[15px] font-semibold text-brand-orange select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
                  aria-current="page"
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-orange rounded-full" />
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className="py-2 text-sm xl:text-[15px] font-medium text-white hover:text-brand-orange transition-colors duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* 3. Desktop Right Action Group: Theme Toggle | Let's Talk CTA */}
        <div className="hidden lg:flex items-center gap-3.5 xl:gap-4">
          <ThemeToggle size="md" />
          <div className="h-6 w-[1px] bg-[#13243B] opacity-80" aria-hidden="true" />
          <Button href="/contact" variant="primary" size="md" className="font-bold px-6 shadow-brand-glow">
            Let&apos;s Talk
          </Button>
        </div>

        {/* 4. Mobile Header Right Actions: [ Let's Talk ] [ ☀ ] | [ ☰ ] */}
        <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden">
          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="px-3 sm:px-4 py-2 min-h-[38px] text-xs sm:text-sm font-bold shadow-none"
          >
            Let&apos;s Talk
          </Button>
          <ThemeToggle size="sm" />
          <div className="h-6 w-[1px] bg-[#13243B] mx-0.5" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-lg text-white hover:text-brand-orange bg-[#13243B]/40 hover:bg-[#13243B] border border-[#13243B] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-brand-orange" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Mega-Menu Container */}
        <ServicesMegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </div>

      {/* ==================== MOBILE ACCORDION NAVIGATION ==================== */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden w-full bg-[#08111F] border-t border-[#13243B] shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto"
          role="dialog"
          aria-label="Mobile Navigation Menu"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col">
            <nav className="flex flex-col divide-y divide-[#13243B]/80" aria-label="Mobile Links">
              
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors ${
                  pathname === '/' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>Home</span>
                {pathname === '/' && <ChevronRight className="w-4 h-4 text-brand-orange" />}
              </Link>

              {/* About Us */}
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors ${
                  pathname === '/about' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>About Us</span>
                {pathname === '/about' && <ChevronRight className="w-4 h-4 text-brand-orange" />}
              </Link>

              {/* Services Accordion Header */}
              <div className="flex flex-col">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                  className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors text-left ${
                    isServicesActive ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    Services
                    <span className="text-xs px-2 py-0.5 rounded bg-brand-orange/20 text-brand-orange font-normal">
                      4 Categories
                    </span>
                  </span>
                  {isMobileServicesExpanded ? (
                    <Minus className="w-4 h-4 text-brand-orange" />
                  ) : (
                    <Plus className="w-4 h-4 text-white/80" />
                  )}
                </button>

                {/* Expanded 4 Categories Accordion */}
                {isMobileServicesExpanded && (
                  <div className="pl-3 pb-3 space-y-3 border-l-2 border-brand-orange/30 my-1">
                    <Link
                      href="/services"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 text-xs font-bold text-brand-orange uppercase tracking-wider hover:underline"
                    >
                      → View All Services Overview
                    </Link>

                    {SERVICE_MEGA_MENU.map((cat) => {
                      const isCatExpanded = expandedMobileCategory === cat.id;
                      return (
                        <div key={cat.id} className="rounded-xl bg-[#0B1320] border border-[#13243B] p-2.5">
                          <button
                            type="button"
                            onClick={() => setExpandedMobileCategory(isCatExpanded ? null : cat.id)}
                            className="w-full flex items-center justify-between py-2 text-sm font-bold text-white hover:text-brand-orange text-left"
                          >
                            <span>{cat.title}</span>
                            <ChevronDown
                              className={`w-3.5 h-3.5 transition-transform ${
                                isCatExpanded ? 'rotate-180 text-brand-orange' : 'text-gray-400'
                              }`}
                            />
                          </button>

                          {isCatExpanded && (
                            <div className="pt-2 pl-2 border-t border-[#13243B] space-y-1.5">
                              {cat.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="block py-2 text-xs text-gray-300 hover:text-brand-orange min-h-[44px] flex items-center"
                                >
                                  {item.label}
                                </Link>
                              ))}
                              <Link
                                href={cat.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-block pt-2 pb-1 text-xs font-bold text-brand-orange hover:underline"
                              >
                                {cat.ctaText}
                              </Link>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Packages */}
              <Link
                href="/packages"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors ${
                  pathname === '/packages' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>Packages</span>
                {pathname === '/packages' && <ChevronRight className="w-4 h-4 text-brand-orange" />}
              </Link>

              {/* Portfolio */}
              <Link
                href="/portfolio"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors ${
                  pathname === '/portfolio' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>Portfolio</span>
                {pathname === '/portfolio' && <ChevronRight className="w-4 h-4 text-brand-orange" />}
              </Link>

              {/* Blog */}
              <Link
                href="/blog"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors ${
                  pathname === '/blog' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>Blog</span>
                {pathname === '/blog' && <ChevronRight className="w-4 h-4 text-brand-orange" />}
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between py-3.5 text-base font-semibold min-h-[48px] transition-colors ${
                  pathname === '/contact' ? 'text-brand-orange' : 'text-white hover:text-brand-orange'
                }`}
              >
                <span>Contact Us</span>
                {pathname === '/contact' && <ChevronRight className="w-4 h-4 text-brand-orange" />}
              </Link>
            </nav>

            {/* Bottom Full-Width Let's Talk CTA Button */}
            <div className="mt-5 pt-3">
              <Button
                href="/contact"
                variant="primary"
                size="full"
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-bold py-3.5 text-base shadow-brand-glow"
              >
                Let&apos;s Talk
              </Button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
