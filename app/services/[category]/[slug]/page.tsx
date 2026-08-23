'use client';

import React from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Zap, Rocket, MessageSquare } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/common/Button';
import { SERVICE_CATEGORIES_DATA, SubService, ServiceCategoryData } from '@/data/servicesData';

export default function IndividualServicePage() {
  const params = useParams();
  const categorySlug = params?.category as string;
  const serviceSlug = params?.slug as string;

  const categoryData: ServiceCategoryData | undefined = SERVICE_CATEGORIES_DATA[categorySlug];
  if (!categoryData) {
    return notFound();
  }

  const service: SubService | undefined = categoryData.services.find(
    (s) => s.slug === serviceSlug
  );

  if (!service) {
    return notFound();
  }

  // Other related services in the same category
  const relatedServices = categoryData.services.filter((s) => s.slug !== serviceSlug).slice(0, 4);

  return (
    <main className="min-h-screen bg-white dark:bg-[#08111F] text-[#08111F] dark:text-white flex flex-col transition-colors duration-200">
      <Header />

      {/* Breadcrumb Bar */}
      <section className="bg-gray-50 dark:bg-[#0B1320] border-b border-gray-200/80 dark:border-[#13243B] py-3.5">
        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full flex items-center gap-2 text-xs font-inter text-gray-500 dark:text-gray-400">
          <Link href="/services" className="hover:text-brand-orange transition-colors">
            Services
          </Link>
          <span>/</span>
          <Link href={`/services/${categoryData.slug}`} className="hover:text-brand-orange transition-colors">
            {categoryData.title}
          </Link>
          <span>/</span>
          <span className="text-brand-orange font-semibold">{service.title}</span>
        </div>
      </section>

      {/* Service Detail Hero */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 bg-white dark:bg-[#08111F] overflow-hidden">
        <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/5 dark:bg-brand-blue/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Main Overview (8 cols) */}
            <div className="lg:col-span-8 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-xs font-bold tracking-[0.2em] uppercase font-inter mb-4">
                {categoryData.title} SPECIALTY
              </div>

              <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#08111F] dark:text-white mb-4">
                {service.title}
              </h1>

              <p className="font-inter text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-2xl">
                {service.shortDesc}
              </p>

              {/* What is Included & Deliverables */}
              <div className="w-full p-6 sm:p-8 rounded-3xl bg-gray-50 dark:bg-[#13243B]/30 border border-gray-200/80 dark:border-[#13243B] mb-8">
                <h2 className="font-playfair text-xl font-bold text-[#08111F] dark:text-white mb-4">
                  What You Get with {service.title}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {service.deliverables && service.deliverables.map((del) => (
                    <div key={del} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-5 h-5 text-brand-orange flex-shrink-0 mt-0.5" />
                      <span className="font-inter text-xs sm:text-sm text-gray-700 dark:text-gray-200 font-medium">
                        {del}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why Partner with Brandnix for this Service */}
              <div className="space-y-4 mb-8">
                <h3 className="font-playfair text-xl font-bold text-[#08111F] dark:text-white">
                  Why Choose Brandnix for {service.title}?
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  We don&apos;t just deliver generic deliverables—we build strategic assets engineered for long-term return on investment. Our team brings deep technical expertise, transparent weekly reporting, and dedicated post-launch support to every project.
                </p>
              </div>

              {/* Back to Category Link */}
              <Link
                href={`/services/${categoryData.slug}`}
                className="inline-flex items-center gap-2 font-inter text-xs font-bold text-brand-orange hover:underline pt-2"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All {categoryData.title}</span>
              </Link>
            </div>

            {/* Right Booking Sidebar Card (4 cols) */}
            <div className="lg:col-span-4 sticky top-28">
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#0B1320] border border-gray-200/90 dark:border-[#13243B] shadow-xl">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange/10 text-brand-orange flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6" />
                </div>
                <h3 className="font-playfair text-xl font-bold text-[#08111F] dark:text-white mb-2">
                  Get a Custom Quote
                </h3>
                <p className="font-inter text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  Ready to start your {service.title} project? Let&apos;s discuss your goals and create a custom roadmap.
                </p>

                <div className="space-y-3">
                  <Button href="/contact" variant="primary" size="full" className="font-bold py-3.5 shadow-brand-glow">
                    Request Consultation →
                  </Button>
                  <Link
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-inter text-xs font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us: +91 98765 43210</span>
                  </Link>
                </div>

                <div className="mt-6 pt-5 border-t border-gray-100 dark:border-[#13243B] text-[11px] font-inter text-gray-500 dark:text-gray-400 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                    <span>100% Confidential & Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Reply within 24 business hours</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Services in Category */}
      {relatedServices.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-[#0E1726] border-t border-gray-200/80 dark:border-[#13243B]">
          <div className="max-w-[1560px] xl:max-w-[1640px] 2xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 w-full">
            <h2 className="font-playfair text-2xl font-bold text-[#08111F] dark:text-white mb-6">
              Other {categoryData.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${categoryData.slug}/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white dark:bg-[#13243B]/40 border border-gray-200/80 dark:border-[#13243B] hover:border-brand-orange/40 hover:-translate-y-1 transition-all group"
                >
                  <h3 className="font-playfair text-sm sm:text-base font-bold text-[#08111F] dark:text-white group-hover:text-brand-orange transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="font-inter text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-3">
                    {rel.shortDesc}
                  </p>
                  <span className="inline-flex items-center gap-1 font-inter text-xs font-bold text-brand-orange group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
