import React from 'react'
import Button from '../ui/Button'
// import Image from 'next/image'
import Link from 'next/link'
import Image from 'next/image'
import { FaArrowRight, FaBriefcase, FaSearchengin, FaUserSecret } from 'react-icons/fa6'
import { FiTrendingUp } from 'react-icons/fi'
import { motion } from "framer-motion";


const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/blog/career.webp"
            alt="Professional team"
            width={500}
            height={300}
            className="w-full h-full object-cover bg-yellow-200"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E2E]/90bg-gradient-to-r from-blue-600/70 to-violet-700/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Build a Future that Believes in You
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl mb-8 max-w-2xl mx-auto text-[#F4F5F9]">
            Join a team of innovators and problem-solvers. Discover opportunities that align with your skills and aspirations at DSeT Consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link href="/career/jobs">
              <Button
                className="bg-[#00F1FF] hover:bg-[#00F1FF]/90 text-[#0E0E2E] px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 h-1 cursor-pointer"
              >
                Explore Jobs
                <FaSearchengin className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
<section className="py-20 bg-[#F4F5F9]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-center mb-12 text-[#0E0E2E]">
      Why Choose DSeT Consulting
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Card 1 - Career Growth */}
      <motion.div
        custom={0}
        variants={{
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          })
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
        className="group relative overflow-hidden bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-[#4E00FF]/20 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E00FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          whileHover={{ scale: 1.2, rotate: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
          className="relative w-14 h-14 bg-[#4E00FF] rounded-lg flex items-center justify-center mb-5 shadow-md ring-2 ring-white/30"
        >
          <FaBriefcase className="text-white" size={28} />
        </motion.div>

        <motion.h3
          className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } }
          }}
        >
          {("Career Growth").split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="font-['Inter'] text-gray-600 relative z-10"
        >
          We invest in your professional development with training programs, mentorship, and clear career progression paths.
        </motion.p>
      </motion.div>

      {/* Card 2 - Collaborative Culture */}
      <motion.div
        custom={1}
        variants={{
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          })
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        whileHover={{ y: -12, rotateX: 6, rotateY: 6 }}
        className="group relative overflow-hidden bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-[#00F1FF]/20 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#00F1FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          whileHover={{ scale: 1.2, rotate: -8 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
          className="relative w-14 h-14 bg-[#00F1FF] rounded-lg flex items-center justify-center mb-5 shadow-md ring-2 ring-white/30"
        >
          <FaUserSecret className="text-[#0E0E2E]" size={28} />
        </motion.div>

        <motion.h3
          className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } }
          }}
        >
          {("Collaborative Culture").split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="font-['Inter'] text-gray-600 relative z-10"
        >
          Join a diverse team of experts who value innovation, collaboration, and continuous learning.
        </motion.p>
      </motion.div>

      {/* Card 3 - Competitive Benefits */}
      <motion.div
        custom={2}
        variants={{
          hidden: { opacity: 0, y: 60, scale: 0.95 },
          visible: (i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          })
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
        whileHover={{ y: -12, rotateX: 6, rotateY: -6 }}
        className="group relative overflow-hidden bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl hover:ring-4 hover:ring-[#4E00FF]/20 transition-all duration-300"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#4E00FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <motion.div
          whileHover={{ scale: 1.2, rotate: 8 }}
          transition={{ type: "spring", stiffness: 400, damping: 12 }}
          className="relative w-14 h-14 bg-[#4E00FF] rounded-lg flex items-center justify-center mb-5 shadow-md ring-2 ring-white/30"
        >
          <FiTrendingUp className="text-white" size={28} />
        </motion.div>

        <motion.h3
          className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.03 } }
          }}
        >
          {("Competitive Benefits").split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="font-['Inter'] text-gray-600 relative z-10"
        >
          Enjoy comprehensive benefits including health coverage, flexible work arrangements, and performance bonuses.
        </motion.p>
      </motion.div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#4E00FF] to-[#00F1FF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6 text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="font-['Inter'] text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Browse our current openings and find the perfect role that matches your expertise and career goals.
          </p>
          <Link href="/career/jobs">
            <Button

              className="bg-black text-[#4E00FF] hover:bg-white/90 px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer h-1"
            >
              View All Jobs
              <FaArrowRight className="ml-2 " size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
