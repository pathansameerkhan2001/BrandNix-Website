export interface SubService {
  title: string;
  slug: string;
  shortDesc: string;
  description?: string;
  deliverables?: string[];
  benefits?: string[];
}

export interface ServiceCategoryData {
  id: string;
  slug: string;
  title: string;
  eyebrow: string;
  heroHeading: string;
  heroHighlight: string;
  heroDesc: string;
  heroImage: string;
  whyItMatters: {
    heading: string;
    description: string;
    points: { title: string; desc: string }[];
  };
  services: SubService[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
}

export const SERVICE_CATEGORIES_DATA: Record<string, ServiceCategoryData> = {
  'web-development': {
    id: 'web-development',
    slug: 'web-development',
    title: 'Web Development',
    eyebrow: 'WEB DEVELOPMENT SOLUTIONS',
    heroHeading: 'Web Development That Works as Hard as',
    heroHighlight: 'Your Business',
    heroDesc: 'We craft blazing-fast, responsive, and conversion-optimized websites and web applications tailored to elevate your brand and drive measurable business growth.',
    heroImage: '/images/packages/brandnix-packages-hero.jpg',
    whyItMatters: {
      heading: 'Why High-Performance Web Development Matters',
      description: 'Your website is the digital storefront of your business. Modern users demand fast load times, flawless mobile responsiveness, and intuitive navigation.',
      points: [
        { title: 'First Impression Impact', desc: '94% of first impressions are design-related. We ensure your brand looks credible and authoritative.' },
        { title: 'Speed & Conversion Rate', desc: 'A 1-second delay in page response can result in a 7% reduction in conversions. We engineer for speed.' },
        { title: 'Search Engine Dominance', desc: 'Clean, semantic code and schema markup give you the foundation needed to outrank competitors on Google.' },
        { title: 'Scalable Architecture', desc: 'Built on modern frameworks like Next.js and React that easily scale with your company growth.' }
      ]
    },
    services: [
      {
        title: 'Custom Website Development',
        slug: 'custom-website-development',
        shortDesc: 'Bespoke websites built from scratch to meet your exact brand identity, workflows, and performance goals.',
        deliverables: ['Custom UI/UX Architecture', 'Full-stack Next.js/React Build', 'SEO-ready Semantic Code', 'Speed Optimization']
      },
      {
        title: 'E-Commerce Development',
        slug: 'ecommerce-development',
        shortDesc: 'High-converting online stores with seamless payment gateways, inventory sync, and mobile-first checkout flows.',
        deliverables: ['Custom Product Catalogs', 'Stripe/Razorpay Integration', 'Order Management & Shipping Sync', 'Cart Abandonment Recovery']
      },
      {
        title: 'CMS Development',
        slug: 'cms-development',
        shortDesc: 'Empower your team with intuitive headless and traditional content management systems for easy publishing.',
        deliverables: ['Headless CMS Setup (Sanity/Strapi)', 'Custom Content Models', 'Multi-author Permissions', 'Instant Preview Workflows']
      },
      {
        title: 'WordPress Development',
        slug: 'wordpress-development',
        shortDesc: 'Custom, ultra-fast WordPress themes and plugins built without bloated builders for maximum reliability.',
        deliverables: ['Custom Block Gutenberg Themes', 'WooCommerce Integration', 'Database & Speed Optimization', 'Ironclad Security Hardening']
      },
      {
        title: 'Web Application Development',
        slug: 'web-application-development',
        shortDesc: 'Dynamic, database-driven web apps and client portals engineered for speed, security, and scalability.',
        deliverables: ['Full-stack App Architecture', 'REST & GraphQL APIs', 'Role-based Authentication', 'Real-time Dashboards']
      },
      {
        title: 'Landing Page Development',
        slug: 'landing-page-development',
        shortDesc: 'Laser-focused, high-converting landing pages designed specifically for paid ad campaigns and lead capture.',
        deliverables: ['A/B Testing Setup', 'Lightning Load Speeds (<1s)', 'CRM & Pixel Integrations', 'Compelling Direct-Response Layouts']
      },
      {
        title: 'Website Redesign',
        slug: 'website-redesign',
        shortDesc: 'Transform outdated sites into modern, engaging digital platforms without losing existing SEO rankings.',
        deliverables: ['Complete UI/UX Refresh', '301 Redirect Mapping & SEO Preservation', 'Mobile UX Overhaul', 'Conversion Rate Lift']
      },
      {
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        shortDesc: 'Human-centered user interface and experience design that combines aesthetic appeal with intuitive workflows.',
        deliverables: ['Figma Interactive Prototypes', 'Wireframes & User Journeys', 'Design System & Component Library', 'User Usability Testing']
      },
      {
        title: 'Website Speed Optimization',
        slug: 'website-speed-optimization',
        shortDesc: 'Supercharge your Core Web Vitals, reduce bounce rates, and score 90+ on Google PageSpeed Insights.',
        deliverables: ['Core Web Vitals Remediation', 'Next-gen Asset Compression', 'CDN & Edge Caching', 'Script & DOM Minification']
      },
      {
        title: 'Website Security',
        slug: 'website-security',
        shortDesc: 'Enterprise-grade protection against DDoS attacks, malware, vulnerability exploits, and data breaches.',
        deliverables: ['SSL & HTTPS Hardening', 'Web Application Firewall (WAF)', 'Regular Malware Scans', 'Database Encryption & Backups']
      },
      {
        title: 'Maintenance & Support',
        slug: 'maintenance-and-support',
        shortDesc: 'Ongoing technical maintenance, uptime monitoring, backups, and prompt troubleshooting whenever you need it.',
        deliverables: ['24/7 Uptime Monitoring', 'Daily Cloud Backups', 'Core & Plugin Updates', 'Dedicated Developer Hours']
      }
    ],
    benefits: [
      { title: 'Lightning-Fast Load Times', desc: 'Optimized server-side rendering and asset compression for sub-second speeds.' },
      { title: 'Mobile-First Responsiveness', desc: 'Flawless visual layout across smartphones, tablets, laptops, and ultra-wide displays.' },
      { title: 'Built-in Technical SEO', desc: 'Proper meta tags, schema markup, OpenGraph cards, and XML sitemaps right out of the box.' },
      { title: 'Dedicated Post-Launch Support', desc: 'We stand by our code with proactive maintenance, security patches, and SLA guarantees.' }
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'We analyze your target audience, business goals, and architecture to map wireframes.' },
      { step: '02', title: 'UI/UX Design & Prototype', desc: 'Our designers build high-fidelity interactive prototypes in Figma for your review.' },
      { step: '03', title: 'Clean Modern Development', desc: 'Our engineers build clean, responsive, semantic code using Next.js and Tailwind CSS.' },
      { step: '04', title: 'Testing & Quality Assurance', desc: 'Rigorous cross-browser, mobile responsiveness, accessibility, and speed testing.' },
      { step: '05', title: 'Deployment & Launch', desc: 'Zero-downtime deployment with SSL, DNS configuration, and analytics setup.' },
      { step: '06', title: 'Ongoing Growth & Support', desc: 'Continuous monitoring, backups, and feature improvements for long-term success.' }
    ],
    faqs: [
      { question: 'How long does it take to develop a custom website?', answer: 'Most custom website projects take between 2 to 6 weeks, depending on the complexity, number of pages, and specific custom functionality required.' },
      { question: 'Will my website be mobile-friendly and fast?', answer: 'Yes, 100%. We design mobile-first and optimize every asset to ensure 90+ Google PageSpeed scores and seamless responsiveness across all screen sizes.' },
      { question: 'Can I easily update content myself after launch?', answer: 'Absolutely. We integrate easy-to-use CMS options or custom admin panels so your team can publish blog posts, update text, and add new products with zero coding knowledge.' }
    ]
  },

  'social-media': {
    id: 'social-media',
    slug: 'social-media',
    title: 'Social Media Services',
    eyebrow: 'SOCIAL MEDIA GROWTH & MANAGEMENT',
    heroHeading: 'Build a Stronger Brand Through',
    heroHighlight: 'Social Media',
    heroDesc: 'Engage your ideal audience, spark meaningful conversations, and turn followers into loyal paying customers with full-funnel social media strategy and execution.',
    heroImage: '/images/services/brandnix-services-hero-large.jpg',
    whyItMatters: {
      heading: 'Why Social Media Presence is Essential',
      description: 'Over 4.9 billion people use social media globally. It is no longer just a networking tool—it is where buying decisions are made and brand loyalty is built.',
      points: [
        { title: 'Brand Credibility', desc: 'Active, high-quality social channels prove that your business is vibrant, reliable, and trustworthy.' },
        { title: 'Direct Customer Engagement', desc: 'Two-way conversations build community, handle inquiries, and create genuine advocacy.' },
        { title: 'Viral Organic Reach', desc: 'Engaging short-form reels and videos allow you to reach thousands of potential customers organically.' },
        { title: 'Laser-Targeted Advertising', desc: 'Precision audience targeting by demographics, interests, and purchase behaviors.' }
      ]
    },
    services: [
      {
        title: 'Social Media Strategy',
        slug: 'social-media-strategy',
        shortDesc: 'Data-driven roadmaps tailored to your industry, competitive landscape, and revenue goals.',
        deliverables: ['Audience Persona Blueprint', 'Content Pillars & Themes', 'Channel Selection Strategy', 'Monthly KPI Benchmarks']
      },
      {
        title: 'Social Media Management',
        slug: 'social-media-management',
        shortDesc: 'End-to-end management of your social profiles with daily monitoring, scheduling, and brand alignment.',
        deliverables: ['Dedicated Account Manager', 'Multi-platform Governance', 'Brand Voice Consistency', 'Monthly Growth Reports']
      },
      {
        title: 'Content Creation & Design',
        slug: 'content-creation-and-design',
        shortDesc: 'Eye-catching graphics, carousels, infographics, and banners designed to stop the scroll.',
        deliverables: ['Custom Graphic Assets', 'Engaging Carousel Decks', 'Story & Highlight Covers', 'Copywriting & Captions']
      },
      {
        title: 'Daily Posting & Scheduling',
        slug: 'daily-posting-and-scheduling',
        shortDesc: 'Consistent publishing at peak audience engagement times across Instagram, Facebook, LinkedIn, and X.',
        deliverables: ['Content Calendar Planning', 'Automated Post Scheduling', 'Optimal Time Publishing', 'Caption & Hashtag Formatting']
      },
      {
        title: 'Reels & Video Creation',
        slug: 'reels-and-video-creation',
        shortDesc: 'High-energy short-form vertical videos (Reels, TikToks, Shorts) designed for viral organic reach.',
        deliverables: ['Scriptwriting & Storyboarding', 'Motion Graphics & Subtitles', 'Trending Audio Research', 'High-definition Video Editing']
      },
      {
        title: 'Community Management',
        slug: 'community-management',
        shortDesc: 'Active DM and comment moderation to foster loyalty, answer inquiries, and protect brand sentiment.',
        deliverables: ['Prompt Comment Replies', 'DM Inbound Routing', 'Customer Inquiry Handling', 'Spam & Sentiment Moderation']
      },
      {
        title: 'Social Media Advertising',
        slug: 'social-media-advertising',
        shortDesc: 'High-ROI paid ad campaigns across Meta (FB/IG), LinkedIn, and YouTube targeting high-intent buyers.',
        deliverables: ['Ad Creative & Copy Testing', 'Custom & Lookalike Audiences', 'Retargeting Funnels', 'Budget & Bid Optimization']
      },
      {
        title: 'Influencer Marketing',
        slug: 'influencer-marketing',
        shortDesc: 'Partner with vetted niche creators to expand your reach, build social proof, and drive direct sales.',
        deliverables: ['Creator Discovery & Vetting', 'Campaign Briefs & Negotiation', 'Content Approval Workflows', 'ROI Tracking & Attribution']
      },
      {
        title: 'Social Media Audit',
        slug: 'social-media-audit',
        shortDesc: 'A comprehensive deep dive into your current profiles, competitor strategies, and untapped opportunities.',
        deliverables: ['Profile Optimization Review', 'Competitor Benchmark Report', 'Content Performance Audit', 'Actionable Roadmap']
      },
      {
        title: 'Hashtag & Trend Research',
        slug: 'hashtag-and-trend-research',
        shortDesc: 'Real-time tracking of emerging trends, viral audio, and niche hashtags to boost discoverability.',
        deliverables: ['Tiered Hashtag Sets', 'Trend Forecasting Insights', 'Format Recommendations', 'Algorithm Optimization']
      },
      {
        title: 'Performance Analytics & Reporting',
        slug: 'performance-analytics-and-reporting',
        shortDesc: 'Transparent monthly reporting on follower growth, engagement rates, click-throughs, and conversions.',
        deliverables: ['Interactive Dashboard', 'Monthly Strategy Calls', 'ROI & Attribution Analysis', 'Quarterly Growth Reviews']
      }
    ],
    benefits: [
      { title: 'Consistent Brand Presence', desc: 'Never worry about what to post next with structured monthly content calendars.' },
      { title: 'Higher Engagement Rates', desc: 'Captivating copy and thumb-stopping visual assets that drive comments, likes, and shares.' },
      { title: 'Multi-Channel Synergy', desc: 'Cohesive storytelling across Instagram, Facebook, LinkedIn, YouTube, and X.' },
      { title: 'Measurable Lead Generation', desc: 'Directing social traffic into optimized landing pages for sales and inquiries.' }
    ],
    process: [
      { step: '01', title: 'Brand & Audience Audit', desc: 'We evaluate your current profiles, competitors, and audience demographics.' },
      { step: '02', title: 'Strategy & Content Pillars', desc: 'We define core content themes, visual guidelines, and monthly KPI targets.' },
      { step: '03', title: 'Creative Production', desc: 'Our team designs graphics, writes captions, and edits high-impact reels.' },
      { step: '04', title: 'Client Review & Approval', desc: 'You review and approve the monthly calendar before any post goes live.' },
      { step: '05', title: 'Publishing & Engagement', desc: 'We publish at peak hours and actively moderate comments and messages.' },
      { step: '06', title: 'Analyze & Scale', desc: 'We review analytics data and continuously refine creative angles for higher ROI.' }
    ],
    faqs: [
      { question: 'Which social media platforms should my business be on?', answer: 'We analyze your target demographic to identify where your customers spend their time—whether that is B2B on LinkedIn or B2C on Instagram, YouTube, and Meta.' },
      { question: 'Do I get to approve content before it gets posted?', answer: 'Yes! We provide complete monthly content calendars for your review and approval before anything is published.' },
      { question: 'How quickly will I see growth in followers and leads?', answer: 'Organic engagement improvements usually show within the first 30 days, while paid social ad campaigns can start generating targeted leads in the first week.' }
    ]
  },

  'digital-marketing': {
    id: 'digital-marketing',
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    eyebrow: 'GROWTH-FOCUSED DIGITAL MARKETING',
    heroHeading: 'Digital Marketing That Drives',
    heroHighlight: 'Real Growth',
    heroDesc: 'Data-driven search engine optimization, pay-per-click advertising, and conversion funnels engineered to capture market share, generate qualified leads, and maximize ROI.',
    heroImage: '/images/packages/brandnix-packages-hero.jpg',
    whyItMatters: {
      heading: 'Why Data-Driven Marketing Generates Superior ROI',
      description: 'Hope is not a marketing strategy. We use empirical performance data, rigorous A/B testing, and full-funnel tracking to predictably scale your customer acquisition.',
      points: [
        { title: 'High-Intent Search Traffic', desc: 'Position your brand in front of customers at the exact moment they are searching to buy.' },
        { title: 'Predictable Customer Acquisition', desc: 'Scale ad spend with confidence knowing your exact Cost Per Acquisition (CPA) and Customer Lifetime Value (LTV).' },
        { title: 'Compounding Organic Growth', desc: 'SEO creates an enduring digital asset that delivers free qualified leads month after month.' },
        { title: 'Maximum Funnel Conversion', desc: 'Optimizing landing pages and email nurture sequences ensures zero wasted traffic.' }
      ]
    },
    services: [
      {
        title: 'Search Engine Optimization (SEO)',
        slug: 'seo',
        shortDesc: 'Comprehensive technical, on-page, and off-page SEO to rank your business at the top of Google search results.',
        deliverables: ['Technical SEO & Core Web Vitals', 'Keyword Research & Search Intent Mapping', 'High-Authority Link Building', 'Local SEO & Google Maps Ranking']
      },
      {
        title: 'Google Ads (PPC)',
        slug: 'google-ads',
        shortDesc: 'High-converting Google Search, Display, Shopping, and Performance Max campaigns managed for maximum ROAS.',
        deliverables: ['Search & Intent Keyword Targeting', 'Negative Keyword Sculpting', 'Ad Copy A/B Testing', 'Conversion Tracking & ROAS Optimization']
      },
      {
        title: 'Meta (Facebook & Instagram) Ads',
        slug: 'meta-ads',
        shortDesc: 'Precision targeted visual ad campaigns across Facebook and Instagram to scale brand awareness and sales.',
        deliverables: ['Creative Testing & Video Ads', 'Lookalike & Interest Audience Stacks', 'Dynamic Product Ads', 'Retargeting Funnels']
      },
      {
        title: 'Conversion Rate Optimization (CRO)',
        slug: 'conversion-rate-optimization',
        shortDesc: 'Scientific A/B testing and user journey optimization to turn more website visitors into paying customers.',
        deliverables: ['Heatmaps & Session Recording Analysis', 'A/B & Multivariate Split Testing', 'Checkout & Form Friction Removal', 'Copy & Call-to-Action Testing']
      },
      {
        title: 'Email Marketing',
        slug: 'email-marketing',
        shortDesc: 'Automated email flows and high-engagement broadcast campaigns that nurture leads and generate repeat sales.',
        deliverables: ['Welcome & Onboarding Sequences', 'Cart Abandonment Automations', 'VIP & Win-back Flows', 'List Segmentation & Deliverability Audit']
      },
      {
        title: 'Content Marketing',
        slug: 'content-marketing',
        shortDesc: 'Authoritative blog articles, case studies, and lead magnets that attract buyers and establish industry leadership.',
        deliverables: ['SEO Editorial Calendar', 'Long-form Pillar Articles', 'Downloadable Whitepapers & Guides', 'Content Distribution & Syndication']
      },
      {
        title: 'Online Reputation Management',
        slug: 'online-reputation-management',
        shortDesc: 'Monitor, protect, and enhance your digital brand reputation across Google Reviews, Trustpilot, and press.',
        deliverables: ['Review Generation Systems', 'Sentiment Monitoring & Alerts', 'Negative Review Mitigation', 'PR & Brand Authority Building']
      },
      {
        title: 'Analytics & Reporting',
        slug: 'analytics-and-reporting',
        shortDesc: 'Custom Google Analytics 4 (GA4) setups, server-side tracking, and intuitive live performance dashboards.',
        deliverables: ['GA4 & Google Tag Manager Setup', 'Server-side Conversion API (CAPI)', 'Custom Looker Studio Dashboards', 'Monthly Executive Performance Reports']
      },
      {
        title: 'Marketing Automation',
        slug: 'marketing-automation',
        shortDesc: 'Connect your CRM, email, and ad platforms with intelligent workflows that save time and close deals faster.',
        deliverables: ['HubSpot / Klaviyo / Zapier Workflows', 'Lead Scoring & Routing Rules', 'Multi-channel Drip Campaigns', 'Sales Pipeline Automation']
      },
      {
        title: 'Lead Generation',
        slug: 'lead-generation',
        shortDesc: 'Full-funnel B2B and B2C lead acquisition campaigns designed to fill your sales pipeline with qualified buyers.',
        deliverables: ['High-converting Lead Funnels', 'Interactive Lead Quizzes & Calculators', 'CRM Lead Ingestion', 'Lead Quality Verification']
      }
    ],
    benefits: [
      { title: 'Transparent Performance Metrics', desc: 'No vanity metrics—we measure success by revenue, qualified leads, and ROAS.' },
      { title: 'Omnichannel Growth Strategy', desc: 'Coordinated synergy between search, paid social, email, and content marketing.' },
      { title: 'Continuous A/B Experimentation', desc: 'We constantly test new ad creatives, landing page copy, and audience angles.' },
      { title: 'Dedicated Growth Strategist', desc: 'Direct access to senior marketing specialists managing your campaigns.' }
    ],
    process: [
      { step: '01', title: 'Audit & Competitor Intelligence', desc: 'We dissect your existing funnels, ad accounts, SEO metrics, and competitor gaps.' },
      { step: '02', title: 'Strategy & Tracking Setup', desc: 'We install rock-solid tracking (GA4, CAPI) and map out the target CAC and ROAS.' },
      { step: '03', title: 'Campaign Architecture', desc: 'We build ad copy, design creatives, write SEO content, and configure ad sets.' },
      { step: '04', title: 'Launch & Data Gathering', desc: 'We deploy campaigns and closely monitor early conversion and traffic signals.' },
      { step: '05', title: 'Optimization & Budget Scaling', desc: 'We scale winning keywords and ad sets while pruning underperforming elements.' },
      { step: '06', title: 'Reporting & Strategy Evolution', desc: 'Monthly deep-dive reviews to align marketing momentum with your business roadmap.' }
    ],
    faqs: [
      { question: 'What is the difference between SEO and Google Ads (PPC)?', answer: 'Google Ads delivers immediate targeted traffic and sales as soon as campaigns launch, whereas SEO builds long-term organic authority and delivers compounding free traffic over time. Combining both yields the highest market dominance.' },
      { question: 'How do you track return on investment (ROI)?', answer: 'We set up server-side conversion tracking, Google Analytics 4, and CRM attribution so you can see the exact revenue and lead value generated from every marketing dollar.' },
      { question: 'How much ad budget do I need to start?', answer: 'We recommend starting with an ad spend budget that allows sufficient data collection (typically $1,000–$3,000/month) which we scale aggressively as winning ads prove profitability.' }
    ]
  },

  'other-services': {
    id: 'other-services',
    slug: 'other-services',
    title: 'Other Services',
    eyebrow: 'ENTERPRISE & SPECIALIZED SOLUTIONS',
    heroHeading: 'Specialized Digital Solutions for',
    heroHighlight: 'Modern Businesses',
    heroDesc: 'From AI automation and CRM integration to branding, video production, and business consulting—we provide the specialized capabilities your company needs to scale.',
    heroImage: '/images/contact/brandnix-contact-hero.jpg',
    whyItMatters: {
      heading: 'Why Specialized Digital Capabilities Give You an Edge',
      description: 'Modern business success requires more than just marketing—it requires seamless operations, compelling visual storytelling, and intelligent automation.',
      points: [
        { title: 'Operational Efficiency', desc: 'AI and automated workflows eliminate manual busywork, freeing your team to focus on high-value strategy.' },
        { title: 'Unified Brand Image', desc: 'Cohesive branding and video assets elevate your company above competitors in crowded markets.' },
        { title: 'Seamless Customer Experience', desc: 'Connected CRM and WhatsApp API automations deliver instant support and close deals faster.' },
        { title: 'Cost-Effective Scaling', desc: 'Outsourcing and specialized software integrations reduce overhead while boosting output.' }
      ]
    },
    services: [
      {
        title: 'Branding & Identity Design',
        slug: 'branding-and-identity-design',
        shortDesc: 'Craft memorable brand identities including logos, color systems, typography guides, and brand books.',
        deliverables: ['Custom Logo Suite (Vector)', 'Brand Identity Guidelines Book', 'Typography & Palette Standards', 'Business Card & Stationery Kit']
      },
      {
        title: 'Graphic Design Services',
        slug: 'graphic-design-services',
        shortDesc: 'High-quality marketing collateral, brochures, banners, presentation decks, and packaging design.',
        deliverables: ['Marketing Collateral & Brochures', 'Pitch Decks & Investor Presentations', 'Packaging & Print Design', 'Digital Ad & Banner Sets']
      },
      {
        title: 'Video Production',
        slug: 'video-production',
        shortDesc: 'Compelling brand stories, product commercial videos, explainers, and motion graphics animations.',
        deliverables: ['Concept & Script Development', 'Professional Motion Graphics', 'Product Explainer Videos', 'Sound Design & Color Grading']
      },
      {
        title: 'AI Solutions & Automation',
        slug: 'ai-solutions-and-automation',
        shortDesc: 'Custom AI chatbots, intelligent data scrapers, automated workflows, and LLM integrations for your business.',
        deliverables: ['Custom Trained AI Chatbots', 'Workflow Automation (Make / Zapier / Python)', 'Automated Lead Qualification', 'Internal Knowledge Base Bots']
      },
      {
        title: 'CRM Setup & Integration',
        slug: 'crm-setup-and-integration',
        shortDesc: 'Seamless implementation and custom integration of HubSpot, Salesforce, Zoho, or Pipedrive.',
        deliverables: ['CRM Schema & Pipeline Architecture', 'Form & Webhook Integrations', 'Lead Stage Automations', 'Team Training & Documentation']
      },
      {
        title: 'WhatsApp Business API',
        slug: 'whatsapp-business-api',
        shortDesc: 'Official WhatsApp Business API integration for automated customer support, broadcast campaigns, and OTPs.',
        deliverables: ['Green Tick Verification Assistance', 'Automated Chatbot & FAQ Flows', 'Broadcast Message Templates', 'Payment & CRM Synchronization']
      },
      {
        title: 'Growth Hacking',
        slug: 'growth-hacking',
        shortDesc: 'Rapid experimentation across product, viral loops, and unconventional marketing channels to drive hyper-growth.',
        deliverables: ['Viral Referral Mechanism Design', 'Product-Led Growth (PLG) Tactics', 'Scraping & Outbound Growth Loops', 'Rapid Experimentation Sprint Framework']
      },
      {
        title: 'Virtual Assistance',
        slug: 'virtual-assistance',
        shortDesc: 'Dedicated remote virtual assistants to manage administrative tasks, email, data entry, and customer support.',
        deliverables: ['Dedicated Trained Assistants', 'Daily Task Reporting & SLA', 'Email & Calendar Management', 'Customer Support Ticket Handling']
      },
      {
        title: 'Outsourcing Services',
        slug: 'outsourcing-services',
        shortDesc: 'Scale your workforce efficiently with dedicated offshore development, design, and operations teams.',
        deliverables: ['Vetted Talent Sourcing', 'Managed IT & Design Teams', 'Seamless Timezone Alignment', 'Significant Cost Efficiency']
      },
      {
        title: 'Business Consulting',
        slug: 'business-consulting',
        shortDesc: 'Strategic advisory for digital transformation, pricing models, go-to-market strategies, and tech stacks.',
        deliverables: ['Go-to-Market (GTM) Strategy', 'Technology Stack Evaluation', 'Pricing & Packaging Consulting', 'Quarterly Growth Roadmap']
      },
      {
        title: 'Custom Software Solutions',
        slug: 'custom-software-solutions',
        shortDesc: 'Bespoke internal software tools, custom APIs, inventory systems, and cloud infrastructure architecture.',
        deliverables: ['Custom API & Microservice Build', 'Legacy System Modernization', 'Database Architecture & Cloud Hosting', 'Comprehensive Code Documentation']
      }
    ],
    benefits: [
      { title: 'Tailored to Your Exact Workflow', desc: 'No one-size-fits-all solutions—everything is engineered for your unique requirements.' },
      { title: 'End-to-End Technology Stack', desc: 'From branding design to custom backend APIs, we handle the full spectrum of digital needs.' },
      { title: 'Enhanced Productivity & ROI', desc: 'Eliminate bottlenecks and scale business operations with smart software and automation.' },
      { title: 'Dedicated Strategic Partnership', desc: 'Work with experienced engineers and consultants committed to your long-term success.' }
    ],
    process: [
      { step: '01', title: 'Consultation & Scope Definition', desc: 'We understand your operational pain points and map out clear technical requirements.' },
      { step: '02', title: 'Solution Architecture', desc: 'We design the branding, technical architecture, or automation workflows in detail.' },
      { step: '03', title: 'Development & Implementation', desc: 'Our specialized teams build, test, and integrate the solution into your existing stack.' },
      { step: '04', title: 'Testing & Validation', desc: 'Rigorous security, edge-case, and user validation testing before deployment.' },
      { step: '05', title: 'Training & Handover', desc: 'We train your internal team and provide clear documentation and support.' },
      { step: '06', title: 'Ongoing Evolution', desc: 'Continuous enhancements, API updates, and consulting support as your company scales.' }
    ],
    faqs: [
      { question: 'Can you integrate AI chatbots with our existing CRM and WhatsApp?', answer: 'Yes! We build custom AI assistants that connect directly with your WhatsApp Business API, HubSpot, Zoho, or custom databases to answer queries and qualify leads 24/7.' },
      { question: 'Do you offer ongoing support for custom software and branding?', answer: 'Yes, we provide dedicated maintenance agreements, ongoing consulting, and design support to ensure your technology and brand stay modern.' },
      { question: 'How do we get started with a specialized project?', answer: 'Simply schedule a free discovery consultation with our team to discuss your goals and receive a detailed project proposal and roadmap.' }
    ]
  }
};
