import React from 'react';
import { FileDown, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]); // Subtle parallax on scroll

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-5xl w-full mx-auto">
        <Reveal>
          <motion.div
            className="w-full"
          >
            <GlassCard hover={true} className="relative overflow-hidden w-full h-full">
              {/* Subtle glow effect behind card content with parallax */}
                <motion.div 
                  style={{ y: y1 }}
                  className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 dark:bg-slate-700/30 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3 transition-colors duration-500"
                ></motion.div>
            
            <div className="flex flex-col md:flex-row gap-12 items-center p-4 md:p-8">
              {/* Profile Image - Clean geometric frame */}
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-gray-200 dark:border-slate-600 bg-white/40 dark:bg-slate-800/40 p-2 flex-shrink-0 shadow-sm relative group overflow-hidden transition-colors duration-500">
                <div className="w-full h-full rounded-full bg-gray-100 dark:bg-slate-700 overflow-hidden flex items-center justify-center relative transition-colors duration-500">
                  <img src={profileImg} alt="Mohit Kumar" className="w-full h-full object-cover z-10 relative" />
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 dark:via-white/5 to-transparent -translate-x-full group-hover:animate-shine z-20"></div>
                </div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700 shadow-sm mb-6 transition-colors duration-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 tracking-wide uppercase">Available for work</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-900 dark:text-white transition-colors duration-500">
                  Mohit <span className="text-gray-400 dark:text-gray-500 font-light">Kumar</span>
                </h1>
                
                <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-6 tracking-wide transition-colors duration-500 h-8">
                  <TypeAnimation
                    sequence={[
                      'Software Developer',
                      2000,
                      'React Developer',
                      2000,
                      'Tailwind CSS Enthusiast',
                      2000,
                      'Java Developer',
                      2000,
                      'MongoDB Specialist',
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </h2>
                
                <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed font-medium transition-colors duration-500">
                  Building scalable backend systems and interactive web applications. 
                  Passionate about elegant code, clean aesthetics, and creating digital experiences that matter.
                </p>
                
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact" 
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        window.history.pushState(null, '', '#contact');
                      }
                    }}
                    className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-sm cursor-pointer"
                  >
                    Contact Me
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/resume.pdf" 
                    download="Mohit_Kumar_Resume.pdf" 
                    className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-900 dark:text-white font-semibold rounded-full border border-gray-200 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" /> Resume
                  </motion.a>
                  <div className="flex gap-3 md:ml-2 border-l-0 md:border-l border-gray-200 dark:border-slate-700 pl-0 md:pl-4 mt-2 md:mt-0 transition-colors duration-500">
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://github.com/mohitgit999" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-500 transition-colors shadow-sm"
                    >
                      <FaGithub className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      href="https://linkedin.com/in/mohit-kumar-a14836313" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-500 transition-colors shadow-sm"
                    >
                      <FaLinkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      href="mailto:mohit96038@gmail.com" 
                      className="p-3 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-full text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-slate-500 transition-colors shadow-sm"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
              </GlassCard>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;
