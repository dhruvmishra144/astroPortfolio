'use client'
import { useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import CardsSection from "./CardsSection";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="project-section grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
        <div className="lg:col-span-4">
            <h2 className="project-heading text-md md:text-md font-black tracking-[0.4em] text-cyan-500 uppercase py-2 border-l-4 border-cyan-500 pl-6">
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
    const heroHeader = useRef(null);
    const headlineSignals = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero animation
        gsap.from([heroHeader.current, headlineSignals.current], {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Section fade-in animation
        const sections = gsap.utils.toArray<HTMLElement>('.project-section');
        sections.forEach((section) => {
            gsap.from(section, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: section,
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                },
            });
        });

    }, { scope: mainRef });

    const validationData = [
        { metric: "Completion rate", early: "~60%", final: "~88%" },
        { metric: "Median setup time", early: "~18 min", final: "10–11 min" },
        { metric: "Config errors (proxy)", early: "High", final: "~50% lower" },
        { metric: "Recovery independence", early: "Low", final: "High" },
    ];

    return (
        <div ref={mainRef} className="text-[#e5e5e5] min-h-screen font-sans selection:bg-cyan-500/30 pb-40 leading-relaxed">
            <div className="container mx-auto px-6 lg:px-16 pt-24 md:pt-32">

                <header ref={heroHeader} className="max-w-6xl mb-24">
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-light mb-4 tracking-tighter leading-none text-white italic">
                        GoFlow<span className="text-cyan-500 not-italic">.</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl text-gray-400 font-light tracking-tight leading-tight max-w-5xl">
                        AI-Powered iPaaS for Automatic Data Flow Migration (Confidence-First, Risk-Aware Automation for SMBs)
                    </h2>
                </header>

                <div ref={headlineSignals} className="bg-white/[0.03] border border-white/10 rounded-[2.5rem] p-8 md:p-12 my-16">
                    <h3 className="text-md md:text-md font-black tracking-widest text-cyan-400 uppercase mb-8 text-center">Headline Signals</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 text-center">
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Staff-level IC</p>
                            <p className="text-gray-400 text-md md:text-base">agentic AI + B2B SaaS, 0→1 iPaaS with safety-first execution.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Shipped</p>
                            <p className="text-gray-400 text-md md:text-base">pre-built connectors + AI-assisted mapping + versioned rollback (SMB-friendly).</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Drove</p>
                            <p className="text-gray-400 text-md md:text-base">~40% faster onboarding (18 → 10–11 min), ~6–8pt attach-rate lift, ~50% fewer first-run config errors.</p>
                        </div>
                        <div className="space-y-2">
                            <p className="text-lg md:text-xl text-white font-semibold">Designed</p>
                            <p className="text-gray-400 text-md md:text-base">observability + reversibility (diffs, blast radius, hard/soft delete handling) under TRiSM constraints.</p>
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent my-24 md:my-32"></div>

                <main className="flex flex-col gap-24 md:gap-32">

                    <Section title="Recruiter Quick-Scan Summary">
                        <p><strong className="text-white">What:</strong> Led UX strategy and end-to-end product design for an agentic-AI powered iPaaS that helps SMBs safely create, run, monitor, and recover cross-system automations without API/schema literacy.</p>
                        <p><strong className="text-white">Context:</strong> Internal 0→1 initiative inside a B2B SaaS serving ~4,000 SMBs. We built an SMB-friendly alternative to enterprise iPaaS tools (Zapier, Workato, Celigo) by focusing on what competitors consistently under-serve: <strong className="text-white">live-run safety, rollback, and clear responsibility-sharing</strong>.</p>
                        <p><strong className="text-white">Why:</strong> Competitive teardown + review mining showed the same failure pattern: non-technical users could configure flows, but froze at execution because they couldn’t answer:</p>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li><em className="text-gray-400">What exactly will happen?</em></li>
                            <li><em className="text-gray-400">What’s the blast radius if it goes wrong?</em></li>
                            <li><em className="text-gray-400">Can I undo it reliably?</em></li>
                        </ul>
                        
                        <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 space-y-4">
                            <p className="text-md font-black tracking-widest text-cyan-400 uppercase">Impact (Design → Business):</p>
                            <ul className="list-none pl-0 space-y-2 text-base md:text-lg">
                                <li>⏱️ ~40% faster onboarding (18 → 10–11 min median).</li>
                                <li>❌ ~50% fewer configuration errors in first-run flows.</li>
                                <li>🔁 ~35% faster recovery from failed runs (self-serve rollback + guided fixes).</li>
                            </ul>
                            <p className="text-xs text-gray-500 pt-2">Validated via moderated proxy testing (n≈8–10/round ×3) + 40-account internal beta.</p>
                        </div>

                        <p><strong className="text-white">What shipped (v1):</strong></p>
                        <ul className="space-y-3 pl-0 list-none">
                            <Bullet><strong>Pre-built connectors</strong> (high-volume systems) + outcome-based onboarding</Bullet>
                            <Bullet><strong>AI data manipulation for mapping</strong> (suggestions, transformations, previews)</Bullet>
                            <Bullet><strong>One-to-many/many-to-one safeguards</strong> (risk flags + mapping patterns)</Bullet>
                            <Bullet><strong>Version control + rollback</strong> (per-run diffs + scoped revert)</Bullet>
                            <Bullet><strong>Error handling + report generator</strong> (human-readable impact summaries + exports)</Bullet>
                            <Bullet><strong>Hard/soft delete handling</strong> (guardrails + intent selection)</Bullet>
                            <Bullet><strong>Self-healing agent</strong> (suggest-only fixes + replay plans, no silent changes)</Bullet>
                        </ul>
                        
                        <p><strong className="text-white">My Role:</strong> UX Lead — owned risk strategy, interaction paradigm, trust model across setup/execution/monitoring/recovery. Led discovery, IA, prototyping, validation. Built service blueprint, risk heatmaps, journey maps, and decision logs with PM/Eng triads. Used full-stack background (Firebase/NoSQL) to weigh feasibility, cost, latency.</p>
                        
                        <blockquote className="border-l-2 border-cyan-400 pl-6 text-xl md:text-2xl italic text-white my-8">
                            Core Insight: SMBs don’t fail integrations because they’re complex — they fail because they fear irreversible data mistakes and don’t have a safe way back.
                        </blockquote>
                    </Section>

                    <Section title="1. Product & Organizational Context">
                        <ul className="space-y-4 pl-0 list-none">
                            <Bullet><strong>Timeline:</strong> 2Q runway (~6 months) from brief → v1 architecture + guarded rollout over 1Q.</Bullet>
                            <Bullet><strong>Target user:</strong> Non-technical/lightly-technical operators (Ops/RevOps/owners) at SMBs (20–250 employees) running fragmented stacks (HubSpot + QuickBooks + Shopify, etc.) with reconciliation pain.</Bullet>
                            <Bullet><strong>Team:</strong> 1 PM, 3 Backend Eng (connectors/engine/schema), 1 Frontend Eng (UI/monitoring), Me (UX Lead).</Bullet>
                            <Bullet><strong>Key constraint:</strong> <em className="text-white">Feel dramatically safer than competitors without increasing setup time, infra cost, or price point.</em></Bullet>
                        </ul>
                        <SubHeading>Collaboration</SubHeading>
                        <p>Weekly “Runway Review” (PM + Eng Lead + me) to trade off activation/cost/risk. My Figma service blueprint and risk maps became the single source of truth (including failure modes, rollback contracts, and API expectations).</p>
                    </Section>

                    <Section title="2. The Market Gap We Targeted">
                        <p>Competitors optimized for <strong className="text-white">setup speed</strong>, but pushed risk onto users at live-run moments:</p>
                         <ul className="space-y-3 pl-0 list-none">
                           <Bullet>Hidden logs, unclear failure states</Bullet>
                           <Bullet>Manual rollback (if any), hard to scope</Bullet>
                           <Bullet>Weak support for <strong className="text-white">cardinality problems</strong> (one-to-many/many-to-one)</Bullet>
                           <Bullet>Dangerous operations (deletes/overwrites) treated as normal mappings</Bullet>
                        </ul>
                        <p>Review mining repeatedly surfaced “data loss,” “duplicates,” “overwrites,” “no undo.” The psychological blocker wasn’t “I don’t understand” — it was <strong className="text-white">“I can’t recover.”</strong></p>
                    </Section>
                    
                    <Section title="3. Research & Discovery">
                        <SubHeading>Methods</SubHeading>
                        <ul className="space-y-3 pl-0 list-none">
                           <Bullet>Competitor teardowns (Zapier, Workato, Celigo, Jitterbit, Elastic.io, Skyvia)</Bullet>
                           <Bullet>Review mining (G2/Capterra/Reddit) tagged by risk language</Bullet>
                           <Bullet>Proxy usability tests: 3 rounds, n≈8–10/round; participants configured CRM → invoicing flows in high-fidelity prototypes.</Bullet>
                        </ul>
                        <SubHeading>Turning point</SubHeading>
                        <p>A participant hovered 20 seconds over <strong className="text-white">Run</strong>:</p>
                        <blockquote className="border-l-2 border-cyan-400 pl-6 text-xl md:text-2xl italic text-white my-8">
                            “I get it… I just don’t know how to undo this if it goes wrong.”
                        </blockquote>
                        <p>We reframed the product goal from <strong className="text-white">“simplify configuration”</strong> to <strong className="text-white underline decoration-cyan-500">“make execution observable and reversible.”</strong></p>
                    </Section>

                    <Section title="4. Problem Statement">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-tighter leading-none">The Design Challenge: Confidence Without False Safety</h3>
                        <p className="mt-6 text-xl md:text-2xl text-white italic">How might we enable SMB operators to create and run integrations confidently without schema/API literacy — without creating a false sense of security?</p>
                        <p className="mt-8">Reality: Confidence came less from simplicity and more from:</p>
                        <CardsSection />
                        <ul className="space-y-3 pl-0 list-none mt-4">
                           <Bullet><strong className="text-white">Previewability</strong> (see outcomes before they occur)</Bullet>
                           <Bullet><strong className="text-white">Blast-radius clarity</strong> (who/what is affected)</Bullet>
                           <Bullet><strong className="text-white">Recoverability</strong> (version control + rollback that works)</Bullet>
                           <Bullet><strong className="text-white">Accountability</strong> (clear logs, reports, and remediation paths)</Bullet>
                        </ul>
                    </Section>

                    <Section title="Case Study">
                        <SubHeading>6.1 User Journey Flow Diagram</SubHeading>
                        <p>Complete user journey from outcome selection through execution. Mandatory checkpoints (risk checks, previews) ensure confidence before live runs.</p>
                        <p><strong className="text-white">Key callouts:</strong></p>
                        <ul className="space-y-3 pl-0 list-none">
                            <Bullet>Progressive disclosure of complexity</Bullet>
                            <Bullet>4 safety checkpoints before execution</Bullet>
                            <Bullet>Feedback loops for adjustments</Bullet>
                        </ul>
                        <img src="/path/to/your/user-flow-diagram.png" alt="User Journey Flow Diagram" className="w-full h-auto my-8"/>
                        <SubHeading>6.2 Backend Architecture Flow</SubHeading>
                        <p>System architecture showing versioned change sets, anomaly detection, rollback contracts, and audit logging. Every operation is immutable and auditable.</p>
                        <p><strong className="text-white">Key callouts:</strong></p>
                        <ul className="space-y-3 pl-0 list-none">
                            <Bullet>Immutable change sets (every run logged)</Bullet>
                            <Bullet>Rollback contract (clear reversibility boundaries)</Bullet>
                            <Bullet>Real-time anomaly detection</Bullet>
                        </ul>
                        <img src="/path/to/your/backend-architecture-flow.png" alt="Backend Architecture Flow" className="w-full h-auto my-8"/>
                    </Section>

                    <Section title="5. Major Design Pivots">
                        <div className="space-y-12">
                            <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 1: Pre-built connectors as the SMB “default path”</h3>
                                <p>Instead of triggers/actions, onboarding started with outcomes (“Keep deals and invoices in sync”). This forced a <strong className="text-white">Review & Preview</strong> step before the first live run, improving completion ~60% → ~88%.</p>
                            </div>
                            <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 2: AI data manipulation (visible, previewed, never “magic”)</h3>
                                <p>AI suggests matches and transformations with side-by-side previews and “why” explanations. <strong className="text-cyan-400 italic">“Ghost fields”</strong> showed where data lands pre-commit. This shifted sentiment from “I hope this is right” to “I can see what will happen.”</p>
                            </div>
                             <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 3: One-to-many / many-to-one as a first-class risk model</h3>
                                <p>The system flags cardinality risks, explains consequences in a “Risk Check” panel, and provides guardrail choices (e.g., merge vs create child records), including “blast radius” estimates.</p>
                            </div>
                             <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 4: Error handling + report generator (errors become trust moments)</h3>
                                <p>Errors have human-readable summaries and an exportable report. Instead of panic, users could self-serve or ask specific questions, reducing support load.</p>
                            </div>
                             <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 5: Version control + rollback as the core interaction</h3>
                                <p>Every run produces a versioned “change set” with a diff view. One-click rollback is scoped to that run. “Recovery” is always visible, showing the last 3 runs and their status.</p>
                            </div>
                            <div className="border-b border-white/10 pb-12">
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 6: Hard/soft delete handling (explicit intent, never implicit)</h3>
                                <p>Default to soft delete. Hard delete requires explicit intent, a warning with blast radius, and a preview of affected records. “Suspicious delete” spikes route to a checkpoint.</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white tracking-tight mb-4">Pivot 7: Self-healing agent (suggest-only, auditable, no silent changes)</h3>
                                <p>The agent detects failure patterns and proposes fixes with explanations and risk levels. All actions require confirmation. This preserved trust while still reducing recovery time.</p>
                            </div>
                        </div>
                    </Section>

                    <Section title="6. End-to-End Flow">
                         <p><strong className="text-white">Setup:</strong> Connector selection → outcome template → auth → AI mapping canvas → cardinality checks → dry run preview</p>
                         <p><strong className="text-white">Run:</strong> versioned execution with diffs and risk checkpoints</p>
                         <p><strong className="text-white">Monitor:</strong> health view, anomaly thresholds, suspicious changes flagged</p>
                         <p><strong className="text-white">Recover:</strong> rollback/replay, self-healing suggestions, report generator exports</p>
                    </Section>

                    <Section title="7. Validation">
                        <p>Testing: 3 rounds moderated proxy tests (n≈8–10/round) + 40-account internal pilots. We stopped after metrics plateaued and qualitative signals converged: “I feel safe enough to turn this on.”</p>
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

                    <Section title="8. UX → Business Impact">
                        <p><strong className="text-white">Activation:</strong> confidence-first onboarding increased first-successful-run conversion and reduced abandonment at “Run.”</p>
                        <p><strong className="text-white">Attach rate:</strong> ~6–8pt lift over 2Q driven by higher activation + reduced perceived risk.</p>
                        <p><strong className="text-white">Support cost:</strong> fewer misconfigs + self-serve rollback/reporting reduced L1 load, supporting SMB economics.</p>
                        <p><strong className="text-white">Positioning:</strong> GoFlow became the default integration layer for mid-market because safety + rollback shifted trust from “tool” to “system of record for automation.”</p>
                    </Section>

                    <Section title="9. What This Proves About My Level">
                        <ul className="space-y-4 pl-0 list-none">
                            <Bullet>I can design <strong className="text-white">high-stakes, risk-aware UX</strong> for AI-driven automation (not just happy-path setup).</Bullet>
                            <Bullet>I translate TRiSM concerns into concrete product mechanics: <strong className="text-white">observability, auditability, reversibility, and controlled autonomy.</strong></Bullet>
                            <Bullet>I resolve cross-functional conflict with measurable outcomes and scalable patterns (connectors, mapping, rollback contracts, self-healing interaction design).</Bullet>
                        </ul>
                    </Section>

                </main>
            </div>
        </div>
    );
};

export default GoFlow;
