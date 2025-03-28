import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import { Analytics } from "@vercel/analytics/react";
import WhatsappLive from "./WhatsappLive";
import Chatbot from './Chatbot';

import type { Metadata, Viewport } from "next";



/* export const metadata = {
  title: 'Dev Champions',
  description: 'Active for all Software related activities',
}; */


const APP_NAME = "Dev Champions";
const APP_DEFAULT_TITLE = "Dev Champions I.T";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION = "Active for all Software related activities";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.jpg" type="image/x-icon" />
        {/*   <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} /> */}
        <title>Dev Champions I.T</title>
        <meta name="description" content="Active for all Software related activities" />
        
      </head>
      <body>
        <Navbar />
        {children}
        <Analytics />
        <WhatsappLive/>
        <Chatbot/>
        <Footer />
      </body>
    </html>
  );
}
