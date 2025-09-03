import Link from 'next/link';
import Image from 'next/image';
import { FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
    ],
    services: [
      { name: 'Digital Services', href: '/services#digital' },
      { name: 'Strategy Services', href: '/services#strategy' },
      { name: 'Execution Services', href: '/services#execution' },
      { name: 'Transformation Services', href: '/services#transformation' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Cookie Policy', href: '/cookie-policy' },
    ],
  };

  // All partner logos from public/Partner_Logos — include all files and provide friendly labels
  const partnerLogos = [
    { src: '/Partner_Logos/DPIIT.jpg', alt: 'DPIIT', label: 'DPIIT' },
    { src: '/Partner_Logos/MSME-logo.jpg', alt: 'MSME', label: 'MSME' }, // NEW
    { src: '/Partner_Logos/Microsoft_Success_Partner.png', alt: 'Microsoft ISV Partner', label: 'Microsoft ISV Partner' },
    { src: '/Partner_Logos/STPI.jpg', alt: 'STPI - Bengaluru', label: 'STPI - Bengaluru' },
    { src: '/Partner_Logos/stpi_centre_of_excellence_for_efficiency_augmentation_logo.jpg', alt: 'STPI Centre of Excellence', label: 'STPI CoE' },
    { src: '/Partner_Logos/gcp.png', alt: 'Google Cloud', label: 'Google Cloud' },
    { src: '/Partner_Logos/Nvidia_partner.webp', alt: 'NVIDIA Partner', label: 'NVIDIA Partner' },
    { src: '/Partner_Logos/Ingram_Logo.png', alt: 'Ingram Micro', label: 'Ingram Micro' },
    { src: '/Partner_Logos/redington.png', alt: 'Redington', label: 'Redington' },
    { src: '/Partner_Logos/Utkarsh-Odisha.jpg', alt: 'Utkarsh Odisha', label: 'Utkarsh Odisha' },
    { src: '/Partner_Logos/eMudhra.png', alt: 'eMudhra', label: 'eMudhra' },
    { src: '/Partner_Logos/inspace.png', alt: 'IN-SPACe', label: 'IN-SPACe' },
    { src: '/Partner_Logos/iso-certified-golden-label-vector-illustration-51941869.webp', alt: 'ISO Certified', label: 'ISO Certified' },
  ];

  return (
    <footer className="bg-gray-900 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="lg:col-span-2 text-center lg:text-left">
            <Link href="/" className="flex items-center justify-center lg:justify-start mb-4">
              <span className="text-lg sm:text-xl font-bold">DSeT</span>
              <span className="ml-1 text-blue-600 font-bold">Consulting</span>
            </Link>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md mx-auto lg:mx-0 text-sm sm:text-base leading-relaxed">
              Empowering businesses through efficient AI augmentation and strategic digital transformation for exponential growth.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/company/dset-consulting" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2" aria-label="LinkedIn">
                <FiLinkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://x.com/cmdset10x" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2" aria-label="Twitter">
                <FaXTwitter size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.facebook.com/DSeTConsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2" aria-label="Facebook">
                <FiFacebook size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a href="https://www.instagram.com/dsetconsulting/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2" aria-label="Instagram">
                <FiInstagram size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white dark:text-gray-100 mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm sm:text-base transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white dark:text-gray-100 mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 text-sm sm:text-base transition-colors duration-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 sm:py-8">
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-100 text-center leading-relaxed">
              Our Accelerators, Partners, Collaborators and Certifications
            </h3>

            {/* Partner logos grid */}
            <div className="w-full mt-4 sm:mt-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 gap-3 sm:gap-6 items-stretch justify-items-center">
                {partnerLogos.map((p) => (
                  <div
                    key={p.src}
                    className="flex flex-col items-center justify-center p-2 sm:p-3 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-[180px] sm:max-w-[220px]"
                    aria-hidden={false}
                  >
                    <div className="relative w-full h-16 sm:h-20">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(max-width: 640px) 120px, (max-width: 1024px) 160px, 180px"
                        style={{ objectFit: 'contain' }}
                        priority
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300 mt-2 sm:mt-3 text-center font-medium leading-tight hidden sm:block">
                      {p.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              &copy; {currentYear} DSeT Consulting Private Limited. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-blue-400 text-xs sm:text-sm transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
