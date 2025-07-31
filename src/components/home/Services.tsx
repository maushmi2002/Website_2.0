import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { FiCpu, FiTrendingUp, FiLayers, FiUsers } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiCpu className="h-8 w-8" />,
      title: 'AI Strategy',
      description: 'Develop a comprehensive AI roadmap tailored to your business goals, identifying key opportunities for implementation and growth.',
      link: '/services/ai-strategy',
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: 'Digital Transformation',
      description: 'Reimagine your business processes through our DSeT ARC framework to drive efficiency, innovation, and competitive advantage.',
      link: '/services/digital-transformation',
    },
    {
      icon: <FiLayers className="h-8 w-8" />,
      title: 'Business Consulting',
      description: 'Leverage data analytics and market intelligence to make informed decisions and execute strategies for sustainable growth.',
      link: '/services/business-consulting',
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: 'Leadership Growth',
      description: 'Empower your leadership team with the skills and mindset needed to navigate the complexities of AI-driven business environments.',
      link: '/services/leadership-growth',
    },
  ];

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
    <Section bgColor="light" id="services">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.span 
          className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-full mb-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.span>
        <motion.h2 
          className="text-5xl font-bold mb-8 text-[#ff851b]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          AI-Powered Solutions for{" "}
          <span className="bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent">
            Business Growth
          </span>
        </motion.h2>
        <motion.p 
          className="text-xl text-[#ffffff] leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We help businesses leverage strategic AI technologies to optimize operations, enhance decision-making, 
          and drive sustainable growth through our comprehensive suite of professional services.
        </motion.p>
      </div>

      {/* Services Grid */}
      <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl p-12 mb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>
        
        <motion.div 
          className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="group relative"
              variants={itemVariants}
            >
              <div className="text-center">
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-6 mx-auto border border-white/20 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-white text-2xl">
                    {service.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <motion.a 
                  href={service.link} 
                  className="inline-flex items-center text-[#ff851b] font-semibold hover:text-white transition-colors duration-300 group/link"
                  whileHover={{ x: 5 }}
                >
                  Learn More 
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transition-transform group-hover/link:translate-x-1" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.a 
            href="/services" 
            className="relative inline-block px-10 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
          </motion.a>
        </motion.div>
      </div>
    </Section>
  );
};

export default Services;