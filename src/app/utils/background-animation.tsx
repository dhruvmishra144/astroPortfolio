"use client"
// src/components/BackgroundAnimation.tsx (or your preferred path)
import React, { useRef, useMemo, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

// --- Configuration for Abstract Waves ---
const NUM_ELEMENTS = 15; // Fewer, larger elements might work better
const MIN_SIZE = 150; // Larger base size
const MAX_SIZE = 450;
const MIN_DURATION = 8; // Slower movement
const MAX_DURATION = 15;
// const MIN_PEAK_SCALE = 1.0;
// const MAX_PEAK_SCALE = 1.5;
const MIN_OPACITY = 0.1; // Can keep these relatively low for subtlety
const MAX_OPACITY = 0.5;
const ELEMENT_COLOR = 'bg-cyan-500'; // Adjusted color slightly
const BACKGROUND_COLOR = 'bg-slate-950';
const BLUR_AMOUNT = '60px'; // Significantly more blur
const MOVEMENT_RANGE = 300; // How far elements travel (pixels)
// Optional: Add blend mode for more visual effect (e.g., 'screen', 'overlay', 'soft-light')
const BLEND_MODE = 'screen'; // Try 'normal' if you don't want blending
// ---------------------

// Renamed interface
interface ElementProps {
    id: number;
    size: number;
    // Add initial properties relevant for wave motion if needed (e.g., initial angle)
    initialRotation: number;
}

const BackgroundAnimation = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const elementRefs = useRef<(HTMLDivElement | null)[]>([]); // Renamed ref array
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    // Memoize element properties
    const elementsData = useMemo<ElementProps[]>(() => {
        elementRefs.current = [];
        return Array.from({ length: NUM_ELEMENTS }).map((_, index) => ({
            id: index,
            size: gsap.utils.random(MIN_SIZE, MAX_SIZE),
            initialRotation: gsap.utils.random(0, 360), // Give each a random start rotation
        }));
    }, []); // Re-run only if NUM_ELEMENTS changes conceptually

    // --- GSAP Wave Animation ---
    useGSAP(
        () => {
            if (!containerRef.current || !elementRefs.current) return;

            elementRefs.current.forEach((elementEl, index) => {
                if (!elementEl) return;

                // Get data for this specific element
                const elementData = elementsData[index];
                if (!elementData) return; // Type guard

                const duration = gsap.utils.random(MIN_DURATION, MAX_DURATION);
                // const peakScale = gsap.utils.random(MIN_PEAK_SCALE, MAX_PEAK_SCALE); // Less emphasis on scaling
                const peakOpacity = gsap.utils.random(MIN_OPACITY, MAX_OPACITY);

                // --- MODIFIED INITIAL STATE ---
                gsap.set(elementEl, {
                    position: 'absolute',
                    left: `${gsap.utils.random(0, 100)}%`,
                    top: `${gsap.utils.random(0, 100)}%`,
                    xPercent: -50,
                    yPercent: -50,
                    opacity: 0,
                    // Start with initial rotation, maybe no initial scale or scale 1?
                    // Let's start scaled down slightly and without extra rotation/skew
                    scale: 0.5, // Start smaller than full size
                    rotation: 0, // Start rotation state
                    skewX: 0, // Start skew state
                    filter: `blur(${BLUR_AMOUNT})`, // Apply heavy blur
                    // Apply blend mode via style - ensure parent has 'isolate' or similar
                    mixBlendMode: BLEND_MODE as any, // Cast as any if TS complains
                });
                // --- END MODIFIED INITIAL STATE ---


                // Create an infinite animation loop for each element
                const tl = gsap.timeline({
                    repeat: -1,
                    delay: gsap.utils.random(0, MAX_DURATION),
                    repeatDelay: gsap.utils.random(1, 4), // Adjust delay between loops
                    defaults: { ease: 'none' } // Use linear easing for constant flow
                });

                // --- MODIFIED WAVE ANIMATION ---
                // 1. Fade in and potentially grow slightly
                tl.to(elementEl, {
                    opacity: peakOpacity,
                    scale: 1, // Grow to full size (or a target size)
                    // rotation: elementData.initialRotation, // Rotate to its initial random rotation
                    duration: duration * 0.3, // Faster fade in
                    ease: 'power1.out' // Smoother fade
                })
                // 2. Main wave motion: Move across screen, rotate, skew
                .to(elementEl, {
                    x: `random(${-MOVEMENT_RANGE}, ${MOVEMENT_RANGE}, true)`, // Move horizontally (+=)
                    y: `random(${-MOVEMENT_RANGE}, ${MOVEMENT_RANGE}, true)`, // Move vertically (+=)
                    rotation: `random(-360, 360, true)`, // Add significant rotation (+=)
                    skewX: `random(-20, 20)`, // Add some skew
                    duration: duration * 0.7, // Longer movement phase
                    ease: 'none' // Linear movement
                }, ">") // Start after fade in completes
                // 3. Fade out (could overlap with end of movement)
                .to(elementEl, {
                    opacity: 0,
                    scale: 0.3, // Shrink down again
                    duration: duration * 0.4, // Fade out duration
                    ease: 'power1.in' // Smoother fade out
                }, ">-=" + duration * 0.2); // Start fade out slightly before movement ends

            });
        },
        {
            scope: containerRef,
            dependencies: [elementsData], // Dependency array
            revertOnUpdate: true
        }
    );

    

    return (
        <div
            ref={containerRef}
            // Ensure isolation context for blend modes if used
            className={`relative min-h-screen w-full ${BACKGROUND_COLOR} isolate overflow-hidden`}
        >
            {/* Fixed Background Container for Elements */}
            {<div className="fixed inset-0 z-0 pointer-events-none">
                {elementsData.map((elem, index) => (
                    <div
                        suppressHydrationWarning
                        key={elem.id}
                        ref={(el) => { elementRefs.current[index] = el; }}
                        // REMOVED rounded-full. Default is rectangle.
                        // Add base styles here
                        className={`${ELEMENT_COLOR}`} // Just the color
                        style={{
                            width: `${elem.size}px`,
                            // Make height different from width for rectangles
                            height: `${elem.size * gsap.utils.random(0.5, 0.8)}px`,
                            borderRadius: '100%', // Optional: slightly rounded corners
                            // Opacity, scale, position, filter, transform controlled by GSAP
                            // mixBlendMode is set by GSAP
                            willChange: 'width height transform, opacity, filter', // Hint browser for optimization
                        }}
                        
                    ></div>
                ))}
            </div>}

            {/* Foreground Content Wrapper */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default BackgroundAnimation;