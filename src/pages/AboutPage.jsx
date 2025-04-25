import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { motion } from 'framer-motion';
import { Shield, Users, Globe, BookOpen, Building2, Award } from 'lucide-react';

const AboutPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const stats = [
    { icon: <Building2 className="h-6 w-6" />, value: '42+', label: 'Partner Institutions' },
    { icon: <Users className="h-6 w-6" />, value: '156+', label: 'Industry Partners' },
    { icon: <Globe className="h-6 w-6" />, value: '5', label: 'Countries' },
    { icon: <Award className="h-6 w-6" />, value: '98%', label: 'Satisfaction Rate' },
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: '15+ years experience in hospitality education and workforce development.'
    },
    {
      name: 'David Mwangi',
      role: 'Head of Partnerships',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Expert in building strategic partnerships between education and industry.'
    },
    {
      name: 'Amina Hassan',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Pioneering AI and blockchain solutions for skills verification.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-white text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 className="text-4xl font-display font-bold sm:text-5xl">
              About Zizi
            </h1>
            <p className="mt-4 text-xl text-primary-600 max-w-3xl mx-auto">
              Bridging the skills gap in hospitality and tourism through innovative technology and industry partnerships
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div>
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Zizi, we're committed to transforming hospitality and tourism education in East Africa. Our platform connects educational institutions with industry partners to ensure graduates are equipped with the skills needed in today's dynamic market.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Verified Skills</h3>
                  <p className="mt-2 text-gray-600">
                    Using blockchain technology to ensure transparent and verifiable credentials
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-primary-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900">Industry-Aligned Education</h3>
                  <p className="mt-2 text-gray-600">
                    Ensuring curriculum matches real-world industry needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://i.postimg.cc/PfgcqdmL/zizi-web.jpg"
              alt="Team collaboration"
              className="rounded-lg h-74 shadow-lg"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="flex justify-center text-primary-500 mb-2">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl font-display font-bold text-gray-900">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Dedicated professionals working to transform education and employment in East Africa
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {team.map((member, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-soft overflow-hidden"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-primary-500 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;