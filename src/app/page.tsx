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
    // {
    //   projectName: "LoopTrip",
    //   projectDesception: "The ultimate platform for coordinated vehicle travel",
    //   metricOne: "95%",
    //   metricTwo: "65%",
    //   metricDetailOne: "Increase in high synchronization accuracy",
    //   metricDetailTwo: "Increase in User Satisfaction for coordinated trips.",
    //   year: "2025",
    //   module: "Mobile App",
    //   link: '/projects/looptrip',
    //   img: '/looptrip-card-image.jpg'
    // },
    // {
    //   projectName: "GoodsBiz",
    //   projectDesception: "B2B Product Buying and Selling",
    //   metricOne: "",
    //   metricTwo: "",
    //   metricDetailOne: "",
    //   metricDetailTwo: "",
    //   year: "2023",
    //   module: "Web App",
    //   link: '/projects/goodsbiz',
    //   img: '/goodsbiz-card-image.jpg'
    // },
    // {
    //   projectName: "Aaizal Tech Website",
    //   projectDesception: "Specialise in creating transformative solutions across a wide range of sectors",
    //   metricOne: "60%",
    //   metricTwo: "32%",
    //   metricDetailOne: "Reduction of load-time and achieving speeds under 1 second.",
    //   metricDetailTwo: "Conversion rates due to enhanced performance and user experience",
    //   year: "2025",
    //   module: "Redesign Website",
    //   link: '/projects/aaizaltech',
    //   img: '/aaizal-tech-card-image.jpg'
    // },
    // {
    //   projectName: "Petrii",
    //   projectDesception: "Streamline research with AI lab management: connect team, experiments, and data in one secure platform.",
    //   metricOne: "95%",
    //   metricTwo: "20%",
    //   metricDetailOne: "Data-access requests within the 30-minute SLA",
    //   metricDetailTwo: "Reduction in average experiment turnaround time",
    //   year: "2022",
    //   module: "Web App",
    //   link: '/projects/petrii',
    //   img: '/petrii-card-image.jpg'
    // },
  ];

  return (
    <main className='overflow-x-hidden' ref={home}>
      <div className="container h-auto mx-auto text-left flex flex-col  items-center justify-center px-4 py-32">
        {/* Image Section - Placed first visually on mobile with order-1, moves to second on desktop with md:order-2 */}
          <div className='relative flex justify-center items-center h-full min-h-[200px] lg:min-h-[400px] mb-16'>
            
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
        {/* Main Heading */}
        <h1 ref={skill} className="mb-6 lg:mb-8 text-5xl lg:text-8xl font-bold text-slate-400 w-full text-center lg:max-w-[875px] xl:max-w-[1000px]">
        Dhruv Mishra
        </h1>

        {/* Punch Line */}
        <p ref={platform} className='mb-8 lg:mb-12 text-2xl lg:text-3xl text-slate-300 font-medium tracking-wide uppercase lg:max-w-[875px] xl:max-w-[1000px]'>
        Senior UX/UI Designer & Systems Strategist Bridging the gap between <span className='text-white'>Business Logic</span> and <span className='text-white'>Technical Execution</span>
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
          <svg id="Layer_1" enableBackground="new 0 0 500 500" height="24" viewBox="0 0 500 500" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m439.503 143.281c10.469-21.862 8.985-48.347-8.985-66.317l-7.481-7.481c-17.97-17.97-45.168-20.829-66.317-8.985-14.885 8.336-46.385-8.997-48.717-20.224-4.897-23.578-27.651-40.274-52.898-40.274l-12.855.653c-29.562 1.502-52.76 25.909-52.76 55.509 1.01 12.838-20.99 22.338-33.769 13.986-21.932-21.932-57.491-21.932-79.423 0l-6.151 6.151c-18.807 18.808-20.992 47.339-8.035 69.301 8.888 15.066.221 41.733-14.381 45.323-26.57 6.533-47.731 26.077-47.731 54.875v9.297c0 25.504 18.578 44.533 41.688 52.731 23.978 8.506 22.087 43.679 19.629 47.894-12.541 21.502-9.598 49.552 8.831 67.981l6.151 6.151c18.336 18.336 45.721 20.473 67.658 9.018 15.71-8.204 45.044 7.13 47.477 19.666 4.715 24.293 28.287 41.464 54.219 41.464h8.002c25.422 0 46.947-16.684 54.222-39.701 4.758-15.052 27.791-30.299 50.703-20.66 21.797 9.17 48.645 6.689 65.679-10.344l5.594-5.594c21.932-21.932 21.932-57.491 0-79.422-9.852-8.945 2.815-33.612 13.986-33.769 31.018 0 56.162-25.145 56.162-56.162v-9.615c0-25.827-17.145-48.863-41.275-54.166-16.226-3.567-24.476-36.317-19.223-47.286z" fill="#45c9a5"/><path d="m206.255 326.33-65.171-65.171c-7.811-7.811-7.811-20.474 0-28.284 7.811-7.811 20.474-7.811 28.284 0l51.029 51.029 110.234-110.234c7.811-7.811 20.474-7.811 28.284 0s7.811 20.474 0 28.284l-124.375 124.376c-8.207 7.003-22.873 6.003-28.285 0z" fill="#fff"/></svg>
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
