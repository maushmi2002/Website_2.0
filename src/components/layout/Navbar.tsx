import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center group">
          <motion.div 
            className="relative flex items-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/DSeT_logo.png" 
              alt="DSeT Consulting Logo" 
              width={140} 
              height={50} 
              className="h-12 w-auto object-contain"
              priority
            />
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] group-hover:w-full transition-all duration-300 rounded-full"></div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={link.href}
                className={`relative font-medium text-base transition-all duration-300 group ${
                  scrolled 
                    ? 'text-[#001f3f] hover:text-[#5e17ea]' 
                    : 'text-white hover:text-[#ff851b]'
                }`}
              >
                {link.name}
                <div className={`absolute -bottom-2 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full ${
                  scrolled 
                    ? 'bg-[#5e17ea]' 
                    : 'bg-[#ff851b]'
                }`}></div>
              </Link>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/contact"
              className="relative px-6 py-2.5 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-medium rounded-lg shadow-md text-sm overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </Link>
          </motion.div>
        </nav>

        {/* Mobile/Tablet Navigation Toggle */}
        <button 
          className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
            scrolled 
              ? 'bg-gray-100 text-[#001f3f] hover:bg-gray-200 border border-gray-200' 
              : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
          }`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
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
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#5e17ea] group-hover:w-full transition-all duration-300"></div>
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;