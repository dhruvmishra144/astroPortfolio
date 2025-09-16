'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const flowmatic = () => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Ref for the sticky heading, explicitly typed as HTMLHeadingElement
    const stickyHeadingRef = useRef<HTMLHeadingElement>(null);

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

    const content = [
        "Manual data handling between business apps is not only inefficient but also prone to errors. The absence of a user-friendly integration tool creates a significant productivity gap. Our goal was to close that gap with an AI-powered, no-code integration solution tailored for everyday users.",
        "I personally experienced these challenges while working with a client who had to manually transfer and reconcile data across four different SaaS tools every day. It not only consumed hours of their time but also led to inconsistent records, miscommunication, and frustration across teams. Witnessing this firsthand, I realized how underserved non-technical users are when it comes to building workflows or automation.",
        "That experience pushed me to explore how design could bridge this gap. I decided to take on the challenge of creating a simple, AI-powered, no-code iPaaS platform that empowers users—regardless of their technical background—to create seamless data flows between applications with confidence and clarity."
    ];

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            if (stickyHeadingRef.current) {
                ScrollTrigger.create({
                    trigger: stickyHeadingRef.current,
                    start: "top top",
                    endTrigger: stickyHeadingRef.current.nextElementSibling,
                    end: "bottom top",
                    pin: true,
                    pinSpacing: false,
                    // markers: true, // Uncomment for visual debugging

                    // Callbacks to add/remove padding
                    onEnter: () => {
                        // When the trigger starts pinning
                        gsap.to(stickyHeadingRef.current, { paddingTop: '1rem', duration: 0.2 }); // Animate to pt-4 (1rem)
                    },
                    onLeaveBack: () => {
                        // When scrolling back up and the element unpins
                        gsap.to(stickyHeadingRef.current, { paddingTop: '0rem', duration: 0.2 }); // Animate back to pt-0
                    },
                    onLeave: () => {
                        // When the element unpins at the bottom (scrolling down past its parent)
                        gsap.to(stickyHeadingRef.current, { paddingTop: '0rem', duration: 0.2 }); // Animate back to pt-0
                    },
                    onEnterBack: () => {
                        // When scrolling back up and entering the pinned state from below
                        gsap.to(stickyHeadingRef.current, { paddingTop: '1rem', duration: 0.2 }); // Animate to pt-4
                    },
                });
            }
        });

        return () => {
            mm.revert();
        };

    }, []);

    return (
        <div className="container mx-auto px-4 py-20">
            <main className="flex flex-col gap-16 px-2 lg:px-24">
                <section className="flex flex-col gap-2">
                    <p className="text-lg lg:text-2xl font-medium">FlowMatic</p>
                    <h1 className="text-2xl lg:text-6xl font-extralight leading-tight">Next-Gen AI iPaaS: Streamlined Workflows, Rapid Integrations</h1>
                </section>
                <Image width={600} height={200} className="w-full rounded-2xl" src={"https://placehold.co/600x300"} alt={""} />
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-sm sm:text-base">
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
                </section>
                {/* This is the only "Why This Matters" section. It's controlled by GSAP */}
                <section className="grid grid-cols-1 lg:grid-cols-2">
                    <h3 className="text-4xl font-semibold" ref={stickyHeadingRef}>Why This Matters</h3>
                    <div className="flex flex-col gap-4">
                        {content.map((paragraph, index) => (
                            <p key={index} className="text-xl text-mute-forground">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default flowmatic;