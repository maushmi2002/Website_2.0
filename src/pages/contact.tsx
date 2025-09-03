import { motion } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import Section from '../components/ui/Section';

type ApiResponse = {
  success?: boolean;
  error?: string;
  message?: string;
  details?: Array<{ message: string }>;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceInterest: string;
  otherService?: string;
  message: string;
};
import { 
  FiMapPin,
  FiMail,
  FiPhone,
  FiClock,
  FiSend,
  FiMessageCircle,
  FiUsers,
  FiGlobe
} from 'react-icons/fi';

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      serviceInterest: value,
      // Clear otherService if not selecting 'other'
      ...(value !== 'other' && { otherService: undefined })
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Prepare the data
      const submitData = {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        company: formData.company,
        service: formData.otherService || formData.serviceInterest,
        message: formData.message
      };
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        const errorMessage = data.message || data.error || 'Failed to send message';
        throw new Error(errorMessage);
      }

      setStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        serviceInterest: '',
        otherService: '',
        message: ''
      });

      // Reset success status after 5 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
  };

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

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Office Location',
      details: 'DSeT Consulting Private Limited',
      subtitle: 'Your trusted partner for digital transformation'
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email Us',
      details: 'contact@dsetconsulting.com',
      subtitle: 'We will respond within 24 hours'
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Call Us',
      details: '+91 732 5948-111',
      subtitle: 'Mon-Fri 9:00 AM - 6:00 PM'
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday',
      subtitle: '9:00 AM - 6:00 PM EST'
    }
  ];

  const services = [
    { value: 'digital-transformation', label: 'Digital Transformation Strategy' },
    { value: 'ai-ml', label: 'AI & Machine Learning Solutions' },
    { value: 'process-optimization', label: 'Business Process Optimization' },
    { value: 'cloud-migration', label: 'Cloud Architecture & Migration' },
    { value: 'data-analytics', label: 'Data Analytics & Business Intelligence' },
    { value: 'change-management', label: 'Change Management & Training' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section bgColor="light" spacing="xl">
        <div className="relative bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-3xl shadow-2xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#5e17ea]/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#1e90ff]/20 to-transparent"></div>

          <div className="relative z-10 text-center p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block mb-6 px-6 py-2 text-sm font-semibold text-white bg-[#ff851b] rounded-full shadow">Get In Touch</span>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Start Your <span className="bg-gradient-to-r from-[#ff851b] to-[#1e90ff] bg-clip-text text-transparent">Digital Transformation</span> Journey
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business? Our team of experts is here to help you navigate the digital landscape and achieve sustainable growth.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section bgColor="white" spacing="xl">
        <motion.div 
          variants={container} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16"
        >
          {/* Contact Form */}
          <motion.div variants={item} className="order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-xl flex items-center justify-center mr-4">
                  <FiMessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#001f3f]">Send us a Message</h2>
                  <p className="text-[#4d4d4d]">We&apos;d love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#001f3f] mb-2">First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5e17ea] focus:border-transparent transition-all duration-300 text-black"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#001f3f] mb-2">Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5e17ea] focus:border-transparent transition-all duration-300 text-black"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001f3f] mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5e17ea] focus:border-transparent transition-all duration-300 text-black"
                    placeholder="Enter your email address"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#001f3f] mb-2">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5e17ea] focus:border-transparent transition-all duration-300 text-black"
                    placeholder="Enter your company name"
                  />
                </div>

                <fieldset>
                  <legend className="block text-sm font-semibold text-[#001f3f] mb-3">Service Interest</legend>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {services.map((service) => (
                      <div key={service.value} className="h-20">
                        <input
                          type="radio"
                          id={service.value}
                          name="serviceInterest"
                          value={service.value}
                          checked={formData.serviceInterest === service.value}
                          className="sr-only peer"
                          onChange={(e) => handleServiceChange(e.target.value)}
                        />
                        <label
                          htmlFor={service.value}
                          className="
                            block w-full h-full p-3 text-center text-gray-700 bg-white
                            border border-gray-200 rounded-xl
                            cursor-pointer transition-all duration-200
                            hover:bg-gray-50 hover:border-gray-300
                            peer-checked:ring-2 peer-checked:ring-[#5e17ea] peer-checked:border-transparent
                            peer-checked:text-[#5e17ea] peer-checked:font-semibold
                            flex items-center justify-center text-sm font-medium
                          "
                        >
                          {service.label}
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  {/* Conditionally show a text input for "Other" */}
                  {formData.serviceInterest === 'other' && (
                    <motion.div 
                      className="mt-4"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <label htmlFor="otherService" className="sr-only">Please specify</label>
                      <input
                        type="text"
                        id="otherService"
                        name="otherService"
                        value={formData.otherService || ''}
                        onChange={handleChange}
                        placeholder="Please specify your interest..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5e17ea] focus:border-transparent transition-all duration-300 text-black"
                      />
                    </motion.div>
                  )}
                </fieldset>

                <div>
                  <label className="block text-sm font-semibold text-[#001f3f] mb-2">Message *</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#5e17ea] focus:border-transparent transition-all duration-300 resize-none text-black"
                    placeholder="Tell us about your project or how we can help..."
                    required
                  ></textarea>
                </div>

                {status === 'error' && (
                  <div className="text-red-600 dark:text-red-400 text-sm">
                    {errorMessage}
                  </div>
                )}
                {status === 'success' && (
                  <div className="text-green-600 dark:text-green-400 text-sm">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group relative disabled:opacity-70"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <FiSend className="w-5 h-5 mr-2" />
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={item} className="order-1 lg:order-2">
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-2xl p-6 text-white relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.4%22%20stroke-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%2020h40M20%200v40%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-[#5e17ea]/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <h3 className="text-lg font-bold mb-2">{info.title}</h3>
                      <p className="text-gray-300 font-medium">{info.details}</p>
                      <p className="text-gray-400 text-sm mt-1">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Services We Offer */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] rounded-lg flex items-center justify-center mr-4">
                    <FiGlobe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#001f3f]">Services We Offer</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.value}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center text-[#4d4d4d] hover:text-[#5e17ea] transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#5e17ea] rounded-full mr-3"></div>
                      <span className="text-sm font-medium">{service.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gradient-to-br from-[#001f3f] via-[#002b57] to-[#001f3f] rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%231e90ff%22%20stroke-width%3D%220.5%22%20stroke-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M0%2030h60M30%200v60%22/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-[#5e17ea]/20 rounded-lg flex items-center justify-center mr-4">
                      <FiUsers className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">Why Choose DSeT?</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#ff851b] rounded-full mr-3"></div>
                      <span className="text-sm">20+ years of global experience</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#ff851b] rounded-full mr-3"></div>
                      <span className="text-sm">Fortune 500 client portfolio</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#ff851b] rounded-full mr-3"></div>
                      <span className="text-sm">Proven transformation methodologies</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-[#ff851b] rounded-full mr-3"></div>
                      <span className="text-sm">End-to-end solution delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <Section bgColor="light" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-6 text-[#5e17ea]">Ready to Transform Your Business?</h2>
          <p className="text-xl text-[#ffffff] mb-8 leading-relaxed">
                            Let&apos;s discuss how DSeT Consulting can help you achieve your digital transformation goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+917325948111"
              className="relative px-8 py-4 bg-gradient-to-r from-[#5e17ea] to-[#1e90ff] text-white font-semibold rounded-xl shadow-lg text-lg overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <FiPhone className="w-5 h-5 mr-2" />
                Call Us Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#1e90ff] to-[#5e17ea] opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out"></div>
            </motion.a>
            <motion.a
              href="mailto:contact@dsetconsulting.com"
              className="relative px-8 py-4 text-[#5e17ea] font-semibold rounded-xl text-lg border-2 border-[#001f3f] hover:bg-[#001f3f] hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center justify-center">
                <FiMail className="w-5 h-5 mr-2" />
                Email Us
              </span>
            </motion.a>
          </div>
        </motion.div>
      </Section>
    </Layout>
  );
};

export default ContactPage; 