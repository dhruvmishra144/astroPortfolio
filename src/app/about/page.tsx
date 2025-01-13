'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const intro = useRef(null);
  const imageDiv = useRef(null);
  // Using useGSAP to run animation on mount
  useGSAP(() => {
    let mm = gsap.matchMedia()
   
    mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
      // desktop setup code here...
    

    });

    mm.add("(max-width: 991px) and (min-width: 578px) and (prefers-reduced-motion: no-preference)", () => {
      // tab setup code here...
      

    });

    mm.add("(max-width: 575px) and (prefers-reduced-motion: no-preference)", () => {
      // tab setup code here...

    });

  }, []);
  return (
    <main ref={intro} className='container mx-auto'>
      <div className='flex flex-col items-center justify-center h-[calc(100vh-150px)] md:h-[calc(100vh-150px)]'>
      <p  className='relative text-5xl text-center text-zinc-600 mb-4'>
      I'm happy to know that
      </p>
      <p className='relative text-5xl text-center text-zinc-200'>
      you're interested in learning more about me!
      </p>
      </div>
     
      
    </main>
  );
}