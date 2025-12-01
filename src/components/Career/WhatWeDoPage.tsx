"use client";

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
      icon: FiZap,
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
   <section className="py-20 bg-gray-950">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* BOX WRAPPER START */}
    <div className="w-full bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f]
 p-[2px] rounded-3xl">
      <div className="rounded-3xl overflow-hidden">
        {/* ==== YOUR ORIGINAL SECTION START (Modified) ==== */}
        <section className="relative h-[500px] flex items-center justify-center overflow-hidden bg-[#002b57]">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1692133226337-55e513450a32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25zdWx0aW5nJTIwd29ya3NwYWNlfGVufDF8fHx8MTc2MTU0ODY2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Consulting workspace"
              className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#002b57]/95 via-[#001c38]/85 to-[#000f24]/90"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-white text-center animate-fadeIn">
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-1 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] mb-6 mx-auto"></div>

              <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl mb-6 leading-snug">
                What We Do
              </h1>

              <p className="font-['Inter'] text-lg md:text-xl text-white/90">
                At DSeT Consulting, we deliver transformative solutions that empower
                organizations to thrive in the digital age. Our expertise spans
                strategic consulting, technology innovation, and talent development.
              </p>
            </div>
          </div>
        </section>
        {/* ==== YOUR ORIGINAL SECTION END ==== */}
      </div>
    </div>
    {/* BOX WRAPPER END */}
  </div>
</section>



      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6 text-white">
              Our Mission
            </h2>
            <p className="font-['Inter'] text-lg text-gray-300 leading-relaxed">
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
      <section className="py-20 bg-gray-950">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* BOX WRAPPER START */}
    <div className="w-full bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f]
 p-[2px] rounded-3xl">
      <div className="rounded-3xl overflow-hidden">
        {/* ==== ORIGINAL "Our Services" CONTENT START ==== */}
        <section className="py-20 bg-[#001f3f]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fadeIn">
              <div className="w-20 h-1 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] mx-auto mb-6"></div>
              <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-4 text-white">
                Our Services
              </h2>
              <p className="font-['Inter'] text-lg text-white/80 max-w-2xl mx-auto">
                Comprehensive solutions designed to drive transformation and
                deliver measurable results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-md border border-[#5e17ea]/20 rounded-2xl p-8
                               hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(94,23,234,0.3)]
                               transition-all duration-500 ease-out animate-slideUp delay-[200ms]"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-[#5e17ea] to-[#1e90ff] rounded-xl flex items-center justify-center mb-4">
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
        {/* ==== ORIGINAL "Our Services" CONTENT END ==== */}
      </div>
    </div>
    {/* BOX WRAPPER END */}
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-[#0a0f1f] to-[#0d1426] relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Left Side */}
            <div className="animate-slideInLeft">
              <div className="w-24 h-1 bg-gradient-to-r from-[#6a14ff] to-[#1e90ff] mb-6"></div>

              <h2 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-6 text-white tracking-wide">
                Why Choose <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent font-semibold">
                  DSeT Consulting
                </span>


              </h2>

              <div className="space-y-8">

                <div>
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-2 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent">
                    Proven Track Record
                  </h3>

                  <p className="font-['Inter'] text-gray-300 leading-relaxed">
                    Over 15 years delivering measurable outcomes for Fortune 500
                    companies and emerging businesses across industries.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-2 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent">
                    Expert Team
                  </h3>

                  <p className="font-['Inter'] text-gray-300 leading-relaxed">
                    Our consultants combine deep industry knowledge with technical
                    excellence to solve the most complex challenges.
                  </p>
                </div>

                <div>
                  <h3 className="font-['Poppins'] text-xl font-semibold mb-2 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] bg-clip-text text-transparent">
                    Client-Centric Approach
                  </h3>

                  <p className="font-['Inter'] text-gray-300 leading-relaxed">
                    We work closely with clients to understand their vision and deliver
                    tailored solutions that drive business transformation.
                  </p>
                </div>

              </div>
            </div>

            {/* Right Side */}
            <div className="relative animate-slideInRight">
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-[0_0_30px_rgba(30,144,255,0.3)]">
                <img
                  src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-Employable%3Arad-3x2?ts=1721665736615&dpr=off"
                  alt="Team collaboration"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Soft Glows */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#1e90ff] opacity-40 blur-3xl rounded-full -z-10"></div>
              <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#6a14ff] opacity-40 blur-3xl rounded-full -z-10"></div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default WhatWeDoPage;
