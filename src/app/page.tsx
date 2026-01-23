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
  const projectContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
      link: '/projects/flowmatic',
      img: '/flowmatic-card-image.jpg'
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
      link: '/projects/looptrip',
      img: '/looptrip-card-image.jpg'
    },
    {
      projectName: "GoodsBiz",
      projectDesception: "B2B Product Buying and Selling",
      metricOne: "",
      metricTwo: "",
      metricDetailOne: "",
      metricDetailTwo: "",
      year: "2023",
      module: "Web App",
      link: '/projects/goodsbiz',
      img: '/goodsbiz-card-image.jpg'
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
      link: '/projects/aaizaltech',
      img: '/aaizal-tech-card-image.jpg'
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
      link: '/projects/petrii',
      img: '/petrii-card-image.jpg'
    },
  ];

  return (
    <main className='overflow-x-hidden' ref={home}>
      <div className="container h-auto mx-auto text-center flex flex-col items-center justify-center px-4 py-32">
        {/* Main Heading */}
        <h1 ref={skill} className="mb-6 lg:mb-8 text-4xl lg:text-7xl font-bold text-slate-400">
          Senior <span className='text-white'>Product Designer</span> & <span className='text-white'>Systems Strategist</span>
        </h1>

        {/* Punch Line */}
        <p ref={platform} className='mb-8 lg:mb-12 text-2xl lg:text-3xl text-slate-300 font-medium tracking-wide uppercase'>
          Bridging the gap between <span className='text-white'>Business Logic</span> and <span className='text-white'>Technical Execution</span>
        </p>

        {/* Strategic Paragraph */}
        <p ref={skillPara} className="mb-4 lg:max-w-[875px] xl:max-w-[1000px] text-xl lg:text-2xl leading-relaxed text-slate-400">
          I architect scalable digital products for web and mobile that align user behavior with commercial goals.
          By leveraging my background in <span className='text-white'>full-stack development</span>, I ensure every design is
          rooted in technical feasibility—solving complex operational bottlenecks while eliminating technical debt.
        </p>
      </div>
      <div className="container h-auto mx-auto text-center  flex flex-col items-center justify-between px-4 max-w-[1100px] gap-y-8 mb-24 projects">
        <div className='flex flex-row items- w-full justify-between mb-4'>
          <h3 ref={caseStudyHeading} className='text-2xl text-center sm:text-start w-full md:text-2xl md:text-start heading-text'>
            Featured Case Studies
          </h3>
          <div ref={availableForProject} className='w-full flex flex-row gap-x-3 items-center hidden sm:flex justify-end'>
            <Image width={24} height={24} src={'tick-mark.svg'} alt="" />
            <p>Available for New Projects</p>
          </div>
        </div>
        <div ref={projectContainer} className='container h-auto mx-auto text-center  flex flex-col items-center justify-between px-4 max-w-[1100px] gap-y-8 mb-24'>
          {
            projectsList.map((items, index) => {
              return (<a href={items.link} className={`flex flex-col ${index % 2 == 0 ? "lg:flex-row" : "lg:flex-row-reverse"}  p-6 bg-cyan-600/20 backdrop-blur-md w-full rounded-[24px] group gap-8`} key={index.toString()} >
                <div className='w-full lg:w-1/2'>
                  <Image width={'400'} height={'400'} className='h-full w-full rounded-xl' src={items.img} alt="" />
                </div>
                <div className='flex flex-col gap-6 w-full lg:w-1/2'>
                  <div className='flex flex-row justify-between'>
                    <p className='text-base'>{items.year}</p>
                    <p className='text-base'>{items.module}</p>
                  </div>
                  <hr className='border-[0.5px] border-[#e5e5e5]/20 w-full' />
                  <div className='flex flex-row gap-x-4 justify-between'>
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
                </div>

              </a>)
            })
          }
        </div>


      </div>
    </main>
  );
}
