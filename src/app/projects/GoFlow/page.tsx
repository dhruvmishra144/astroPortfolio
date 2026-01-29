'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
        <div className="lg:col-span-4">
            <h2 className="project-heading text-md md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6 sticky top-28">
                {title}
            </h2>
        </div>
        <div className="project-content lg:col-span-8 space-y-10 text-lg md:text-xl font-light text-gray-300 max-w-4xl leading-relaxed">
            {children}
        </div>
    </section>
);

const SubHeading = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-3xl md:text-4xl font-light text-white italic tracking-tighter mt-12 mb-6">{children}</h3>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-4">
        <span className="text-cyan-500 mt-2 shrink-0">•</span>
        <span>{children}</span>
    </li>
);

const GoFlow = () => {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();
            mm.add("(min-width: 1024px)", () => {
                document.querySelectorAll(".project-section").forEach((section) => {
                    const heading = section.querySelector(".project-heading");
                    if (heading) {
                        ScrollTrigger.create({
                            trigger: section,
                            start: "top top+=112",
                            end: "bottom bottom-=150",
                            pin: heading,
                            pinSpacing: false,
                        });
                    }
                });
            });
        }, mainRef);
        return () => ctx.revert();
    }, []);

    const validationData = [
        { metric: "Completion rate", early: "~60%", final: "~88%" },
        { metric: "Median setup time", early: "~18 min", final: "10–11 min" },
        { metric: "Configuration errors (proxy)", early: "High", final: "~50% lower" },
        { metric: "Error recovery independence", early: "Low", final: "High" },
    ];

    return (
        <div ref={mainRef} className="text-[#e5e5e5] min-h-screen font-sans selection:bg-cyan-500/30 pb-40 leading-relaxed">
            <div className="container mx-auto px-6 lg:px-16 pt-24 md:pt-32">

                <header className="max-w-6xl mb-24">
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light mb-4 tracking-tighter leading-none text-white italic">
                        GoFlow<span className="text-cyan-500 not-italic">.</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-400 font-light tracking-tight leading-tight max-w-5xl">
                        AI‑Powered iPaaS for Automatic Data Flow Migration
                    </h2>
                </header>

                <div className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 my-16">
                    <h3 className="text-md md:text-md font-black tracking-widest text-cyan-400 uppercase mb-8 text-center">Headline Signals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Staff-level IC</p>
                            <p className="text-gray-400 text-md md:text-base">agentic-AI + B2B SaaS, 0→1 iPaaS.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Drove</p>
                            <p className="text-gray-400 text-md md:text-base">~40% faster onboarding, ~6–8pt attach-rate lift.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Designed</p>
                            <p className="text-gray-400 text-md md:text-base">confidence-first UX under SMB/TRiSM constraints.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent my-24 md:my-32"></div>

                <main className="flex flex-col gap-24 md:gap-32">

                    <Section title="Recruiter Quick-Scan">
                        <p><strong className="text-white">What:</strong> Led UX strategy and end-to-end product design for an agentic‑AI powered iPaaS focused on safe, confidence-first data automation for SMBs (20–250 employees).</p>
                        <p><strong className="text-white">Context:</strong> Internal zero-to-one product initiative inside a B2B SaaS company serving ~4,000 SMB accounts, exploring an SMB-friendly alternative to enterprise iPaaS tools.</p>
                        <p><strong className="text-white">Why:</strong> Competitive analysis showed a consistent failure pattern: risk and responsibility were pushed onto non-technical users, causing fear, hesitation, and abandonment.</p>
                        
                        <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 space-y-4">
                            <p className="text-md font-black tracking-widest text-cyan-400 uppercase">Impact (Design → Business):</p>
                            <ul className="list-none pl-0 space-y-2 text-base md:text-lg">
                                <li>⏱️ ~40% faster onboarding (18→10–11 min median).</li>
                                <li>❌ ~50% fewer configuration errors in first-run flows.</li>
                                <li>🔁 ~35% faster recovery from failed runs.</li>
                            </ul>
                            <p className="text-xs text-gray-500 pt-2">Metrics validated via moderated proxy testing (n=10/round × 3), comparative analysis, and 40-account internal beta.</p>
                        </div>

                        <p><strong className="text-white">My Role:</strong> UX Lead — owned user risk strategy, interaction model, and trust mechanisms. Led research, IA, design, and validation, producing key artifacts and leveraging a full-stack background for feasibility trade-offs.</p>
                        <blockquote className="border-l-2 border-cyan-400 pl-6 text-xl md:text-2xl italic text-white my-8">
                            Core Insight: People don't fail integrations because they're complex — they fail because they're afraid of irreversible data mistakes and can't see a safe way back.
                        </blockquote>
                    </Section>

                    <Section title="1. Product & Org Context">
                        <p>This was a zero-to-one initiative with a 6-month runway to a guarded rollout, targeting non-technical operators at SMBs. The lean team consisted of 1 PM, 4 engineers, and myself as the UX Lead.</p>
                        <SubHeading>Collaboration & Ownership</SubHeading>
                        <p>I owned the risk strategy, interaction paradigm, and trust model. Collaboration was tight, with weekly "Runway Reviews" to document activation, cost, and risk tradeoffs. My Figma service blueprint and journey maps served as the single source of truth for flows and failure modes.</p>
                        <p>A key partnership with the Engineering Lead resulted in a <strong className="text-white">safe-by-default API contract</strong>, trading some flexibility for predictable UX and auditability. For instance, we redesigned a "Dry Run" preview that was too slow by pre-fetching only critical data, preserving responsiveness without backend overload.</p>
                    </Section>

                    <Section title="2. The Human Problem">
                        <p>For SMBs without dedicated IT, a single misconfigured automation can be catastrophic. One bad sync can corrupt revenue records or overwrite customer data at scale.</p>
                        <p>Our research coalesced into the "Nancy" mental model: a non-technical retail owner paralyzed by the fear that <strong className="text-white">one wrong click could "break the business"</strong> by pushing bad data to live systems with no undo.</p>
                    </Section>

                    <Section title="3. Market Gaps">
                        <p>UX teardowns and review mining of competitors (Zapier, Workato, etc.) revealed a clear gap: no product offered meaningful protection for SMBs at the moment of a live run. Observability was limited, and rollback features were often buried in advanced settings.</p>
                        <p className="bg-cyan-500/10 border border-cyan-500/30 rounded-[1.5rem] p-6 font-semibold text-white text-lg md:text-xl">Key Gap: No competitor was explicitly designing for <strong className="italic">confidence and reversibility</strong> as a primary feature for the SMB segment.</p>
                    </Section>

                    <Section title="4. Research & Discovery">
                        <SubHeading>Methodology</SubHeading>
                        <p>With no direct customer access initially, I built an evidence-based picture through:</p>
                        <ul className="space-y-3 pl-0 list-none">
                           <Bullet>Review mining for keywords like "data loss," "dupes," and "no undo."</Bullet>
                           <Bullet>Competitor teardowns mapping risk and recovery surfaces.</Bullet>
                           <Bullet>Proxy usability tests with 10 SMB-experienced participants.</Bullet>
                        </ul>
                        <SubHeading>A Moment That Changed Strategy</SubHeading>
                        <p>A usability test participant hovered for 20 seconds over the "Run now" button, saying: <strong className="text-white">"I understand the steps… I just don't know how to undo this if it goes wrong."</strong> This was a recurring pattern.</p>
                        <p>The problem was reframed from "make it simpler" to <strong className="text-white underline decoration-cyan-500">"make it reversible and observable."</strong> This led to making previews, risk checkpoints, and rollback first-class interactions.</p>
                    </Section>

                    <Section title="5. Problem Statement">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-tighter leading-none">How might we help business owners create, monitor, and recover data integrations without requiring literacy in schemas, APIs, or failure-states?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                            <div className="p-8 bg-red-900/40 border border-red-500/30 rounded-2xl">
                                <p className="text-xs font-black tracking-widest text-red-400 uppercase mb-4">Invalidated Assumption</p>
                                <p className="text-lg md:text-xl italic text-white">"If we simplify the interface enough, users will feel confident."</p>
                            </div>
                            <div className="p-8 bg-green-900/40 border border-green-500/30 rounded-2xl">
                                <p className="text-xs font-black tracking-widest text-green-400 uppercase mb-4">Reality</p>
                                <p className="text-lg md:text-xl italic text-white">Confidence comes from knowing you can see outcomes, detect issues, and recover quickly.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="6. Major Design Pivots">
                        <div className="space-y-12">
                            <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 1: From Configuration to Outcomes</h3>
                                <p>Instead of showing triggers and actions, the flow started with "What do you want to keep in sync?" and required an explicit "Review & Preview" step. This focus on safety increased completion rates from ~60% to ~88%.</p>
                            </div>
                            <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 2: Solving Data Mapping</h3>
                                <p>I designed an AI-assisted mapping canvas with <strong className="text-cyan-400 italic">"Ghost Fields"</strong>—visual placeholders in the target schema that preview where data will land and how it will be transformed before committing. Feedback shifted from "I hope this is right" to "I could see what would happen."</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 3: Errors as Trust Moments</h3>
                                <p>We delayed enterprise-grade power features to invest in clarity and recovery. Errors were structured with human-readable impact summaries ("23 invoices affected, all rolled back") and a one-click "Revert this run" button, turning failures into moments of trust.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="7. End-to-End Flow">
                         <p>The final flow was built on three pillars: <strong className="text-white">preview before execution</strong>, <strong className="text-white">explicit risk checkpoints</strong>, and <strong className="text-white">visible recovery paths at all times</strong>. Every risky operation was highlighted with a blast-radius estimate, and a persistent "Recovery" affordance showed recent runs and their rollback status.</p>
                    </Section>

                    <Section title="8. Agentic AI Strategy">
                        <p>We reframed the AI from a simple "smart helper" to a <strong className="text-white">"visible risk co-owner."</strong> Agents were designed for setup, monitoring, and recovery, but with strict governance: no autonomous destructive actions, human-in-the-loop for critical flows, and all decisions logged. Trust was measured via acceptance rates of AI suggestions and user overrides.</p>
                    </Section>

                    <Section title="9. Constraints & Tradeoffs">
                         <p>Key constraints included no direct customer access initially, tight cost caps for an SMB product, and the need for low-latency previews. We intentionally de-prioritized long-tail connectors to focus on strong defaults for the most common platforms.</p>
                         <p>A notable failed bet was an <strong className="text-white">"auto-fix" feature</strong> for mappings, which users felt was "changing things behind my back." We rolled it back to be suggestion-only.</p>
                    </Section>

                    <Section title="10. Usability Validation">
                        <p>The core task (CRM→Invoicing sync) was validated over three rounds of moderated testing (n≈10/round) and a 40-account internal pilot.</p>
                        {/* Responsive Table/Cards */}
                        <div className="lg:hidden space-y-4 mt-8">
                            {validationData.map((item, index) => (
                                <div key={index} className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                                    <h4 className="font-bold text-white mb-2">{item.metric}</h4>
                                    <div className="flex justify-between items-center text-md">
                                        <span className="text-gray-400">Early: <strong className="text-gray-300">{item.early}</strong></span>
                                        <span className="text-cyan-400">Final: <strong className="text-white">{item.final}</strong></span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="hidden lg:block bg-white/[0.02] border-2 border-white/10 rounded-[2rem] overflow-hidden mt-8">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-white/10 text-xs font-black tracking-widest text-cyan-400 uppercase">
                                        <th className="p-6 italic">Metric</th>
                                        <th className="p-6 italic">Early Prototype</th>
                                        <th className="p-6 italic">Final Flow</th>
                                    </tr>
                                </thead>
                                <tbody className="text-base">
                                    {validationData.map((item, index) => (
                                        <tr key={index} className={index < validationData.length - 1 ? "border-b border-white/5" : ""}>
                                            <td className="p-6 font-semibold text-white">{item.metric}</td>
                                            <td className="p-6 text-gray-400">{item.early}</td>
                                            <td className="p-6 text-white font-bold">{item.final}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </Section>

                    <Section title="11. Business Impact">
                        <p>The confidence-first design directly impacted business goals. Faster, safer onboarding <strong className="text-white">lifted the module attach rate for new deals by ~6–8 points</strong> and improved time-to-first-value by ~30–35%. Self-serve recovery reduced L1 support load, making the SMB pricing model more sustainable.</p>
                    </Section>

                    <Section title="12. Personal Reflection">
                        <p>My decision framework evolved to prioritize activation, risk reduction, and cost-effectiveness. When tradeoffs emerged, I learned to defend safety and observability over features that looked impressive but compromised user trust.</p>
                        <SubHeading>What This Demonstrates</SubHeading>
                        <p>This project showcases my ability to define and drive a confidence-first UX strategy for a complex AI system under real business constraints. It proves I can translate abstract goals like "Trust and Safety" into concrete, measurable patterns and operate at a senior-to-staff level to influence product strategy and earn user trust in high-risk environments.</p>
                    </Section>

                </main>
            </div>
        </div>
    );
};

export default GoFlow;
