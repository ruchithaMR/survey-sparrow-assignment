import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", title: "Web Architecture", size: "md:col-span-2 md:row-span-1" },
    { url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c", title: "Clean Code", size: "md:col-span-1 md:row-span-2" },
    { url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159", title: "System Design", size: "md:col-span-1" },
    { url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97", title: "UX Research", size: "md:col-span-1" },
    { url: "https://images.unsplash.com/photo-1550439062-609e1531270e", title: "Creative UI", size: "md:col-span-2" },
    { url: "https://images.unsplash.com/photo-1522252234503-e356532cafd5", title: "Agile Flow", size: "md:col-span-1" },
  ];

  return (
    <section id="gallery" className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
             <Camera className="text-blue-500" size={18} />
             <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-[10px]">Visual Journey</span>
          </div>
          <h2 className="text-6xl font-black text-white mb-6 tracking-tighter">
            Creative <span className="text-blue-500 italic">Vault.</span>
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed font-light text-lg">
            A curated collection of environments and concepts that fuel my digital craftsmanship.
          </p>
        </motion.div>

        {/* Dynamic Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => setSelectedImage(img)}
              className={`relative group overflow-hidden rounded-[2.5rem] bg-[#111] cursor-zoom-in border border-white/5 shadow-2xl ${img.size}`}
            >
              <motion.img
                src={img.url}
                alt={img.title}
                whileHover={{ scale: 1.1 }}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out opacity-60 group-hover:opacity-100"
              />
              
              {/* Premium Interactive Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-10">
                <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   whileHover={{ y: 0, opacity: 1 }}
                   transition={{ duration: 0.4 }}
                >
                  <ZoomIn className="text-blue-500 mb-4" size={24} />
                  <p className="text-white font-black tracking-[0.2em] uppercase text-xs">
                    {img.title}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-16 bg-black/98 backdrop-blur-2xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button 
              className="absolute top-10 right-10 text-white/50 hover:text-white transition-colors"
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={48} strokeWidth={1} />
            </motion.button>
            
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[75vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(59,130,246,0.15)]"
              />
              
              <div className="mt-10 text-center">
                <h3 className="text-white text-3xl font-black tracking-[0.2em] uppercase mb-2">
                  {selectedImage.title}
                </h3>
                <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;