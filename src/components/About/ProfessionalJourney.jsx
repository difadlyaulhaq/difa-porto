import React, { useState } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap, Users, Trophy, Award, ChevronRight } from 'lucide-react';
import { typeConfig } from './experienceData.js';
import ExperienceModal from './ExperienceModal'; // We'll extract this

const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Users: Users,
  Trophy: Trophy
};

export default function ProfessionalJourney({ experiences }) {
  const [selectedExperience, setSelectedExperience] = useState(null);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-12">
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent hidden md:block" />

        <div className="space-y-12 md:space-y-24">
          {experiences.map((exp, index) => {
            const config = typeConfig[exp.type] || typeConfig.work;
            const Icon = iconMap[config.icon] || Award;
            const isEven = index % 2 === 0;

            return (
              <div key={exp.id} className="relative flex flex-col md:flex-row items-center">
                {/* Timeline Dot */}
                <div className="absolute left-[-8px] md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-cyan-500 z-10 hidden md:block" />

                {/* Content Card */}
                <div className={`w-full md:w-[45%] ${isEven ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
                  <div 
                    onClick={() => setSelectedExperience(exp)}
                    className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    {/* Icon/Logo Float */}
                    <div className={`absolute -top-6 ${isEven ? 'md:-right-6 left-6' : 'md:-left-6 left-6'} w-12 h-12 rounded-xl ${config.bgColor} border ${config.borderColor} flex items-center justify-center p-2 shadow-xl z-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      <img src={exp.logo} alt={exp.title} className="w-full h-full object-contain" />
                    </div>

                    <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                      <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${config.color} rounded-full mb-4 text-xs font-bold text-white uppercase tracking-wider`}>
                        <Icon className="w-3 h-3" />
                        {config.label}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-cyan-400 font-medium mb-3">{exp.role}</p>
                      
                      <div className={`flex flex-wrap gap-4 text-gray-400 text-sm mb-4 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>

                      <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        {exp.skills.slice(0, 3).map((skill, i) => (
                          <span key={i} className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded-md text-gray-300 uppercase tracking-tighter">
                            {skill}
                          </span>
                        ))}
                        {exp.skills.length > 3 && (
                          <span className="px-2 py-1 text-[10px] bg-white/5 border border-white/10 rounded-md text-gray-500">
                            +{exp.skills.length - 3} MORE
                          </span>
                        )}
                      </div>
                      
                      <div className={`mt-6 flex items-center gap-1 text-xs font-bold text-cyan-500 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <span>READ FULL DETAILS</span>
                        <ChevronRight className={`w-4 h-4 ${isEven ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Date/Period on other side (Desktop only) */}
                <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 ${isEven ? 'left-[55%]' : 'right-[55%]'} text-gray-500 font-mono text-sm tracking-widest opacity-50`}>
                    {exp.period.split('-')[0].trim()}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedExperience && (
        <ExperienceModal 
          experience={selectedExperience} 
          onClose={() => setSelectedExperience(null)} 
        />
      )}
    </div>
  );
}
