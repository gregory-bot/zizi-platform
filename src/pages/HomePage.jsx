import React from 'react';
import Navbar from '../components/navigation/Navbar';
import Hero from '../components/home/Hero';
import Logo from '../components/common/Logo'; // Adjust the path as needed
import FloatingActionButton from '../components/home/FloatingActionButton';
import { motion } from 'framer-motion';
import { BarChart3, BookOpen, Building, Users, Shield, TrendingUp } from 'lucide-react';

const HomePage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const features = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary-500" />,
      title: "AI-Powered Analytics",
      description: "Our platform uses advanced AI to analyze skill demands and curriculum content to identify mismatches and emerging trends."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary-500" />,
      title: "Blockchain Security",
      description: "All credentials, curricula, and collaboration data are secured using blockchain technology for maximum integrity and trustworthiness."
    },
    {
      icon: <Building className="h-8 w-8 text-primary-500" />,
      title: "Industry Integration",
      description: "Organizations declare their skill needs, access talent insights, and directly collaborate with educational institutions."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary-500" />,
      title: "Curriculum Enhancement",
      description: "Institutions receive real-time feedback to improve their training programs and align them with industry demands."
    },
    {
      icon: <Users className="h-8 w-8 text-primary-500" />,
      title: "Public Verification",
      description: "Customers can verify service providers, professionals, and institutions through our transparent dashboard."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-500" />,
      title: "Continuous Improvement",
      description: "Data-driven insights help track progress, measure impact, and adapt to changing market conditions."
    }
  ];

  const partners = [
    "https://thafd.bing.com/th/id/OIP.eVjjSMRbsbekdlKXgx6FHAAAAA?rs=1&pid=ImgDetMain", // Replace with actual image URLs
    "https://thafd.bing.com/th/id/OIP.WDnVypWU6xJHDHwEnyFj0wHaEI?rs=1&pid=ImgDetMain",
    "https://thafd.bing.com/th/id/OIP.crVwRYOVvT-n98dWISwscQHaGq?rs=1&pid=ImgDetMain",
    "https://thafd.bing.com/th/id/OIP.1fenql5BeYUFPsQHJitV5gHaEK?rs=1&pid=ImgDetMain",
    "https://thafd.bing.com/th/id/OIP.OXXL5xK5OQ-ZeTSjur7EswHaFK?rs=1&pid=ImgDetMain"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl">
              How Zizi Works
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages AI and blockchain technologies to connect institutions with industry organizations for a demand-driven workforce.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="bg-gray-50 rounded-lg p-8 shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-100 text-white mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-6">
            Our Partners
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We collaborate with leading organizations to bridge the skills gap in the hospitality and tourism industry.
          </p>
          <div className="flex justify-center space-x-0">
            {partners.map((partner, index) => (
              <img
                key={index}
                src={partner}
                alt={`Partner ${index + 1}`}
                className="h-16 w-16 rounded-full border-2 border-gray-300 shadow-md object-cover"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-400 max-w-xs">
                Bridging the skills gap in the hospitality and tourism industry in East Africa.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="/institutions" className="text-gray-400 hover:text-white">For Institutions</a></li>
                <li><a href="/industry" className="text-gray-400 hover:text-white">For Industry</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@zizi.io<br />
                Phone: +255 123 456 789<br />
                Address: Dar es Salaam, Tanzania
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zizi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  );
};

export default HomePage;