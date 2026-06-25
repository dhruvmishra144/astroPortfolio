'use client'
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { PiArrowRightThin, PiArrowLeftThin } from "react-icons/pi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {

  const mainRef = useRef(null);
  const intro = useRef(null);
  const imageDiv = useRef(null);

  const testimonials = [
    {
      impact: 'Product Strategy & UX',
      text: 'Had a great experience working with Dhruv Mishra. Found his designing skills to be updated with current market trends. He provided creative design after brainstorming the right solution for my UI/UX work.',
      author: 'Kavinder Singh',
    },
    {
      impact: 'Execution & Reliability',
      text: 'I really liked the services provided to me. It was value for money and the services were timely delivered. Looking forward to work with you again.',
      author: 'Divya Kukreja',
    },
    {
      impact: 'Full-Stack Delivery',
      text: 'A perfect place for your website development. Have the ability to create, design, Hosting, Managing sites, logo making and optimize.',
      author: 'Bhawana Rana',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonials.length]);


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
    gsap.utils.toArray<HTMLElement>(".animate-on-scroll").forEach((el) => {
      gsap.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, { scope: mainRef });

  return (
    <main id="content" ref={mainRef} className="page-shell pb-24">
      {/* Header Section Container */}
<div className="page-section grid min-h-[calc(50vh-110px)] items-center justify-center gap-12 md:grid-cols-2 md:min-h-[calc(100vh-98px)]">
  
  {/* Image Section - Placed first visually on mobile with order-1, moves to second on desktop with md:order-2 */}
  <div className='relative flex justify-center items-center h-full min-h-[200px] lg:min-h-[400px] order-1 md:order-2'>
    
    {/* Background Glow Effect */}
    <div className="absolute w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] rounded-full bg-blue-600/20 blur-[60px] lg:blur-[80px] -z-10 animate-pulse"></div>
    
    {/* Avatar Container */}
    <div className="avatar-container relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px] rounded-full border-4 border-white/10 p-2 shadow-2xl backdrop-blur-sm bg-white/5">
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src="/avatar.jpeg"
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

  {/* Text Content - Moves to bottom on mobile with order-2, moves to first on desktop with md:order-1 */}
  <div className="surface-strong order-2 z-20 rounded-[2rem] p-6 text-center md:order-1 md:text-left sm:p-8">
    <h1 className="main-heading hero-title text-balance text-4xl font-bold tracking-tight text-white lg:text-7xl">
      Hi, I am <span className="text-white">Dhruv Mishra</span>
    </h1>
    <p className='mt-6 max-w-2xl text-lg leading-relaxed text-slate-200 lg:mt-8 lg:text-3xl font-light'>
      Architecting <span className="text-cyan-400 font-medium">High-Impact Solutions</span> to bridge the gap between complex user needs and technical scalability.
    </p>
  </div>

</div>

      {/* Intro Section - Impact Text */}
      <section className='animate-on-scroll'>
        <div className='surface rounded-[2rem] px-6 py-10 text-center sm:px-8 lg:px-12 mb-20'>
        <p className='mx-auto max-w-[800px] text-center text-2xl leading-relaxed text-slate-200 lg:text-4xl'>
          With over 10 years of specializing in <span className="highlight-text">Product Design & Technical Architecture</span>, I help companies reduce technical debt through design systems and user-centric logic.
        </p>
        </div>
      </section>

      {/* Experience Section */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16 border-t border-white/10 pt-16">
          <div>
            <h2 className="text-3xl mb-4 text-gray-400 font-light tracking-widest uppercase">Expertise & Logic</h2>
          </div>
          <div>
            <ul className="text-gray-200 mb-4 text-lg flex flex-col gap-4">
              <li><strong className="text-white">Professional Focus:</strong> Senior Product Design & Design Engineering</li>
              <li><strong className="text-white">Location:</strong> Gurugram, India (Available for Global High-Impact Projects)</li>
              <li><strong className="text-white">Business Value:</strong> Reducing operational friction through system-thinking and scalable UI.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Journey Section (Narrative) */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-3xl mb-4 text-gray-400 font-light tracking-widest uppercase">The Strategy</h2>
          </div>
          <div className="flex flex-col gap-6 text-lg text-slate-300 leading-relaxed">
            <p>My transition from <span className="text-white">Developer to Product Designer</span> was driven by the realization that code is only as powerful as the problem it solves. I focus on the &quot;Why&quot; before the &quot;How&quot;.</p>
            <p>I have spent the last 3 years refining the art of technical feasibility—ensuring that every pixel designed is a pixel that can be efficiently built, deployed, and scaled.</p>
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="animate-on-scroll px-8">
        <a
          href={'https://www.linkedin.com/in/dhruvmishra144/'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 lg:flex-row group p-10 bg-white/5 border border-white/10 backdrop-blur-md justify-between rounded-2xl mb-16 items-center hover:bg-white/10 transition-all duration-300"
        >
          <h2 className="text-2xl text-gray-300 font-light italic">
            Deep-dive into my professional ROI and impact history
          </h2>
          <div className="flex flex-row gap-4 items-center">
            <RiLinkedinBoxFill className='text-3xl lg:text-5xl text-cyan-500' />
            <p className="text-2xl lg:text-3xl font-bold">Connect on Linkedin</p>
            <PiArrowRightThin className="text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300" />
          </div>
        </a>
      </section>

      {/* Capabilities Section (Replacing Tools) */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-3xl mb-4 text-gray-400 font-light tracking-widest uppercase">Capabilities</h2>
          </div>
          <div>
            <p className="text-xl text-white mb-8">Bridging the gap with a full-stack design toolkit:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-400">
              <div>
                <h3 className="text-white font-bold mb-2 underline underline-offset-8 decoration-cyan-500">Design Strategy</h3>
                <p>System Design, User Research, Prototyping, and ICE Framework prioritization.</p>
              </div>
              <div>
                <h3 className="text-white font-bold mb-2 underline underline-offset-8 decoration-cyan-500">Technical Stack</h3>
                <p>React, Next.js, TypeScript, and Tailwind CSS for production-ready design engineering.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="animate-on-scroll flex flex-col items-center justify-center px-8 mb-32">
        <h2 className="text-3xl mb-8 text-gray-400 font-light tracking-widest uppercase text-center">Industry Impact</h2>
        <div className="relative w-full max-w-2xl">
          <div
            className="bg-white/5 border-l-4 border-cyan-500 p-8 rounded-r-2xl shadow-xl backdrop-blur-sm"
          >
            <span className="text-xs uppercase tracking-widest text-cyan-400 mb-2 block">{testimonials[currentTestimonial].impact}</span>
            <p className="text-xl mb-4 italic text-slate-200">“{testimonials[currentTestimonial].text}”</p>
            <p className="font-bold text-white text-right">— {testimonials[currentTestimonial].author}</p>
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={prevTestimonial} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><PiArrowLeftThin /></button>
            <button onClick={nextTestimonial} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><PiArrowRightThin /></button>
          </div>
        </div>
      </section>
    </main>
  );
}
