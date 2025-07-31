import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';
import Button from '../ui/Button';

const About = () => {
  const stats = [
    { value: '100+', label: 'Clients Served' },
    { value: '12+', label: 'Years Experience' },
    { value: '85%', label: 'Efficiency Increase' },
    { value: '3x', label: 'Average ROI' },
  ];

  return (
    <Section bgColor="light" id="about">
      {/* Unified Dark Background Container */}
      <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl p-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.span 
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-full mb-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              About DSeT Consulting
            </motion.span>
            
            <h2 className="text-5xl font-bold mb-8 leading-tight text-white">
              <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">
                Transforming Businesses
              </span>{" "}
              <br />
              Through AI Innovation
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              DSeT Consulting stands as a prominent Global Research and Consulting arm delivering pragmatic 
              orchestration of enterprise-level digital strategy, tailored consulting services, and sophisticated 
              analytical services for businesses aiming to thrive in today's fast-paced digital landscape.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6 mb-8">
              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#5e17ea] to-[#4512b0] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Our Vision</h4>
                    <p className="text-gray-300 leading-relaxed">
                      To be the leading provider of innovative, low-code digital transformation solutions that 
                      empower businesses to reach their full potential.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1e90ff] to-[#0077cc] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Our Mission</h4>
                    <p className="text-gray-300 leading-relaxed">
                      To deliver purpose-built, industry-specific solutions leveraging our DSeT ARC 
                      (Activate, Reimagine, Co-create) framework to provide flexible and dynamic digital transformations.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.a
              href="/about"
              className="relative inline-block px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <span className="relative z-10">Learn More About Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </motion.a>
          </motion.div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Company Logo/Brand Section */}
            <div className="text-center mb-12">
              <motion.div 
                className="w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#5e17ea]/20 to-[#1e90ff]/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image 
                  src="/DSeT_logo.png" 
                  alt="DSeT Logo" 
                  width={80} 
                  height={30} 
                  className="w-auto h-12"
                />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-white mb-4">DSeT Consulting</h3>
              <p className="text-gray-300 max-w-md mx-auto">
                Delivering pragmatic orchestration of enterprise-level digital strategy and sophisticated analytical services
              </p>

              {/* Technology Focus Areas */}
              <div className="flex justify-center space-x-4 mt-8">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#5e17ea] to-[#4512b0] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  AI
                </motion.div>
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#1e90ff] to-[#0077cc] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  ML
                </motion.div>
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#ff851b] to-[#e67300] rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  DA
                </motion.div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 group-hover:border-[#5e17ea]/50 transition-all duration-300">
                    <div className="text-4xl font-bold text-white mb-2 group-hover:text-[#ff851b] transition-colors duration-300">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-300">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default About;