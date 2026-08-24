import React from 'react';
import { FileDown, Mail, Code, Database, Layout } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import profileImg from '../assets/profile.jpg';

const Home = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 80]); // Subtle parallax on scroll
  const y2 = useTransform(scrollY, [0, 500], [0, -50]); 

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-4 px-4 overflow-hidden">
      <div className="max-w-6xl w-full mx-auto relative">
        <Reveal>
          <motion.div className="w-full">
            <GlassCard hover={false} className="relative overflow-hidden w-full h-full p-6 md:p-8 lg:p-8 rounded-[2.5rem]">
              
              <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-8 items-center justify-between">
                
                {/* Text Content (Left on Desktop) */}
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-10 pt-4 lg:pt-0">
                  
                  <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-white leading-tight transition-colors duration-500">
                    Make <span className="text-purple-600 dark:text-purple-400">Applications</span> That Engage, Delight, and Connect
                  </h1>
                  
                  <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 tracking-wide transition-colors duration-500 min-h-[40px] flex flex-wrap items-center justify-center lg:justify-start gap-2">
                    Hi, I'm Mohit! 
                    <span className="font-normal text-gray-400 hidden sm:inline-block">|</span>
                    <TypeAnimation
                      sequence={[
                        'Full Stack Developer',
                        2000,
                        'MERN Stack Developer',
                        2000,
                        'Software Developer',
                        2000,
                        'React Developer',
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                      className="inline-block text-purple-600 dark:text-purple-400 font-medium"
                    />
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl mb-8 leading-relaxed font-medium transition-colors duration-500">
                    Building scalable backend systems and interactive web applications. 
                    Passionate about elegant code, clean aesthetics, and creating digital experiences that matter.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
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
                    <div className="flex gap-3 lg:ml-2 border-l-0 lg:border-l border-gray-200 dark:border-slate-700 pl-0 lg:pl-4 mt-2 lg:mt-0 transition-colors duration-500">
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

                  {/* Stats Section */}
                  <div className="grid grid-cols-3 gap-4 lg:gap-8 pt-5 border-t border-gray-200 dark:border-slate-700/50 w-full">
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">10+</span>
                      <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1">Projects Done</span>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">100%</span>
                      <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1">Commitment</span>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                      <span className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">3+</span>
                      <span className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium mt-1">Tech Stacks</span>
                    </div>
                  </div>
                </div>

                {/* Image Section (Right on Desktop) */}
                <div className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[340px] lg:h-[340px]">
                    {/* Gradient Arc (Decorative) */}
                    <div className="absolute inset-0 rounded-full border-[4px] lg:border-[6px] border-transparent border-t-purple-500 border-r-blue-500 rotate-45 opacity-70"></div>
                    <div className="absolute inset-[-10px] lg:inset-[-15px] rounded-full border-[2px] lg:border-[3px] border-transparent border-b-purple-400 border-l-blue-400 -rotate-12 opacity-40"></div>
                    
                    {/* Main Image */}
                    <div className="absolute inset-2 lg:inset-3 rounded-full overflow-hidden bg-gray-100 dark:bg-slate-800 shadow-2xl border-4 border-white dark:border-slate-700 transition-colors duration-500">
                      <img src={profileImg} alt="Mohit Kumar" className="w-full h-full object-cover z-10 relative" />
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 dark:via-white/5 to-transparent z-20"></div>
                    </div>

                    {/* Floating Icons */}
                    <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-4 right-0 lg:top-10 lg:-right-4 bg-white dark:bg-slate-800 p-3 lg:p-4 rounded-full shadow-xl border border-gray-100 dark:border-slate-700 z-30"
                    >
                      <Layout className="w-6 h-6 text-purple-500" />
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-12 -left-2 lg:bottom-20 lg:-left-8 bg-white dark:bg-slate-800 p-3 lg:p-4 rounded-full shadow-xl border border-gray-100 dark:border-slate-700 z-30"
                    >
                      <Code className="w-6 h-6 text-blue-500" />
                    </motion.div>

                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                      className="absolute bottom-0 right-8 lg:bottom-4 lg:right-10 bg-white dark:bg-slate-800 p-2 lg:p-3 rounded-full shadow-xl border border-gray-100 dark:border-slate-700 z-30"
                    >
                      <Database className="w-5 h-5 text-pink-500" />
                    </motion.div>
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
