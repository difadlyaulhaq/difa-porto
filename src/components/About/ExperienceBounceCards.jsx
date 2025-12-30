import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { X, Award, Briefcase, GraduationCap, Users, Calendar, MapPin, Trophy } from 'lucide-react';
import { experiences, typeConfig } from './experienceData.js';

const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Users: Users,
  Trophy: Trophy
};

function ExperienceCard({ experience, onClick, index }) {
  const config = typeConfig[experience.type];
  const Icon = iconMap[config.icon] || Award;
  
  return (
    <div
      onClick={() => onClick(experience)}
      className={`exp-card exp-card-${index} group cursor-pointer relative w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden transition-all duration-300`}
      style={{
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Background with icon/logo */}
      <div className="absolute inset-0 bg-zinc-900">
        <div className="w-full h-full flex items-center justify-center p-8">
          <img 
            src={experience.image} 
            alt={experience.title}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </div>
      
      {/* Gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
      
      {/* Type badge */}
      <div className={`absolute top-3 right-3 p-1.5 ${config.bgColor} backdrop-blur-md rounded-full border border-white/20 z-10`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      
      {/* Compact info at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
        <h3 className="text-white font-bold text-[10px] leading-tight mb-0.5 line-clamp-1 group-hover:text-cyan-400 transition-colors">
          {experience.title}
        </h3>
        <p className="text-white/70 text-[9px] line-clamp-1">
          {experience.role}
        </p>
      </div>
    </div>
  );
}

function ExperienceModal({ experience, onClose }) {
  const config = typeConfig[experience.type];
  const Icon = iconMap[config.icon] || Award;
  const modalRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.modal-content',
        { scale: 0.8, opacity: 0, y: 50 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'back.out(1.7)' }
      );
      
      gsap.fromTo('.modal-item',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );
    }, modalRef);

    return () => ctx.revert();
  }, []);
  
  if (!experience) return null;
  
  return (
    <div 
      ref={modalRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div 
        className="modal-content bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-8 border-b border-white/10">
          <div className="flex items-start gap-6">
            <div className={`w-20 h-20 rounded-2xl ${config.bgColor} border ${config.borderColor} flex items-center justify-center p-4 shrink-0`}>
              <img 
                src={experience.image}
                alt={experience.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${config.color} rounded-full mb-3`}>
                <Icon className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">{config.label}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">
                {experience.title}
              </h2>
              
              <p className="text-xl text-cyan-400 mb-3">
                {experience.role}
              </p>
              
              <div className="flex flex-wrap gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{experience.location}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-8 overflow-y-auto max-h-[calc(90vh-16rem)] space-y-6">
          <div className="modal-item">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></div>
              Description
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {experience.description}
            </p>
          </div>
          
          <div className="modal-item">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-purple-400 to-pink-500 rounded-full"></div>
              Key Highlights
            </h3>
            <ul className="space-y-2">
              {experience.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300">
                  <span className="text-cyan-400 mt-1 text-lg">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {experience.achievements && (
            <div className="modal-item">
              <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                <div className="w-1 h-5 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full"></div>
                Notable Achievements
              </h3>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <Trophy className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="modal-item">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-green-400 to-emerald-500 rounded-full"></div>
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-4 py-2 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/10 hover:border-cyan-400/30 transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BounceCardsExperience({ experiences: propExperiences, enableHover = true }) {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const containerRef = useRef(null);
  
  // Use propExperiences if provided, fallback to default (though we prefer props now)
  const items = propExperiences || experiences;

  const transformStyles = items.map((_, i) => {
    const totalCards = items.length;
    const middleIndex = (totalCards - 1) / 2;
    const offset = i - middleIndex;
    const angle = offset * 4;
    
    // Original pixel-based translation
    const translateX = offset * 70; 
    return `translate(${translateX}px) rotate(${angle}deg)`;
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.experience-card-wrapper',
        { scale: 0, rotation: 45 },
        {
          scale: 1,
          rotation: 0,
          stagger: 0.08,
          ease: 'elastic.out(1, 0.8)',
          delay: 0.3
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [items.length]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    }
    return `${transformStr} rotate(0deg)`;
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    // Regex untuk match translate dengan pixel
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    }
    
    // Fallback untuk transform 'none'
    const hasTranslate = baseTransform.includes('translate');
    if (!hasTranslate && baseTransform !== 'none') {
      return `${baseTransform} translate(${offsetX}px)`;
    } else if (baseTransform === 'none') {
      return `translate(${offsetX}px)`;
    }
    
    return baseTransform;
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover) return;

    items.forEach((_, i) => {
      const selector = `.experience-card-wrapper-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: `${noRotation} scale(1.1)`,
          zIndex: 20,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        // Aligned with README.md offsets
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);
        
        gsap.to(selector, {
          transform: pushedTransform,
          zIndex: 1,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    items.forEach((_, i) => {
      const selector = `.experience-card-wrapper-${i}`;
      gsap.killTweensOf(selector);
      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        zIndex: 1,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <div className="min-h-[500px] bg-transparent py-4 px-4" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        
        {/* BounceCards Container */}
        <div className="flex justify-center items-center min-h-[400px]">
          <div
            className="relative flex items-center justify-center"
            style={{
              width: Math.min(1000, typeof window !== 'undefined' ? window.innerWidth - 100 : 1000),
              height: 500
            }}
          >
            {items.map((exp, idx) => (
              <div
                key={exp.id}
                className={`experience-card-wrapper experience-card-wrapper-${idx} absolute`}
                style={{
                  transform: transformStyles[idx] || 'none'
                }}
                onMouseEnter={() => pushSiblings(idx)}
                onMouseLeave={resetSiblings}
              >
                <ExperienceCard 
                  experience={exp}
                  onClick={setSelectedExperience}
                  index={idx}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {Object.entries(typeConfig).map(([type, config]) => {
            const Icon = iconMap[config.icon] || Award;
            return (
              <div key={type} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full">
                <Icon className="w-4 h-4 text-white" />
                <span className="text-sm text-gray-300">{config.label}</span>
              </div>
            );
          })}
        </div>

        {/* Info text */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Hover to interact • Click to view full details
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
}