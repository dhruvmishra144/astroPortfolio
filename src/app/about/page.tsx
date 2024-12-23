'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const intro = useRef(null);
  const imageDiv = useRef(null);
  // Using useGSAP to run animation on mount
  useGSAP(() => {
    let mm = gsap.matchMedia()
    mm.add("(min-width: 1024px)", () => {
      // desktop setup code here...
      gsap.fromTo(
        intro.current,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: 0,
          scale:0,
          scrollTrigger: {
            trigger: intro.current,
            start: 'top 11.3%',
            end: 'top 0%',
            scrub: true,
            pin: true,
            markers: true
          },
          ease: "circ.out",
        }
      );
    });

    mm.add("(min-width: 1024px)", () => {
      // desktop setup code here...
      gsap.fromTo(
        imageDiv.current,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: 0,
          scale: 1.5,
          scrollTrigger: {
            trigger: imageDiv.current,
            start: 'top 30%',
            end: 'top 20%',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "circ.out",
        }
      );
    });

    mm.add("(max-width: 1023px)", () => {
      // mobile setup code here...
      gsap.fromTo(
        intro.current,
        { opacity: 1, y: 0, scale: 1 },
        {
          opacity: 0,
          y: -100,
          scale: 1.5,
          scrollTrigger: {
            trigger: intro.current,
            start: () => 'top 64.5%',
            end: () => 'top 40%',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "power1.out",
        }
      );
    });

    mm.add("(max-width: 1023px)", () => {
      // mobile setup code here...
      gsap.fromTo(
        imageDiv.current,
        { opacity: 1, y: 0, scale:1},
        {
          opacity: 0,
          y: 10,
          scale: 1.5,
          scrollTrigger: {
            trigger: imageDiv.current,
            start: () => 'top 30%',
            end: () => 'top 10%',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "power1.out",
        }
      );
    });

  }, []);
  return (
    <main className='overflow-x-hidden'>
      <p ref={intro} className='relative text-[200px] lg:text-[300px] text-center font-bold text-slate-700'>Hi</p>
      <p></p>
    </main>
  );
}