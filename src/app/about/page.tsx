'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const intro = useRef(null);
  // Using useGSAP to run animation on mount
  // useGSAP(() => {
  //   const mm = gsap.matchMedia()
   
  //   mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
  //     // desktop setup code here...
    

  //   });

  //   mm.add("(max-width: 991px) and (min-width: 578px) and (prefers-reduced-motion: no-preference)", () => {
  //     // tab setup code here...
      

  //   });

  //   mm.add("(max-width: 575px) and (prefers-reduced-motion: no-preference)", () => {
  //     // tab setup code here...

  //   });

  // }, []);
  return (
    <main ref={intro} className='container mx-auto'>
      <div className='flex flex-col items-center justify-center h-[calc(100vh-150px)] md:h-[calc(100vh-150px)]'>
      <p  className='relative text-5xl text-center text-slate-600 mb-4'>
      I&apos;m happy to know that
      </p>
      <p className='relative text-5xl text-center text-slate-200 mb-8'>
      you&apos;re interested in learning more about me
      </p>
      <p className='relative text-left text-slate-200 mb-6 text-2xl max-w-[1024]'>For me, it's about more than just aesthetics. I'm driven to create products that make a meaningful difference.</p>
      <p className='relative text-left text-slate-200 mb-6 text-2xl max-w-[1024]'>Understanding diverse perspectives cultivates empathy towards our users and strengthens my connection with the team.</p>
      </div>
     
      
    </main>
  );
}