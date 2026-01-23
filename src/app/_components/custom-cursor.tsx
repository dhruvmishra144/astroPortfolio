'use client'
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [isPointingDevice, setIsPointingDevice] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointingDevice(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsPointingDevice(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!isClient || !isPointingDevice) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;
    let isHovering = false;

    gsap.set(cursor, { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.to(cursor, { opacity: 1, duration: 0.5, delay: 0.5 });
    document.body.classList.add('custom-cursor-active');

    const animateCursor = () => {
      if (cursor) {
        gsap.to(cursor, {
          duration: 0.2,
          x: mouseX,
          y: mouseY,
          ease: 'power2.out',
        });
      }
      requestAnimationFrame(animateCursor);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseEnter = () => {
      if (!isHovering) {
        isHovering = true;
        gsap.to(cursor, { 
          duration: 0.3,
          scale: 2.5,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = () => {
      if (isHovering) {
        isHovering = false;
        gsap.to(cursor, { 
          duration: 0.3, 
          scale: 1,
          ease: 'power2.out' 
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    
    animateCursor();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.querySelectorAll('a, button').forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      document.body.classList.remove('custom-cursor-active');
    };
  }, [isClient, isPointingDevice]);

  if (!isClient || !isPointingDevice) {
    return null;
  }

  return (
    <div 
      ref={cursorRef} 
      className="fixed top-0 left-0 w-6 h-6 bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
    />
  );
};

export default CustomCursor;
