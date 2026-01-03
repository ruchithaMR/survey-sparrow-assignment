import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* The Dot */}
      <motion.div 
        animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
        transition={{ type: 'spring', damping: 30, stiffness: 250, mass: 0.5 }}
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full z-[9999] pointer-events-none"
      />
      {/* The Outer Ring */}
      <motion.div 
        animate={{ x: mousePos.x - 18, y: mousePos.y - 18 }}
        transition={{ type: 'spring', damping: 20, stiffness: 150, mass: 0.8 }}
        className="fixed top-0 left-0 w-9 h-9 border border-blue-500/50 rounded-full z-[9998] pointer-events-none"
      />
    </>
  );
};

export default CustomCursor;