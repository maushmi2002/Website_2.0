import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { 
  FiCloud, 
  FiCode, 
  FiBarChart2, 
  FiBriefcase, 
  FiTrendingUp, 
  FiTarget,
  FiMap,
  FiZap,
  FiSettings,
  FiUsers,
  FiActivity,
  FiHeart,
  FiCpu,
  FiTruck,
  FiMonitor,
  FiLayers,
  FiDatabase,
  FiGlobe
} from 'react-icons/fi';

const ServicesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const arcCategories = [
    {
      title: "DIGITAL",
      subtitle: "Assess Maturity & Transformation Tenets",
      description: "Transform your digital landscape with cutting-edge technology solutions",
      phases: [
        { phase: "ASSESS", description: "Digital Capability, Architecture & Maturity" },
        { phase: "REINVENT", description: "Digital Capability, Architecture, Platforms" },
        { phase: "CREATE", description: "Digital Blueprint + inter weaved systems" }
      ],
      offerings: [
        {
          icon: <FiCloud className="w-6 h-6" />,
          title: "Cloud Architecture Solutions",
          description: "Co-create a resilient and scalable cloud infrastructure.",
          link: "/services/cloud-architecture"
        },
        {
          icon: <FiCode className="w-6 h-6" />,
          title: "Low Code/No Code Technology Integration",
          description: "Co-create innovative applications swiftly with our low code/no code integration services.",
          link: "/services/low-code"
        },
        {
          icon: <FiBarChart2 className="w-6 h-6" />,
          title: "Data Analytics and Business Intelligence",
          description: "Activate your data's potential with our analytics and business intelligence services.",
          link: "/services/data-analytics"
        }
      ],
      color: "#5e17ea"
    },
    {
      title: "STRATEGY",
      subtitle: "Align Business Strategy to Digital Transformation",
      description: "Strategic alignment for sustainable digital transformation success",
      phases: [
        { phase: "ASSESS", description: "Vision, Mission, Goals, Objectives, Gaps, as is state processes" },
        { phase: "REIMAGINE", description: "CX touch points, UX Persona journeys, Process & Operating Model" },
        { phase: "CREATE", description: "CX, UX, Process, Opportunities, Change, Capabilities mapping" }
      ],
      offerings: [
        {
          icon: <FiBriefcase className="w-6 h-6" />,
          title: "DSeT for Business and Innovation",
          description: "Co-create innovative business models and drive sustainable growth.",
          link: "/services/business-innovation"
        },
        {
          icon: <FiTrendingUp className="w-6 h-6" />,
          title: "Digital Strategy and Growth",
          description: "Activate your digital potential with our cutting-edge strategies.",
          link: "/services/digital-strategy"
        },
        {
          icon: <FiTarget className="w-6 h-6" />,
          title: "Market Strategy Execution",
          description: "Reimagine your market approach with our insightful strategies.",
          link: "/services/market-strategy"
        },
        {
          icon: <FiMap className="w-6 h-6" />,
          title: "Strategic Planning and Road Mapping",
          description: "Reimagine your future with our strategic planning and road mapping services.",
          link: "/services/strategic-planning"
        }
      ],
      color: "#1e90ff"
    },
    {
      title: "EXECUTION",
      subtitle: "Prioritize Business Opportunities for Implementation",
      description: "Excellence in execution through proven methodologies and frameworks",
      phases: [
        { phase: "ASSESS", description: "Execution readiness" },
        { phase: "REIMAGINE", description: "Program and Change Management, Architecture" },
        { phase: "CREATE", description: "Agile delivery planning, Opportunity Bundling" }
      ],
      offerings: [
        {
          icon: <FiZap className="w-6 h-6" />,
          title: "Agile Methodologies Excellence",
          description: "Reimagine your project delivery with Agile methodologies.",
          link: "/services/agile-methodologies"
        },
        {
          icon: <FiSettings className="w-6 h-6" />,
          title: "Process Automation and Optimization",
          description: "Activate efficiency with our automation solutions.",
          link: "/services/process-automation"
        },
        {
          icon: <FiUsers className="w-6 h-6" />,
          title: "Business Process Management",
          description: "Activate continuous improvement with our business process management solutions.",
          link: "/services/process-management"
        }
      ],
      color: "#ff851b"
    },
    {
      title: "TRANSFORMATION",
      subtitle: "Transformation Roadmap of People & Business",
      description: "Holistic transformation that encompasses people, processes, and technology",
      phases: [
        { phase: "ASSESS", description: "Mindset, Executive Branding Transformation needs" },
        { phase: "REINVENT", description: "Executive & Business Transformation Blueprint" },
        { phase: "CREATE", description: "Personal and Digital Transformation Blueprint" }
      ],
      offerings: [
        {
          icon: <FiActivity className="w-6 h-6" />,
          title: "Performance Metrics and KPI Orchestration",
          description: "Co-create a data-driven culture with our performance metrics and KPI orchestration services.",
          link: "/services/performance-metrics"
        },
        {
          icon: <FiHeart className="w-6 h-6" />,
          title: "Customer Experience (CX) Optimization",
          description: "Reimagine customer engagement with our CX optimization services.",
          link: "/services/cx-optimization"
        }
      ],
      color: "#001f3f"
    }
  ];

  const smartSolutions = [
    {
      icon: <FiCpu className="w-8 h-8" />,
      title: "AI-powered Agriculture Solutions",
      description: "Revolutionary AI solutions transforming agricultural practices for sustainable growth.",
      link: "/services/ai-agriculture"
    },
    {
      icon: <FiTruck className="w-8 h-8" />,
      title: "Digital Transformation for SMBs",
      description: "Tailored digital transformation solutions designed specifically for small and medium businesses.",
      link: "/services/smb-transformation"
    },
    {
      icon: <FiMonitor className="w-8 h-8" />,
      title: "Edge Computing in Healthcare",
      description: "Advanced edge computing solutions revolutionizing healthcare delivery and patient outcomes.",
      link: "/services/edge-healthcare"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section bgColor="light" spacing="xl">
        <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <span className="text-gray-300 text-lg">DSeT Consulting Private Limited</span>
                <span className="text-gray-400 mx-2"></span>
                <span className="text-[#ff851b] text-lg font-medium">Services</span>
              </div>
              
              <h1 className="text-6xl font-bold mb-8 text-white leading-tight">
                <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">
                  DSeT ARC
                </span>{" "}
                <br />
                Business 10x Blueprint
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our proprietary DSeT ARC 10x blueprint intertwines Digital, Strategy, Execution, and Transformation, 
                underpinned by People, Process, and Phygital dimensions for holistic business transformation.
              </p>
              
              <div className="flex items-center gap-4">
                <motion.a
                  href="#dset-arc"
                  className="relative px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">Explore DSeT ARC</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right - DSeT ARC Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <motion.div 
                  className="w-80 h-80 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-[#5e17ea]/20 to-[#1e90ff]/20 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.02, rotate: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src="/DsET-ARC-Design.webp" 
                    alt="DSeT ARC Design" 
                    width={280} 
                    height={280} 
                    className="w-auto h-64 object-contain"
                  />
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4">DSeT ARC Framework</h3>
                <p className="text-gray-300 max-w-md mx-auto">
                  A comprehensive framework ensuring your digital journey is seamless and maximizes business impact
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Mission Statement */}
      <Section bgColor="white" spacing="lg">
        <motion.div
          className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl p-12 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>
          
          <div className="relative z-10 text-center max-w-6xl mx-auto">
            <motion.div
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20"
              variants={itemVariants}
            >
              <span className="text-white font-medium">DSeT Methodology</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl font-bold mb-10 text-white"
              variants={itemVariants}
            >
              Our <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">Collaborative</span> Approach
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-[#5e17ea]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">A</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Assessment</h3>
                <p className="text-gray-300">Comprehensive evaluation of current capabilities, processes, and systems to identify opportunities.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-[#1e90ff]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Reimagination</h3>
                <p className="text-gray-300">Creative redesign of processes, experiences, and systems to achieve breakthrough performance.</p>
              </motion.div>
              
              <motion.div 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                variants={itemVariants}
              >
                <div className="w-16 h-16 rounded-full bg-[#ff851b]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">C</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Co-creation</h3>
                <p className="text-gray-300">Collaborative development of solutions that align with business objectives and user needs.</p>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed mb-8"
              variants={itemVariants}
            >
              At DSeT Consulting we specialize in iterative and collaborative sprints of Assessments, Reimagination, 
              and Co-creation. We collaborate with our clients to tailor transformation and execution programs that 
              align with your business and program objectives.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-6 text-lg text-white"
              variants={itemVariants}
            >
              <div className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-3 h-3 rounded-full bg-[#5e17ea] mr-3"></div>
                <strong>Human Desirability</strong>
              </div>
              
              <div className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-3 h-3 rounded-full bg-[#1e90ff] mr-3"></div>
                <strong>Business Viability</strong>
              </div>
              
              <div className="flex items-center px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
                <div className="w-3 h-3 rounded-full bg-[#ff851b] mr-3"></div>
                <strong>Technological Feasibility</strong>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* DSeT ARC Categories */}
      <Section bgColor="light" spacing="xl" id="dset-arc">
        {arcCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            className={`mb-24 ${categoryIndex === arcCategories.length - 1 ? 'mb-0' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: categoryIndex * 0.1 }}
          >
            {/* Category Header */}
            <div className="relative bg-gradient-to-r from-gray-50 to-white rounded-3xl shadow-lg p-12 mb-16 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-transparent to-gray-100 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-transparent to-gray-100 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
              
              {/* Accent line based on category color */}
              <div 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-24 rounded-r-full"
                style={{ backgroundColor: category.color }}
              ></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
                <div 
                  className="flex-shrink-0 w-24 h-24 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl mb-8 md:mb-0 md:mr-10 transform hover:rotate-3 transition-transform duration-300"
                  style={{ backgroundColor: category.color }}
                >
                  <span>{category.title.charAt(0)}</span>
                  <div 
                    className="absolute -bottom-3 -right-3 w-8 h-8 rounded-lg transform rotate-12"
                    style={{ backgroundColor: category.color, opacity: 0.6 }}
                  ></div>
                </div>
                
                <div className="flex-grow">
                  <div 
                    className="inline-block px-6 py-2 rounded-full text-white font-bold text-sm mb-4 shadow-md"
                    style={{ backgroundColor: category.color }}
                  >
                    {category.title}
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#001f3f]">
                    {category.subtitle}
                  </h2>
                  
                  <p className="text-xl text-[#4d4d4d] max-w-3xl leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </div>

            {/* ARC Phases */}
            <div className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-br from-[#001f3f]/90 via-[#002b57]/90 to-[#001f3f]/90 shadow-xl p-10">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
              
              {/* Gradient Overlays */}
              <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/10 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-10 text-center text-white">
                  <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {category.title} Process Framework
                  </span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {category.phases.map((phase, phaseIndex) => (
                    <motion.div
                      key={phase.phase}
                      className="text-center group relative"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: phaseIndex * 0.1 }}
                    >
                      {/* Connecting lines between phases */}
                      {phaseIndex < category.phases.length - 1 && (
                        <div className="hidden md:block absolute top-10 right-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent transform translate-x-1/2"></div>
                      )}
                      
                      <div className="relative">
                        <div 
                          className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm"
                          style={{ backgroundColor: `${category.color}80` }}
                        >
                          {phase.phase}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-white/5 rounded-full blur-xl"></div>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-2 text-white">{phase.phase}</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {phase.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Offerings */}
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              {/* Background with subtle pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23000000%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2210%22%20cy%3D%2210%22%20r%3D%221%22/%3E%3C/g%3E%3C/svg%3E')] opacity-70"></div>
              
              {/* Colored border top based on category */}
              <div 
                className="h-2 w-full absolute top-0 left-0 z-10"
                style={{ backgroundColor: category.color }}
              ></div>
              
              <div className="relative z-10 p-10">
                <div className="flex items-center justify-center mb-10">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg mr-4"
                    style={{ backgroundColor: category.color }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-[#001f3f]">
                    {category.title} <span className="text-2xl font-medium">Offerings</span>
                  </h3>
                </div>
                
                <div className={`grid grid-cols-1 ${category.offerings.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2 lg:grid-cols-3'} gap-8`}>
                  {category.offerings.map((offering, offeringIndex) => (
                    <motion.div
                      key={offering.title}
                      className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: offeringIndex * 0.1 }}
                    >
                      {/* Colored accent on top */}
                      <div 
                        className="h-1.5 w-full absolute top-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"
                        style={{ backgroundColor: category.color }}
                      ></div>
                      
                      <div className="p-8">
                        <div 
                          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                          style={{ backgroundColor: category.color }}
                        >
                          <div className="w-8 h-8">{offering.icon}</div>
                        </div>
                        
                        <h4 className="text-xl font-bold mb-4 text-[#001f3f] group-hover:text-[#001f3f]">
                          {offering.title}
                        </h4>
                        
                        <p className="text-[#4d4d4d] mb-6 leading-relaxed">
                          {offering.description}
                        </p>
                        
                        <div className="pt-2 border-t border-gray-100">
                          <Link 
                            href={offering.link}
                            className="inline-flex items-center font-semibold group-hover:font-bold transition-all"
                            style={{ color: category.color }}
                          >
                            Explore Solution
                            <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Section>

      {/* Smart Digital Solutions */}
      <Section bgColor="white" spacing="xl">
        <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-16">
              <motion.span 
                className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-full mb-8 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Innovation Solutions
              </motion.span>
              <h2 className="text-5xl font-bold mb-8 text-white">
                <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">
                  Smart Digital Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                AI, Transformation, and Edge Computing Innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {smartSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  className="group text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 group-hover:border-[#5e17ea]/50 transition-all duration-300 h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#5e17ea]/20 to-[#1e90ff]/20 rounded-3xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <Link
                      href={solution.link}
                      className="inline-flex items-center text-[#ff851b] font-semibold hover:text-white transition-colors duration-300"
                    >
                      Learn More
                      <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="light" spacing="lg">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#5e17ea]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-[#ffffff] mb-8 leading-relaxed">
            Let's collaborate to create a tailored digital transformation strategy that aligns with your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/contact"
              className="relative px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Start Your Transformation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.a
              href="/case-studies"
              className="relative px-8 py-4 text-[#5e17ea] font-semibold rounded-xl text-lg border-2 border-[#001f3f] hover:bg-[#001f3f] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default ServicesPage;