import React from "react";
import {
  FiTarget,
  FiUsers,
  FiZap,
  FiTrendingUp,
  FiAward,
  FiGlobe,
} from "react-icons/fi";

function WhatWeDoPage() {
  const services = [
    {
      icon: FiTarget,
      title: "Strategic Consulting",
      description:
        "We help organizations develop and implement strategies that drive sustainable growth and competitive advantage in rapidly evolving markets.",
    },
    {
      icon: FiZap, // Lightbulb substitute
      title: "Innovation & Digital Transformation",
      description:
        "Our team guides businesses through digital transformation journeys, leveraging cutting-edge technologies to enhance operations and customer experiences.",
    },
    {
      icon: FiUsers,
      title: "Talent Solutions",
      description:
        "We connect exceptional talent with leading organizations, ensuring the right fit for both culture and capabilities.",
    },
    {
      icon: FiTrendingUp,
      title: "Business Analytics",
      description:
        "Data-driven insights and advanced analytics solutions that empower informed decision-making and operational excellence.",
    },
    {
      icon: FiAward,
      title: "Excellence in Execution",
      description:
        "From strategy to implementation, we ensure flawless execution with measurable results and lasting impact.",
    },
    {
      icon: FiGlobe,
      title: "Global Expertise",
      description:
        "With a presence across key markets, we bring local insights and global best practices to every engagement.",
    },
  ];

  return (
    <div id="what-we-do" className="min-h-screen mt-20">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdWx0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTU0ODY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Consulting workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E2E]/95 to-[#0E0E2E]/80"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <div className="w-20 h-1 bg-[#00F1FF] mb-6"></div>
            <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-6">
              What We Do
            </h1>
            <p className="font-['Inter'] text-lg md:text-xl text-white/90">
              At DSeT Consulting, we deliver transformative solutions that
              empower organizations to thrive in the digital age. Our expertise
              spans strategic consulting, technology innovation, and talent
              development.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#F4F5F9]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6 text-[#0E0E2E]">
              Our Mission
            </h2>
            <p className="font-['Inter'] text-lg text-gray-700 leading-relaxed">
              We believe in building futures that believe in people. Our mission
              is to bridge the gap between visionary strategy and exceptional
              execution, while fostering environments where talent and
              innovation flourish. Through our integrated approach to consulting
              and talent solutions, we help organizations unlock their full
              potential.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#0E0E2E]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="w-20 h-1 bg-[#00F1FF] mx-auto mb-6"></div>
            <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-4 text-white">
              Our Services
            </h2>
            <p className="font-['Inter'] text-lg text-white/80 max-w-2xl mx-auto">
              Comprehensive solutions designed to drive transformation and
              deliver measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-[#00F1FF]/20 rounded-lg p-8 hover:bg-white/10 transition-all duration-300 hover:border-[#00F1FF]/40"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#4E00FF] to-[#00F1FF] rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="font-['Inter'] text-white/80">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-20 h-1 bg-[#00F1FF] mb-6"></div>
              <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6 text-[#0E0E2E]">
                Why Choose DSeT Consulting
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-xl mb-2 text-[#4E00FF]">
                    Proven Track Record
                  </h3>
                  <p className="font-['Inter'] text-gray-700">
                    Over 15 years of delivering successful outcomes for Fortune
                    500 companies and emerging businesses across diverse
                    industries.
                  </p>
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-xl mb-2 text-[#4E00FF]">
                    Expert Team
                  </h3>
                  <p className="font-['Inter'] text-gray-700">
                    Our consultants bring deep industry expertise, advanced
                    technical skills, and a passion for solving complex
                    challenges.
                  </p>
                </div>
                <div>
                  <h3 className="font-['Poppins'] font-semibold text-xl mb-2 text-[#4E00FF]">
                    Client-Centric Approach
                  </h3>
                  <p className="font-['Inter'] text-gray-700">
                    We partner with our clients to understand their unique needs
                    and deliver tailored solutions that drive real business
                    value.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580920461931-fcb03a940df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW13b3JrfGVufDF8fHx8MTc2MTQ2MzA1NXww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Business teamwork"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#00F1FF] rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-[#4E00FF] rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WhatWeDoPage;
