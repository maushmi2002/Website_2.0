import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const ComingSoon: NextPage = () => {
  return (
    <>
      <Head>
        <title>Case Studies - Coming Soon | DSeT Consulting</title>
        <meta 
          name="description" 
          content="Our case studies section is under development. Stay tuned for detailed insights into our successful client transformations." 
        />
      </Head>
      <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container-custom py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Case Studies Coming Soon
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We're currently documenting our success stories and transformative client journeys. 
              Check back soon to explore detailed case studies of how we've helped businesses 
              achieve their digital transformation goals.
            </p>
            <div className="space-y-6">
              <div className="p-6 bg-gray-800 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold text-white mb-3">
                  What to Expect
                </h2>
                <ul className="text-left text-gray-300 space-y-3">
                  <li>• In-depth analysis of client challenges and solutions</li>
                  <li>• Measurable results and transformation metrics</li>
                  <li>• Implementation strategies and methodologies</li>
                  <li>• Real-world impact and business outcomes</li>
                </ul>
              </div>
              <Link 
                href="/"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <FiArrowLeft className="mr-2" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;