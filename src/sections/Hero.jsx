import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // These define HOW it moves
  const containerVars = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Delay between each line
        delayChildren: 0.8,   // Wait for Preloader to finish
      }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1] // Premium "Expo" ease
      } 
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center bg-[#0a0a0a] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div 
        variants={containerVars}
        initial="initial"
        animate="animate"
        className="text-center z-10 px-6"
      >
        <motion.span variants={itemVars} className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">
           
        </motion.span>
        
        <motion.h1 variants={itemVars} className="text-7xl md:text-9xl font-black tracking-tighter text-white mb-8 leading-none">
          Design <span className="text-gray-500 font-light italic">&</span> <br /> 
          <span className="bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">Code.</span>
        </motion.h1>

        <motion.p variants={itemVars} className="max-w-md mx-auto text-gray-400 text-lg mb-12 font-light leading-relaxed">
          Building high-end digital interfaces with <br/> 
          <span className="text-white">motion, performance, and intent.</span>
        </motion.p>

        <motion.div variants={itemVars}>
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-12 py-5 bg-white text-black font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-blue-600 hover:text-white transition-all duration-500"
          >
            Explore My Work
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;