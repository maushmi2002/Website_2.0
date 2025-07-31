import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      position: 'CEO, TechInnovate Solutions',
      image: '/images/testimonial-1.jpg',
      content: 'DSeT Consulting\'s digital strategy expertise boosted our growth and streamlined operations. Their AI solutions and process automation were game changers. Their team\'s deep knowledge of both technology and business strategy made all the difference.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Aarti Mehta',
      position: 'CTO, Global Retail Corp',
      image: '/images/testimonial-2.jpg',
      content: 'Their strategic planning and agile methodologies greatly improved our efficiency. The data analytics insights were invaluable for our decision-making process. Their support transformed our approach to digital transformation completely.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Vikram Sharma',
      position: 'Director of Operations, HealthTech Innovations',
      image: '/images/testimonial-3.jpg',
      content: 'The customer experience optimization and AI-driven market strategy execution expanded our reach and improved performance metrics. Their impact on our business was outstanding and continues to deliver value months after project completion.',
      rating: 5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section bgColor="gradient" id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.span 
          className="inline-block px-3 py-1 text-sm font-medium bg-white/20 text-white rounded-full mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Client Success Stories
        </motion.span>
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          What Our Clients Say
        </motion.h2>
        <motion.p 
          className="text-lg text-white/80"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover how our AI consulting services have helped businesses across various industries 
          achieve their digital transformation goals and drive significant growth.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="overflow-hidden">
          <motion.div 
            className="flex"
            initial={{ opacity: 0 }}
            animate={{ 
              x: `-${activeIndex * 100}%`,
              opacity: 1,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="min-w-full px-4"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center gap-1 text-yellow-400 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`w-5 h-5 ${i < testimonial.rating ? 'fill-current' : ''}`} 
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600 mr-4">
                      {/* Replace with actual image if available */}
                      <div className="w-full h-full rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation buttons */}
        <button 
          className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={prevTestimonial}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={nextTestimonial}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/40'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;