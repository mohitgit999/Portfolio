import React from 'react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { GraduationCap, BookOpen, Trophy } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="min-h-screen py-24 px-4 flex items-center justify-center">
      <div className="max-w-5xl w-full mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">About Me</h2>
            <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full transition-colors duration-500"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Education & Background */}
          <div className="flex flex-col gap-8">
            <Reveal delay={0.2}>
              <GlassCard>
                <div className="flex items-center gap-3 mb-6">
                  <GraduationCap className="text-gray-900 dark:text-gray-100 w-6 h-6 transition-colors duration-500" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-500">Education</h2>
                </div>
                <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-gray-800 dark:before:bg-gray-200 before:rounded-full">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-500">B.Tech. Computer Science</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-1 transition-colors duration-500">Invertis University, Bareilly</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm font-mono transition-colors duration-500">2023 – Ongoing | CGPA: 7.2 / 10</p>
                </div>
              </GlassCard>
            </Reveal>

            <Reveal delay={0.3}>
              <GlassCard>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-gray-900 dark:text-gray-100 w-6 h-6 transition-colors duration-500" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-500">My Journey</h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm transition-colors duration-500">
                  I started my journey into software development out of a deep curiosity for how things work on the web. Over the years, I've honed my skills in the MERN stack and Java, building everything from basic desktop applications to complex, AI-integrated web platforms. I thrive on solving complex problems and continuously learning new technologies to stay at the forefront of web development.
                </p>
              </GlassCard>
            </Reveal>
          </div>

          {/* Awards & Certifications */}
          <div className="flex flex-col gap-8 h-full">
            <Reveal delay={0.4} className="h-full">
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-8">
                  <Trophy className="text-gray-900 dark:text-gray-100 w-6 h-6 transition-colors duration-500" />
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white transition-colors duration-500">Certifications & Achievements</h2>
                </div>
                <ul className="space-y-6">
                  <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full">
                    <h4 className="text-gray-900 dark:text-white font-medium transition-colors duration-500">Full Stack Web Development Certification</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">Comprehensive training in MERN stack, encompassing frontend UI design and backend API architecture.</p>
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full">
                    <h4 className="text-gray-900 dark:text-white font-medium transition-colors duration-500">Core Java Programming Mastery</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">Deep dive into Object-Oriented Programming, data structures, and algorithms using Java.</p>
                  </li>
                  <li className="relative pl-6 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-gray-400 dark:before:bg-gray-500 before:rounded-full">
                    <h4 className="text-gray-900 dark:text-white font-medium transition-colors duration-500">Artificial Intelligence & Machine Learning</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">Foundational knowledge in AI concepts, data processing, and integrating AI models into applications.</p>
                  </li>
                </ul>
              </GlassCard>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
