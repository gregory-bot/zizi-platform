import React, { useState, useEffect } from 'react';
import { Plus, X, PieChart, School, Building2, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOpen = () => setIsOpen(!isOpen);

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1 }
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: { opacity: 1, y: 0 }
  };

  const fabItems = [
    { icon: <PieChart size={18} />, label: "Dashboard", link: "/dashboard" },
    { icon: <School size={18} />, label: "Institutions", link: "/institutions" },
    { icon: <Building2 size={18} />, label: "Industry", link: "/industry" },
    { icon: <Users size={18} />, label: "Community", link: "/community" }
  ];

  if (!scrolled) return null;

  return (
    <div className="fixed right-6 bottom-16 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="flex flex-col-reverse gap-2 mb-2 items-end"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {fabItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center"
              >
                <div className="bg-white shadow-md rounded-lg px-3 py-1 mr-2 text-sm">
                  {item.label}
                </div>
                <Link 
                  to={item.link}
                  className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-primary-500 hover:bg-gray-50"
                >
                  {item.icon}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors ${
          isOpen ? 'bg-red-500 text-white' : 'bg-primary-500 text-white'
        }`}
        onClick={toggleOpen}
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <X size={24} /> : <Plus size={24} />}
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;