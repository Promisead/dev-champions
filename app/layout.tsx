import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

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
        <link rel="icon" href="/favicon.jpg" type="image/x-icon" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
