import React from 'react'
import Button from '../ui/Button';
import { ArrowLeft, Briefcase, CheckCircle2, Clock, DollarSign, MapPin } from 'lucide-react';
import Link from 'next/link';

function JobDetailsPage() {
  const job = {
    // id: jobId,
    title: "Senior Software Engineer",
    company: "DSeT Consulting",
    location: "New York, NY",
    type: "Full-time",
    category: "Technology",
    salary: "$120k - $160k",
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
  return (
    <div className="min-h-screen bg-[#F4F5F9]">
      {/* Back Button */}
    <div className="bg-white border-b">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
    <div className="flex items-center justify-end">
      <Link href="/career/jobs">
        <ArrowLeft
          className="w-7 h-7 cursor-pointer text-gray-700 hover:text-blue-600 transition-colors"
        />
      </Link>
    </div>
  </div>
</div>

      {/* Job Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="font-['Poppins'] font-bold text-3xl md:text-4xl mb-3 text-[#4E00FF]">
                {job.title}
              </h1>
              <p className="font-['Inter'] text-xl text-gray-700 mb-4">{job.company}</p>
              
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2 text-gray-600 font-['Inter']">
                  <MapPin size={20} className="text-[#00F1FF]" />
                  {job.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-['Inter']">
                  <Briefcase size={20} className="text-[#00F1FF]" />
                  {job.type}
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-['Inter']">
                  <DollarSign size={20} className="text-[#00F1FF]" />
                  {job.salary}
                </div>
                <div className="flex items-center gap-2 text-gray-600 font-['Inter']">
                  <Clock size={20} className="text-[#00F1FF]" />
                  Posted {job.posted}
                </div>
              </div>

              <div className="flex gap-2">
                <div className="bg-[#4E00FF] text-white hover:bg-[#4E00FF]/90">
                  {job.category}
                </div>
              </div>
            </div>

            <div className="lg:w-64">
               <Link href="/career/jobs/jobDetails/ApplyJob">
              <Button
                
                className="w-full bg-[#00F1FF] hover:bg-[#00F1FF]/90 text-[#0E0E2E] py-6 text-lg cursor-pointer"
              >
                Apply for this Job
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Job Details Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Description */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-4 text-[#0E0E2E]">
                Job Description
              </h2>
              <div className="font-['Inter'] text-gray-700 whitespace-pre-line leading-relaxed">
                {job.description}
              </div>
            </div>

            {/* Key Responsibilities */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-4 text-[#0E0E2E]">
                Key Responsibilities
              </h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#00F1FF] mt-1 flex-shrink-0" />
                    <span className="font-['Inter'] text-gray-700">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="font-['Poppins'] font-semibold text-2xl mb-4 text-[#0E0E2E]">
                Requirements
              </h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={20} className="text-[#4E00FF] mt-1 flex-shrink-0" />
                    <span className="font-['Inter'] text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Benefits */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="font-['Poppins'] font-semibold text-xl mb-4 text-[#0E0E2E]">
                Benefits & Perks
              </h3>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 size={18} className="text-[#00F1FF] mt-1 flex-shrink-0" />
                    <span className="font-['Inter'] text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apply CTA */}
            <div className="bg-gradient-to-br from-[#4E00FF] to-[#00F1FF] rounded-lg p-6 text-white">
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3">
                Interested in this role?
              </h3>
              <p className="font-['Inter'] text-sm mb-4 text-white/90">
                Apply now and join our team of talented professionals.
              </p>
               <Link href="/career/jobs/jobDetails/ApplyJob">
              <Button
               
                className="w-full bg-black text-[#4E00FF] hover:bg-white/90"
              >
                Apply Now
              </Button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsPage