import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const NavBar = () => {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= (el.offsetTop - 200)) {
          setActive(section);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL hash without causing a jump
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass-nav rounded-full px-6 py-3 shadow-sm w-[90%] max-w-2xl transition-all duration-300">
      <div className="flex justify-between items-center">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-2 group">
          <Terminal className="text-gray-800 dark:text-gray-200 w-5 h-5 transition-transform group-hover:rotate-12" />
          <span className="text-lg font-bold tracking-wider text-gray-900 dark:text-white">MOHIT.</span>
        </a>
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`text-xs font-semibold tracking-widest uppercase transition-colors ${
                  active === id ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
                }`}
                onClick={(e) => scrollToSection(e, id)}
              >
                {link}
              </a>
            );
          })}
        </div>
        
        <a 
          href="#contact" 
          onClick={(e) => scrollToSection(e, 'contact')}
          className="md:hidden text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
