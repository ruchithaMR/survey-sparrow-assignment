import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] bg-black flex items-center justify-center"
        >
          <div className="overflow-hidden">
            <motion.h2 
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              className="text-white text-xl font-bold tracking-[0.5em] uppercase"
            >
              Initializing<span className="text-blue-500">...</span>
            </motion.h2>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;