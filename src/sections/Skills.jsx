import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Smartphone, Globe, Cpu, Palette } from 'lucide-react';

const Skills = () => {
  const services = [
    { title: "Frontend Dev", desc: "React, Next.js, Tailwind", icon: <Layout />, size: "md:col-span-2" },
    { title: "UI/UX Design", desc: "Figma & Prototyping", icon: <Palette />, size: "md:col-span-1" },
    { title: "Mobile First", desc: "Responsive Solutions", icon: <Smartphone />, size: "md:col-span-1" },
    { title: "Clean Code", desc: "Performance Optimized", icon: <Code2 />, size: "md:col-span-2" },
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 tracking-tighter">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col justify-between group hover:bg-white/10 transition-all ${item.size}`}
            >
              <div className="text-blue-500 mb-8 p-3 bg-blue-500/10 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;