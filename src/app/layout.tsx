import type { Metadata } from 'next';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rafael Freitas | Software Engineer',
  description: 'Rafael Freitas is a Software Engineer and Full Stack Developer building modern web and mobile applications with JavaScript, React, Node.js, and cloud technologies.',
  keywords: ['Rafael Freitas', 'software engineer', 'full stack developer', 'JavaScript', 'React', 'Node.js', 'portfolio'],
  authors: [{ name: 'Rafael Freitas' }],
  icons: {
    icon: [{ url: '/favicon.ico?v=rafael-logo-2026', type: 'image/x-icon' }],
    shortcut: ['/favicon.ico?v=rafael-logo-2026']
  },
  openGraph: {
    title: 'Rafael Freitas | Software Engineer',
    description: 'Software Engineer and Full Stack Developer creating modern web and mobile applications.',
    type: 'website'
  },
  twitter: {
    card: 'summary',
    title: 'Rafael Freitas | Software Engineer',
    description: 'Software Engineer and Full Stack Developer creating modern web and mobile applications.'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&family=Fira+Code:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="icon" href="/favicon.ico?v=rafael-logo-2026" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico?v=rafael-logo-2026" />
      </head>
      <body className="body-main" data-theme="dark" data-lang="en" data-dir="ltr">
        {children}
        <Analytics />
        <SpeedInsights />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
