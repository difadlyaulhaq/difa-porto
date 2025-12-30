import { useEffect, useState } from 'react';
import { gsap } from 'gsap';

export default function BounceCards({
  className = '',
  images = [],
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
  enableHover = false,
  onCardClick
}) {
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

    images.forEach((_, i) => {
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

    images.forEach((_, i) => {
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
      {images.map((src, idx) => (
        <div
          key={idx}
          className={`card card-${idx} absolute border-4 md:border-8 border-white rounded-[20px] md:rounded-[30px] overflow-hidden cursor-pointer bg-zinc-900 shadow-lg transition-colors duration-300`}
          style={{
            width: 200 * scaleFactor,
            height: 200 * scaleFactor,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transform: getScaledTransform(transformStyles[idx] || 'none')
          }}
          onMouseEnter={() => pushSiblings(idx)}
          onMouseLeave={resetSiblings}
          onClick={() => onCardClick?.(idx)}
        >
          <img className="w-full h-full object-cover" src={src} alt={`card-${idx}`} />
        </div>
      ))}
    </div>
  );
}
