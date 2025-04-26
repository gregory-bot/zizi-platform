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
    "https://portal.zetech.ac.ke/uploads/091db446-aa66-4c3c-9baa-bca2244507fa.png?v=Anx8t7WindgcSDk-gcqkaL8hkIGjufrepHetkAiBd58", // Zetech University
    "https://thafd.bing.com/th/id/OIP.mtard6Tas5FegQdKd0hfugAAAA?rs=1&pid=ImgDetMain", // Google Developer Groups
    "https://1.bp.blogspot.com/-75IQaPw_Uh8/UQuQPmXnJHI/AAAAAAAAFok/gtkxzN6KJBc/s1600/Logo+Microsoft.jpg", // Microsoft
    "https://www.nubl.co.ke/wp-content/uploads/2017/06/JKUAT-tran.png", // JKUAT
    "https://umdbigdataclub.github.io/images/training/data/Kaggle_logo.png" 
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

            {/* Institutions Section */}
            <section id="institutions" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              className="mb-10 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-6">
                For Educational Institutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Zizi provides tertiary institutions with the tools to align their curricula with industry demands, improving graduate employability and institutional relevance.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Upload training content and curricula securely</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Receive AI-powered analysis on curriculum-industry alignment</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Collaborate directly with industry partners</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Track graduate employability and outcomes</p>
                </li>
              </ul>
              <div className="mt-8">
                <a href="/institutions/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600">
                  Register Your Institution
                </a>
              </div>
            </motion.div>
            <motion.div
              className="relative lg:h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
<div className="rounded-lg overflow-hidden h-96 lg:h-full group">
  <img
    src="https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Educational institution"
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Section */}
      <section id="industry" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <motion.div
              className="relative lg:h-full order-2 lg:order-1 mb-10 lg:mb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="rounded-lg overflow-hidden h-96 lg:h-full group">
                <img
                  src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Hospitality industry"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-display font-bold text-gray-900 sm:text-4xl mb-6">
                For Industry Organizations
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Hospitality and tourism organizations can declare their workforce needs, find skilled talent, and collaborate with educational institutions to develop relevant training programs.
              </p>
              <ul className="space-y-4">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Post job roles and specific skill requirements</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Access talent insights and regional training trends</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Collaborate with institutions on curriculum development</p>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary-500 text-white">
                      ✓
                    </div>
                  </div>
                  <p className="ml-3 text-gray-600">Verify credentials of potential employees</p>
                </li>
              </ul>
              <div className="mt-8">
                <a href="/industry/register" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600">
                  Register Your Organization
                </a>
              </div>
            </motion.div>
          </div>
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
                Email: info@zizi.com<br />
                Phone: +254748163492<br />
                Address: Ruiru ,Kiambu ,Kenya
              </p>
            </div>
          </div>
          <div className="border-t border-red-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Zizi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <FloatingActionButton />
    </div>
  );
};

export default HomePage;