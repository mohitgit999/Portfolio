import React from 'react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { Layers, Database, Code, Cpu } from 'lucide-react';

const skillsData = [
  {
    category: "Frontend Development",
    icon: <Layers className="w-6 h-6 text-gray-900" />,
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend & Database",
    icon: <Database className="w-6 h-6 text-gray-900" />,
    skills: ["Node.js", "Express.js", "MongoDB", "PostgreSQL", "REST APIs"]
  },
  {
    category: "Languages",
    icon: <Code className="w-6 h-6 text-gray-900" />,
    skills: ["Java", "Python", "JavaScript", "SQL"]
  },
  {
    category: "Tools & Others",
    icon: <Cpu className="w-6 h-6 text-gray-900" />,
    skills: ["Git", "GitHub", "Postman", "OpenAI API", "Machine Learning"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-24 px-4 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-5xl w-full mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Skills & Technologies</h2>
            <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full transition-colors duration-500"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-500">{category.category}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span 
                      key={i}
                      className="px-4 py-2 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300 dark:hover:border-slate-500 hover:text-gray-900 dark:hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
