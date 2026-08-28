import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#0B1320',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://brandnix.in'),
  title: {
    default: 'Brandnix Digital Solutions | Where Vision Becomes Growth',
    template: '%s | Brandnix Digital Solutions',
  },
  description:
    'Brandnix Digital Solutions — Where Vision Becomes Growth. High-performance custom web development, digital marketing, SEO, social media growth, and startup solutions.',
  keywords: [
    'Brandnix',
    'Brandnix Digital Solutions',
    'Web Development',
    'Digital Marketing Agency',
    'SEO Services',
    'Social Media Marketing',
    'E-Commerce Solutions',
    'Next.js Web Development',
    'Lead Generation',
  ],
  authors: [{ name: 'Brandnix Digital Solutions' }],
  creator: 'Brandnix Digital Solutions',
  publisher: 'Brandnix Digital Solutions',
  openGraph: {
    title: 'Brandnix Digital Solutions | Where Vision Becomes Growth',
    description:
      'Brandnix Digital Solutions — Where Vision Becomes Growth. High-performance custom web development, digital marketing, SEO, and social media scaling.',
    url: 'https://brandnix.in',
    siteName: 'Brandnix Digital Solutions',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Brandnix Digital Solutions',
    description:
      'Where Vision Becomes Growth — Digital Marketing, Web Development, and Social Media Solutions.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg?v=3', type: 'image/svg+xml' },
      { url: '/brandnix-icon.png?v=3', type: 'image/png' },
    ],
    shortcut: '/favicon.svg?v=3',
    apple: [
      { url: '/apple-touch-icon.png?v=3', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/brandnix-icon.png?v=3" type="image/png" />
        <link rel="shortcut icon" href="/favicon.svg?v=3" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
        {/* Anti-flicker theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var isDesktop = window.innerWidth >= 1024;
                  var saved = localStorage.getItem('brandnix-theme');
                  if (isDesktop && saved === 'dark') {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[#F7F8FA] dark:bg-[#0B1320] text-[#0B1320] dark:text-white font-inter min-h-screen selection:bg-brand-orange selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
