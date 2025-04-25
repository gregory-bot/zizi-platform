import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Menu, X, ChevronDown, LogOut, User } from 'lucide-react';
import Logo from '../common/Logo';

const NavItem = ({ text, href, dropdown = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => dropdown.length > 0 && setIsOpen(true)}
      onMouseLeave={() => dropdown.length > 0 && setIsOpen(false)}
    >
      <div
        className="px-3 py-2 text-xl font-bold text-primary-500 hover:text-primary-500 cursor-pointer flex items-center"
        onClick={() => dropdown.length > 0 && setIsOpen(!isOpen)}
      >
        {dropdown.length > 0 ? (
          <>
            <span>{text}</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </>
        ) : (
          <Link to={href}>{text}</Link>
        )}
      </div>

      {dropdown.length > 0 && isOpen && (
        <div
          className="absolute z-10 left-0 mt-2 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1">
            {dropdown.map((item, index) => (
              <Link
                key={index}
                to={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  const navItems = [
    { text: 'Home', href: '/' },
    {
      text: 'Institutions',
      dropdown: [
        { text: 'Register Institution', href: '/institutions/register' },
        { text: 'Upload Curriculum', href: '/institutions/upload' },
        { text: 'Analytics', href: '/institutions/analytics' },
      ],
    },
    {
      text: 'Industry',
      dropdown: [
        { text: 'Register Organization', href: '/industry/register' },
        { text: 'Declare Demands', href: '/industry/demands' },
        { text: 'Market Insights', href: '/industry/insights' },
      ],
    },
    { text: 'Dashboard', href: '/dashboard' },
    { text: 'About', href: '/about' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navItems.map((item, index) => (
              <NavItem
                key={index}
                text={item.text}
                href={item.href}
                dropdown={item.dropdown || []}
              />
            ))}
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/profile"
                  className="text-4xl text-blue-600 font-bold hover:text-primary-500"
                >
                  <User className="h-8 w-8" />
                </Link>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Sign Out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 bg-primary-400 rounded-full text-gray-700 hover:text-primary-500 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div
          ref={menuRef}
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg overflow-y-auto transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex justify-between items-center px-3 py-2">
              <Logo small />
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-primary-500 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="block h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            <div className="border-t border-gray-200 my-3"></div>

            {navItems.map((item, index) => (
              <div key={index} className="py-1">
                {item.dropdown ? (
                  <div className="space-y-1">
                    <p className="px-3 py-2 text-sm font-medium text-gray-800">
                      {item.text}
                    </p>
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((dropdownItem, dropdownIndex) => (
                        <Link
                          key={dropdownIndex}
                          to={dropdownItem.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-500"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {dropdownItem.text}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.text}
                  </Link>
                )}
              </div>
            ))}

            <div className="border-t border-gray-200 my-3"></div>

            {currentUser ? (
              <div className="px-3 space-y-2">
                <Link
                  to="/profile"
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-800 hover:text-primary-500"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="px-3">
                <Link
                  to="/login"
                  className="block w-full text-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;