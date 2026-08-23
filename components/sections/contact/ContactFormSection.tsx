'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';
import {
  PhoneContactIllustration,
  EmailContactIllustration,
  LocationContactIllustration,
  WhatsappContactIllustration,
} from '@/components/common/ContactIllustrations';

export const ContactFormSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredContact: ['Email'],
  });
  const [submitted, setSubmitted] = useState(false);

  const togglePreferredContact = (method: string) => {
    setFormData((prev) => {
      const exists = prev.preferredContact.includes(method);
      if (exists) {
        return { ...prev, preferredContact: prev.preferredContact.filter((m) => m !== method) };
      } else {
        return { ...prev, preferredContact: [...prev.preferredContact, method] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-form-section"
      className="relative bg-gray-50 dark:bg-[#0E1726] text-[#08111F] dark:text-white py-16 sm:py-20 lg:py-24 overflow-hidden transition-colors duration-300 border-t border-gray-200/80 dark:border-[#13243B]"
    >
      <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
          
          {/* LEFT: "Send Us a Message" Form Card (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white dark:bg-[#13243B]/40 rounded-3xl border border-gray-200/80 dark:border-[#13243B] p-6 sm:p-8 lg:p-10 shadow-sm"
          >
            <div className="mb-8">
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#08111F] dark:text-white mb-2">
                Send Us a Message
              </h2>
              <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                Fill out the form below and we&apos;ll get back to you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 px-6 rounded-2xl bg-brand-orange/10 border border-brand-orange/30 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-orange text-white flex items-center justify-center mx-auto mb-4 shadow-brand-glow">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#08111F] dark:text-white mb-2">
                  Thank You for Reaching Out!
                </h3>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300 max-w-md mx-auto">
                  We have received your message and will reply within 24 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Full Name */}
                  <div>
                    <label className="block font-inter text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Full Name <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0B1320] border border-gray-200 dark:border-[#13243B] text-sm text-[#08111F] dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block font-inter text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Email Address <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0B1320] border border-gray-200 dark:border-[#13243B] text-sm text-[#08111F] dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Phone Number */}
                  <div>
                    <label className="block font-inter text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      Phone Number <span className="text-brand-orange">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0B1320] border border-gray-200 dark:border-[#13243B] text-sm text-[#08111F] dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors"
                    />
                  </div>

                  {/* What are you looking for? */}
                  <div>
                    <label className="block font-inter text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                      What are you looking for? <span className="text-brand-orange">*</span>
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0B1320] border border-gray-200 dark:border-[#13243B] text-sm text-[#08111F] dark:text-white focus:outline-none focus:border-brand-orange transition-colors"
                    >
                      <option value="">Select a service...</option>
                      <option value="Website Design & Development">Website Design & Development</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Social Media Marketing">Social Media Marketing</option>
                      <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                      <option value="Google Ads & PPC Advertising">Google Ads & PPC Advertising</option>
                      <option value="WhatsApp Marketing & Automation">WhatsApp Marketing & Automation</option>
                      <option value="Email Marketing">Email Marketing</option>
                      <option value="Content Creation">Content Creation</option>
                      <option value="E-commerce Solutions">E-commerce Solutions</option>
                      <option value="Branding & Identity Design">Branding & Identity Design</option>
                      <option value="Other Custom Solution">Other Custom Solution</option>
                    </select>
                  </div>
                </div>

                {/* Tell us about your project */}
                <div>
                  <label className="block font-inter text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1.5">
                    Tell us about your project <span className="text-brand-orange">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe your goals, requirements, timeline or budget..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#0B1320] border border-gray-200 dark:border-[#13243B] text-sm text-[#08111F] dark:text-white placeholder-gray-400 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                  />
                </div>

                {/* Preferred Way to Contact */}
                <div>
                  <label className="block font-inter text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Preferred Way to Contact:
                  </label>
                  <div className="flex flex-wrap items-center gap-6">
                    {['Email', 'Phone', 'WhatsApp'].map((method) => {
                      const isChecked = formData.preferredContact.includes(method);
                      return (
                        <label key={method} className="inline-flex items-center gap-2 cursor-pointer select-none">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => togglePreferredContact(method)}
                            className="w-4 h-4 rounded text-brand-orange focus:ring-brand-orange border-gray-300"
                          />
                          <span className="font-inter text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                            {method}
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-brand-orange hover:bg-brand-orange/90 text-white font-inter text-sm sm:text-base font-bold shadow-brand-glow flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Send Message</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Privacy Badge */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-brand-orange" />
                  <span>We respect your privacy. Your information is safe with us.</span>
                </div>
              </form>
            )}
          </motion.div>

          {/* RIGHT: "Get in Touch" & Social Links (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-white dark:bg-[#13243B]/40 rounded-3xl border border-gray-200/80 dark:border-[#13243B] p-6 sm:p-8 lg:p-10 shadow-sm flex flex-col justify-between"
          >
            <div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#08111F] dark:text-white mb-2">
                Get in Touch
              </h2>
              <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-8">
                We&apos;re always here to help and answer any questions.
              </p>

              {/* 4 Contact Channels */}
              <div className="space-y-6">
                {/* 1. Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-brand-orange/25 flex items-center justify-center p-2 flex-shrink-0">
                    <PhoneContactIllustration size={32} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-sm font-bold text-[#08111F] dark:text-white">Call Us</h3>
                    <Link href="tel:+919876543210" className="font-inter text-sm sm:text-base font-bold text-brand-orange hover:underline block">
                      +91 98765 43210
                    </Link>
                    <p className="font-inter text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Mon - Sat: 10:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                {/* 2. Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center p-2 flex-shrink-0">
                    <EmailContactIllustration size={32} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-sm font-bold text-[#08111F] dark:text-white">Email Us</h3>
                    <Link href="mailto:brandnix.in@gmail.com" aria-label="Email Brandnix" className="font-inter text-sm sm:text-base font-bold text-brand-orange hover:underline block">
                      brandnix.in@gmail.com
                    </Link>
                    <p className="font-inter text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>

                {/* 3. Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/25 flex items-center justify-center p-2 flex-shrink-0">
                    <LocationContactIllustration size={32} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-sm font-bold text-[#08111F] dark:text-white">Visit Us</h3>
                    <p className="font-inter text-sm sm:text-base font-bold text-[#08111F] dark:text-white">
                      Hyderabad, India
                    </p>
                    <p className="font-inter text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      We love meeting our clients
                    </p>
                  </div>
                </div>

                {/* 4. WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center p-2 flex-shrink-0">
                    <WhatsappContactIllustration size={32} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-playfair text-sm font-bold text-[#08111F] dark:text-white">Chat on WhatsApp</h3>
                    <Link href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="font-inter text-sm sm:text-base font-bold text-emerald-500 hover:underline block">
                      +91 98765 43210
                    </Link>
                    <p className="font-inter text-[11px] text-gray-500 dark:text-gray-400 mt-0.5">
                      Quick support on WhatsApp
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Us with Distinct Brand-Colored Social Icons */}
            <div className="pt-8 mt-8 border-t border-gray-100 dark:border-[#13243B]/60">
              <h3 className="font-inter text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Follow Us
              </h3>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/share/1JoBtpW4dG/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2] text-[#1877F2] hover:text-white border border-[#1877F2]/25 flex items-center justify-center font-bold text-sm transition-all"
                  aria-label="Facebook"
                >
                  f
                </Link>
                {/* Instagram */}
                <Link
                  href="https://www.instagram.com/_brandnix"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-pink-500/10 hover:bg-gradient-to-tr hover:from-[#F59E0B] hover:via-[#EC4899] hover:to-[#8B5CF6] text-pink-500 hover:text-white border border-pink-500/25 flex items-center justify-center font-bold text-xs transition-all"
                  aria-label="Instagram"
                >
                  IG
                </Link>
                {/* LinkedIn */}
                <Link
                  href="https://www.linkedin.com/company/adnix1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2] text-[#0A66C2] hover:text-white border border-[#0A66C2]/25 flex items-center justify-center font-bold text-xs transition-all"
                  aria-label="LinkedIn"
                >
                  in
                </Link>
                {/* X */}
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gray-900/10 dark:bg-white/10 hover:bg-black dark:hover:bg-white text-gray-900 dark:text-white dark:hover:text-black border border-gray-400/25 flex items-center justify-center font-bold text-xs transition-all"
                  aria-label="X"
                >
                  ✕
                </Link>
                {/* YouTube */}
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#FF0000]/10 hover:bg-[#FF0000] text-[#FF0000] hover:text-white border border-[#FF0000]/25 flex items-center justify-center font-bold text-xs transition-all"
                  aria-label="YouTube"
                >
                  ▶
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
