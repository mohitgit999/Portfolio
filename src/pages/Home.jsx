import React from 'react';
import { FileDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <Reveal>
          <GlassCard className="relative overflow-hidden">
            {/* Subtle glow effect behind card content */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 dark:bg-slate-700/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 transition-colors duration-500"></div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-start p-4 md:p-8">
              {/* Profile Image - Clean geometric frame */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-gray-200 dark:border-slate-600 bg-white/40 dark:bg-slate-800/40 p-2 flex-shrink-0 shadow-sm relative group overflow-hidden transition-colors duration-500">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-slate-700 overflow-hidden flex items-center justify-center relative transition-colors duration-500">
                  <span className="text-gray-400 dark:text-gray-500 text-sm z-10 font-medium tracking-wider">Place photo here</span>
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full group-hover:animate-shine z-20"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 shadow-sm mb-6 transition-colors duration-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 tracking-wide uppercase">Available for work</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white transition-colors duration-500">
                  Mohit <span className="text-gray-400 dark:text-gray-500 font-light">Kumar</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 tracking-wide transition-colors duration-500">
                  Software Developer
                </h2>
                
                <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed font-medium transition-colors duration-500">
                  Building scalable backend systems and interactive web applications. 
                  Passionate about elegant code, clean aesthetics, and creating digital experiences that matter.
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a 
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', '#contact');
                      }
                    }}
                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm"
                  >
                    Contact Me
                  </a>
                  <a href="/resume.pdf" download="Mohit_Kumar_Resume.pdf" className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm">
                    <FileDown className="w-4 h-4" /> Resume
                  </a>
                  
                  <div className="flex gap-3 ml-2 border-l border-gray-200 dark:border-slate-700 pl-4 transition-colors duration-500">
                    <a href="https://github.com/mohitgit999" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-500 transition-colors shadow-sm">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/mohit-kumar-a14836313" target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-500 transition-colors shadow-sm">
                      <FaLinkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:your.email@example.com" className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-500 transition-colors shadow-sm">
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
