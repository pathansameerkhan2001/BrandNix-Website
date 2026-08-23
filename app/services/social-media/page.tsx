import React from 'react';
import CategoryLandingTemplate from '@/components/sections/services/CategoryLandingTemplate';
import { SERVICE_CATEGORIES_DATA } from '@/data/servicesData';

export const metadata = {
  title: 'Social Media Services | Brandnix Digital Solutions',
  description: 'Social media management, strategy, reels creation, paid advertising, and community management by Brandnix.',
};

export default function SocialMediaPage() {
  const data = SERVICE_CATEGORIES_DATA['social-media'];
  return <CategoryLandingTemplate data={data} />;
}
