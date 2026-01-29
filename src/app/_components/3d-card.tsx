'use client'
import Image from 'next/image';

interface Card3DProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  href: string;
}

const Card3D = ({ title, subtitle, imageUrl, href }: Card3DProps) => {
  return (
    <a href={href} className="block w-full group">
      <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gray-900/50 p-8 transition-all duration-300 ease-in-out group-hover:bg-gray-800/60 group-hover:scale-105">
        <div className="absolute inset-0">
            <Image 
              src={imageUrl} 
              alt={title} 
              fill
              style={{objectFit: "cover"}}
              className="opacity-30 group-hover:opacity-40 transition-opacity duration-300"
            />
        </div>
        <div className="relative z-10 flex flex-col justify-end h-full">
          <h3 className="text-2xl font-bold text-white transition-transform duration-300 group-hover:translate-y-[-4px]">{title}</h3>
          <p className="text-lg text-gray-400 transition-transform duration-300 group-hover:translate-y-[-2px]">{subtitle}</p>
        </div>
      </div>
    </a>
  );
};

export default Card3D;
