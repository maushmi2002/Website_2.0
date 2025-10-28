import React from 'react'
import Button from '../ui/Button'
import { ArrowRight, Briefcase, Search, TrendingUp, Users } from 'lucide-react'
import Image from 'next/image'
interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* <Image
            src="https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwb2ZmaWNlfGVufDF8fHx8MTc2MTQ1NzE1MXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional team"
            className="w-full h-full object-cover"
          /> */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0E2E]/90 to-[#4E00FF]/70"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="font-['Poppins'] font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            Build a Future that Believes in You
          </h1>
          <p className="font-['Inter'] text-lg md:text-xl mb-8 max-w-2xl mx-auto text-[#F4F5F9]">
            Join a team of innovators and problem-solvers. Discover opportunities that align with your skills and aspirations at DSeT Consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Button
              // onClick={() => onNavigate("apply")}
              className="bg-[#4E00FF] hover:bg-[#4E00FF]/90 text-white px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Apply Now
              <ArrowRight className="ml-2" size={20} />
            </Button> */}
            <Button
               onClick={() => onNavigate("jobs")}
              className="bg-[#00F1FF] hover:bg-[#00F1FF]/90 text-[#0E0E2E] px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Jobs
              <Search className="ml-2" size={20} />
            </Button>
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
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#4E00FF] rounded-lg flex items-center justify-center mb-4">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]">
                Career Growth
              </h3>
              <p className="font-['Inter'] text-gray-600">
                We invest in your professional development with training programs, mentorship, and clear career progression paths.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#00F1FF] rounded-lg flex items-center justify-center mb-4">
                <Users className="text-[#0E0E2E]" size={28} />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]">
                Collaborative Culture
              </h3>
              <p className="font-['Inter'] text-gray-600">
                Join a diverse team of experts who value innovation, collaboration, and continuous learning.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-[#4E00FF] rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="text-white" size={28} />
              </div>
              <h3 className="font-['Poppins'] font-semibold text-xl mb-3 text-[#0E0E2E]">
                Competitive Benefits
              </h3>
              <p className="font-['Inter'] text-gray-600">
                Enjoy comprehensive benefits including health coverage, flexible work arrangements, and performance bonuses.
              </p>
            </div>
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
          <Button
            // onClick={() => onNavigate("jobs")}
            className="bg-white text-[#4E00FF] hover:bg-white/90 px-8 py-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
          >
            View All Jobs
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
