import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { X, Calendar, MapPin, Trophy, Award } from 'lucide-react';
import { typeConfig } from './experienceData.js';
import Carousel from './Carousel';

const iconMap = {
  Briefcase: Award, // Fallback icons handled in mapping
  GraduationCap: Award,
  Users: Award,
  Trophy: Trophy
};

export default function ExperienceModal({ experience, onClose }) {
  const modalRef = useRef(null);
  const config = typeConfig[experience.type] || typeConfig.work;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.modal-content',
        { scale: 0.9, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }
      );
      
      gsap.fromTo('.modal-item',
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.1 }
      );
    }, modalRef);

    return () => ctx.revert();
  }, []);

  if (!experience || typeof document === 'undefined') return null;

  return createPortal(
    <div
      ref={modalRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="modal-content bg-[#0a0a0c] rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-white/5"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-6 md:p-10 border-b border-white/5 shrink-0 bg-gradient-to-br from-white/[0.02] to-transparent">
          <div className="flex items-start gap-6 md:gap-8">
            <div className={`w-16 h-16 md:w-24 md:h-24 rounded-2xl ${config.bgColor} border ${config.borderColor} flex items-center justify-center p-4 shadow-2xl shrink-0`}>
              <img src={experience.logo} alt={experience.title} className="w-full h-full object-contain" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${config.color} rounded-full mb-4`}>
                <span className="text-white text-[10px] font-bold uppercase tracking-widest">{config.label}</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 leading-tight">
                {experience.title}
              </h2>
              
              <p className="text-lg md:text-2xl text-cyan-400 font-medium mb-4">
                {experience.role}
              </p>
              
              <div className="flex flex-wrap gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm font-medium">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-500" />
                  <span className="text-sm font-medium">{experience.location}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-3 hover:bg-white/5 rounded-full transition-all group shrink-0"
            >
              <X className="w-6 h-6 text-gray-500 group-hover:text-white" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6 md:p-10 overflow-y-auto flex-1 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Media & Details */}
            <div className="lg:col-span-7 space-y-10">
              {/* Media Banner */}
              <div className="modal-item w-full rounded-2xl overflow-hidden shadow-2xl border border-white/5 bg-zinc-950 aspect-video flex items-center justify-center">
                {Array.isArray(experience.image) ? (
                    <Carousel 
                        items={experience.image} 
                        baseWidth={800} 
                        autoplay={true}
                        loop={true}
                        padding={0}
                    />
                ) : (
                    <img src={experience.image} alt="Activity" className="w-full h-full object-cover" />
                )}
              </div>

              <div className="modal-item space-y-4">
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Description</h3>
                <p className="text-gray-300 text-lg leading-relaxed font-light">
                  {experience.description}
                </p>
              </div>

              <div className="modal-item space-y-6">
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Highlights</h3>
                <div className="grid gap-4">
                  {experience.highlights && experience.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 items-start group hover:bg-white/[0.04] transition-colors">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                      <span className="text-gray-300 leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Achievements & Skills */}
            <div className="lg:col-span-5 space-y-10">
              {experience.achievements && (
                <div className="modal-item space-y-6">
                  <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Achievements</h3>
                  <div className="space-y-4">
                    {experience.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gradient-to-br from-yellow-500/10 to-transparent border border-yellow-500/10 items-start">
                        <Trophy className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                        <span className="text-gray-200 font-medium text-sm leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="modal-item space-y-6">
                <h3 className="text-sm font-bold text-white/40 uppercase tracking-[0.3em]">Skills & Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {experience.skills && experience.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold text-white/70 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default uppercase tracking-widest"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
