import React from 'react';
import Navbar from '../../components/navigation/Navbar';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  GraduationCap, 
  BarChart3, 
  PieChart,
  LineChart,
  UserCheck
} from 'lucide-react';

const AnalyticsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-16">
        <div className="bg-primary-500 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h1 className="text-3xl font-bold leading-7 sm:text-4xl sm:truncate">
                  Institution Analytics
                </h1>
                <p className="mt-2 text-lg">
                  Track your institution's performance and industry alignment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
          {/* Key Metrics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-soft p-6"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-primary-100 text-primary-500">
                  <Users className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">1,234</h3>
                  <p className="text-sm text-gray-500">Active Students</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-soft p-6"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-500">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">87%</h3>
                  <p className="text-sm text-gray-500">Graduate Employment Rate</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-soft p-6"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                  <BookOpen className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">15</h3>
                  <p className="text-sm text-gray-500">Active Programs</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-soft p-6"
            >
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-500">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">92%</h3>
                  <p className="text-sm text-gray-500">Industry Alignment</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Main Analytics Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            {/* Skills Gap Analysis */}
            <motion.div 
              className="lg:col-span-2 bg-white shadow-soft rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Skills Gap Analysis</h2>
                  <BarChart3 className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Digital Marketing</span>
                      <span className="text-sm font-medium text-gray-700">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-primary-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Customer Service</span>
                      <span className="text-sm font-medium text-gray-700">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Data Analytics</span>
                      <span className="text-sm font-medium text-gray-700">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Sustainable Tourism</span>
                      <span className="text-sm font-medium text-gray-700">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Graduate Employment */}
            <motion.div 
              className="bg-white shadow-soft rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Graduate Employment</h2>
                  <PieChart className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                      <span className="ml-2 text-sm text-gray-600">Employed in Field</span>
                    </div>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="ml-2 text-sm text-gray-600">Related Field</span>
                    </div>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                      <span className="ml-2 text-sm text-gray-600">Other</span>
                    </div>
                    <span className="text-sm font-medium">13%</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Industry Feedback */}
            <motion.div 
              className="lg:col-span-2 bg-white shadow-soft rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Industry Feedback</h2>
                  <LineChart className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <UserCheck className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Serena Hotels</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        "Graduates show excellent customer service skills and cultural awareness. 
                        Recommend more focus on digital tools for hospitality management."
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <UserCheck className="h-6 w-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">Safari Tours Ltd</h3>
                      <p className="mt-1 text-sm text-gray-500">
                        "Strong understanding of sustainable tourism practices. Could benefit from 
                        more hands-on experience with booking systems."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Curriculum Updates */}
            <motion.div 
              className="bg-white shadow-soft rounded-lg"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Updates</h2>
                  <BookOpen className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Digital Marketing Module Added</p>
                    <p className="text-sm text-gray-500">2 days ago</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">Sustainable Tourism Updated</p>
                    <p className="text-sm text-gray-500">1 week ago</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm font-medium text-gray-900">New Industry Partnership</p>
                    <p className="text-sm text-gray-500">2 weeks ago</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;