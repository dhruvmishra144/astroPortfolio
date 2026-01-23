
import React, { useRef, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import gsap from 'gsap';

interface Card3DProps {
  title: string;
  subtitle: string;
  imageUrl: StaticImageData;
  href: string;
}

const Card3D: React.FC<Card3DProps> = ({ title, subtitle, imageUrl, href }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (card) {
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = clientX - left;
        const y = clientY - top;
        const rotateX = gsap.utils.mapRange(0, height, -15, 15, y);
        const rotateY = gsap.utils.mapRange(0, width, 15, -15, x);

        gsap.to(card, {
          duration: 0.7,
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
          ease: 'power2.out',
        });
        if (image) {
          gsap.to(image, {
            duration: 0.7,
            x: rotateY / 2,
            y: -rotateX / 2,
            ease: 'power2.out',
          });
        }
        if (title) {
            gsap.to(title, {
                duration: 0.7,
                x: rotateY / 1.5,
                y: -rotateX / 1.5,
                ease: 'power2.out',
            });
        }
        if (subtitle) {
            gsap.to(subtitle, {
                duration: 0.7,
                x: rotateY / 2.5,
                y: -rotateX / 2.5,
                ease: 'power2.out',
            });
        }
      };

      const handleMouseLeave = () => {
        gsap.to(card, {
          duration: 0.7,
          transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
          ease: 'power2.out',
        });
        if (image) {
            gsap.to(image, {
              duration: 0.7,
              x: 0,
              y: 0,
              ease: 'power2.out',
            });
          }
        if (title) {
            gsap.to(title, {
                duration: 0.7,
                x: 0,
                y: 0,
                ease: 'power2.out',
            });
        }
        if (subtitle) {
            gsap.to(subtitle, {
                duration: 0.7,
                x: 0,
                y: 0,
                ease: 'power2.out',
            });
        }
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <a href={href} className="block w-full">
        <div ref={cardRef} className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-900/50 p-8" style={{ transformStyle: 'preserve-3d' }}>
            <div ref={imageRef} className="absolute inset-0">
                <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" className="opacity-30"/>
            </div>
            <div className="relative z-10 flex flex-col justify-end h-full">
                <h3 ref={titleRef} className="text-2xl font-bold text-white">{title}</h3>
                <p ref={subtitleRef} className="text-lg text-gray-400">{subtitle}</p>
            </div>
        </div>
    </a>
  );
};

export default Card3D;
