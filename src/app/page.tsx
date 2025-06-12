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
  const intro = useRef(null);
  const imageDiv = useRef(null);
  const skill = useRef(null);
  const skillPara = useRef(null);
  const platform = useRef(null);
  const caseStudyHeading = useRef(null);
  const availableForProject = useRef(null);
  const checkStar = useRef(null);
  const projectContainer = useRef<HTMLDivElement | null>(null);
 
  useGSAP(() => {
    gsap.from(intro.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: intro.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(imageDiv.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: imageDiv.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(skill.current, {
      opacity: 0,
      x: -100,
      duration: 1,
      scrollTrigger: {
        trigger: skill.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(platform.current, {
      opacity: 0,
      x: 100,
      duration: 1,
      scrollTrigger: {
        trigger: platform.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(skillPara.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: skillPara.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(caseStudyHeading.current, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: caseStudyHeading.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(availableForProject.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: availableForProject.current,
        start: "top 90%",
        toggleActions: "play none none reverse",
      }
    });
  
    gsap.from(Array.from(projectContainer.current?.children || []), {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projectContainer.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });
  
  }, { scope: home }); // Ensures GSAP only runs inside this component
  
  
  const projectsList = [
    {
      projectName: "FlowMatic",
      projectDesception: "Designing an Affordable and User-Friendly iPaaS Solution with AI for SMEs",
      metricOne: "34x",
      metricTwo: "10%",
      metricDetailOne: "times faster Applications Integration",
      metricDetailTwo: "Increase in Integration Success Rate (ISR)",
      year: "2024",
      module: "Web App",
      link:'/projects/flowmatic',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    {
      projectName: "LoopTrip",
      projectDesception: "The ultimate platform for coordinated vehicle travel",
      metricOne: "95%", 
      metricTwo: "65%", 
      metricDetailOne: "Increase in high synchronization accuracy", 
      metricDetailTwo: "Increase in User Satisfaction for coordinated trips.", 
      year: "2025", 
      module: "Mobile App",
      link:'/projects/looptrip',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    { 
      projectName: "GoodsBiz",
      projectDesception: "B2B Product Buying and Selling", 
      metricOne: "Lorem ipsum dolor sit amet", 
      metricTwo: "Lorem ipsum dolor sit amet", 
      metricDetailOne: "Lorem ipsum dolor sit amet", 
      metricDetailTwo: "Lorem ipsum dolor sit amet", 
      year: "2023", 
      module: "Web App",
      link:'/projects/goodsbiz',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    { 
      projectName: "Aaizal Tech Website",
      projectDesception: "Specialise in creating transformative solutions across a wide range of sectors", 
      metricOne: "60%", 
      metricTwo: "32%", 
      metricDetailOne: "Reduction of load-time and achieving speeds under 1 second.", 
      metricDetailTwo: "Conversion rates due to enhanced performance and user experience", 
      year: "2025", 
      module: "Redesign Website", 
      link:'/projects/aaizaltech',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
    { 
      projectName: "Petrii",
      projectDesception: "Streamline research with AI lab management: connect team, experiments, and data in one secure platform.", 
      metricOne: "95%",
      metricTwo: "20%", 
      metricDetailOne: "Data-access requests within the 30-minute SLA", 
      metricDetailTwo: "Reduction in average experiment turnaround time", 
      year: "2022", 
      module: "Web App", 
      link:'/projects/petrii',
      img:'https://as2.ftcdn.net/v2/jpg/08/09/04/55/1000_F_809045509_U4df7jKWH4fVKayaVi4aSz5Wud4Np9Zb.jpg'
    },
  ];

  return (
    <main className='overflow-x-hidden' ref={home}>
      <div className="container h-[calc(100vh-110px)] md:h-[calc(100vh-98px)] mx-auto text-center flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className='relative flex p-8 mb-6 lg:w-[325px] lg:h-[325px]' ref={imageDiv}>
          <div className='boxes'>
            <div className="box1 w-[145px] h-[145px] origin-[82px_82px] lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
            <div className="box2 w-[145px] h-[145px] origin-[82px_82px] lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
            <div className="box3 w-[145px] h-[145px] origin-[82px_82px] lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
            <div className="box4 w-[145px] h-[145px] origin-[82px_82px] lg:w-[250px] lg:h-[250px] lg:origin-[140px_140px] absolute"></div>
          </div>
          <Image width={250} height={250} className='w-[150px] lg:w-[300px] lg:h-[auto] transition-all duration-300 avatar z-10 border rounded-full' src={'/avatar.png'} alt={''} />
        </div>
        <h1 ref={intro} className="text-4xl lg:text-6xl font-extralight main-heading px-4 text-slate-400 heading-text">Hi, I am <span className="text-white heading-text">Dhruv Mishra</span></h1>
      </div>
      <div className="container h-auto mx-auto text-center flex flex-col items-center justify-center px-4 py-32">
        <p ref={skill} className="mb-6 lg:mb-8 text-4xl lg:text-6xl text-slate-400">I am <span className='text-white'>Product Designer</span> and <span className='text-white'>Developer</span></p>
        <p ref={platform} className='mb-6 lg:mb-8 text-4xl lg:text-6xl text-slate-400'>For <span className='text-white'>Web</span> and <span className='text-white'>Mobile</span> Platforms</p>
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
            return (<a href={items.link} className='flex flex-col p-6 bg-cyan-600/20 backdrop-blur-md w-full rounded-[24px] group' key={index.toString()} >
              <div className='flex flex-row justify-between mb-4'>
                <p className='text-base'>{items.year}</p>
                <p className='text-base'>{items.module}</p>
              </div>
              <hr className='border-[0.5px] border-[#e5e5e5]/20 w-full mb-4' />
              <div className='flex flex-row gap-x-4 mb-4 justify-between'>
                <div className='flex flex-col gap-y-3 text-start flex-grow'>
                <h3 className='text-2xl lg:text-4xl text-start leading-relax w-[calc(100%-48px)]'>{items.projectName}</h3>
                <p className='text-slate-400 text-md lg:text-lg'>{items.projectDesception}</p>
                </div>
                <PiArrowRightThin className='hidden sm:block text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' />
              </div>
              <div className='flex flex-col gap-y-6 md:flex-row gap-x-6 mb-4 text-left'>
                <div className='flex flex-col gap-y-2 w-full'>
                <h3 className='text-lg lg:text-2xl text-start leading-relax w-[calc(100%-48px)]'>{items.metricOne}</h3>
                <p className='text-slate-400 text-base lg:text-md'>{items.metricDetailOne}</p>
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                <h3 className='text-lg lg:text-2xl text-start leading-relax w-[calc(100%-48px)]'>{items.metricTwo}</h3>
                <p className='text-slate-400 text-base lg:text-md'>{items.metricDetailTwo}</p>
                </div>
              </div>
              <Image width={'977'} height={'400'} className='h-full w-full rounded-xl' src={items.img} alt="" />
            </a>)
          })
        }
        </div>


      </div>
    </main>
  );
}

