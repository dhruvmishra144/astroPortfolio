'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GoFlow = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

    const impactMetrics = [
        { label: "Onboarding Speed", value: "40%", sub: "Outcome-driven setup", icon: "⏱️" },
        { label: "Config Errors", value: "-50%", sub: "AI-assisted mapping", icon: "❌" },
        { label: "Recovery Time", value: "35%", sub: "One-click agentic rollback", icon: "🔁" },
    ];

    const meta = [
        { title: "MY ROLE", content: ["UX Lead", "Interaction Strategy", "Full-Stack Feasibility"] },
        { title: "THE STACK", content: ["Next.js", "Firebase (NoSQL)", "GSAP", "Material 3"] },
        { title: "INSIGHT", content: ["Fear-driven behavior", "Agentic accountability"] },
        { title: "YEAR", content: ["2026 Edition"] },
    ];

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        // GSAP Context is the "Senior" way to handle React cleanup
        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const sections = document.querySelectorAll('.project-section');
                sections.forEach((section) => {
                    const heading = section.querySelector('.project-heading');
                    const content = section.querySelector('.project-content');

                    if (heading && content) {
                        ScrollTrigger.create({
                            trigger: section,
                            start: "top 120px",
                            end: "bottom 100%",
                            pin: heading,
                            pinSpacing: false,
                        });
                    }
                });
            });
        }, mainRef);

        return () => ctx.revert(); // Total cleanup
    }, []);

    return (
        <div ref={mainRef} className="text-white min-h-screen font-sans selection:bg-cyan-500/30">
            <div className="container mx-auto px-6 lg:px-12 py-20">
                
                {/* 🚀 HEADER / QUICK-SCAN */}
                <header className="max-w-5xl mb-32">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-cyan-600/20 text-cyan-400 rounded-full text-xs font-black tracking-[0.2em] uppercase">Case Study</span>
                        <span className="text-gray-500 font-medium tracking-tighter">Solving the Confidence Gap</span>
                    </div>
                    <h1 className="text-5xl lg:text-8xl font-light mb-8 leading-[1.05] tracking-tighter">
                        GoFlow: <span className="text-gray-500">Agentic-AI for Data Integrity.</span>
                    </h1>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
                        <p className="lg:col-span-8 text-xl lg:text-3xl text-gray-400 leading-snug">
                            Led UX strategy for an iPaaS that enables non-technical owners to automate complex data flows 
                            without the fear of breaking live systems.
                        </p>
                        <div className="lg:col-span-4 grid grid-cols-2 gap-8 border-l border-white/10 pl-8">
                            {meta.map((item, i) => (
                                <div key={i} className="space-y-1">
                                    <p className="text-[10px] font-black text-cyan-500 tracking-widest uppercase">{item.title}</p>
                                    {item.content.map((text, j) => (
                                        <p key={j} className="text-sm text-gray-300 font-medium leading-tight">{text}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </header>

                {/* IMPACT SECTION */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-40">
                    {impactMetrics.map((m, i) => (
                        <div key={i} className="p-8 bg-cyan-500/10 border border-white/5 rounded-[2rem] hover:border-cyan-500/30 transition-all duration-500 group">
                            <span className="text-2xl mb-6 block group-hover:scale-110 transition-transform">{m.icon}</span>
                            <h3 className="text-5xl font-bold mb-1 tracking-tighter italic">{m.value}</h3>
                            <p className="text-gray-300 font-semibold text-lg">{m.label}</p>
                            <p className="text-gray-500 text-sm mt-1">{m.sub}</p>
                        </div>
                    ))}
                </section>

                <main className="flex flex-col gap-48">

                    {/* 01. THE PROBLEM (Nancy's Persona) */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-xs font-black tracking-[0.3em] text-cyan-500 uppercase">01. Human Context</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-10">
                            <h3 className="text-3xl lg:text-6xl font-light tracking-tight leading-tight">Fear is the primary friction.</h3>
                            <div className="text-gray-400 text-lg lg:text-xl space-y-8 leading-relaxed max-w-2xl">
                                <p>
                                    Market analysis of Zapier and Workato revealed a failure pattern: risk is pushed entirely onto non-technical users. 
                                    Users like <span className="text-white">Nancy (Retail Owner)</span> don't fail because of complexity—they fail because mistakes feel irreversible.
                                </p>
                                <blockquote className="border-l-4 border-cyan-500/50 pl-8 py-2 text-white font-medium text-2xl tracking-tight">
                                    "I stopped because I didn't know what would happen if this ran."
                                </blockquote>
                            </div>
                        </div>
                    </section>

                    {/* 02. DISCOVERY (The Strategy Flow) */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-xs font-black tracking-[0.3em] text-cyan-500 uppercase">02. Strategy</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12">
                            <div className="bg-[#111] p-4 rounded-[2.5rem] border border-white/5 overflow-hidden">
                                <Image 
                                    src="/GoFlow-Research-Flows.jpg" 
                                    width={1200} height={800} 
                                    className="rounded-[2rem] w-full hover:scale-[1.02] transition-transform duration-700" 
                                    alt="Strategy synthesis board"
                                />
                            </div>
                            <div className="max-w-2xl space-y-6">
                                <h4 className="text-2xl font-bold italic tracking-tight underline decoration-cyan-500 underline-offset-8">Synthesizing Market Gaps</h4>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    This board mapped competitive failure modes to design pillars. 
                                    The result: <span className="text-white font-bold underline decoration-white/20">Explain before act</span> and <span className="text-white font-bold underline decoration-white/20">Recover by default</span>.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* 03. THE SOLUTION (Ghost Fields) */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-xs font-black tracking-[0.3em] text-cyan-500 uppercase">03. The Pivot</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12">
                            <h3 className="text-3xl lg:text-6xl font-light tracking-tight">AI-Assisted Visual Mapping.</h3>
                            <div className="bg-gradient-to-br from-cyan-500/10 to-transparent p-10 rounded-[2.5rem] border border-cyan-500/20 max-w-2xl">
                                <p className="text-gray-300 text-xl leading-relaxed">
                                    I introduced <span className="text-cyan-400 font-bold">Ghost Fields</span>—visual placeholders that show exactly where data will land and how it transforms 
                                    <span className="italic underline ml-2">before any run occurs.</span>
                                </p>
                            </div>
                            
                        </div>
                    </section>

                    {/* 04. USER JOURNEY (The SME Path) */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-xs font-black tracking-[0.3em] text-cyan-500 uppercase">04. The Journey</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12">
                            <div className="bg-[#111] p-4 rounded-[2.5rem] border border-white/5">
                                <Image 
                                    src="/User-flow-GoFlow.jpg" 
                                    width={1200} height={800} 
                                    className="rounded-[2rem] w-full" 
                                    alt="User confidence journey"
                                />
                            </div>
                            <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                                Red nodes represent identified <span className="text-white font-bold">"Fear Zones"</span>. 
                                The flow uses agentic checkpoints to ensure Nancy never feels "trapped" by a decision.
                            </p>
                        </div>
                    </section>

                    {/* 05. TECHNICAL BACKEND (Full-Stack Flex) */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-xs font-black tracking-[0.3em] text-cyan-500 uppercase">05. Implementation</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12">
                            <h3 className="text-3xl lg:text-6xl font-light tracking-tight leading-tight">Architecture for Accountability.</h3>
                            <div className="bg-[#111] p-4 rounded-[2.5rem] border border-white/5">
                                <Image 
                                    src="/Backend-Flow-GoFlow.jpg" 
                                    width={1200} height={800} 
                                    className="rounded-[2rem] w-full" 
                                    alt="Agentic backend logic"
                                />
                            </div>
                            <div className="max-w-2xl space-y-6">
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    Leveraging <span className="text-white font-semibold">NoSQL schema constraints</span>, I engineered the agent logic to load asynchronously. 
                                    The <span className="text-cyan-400">Recovery Agent</span> provides a guaranteed one-click rollback to a known safe state.
                                </p>
                            </div>
                            
                        </div>
                    </section>

                    {/* FOOTER IMPACT */}
                    <section className="py-60 border-t border-white/5 text-center space-y-8">
                        <h2 className="text-5xl lg:text-8xl font-light tracking-tighter">Trust is built <span className="text-gray-500">during failure.</span></h2>
                        <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black tracking-[0.4em] uppercase text-cyan-500">
                            <span>Human Empathy</span>
                            <span>•</span>
                            <span>System Responsibility</span>
                            <span>•</span>
                            <span>Technical Rigor</span>
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
};

export default GoFlow;