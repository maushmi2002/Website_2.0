import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

interface NavbarProps {
  bannerVisible?: boolean;
}

const Navbar = ({ bannerVisible = true }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const threshold = bannerVisible ? 70 : 10;
      setScrolled(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [bannerVisible]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Assessment', href: '/digital-assessment' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'top-0 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100'
          : `${bannerVisible ? 'top-16' : 'top-0'} bg-[#5e17eb]`
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        {/* Brand / Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-[220px]"
        >
          <Link href="/" aria-label="DSeT Consulting home" className="group block focus:outline-none">
            <div className="flex items-center">
              {/* Icon tile */}
              <div
                className={[
                  'relative flex items-center justify-center',
                  'h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16',
                  'rounded-xl ring-1',
                  scrolled ? 'ring-gray-200 bg-white' : 'ring-white/20 bg-white/10 backdrop-blur-sm',
                  'transition-all duration-300 group-hover:scale-[1.03]',
                ].join(' ')}
              >
                <Image
                  src="/DSeTC logo.png"
                  alt="DSeT Consulting logo"
                  fill
                  sizes="64px"
                  className="p-2 object-contain"
                  priority
                />
              </div>

              {/* Wordmark */}
              <div className="ml-3 sm:ml-4 leading-tight">
                <div
                  className={[
                    'hidden md:block font-extrabold tracking-tight',
                    'text-2xl sm:text-3xl lg:text-[32px] lg:leading-[1.1]',
                    scrolled ? 'text-[#0B1B3A]' : 'text-white',
                    'transition-colors duration-300',
                  ].join(' ')}
                >
                  <span className="align-baseline">DSeT</span>
                  <span className="align-baseline font-semibold">&nbsp;Consulting</span>
                </div>

                <div className="md:hidden">
                  <div
                    className={[
                      'font-extrabold tracking-tight text-[22px]',
                      scrolled ? 'text-[#0B1B3A]' : 'text-white',
                      'transition-colors duration-300',
                    ].join(' ')}
                  >
                    DSeT
                  </div>
                  <div
                    className={[
                      'mt-0.5 text-[14px] font-medium tracking-wide',
                      scrolled ? 'text-[#5e17ea]' : 'text-white/90',
                      'transition-colors duration-300',
                    ].join(' ')}
                  >
                    Consulting
                  </div>
                </div>

                <div
                  className={[
                    'mt-1 h-[2px] w-8',
                    'bg-gradient-to-r from-[#5e17ea] to-[#1e90ff]',
                    'opacity-80 group-hover:opacity-100 transition-opacity duration-300',
                  ].join(' ')}
                />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={link.href}
                className={`relative font-medium text-sm lg:text-base ${
                  scrolled ? 'text-[#001f3f]' : 'text-white'
                } hover:text-[#1e90ff] transition-colors duration-300 group px-3 py-2 rounded-lg hover:bg-white/5`}
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] group-hover:w-3/4 transition-all duration-300"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Mobile/Tablet Navigation Toggle */}
        <button
          className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
            scrolled
              ? 'bg-gray-100 text-[#001f3f] hover:bg-gray-200 border border-gray-200'
              : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden bg-white/95 backdrop-blur-lg shadow-xl border-t border-gray-100"
        >
          <div className="container-custom py-6 flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="relative font-medium text-base text-[#001f3f] hover:text-[#5e17ea] transition-all duration-300 py-3 border-b border-gray-100 group block"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5e17ea] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-4"
            >
              <Link
                href="/contact"
                className="relative inline-block w-full px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg text-center overflow-hidden group"
                onClick={() => setIsOpen(false)}
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
