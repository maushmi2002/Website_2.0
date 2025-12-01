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
    <section className="py-20 bg-gray-950">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* BOX WRAPPER START (same style you requested) */}
    <div className="w-full bg-gradient-to-br from-[#002b5c] via-[#013b75] to-[#002043] p-[2px] rounded-3xl">
  <div className="rounded-3xl overflow-hidden">

        {/* ==== YOUR ORIGINAL SECTION START (Unchanged) ==== */}
        <section className="relative h-[650px] flex items-center justify-center overflow-hidden mt-2 bg-[#002b57]">
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/blog/career.webp"
              alt="Professional Team"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
              priority
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#002b57]/95 via-[#001b38]/85 to-[#000f24]/90"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-['Poppins'] font-extrabold text-white text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight drop-shadow-xl">
              Build a Future that Believes in You
            </h1>

            <p className="font-['Inter'] text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join a team of innovators and problem-solvers. Explore opportunities that
              elevate your skills, ambition, and career at{" "}
              <span className="bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent font-semibold">
                DSeT Consulting
              </span>
              .
            </p>

            {/* Button */}
            <div className="flex justify-center">
              <Link href="/career/jobs">
                <Button
                  className="bg-gradient-to-r from-[#6a14ff] to-[#1e90ff] hover:opacity-90 text-white 
                    px-10 py-5 rounded-xl shadow-[0_10px_25px_rgba(30,144,255,0.4)]
                    transition-transform duration-300 hover:scale-105
                    font-semibold tracking-wide"
                >
                  Explore Jobs
                  <FaSearchengin className="ml-2" size={22} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        {/* ==== YOUR ORIGINAL SECTION END ==== */}

      </div>
    </div>
    {/* BOX WRAPPER END */}

  </div>
</section>



      {/* Why Choose Us Section */}
<section className="py-20 bg-gray-950">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">

    {/* OUTER GRADIENT BOX */}
    <div className="w-full mx-auto bg-gradient-to-br from-[#002b5c] via-[#013b75] to-[#002043] p-[2px] rounded-3xl shadow-xl">
      <div className="bg-gray-950/60 backdrop-blur-xl rounded-3xl p-10">

        {/* HEADING */}
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl text-center mb-12 text-white">
          The{" "}
          <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">
            DSeT
          </span>{" "}
          Advantage
        </h2>

        {/* ---- YOUR CARDS START (NOT CHANGED) ---- */}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              }),
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
              className="relative w-14 h-14 bg-gradient-to-br from-[#5e17ea] to-[#4512b0] rounded-lg flex items-center justify-center mb-5 shadow-md ring-2 ring-white/30"
            >
              <FaBriefcase className="text-white" size={28} />
            </motion.div>

            <motion.h3
              className="font-['Poppins'] font-semibold text-xl mb-3 text-black"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.03 } },
              }}
            >
              {("Career Growth").split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
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
              We invest in your professional development with training
              programs, mentorship, and clear career progression paths.
            </motion.p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              }),
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
              className="relative w-14 h-14 bg-gradient-to-br from-[#1e90ff] to-[#0077cc] rounded-lg flex items-center justify-center mb-5 shadow-md ring-2 ring-white/30"
            >
              <FaUserSecret className="text-white" size={28} />
            </motion.div>

            <motion.h3
              className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.03 } },
              }}
            >
              {("Collaborative Culture").split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
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
              Join a diverse team of experts who value innovation,
              collaboration, and continuous learning.
            </motion.p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={{
              hidden: { opacity: 0, y: 60, scale: 0.95 },
              visible: (i) => ({
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  delay: i * 0.15,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                },
              }),
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
              className="relative w-14 h-14 bg-gradient-to-br from-[#ff851b] to-[#e67300] rounded-lg flex items-center justify-center mb-5 shadow-md ring-2 ring-white/30"
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
                visible: { transition: { staggerChildren: 0.03 } },
              }}
            >
              {("Competitive Benefits").split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
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
              Enjoy comprehensive benefits including health coverage,
              flexible work arrangements, and performance bonuses.
            </motion.p>
          </motion.div>
        </div>

        {/* ---- YOUR CARDS END ---- */}

      </div>
    </div>

  </div>
</section>


      {/* CTA Section */}
<section className="py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">

    {/* BOX WRAPPER START */}
    <div className="w-full bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f]
 p-[2px] rounded-3xl">
      <div className="rounded-3xl overflow-hidden p-10">

        {/* ORIGINAL CONTENT */}
        <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6 text-white">
          Ready to Start Your Journey?
        </h2>

        <p className="font-['Inter'] text-lg mb-8 text-white/80 max-w-2xl mx-auto">
          Browse our current openings and find the perfect role that matches your expertise and career goals.
        </p>

        <Link href="/career/jobs">
          <Button
            className="bg-white text-[#001f3f] hover:bg-gray-200 
              px-8 py-6 rounded-xl shadow-[0_10px_25px_rgba(30,144,255,0.4)]
              transition-transform duration-300 hover:scale-105 cursor-pointer flex items-center justify-center"
          >
            <span className="font-semibold text-[#001f3f]">View All Jobs</span>
            <FaArrowRight className="ml-2 text-[#001f3f]" size={20} />
          </Button>
        </Link>
        {/* END ORIGINAL CONTENT */}

      </div>
    </div>
    {/* BOX WRAPPER END */}

  </div>
</section>




    </div>
  )
}

export default HomePage
