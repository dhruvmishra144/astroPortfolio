'use client'
import { useEffect, useRef } from "react";
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DataAnalysisChart from './DataAnalysisChart';

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
    <h3 className="text-3xl md:text-4xl font-light text-white italic tracking-tighter mb-6">{children}</h3>
);

const Bullet = ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-4">
        <span className="text-cyan-500 shrink-0">•</span>
        <span>{children}</span>
    </li>
);

const ImagePlaceholder = ({ title }: { title: string }) => (
    <div className="w-full aspect-video bg-white/[0.03] border border-white/10 rounded-2xl flex items-center justify-center my-8">
        <p className="text-gray-500 text-sm text-center">[Image: {title}]</p>
    </div>
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
        { metric: "Completion Rate", early: "60%", final: "88% (+47%)" },
        { metric: "Setup Time", early: "18 min", final: "10.5 min (-42%)" },
        { metric: "Config Error Reduction", early: "High", final: "50% lower (+50%)" },
        { metric: "Self-Serve Recovery", early: "0%", final: "85% (+467%)" },
    ];
    
    const sevenPivots = [
        {
            title: "Pre-built Connectors as the SMB \'Default Path\'.",
            problem: "Template selection and auth setup drove high abandonment.",
            solution: "Flip the paradigm from \'select connector\' to \'select outcome.\' Users choose \'Keep deals and invoices in sync\' rather than navigating connector menus. The system automatically pairs the optimal connectors (HubSpot → QuickBooks) and chooses the best auth flow.",
            impact: "Completion improved ~60% → ~88%, setup time ~18 min → 10–11 min."
        },
        {
            title: "AI Data Manipulation (Visible, Previewed, Never \'Magic\')",
            problem: "Auto-mapping features in competitors felt opaque. Users distrusted transformations they didn\'t control.",
            solution: "Make AI suggestions transparent. Every match recommendation includes a \'why\' explanation. Transform previews show before/after for 3–5 sample records. Ghost fields show exactly where data lands pre-commit.",
            impact: "Users don\'t fear AI assistance; they fear hidden AI assistance."
        },
        {
            title: "One-to-Many / Many-to-One as a First-Class Risk Model",
            problem: "Cardinality relationships caused silent duplicates and overwrites.",
            solution: "Flag cardinality risk during mapping. Show blast-radius estimates. Force explicit guardrail choices: Create new child records vs. update existing records; Merge rules (sum, latest, first, custom) with impact preview; Unique ID strategy selection.",
            impact: "Eliminated ~70% of silent cardinality errors."
        },
        {
            title: "Error Handling as Trust Moments",
            problem: "Failed runs showed cryptic API errors with no root cause, blast radius, or next steps.",
            solution: "Translate errors into operator language. Show run-level impact summary. Generate exportable CSVs for stakeholder review. Detect common failure patterns and suggest fixes.",
            impact: "Errors are opportunities to demonstrate system reliability."
        },
        {
            title: "Version Control + Rollback as Core Interaction",
            problem: "No standard way to undo failed or unwanted runs.",
            solution: "Every run produces an immutable change set with before/after diffs. One-click rollback scoped to a single run. Clear statement of what rollback can/cannot undo. Replay capability to detect schema drift.",
            impact: "~35% faster recovery from failed runs; self-serve remediation reduced L1 support load."
        },
        {
            title: "Hard/Soft Delete Handling (Explicit Intent, Never Implicit)",
            problem: "Delete operations are dangerous but were treated as normal field mappings.",
            solution: "Default to soft delete. Hard delete requires explicit intent, blast-radius warning, and record preview. Suspicious delete detection routes to checkpoint.",
            impact: "Prevented accidental mass-deletes; deletes became auditable operations."
        },
        {
            title: "Self-Healing Agent (Suggest-Only, Auditable, No Silent Changes)",
            problem: "Automating error recovery without visibility violates trust.",
            solution: "System detects failure patterns and proposes fixes with explanation, predicted outcome, and risk level. User must approve every fix. All actions logged.",
            impact: "Autonomy without transparency erodes trust. Suggest, explain, require confirmation, log everything."
        }
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
                    <h3 className="text-md md:text-md font-black tracking-widest text-cyan-400 uppercase mb-8 text-center">Headline Signals (Skim-first)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
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
                        <ul className="list-disc pl-6 space-y-2 text-gray-400 italic my-4">
                            <li>What exactly will happen?</li>
                            <li>What’s the blast radius if it goes wrong?</li>
                            <li>Can I undo it reliably?</li>
                        </ul>
                        
                        <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 space-y-4 my-8">
                            <p className="text-md font-black tracking-widest text-cyan-400 uppercase">Impact (Design → Business):</p>
                            <ul className="list-none pl-0 space-y-2 text-base md:text-lg">
                                <li>⏱️ ~40% faster onboarding (18 → 10–11 min median).</li>
                                <li>❌ ~50% fewer configuration errors in first-run flows.</li>
                                <li>🔁 ~35% faster recovery from failed runs (self-serve rollback + guided fixes).</li>
                            </ul>
                            <p className="text-xs text-gray-500 pt-2">Validated via moderated proxy testing (n≈8–10/round ×3) + 40-account internal beta.</p>
                        </div>

                        <SubHeading>What Shipped (v1)</SubHeading>
                        <ul className="space-y-3 pl-0 list-none">
                            <Bullet>Pre-built connectors (high-volume systems) + outcome-based onboarding</Bullet>
                            <Bullet>AI data manipulation for mapping (suggestions, transformations, previews)</Bullet>
                            <Bullet>One-to-many/many-to-one safeguards (risk flags + mapping patterns)</Bullet>
                            <Bullet>Version control + rollback (per-run diffs + scoped revert)</Bullet>
                            <Bullet>Error handling + report generator (human-readable impact summaries + exports)</Bullet>
                            <Bullet>Hard/soft delete handling (guardrails + intent selection)</Bullet>
                            <Bullet>Self-healing agent (suggest-only fixes + replay plans, no silent changes)</Bullet>
                        </ul>
                        
                        <p><strong className="text-white">My Role:</strong> UX Lead — owned risk strategy, interaction paradigm, trust model across setup/execution/monitoring/recovery. Led discovery, IA, prototyping, validation. Built service blueprint, risk heatmaps, journey maps, and decision logs with PM/Eng triads. Used full-stack background (Firebase/NoSQL) to weigh feasibility, cost, latency.</p>
                        
                        <blockquote className="border-l-2 border-cyan-400 pl-6 text-xl md:text-2xl italic text-white my-8">
                            Core Insight: SMBs don’t fail integrations because they’re complex — they fail because they fear irreversible data mistakes and don’t have a safe way back.
                        </blockquote>
                    </Section>

                    <Section title="1. Product & Org Context">
                        <ul className="space-y-4 pl-0 list-none">
                            <Bullet><strong>Timeline:</strong> 2Q runway (~6 months) from brief → v1 architecture + guarded rollout over 1Q.</Bullet>
                            <Bullet><strong>Target User:</strong> Non-technical/lightly-technical operators (Ops/RevOps/owners) at SMBs (20–250 employees) running fragmented stacks (HubSpot + QuickBooks + Shopify, etc.) with reconciliation pain.</Bullet>
                            <Bullet><strong>Team:</strong> 1 PM, 3 Backend Eng (connectors/engine/schema), 1 Frontend Eng (UI/monitoring), Me (UX Lead).</Bullet>
                            <Bullet><strong>Key Constraint:</strong> <em className="text-white">Feel dramatically safer than competitors without increasing setup time, infra cost, or price point.</em></Bullet>
                        </ul>
                        <SubHeading>Collaboration</SubHeading>
                        <p>Weekly “Runway Review” (PM + Eng Lead + me) to trade off activation/cost/risk. My Figma service blueprint and risk maps became the single source of truth (including failure modes, rollback contracts, and API expectations).</p>
                    </Section>

                    <Section title="2. The Market Gap">
                        <p>Competitors optimized for <strong className="text-white">setup speed</strong>, but pushed risk onto users at live-run moments:</p>
                         <ul className="space-y-3 pl-0 list-none">
                           <Bullet>Hidden logs, unclear failure states</Bullet>
                           <Bullet>Manual rollback (if any), hard to scope</Bullet>
                           <Bullet>Weak support for <strong className="text-white">cardinality problems</strong> (one-to-many/many-to-one)</Bullet>
                           <Bullet>Dangerous operations (deletes/overwrites) treated as normal mappings</Bullet>
                        </ul>
                        <p>Review mining repeatedly surfaced “data loss,” “duplicates,” “overwrites,” “no undo.” The psychological blocker wasn’t “I don’t understand” — it was <strong className="text-white">“I can’t recover.”</strong></p>
                        <SubHeading>2.1 Review Mining: The Competitive Vulnerability</SubHeading>
                        <p>Analysis of 200+ reviews across G2, Capterra, and Reddit revealed a stark pattern: risk-related complaints dominated the landscape, while UX friction complaints were comparatively rare. This validated that the market blocker was not configuration complexity but recovery uncertainty. This single insight reframed our entire strategy. Rather than competing on setup speed (where feature parity erodes margins), we would compete on what competitors systematically underserved: <strong className="text-white">live-run safety, operational reversibility, and blast-radius clarity.</strong></p>
                        <DataAnalysisChart />
                        <SubHeading>2.2 Competitive Feature Analysis</SubHeading>
                        <p>Our analysis across six major competitors revealed consistent gaps: all optimized for setup velocity while neglecting execution safety. This created defensible differentiation. GoFlow's competitive advantage isn't configuration simplicity—it's operational safety. Competitors like Zapier and Elastic.io excel at setup speed but fail at rollback capability, cardinality handling, and error transparency. GoFlow leads in all eight critical dimensions.</p>
                        <ImagePlaceholder title="Competitive Feature Matrix" />
                    </Section>
                    
                    <Section title="3. Research & Discovery">
                        <SubHeading>Methods</SubHeading>
                        <ul className="space-y-3 pl-0 list-none">
                           <Bullet>Competitor teardowns (Zapier, Workato, Celigo, Jitterbit, Elastic.io, Skyvia)</Bullet>
                           <Bullet>Review mining (G2/Capterra/Reddit) tagged by risk language</Bullet>
                           <Bullet>Proxy usability tests: 3 rounds, n≈8–10/round</Bullet>
                           <Bullet>Participants configured CRM → invoicing flows in high-fidelity prototypes</Bullet>
                        </ul>
                        <SubHeading>3.1 The Turning Point: 20-Second Hover</SubHeading>
                        <p>A participant configured a HubSpot-to-QuickBooks invoice sync without training. All interactions were smooth until they hovered over the “Run” button—and held. After 20 seconds of hesitation, they said:</p>
                        <blockquote className="border-l-2 border-cyan-400 pl-6 text-xl md:text-2xl italic text-white my-8">
                            “I get it… I just don’t know how to undo this if it goes wrong.”
                        </blockquote>
                        <p>This single observation shifted the product goal. Users could mentally model the mapping; they couldn't mentally model what would happen if things went wrong.</p>
                        <SubHeading>3.2 User Research & Empathy</SubHeading>
                        <p>We mapped the SMB operator's mental model, emotional journey, and core anxieties. The central insight: <strong className="text-white">users freeze at execution due to fear of irreversible data loss, not configuration complexity.</strong> This empathy map became the north star for design priorities. Every feature that shipped addressed one of the pain points or unlocked one of the gains visible in this map.</p>
                        <ImagePlaceholder title="User Empathy Map" />
                    </Section>

                    <Section title="4. Problem Statement">
                        <p>The design challenge: How might we enable SMB operators to create and run integrations confidently without schema/API literacy — without false safety? Reality: Confidence came less from simplicity and more from:</p>
                        <ul className="space-y-3 pl-0 list-none mt-4">
                           <Bullet><strong className="text-white">Previewability</strong> (see outcomes before they occur)</Bullet>
                           <Bullet><strong className="text-white">Blast-radius clarity</strong> (who/what is affected)</Bullet>
                           <Bullet><strong className="text-white">Recoverability</strong> (version control + rollback that works)</Bullet>
                           <Bullet><strong className="text-white">Accountability</strong> (clear logs, reports, and remediation paths)</Bullet>
                        </ul>
                    </Section>

                    <Section title="5. Major Design Pivots">
                        <p>Each pivot addressed a specific blocker discovered through user testing. The sequence mattered—early pivots created foundation, later pivots built safety layers.</p>
                        <ImagePlaceholder title="Design Pivot Timeline" />
                        <SubHeading>5.1 The Seven Pivots Explained</SubHeading>
                        <div className="space-y-12">
                            {sevenPivots.map((pivot, index) => (
                                <div key={index} className={index < sevenPivots.length - 1 ? "border-b border-white/10 pb-12" : ""}>
                                    <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight mb-4">Pivot {index + 1} — {pivot.title}</h4>
                                    <p className="text-cyan-400 italic mb-2">Problem: {pivot.problem}</p>
                                    <p className="mb-2"><strong className="text-white">Solution:</strong> {pivot.solution}</p>
                                    {pivot.title.includes("Cardinality") && <ImagePlaceholder title="Cardinality Risk Heatmap" />}
                                    <p className="text-sm text-gray-400"><strong className="text-gray-300">Impact/Insight:</strong> {pivot.impact}</p>
                                </div>
                            ))}
                        </div>
                    </Section>

                    <Section title="6. End-to-End Flow">
                        <p>The complete user journey is organized into four phases, each with dedicated safety checkpoints:</p>
                        <ul className="space-y-4 pl-0 list-none my-8">
                            <li><strong className="text-white">Phase 1: Setup</strong><br />Connector selection → outcome template → auth → AI mapping canvas → cardinality checks → dry run preview</li>
                            <li><strong className="text-white">Phase 2: Risk Validation</strong><br />Review & Preview gate; cardinality risk confirmation; guardrail selection</li>
                            <li><strong className="text-white">Phase 3: Execution</strong><br />Versioned execution with diffs and real-time anomaly detection</li>
                             <li><strong className="text-white">Phase 4: Recovery</strong><br />One-click rollback; self-healing suggestions; report generator exports</li>
                        </ul>
                        <ImagePlaceholder title="User Journey Flow" />
                         <SubHeading>6.1 Key Features by Phase</SubHeading>
                         <p>This feature matrix shows how our seven v1 capabilities map across the four journey phases.</p>
                        <ImagePlaceholder title="Feature Matrix by Phase" />
                    </Section>

                    <Section title="7. Backend Architecture">
                        <p>Every operation is immutable and auditable. The architecture enforces reversibility and observability at the systems level. The design ensures that safety is not a UI layer—it's a systems property.</p>
                        <p>The architecture flows through three critical engines:</p>
                         <ul className="space-y-3 pl-0 list-none my-4">
                            <Bullet><strong className="text-green-400">Change Set Engine:</strong> Creates immutable, versioned logs of every run</Bullet>
                            <Bullet><strong className="text-red-400">Anomaly Detector:</strong> Real-time pattern analysis detects suspicious behavior before completion</Bullet>
                            <Bullet><strong className="text-orange-400">Rollback Contract Engine:</strong> Defines clear reversibility boundaries for every operation</Bullet>
                            <Bullet><strong className="text-orange-400">Audit Log & Event Stream:</strong> Immutable record of all actions with audit event IDs</Bullet>
                        </ul>
                        <ImagePlaceholder title="Backend Architecture Diagram" />
                    </Section>

                    <Section title="8. Validation & Testing">
                        <p><strong>Testing Methodology:</strong> 3 rounds of moderated proxy tests (n≈8–10/round) + 40-account internal pilots. We stopped after metrics plateaued and qualitative signals converged: “I feel safe enough to turn this on.”</p>
                        
                        <SubHeading>8.1 Before/After Performance Validation</SubHeading>
                        <p>This chart shows validated improvements across four key operational metrics.</p>
                        <ImagePlaceholder title="Performance Validation Chart" />
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

                    <Section title="9. UX → Business Impact">
                         <p>The four pillars of business impact, all validated through testing and beta:</p>
                        <ul className="space-y-3 pl-0 list-none my-4">
                            <Bullet><strong className="text-white">40% Faster Onboarding:</strong> (18 min → 10-11 min): Higher first-run completion</Bullet>
                            <Bullet><strong className="text-white">50% Fewer Config Errors:</strong> Reduced support load & rework</Bullet>
                            <Bullet><strong className="text-white">35% Faster Recovery:</strong> Self-serve remediation instead of escalation</Bullet>
                            <Bullet><strong className="text-white">6-8pt Attach-Rate Lift:</strong> Confidence removes the psychological blocker to feature adoption</Bullet>
                        </ul>
                        <ImagePlaceholder title="Quantified Business Outcomes" />
                        <p><strong className="text-white">Activation:</strong> Confidence-first onboarding increased first-successful-run conversion and reduced abandonment at “Run.”</p>
                        <p><strong className="text-white">Attach rate:</strong> ~6–8pt lift over 2Q driven by higher activation + reduced perceived risk.</p>
                        <p><strong className="text-white">Support cost:</strong> Fewer misconfigs + self-serve rollback/reporting reduced L1 load, supporting SMB economics.</p>
                        <p><strong className="text-white">Positioning:</strong> GoFlow became the default integration layer for mid-market because safety + rollback shifted trust from “tool” to “system of record for automation.”</p>
                   </Section>

                    <Section title="10. What This Proves">
                        <ul className="space-y-4 pl-0 list-none">
                            <Bullet><strong className="text-white">Risk-aware design for automation:</strong> Can design high-stakes UX for AI-driven workflows with safety-first execution, not just happy-path flows. Real failure modes, recovery paths, accountability mechanisms.</Bullet>
                            <Bullet><strong className="text-white">Governance translation:</strong> Can translate TRiSM concerns (Trust, Risk, Security, Management) into concrete product mechanics—observability (diffs, logs), auditability (immutable change sets), reversibility (rollback), controlled autonomy (suggest-only).</Bullet>
                            <Bullet><strong className="text-white">Cross-functional problem-solving:</strong> Resolve conflicts between activation speed, infrastructure cost, and risk mitigation with measurable outcomes.</Bullet>
                            <Bullet><strong className="text-white">User research rigor:</strong> One observation (20-second hover) reframed the entire product strategy. Validated through three rounds of testing (n=28 total) plus real-world beta (n=40 accounts).</Bullet>
                            <Bullet><strong className="text-white">Scalable design patterns:</strong> Connectors, mapping, rollback contracts designed as reusable primitives—not one-off features. Handoff to engineering without loss of intent.</Bullet>
                            <Bullet><strong className="text-white">Business impact ownership:</strong> Tied every design decision to measurable outcome. Configuration errors -50%, setup time -40%, recovery independence +300%, attach-rate +6-8pt.</Bullet>
                        </ul>
                    </Section>
                     <Section title="Design Principles">
                        <ul className="space-y-4 pl-0 list-none">
                            {[ "Observability over simplicity", "Reversibility as core interaction", "Blast-radius clarity", "Explicit intent gates", "Suggest, don\'t automate", "Accountability through audit trails", "Progressive disclosure", "Error as trust moment"].map((principle, i) => (
                                 <li key={i}><span className="text-cyan-500 mr-2">{i+1}.</span>{principle}</li>
                            ))}
                        </ul>
                    </Section>
                    <Section title="Deliverables">
                        <SubHeading>Core design outputs</SubHeading>
                         <ul className="space-y-3 pl-0 list-none">
                            <Bullet>Figma service blueprint</Bullet>
                            <Bullet>Risk heatmaps</Bullet>
                            <Bullet>Journey maps with emotional curve</Bullet>
                            <Bullet>Decision logs</Bullet>
                             <Bullet>User empathy maps and research synthesis</Bullet>
                        </ul>
                        <SubHeading>Feature ship list v1</SubHeading>
                         <ul className="space-y-3 pl-0 list-none">
                            <Bullet>Pre-built connectors + outcome onboarding</Bullet>
                            <Bullet>AI data mapping</Bullet>
                            <Bullet>Cardinality safeguards</Bullet>
                            <Bullet>Version control + rollback</Bullet>
                            <Bullet>Error handling + reporting</Bullet>
                            <Bullet>Hard/soft delete handling</Bullet>
                            <Bullet>Self-healing agent</Bullet>
                        </ul>
                    </Section>

                </main>
            </div>
        </div>
    );
};

export default GoFlow;