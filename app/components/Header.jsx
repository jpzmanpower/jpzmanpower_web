"use client";
import React, { useState, useRef, useEffect } from "react";
import { Menu, X, Home, Info, Settings, Briefcase, Building, Phone, ChevronDown, ChevronRight ,Handshake} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const industryItems = [
  { title: "Construction", href: "/industry/construction" },
  { title: "Banking", href: "/industry/banking" },
  { title: "Hospitality", href: "/industry/hospitality" },
  { title: "IT", href: "/industry/Information_technology" },
  { title: "Oil & Gas", href: "/industry/oil_gas" },
  { title: "Transportation", href: "/industry/transportation" },
];

const servicesItems = [
  { title: "Tourism Services", href: "/services/tourism_services" },
  { title: "Overseas Employment", href: "/services/overseas_employment" },
];

const visaprocessing = [
{ title: "Musaned" ,href:" /visaprocessing/musaned"},
{ title: "Saudi Wakala", href: "/visaprocessing/saudi_wakala"},
];

const navItems = [
  { title: "Home", href: "/", icon: <Home className="h-5 w-5 mr-2" /> },
  { title: "About Us", href: "/about", icon: <Info className="h-5 w-5 mr-2" /> },
  {
    title: "Services", icon: <Settings className="h-5 w-5 mr-2" />,
    hasDropdown: true, dropdownItems: servicesItems
  },
  {
    title: "Industries",
    href: "/industries",
    icon: <Building className="h-5 w-5 mr-2" />,
    hasDropdown: true,
    dropdownItems: industryItems
  },
  { title: "Jobs Oversease", href: "/jobsOversease", icon: <Briefcase className="h-5 w-5 mr-2" /> },
  { title: "Visa Processing",  icon: <Handshake className="h-5 w-5 mr-2" /> ,
    hasDropdown: true, dropdownItems: visaprocessing
  },
  { title: "Contact", href: "/contact", icon: <Phone className="h-5 w-5 mr-2" /> }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (title) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  const handleDesktopMouseEnter = (title) => {
    setActiveDropdown(title);
  };

  const handleDesktopMouseLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="   transition-colors duration-500 hover:text-secondary">
              <Image
                src="/pic/JPZManpowerlogo.jpg"
                alt="JPZ Travel Team"
                width={70}
                height={50}
                className="rounded-xl"
              />
            </Link>

          </div>

          {/* Desktop Navigation */}
          <div ref={dropdownRef} className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              // console.log("test", item.href);
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <div
                  key={item.title}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && handleDesktopMouseEnter(item.title)}
                  onMouseLeave={handleDesktopMouseLeave}
                >
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ease-in-out
                            ${isActive
                          ? 'text-secondary bg-secondary/10 hover:bg-secondary/20'
                          : 'text-gray-900 hover:bg-gray-50 hover:text-secondary'}`}
                    >
                      {React.cloneElement(item.icon, {
                        className: `h-5 w-5 mr-2 transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-gray-900 group-hover:text-secondary'
                          }`
                      })}
                      {item.title}
                    </Link>
                  ) : (
                    <div
                      className={`flex items-center px-3 py-2 text-base font-medium rounded-md
                      transition-all duration-300 ease-in-out cursor-pointer
                     ${isActive
                          ? 'text-secondary bg-secondary/10 hover:bg-secondary/20'
                          : 'text-gray-900 hover:bg-gray-50 hover:text-secondary'}`}
                      onClick={() => item.hasDropdown && handleDesktopMouseEnter(item.title)}
                    >
                      {React.cloneElement(item.icon, {
                        className: `h-5 w-5 mr-2 transition-colors duration-300 ${isActive ? 'text-secondary' : 'text-gray-900 group-hover:text-secondary'
                          }`
                      })}
                      {item.title}
                    </div>
                  )}

                  <AnimatePresence>
                    {item.hasDropdown && activeDropdown === item.title && (
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={dropdownVariants}
                        className="absolute top-full left-0 w-56 py-2 mt-2 bg-white rounded-lg shadow-2xl z-50 border border-gray-200 overflow-hidden"
                      >
                        {item.dropdownItems.map((dropdownItem) => {
                          const isDropdownActive = pathname === dropdownItem.href;
                          return (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className={`block px-4 py-3 text-md font-medium transition-all duration-300 ease-in-out
                                hover:translate-x-2 hover:pl-5
                                ${isDropdownActive
                                  ? 'text-secondary bg-secondary/10 font-semibold'
                                  : 'text-gray-800 hover:bg-gray-100 hover:text-secondary'
                                }
                              `}
                            >
                              <div className="flex items-center">
                                <ChevronRight className="h-4 w-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                {dropdownItem.title}
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-900 hover:text-secondary hover:bg-gray-50 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute right-0 top-0 w-64 h-full bg-white shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="overflow-y-auto h-full">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                  return (
                    <div key={item.title} className="border-b border-gray-100">
                      <button
                        onClick={() => item.hasDropdown
                          ? handleDropdownToggle(item.title)
                          : window.location.href = item.href
                        }
                        className={`w-full flex items-center justify-between p-4 transition-colors
                          ${isActive ? 'text-secondary bg-secondary/10' : 'text-gray-900 hover:text-secondary hover:bg-gray-50'}`}
                      >
                        <div className="flex items-center">
                          {React.cloneElement(item.icon, {
                            className: `h-5 w-5 mr-2 ${isActive ? 'text-secondary' : 'text-gray-900'}`
                          })}
                          {item.title}
                        </div>
                        {item.hasDropdown && (
                          <ChevronDown className={`h-5 w-5 ${mobileDropdowns[item.title] ? 'rotate-180' : ''}`} />
                        )}
                      </button>
                      {item.hasDropdown && mobileDropdowns[item.title] && (
                        <div className=" space-y-2">
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.title}
                              href={dropdownItem.href}
                              className={`block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-secondary`}
                            >
                              {dropdownItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
