import React from 'react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    title: "ProManage",
    date: "Jan 2025",
    description: "A full-stack project management application for teams to create tasks, assign roles, and track progress. Features secure user authentication using JWT and optimized database queries.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/mohitgit999",
    live: "https://pro-manage-mern.vercel.app/"
  },
  {
    title: "SmartSummarizer",
    date: "Nov 2024",
    description: "An AI-powered web tool that processes long text documents and generates concise, accurate summaries utilizing natural language processing and a clean backend architecture.",
    tech: ["Python", "Flask", "OpenAI API", "NLP"],
    github: "https://github.com/mohitgit999",
    live: "https://smart-document-summarizer-dynm.vercel.app/"
  },
  {
    title: "Food Wastage Management",
    date: "2024",
    description: "A comprehensive platform dedicated to reducing food wastage by managing surplus food. Features an intuitive interface for tracking and distributing resources efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/mohitgit999",
    live: "https://food-wastage-management-eta.vercel.app/"
  },
  {
    title: "Gym Fitness",
    date: "2024",
    description: "A modern fitness application designed to help users track workouts, explore exercises, and achieve their health goals with a responsive interactive interface.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/mohitgit999",
    live: "https://gym-project-pi-olive.vercel.app/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-24 px-4 flex items-center justify-center transition-colors duration-500">
      <div className="max-w-6xl w-full mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight transition-colors duration-500">Featured Projects</h2>
            <div className="w-16 h-1 bg-gray-300 dark:bg-gray-600 mx-auto rounded-full transition-colors duration-500"></div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <Reveal key={index} delay={index * 0.1} className="h-full">
              <GlassCard hover={true} className="flex flex-col relative overflow-hidden group h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-200/50 dark:bg-slate-700/30 rounded-full blur-2xl -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500"></div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white relative z-10 transition-colors duration-500">{project.title}</h3>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 bg-white/60 dark:bg-slate-800/60 px-2 py-1 rounded border border-black/5 dark:border-slate-700 transition-colors duration-500 relative z-10">{project.date}</span>
                </div>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow relative z-10 transition-colors duration-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-white/60 dark:bg-slate-800/60 border border-black/5 dark:border-slate-700 rounded-md text-xs font-medium text-gray-600 dark:text-gray-300 shadow-sm transition-colors duration-500">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-black/10 dark:border-slate-700 relative z-10 transition-colors duration-500">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <FaGithub className="w-4 h-4" /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
