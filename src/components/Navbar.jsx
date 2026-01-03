import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' }, 
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled || isOpen
            ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        {/* Progress Bar (Higher contrast for better visibility) */}
        <div 
          className="absolute bottom-0 left-0 h-[1.5px] bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        />

        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Brand - Added subtle scale effect */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black tracking-tighter text-white cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            PORTFOLIO<span className="text-blue-500 group-hover:animate-pulse">.</span>
          </motion.div>

          {/* Desktop Links - Improved Spacing & Hover */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="relative text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-white transition-all duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Improved Interaction */}
          <div className="hidden md:block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="flex items-center gap-2 px-6 py-2.5 text-[10px] uppercase tracking-widest font-black bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
            >
              Let's Talk
              <ArrowUpRight size={14} />
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} exit={{ rotate: 90 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} exit={{ rotate: -90 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Menu Overlay - More sophisticated animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black/95 backdrop-blur-2xl overflow-hidden fixed top-0 left-0 w-full z-[-1]"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-black text-white hover:text-blue-500 tracking-tighter"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={scrollToContact}
                  className="mt-4 px-10 py-4 bg-white text-black font-black uppercase tracking-widest text-xs rounded-full"
                >
                  Contact Me
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;