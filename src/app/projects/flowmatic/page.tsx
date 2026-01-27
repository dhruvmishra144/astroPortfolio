'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LongCaseStudy from "./_components/long-case-study";

const Flowmatic = () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Use a ref to store the array of ScrollTrigger instances for cleanup
    const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

    const data = [
        {
            title: "MY ROLE",
            content: [
                "UX Lead - Interaction Design, Visual Design, Usability Testing, Rapid Prototyping",
            ],
        },
        {
            title: "DELIVERABLES",
            content: [
                "User Research",
                "Component Libraries",
                "High Fidelity Designs",
            ],
        },
        {
            title: "TEAM",
            content: [
                "Product Managers",
                "Web Developers",
            ],
        },
        {
            title: "YEAR",
            content: ["2025"],
        },
    ];

    useEffect(() => {
        const mm = gsap.matchMedia();
        
        // Cleanup previous scroll triggers
        if (scrollTriggersRef.current) {
            scrollTriggersRef.current.forEach(t => t.kill());
            scrollTriggersRef.current = [];
        }

        mm.add("(min-width: 1024px)", () => {
            // Select all headings and their corresponding content
            const headings = document.querySelectorAll('.project-heading');
            
            headings.forEach((heading) => {
                // Find the content associated with this heading. 
                // In our structure, it is the next sibling or we can search within the parent section
                const section = heading.closest('.project-section');
                const content = section?.querySelector('.project-content');
                
                if (heading && content) {
                   const st = ScrollTrigger.create({
                        trigger: heading,
                        start: "top top",
                        endTrigger: content,
                        end: "bottom top", // Ends when the bottom of the content hits the top of the viewport
                        pin: true,
                        pinSpacing: false,
                        markers: false,
                        onEnter: () => gsap.to(heading, { paddingTop: '1rem', duration: 0.2 }),
                        onLeaveBack: () => gsap.to(heading, { paddingTop: '0rem', duration: 0.2 }),
                        onLeave: () => gsap.to(heading, { paddingTop: '0rem', duration: 0.2 }),
                        onEnterBack: () => gsap.to(heading, { paddingTop: '1rem', duration: 0.2 }),
                    });
                    scrollTriggersRef.current.push(st);
                }
            });
        });

        return () => {
            mm.revert();
            if (scrollTriggersRef.current) {
                scrollTriggersRef.current.forEach(t => t.kill());
                scrollTriggersRef.current = [];
            }
        };

    }, []);

    return (
        <div className="container mx-auto px-4 py-20">
            <main className="flex flex-col gap-16 px-2 lg:px-24">
                <section className="flex flex-col gap-2">
                    <p className="text-lg lg:text-2xl font-medium">FlowMatic</p>
                    <h1 className="text-2xl lg:text-6xl font-extralight leading-tight">Next-Gen AI iPaaS: Streamlined Workflows, Rapid Integrations</h1>
                </section>
                
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <Image width={600} height={200} className="w-full rounded-2xl" src={"/flowmatic-card-image.jpg"} alt="" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 text-sm sm:text-base self-start">
                      {data.map((block, index) => (
                          <div key={index} className="space-y-2">
                              <h2 className="text-white font-bold text-md mb-3">{block.title}</h2>
                              {block.content.length === 1 ? (
                                  <p className="text-gray-300 text-lg">{block.content[0]}</p>
                              ) : (
                                  <ul className="text-gray-300 space-y-1 text-lg flex flex-col">
                                      {block.content.map((item, i) => (
                                          <li key={i}>{item}</li>
                                      ))}
                                  </ul>
                              )}
                          </div>
                      ))}
                  </div>
                </section>

                <section>
                    <div className="flex flex-col gap-4">
                        <LongCaseStudy />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Flowmatic;
