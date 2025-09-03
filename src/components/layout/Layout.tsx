import { ReactNode, useState } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import PromoBanner from './PromoBanner';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ 
  children, 
  title = 'DSeT Consulting | AI-Powered Business Transformation',
  description = 'DSeT Consulting provides AI-powered business transformation services to help organizations leverage artificial intelligence for growth and efficiency.'
}: LayoutProps) => {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <PromoBanner onVisibilityChange={setBannerVisible} />
        <Navbar bannerVisible={bannerVisible} />
        <main className={`flex-grow ${bannerVisible ? 'pt-32' : 'pt-16'} transition-all duration-300`}>
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;