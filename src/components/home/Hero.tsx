import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#001f3f]">
      {/* Dynamic gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f]" />
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-[#5e17ea]/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-3/4 -right-1/4 w-96 h-96 bg-[#1e90ff]/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-1/2 left-1/3 w-96 h-96 bg-[#ff851b]/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      {/* Moving grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 py-16 md:py-24 relative z-10">
        <motion.div
          className="flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-full mb-6 shadow-lg">
              Catalyzing Digital Transformation
            </span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white"
            variants={itemVariants}
          >
            From <span className="text-[#ff851b]">Legacy</span> to
            <span className="block bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent">
              Leading Edge
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-white mb-8 max-w-2xl leading-relaxed"
            variants={itemVariants}
          >
            We orchestrate seamless digital transformations that turn outdated processes into 
            AI-powered, hyper-efficient systems, unlocking unprecedented growth and innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <motion.a 
              href="/contact" 
              className="relative px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-medium rounded-md shadow-lg text-center overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10">Start Your Transformation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-md blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            </motion.a>
            <motion.a 
              href="/services" 
              className="relative px-8 py-4 text-white font-medium rounded-md text-center overflow-hidden group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 border-2 border-white/50 rounded-md"></span>
              <span className="relative z-10">Explore Our Approach</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              <div className="absolute -inset-1 bg-white/20 rounded-md blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {/* 3D Visual Metaphor for Transformation */}
          <div className="relative w-full h-[500px] perspective-1000">
            {/* Before: Fragmented, chaotic state */}
            <motion.div 
              className="absolute inset-0 preserve-3d"
              initial={{ opacity: 1, rotateY: 0 }}
              animate={{ 
                opacity: 0, 
                rotateY: 180,
                transition: { delay: 2, duration: 1.5 } 
              }}
            >
              <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-gradient-to-br from-gray-500/40 to-gray-600/40 rounded-lg shadow-xl transform-gpu rotate-12 animate-float"></div>
              <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-gray-500/40 to-gray-600/40 rounded-full shadow-xl transform-gpu -rotate-12 animate-float-reverse"></div>
              <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-gradient-to-br from-gray-500/40 to-gray-600/40 rounded-md shadow-xl transform-gpu rotate-45 animate-float-slow"></div>
              <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-gray-500/20 to-gray-600/20 rounded-2xl shadow-xl transform-gpu -rotate-6"></div>
            </motion.div>
            
            {/* After: Cohesive, integrated state */}
            <motion.div 
              className="absolute inset-0 preserve-3d"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ 
                opacity: 1, 
                scale: 1, 
                rotateY: 0,
                transition: { delay: 2.5, duration: 1.5 } 
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Outer rotating rings */}
                  <motion.div 
                    className="absolute inset-0"
                    animate={{ 
                      rotateZ: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <div className="absolute inset-0 rounded-full border-4 border-[#5e17ea]/30 border-t-[#5e17ea]"></div>
                    <div className="absolute inset-4 rounded-full border-4 border-[#1e90ff]/30 border-r-[#1e90ff]"></div>
                  </motion.div>
                  
                  {/* Static central hub with logo */}
                  <div className="absolute inset-8 bg-gradient-to-br from-[#001f3f] to-[#002b57] rounded-full shadow-2xl flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#5e17ea]/20 to-[#1e90ff]/20 animate-pulse"></div>
                    <div className="relative z-10 flex items-center justify-center w-full h-full p-8">
                      <Image 
                        src="/DSeT_logo.png" 
                        alt="DSeT Logo" 
                        width={140} 
                        height={50} 
                        className="w-auto h-20 object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Floating benefit nodes with glow effect */}
          <motion.div 
            className="absolute -top-4 -right-4 group"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { delay: 3, duration: 0.5 } 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative p-4 backdrop-blur-xl bg-white/10 border border-white/30 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5e17ea]/20 to-[#1e90ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-white font-semibold relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#5e17ea] rounded-full animate-pulse shadow-glow-purple"></span>
                Increased Efficiency
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute -bottom-4 -left-4 group"
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: { delay: 3.2, duration: 0.5 } 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative p-4 backdrop-blur-xl bg-white/10 border border-white/30 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1e90ff]/20 to-[#ff851b]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-white font-semibold relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#1e90ff] rounded-full animate-pulse shadow-glow-blue"></span>
                AI-Powered Insights
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 -left-16 transform -translate-y-1/2 group"
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              x: 0, 
              scale: 1,
              transition: { delay: 3.4, duration: 0.5 } 
            }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative p-4 backdrop-blur-xl bg-white/10 border border-white/30 rounded-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff851b]/20 to-[#5e17ea]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <p className="text-white font-semibold relative z-10 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#ff851b] rounded-full animate-pulse shadow-glow-orange"></span>
                Sustainable Growth
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Professional divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-8 bg-gradient-to-r from-[#001f3f] via-[#1e90ff] to-[#001f3f] opacity-30"></div>
        <div className="h-1 bg-[#ff851b]"></div>
        <div className="h-16 bg-white"></div>
      </div>
    </div>
  );
};

export default Hero;