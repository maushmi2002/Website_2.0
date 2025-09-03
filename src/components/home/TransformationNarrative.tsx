import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from '../ui/Section';

const TransformationNarrative = () => {
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
        duration: 0.6,
      },
    },
  };

  return (
    <Section bgColor="light" id="transformation-narrative">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* DSeT Workplace Motto Section */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-[#5e17ea] rounded-md mb-6">
            Our Workplace Motto
          </span>
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <Image 
              src="/Our_Motto.jpg" 
              alt="DSeT Workplace Motto" 
              width={800} 
              height={400} 
              className="mx-auto rounded-lg mb-6"
            />
            <h2 className="text-3xl font-bold text-[#001f3f] mb-4">
              Driving Excellence Through Our Core Values
            </h2>
            <p className="text-lg text-[#4d4d4d] leading-relaxed">
              Our workplace motto embodies the principles that guide every digital transformation 
              initiative we undertake, ensuring sustainable growth and operational excellence.
            </p>
          </div>
        </motion.div>

        {/* Digital Transformation Narrative */}
        <motion.div 
          className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl p-12 mb-16 overflow-hidden"
          variants={itemVariants}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.span 
                className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-full mb-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Digital Transformation
              </motion.span>
              <h2 className="text-5xl font-bold mb-8 text-white">
                <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">
                  The Digital Transformation
                </span>{" "}
                <br />
                Imperative
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left Column - Transformation Process */}
              <div className="space-y-8">
                <motion.div 
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5e17ea] to-[#4512b0] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Traditional Challenges</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Legacy systems, disconnected processes, and manual workflows create inefficiencies 
                        that limit growth potential and competitive advantage in today&apos;s digital-first economy.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1e90ff] to-[#0077cc] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Our Solution Approach</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        We bridge the gap between current state and digital excellence through strategic 
                        AI implementation, process optimization, and data-driven decision making frameworks.
                      </p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="group relative"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ff851b] to-[#e67300] rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">Measurable Outcomes</h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        Our clients experience significant efficiency gains, cost reductions, and revenue 
                        growth through our proven digital transformation methodologies and continuous support.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Right Column - Timeline */}
              <div className="relative">
                <h3 className="text-3xl font-bold text-white mb-8 text-center">Transformation Timeline</h3>
                
                <div className="space-y-6">
                  <motion.div 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff851b] to-[#e67300] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-white">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Assessment & Strategy</h4>
                      <p className="text-gray-300">Weeks 1-2: Comprehensive analysis of current systems and strategic planning</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1e90ff] to-[#0077cc] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-white">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Implementation & Integration</h4>
                      <p className="text-gray-300">Weeks 3-8: Phased rollout of digital solutions and AI-powered tools</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff851b] to-[#e67300] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-white">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Optimization & Training</h4>
                      <p className="text-gray-300">Weeks 9-12: Performance tuning, team training, and knowledge transfer</p>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5e17ea] to-[#4512b0] rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg font-bold text-white">∞</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-2">Continuous Support & Evolution</h4>
                      <p className="text-gray-300">Ongoing monitoring, updates, and strategic enhancements</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Innovation Section */}
        <motion.div 
          className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-xl p-8 mb-16 border border-[#001f3f]/10"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <motion.span 
              className="inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-md mb-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              AI Innovation
            </motion.span>
            <h2 className="text-4xl font-bold text-[#001f3f] mb-6">
              Transforming Businesses Through{" "}
              <span className="bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent">
                AI Innovation
              </span>
            </h2>
            <p className="text-xl text-[#4d4d4d] max-w-4xl mx-auto leading-relaxed">
              DSeT Consulting stands as a prominent Global Research and Consulting arm delivering pragmatic orchestration 
              of enterprise-level digital strategy, tailored consulting services, and sophisticated analytical services 
              for businesses aiming to thrive in today&apos;s fast-paced digital landscape.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#5e17ea]/5 to-[#1e90ff]/5 rounded-lg p-8 border border-[#5e17ea]/20">
            <h3 className="text-2xl font-bold text-[#001f3f] mb-6 text-center">
              AI-Powered Solutions for Business Growth
            </h3>
            <p className="text-lg text-[#4d4d4d] text-center max-w-3xl mx-auto">
              We help businesses leverage strategic AI technologies to optimize operations, enhance decision-making, 
              and drive sustainable growth through our comprehensive suite of professional services.
            </p>
          </div>
        </motion.div>

        {/* Efficiency Showcase */}
        <motion.div 
          className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-2xl shadow-2xl p-12 overflow-hidden"
          variants={itemVariants}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-full mb-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Our Capabilities
              </motion.span>
              <h2 className="text-5xl font-bold mb-8 text-white">
                <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">
                  Bringing Efficiency
                </span>{" "}
                <br />
                to Every Aspect of Your Business
              </h2>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
                Our comprehensive approach transforms operations across all business functions, 
                delivering measurable improvements in productivity, cost-effectiveness, and strategic capability.
              </p>
            </div>
            
            {/* Feature Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#5e17ea]/20 to-[#5e17ea]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#5e17ea]/30 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#5e17ea]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Process Automation</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Eliminate manual tasks and streamline workflows with intelligent automation solutions
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#1e90ff]/20 to-[#1e90ff]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#1e90ff]/30 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#1e90ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Real-time insights and predictive analytics to drive informed decision-making
                </p>
              </motion.div>
              
              <motion.div 
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff851b]/20 to-[#ff851b]/10 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-[#ff851b]/30 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#ff851b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Cost Optimization</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Strategic resource allocation and cost reduction through operational efficiency
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default TransformationNarrative;