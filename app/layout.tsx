// Meta
import type { Metadata } from 'next';
import { blogName, blogDesc } from '@/constants/metaInfoConst';

// style
import './globals.css';

// plugins
import NextTopLoader from 'nextjs-toploader';

// GA & log & performance
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

// components
import { ThemeProvider } from '@/components/context/theme-provider';
import { DialogProvider } from '@/components/context/dialog-provider';
import Header from '@/components/screen/Header';
import Footer from '@/components/screen/Footer';

// fonts
import { notoSansKr } from '@/assets/fonts/fonts';

export const metadata: Metadata = {
  title: blogName,
  description: blogDesc,
  openGraph: {
    title: blogName,
    description: blogDesc,
    siteName: blogName,
    images: '/posts/backend/nest_js_4_thumbnail.png',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased`}>
        <ThemeProvider>
          <NextTopLoader color="#16a34a" shadow="0 0 10px #16a34a,0 0 5px #16a34a" />
          <div id="wrap" className="min-h-screen">
            <Header />
            <div id="content">{children}</div>
            <Footer />
          </div>
          <DialogProvider />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics gaId="G-내계정키 환경변수로 넣을꺼임" />
        <GoogleTagManager gtmId="G-내계정키 환경변수로 넣을꺼임" />
      </body>
    </html>
  );
}
