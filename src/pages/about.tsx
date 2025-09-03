import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';
import { 
  FiTrendingUp,
  FiBarChart2,
  FiZap,
  FiLayers,
  FiAward,
  FiShield,
  FiGlobe,
  FiCpu,
  FiShoppingCart,
  FiRefreshCcw,
  FiUsers
} from 'react-icons/fi';

const AboutPage = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const expertiseList = [
    {
      icon: <FiGlobe className="w-7 h-7" />,
      title: 'Digital Consulting',
      description:
        'Harness cutting-edge technologies and strategies to accelerate sustainable digital growth.',
    },
    {
      icon: <FiLayers className="w-7 h-7" />,
      title: 'Business Services',
      description:
        'Operational excellence, organisational redesign, and performance optimisation for maximum impact.',
    },
    {
      icon: <FiCpu className="w-7 h-7" />,
      title: 'AI-powered Agriculture',
      description:
        'Predictive analytics & precision farming to boost yield and improve resource efficiency.',
    },
    {
      icon: <FiBarChart2 className="w-7 h-7" />,
      title: 'Market Research',
      description:
        'Data-driven insights that power informed decisions and keep you ahead of the competition.',
    },
    {
      icon: <FiShoppingCart className="w-7 h-7" />,
      title: 'Procurement Intelligence',
      description:
        'Intelligence-driven approach that identifies cost-saving opportunities & resilient supply chains.',
    },
    {
      icon: <FiZap className="w-7 h-7" />,
      title: 'Digital Transformation for SMBs',
      description:
        'Cloud, automation & AI solutions that streamline operations and enhance customer experience.',
    },
    {
      icon: <FiRefreshCcw className="w-7 h-7" />,
      title: 'Business Transformation Strategy',
      description:
        'Process re-engineering, CX/UX mapping, change & program management for sustainable advantage.',
    },
  ];

  const whyChoose = [
    {
      icon: <FiAward className="w-8 h-8" />,
      title: 'Industry Pioneers',
      desc: 'Holistic approach & updated digital aids for 10x growth.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Results-Driven',
      desc: 'Success measured by tangible KPIs & growth accelerators.'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'Client-Centric',
      desc: 'Tailor-made solutions keeping customer experience at the centre.'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Ethical Values',
      desc: 'Integrity & transparency embedded in everything we do.'
    },
  ];

  return (
    <Layout>
      {/* Hero */}
      <Section bgColor="light" spacing="xl">
        <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl overflow-hidden">
          {/* pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%231e90ff\' stroke-width=\'0.5\' stroke-opacity=\'0.1\'%3E%3Cpath d=\'M0 30h60M30 0v60\'/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          {/* overlay */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 p-16 items-center">
            {/* text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-4 px-6 py-2 text-sm font-semibold text-white bg-[#ff851b] rounded-full shadow">About Us</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">DSeT</span> Partner for Growth
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                At DSeT Consulting, we are your trusted partner in navigating the ever-evolving landscape of business & digital technology. With a relentless commitment to innovation & excellence, we deliver consulting solutions that empower organisations to thrive in the digital age.
              </p>
            </motion.div>
            {/* image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full h-96 lg:h-[500px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=700&q=60"
                alt="Team working together"
                fill
                className="rounded-3xl shadow-2xl object-cover"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Narrative Section */}
      <Section bgColor="white" spacing="xl">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={item} className="relative w-full h-80">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=700&q=60"
              alt="Digital transformation narrative"
              fill
              className="rounded-3xl shadow-lg object-cover"
            />
          </motion.div>
          <motion.div variants={item}>
            <h2 className="text-4xl font-bold mb-6 text-[#5e17ea]">Why we do what we do</h2>
            <p className="text-lg text-[#ffffff] mb-6 leading-relaxed">
              About 95% of digital transformation programs fail due to the gap between business and technology. Most organisations lack the integrated layer between operations and IT, resulting in limited bandwidth to steer strategic change.
            </p>
            <p className="text-lg text-[#ffffff] leading-relaxed">
              We collaborate with your Operations & IT teams and craft a win-themed transformation roadmap that 10x your chance of success.
            </p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Expertise */}
      <Section bgColor="light" spacing="xl">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={item} className="text-5xl font-bold text-center mb-12 text-[#5e17ea]">
            Our Expertise
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {expertiseList.map((exp) => (
              <motion.div
                key={exp.title}
                variants={item}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{ background: '#5e17ea' }}
                >
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#001f3f]">{exp.title}</h3>
                <p className="text-[#4d4d4d] leading-relaxed">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Why Choose */}
      <Section bgColor="white" spacing="xl">
        <motion.div variants={container} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.h2 variants={item} className="text-5xl font-bold text-center mb-12 text-[#5e17ea]">
            Why Choose <span className="text-[#5e17ea]">DSeT</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {whyChoose.map((w) => (
              <motion.div
                key={w.title}
                variants={item}
                className="text-center bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-2xl p-8 shadow-xl relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%231e90ff\' stroke-width=\'0.4\' stroke-opacity=\'0.05\'%3E%3Cpath d=\'M0 20h40M20 0v40\'/%3E%3C/g%3E%3C/svg%3E')]"></div>
                <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-xl mb-4 bg-[#5e17ea]/20 text-white mx-auto">
                  {w.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{w.title}</h3>
                <p className="text-gray-300 leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section bgColor="light" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#5e17ea]">Ready to Start Your Transformation Journey?</h2>
                      <p className="text-xl text-[#ffffff] mb-8 leading-relaxed">
              Let&apos;s partner to craft a bespoke strategy that drives innovation, efficiency & growth for your organisation.
            </p>
          <motion.a
            href="/contact"
            className="relative px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
