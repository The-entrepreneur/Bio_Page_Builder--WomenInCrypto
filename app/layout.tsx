import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import CanonicalHead from './CanonicalHead';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Women in Crypto - Connect With Likeminded Women',
  description: 'Empowering Nigerian Women. A platform for women and every supporter across all genders who seek to enhance their knowledge and education in the growing fields of cryptocurrency, blockchain ... Join our community of thousands breaking barriers in crypto through education, networking, and innovation.', 
  keywords: [
    'women in crypto Nigeria',
    'Nigerian blockchain community',
    'crypto education for women Nigeria',
    'female crypto leaders Nigeria',
    'Nigerian DeFi community',
    'Web3 Nigeria',
    'crypto networking Nigeria',
    'blockchain empowerment Nigeria',
    'women in Bitcoin Nigeria',
    'Nigerian NFT community',
    'crypto events Nigeria',
    'crypto jobs for women Nigeria',
    'Lagos crypto community',
    'Abuja blockchain network',
    'African women in crypto',
    'crypto investment Nigeria',
    'crypto trading Nigeria',
    'women in fintech Nigeria',
    'Nigerian crypto influencers',
    'crypto mentorship Nigeria'
  ].join(', '),
  authors: [{ name: 'Dero Idoghor' }],
  openGraph: {
    title: 'Women in Crypto - Connect With Likeminded Women',
    description: 'Empowering Nigerian Women make more money in crypto',
    type: 'website',
    locale: 'en_US',
    url: 'https://wic-community.vercel.app/',
    siteName: 'Women in Crypto Nigeria',
    images: [
      {
        url: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1200',
        width: 1200,
        height: 630,
        alt: 'Women in Crypto Community',
      },
    ],
    // Removed fbAppId (not valid in Next.js Metadata)
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women in Crypto - Connect With Likeminded Women',
    description: 'Empowering Nigerian Women make more money in crypto',
    images: ['https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1200'],
    site: '@womenincrypto',
    creator: '@womenincrypto',
    // Removed url (not valid in Next.js Metadata)
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'B9Jr09g2SL2yWIcVLIyWH9yM67WInqw1yYgtcZbnDks',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="57x57" href="/Icons8/f8204a3f3937afd5/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/Icons8/f8204a3f3937afd5/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/Icons8/f8204a3f3937afd5/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/Icons8/f8204a3f3937afd5/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/Icons8/f8204a3f3937afd5/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/Icons8/f8204a3f3937afd5/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/Icons8/f8204a3f3937afd5/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/Icons8/f8204a3f3937afd5/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/Icons8/f8204a3f3937afd5/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/Icons8/f8204a3f3937afd5/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/Icons8/f8204a3f3937afd5/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/Icons8/f8204a3f3937afd5/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/Icons8/f8204a3f3937afd5/favicon-16x16.png" />
        <link rel="manifest" href="/Icons8/f8204a3f3937afd5/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/Icons8/f8204a3f3937afd5/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Women in Crypto Nigeria",
              "url": "https://wic-community.vercel.app/",
              "logo": "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=1200",
              "sameAs": [
                "https://www.facebook.com/p/Women-In-Cryptocurrency-100093488221438/?locale=eu_ES",
                "https://www.instagram.com/women_in_cryptocurrency/#",
                "https://t.me/womenincrypto",
                "https://linkedin.com/company/womenincrypto",
                "https://www.youtube.com/@Womenincrypto"
              ]
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://wic-community.vercel.app/",
              "name": "Women in Crypto Nigeria",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://wic-community.vercel.app//?s={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <CanonicalHead />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}