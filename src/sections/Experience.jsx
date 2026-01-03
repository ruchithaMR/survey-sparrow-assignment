import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Studio",
      date: "2025 - Present",
      desc: "Developing high-end React interfaces and optimizing web performance."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-white tracking-tighter">Professional <span className="text-blue-500 italic">History</span></h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 border-l border-white/10 group"
            >
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <span className="text-xs font-mono text-blue-500">{exp.date}</span>
              </div>
              <p className="text-gray-500 text-sm mb-4 font-medium">{exp.company}</p>
              <p className="text-gray-400 text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;