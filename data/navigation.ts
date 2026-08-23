export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  active?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'Packages', href: '/packages' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
];

export interface MegaMenuCategory {
  id: string;
  title: string;
  href: string;
  iconType: 'web' | 'social' | 'marketing' | 'other';
  ctaText: string;
  items: { label: string; href: string }[];
}

export const SERVICE_MEGA_MENU: MegaMenuCategory[] = [
  {
    id: 'web-development',
    title: 'WEB DEVELOPMENT',
    href: '/services/web-development',
    iconType: 'web',
    ctaText: 'Explore Web Services →',
    items: [
      { label: 'Custom Website Development', href: '/services/web-development/custom-website-development' },
      { label: 'E-Commerce Development', href: '/services/web-development/ecommerce-development' },
      { label: 'CMS Development', href: '/services/web-development/cms-development' },
      { label: 'WordPress Development', href: '/services/web-development/wordpress-development' },
      { label: 'Web Application Development', href: '/services/web-development/web-application-development' },
      { label: 'Landing Page Development', href: '/services/web-development/landing-page-development' },
      { label: 'Website Redesign', href: '/services/web-development/website-redesign' },
      { label: 'UI/UX Design', href: '/services/web-development/ui-ux-design' },
      { label: 'Website Speed Optimization', href: '/services/web-development/website-speed-optimization' },
      { label: 'Website Security', href: '/services/web-development/website-security' },
      { label: 'Maintenance & Support', href: '/services/web-development/maintenance-and-support' },
    ],
  },
  {
    id: 'social-media',
    title: 'SOCIAL MEDIA SERVICES',
    href: '/services/social-media',
    iconType: 'social',
    ctaText: 'Explore Social Media Services →',
    items: [
      { label: 'Social Media Strategy', href: '/services/social-media/social-media-strategy' },
      { label: 'Social Media Management', href: '/services/social-media/social-media-management' },
      { label: 'Content Creation & Design', href: '/services/social-media/content-creation-and-design' },
      { label: 'Daily Posting & Scheduling', href: '/services/social-media/daily-posting-and-scheduling' },
      { label: 'Reels & Video Creation', href: '/services/social-media/reels-and-video-creation' },
      { label: 'Community Management', href: '/services/social-media/community-management' },
      { label: 'Social Media Advertising', href: '/services/social-media/social-media-advertising' },
      { label: 'Influencer Marketing', href: '/services/social-media/influencer-marketing' },
      { label: 'Social Media Audit', href: '/services/social-media/social-media-audit' },
      { label: 'Hashtag & Trend Research', href: '/services/social-media/hashtag-and-trend-research' },
      { label: 'Performance Analytics & Reporting', href: '/services/social-media/performance-analytics-and-reporting' },
    ],
  },
  {
    id: 'digital-marketing',
    title: 'DIGITAL MARKETING',
    href: '/services/digital-marketing',
    iconType: 'marketing',
    ctaText: 'Explore Digital Marketing →',
    items: [
      { label: 'Search Engine Optimization (SEO)', href: '/services/digital-marketing/seo' },
      { label: 'Google Ads (PPC)', href: '/services/digital-marketing/google-ads' },
      { label: 'Meta (Facebook & Instagram) Ads', href: '/services/digital-marketing/meta-ads' },
      { label: 'Conversion Rate Optimization (CRO)', href: '/services/digital-marketing/conversion-rate-optimization' },
      { label: 'Email Marketing', href: '/services/digital-marketing/email-marketing' },
      { label: 'Content Marketing', href: '/services/digital-marketing/content-marketing' },
      { label: 'Online Reputation Management', href: '/services/digital-marketing/online-reputation-management' },
      { label: 'Analytics & Reporting', href: '/services/digital-marketing/analytics-and-reporting' },
      { label: 'Marketing Automation', href: '/services/digital-marketing/marketing-automation' },
      { label: 'Lead Generation', href: '/services/digital-marketing/lead-generation' },
    ],
  },
  {
    id: 'other-services',
    title: 'OTHER SERVICES',
    href: '/services/other-services',
    iconType: 'other',
    ctaText: 'Explore Other Services →',
    items: [
      { label: 'Branding & Identity Design', href: '/services/other-services/branding-and-identity-design' },
      { label: 'Graphic Design Services', href: '/services/other-services/graphic-design-services' },
      { label: 'Video Production', href: '/services/other-services/video-production' },
      { label: 'AI Solutions & Automation', href: '/services/other-services/ai-solutions-and-automation' },
      { label: 'CRM Setup & Integration', href: '/services/other-services/crm-setup-and-integration' },
      { label: 'WhatsApp Business API', href: '/services/other-services/whatsapp-business-api' },
      { label: 'Growth Hacking', href: '/services/other-services/growth-hacking' },
      { label: 'Virtual Assistance', href: '/services/other-services/virtual-assistance' },
      { label: 'Outsourcing Services', href: '/services/other-services/outsourcing-services' },
      { label: 'Business Consulting', href: '/services/other-services/business-consulting' },
      { label: 'Custom Software Solutions', href: '/services/other-services/custom-software-solutions' },
    ],
  },
];
