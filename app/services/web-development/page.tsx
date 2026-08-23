import React from 'react';
import CategoryLandingTemplate from '@/components/sections/services/CategoryLandingTemplate';
import { SERVICE_CATEGORIES_DATA } from '@/data/servicesData';

export const metadata = {
  title: 'Web Development Services | Brandnix Digital Solutions',
  description: 'Custom website development, e-commerce stores, web applications, CMS solutions, and speed optimization by Brandnix.',
};

export default function WebDevelopmentPage() {
  const data = SERVICE_CATEGORIES_DATA['web-development'];
  return <CategoryLandingTemplate data={data} />;
}
