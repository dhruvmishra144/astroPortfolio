'use client'
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const NUM_ELEMENTS = 5;
const MIN_SIZE = 350;
const MAX_SIZE = 650;
const MIN_DURATION = 8;
const MAX_DURATION = 15;
const MIN_OPACITY = 0.1;
const MAX_OPACITY = 0.3;
const ELEMENT_COLOR = 'bg-cyan-500';
const BACKGROUND_COLOR = 'bg-slate-950';
const BLUR_AMOUNT = '60px';
const MOVEMENT_RANGE = 600;
const BLEND_MODE = 'screen';

interface ElementProps {
    id: number;
    size: number;
    initialRotation: number;
}

const BackgroundAnimation = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const elementsData = useMemo<ElementProps[]>(() => {
        if (typeof window === 'undefined') {
            return [];
        }
        elementRefs.current = [];
        return Array.from({ length: NUM_ELEMENTS }).map((_, index) => ({
            id: index,
            size: gsap.utils.random(MIN_SIZE, MAX_SIZE),
            initialRotation: gsap.utils.random(0, 360),
        }));
    }, []);

    useGSAP(
        () => {
            if (!isMounted || !containerRef.current || !elementRefs.current) return;

            const backgroundContainer = containerRef.current.querySelector('.fixed');
            if (backgroundContainer) {
                gsap.to(backgroundContainer, {
                    y: "-30vh",
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1,
                    },
                });
            }

            elementRefs.current.forEach((elementEl, index) => {
                if (!elementEl) return;
                const elementData = elementsData[index];
                if (!elementData) return;

                const duration = gsap.utils.random(MIN_DURATION, MAX_DURATION);
                const peakOpacity = gsap.utils.random(MIN_OPACITY, MAX_OPACITY);

                gsap.set(elementEl, {
                    position: 'absolute',
                    left: `${gsap.utils.random(0, 100)}%`,
                    top: `${gsap.utils.random(0, 100)}%`,
                    xPercent: -50,
                    yPercent: -50,
                    opacity: 0,
                    scale: 0.5,
                    rotation: 0,
                    skewX: 0,
                    filter: `blur(${BLUR_AMOUNT})`,
                    mixBlendMode: BLEND_MODE as string,
                });

                const tl = gsap.timeline({
                    repeat: -1,
                    delay: gsap.utils.random(0, MAX_DURATION),
                    repeatDelay: gsap.utils.random(1, 4),
                    defaults: { ease: 'none' }
                });

                tl.to(elementEl, {
                    opacity: peakOpacity,
                    scale: 1,
                    duration: duration * 0.3,
                    ease: 'power1.out'
                })
                .to(elementEl, {
                    x: `random(${-MOVEMENT_RANGE}, ${MOVEMENT_RANGE}, true)`,
                    y: `random(${-MOVEMENT_RANGE}, ${MOVEMENT_RANGE}, true)`,
                    rotation: `random(-360, 360, true)`,
                    skewX: `random(-20, 20)`,
                    duration: duration * 0.7,
                    ease: 'none'
                }, ">")
                .to(elementEl, {
                    opacity: 0,
                    scale: 0.3,
                    duration: duration * 0.4,
                    ease: 'power1.in'
                }, `-=${duration * 0.2}`);
            });
        },
        {
            scope: containerRef,
            dependencies: [elementsData, isMounted],
            revertOnUpdate: true
        }
    );

    return (
        <div
            ref={containerRef}
            className={`relative min-h-screen w-full ${BACKGROUND_COLOR} isolate overflow-hidden`}
        >
            {isMounted && (
                <div className={`fixed inset-0 z-0 pointer-events-none}`}>
                    {elementsData.map((elem, index) => (
                        <div
                            key={elem.id}
                            ref={(el) => { elementRefs.current[index] = el; }}
                            className={`${ELEMENT_COLOR} hidden md:block`}
                            style={{
                                width: `${elem.size}px`,
                                height: `${elem.size * gsap.utils.random(0.5, 0.8)}px`,
                                borderRadius: '100%',
                                willChange: 'transform, opacity, filter',
                            }}
                        ></div>
                    ))}
                </div>
            )}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundAnimation;
