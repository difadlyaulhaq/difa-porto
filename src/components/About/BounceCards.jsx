import { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { gsap } from 'gsap';
import { X, Calendar, MapPin, Briefcase, GraduationCap, Users, Trophy, Award } from 'lucide-react';
import { typeConfig } from './experienceData.js';
import Carousel from './Carousel';

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
        className="modal-content bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl md:rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-white/10"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative p-5 md:p-8 border-b border-white/10 shrink-0">
          <div className="flex items-start gap-4 md:gap-6">
            <div className={`w-14 h-14 md:w-20 md:h-20 rounded-xl md:rounded-2xl ${config.bgColor} border ${config.borderColor} flex items-center justify-center p-3 md:p-4 shrink-0`}>
              <img 
                src={experience.logo}
                alt={experience.title}
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className={`inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${config.color} rounded-full mb-2 md:mb-3`}>
                <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" />
                <span className="text-white text-xs md:text-sm font-semibold">{config.label}</span>
              </div>
              
              <h2 className="text-xl md:text-3xl font-bold text-white mb-1 md:mb-2 truncate">
                {experience.title}
              </h2>
              
              <p className="text-lg md:text-xl text-cyan-400 mb-2 md:mb-3 truncate">
                {experience.role}
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">{experience.period}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="text-xs md:text-sm">{experience.location}</span>
                </div>
              </div>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors shrink-0"
            >
              <X className="w-5 h-5 md:w-6 md:h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-5 md:p-8 overflow-y-auto flex-1 space-y-6">
          {/* Activity Image Banner */}
          <div className="w-full h-40 md:h-64 rounded-xl overflow-hidden mb-6 shadow-lg border border-white/10 relative bg-zinc-950 shrink-0">
            {Array.isArray(experience.image) ? (
                <Carousel 
                    items={experience.image} 
                    baseWidth={600} 
                    autoplay={true}
                    loop={true}
                    padding={0}
                />
            ) : (
                <img 
                src={experience.image} 
                alt="Activity" 
                className="w-full h-full object-cover"
                />
            )}
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
 * @param {number} [props.cardWidth]
 * @param {number} [props.cardHeight]
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
  cardWidth = 200,
  cardHeight = 200,
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scaleFactor = isMobile ? 0.4 : 1;

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

  const getScaledTransform = (transformStr) => {
    if (!isMobile) return transformStr;
    // Scale translate values
    return transformStr.replace(/translate\(([-0-9.]+)px\)/g, (_, val) => {
        return `translate(${parseFloat(val) * scaleFactor}px)`;
    });
  };

  const getPushedTransform = (baseTransform, offsetX) => {
    const translateRegex = /translate\(([-0-9.]+)px\)/;
    const match = baseTransform.match(translateRegex);
    if (match) {
      const currentX = parseFloat(match[1]);
      const newX = currentX + offsetX * scaleFactor;
      return baseTransform.replace(translateRegex, `translate(${newX}px)`);
    } else {
      return baseTransform === 'none' ? `translate(${offsetX * scaleFactor}px)` : `${baseTransform} translate(${offsetX * scaleFactor}px)`;
    }
  };

  const pushSiblings = hoveredIdx => {
    if (!enableHover) return;

    items.forEach((_, i) => {
      const selector = `.card-${i}`;
      gsap.killTweensOf(selector);

      const baseTransform = getScaledTransform(transformStyles[i] || 'none');

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

      const baseTransform = getScaledTransform(transformStyles[i] || 'none');
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
          width: isMobile ? 'calc(100% - 1rem)' : containerWidth * scaleFactor,
          height: containerHeight * scaleFactor,
          maxWidth: '100vw',
          marginRight: isMobile ? '0.5rem' : 'auto',
          marginLeft: isMobile ? '0.5rem' : 'auto'
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`card card-${idx} absolute border-4 md:border-8 border-white rounded-[20px] md:rounded-[30px] overflow-hidden cursor-pointer hover:border-cyan-400/50 transition-colors duration-300 bg-zinc-900`}
            style={{
              width: cardWidth * scaleFactor,
              height: cardHeight * scaleFactor,
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
              transform: getScaledTransform(transformStyles[idx] || 'none')
            }}
            onMouseEnter={() => pushSiblings(idx)}
            onMouseLeave={resetSiblings}
            onClick={() => setSelectedItem(item)}
          >
            {Array.isArray(item.image) ? (
                <div className="w-full h-full pointer-events-none">
                    <Carousel 
                        items={item.image} 
                        baseWidth={cardWidth * scaleFactor} 
                        autoplay={true}
                        loop={true}
                        showDots={false}
                        padding={0}
                    />
                </div>
            ) : (
                <img className="w-full h-full object-cover" src={item.image} alt={item.title || `card-${idx}`} />
            )}
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