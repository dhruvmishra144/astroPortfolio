
'use client'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomepageAnimation({ children }: { children: React.ReactNode }) {
    const home = useRef(null);
    const skill = useRef(null);
    const skillPara = useRef(null);
    const platform = useRef(null);
    const caseStudyHeading = useRef(null);
    const availableForProject = useRef(null);

    useGSAP(() => {
        gsap.from([skill.current, platform.current, skillPara.current], {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        gsap.from([caseStudyHeading.current, availableForProject.current], {
            opacity: 0,
            y: 20,
            duration: 1,
            scrollTrigger: {
                trigger: caseStudyHeading.current,
                start: "top 90%",
            }
        });
    }, { scope: home });

    return (
        <div ref={home}>
            {children}
        </div>
    )
}
