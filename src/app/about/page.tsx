"use client"
import Image from "next/image";
import { useRef, useEffect } from "react";
import { PiArrowRightThin } from "react-icons/pi";
import { RiLinkedinBoxFill } from "react-icons/ri";
import gsap from 'gsap'; // 👈 Import GSAP
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // 👈 Import ScrollTrigger plugin

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  
  const mainRef = useRef(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, mainRef);
    
    return () => ctx.revert();
  }, []);
  
  const testimonials = [
    {
      text: 'Had a great experience working with Dhruv Mishra. Work satisfaction for client seems to be priority for him. Found his designing skills to be updated with current market trends. He provided creative design after brainstorming the right solution for my UI/UX work given to him. Highly recommend him to someone looking for quality work.',
      author: 'Kavinder Singh',
    },
    {
      text: 'I really liked the services provided to me. It was value for money and the services were timely delivered. I would recommend you to the others as well. Looking forward to work with you again. Good job done!',
      author: 'Divya Kukreja',
    },
    {
      text: 'A perfect place for your website development. Have the ability to create, design, Hosting, Managing sites, logo making and optimize and they also guide you throughout the process. Highly recommended',
      author: 'Bhawana Rana',
    },
    {
      text: 'Dhruv is very professional and liked working with him.I will surely like to collaborate with him in future.',
      author: 'Vandana Singh',
    },
  ];
  
  
  return (
    <main ref={mainRef} className="container mx-auto h-auto">
      
      {/* Hero Section */}
      <section className='flex flex-col items-center justify-center h-[calc(100vh-250px)] animate-on-scroll'>
        <p className='text-4xl lg:text-6xl text-center text-cyan-600 mb-4'>
          I&apos;m absolutely delighted to know
        </p>
        <p className='text-3xl lg:text-5xl text-center text-slate-200 mb-8'>
          that you&apos;re interested to learn more about me!
        </p>
      </section>
      
      {/* Intro Section */}
      <section className='flex flex-col lg:flex-row gap-6 px-8 mb-16 xl:items-center animate-on-scroll justify-between'>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl lg:text-6xl text-white leading-snug">Hey there! <br className="hidden lg:block" /><span className="font-bold text-cyan-400">I’m Dhruv Mishra</span></h1>
          <p className='text-left text-slate-200 mb-6 text-lg max-w-[1024px]'>A Product Designer with decade of experience...</p>
        </div>
        <Image width={1024} height={576} src={"/sample-photo.jpg"} className="w-[100%] lg:w-[50%] lg:rounded-4xl rounded-2xl" alt={""} />
      </section>
      
      {/* Experience Section */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">Experience & Location</h2>
          </div>
          <div>
            <ul className="text-gray-200 mb-4 text-lg flex flex-col gap-2">
              <li><strong>Years of Experience:</strong> 10+ Years</li>
              <li><strong>Based in:</strong> New Delhi, India</li>
              <li><strong>Availability:</strong> Available for exciting Full-time Job or Collaborative Freelance Projects</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">My Journey</h2>
          </div>
          <div className="flex flex-col gap-4 text-lg text-white">
            <p>Ever since I was a kid with a pencil in hand, art and design have been my true love...</p>
            <p>During my college years, I seized every opportunity to turn creative passion into real-world practice...</p>
            <p>Over the years, I’ve had the privilege of working across various industries...</p>
          </div>
        </div>
      </section>
      
      {/* LinkedIn CTA */}
      <section className="animate-on-scroll">
        <a
          href={'https://www.linkedin.com/in/dhruvmishra144/'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 lg:flex-row group p-8 bg-cyan-800/15 backdrop-blur-md justify-between rounded-xl mb-16 items-center"
        >
          <h2 className="text-2xl text-gray-400 group-hover:text-gray-200 transition-all duration-300">
            Learn more about my Professional Timeline
          </h2>
          <div className="flex flex-row gap-4 items-center">
            <RiLinkedinBoxFill className='text-3xl lg:text-5xl' />
            <p className="text-2xl lg:text-3xl">Linkedin</p>
            <PiArrowRightThin className="text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300" />
          </div>
        </a>
      </section>
      
      {/* Tools Section */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">My Tools & Techniques</h2>
          </div>
          <div>
            <p className="text-lg mb-4">I believe staying current with design trends is paramount. Here’s a quick look at my toolkit:</p>
            <ul className="text-gray-200 mb-4 text-lg flex flex-col gap-2">
              <li><strong>Figma:</strong> For wireframes, flows, and prototypes</li>
              <li><strong>Notion:</strong> For documentation and productivity</li>
              <li><strong>ChatGPT & Gemini:</strong> For AI research & creative assistance</li>
              <li><strong>VS Code:</strong> For coding</li>
              <li><strong>Next.js:</strong> For frontend dev</li>
              <li><strong>Firebase:</strong> For backend integration</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="animate-on-scroll">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">What People Are Saying</h2>
          </div>
          <div className="flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] lg:min-w-[500px] bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 flex-shrink-0"
              >
                <p className="text-lg mb-4 italic">“{testimonial.text}”</p>
                <p className="font-light text-cyan-400">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}