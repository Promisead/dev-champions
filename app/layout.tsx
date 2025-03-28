import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Analytics } from "@vercel/analytics/react";
import WhatsappLive from "./WhatsappLive";
import Chatbot from './Chatbot';
import Script from 'next/script';

export const metadata = {
  title: 'Dev Champions',
  description: 'Active for all Software related activities',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>

        {/* Google Analytics setup with Measurement ID directly */}
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
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <WhatsappLive />
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
