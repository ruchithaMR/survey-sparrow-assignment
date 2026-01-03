import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Interactive SaaS Dashboard",
      role: "Lead Developer",
      result: "30% faster load time",
      github: "#",
      demo: "#",
      tags: ["React", "Chart.js", "Tailwind"]
    }
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 tracking-tighter">Case Studies</h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              className="group grid md:grid-cols-2 gap-12 items-center p-8 rounded-[3rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
              <div className="aspect-video bg-gray-900 rounded-[2rem] overflow-hidden border border-white/5">
                 <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Trophy size={16} className="text-blue-500" />
                  <span className="text-[10px] uppercase font-bold text-blue-500 tracking-[0.2em]">{project.result}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light">
                  Focused on creating a high-performance interface with complex data visualizations.
                </p>
                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full text-xs font-bold hover:bg-white hover:text-black transition-all border border-white/10"><Github size={16}/> Source</a>
                  <a href={project.demo} className="flex items-center gap-2 px-6 py-3 bg-blue-600 rounded-full text-xs font-bold hover:bg-blue-700 transition-all"><ExternalLink size={16}/> Live Demo</a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;