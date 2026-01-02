import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { NavItem, SocialLink } from '../types';


const Header: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>('#hero');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { id: '#hero', icon: 'bi-house', text: 'Accueil' },
    { id: '#about', icon: 'bi-person', text: 'À propos' },
    { id: '#resume', icon: 'bi-file-earmark-text', text: 'CV' },
    { id: '#portfolio', icon: 'bi-images', text: 'Projets' },
    { id: '#services', icon: 'bi-hdd-stack', text: 'Services' },
    { id: '#contact', icon: 'bi-envelope', text: 'Contact' }
  ];

  const socialLinks: SocialLink[] = [
      { name: 'Github', icon: 'bi-github', href: 'https://github.com/jaures50' },
    { name: 'linkedin', icon: 'bi-linkedin', href: 'https://www.linkedin.com/in/jaur%C3%A8s-zogba-6a47282a3/' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(id);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed left-0 top-0 h-screen w-20 lg:w-64 z-50 flex flex-col justify-center py-8 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm' : 'bg-gray-900'
      }`}
    >
      <div className="flex-1 flex flex-col justify-center">
        <nav className="px-4 lg:px-6">
          <ul className="space-y-4 lg:space-y-6">
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.id}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                    activeLink === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                  }`}
                >
                  <i className={`bi ${item.icon} text-lg lg:text-xl`}></i>
                  <span className="hidden lg:inline font-medium">
                    {item.text}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 px-4 lg:px-6"
        >
          <div className="flex justify-center lg:justify-start gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <i className={`bi ${link.icon} text-xl`}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;