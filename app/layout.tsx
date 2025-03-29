import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import WhatsappLive from "./WhatsappLive";
import Chatbot from './Chatbot';
import Script from 'next/script';

export const metadata = {
  title: 'Dev Champions',
  description: 'Active for all Software related activities',
  metadataBase: new URL('https://www.dev-champions.tech'),
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-K6B2M9JC6G" />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K6B2M9JC6G');
            `,
          }}
        />
        <meta name="google-site-verification" content="google-site-verification=LpKsqnwfUu-q-O2vxgUqSoAUGgcYN5eOkmcS-VkkToQ" />
        <link rel="icon" href="/favicon.jpg" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        {/* Schema Markup - Organization & Website */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Dev Champions",
              "url": "https://www.dev-champions.tech", // Update to your actual URL
              "logo": "https://www.dev-champions.tech/favicon.jpg",
              "sameAs": [
                "https://www.linkedin.com/company/dev-champions-i-t",
                "https://www.twitter.com/dev_champions" // Add your real social links
              ],
              "description": "Active for all Software related activities"
            }),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Dev Champions",
              "url": "https://www.dev-champions.tech", // Update to your actual URL
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.dev-champions.tech/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <SpeedInsights />
        <WhatsappLive />
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
