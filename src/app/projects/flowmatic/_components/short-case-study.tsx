import React from 'react';

const ShortCaseStudy = () => {
    return (
        <div className="flex flex-col gap-10 text-lg text-slate-400">
            {/* Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Overview</h4>
                <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                    <p>
                        Small and medium-sized businesses (SMEs) often struggle to integrate their tools—CRMs, ERPs, and e-commerce apps—without technical help. Existing iPaaS solutions are powerful but too complex for non-technical teams.
                    </p>
                    <p>
                        <strong className="text-white">FlowMatic</strong> was designed to change that: a guided, AI-assisted integration platform that makes connecting systems as simple as drag-and-drop.
                    </p>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* The Challenge */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">The Challenge</h4>
                <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                    <p>
                        SMEs spend hours manually syncing data or waiting on IT consultants to fix integrations. Most iPaaS products assume coding knowledge and bombard users with jargon like <em>API endpoints</em> and <em>webhooks</em>.
                    </p>
                    <p>Our challenge: <strong className="text-white">make integrations feel effortless</strong> for users with zero technical background.</p>
                    
                    <div className="mt-2">
                        <h5 className="text-xl font-semibold text-white mb-2">Design Goals</h5>
                        <ul className="list-decimal list-inside flex flex-col gap-1">
                            <li>Create a clear, jargon-free experience.</li>
                            <li>Introduce guided onboarding with visual cues.</li>
                            <li>Enable self-service workflows without coding.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Research */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Research</h4>
                
                <div className="flex flex-col gap-6 lg:col-span-2 project-content">
                    <div>
                        <h5 className="text-xl font-semibold text-white mb-3">User Insights</h5>
                        <p className="mb-4">We interviewed 15 SME owners and surveyed 100 businesses using 10 leading iPaaS platforms. Common frustrations emerged:</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-base border-collapse">
                                <thead>
                                    <tr className="border-b border-slate-700 text-white">
                                        <th className="py-2 pr-4">Pain Point</th>
                                        <th className="py-2 pr-4">% of SMEs</th>
                                        <th className="py-2">Design Implication</th>
                                    </tr>
                                </thead>
                                <tbody className="align-top">
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 pr-4">Overwhelming setup & jargon</td>
                                        <td className="py-2 pr-4">70%</td>
                                        <td className="py-2">Use plain language and tooltips</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 pr-4">Complex dashboards</td>
                                        <td className="py-2 pr-4">60%</td>
                                        <td className="py-2">Simplify hierarchy and focus on essentials</td>
                                    </tr>
                                    <tr className="border-b border-slate-800">
                                        <td className="py-2 pr-4">Poor error messaging</td>
                                        <td className="py-2 pr-4">75%</td>
                                        <td className="py-2">Write clear, actionable guidance</td>
                                    </tr>
                                    <tr>
                                        <td className="py-2 pr-4">Limited support</td>
                                        <td className="py-2 pr-4">55%</td>
                                        <td className="py-2">Add in-app help and tutorials</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Personas</h5>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li><strong className="text-white">Emma (Retail Owner):</strong> Wants simplicity and quick setup.</li>
                            <li><strong className="text-white">Raj (Ops Manager):</strong> Needs visibility, real-time alerts, and quick troubleshooting.</li>
                            <li><strong className="text-white">Ritika (Startup Founder):</strong> Values speed, affordability, and scalability.</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Competitive Findings</h5>
                        <p>Platforms like Boomi, MuleSoft, and Celigo offered advanced features but alienated SMEs with cluttered UIs and enterprise-heavy workflows. The opportunity: a <strong className="text-white">clean, guided, no-code experience</strong> designed for business users.</p>
                    </div>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Design Approach */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Design Approach</h4>
                
                <div className="flex flex-col gap-6 lg:col-span-2 project-content">
                    <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Concepts</h5>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li><strong className="text-white">Wizard-Style Onboarding:</strong> Step-by-step setup in plain English.</li>
                            <li><strong className="text-white">Drag-and-Drop Workflow Builder:</strong> Visual connections between apps.</li>
                            <li><strong className="text-white">Contextual Help:</strong> Embedded tooltips, videos, and chatbot assistance.</li>
                            <li><strong className="text-white">Minimal Dashboard:</strong> One-glance view of flows, errors, and alerts.</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Tools & Process</h5>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li><strong className="text-white">Research:</strong> Dovetail, Otter.ai, ChatGPT for synthesis.</li>
                            <li><strong className="text-white">Design:</strong> Figma, Canva AI, Adobe XD.</li>
                            <li><strong className="text-white">Testing:</strong> Hotjar, Lookback AI, and UserTesting.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Testing & Iteration */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Testing & Iteration</h4>
                <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                    <p>We conducted remote usability sessions with 12 non-technical users.</p>
                    
                    <div>
                        <strong className="text-white block mb-2">Findings:</strong>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li>Users loved visual progress indicators during setup.</li>
                            <li>Simplifying terminology improved comprehension scores by 35%.</li>
                            <li>Adding video tutorials reduced support queries by half.</li>
                        </ul>
                    </div>

                    <div>
                        <strong className="text-white block mb-2">After three rounds of iteration:</strong>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li>Navigation steps dropped by 40%.</li>
                            <li>System Usability Scale (SUS) score rose from <strong className="text-white">68 → 92</strong>.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Final Design */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Final Design</h4>
                
                <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                    <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Key Features</h5>
                        <ul className="list-disc list-inside flex flex-col gap-1">
                            <li><strong className="text-white">Guided Integrations:</strong> Step-by-step wizard with visual cues.</li>
                            <li><strong className="text-white">Smart Dashboard:</strong> Real-time status, alerts, and quick actions.</li>
                            <li><strong className="text-white">Drag-and-Drop Builder:</strong> Build workflows in minutes, not hours.</li>
                            <li><strong className="text-white">AI Support:</strong> Chatbot and contextual tips for instant help.</li>
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-xl font-semibold text-white mb-2">Visual Identity</h5>
                        <p>Soft colors, clean typography, and accessible contrast — optimized for non-technical readability.</p>
                    </div>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Results */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Results</h4>
                <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-base border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-white">
                                    <th className="py-2 pr-4">Metric</th>
                                    <th className="py-2">Outcome</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b border-slate-800">
                                    <td className="py-2 pr-4">Onboarding time</td>
                                    <td className="py-2">↓ 40%</td>
                                </tr>
                                <tr className="border-b border-slate-800">
                                    <td className="py-2 pr-4">User errors</td>
                                    <td className="py-2">↓ 50%</td>
                                </tr>
                                <tr>
                                    <td className="py-2 pr-4">Satisfaction (survey)</td>
                                    <td className="py-2">↑ 90% rated “easy to use”</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Lessons Learned */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
                <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">Lessons Learned</h4>
                <div className="lg:col-span-2 project-content">
                    <ul className="list-disc list-inside flex flex-col gap-1">
                        <li>Simplicity doesn’t mean fewer features — it means better communication.</li>
                        <li>Continuous testing uncovered usability wins early.</li>
                        <li>AI tools accelerated research and iteration without replacing user empathy.</li>
                    </ul>
                </div>
            </div>

            <hr className="border-slate-800" />

            {/* Key Takeaway */}
            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-500">
                <h4 className="text-xl font-bold text-white mb-2">Key Takeaway:</h4>
                <p className="italic text-lg">
                    &quot;FlowMatic transforms integration from a technical chore into an intuitive, guided experience. When technology speaks the user’s language, adoption follows naturally.&quot;
                </p>
            </div>
        </div>
    );
};

export default ShortCaseStudy;
