import React from 'react';
import { motion } from 'framer-motion'; // Removed the broken useMouseMoveUpdate import
import { Github, Linkedin, Mail, GraduationCap, MapPin, School, FileText, Sparkles } from 'lucide-react';

const About = () => {
  const info = {
    name: "Ruchitha M.R.",
    college: "PES University",
    degree: "Bachelor of Science in IS",
    location: "Bengaluru, India",
    email: "Ruchitha@example.com",
    linkedin: "https://www.linkedin.com/in/ruchitha-m-r/",
    github: "https://github.com/ruchithaMR"
  };

  return (
    <section id="about" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Animated Tilting Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center cursor-pointer"
            /* 3D Tilt Effect - Perspective is handled by parent */
            style={{ perspective: 1000 }}
            whileHover={{ 
              rotateY: 15, 
              rotateX: -5, 
              scale: 1.05,
              transition: { duration: 0.4 }
            }}
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
            
            <img 
              src="https://static.vecteezy.com/system/resources/previews/011/153/360/original/3d-web-developer-working-on-project-illustration-png.png" 
              alt="3D Developer" 
              className="w-full max-w-[450px] h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
            />
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
               <Sparkles className="text-blue-500" size={18} />
               <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px]">Information</span>
            </div>
            
            <h2 className="text-6xl font-black text-white mb-8 tracking-tighter leading-none">
              About <span className="text-blue-500 italic">Me</span>
            </h2>

            <div className="space-y-6 mb-10 text-gray-400 text-lg leading-relaxed font-light">
              <p>
                Hello! I'm <span className="text-white font-medium">Ruchitha</span>, a developer who enjoys turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                My focus is on <span className="text-white">React ecosystems</span> and crafting seamless user interfaces that feel alive through motion and performance.
              </p>
            </div>
            
            {/* Identity Card */}
            <div className="bg-[#111] p-10 rounded-[2.5rem] border border-white/5 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="space-y-8 mb-10">
                <div className="flex items-center gap-5">
                  <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500"><School size={24} /></div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black mb-1">Education</p>
                    <p className="text-white text-lg font-bold">{info.college}</p>
                    <p className="text-gray-400 text-sm font-medium">{info.degree}</p>
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-8 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                <div className="flex gap-5">
                  <a href={info.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-blue-500 transition-all hover:scale-110"><Linkedin size={20} /></a>
                  <a href={info.github} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-white transition-all hover:scale-110"><Github size={20} /></a>
                  <a href={`mailto:${info.email}`} className="p-3 bg-white/5 rounded-xl text-gray-400 hover:text-red-400 transition-all hover:scale-110"><Mail size={20} /></a>
                </div>

                <a 
                 href="/resume.pdf" 
                 download="resume.pdf"
                 className="flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white text-[11px] uppercase tracking-widest font-black rounded-2xl transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                >
                 <FileText size={18} />
                 Download CV
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;