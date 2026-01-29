'use client'
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const GoFlow = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const ctx = gsap.context(() => {
          const mm = gsap.matchMedia();
    
          mm.add("(min-width: 1024px)", () => {
            document.querySelectorAll(".project-section").forEach((section) => {
              const heading = section.querySelector(".project-heading");
              const content = section.querySelector(".project-content");
    
              if (!heading || !content) return;
    
              ScrollTrigger.create({
                trigger: heading,
                start: "top top+=120",
                endTrigger: content,
                end: "bottom top+=160",
                pin: heading,
                pinSpacing: false,
                invalidateOnRefresh: true,
              });
            });
          });
        }, mainRef);
    
        return () => ctx.revert();
      }, []);

    const validationData = [
        { metric: "Completion Rate", early: "~60%", final: "~88%", finalColor: "text-green-400" },
        { metric: "Avg Setup Time", early: "18 min", final: "11 min", finalColor: "text-white" },
        { metric: "Recovery", early: "Low", final: "High", finalColor: "text-cyan-400" },
    ];

    return (
        <div ref={mainRef} className="text-[#e5e5e5] min-h-screen font-sans selection:bg-cyan-500/30 pb-40 leading-relaxed">
            <div className="container mx-auto px-6 lg:px-16 pt-24 md:pt-32">

                {/* --- HEADER --- */}
                <header className="max-w-6xl mb-24">
                    <div className="flex items-center gap-4 mb-8">
                        <span className="h-[1px] w-12 bg-cyan-500"></span>
                        <span className="text-cyan-400 font-black tracking-[0.4em] uppercase text-sm md:text-md">2026 Case Study</span>
                    </div>
                    <h1 className="text-6xl md:text-8xl lg:text-[11rem] font-light mb-6 tracking-tighter leading-[0.85] text-white italic">
                        GoFlow<span className="text-cyan-500 not-italic">.</span>
                    </h1>
                    <h3 className="text-2xl md:text-4xl lg:text-5xl text-gray-400 font-light tracking-tight leading-tight max-w-4xl">
                        AI‑Powered iPaaS for Automatic Data Flow Migration
                    </h3>
                </header>

                <div className="h-[2px] w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent my-24 md:my-32"></div>

                {/* --- RECRUITER SCAN --- */}
                <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 mb-32 md:mb-48">
                    <div className="lg:col-span-4">
                        <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">
                            🚀 Recruiter Quick‑Scan
                        </h2>
                    </div>
                    <div className="project-content lg:col-span-8 space-y-12 text-xl md:text-2xl font-light leading-relaxed text-gray-300">
                        <p><strong className="text-white font-semibold italic">What:</strong> Led UX strategy and end‑to‑end product design for an <span className="text-white">agentic‑AI powered iPaaS</span> that helps business owners automate data flows without fear of breaking live systems.</p>
                        <p><strong className="text-white font-semibold italic">Why:</strong> Market analysis of Zapier, Workato, Celigo, Jitterbit, Elastic.io, and Skyvia revealed a consistent failure pattern: responsibility and risk are pushed entirely onto non‑technical users at the moment of execution.</p>
                        
                        <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-14">
                            <p className="text-sm md:text-md font-black tracking-widest text-cyan-400 uppercase mb-8">Impact (Design‑Driven)</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                                <div className="space-y-4">
                                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">40%</div>
                                    <p className="text-base md:text-lg leading-snug"><span className="text-white font-bold">Onboarding</span> speed via outcome‑driven setup</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">~50%</div>
                                    <p className="text-base md:text-lg leading-snug">Fewer <span className="text-white font-bold">Config Errors</span> via AI mapping</p>
                                </div>
                                <div className="space-y-4">
                                    <div className="text-4xl md:text-5xl font-bold text-white tracking-tighter italic">~35%</div>
                                    <p className="text-base md:text-lg leading-snug">Faster <span className="text-white font-bold">Recovery</span> via agentic rollback</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-500 mt-12 font-medium tracking-wide">Metrics derived from moderated proxy usability testing and comparative task analysis.</p>
                        </div>

                        <p><strong className="text-white font-semibold italic">My Role:</strong> UX Lead — problem framing, research synthesis, interaction strategy, visual design, usability validation. Leveraged my <span className="text-cyan-400 font-medium">full‑stack background (Firebase, NoSQL)</span> to ensure designs were technically feasible.</p>
                        
                        <blockquote className="bg-cyan-500/5 border-l-4 border-cyan-500 p-8 md:p-10 rounded-r-[2rem] text-xl md:text-3xl italic text-white leading-tight tracking-tight">
                            "People don’t fail at integrations because they’re complex — they fail because they’re afraid of irreversible data mistakes."
                        </blockquote>
                    </div>
                </section>

                <div className="text-center py-24 md:py-40">
                    <h2 className="text-4xl md:text-5xl lg:text-[7rem] font-light tracking-tighter text-white opacity-20 italic">Full Case Study</h2>
                </div>

                <main className="flex flex-col gap-32 md:gap-64">
                    
                    {/* 1. WHY THIS MATTERS */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">1. Why This Matters</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-10 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                             <p>Modern businesses operate across CRMs, invoicing tools, ERPs, and marketing platforms. Automation promises efficiency, but one misconfigured workflow can corrupt live customer or order data.</p>
                            
                            <p>Instead of framing this as a lack of skill, research surfaced something more human:</p>
                            <blockquote className="text-2xl md:text-4xl text-white font-light leading-snug italic border-l border-white/20 pl-6 md:pl-10">
                                Business owners like Nancy, a non‑technical retail owner, feel paralyzed by the fear that a single mistake could damage live data — and they won’t know how to recover.
                            </blockquote>
                            <p className="text-base md:text-xl text-gray-500 font-medium tracking-wide">This fear — not usability alone — shapes behavior.</p>
                        </div>
                    </section>

                    {/* 2. MARKET REALITY */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">2. Market Reality</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                <div className="space-y-6">
                                    <p className="text-xs font-black tracking-widest text-cyan-400 uppercase">Secondary Research</p>
                                    <ul className="space-y-3 text-base md:text-lg font-medium text-gray-400">
                                        <li>• UX teardowns of 6 major iPaaS</li>
                                        <li>• G2, Capterra, Reddit reviews</li>
                                        <li>• Industry automation reports</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <p className="text-xs font-black tracking-widest text-cyan-400 uppercase">Observed Patterns</p>
                                    <ul className="space-y-3 text-base md:text-lg font-medium text-gray-400">
                                        <li>• <span className="text-white">Low‑code:</span> Limited recovery</li>
                                        <li>• <span className="text-white">Enterprise:</span> Schema literacy hurdles</li>
                                        <li>• <span className="text-white">Flexible:</span> Cognitive load shifts</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="bg-cyan-500/10 border-2 border-cyan-500/30 rounded-[2rem] p-8 md:p-10 font-bold text-white text-xl md:text-3xl leading-tight">Key Gap: No product meaningfully protects users at the moment risk becomes real.</p>
                        </div>
                    </section>
                    
                    {/* 3. DISCOVERY */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">3. Discovery</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                            <h3 className="text-4xl md:text-5xl font-light text-white italic tracking-tighter">Methodology</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                <p className="text-lg md:text-xl leading-relaxed">Due to lack of direct customer access, insights were synthesized from cross-platform teardowns and proxy usability testing. The goal was to identify <span className="text-white underline decoration-cyan-500 underline-offset-8">behavioral patterns</span>.</p>
                            </div>
                            
                            <div className="bg-[#111] p-4 md:p-6 rounded-[2rem] md:rounded-[3rem] border border-white/10 shadow-2xl">
                                <Image src="/GoFlow-Research-Flows.jpg" width={1200} height={800} className="rounded-[1.5rem] md:rounded-[2rem] w-full" alt="Strategy synthesis" />
                            </div>
                            
                            <div className="space-y-8 pt-4 md:pt-8">
                                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Research Synthesis → Strategy Flow</h3>
                                <p className="text-lg md:text-xl">This artifact functioned as a thinking tool — aligning human fear with system responsibility before any UI was designed.</p>
                            </div>
                        </div>
                    </section>
                    
                    {/* 4. PROBLEM STATEMENT */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">4. Design Challenge</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12 md:space-y-16 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                            <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-light tracking-tighter leading-none">How might we protect Nancy?</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                <div className="p-8 md:p-10 bg-red-500/5 border border-red-500/20 rounded-[2rem]">
                                    <p className="text-xs font-black tracking-widest text-red-400 uppercase mb-4">Invalidated Assumption</p>
                                    <p className="text-lg md:text-xl italic">"If we simplify the interface enough, users will feel confident."</p>
                                </div>
                                <div className="p-8 md:p-10 bg-green-500/5 border border-green-500/20 rounded-[2rem]">
                                    <p className="text-xs font-black tracking-widest text-green-400 uppercase mb-4">The Reality</p>
                                    <p className="text-lg md:text-xl text-white font-medium italic">"Confidence comes from understanding consequences and having a reliable way back."</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. PIVOTS */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">5. Major Pivots</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-24 md:space-y-32 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                            
                            <div className="space-y-8 border-b border-white/10 pb-16 md:pb-20">
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter italic">Pivot 1: Configuration to Outcomes</h3>
                                <p className="text-lg md:text-xl leading-relaxed">Optimize for confidence over perceived power. The primary success metric was not speed — it was <span className="text-white font-bold">confidence at the moment of commitment</span>.</p>
                            </div>

                            <div className="space-y-8 border-b border-white/10 pb-16 md:pb-20">
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter italic">Pivot 2: Solving Data Mapping</h3>
                                <p className="text-lg md:text-xl leading-relaxed">I introduced <span className="text-cyan-400 font-bold italic">Ghost Fields</span> — visual placeholders that show where data will go before the user commits.</p>
                                
                                <div className="bg-white/5 p-6 md:p-8 rounded-2xl text-base md:text-lg border border-white/10 italic">
                                    "I could finally see what would happen before it happened."
                                </div>
                                <p className="text-sm md:text-md font-medium text-gray-500 tracking-wide uppercase">Technical Feasibility: Aligned with NoSQL schema constraints; AI suggestions load asynchronously to prevent lag.</p>
                            </div>

                            <div className="space-y-8">
                                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tighter italic">Pivot 3: Errors as Trust Moments</h3>
                                <p className="text-lg md:text-xl leading-relaxed">Existing tools treat errors as terminal. We shifted them to primary trust‑building moments with a Cause → Impact → Fix structure.</p>
                            </div>
                        </div>
                    </section>

                    {/* 6. USER FLOW */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">6. End‑to‑End Flow</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-10 md:space-y-12 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                            <p className="text-2xl md:text-3xl text-white font-light italic">Users were never forced to commit without understanding impact.</p>
                             <ul className="space-y-4 text-lg md:text-xl font-medium text-gray-400">
                                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-cyan-500 rounded-full"></span> Confidence checkpoints before execution</li>
                                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-cyan-500 rounded-full"></span> No‑risk preview environments</li>
                                <li className="flex items-center gap-4"><span className="h-2 w-2 bg-cyan-500 rounded-full"></span> Visible rollback paths</li>
                            </ul>
                        </div>
                    </section>

                    {/* 7. AGENTIC AI */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">7. Agentic AI</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12 text-xl md:text-2xl font-light text-gray-300 max-w-4xl">
                            <h3 className="text-4xl md:text-5xl text-white font-light tracking-tighter leading-none italic">From Assistant to Accountability</h3>
                            <p className="text-lg md:text-xl leading-relaxed">GoFlow uses autonomous but explainable agents designed to <span className="text-white font-bold underline decoration-cyan-500 underline-offset-8">absorb risk</span> on the user’s behalf.</p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                {[
                                    { title: "Setup Agent", role: "Prepares mappings & flags risk" },
                                    { title: "Monitoring Agent", role: "Detects live flow anomalies" },
                                    { title: "Recovery Agent", role: "Diagnoses & one‑click rollback" },
                                    { title: "Optimization Agent", role: "Continuous improvements" }
                                ].map((agent, i) => (
                                    <div key={i} className="p-6 md:p-8 border border-white/10 rounded-3xl hover:bg-cyan-500/5 transition-colors group">
                                        <h4 className="text-lg md:text-xl font-bold text-white mb-2 italic tracking-tight">{agent.title}</h4>
                                        <p className="text-base md:text-lg text-gray-500 group-hover:text-gray-300 transition-colors">{agent.role}</p>
                                    </div>
                                ))}
                            </div>
                            <blockquote className="text-lg md:text-xl italic text-gray-500 border-l border-white/10 pl-6 md:pl-10">This architecture absorbs complexity before it reaches the user.</blockquote>
                        </div>
                    </section>
                    
                    {/* 9. VALIDATION */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">9. Validation</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12 font-light text-gray-300 max-w-4xl">
                           
                           {/* Desktop Table */}
                           <div className="hidden lg:block bg-white/[0.02] border-2 border-white/10 rounded-[3rem] overflow-hidden">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-white/10 text-xs font-black tracking-widest text-cyan-400 uppercase">
                                            <th className="p-10 italic">Metric</th>
                                            <th className="p-10 italic">Early</th>
                                            <th className="p-10 italic">Final</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-xl">
                                        {validationData.map((item, index) => (
                                            <tr key={index} className={index < validationData.length - 1 ? "border-b border-white/5" : ""}>
                                                <td className="p-10 font-bold text-white italic">{item.metric}</td>
                                                <td className="p-10 text-gray-500">{item.early}</td>
                                                <td className={`p-10 font-bold italic ${item.finalColor}`}>{item.final}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Mobile Cards */}
                            <div className="lg:hidden space-y-8">
                                {validationData.map((item, index) => (
                                    <div key={index} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 space-y-4">
                                        <h4 className="text-lg font-bold text-white italic">{item.metric}</h4>
                                        <div className="flex justify-between items-center">
                                            <div className="text-center">
                                                <p className="text-xs text-gray-400 uppercase tracking-widest">Early</p>
                                                <p className="text-2xl text-gray-500 font-semibold mt-1">{item.early}</p>
                                            </div>
                                            <div className="text-2xl text-gray-600">→</div>
                                            <div className="text-center">
                                                <p className="text-xs text-cyan-400 uppercase tracking-widest">Final</p>
                                                <p className={`text-2xl font-bold mt-1 ${item.finalColor}`}>{item.final}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                    
                    {/* 11. LESSONS */}
                    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                        <div className="lg:col-span-4">
                            <h2 className="project-heading text-sm md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">11. Lessons & Bets</h2>
                        </div>
                        <div className="project-content lg:col-span-8 space-y-12 text-xl md:text-2xl font-light text-gray-300 max-w-4xl leading-relaxed">
                            <p className="text-3xl md:text-4xl text-white italic font-light tracking-tight">Good UX doesn’t remove complexity — it redistributes responsibility.</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
                                <div className="space-y-6">
                                    <p className="text-xs font-black tracking-widest text-cyan-400 uppercase">Key Learnings</p>
                                    <ul className="space-y-4 text-lg md:text-xl text-gray-400">
                                        <li>• Confidence beats flexibility early</li>
                                        <li>• Visual previews reduce fear</li>
                                        <li>• Trust is built during failure</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <p className="text-xs font-black tracking-widest text-cyan-400 uppercase">Next exploration</p>
                                    <p className="text-lg md:text-xl text-white font-medium italic">Intent‑based automation without visible workflows.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <footer className="py-24 md:py-40 text-center border-t border-white/10">
                        <div className="max-w-4xl mx-auto space-y-10">
                            <p className="text-3xl md:text-5xl font-light text-white tracking-tighter leading-tight italic">Powerful platforms can feel safe when designed with empathy and restraint.</p>
                            <div className="h-16 w-[1px] bg-cyan-500 mx-auto"></div>
                            <p className="text-xs font-black tracking-[0.5em] text-cyan-400 uppercase">Dhruv Mishra • Sr. UX/UI Designer</p>
                        </div>
                    </footer>

                </main>
            </div>
        </div>
    );
};

export default GoFlow;
