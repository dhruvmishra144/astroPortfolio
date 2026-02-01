'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { PiArrowRightThin } from "react-icons/pi";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const home = useRef(null);
  const skill = useRef(null);
  const skillPara = useRef(null);
  const platform = useRef(null);
  const caseStudyHeading = useRef(null);
  const availableForProject = useRef(null);
  const projectContainer = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Hero Animations
    gsap.from([skill.current, platform.current, skillPara.current], {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
    });

    // Section Header Animations
    gsap.from([caseStudyHeading.current, availableForProject.current], {
      opacity: 0,
      y: 20,
      duration: 1,
      scrollTrigger: {
        trigger: caseStudyHeading.current,
        start: "top 90%",
      }
    });

    // Project Card Animations
    const projectCards = gsap.utils.toArray('.project-card');
    projectCards.forEach((card) => {
      gsap.from(card as HTMLElement, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card as HTMLElement,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });
    });

  }, { scope: home });

  const projectsList = [
    {
      projectName: "GoFlow",
      projectDescription: "Designing an AI-powered iPaaS that helps non-technical business owners automate data flows without fear of breaking live systems.",
      metricOne: "40%",
      metricTwo: "50%",
      metricDetailOne: "faster onboarding through confidence-first UX",
      metricDetailTwo: "reduction in configuration errors via AI-assisted mapping",
      year: "2025",
      module: "Web App",
      link: "/projects/GoFlow",
      img: "/GoFlow-card-image.jpg",
    },
  ];

  return (
    <main className='overflow-x-hidden' ref={home}>
      {/* --- HERO SECTION --- */}
      <section className="container mx-auto px-6 py-16 lg:py-32 flex flex-col items-center justify-center min-h-[80vh]">
        {/* Image Section - Placed first visually on mobile with order-1, moves to second on desktop with md:order-2 */}
          <div className='relative flex justify-center items-center h-full min-h-[200px] lg:min-h-[400px] mb-8'>
            
            {/* Background Glow Effect */}
            <div className="absolute w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-600/20 blur-[60px] lg:blur-[80px] -z-10 animate-pulse"></div>
            
            {/* Avatar Container */}
            <div className="avatar-container relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px] rounded-full border-4 border-white/10 p-2 shadow-2xl backdrop-blur-sm bg-white/5">
              <div className="relative w-full h-full rounded-full overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="Dhruv Mishra Profile"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 240px, 420px"
                />
              </div>
            </div>
        
            {/* Decorative Ring */}
            <div className="absolute w-[260px] h-[260px] lg:w-[460px] lg:h-[460px] rounded-full border border-blue-500/30 -z-5"></div>
          </div>

        <h1 ref={skill} className="mb-6 text-4xl sm:text-6xl lg:text-9xl font-light text-white w-full text-center tracking-tighter italic leading-tight">
          Dhruv Mishra<span className="text-cyan-500 not-italic">.</span>
        </h1>

        <p ref={platform} className='mb-8 text-lg sm:text-2xl lg:text-4xl text-gray-400 font-light tracking-tight text-center max-w-4xl'>
          Senior UX/UI Designer & Systems Strategist bridging the gap between <span className='text-white italic'>Business Logic</span> and <span className='text-white italic'>Technical Execution</span>
        </p>

        <p ref={skillPara} className="max-w-2xl text-center text-base lg:text-xl leading-relaxed text-gray-500 font-light">
          I architect scalable digital products rooted in <span className='text-white font-medium'>full-stack feasibility</span>, eliminating technical debt through strategic design.
        </p>
      </section>

      {/* --- PROJECTS SECTION --- */}
      <section className="container mx-auto px-6 max-w-[1200px] pb-32">
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-y-6'>
          <h3 ref={caseStudyHeading} className='text-xs font-black tracking-[0.4em] text-cyan-500 uppercase border-l-4 border-cyan-500 pl-4'>
            Featured Case Studies
          </h3>
          
          <div ref={availableForProject} className='flex items-center gap-x-3 bg-white/5 px-4 py-2 rounded-full border border-white/10'>
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <p className="text-sm font-bold uppercase tracking-widest text-gray-300">Available for 2026 Projects</p>
          </div>
        </div>

        {/* REFS FIXED: Added w-full and min-h for visibility */}
        <div ref={projectContainer} className='flex flex-col gap-y-12 lg:gap-y-24 w-full min-h-[400px]'>
          {projectsList.map((items, index) => (
            <a 
              href={items.link} 
              key={items.projectName}
              className={`project-card flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} p-6 lg:p-8 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 w-full rounded-[2rem] lg:rounded-[3rem] group gap-8 transition-all duration-500 overflow-hidden`}
            >
              {/* Responsive Image Height */}
              <div className='w-full lg:w-1/2 overflow-hidden rounded-[1.5rem] h-[220px] sm:h-[350px] lg:h-[450px] relative shrink-0'>
                <Image 
                  fill
                  className='object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000' 
                  src={items.img} 
                  alt={items.projectName} 
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className='flex flex-col gap-6 w-full lg:w-1/2 justify-center'>
                <div className='flex justify-between items-center text-sm font-bold tracking-[0.2em] text-cyan-500 uppercase'>
                  <p>{items.year}</p>
                  <p>{items.module}</p>
                </div>
                
                <div className='h-[1px] w-full bg-white/5'></div>
                
                <div className='flex justify-between items-start gap-4'>
                  <div className='flex flex-col gap-y-3'>
                    <h3 className='text-3xl lg:text-5xl font-light italic text-white tracking-tighter leading-none'>{items.projectName}</h3>
                    <p className='text-gray-400 text-base lg:text-lg font-light leading-relaxed'>{items.projectDescription}</p>
                  </div>
                  <PiArrowRightThin className='hidden lg:block w-12 h-12 text-gray-600 group-hover:text-cyan-500 group-hover:-rotate-45 transition-all duration-500 flex-shrink-0' />
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4'>
                  <div className='p-4 bg-white/5 rounded-2xl'>
                    <h4 className='text-2xl lg:text-3xl font-bold text-white italic'>{items.metricOne}</h4>
                    <p className='text-sm uppercase tracking-wider text-gray-500 mt-1'>{items.metricDetailOne}</p>
                  </div>
                  <div className='p-4 bg-white/5 rounded-2xl'>
                    <h4 className='text-2xl lg:text-3xl font-bold text-white italic'>{items.metricTwo}</h4>
                    <p className='text-sm uppercase tracking-wider text-gray-500 mt-1'>{items.metricDetailTwo}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}