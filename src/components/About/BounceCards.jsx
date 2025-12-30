import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { X, Calendar, MapPin, Briefcase, GraduationCap, Users, Trophy, Award } from 'lucide-react';
import { typeConfig } from './experienceData.js';

const iconMap = {
  Briefcase: Briefcase,
  GraduationCap: GraduationCap,
  Users: Users,
  Trophy: Trophy
};

function ExperienceModal({ experience, onClose }) {
  const modalRef = useRef(null);
  const config = typeConfig[experience.type] || typeConfig.work; // Fallback
  const Icon = iconMap[config.icon] || Award;

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

  if (typeof document === 'undefined') return null;

  return createPortal(
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
                src={experience.logo}
                alt={experience.title}
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
          {/* Activity Image Banner */}
          <div className="w-full h-48 md:h-64 rounded-xl overflow-hidden mb-6 shadow-lg border border-white/10">
            <img 
              src={experience.image} 
              alt="Activity" 
              className="w-full h-full object-cover"
            />
          </div>

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
              {experience.highlights && experience.highlights.map((highlight, idx) => (
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
          
          {experience.skills && (
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
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

/**
 * @param {Object} props
 * @param {string} [props.className]
 * @param {Array} [props.items]
 * @param {number} [props.containerWidth]
 * @param {number} [props.containerHeight]
 * @param {number} [props.animationDelay]
 * @param {number} [props.animationStagger]
 * @param {string} [props.easeType]
 * @param {string[]} [props.transformStyles]
 * @param {boolean} [props.enableHover]
 */
export default function BounceCards({
  className = '',
  items = [],
  containerWidth = 400,
  containerHeight = 400,
  animationDelay = 0.5,
  animationStagger = 0.06,
  easeType = 'elastic.out(1, 0.8)',
  transformStyles = [
    'rotate(10deg) translate(-170px)',
    'rotate(5deg) translate(-85px)',
    'rotate(-3deg)',
    'rotate(-10deg) translate(85px)',
    'rotate(2deg) translate(170px)'
  ],
  enableHover = false
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      '.card',
      { scale: 0 },
      {
        scale: 1,
        stagger: animationStagger,
        ease: easeType,
        delay: animationDelay
      }
    );
  }, [animationDelay, animationStagger, easeType]);

  const getNoRotationTransform = transformStr => {
    const hasRotate = /rotate\([\s\S]*?\)/.test(transformStr);
    if (hasRotate) {
      return transformStr.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)');
    } else if (transformStr === 'none') {
      return 'rotate(0deg)';
    } else {
      return `${transformStr} rotate(0deg)`;
    }
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX}px)` : `${baseTransform} translate(${offsetX}px)`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover) return;

    items.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';

      if (i === hoveredIdx) {
        const noRotation = getNoRotationTransform(baseTransform);
        gsap.to(selector, {
          transform: noRotation,
          duration: 0.4,
          ease: 'back.out(1.4)',
          overwrite: 'auto'
        });
      } else {
        const offsetX = i < hoveredIdx ? -160 : 160;
        const pushedTransform = getPushedTransform(baseTransform, offsetX);

        const distance = Math.abs(hoveredIdx - i);
        const delay = distance * 0.05;

        gsap.to(selector, {
          transform: pushedTransform,
          duration: 0.4,
          ease: 'back.out(1.4)',
          delay,
          overwrite: 'auto'
        });
      }
    });
  };

  const resetSiblings = () => {
    if (!enableHover) return;

    items.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = transformStyles[i] || 'none';
      gsap.to(selector, {
        transform: baseTransform,
        duration: 0.4,
        ease: 'back.out(1.4)',
        overwrite: 'auto'
      });
    });
  };

  return (
    <>
      <div
        className={`relative flex items-center justify-center mx-auto ${className}`}
        style={{
          width: containerWidth,
          height: containerHeight
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`card card-${idx} absolute w-[200px] aspect-square border-8 border-white rounded-[30px] overflow-hidden cursor-pointer hover:border-cyan-400/50 transition-colors duration-300`}
            style={{
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transform: transformStyles[idx] || 'none'
            }}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
            onClick={() => setSelectedItem(item)}
          >
            <img className="w-full h-full object-cover" src={item.image} alt={item.title || `card-${idx}`} />
          </div>
        ))}
      </div>
      
      {selectedItem && (
        <ExperienceModal 
          experience={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </>
  );
}