import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    "https://videos.pexels.com/video-files/2355823/2355823-sd_640_360_30fps.mp4",
    "https://videos.pexels.com/video-files/9432067/9432067-uhd_2560_1440_24fps.mp4"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const videoInterval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000); // Change video every 8 seconds

    return () => clearInterval(videoInterval);
  }, [videos.length]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
        {videos.map((video, index) => (
          <video
            key={index}
            className={`w-full h-full object-cover absolute transition-opacity duration-1000 ${
              currentVideo === index ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
            }`}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={video} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center justify-center text-center text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Bridging the Skills Gap in
              <span className="block mt-2 text-primary-300">
                <TypeAnimation
                  sequence={[
                    'Hospitality',
                    2000,
                    'Tourism',
                    2000,
                    'Food & Beverage',
                    2000,
                    'Culinary Arts',
                    2000,
                    'Sustainable Tourism',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto"
          >
            Connecting institutions and industry for a demand-driven workforce in East Africa
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#institutions"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600 md:text-lg"
            >
              For Institutions
            </a>
            <a
              href="#industry"
              className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 md:text-lg"
            >
              For Industry
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 z-20 flex justify-center"
      >
        <button
          onClick={scrollToContent}
          className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white transition-all"
        >
          <ChevronDown className="h-8 w-8 animate-bounce" />
        </button>
      </motion.div>
    </div>
  );
};

export default Hero;