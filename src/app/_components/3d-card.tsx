'use client'
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

interface Card3DProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
}

const Card3D = ({ title, subtitle, imageUrl, href }: Card3DProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const card = cardRef.current;
    if (!card) return;

    const container = card.querySelector('.card-3d-container') as HTMLDivElement;
    const image = card.querySelector('.card-3d-image') as HTMLDivElement;
    const titleEl = card.querySelector('.card-3d-title') as HTMLHeadingElement;
    const subtitleEl = card.querySelector('.card-3d-subtitle') as HTMLParagraphElement;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY, currentTarget } = e;
      if (!currentTarget) return;
      const { left, top, width, height } = (currentTarget as HTMLElement).getBoundingClientRect();
      const x = clientX - left;
      const y = clientY - top;
      const rotateX = gsap.utils.mapRange(0, height, -10, 10, y);
      const rotateY = gsap.utils.mapRange(0, width, 10, -10, x);

      gsap.to(container, {
        duration: 0.7,
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 1000,
        ease: 'power2.out',
      });

      gsap.to(image, {
        duration: 0.7,
        x: rotateY / 1.5,
        y: -rotateX / 1.5,
        ease: 'power2.out',
      });

      gsap.to(titleEl, {
        duration: 0.7,
        x: rotateY / 2,
        y: -rotateX / 2,
        ease: 'power2.out',
      });

      gsap.to(subtitleEl, {
        duration: 0.7,
        x: rotateY / 3,
        y: -rotateX / 3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(container, { duration: 0.7, rotationX: 0, rotationY: 0, ease: 'power2.out' });
      gsap.to([image, titleEl, subtitleEl], { duration: 0.7, x: 0, y: 0, ease: 'power2.out' });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isClient]);

  return (
    <a href={href} className="block w-full">
      <div ref={cardRef} className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-900/50 p-8" style={{ perspective: '1000px' }}>
        <div className="card-3d-container w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          <div className="absolute inset-0 card-3d-image">
            <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="opacity-30"/>
          </div>
          <div className="relative z-10 flex flex-col justify-end h-full">
            <h3 className="text-2xl font-bold text-white card-3d-title">{title}</h3>
            <p className="text-lg text-gray-400 card-3d-subtitle">{subtitle}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card3D;
