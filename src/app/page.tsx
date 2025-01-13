'use client'
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { PiArrowRightThin } from "react-icons/pi";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const home = useRef(null);
  const intro = useRef(null);
  const imageDiv = useRef(null);
  const skill = useRef(null);
  const skillPara = useRef(null);
  const platform = useRef(null);
  const caseStudyHeading = useRef(null);
  const availableForProject = useRef(null);
  const checkStar = useRef(null);
  const projectContainer = useRef<HTMLDivElement | null>(null);
  // Using useGSAP to run animation on mount
  useGSAP(() => {
    let mm = gsap.matchMedia()

    if (!projectContainer.current) return;

    // Select all children inside the container
    const elements = gsap.utils.toArray(projectContainer.current.children) as HTMLElement[];
    elements.forEach((element, index) => {
      if (index % 2 === 0) {
        // Even elements animation
        gsap.fromTo(
          element,
          { x:-100, opacity:0 },
        {
          x:0,
          opacity:1,
          duration:2,
          scrollTrigger: {
            trigger: element,
            start: 'clamp(top 40%)',
            end: 'clamp(top 20%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
        );
      } else {
        // Odd elements animation
        gsap.fromTo(
          element,
          { x:100, opacity:0 },
        {
          x:0,
          opacity:1,
          duration:2,
          scrollTrigger: {
            trigger: element,
            start: 'clamp(top 40%)',
            end: 'clamp(top 20%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
        );
      }
    });

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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -205,
          scale:1,
          scrollTrigger: {
            trigger: skill.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 50%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        platform.current,
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -200,
          scale:1,
          scrollTrigger: {
            trigger: platform.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 55%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        skillPara.current,
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -195,
          scale:1,
          scrollTrigger: {
            trigger: skillPara.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        caseStudyHeading.current,
        { opacity: 0, x: -200, y: 0, scale: 2 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: caseStudyHeading.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        availableForProject.current,
        { opacity: 0, x: 200, y: 0, scale: 2 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: availableForProject.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        checkStar.current,
        { rotate: 0, transformOrigin: "50% 50%" },
        {
          rotate: "+=360", transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: checkStar.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      

      gsap.fromTo(
        ".project:nth-child(odd)",
        { x:-100, opacity:0 },
        {
          x:0,
          opacity:1,
          scrollTrigger: {
            trigger: '.project:nth-child(odd)',
            start: 'clamp(top 40%)',
            end: 'clamp(top 20%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        ".project:nth-child(even)",
        { x:100, opacity:0 },
        {
          x:0,
          opacity:1,
          scrollTrigger: {
            trigger: '.project:nth-child(even)',
            start: 'clamp(top 40%)',
            end: 'clamp(top 20%)',
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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -205,
          scale:1,
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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -200,
          scale:1,
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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -195,
          scale:1,
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

      gsap.fromTo(
        caseStudyHeading.current,
        { opacity: 0, x: -200, y: 0, scale: 2 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: caseStudyHeading.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        availableForProject.current,
        { opacity: 0, x: 200, y: 0, scale: 2 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          scrollTrigger: {
            trigger: availableForProject.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        checkStar.current,
        { rotate: 0, transformOrigin: "50% 50%" },
        {
          rotate: "+=360", transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: checkStar.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -100,
          scale:1,
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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -95,
          scale:1,
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
        { opacity: 0, y: 0, scale:1.5 },
        {
          opacity: 1,
          y: -90,
          scale:1,
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

      gsap.fromTo(
        caseStudyHeading.current,
        { opacity: 0, x: 0, y: 0, scale: 2 },
        {
          opacity: 1,
          x: 0,
          y: -50,
          scale: 1,
          scrollTrigger: {
            trigger: caseStudyHeading.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        availableForProject.current,
        { opacity: 0, x: 200, y: 0, scale: 2 },
        {
          opacity: 1,
          x: 0,
          y: -100,
          scale: 1,
          scrollTrigger: {
            trigger: availableForProject.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

      gsap.fromTo(
        checkStar.current,
        { rotate: 0, transformOrigin: "50% 50%" },
        {
          rotate: "+=360", transformOrigin: "50% 50%",
          scrollTrigger: {
            trigger: checkStar.current,
            start: 'clamp(top 80%)',
            end: 'clamp(top 60%)',
            scrub: true,
            pin: false,
            markers: false
          },
          ease: "power1.inOut",
        }
      );

    });

  }, []);
  
  const projectsList = [
    {
      projectName: "FlowwBridge",
      projectDesception: "Designing an Affordable and User-Friendly iPaaS Solution for SMEs",
      metricOne: "Lorem ipsum dolor sit amet",
      metricTwo: "Lorem ipsum dolor sit amet",
      metricDetailOne: "Lorem ipsum dolor sit amet",
      metricDetailTwo: "Lorem ipsum dolor sit amet",
      year: "2021",
      module: "Web App",
      link:'/flowwbridge',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    {
      projectName: "EzLearn",
      projectDesception: "One on One Platform for learning foriegn languages with Native speakers",
      metricOne: "Lorem ipsum dolor sit amet", 
      metricTwo: "Lorem ipsum dolor sit amet", 
      metricDetailOne: "Lorem ipsum dolor sit amet", 
      metricDetailTwo: "Lorem ipsum dolor sit amet", 
      year: "2021", 
      module: "Mobile App",
      link:'/ezlearn',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    { 
      projectName: "GoodBiz",
      projectDesception: "B2B Product Buying and Selling", 
      metricOne: "Lorem ipsum dolor sit amet", 
      metricTwo: "Lorem ipsum dolor sit amet", 
      metricDetailOne: "Lorem ipsum dolor sit amet", 
      metricDetailTwo: "Lorem ipsum dolor sit amet", 
      year: "2021", 
      module: "Web App",
      link:'/goodbiz',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    { 
      projectName: "NeoTron",
      projectDesception: "Next-gen Neo-Bank, unmatched security with banking at your fingertips.", 
      metricOne: "Lorem ipsum dolor sit amet", 
      metricTwo: "Lorem ipsum dolor sit amet", 
      metricDetailOne: "Lorem ipsum dolor sit amet", 
      metricDetailTwo: "Lorem ipsum dolor sit amet", 
      year: "2021", 
      module: "Web App & Mobile App", 
      link:'/neotron',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    { 
      projectName: "SensePoll",
      projectDesception: "Revolutionizing polling with innovative insights that matter", 
      metricOne: "Lorem ipsum dolor sit amet",
      metricTwo: "Lorem ipsum dolor sit amet", 
      metricDetailOne: "Lorem ipsum dolor sit amet", 
      metricDetailTwo: "Lorem ipsum dolor sit amet", 
      year: "2021", 
      module: "Web App & Mobile App", 
      link:'/sensepoll',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
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
        <h1 ref={intro} className="text-4xl lg:text-6xl font-extralight main-heading px-4 text-zinc-400 heading-text">Hi, I am <span className="text-white heading-text">Dhruv Mishra</span></h1>
      </div>
      <div className="container h-auto mx-auto text-center flex flex-col items-center justify-center px-4">
        <p ref={skill} className="mb-6 lg:mb-8 text-4xl lg:text-6xl text-zinc-400">I am <span className='text-white'>Product Designer</span> and <span className='text-white'>Developer</span></p>
        <p ref={platform} className='mb-6 lg:mb-8 text-4xl lg:text-6xl text-zinc-400'>For <span className='text-white'>Web</span> and <span className='text-white'>Mobile</span> Platforms</p>
        <p ref={skillPara} className="mb-4 lg:max-w-[875px] xl:max-w-[1100px] text-xl leading-8">My area of knowledge is in developing user-friendly, visually appealing mobile and internet applications that engage people and provide results. Furthermore, I am skilled in web development</p>
      </div>
      <div className="container h-auto mx-auto text-center  flex flex-col items-center justify-between px-4 max-w-[1100px] gap-y-8 mb-24 projects">
        <div className='flex flex-row items- w-full justify-between mb-4'>
          <h3 ref={caseStudyHeading} className='text-2xl text-center sm:text-start w-full md:text-2xl md:text-start heading-text'>
            Featured Case Studies
          </h3>
          <div ref={availableForProject} className='w-full flex flex-row gap-x-3 items-center hidden sm:flex justify-end'>
            <Image ref={checkStar} width={24} height={24} src={'tick-mark.svg'} alt="" />
            <p>Available for New Projects</p>
          </div>
        </div>
        <div ref={projectContainer} className='container h-auto mx-auto text-center  flex flex-col items-center justify-between px-4 max-w-[1100px] gap-y-8 mb-24'>
        {
          projectsList.map((items, index) => {
            return (<a href={items.link} className='flex flex-col p-6 bg-zinc-500/20 backdrop-blur-md w-full rounded-[24px] group' key={index.toString()} >
              <div className='flex flex-row justify-between mb-4'>
                <p className='text-base'>{items.year}</p>
                <p className='text-base'>{items.module}</p>
              </div>
              <hr className='border-[0.5px] border-[#e5e5e5]/20 w-full mb-4' />
              <div className='flex flex-row gap-x-4 mb-4 justify-between'>
                <div className='flex flex-col gap-y-3 text-start'>
                <h3 className='text-4xl text-start leading-12 w-[calc(100%-48px)]'>{items.projectName}</h3>
                <p className='text-zinc-400 text-lg'>{items.projectDesception}</p>
                </div>
                <PiArrowRightThin className='hidden sm:block text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' />
              </div>
              <div className='flex flex-col gap-y-6 md:flex-row gap-x-6 mb-4 text-left'>
                <div className='flex flex-col gap-y-2 w-full'>
                <h3 className='text-2xl text-start leading-12 w-[calc(100%-48px)]'>{items.metricOne}</h3>
                <p className='text-zinc-400 text-md'>{items.metricDetailOne}</p>
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                <h3 className='text-2xl text-start leading-12 w-[calc(100%-48px)]'>{items.metricTwo}</h3>
                <p className='text-zinc-400 text-md'>{items.metricDetailTwo}</p>
                </div>
              </div>
              <img width={'auto'} height={'400'} className='h-full w-full rounded-xl' src={items.img} alt="" />
            </a>)
          })
        }
        </div>


      </div>
    </main>
  );
}

