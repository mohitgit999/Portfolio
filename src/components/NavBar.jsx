import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
        
        <button 
          className="md:hidden text-gray-900 dark:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 mt-4 w-full bg-white/90 dark:bg-slate-900/90 rounded-2xl p-4 shadow-lg backdrop-blur-md border border-gray-200 dark:border-slate-800 flex flex-col gap-4">
          {navLinks.map((link) => {
            const id = link.toLowerCase();
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`text-sm font-semibold tracking-widest uppercase transition-colors px-2 py-2 rounded-md ${
                  active === id ? 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                }`}
                onClick={(e) => {
                  scrollToSection(e, id);
                  setIsMobileMenuOpen(false);
                }}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
