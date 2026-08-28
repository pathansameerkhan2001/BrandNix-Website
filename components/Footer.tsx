'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';
import BrandnixLogo from '@/components/common/BrandnixLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0B1320] text-white border-t border-[#13243B] pt-14 sm:pt-16 pb-8 select-none">
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#13243B]">
          
          {/* Column 1: Brand & Social (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="mb-4">
              <BrandnixLogo size="md" href="/" forceDark />
            </div>
            <p className="font-inter text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 max-w-sm">
              We are a digital solutions company helping businesses grow with creativity, technology and performance.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#13243B] text-gray-300 hover:text-[#22C55E] hover:bg-[#22C55E]/10 flex items-center justify-center transition-all border border-[#13243B] hover:border-[#22C55E]/40"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.instagram.com/_brandnix"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#13243B] text-gray-300 hover:text-[#EC4899] hover:bg-[#EC4899]/10 flex items-center justify-center transition-all border border-[#13243B] hover:border-[#EC4899]/40"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.facebook.com/share/1JoBtpW4dG/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#13243B] text-gray-300 hover:text-[#3B82F6] hover:bg-[#3B82F6]/10 flex items-center justify-center transition-all border border-[#13243B] hover:border-[#3B82F6]/40"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/adnix1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#13243B] text-gray-300 hover:text-[#0A66C2] hover:bg-[#0A66C2]/10 flex items-center justify-center transition-all border border-[#13243B] hover:border-[#0A66C2]/40"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-full bg-[#13243B] text-gray-300 hover:text-[#EF4444] hover:bg-[#EF4444]/10 flex items-center justify-center transition-all border border-[#13243B] hover:border-[#EF4444]/40"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-playfair text-base sm:text-lg font-bold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 font-inter text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-orange transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-brand-orange font-semibold hover:underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/packages" className="hover:text-brand-orange transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-brand-orange transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-orange transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-orange transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-playfair text-base sm:text-lg font-bold text-white mb-4">
              Our Services
            </h4>
            <ul className="space-y-2.5 font-inter text-xs sm:text-sm text-gray-300">
              <li>
                <Link href="/services/web-development" className="hover:text-brand-orange transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="hover:text-brand-orange transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/social-media" className="hover:text-brand-orange transition-colors">
                  Social Media Services
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing/seo" className="hover:text-brand-orange transition-colors">
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link href="/services/other-services/branding-and-identity-design" className="hover:text-brand-orange transition-colors">
                  Branding &amp; Identity
                </Link>
              </li>
              <li>
                <Link href="/services/other-services/ai-solutions-and-automation" className="hover:text-brand-orange transition-colors">
                  AI &amp; Automation
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-orange transition-colors font-semibold">
                  All Solutions →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-playfair text-base sm:text-lg font-bold text-white mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3 font-inter text-xs sm:text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-brand-orange transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <a href="mailto:brandnix.in@gmail.com" aria-label="Email Brandnix" className="hover:text-brand-orange transition-colors">
                  brandnix.in@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-brand-orange flex-shrink-0" />
                <span>Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-inter text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Brandnix Digital Solutions. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hover:text-gray-200 transition-colors">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link href="/contact" className="hover:text-gray-200 transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
