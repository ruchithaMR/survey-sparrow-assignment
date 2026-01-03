import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';

function App() {
  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-blue-500/30 selection:text-white">
      {/* 1. Global Overlay Components (High Z-Index) */}
      <Preloader />
      <CustomCursor />
      <Navbar />
      <BackToTop />
      
      {/* 2. Page Content in Structural Order */}
      <div className="relative">
        <Hero />
        
        {/* Sections wrapped for consistent spacing and scroll reveal logic */}
        <div className="space-y-0"> 
          <About />
          <Skills />
          <Experience /> 
          <Projects />
          <Gallery />
          <Contact />
        </div>
      </div>

      {/* 3. Global Footer (Optional) */}
      <footer className="py-10 text-center border-t border-white/5 bg-[#0a0a0a]">
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-600 font-bold">
          © 2026 Developed by Sowmya K.S.
        </p>
      </footer>
    </main>
  );
}

export default App;