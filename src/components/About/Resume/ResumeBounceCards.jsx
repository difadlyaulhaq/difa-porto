import React, { useState } from 'react';
import BounceCards from './BounceCards';
import { motion, AnimatePresence } from 'framer-motion';

const ResumeBounceCards = ({ resume, awards = [] }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Combine resume and awards for display if needed, or just use resume for now
  // For this example, we'll map resume items to the format expected by BounceCards
  // We'll use the logo URL as the image source
  const items = [...resume, ...awards];
  const images = items.map(item => item.logoUrl);

  const handleCardClick = (index) => {
    setSelectedItem(items[index]);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const transformStyles = items.map((_, i) => {
      const angle = (i - (items.length - 1) / 2) * 5;
      const xOffset = (i - (items.length - 1) / 2) * 60;
      return `rotate(${angle}deg) translate(${xOffset}px)`;
  });

  return (
    <div className="w-full relative flex flex-col items-center justify-center py-20">
      <BounceCards
        className="custom-bounceCards"
        images={images}
        containerWidth={800} // Adjusted for responsiveness in parent
        containerHeight={250}
        animationDelay={0.1}
        animationStagger={0.08}
        easeType="elastic.out(1, 0.7)"
        transformStyles={transformStyles}
        enableHover={true}
        onCardClick={handleCardClick}
      />

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 border border-white/10 rounded-2xl p-6 max-w-lg w-full shadow-2xl relative overflow-hidden"
            >
              {/* Decorative background element */}
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
               <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl pointer-events-none"></div>


              <div className="relative z-10 flex flex-col items-center text-center">
                 <div className="w-24 h-24 mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-4 shadow-lg">
                    <img 
                        src={selectedItem.logoUrl} 
                        alt={selectedItem.company || selectedItem.title} 
                        className="w-full h-full object-contain"
                    />
                 </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                    {selectedItem.company || selectedItem.title}
                </h3>
                
                <p className="text-cyan-400 font-medium text-lg mb-4">
                     {selectedItem.title || selectedItem.role}
                </p>

                {selectedItem.start && (
                    <div className="text-sm text-zinc-400 font-mono mb-6 bg-zinc-950/50 px-3 py-1 rounded-full border border-white/5">
                    {typeof selectedItem.start === 'string' ? selectedItem.start : selectedItem.start.label} 
                    {' — '} 
                    {typeof selectedItem.end === 'string' ? selectedItem.end : selectedItem.end.label}
                    </div>
                )}
                
                <p className="text-zinc-300 leading-relaxed text-sm">
                    {selectedItem.description || "Detailed experience and achievements will be displayed here. Highlighting key contributions, technologies used, and impact."}
                </p>

                 {selectedItem.tags && (
                    <div className="flex flex-wrap justify-center gap-2 mt-6">
                        {selectedItem.tags.map((tag, i) => (
                             <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 text-white/70 border border-white/5">
                                 {tag}
                             </span>
                        ))}
                    </div>
                 )}
              </div>

              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-zinc-500 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ResumeBounceCards;
