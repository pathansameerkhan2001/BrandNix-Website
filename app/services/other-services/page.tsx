import React from 'react';
import CategoryLandingTemplate from '@/components/sections/services/CategoryLandingTemplate';
import { SERVICE_CATEGORIES_DATA } from '@/data/servicesData';

export const metadata = {
  title: 'Specialized Business & Tech Services | Brandnix Digital Solutions',
  description: 'Branding & identity design, AI solutions & automation, CRM integration, video production, and outsourcing by Brandnix.',
};

export default function OtherServicesPage() {
  const data = SERVICE_CATEGORIES_DATA['other-services'];
  return <CategoryLandingTemplate data={data} />;
}
