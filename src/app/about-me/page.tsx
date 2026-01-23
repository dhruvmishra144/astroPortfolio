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
        nextTestimonial();
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);


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
    <main ref={mainRef} className="container mx-auto h-auto">
      {/* Header Section */}
      <div className="container h-[calc(100vh-110px)] md:h-[calc(100vh-98px)] mx-auto grid md:grid-cols-2 items-center justify-center px-4 overflow-hidden">
        <div ref={intro} className="text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-extralight main-heading px-4 text-slate-400 heading-text">
            Hi, I am <span className="text-white heading-text">Dhruv Mishra</span>
            </h1>
            <p className='text-2xl lg:text-4xl text-center md:text-left text-slate-200 max-w-4xl leading-relaxed mt-6'>
                Architecting High-Impact Solutions to bridge the gap between complex user needs and technical scalability.
            </p>
        </div>
        <div className='relative flex justify-center items-center p-8' ref={imageDiv}>
          <div className="avatar-container">
            <Image width={300} height={300} className='w-[200px] lg:w-[350px] lg:h-auto transition-all duration-300 avatar z-10 rounded-full' src={'/avatar.png'} alt={'Dhruv Mishra Profile'} />
          </div>
        </div>
      </div>
      
      {/* Intro Section - Impact Text */}
      <section className='flex flex-col items-center justify-center gap-6 px-8 mb-32 animate-on-scroll'>
        <p className='text-center text-slate-200 text-2xl lg:text-4xl max-w-[800px] leading-relaxed'>
          With over 3 years of specializing in <span className="highlight-text">Product Design & Technical Architecture</span>, I help companies reduce technical debt through design systems and user-centric logic.
        </p>
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
            <p>My transition from <span className="text-white">Developer to Product Designer</span> was driven by the realization that code is only as powerful as the problem it solves. I focus on the "Why" before the "How."</p>
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
            "Deep-dive into my professional ROI and impact history"
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
              <button onClick={prevTestimonial} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><PiArrowLeftThin/></button>
              <button onClick={nextTestimonial} className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"><PiArrowRightThin/></button>
          </div>
        </div>
      </section>
    </main>
  );
}