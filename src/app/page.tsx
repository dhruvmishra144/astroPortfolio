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
  const skill = useRef(null);
  const skillPara = useRef(null);
  const platform = useRef(null);
  // Using useGSAP to run animation on mount
  useGSAP(() => {
    let mm = gsap.matchMedia()
    mm.add("(min-width: 992px) and (prefers-reduced-motion: no-preference)", () => {
      // desktop setup code here...
      gsap.fromTo(
        intro.current,
        { opacity: 1, y: -50, scale: 1 },
        {
          opacity: 0,
          y: 0,
          scale: 1.5,
          scrollTrigger: {
            trigger: intro.current,
            start: 'clamp(top 70%)',
            end: 'clamp(top 38%)',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "power1.inOut",
          duration: 2.5
        }
      );

      gsap.fromTo(
        imageDiv.current,
        { opacity: 1, y: -50, scale: 1 },
        {
          opacity: 0,
          y: 0,
          scale: 1.5,
          scrollTrigger: {
            trigger: imageDiv.current,
            start: 'clamp(top 30%)',
            end: 'clamp(top 00%)',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "power1.inOut",
          duration: 2.5
        }
      );

      gsap.fromTo(
        skill.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -205,
          scrollTrigger: {
            trigger: skill.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 40%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        platform.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -200,
          scrollTrigger: {
            trigger: platform.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 45%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        skillPara.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -195,
          scrollTrigger: {
            trigger: skillPara.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 50%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

    });

    mm.add("(max-width: 991px) and (min-width: 578px) and (prefers-reduced-motion: no-preference)", () => {
      // tab setup code here...
      gsap.fromTo(
        intro.current,
        { opacity: 1, y: -80, scale: 1 },
        {
          opacity: 0,
          y: -100,
          scale: 2,
          scrollTrigger: {
            trigger: intro.current,
            start: () => 'clamp(top 84%)',
            end: () => 'clamp(top 40%)',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "power1.out",
        }
      );

      gsap.fromTo(
        imageDiv.current,
        { opacity: 1, y: -80, scale: 1 },
        {
          opacity: 0,
          y: -100,
          scale: 2.5,
          scrollTrigger: {
            trigger: imageDiv.current,
            start: () => 'clamp(top 61%)',
            end: () => 'clamp(top 10%)',
            scrub: true,
            pin: true,
            markers: false
          },
          ease: "power1.out",
        }
      );

      gsap.fromTo(
        skill.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -205,
          scrollTrigger: {
            trigger: skill.current,
            start: 'clamp(top 100%)',
            end: 'clamp(top 80%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        platform.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -200,
          scrollTrigger: {
            trigger: platform.current,
            start: 'clamp(top 100%)',
            end: 'clamp(top 75%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        skillPara.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -195,
          scrollTrigger: {
            trigger: skillPara.current,
            start: 'clamp(top 100%)',
            end: 'clamp(top 70%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

    });

    mm.add("(max-width: 575px) and (prefers-reduced-motion: no-preference)", () => {
      // tab setup code here...
      gsap.fromTo(
        intro.current,
        { opacity: 1, y: -50, scale: 1 },
        {
          opacity: 0,
          y: -80,
          scale: 1.5,
          scrollTrigger: {
            trigger: intro.current,
            start: () => 'clamp(top 84%)',
            end: () => 'clamp(top 30%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.out",
        }
      );

      gsap.fromTo(
        imageDiv.current,
        { opacity: 1, y: -50, scale: 1 },
        {
          opacity: 0,
          y: -80,
          scale: 1.5,
          scrollTrigger: {
            trigger: imageDiv.current,
            start: () => 'clamp(top 61%)',
            end: () => 'clamp(top 0%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.out",
        }
      );

      gsap.fromTo(
        skill.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -100,
          scrollTrigger: {
            trigger: skill.current,
            start: 'clamp(top 100%)',
            end: 'clamp(top 30%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        platform.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -95,
          scrollTrigger: {
            trigger: platform.current,
            start: 'clamp(top 100%)',
            end: 'clamp(top 35%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        skillPara.current,
        { opacity: 0, y: 0 },
        {
          opacity: 1,
          y: -90,
          scrollTrigger: {
            trigger: skillPara.current,
            start: 'clamp(top 100%)',
            end: 'clamp(top 40%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

    });

  }, []);

  const projects = [
    {}
  ];

  return (
    <main className='overflow-x-hidden' ref={home}>
      <div className="container h-[calc(100vh-110px)] md:h-[calc(100vh-98px)] mx-auto text-center flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className='relative flex p-8 mb-6 lg:w-[325px] lg:h-[325px]' ref={imageDiv}>
          <div className='boxes'>
            <div className="box1 lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
            <div className="box2 lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
            <div className="box3 lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
            <div className="box4 lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
          </div>
          <Image width={250} height={250} className='w-[150px] lg:w-[300px] lg:h-[auto] transition-all duration-300 avatar z-10 border rounded-full' src={'/avatar.png'} alt={''} />
        </div>
        <h1 ref={intro} className="text-4xl lg:text-6xl font-extralight main-heading px-4 text-slate-400 heading-text">Hi, I am <span className="text-white heading-text">Dhruv Mishra</span></h1>
      </div>
      <div className="container h-auto mx-auto text-center flex flex-col items-center justify-center px-4">
        <p ref={skill} className="mb-6 lg:mb-8 text-4xl lg:text-6xl text-slate-400">I am Product Designer and Developer</p>
        <p ref={platform} className='mb-6 lg:mb-8 text-4xl lg:text-6xl text-sky-400'>For Web and Mobile Platforms</p>
        <p ref={skillPara} className="mb-4 lg:px-64 text-xl leading-8">My area of knowledge is in developing user-friendly, visually appealing mobile and internet applications that engage people and provide results. Furthermore, I am skilled in web development</p>
      </div>
      <div className="container h-auto mx-auto text-center flex flex-col items-center justify-center px-4">

      </div>
    </main>
  );
}

