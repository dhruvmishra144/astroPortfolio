'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const home = useRef(null);
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
          scale: 1.5,
          scrollTrigger: {
            trigger: intro.current,
            start: 'top 70%',
            end: 'top 58%',
            scrub: true,
            pin: true,
            markers: false
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
    <main className='overflow-x-hidden' ref={home}>
      <div className="container pt-10 pb-[25vh] lg:py-[20vh] mx-auto text-center flex flex-col items-center justify-center px-4">
        <div className='relative flex p-8 mb-6 lg:w-[325px] lg:h-[325px]' ref={imageDiv}>
          <div className='boxes'>
            <div className="box1 lg:w-[250px] lg:h-[250px] lg:origin-[150px_150px] absolute"></div>
            <div className="box2 lg:w-[250px] lg:h-[250px] lg:origin-[150px_150px] absolute"></div>
            <div className="box3 lg:w-[250px] lg:h-[250px] lg:origin-[150px_150px] absolute"></div>
            <div className="box4 lg:w-[250px] lg:h-[250px] lg:origin-[150px_150px] absolute"></div>
          </div>
          <Image width={250} height={250} className='w-[150px] lg:w-[300px] lg:h-[auto] transition-all duration-300 avatar z-10 border rounded-full' src={'/avatar.png'} alt={''} />
        </div>
        <h1 ref={intro} className="text-4xl lg:text-6xl font-extralight main-heading px-4">Hi, I am Dhruv</h1>

      </div>
      <div className="container h-100 mx-auto text-center flex flex-col items-center justify-center px-4 py-28">

        <p className="mb-6 lg:mb-8 text-4xl lg:text-6xl text-slate-400">UX/UI Designer and Developer</p>
        <p className='mb-6 lg:mb-8 text-4xl lg:text-6xl text-sky-400'>For Web and Mobile Platforms</p>
        {/* <p className="text-2xl lg:text-6xl mb-4 font-semibold text-slate-200">Hi, I’m Dhruv Mishra</p> */}
        <p className="mb-4 lg:px-64 text-xl leading-8">My area of knowledge is in developing user-friendly, visually appealing mobile and internet applications that engage people and provide results. Furthermore, I am skilled in web development</p>
      </div>
    </main>
  );
}
