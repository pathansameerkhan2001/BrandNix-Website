import React from 'react';
import CategoryLandingTemplate from '@/components/sections/services/CategoryLandingTemplate';
import { SERVICE_CATEGORIES_DATA } from '@/data/servicesData';

export const metadata = {
  title: 'Digital Marketing Services | Brandnix Digital Solutions',
  description: 'Search engine optimization (SEO), Google Ads, Meta advertising, CRO, email marketing, and lead generation by Brandnix.',
};

export default function DigitalMarketingPage() {
  const data = SERVICE_CATEGORIES_DATA['digital-marketing'];
  return <CategoryLandingTemplate data={data} />;
}
