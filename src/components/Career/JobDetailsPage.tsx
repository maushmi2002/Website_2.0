import React from 'react';
import Button from '../ui/Button';
import Link from 'next/link';
import { FaArrowLeft, FaBriefcase, FaClock, FaIndianRupeeSign, FaMapPin } from 'react-icons/fa6';
import { FiCheckCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

function JobDetailsPage() {
  const job = {
    title: "Senior Software Engineer",
    company: "DSeT Consulting",
    location: "New York, NY",
    type: "Full-time",
    category: "Technology",
    salary: " ₹120k -  ₹160k",
    posted: "2 days ago",
    description: `We are seeking an experienced Senior Software Engineer to join our growing technology team. In this role, you will lead the development of cutting-edge software solutions, mentor junior developers, and collaborate with cross-functional teams to deliver high-quality products.

As a Senior Software Engineer at DSeT Consulting, you'll have the opportunity to work on challenging projects that impact millions of users. You'll be part of a dynamic team that values innovation, collaboration, and continuous learning.`,
    responsibilities: [
      "Design, develop, and maintain scalable software applications",
      "Lead technical discussions and provide architectural guidance",
      "Mentor and support junior team members",
      "Collaborate with product managers and designers to define requirements",
      "Write clean, maintainable, and well-documented code",
      "Participate in code reviews and ensure quality standards",
      "Stay current with emerging technologies and industry trends",
    ],
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in modern programming languages (Java, Python, JavaScript)",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Solid understanding of software design patterns and best practices",
      "Experience with Agile/Scrum methodologies",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary and performance bonuses",
      "Comprehensive health, dental, and vision insurance",
      "401(k) matching program",
      "Flexible work arrangements and remote options",
      "Professional development and training opportunities",
      "Generous PTO and paid holidays",
      "Collaborative and inclusive work environment",
    ],
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F5F9]">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white border-b"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-end">
            <Link href="/career/jobs">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaArrowLeft
                  className="w-7 h-7 cursor-pointer text-[#5E17EB] hover:text-[#1E90FF] transition-colors"
                />
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Job Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-b"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-3 text-[#5E17EB]"
              >
                {job.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="font-['Inter'] text-xl text-gray-700 mb-4"
              >
                {job.company}
              </motion.p>

              <motion.div
                variants={staggerContainer}
                initial="initial"
                animate="animate"
                className="flex flex-wrap gap-4 mb-4"
              >
                {[
                  { icon: FaMapPin, text: job.location },
                  { icon: FaBriefcase, text: job.type },
                  { icon: FaIndianRupeeSign, text: job.salary },
                  { icon: FaClock, text: `Posted ${job.posted}` },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="flex items-center gap-2 text-gray-600 font-['Inter']"
                  >
                    <item.icon size={20} className="text-[#1E90FF]" />
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="flex gap-2"
              >
                <div className="bg-[#5E17EB] text-white hover:bg-[#5E17EB]/90 px-4 py-2 rounded-full text-sm font-medium">
                  {job.category}
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="lg:w-56"
            >
              <Link href="/career/jobs/jobDetails/ApplyJob">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(94, 23, 235, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-[#5E17EB] via-[#7B2FFF] to-[#1E90FF] text-white font-semibold py-4 px-6 rounded-xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl group"
                >
                  <span className="relative z-10 font-['Inter'] text-base tracking-wide">Apply for this Job</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#1E90FF] via-[#7B2FFF] to-[#5E17EB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>
              </Link>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* Job Details Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-4 text-[#0E0E2E]">
                Job Description
              </h2>
              <div className="font-['Inter'] text-gray-700 whitespace-pre-line leading-relaxed">
                {job.description}
              </div>
            </motion.div>

            {/* Key Responsibilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-4 text-[#0E0E2E]">
                Key Responsibilities
              </h2>
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {job.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <FiCheckCircle size={20} className="text-[#5E17EB] mt-1 flex-shrink-0" />
                    <span className="font-['Inter'] text-gray-700">{responsibility}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Requirements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-4 text-[#0E0E2E]">
                Requirements
              </h2>
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {job.requirements.map((requirement, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <FiCheckCircle size={20} className="text-[#5E17EB] mt-1 flex-shrink-0" />
                    <span className="font-['Inter'] text-gray-700">{requirement}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-br from-[#5E17EB] to-[#1E90FF] rounded-lg p-6 text-white"
            >
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3">
                Interested in this role?
              </h3>
              <p className="font-['Inter'] text-sm mb-4 text-white/90">
                Apply now and join our team of talented professionals.
              </p>
              <Link href="/career/jobs/jobDetails/ApplyJob">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full relative overflow-hidden bg-white text-[#5E17EB] hover:bg-white/95 transition-all duration-300 rounded-lg py-3 text-base font-semibold shadow-lg group"
                >
                  <span className="relative z-10 font-['Inter'] tracking-wide flex items-center justify-center gap-2">
                    Apply Now
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >→</motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/90 to-[#F0E6FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.button>

              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-sm"
            >
              <h3 className="font-['Poppins'] font-semibold text-xl mb-4 text-[#0E0E2E]">
                Benefits & Perks
              </h3>
              <motion.ul
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {job.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-2"
                  >
                    <FiCheckCircle size={20} className="text-[#5E17EB] mt-1 flex-shrink-0" />
                    <span className="font-['Inter'] text-sm text-gray-700">{benefit}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
