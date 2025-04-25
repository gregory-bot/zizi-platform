import React from 'react';
import Navbar from '../components/navigation/Navbar';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Database, School, Clock, PieChart, BookOpen, GraduationCap } from 'lucide-react';

const DashboardPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-16">
        {/* Page Header */}
        <div className="bg-primary-500 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold leading-7 sm:text-4xl sm:truncate">
                  Dashboard
                </h1>
                <p className="mt-2 text-lg">
                  Welcome back. Here's your data at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white overflow-hidden shadow-soft rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-primary-100 rounded-md p-3">
                    <Database className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Partnered Institutions
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          42
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white overflow-hidden shadow-soft rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-accent-100 rounded-md p-3">
                    <Users className="h-6 w-6 text-accent-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Industry Partners
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          156
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white overflow-hidden shadow-soft rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-green-100 rounded-md p-3">
                    <GraduationCap className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Verified Courses
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          312
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="bg-white overflow-hidden shadow-soft rounded-lg"
            >
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-blue-100 rounded-md p-3">
                    <TrendingUp className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Skills Gap Reduction
                      </dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">
                          27%
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Main Dashboard Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area - 2/3 width on large screens */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Activity */}
              <motion.div 
                className="bg-white shadow-soft rounded-lg"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                </div>
                <div className="px-6 py-5">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <School className="h-8 w-8 text-primary-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            New curriculum uploaded
                          </p>
                          <p className="text-sm text-gray-500">
                            Tourism Management - University of Dar es Salaam
                          </p>
                        </div>
                        <div className="inline-flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          2 hours ago
                        </div>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Users className="h-8 w-8 text-accent-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            New industry partnership
                          </p>
                          <p className="text-sm text-gray-500">
                            Serena Hotels joined as a premium partner
                          </p>
                        </div>
                        <div className="inline-flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          1 day ago
                        </div>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <BookOpen className="h-8 w-8 text-green-500" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            Curriculum update recommendation
                          </p>
                          <p className="text-sm text-gray-500">
                            Sustainable Tourism Practices - AI suggested updates
                          </p>
                        </div>
                        <div className="inline-flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          2 days ago
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Skills Gap Analysis */}
              <motion.div 
                className="bg-white shadow-soft rounded-lg overflow-hidden"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Skills Gap Analysis</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Digital Marketing</div>
                        <div className="text-sm font-medium text-gray-700">78%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Sustainable Tourism</div>
                        <div className="text-sm font-medium text-gray-700">45%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "45%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Customer Experience</div>
                        <div className="text-sm font-medium text-gray-700">63%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "63%" }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-sm font-medium text-gray-700">Technology Integration</div>
                        <div className="text-sm font-medium text-gray-700">32%</div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-red-500 h-2.5 rounded-full" style={{ width: "32%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar - 1/3 width on large screens */}
            <div className="space-y-8">
              {/* Upcoming Events */}
              <motion.div 
                className="bg-white shadow-soft rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Upcoming Events</h3>
                </div>
                <div className="px-6 py-5">
                  <ul className="divide-y divide-gray-200">
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Tourism Skills Summit
                          </p>
                          <p className="text-sm text-gray-500">
                            June 15, 2025 • Nairobi, Kenya
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Curriculum Development Workshop
                          </p>
                          <p className="text-sm text-gray-500">
                            July 3, 2025 • Virtual Event
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="py-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900">
                            Industry Partnership Meeting
                          </p>
                          <p className="text-sm text-gray-500">
                            July 12, 2025 • Dar es Salaam, Tanzania
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </motion.div>
              
              {/* Top Demanded Skills */}
              <motion.div 
                className="bg-white shadow-soft rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Top Demanded Skills</h3>
                </div>
                <div className="px-6 py-5">
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                      Digital Marketing
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      Sustainable Tourism
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                      Customer Experience
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                      Data Analytics
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                      Crisis Management
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pink-100 text-pink-800">
                      Cultural Intelligence
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      AI Applications
                    </span>
                  </div>
                </div>
              </motion.div>
              
              {/* Quick Actions */}
              <motion.div 
                className="bg-white shadow-soft rounded-lg"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <div className="px-6 py-5 border-b border-gray-200">
                  <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
                </div>
                <div className="px-6 py-5 space-y-3">
                  <a href="/institutions/analytics" className="flex items-center text-primary-600 hover:text-primary-800">
                    <PieChart className="h-5 w-5 mr-2" />
                    View Full Analytics
                  </a>
                  <a href="/institutions/upload" className="flex items-center text-primary-600 hover:text-primary-800">
                    <Database className="h-5 w-5 mr-2" />
                    Upload New Curriculum
                  </a>
                  <a href="#" className="flex items-center text-primary-600 hover:text-primary-800">
                    <Users className="h-5 w-5 mr-2" />
                    Find Partners
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;