
'use client'

const LongCaseStudy = () => (
    <div className="flex flex-col gap-10 text-lg text-slate-400">
        {/* 1. Why This Matters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">1. Why This Matters</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>
                    Migration of data from various application might be overwhelming due to complexity and lack of technical knowledge, due to companies end up putting lot of effort and time in synchronising data across the applications and also deal with human errors while doing so. So we need to create a simple iPaaS platform with AI assistance which allow use to create data flow between applications.
                </p>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 2. Problem Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">2. Problem Statement</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>
                    SMEs often face challenges integrating multiple software applications due to limited technical expertise and resources. Existing iPaaS solutions are typically complex and require technical know-how. The design challenge was to create an intuitive, guided experience that empowers non-technical users to integrate their applications effortlessly. Key objectives included:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-1">
                    <li><strong className="text-white">Simplicity:</strong> Eliminate unnecessary technical jargon.</li>
                    <li><strong className="text-white">Guided Workflows:</strong> Provide step-by-step assistance.</li>
                    <li><strong className="text-white">Accessibility:</strong> Use visual cues and intuitive interactions to support all users.</li>
                </ul>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 3. Research & Discovery */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">3. Research & Discovery</h4>
            <div className="flex flex-col gap-6 lg:col-span-2 project-content">
                <div>
                    <h5 className="text-xl font-semibold text-white mb-3">3.1. User Interviews and Surveys</h5>
                    <p className="mb-4">We began with qualitative research with interviews.</p>
                    
                    {/* SME Owner 1 */}
                    <div className="mb-6 p-4 border border-slate-800 rounded-lg">
                        <h6 className="font-semibold text-white mb-2">SME Owner 1: John – Retail Business</h6>
                        <strong className="text-white block mb-1">Pain Points:</strong>
                        <ul className="list-disc list-inside mb-2 pl-4 text-slate-300">
                            <li><strong className="text-white">Overwhelming Complexity:</strong> John manages a retail operation using separate systems for POS, inventory, and e-commerce. The iPaaS solution he tried was loaded with technical jargon and configuration options that felt overwhelming.</li>
                            <li><strong className="text-white">Inadequate Onboarding & Support:</strong> The setup process lacked clear, guided instructions. When errors occurred, the error messages were vague and required technical know-how to troubleshoot.</li>
                            <li><strong className="text-white">Dependency on IT Experts:</strong> With limited in-house technical support, John found that resolving integration issues often meant waiting for external IT consultants, delaying business operations.</li>
                        </ul>
                        <strong className="text-white block mb-1">Proposed Resolution:</strong>
                        <ul className="list-disc list-inside pl-4 text-slate-300">
                            <li><strong className="text-white">Simplified, Guided Workflows:</strong> Introduce a wizard-based onboarding that walks users through each integration step, using plain language and visual cues.</li>
                            <li><strong className="text-white">Integrated Support:</strong> Embed real-time assistance, such as chatbots and video tutorials, within the platform.</li>
                            <li><strong className="text-white">Intuitive Dashboard:</strong> Develop a clean, minimalist interface that prioritizes critical tasks and alerts.</li>
                        </ul>
                    </div>

                    {/* SME Owner 2 */}
                    <div className="mb-6 p-4 border border-slate-800 rounded-lg">
                        <h6 className="font-semibold text-white mb-2">SME Owner 2: Maria – Service Industry Business</h6>
                        <strong className="text-white block mb-1">Pain Points:</strong>
                        <ul className="list-disc list-inside mb-2 pl-4 text-slate-300">
                            <li><strong className="text-white">Rigid Workflows & Customisation Limits:</strong> Maria’s service business relies on CRM, invoicing, and scheduling software. She found that the iPaaS solution was too rigid.</li>
                            <li><strong className="text-white">Complex Error Handling:</strong> When integrations failed, the error messages were technical and did not offer clear guidance.</li>
                            <li><strong className="text-white">Inflexible Modifications:</strong> Any changes or tweaks required significant developer intervention, which was both costly and time-consuming.</li>
                        </ul>
                        <strong className="text-white block mb-1">Proposed Resolution:</strong>
                        <ul className="list-disc list-inside pl-4 text-slate-300">
                            <li><strong className="text-white">Drag-and-Drop Interface:</strong> Implement a user-friendly, drag-and-drop interface.</li>
                            <li><strong className="text-white">Actionable Error Messaging:</strong> Enhance error notifications with simple explanations and step-by-step guidance.</li>
                            <li><strong className="text-white">Self-Service Modifications:</strong> Enable a low-code or no-code environment.</li>
                        </ul>
                    </div>

                    {/* SME Owner 3 */}
                    <div className="p-4 border border-slate-800 rounded-lg">
                        <h6 className="font-semibold text-white mb-2">SME Owner 3: David – Manufacturing Business</h6>
                        <strong className="text-white block mb-1">Pain Points:</strong>
                        <ul className="list-disc list-inside mb-2 pl-4 text-slate-300">
                            <li><strong className="text-white">Data Synchronization Delays:</strong> David’s firm relies on seamless integration, but the iPaaS solution often lagged.</li>
                            <li><strong className="text-white">Lack of Transparency:</strong> The platform did not provide detailed logs or actionable insights.</li>
                            <li><strong className="text-white">Operational Interruptions:</strong> Integration hiccups affected production scheduling and supply chain management.</li>
                        </ul>
                        <strong className="text-white block mb-1">Proposed Resolution:</strong>
                        <ul className="list-disc list-inside pl-4 text-slate-300">
                            <li><strong className="text-white">Real-Time Monitoring Dashboard:</strong> Develop a dashboard that provides real-time updates.</li>
                            <li><strong className="text-white">Enhanced Logging & Alerts:</strong> Integrate robust logging features with actionable insights.</li>
                            <li><strong className="text-white">Proactive Diagnostics:</strong> Incorporate AI-driven diagnostics to predict potential failures.</li>
                        </ul>
                    </div>

                    <p className="mt-6 mb-4"><strong>Surveys:</strong> Summary of survey results from 100 SMEs regarding their experiences with 10 leading iPaaS platforms.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-base border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-white">
                                    <th className="py-2 px-4">Platform</th>
                                    <th className="py-2 px-4">% SMEs Reporting Pain</th>
                                    <th className="py-2 px-4">Top Pain Points</th>
                                    <th className="py-2 px-4">Suggested Improvements</th>
                                </tr>
                            </thead>
                            <tbody className="align-top">
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Workato</td><td className="py-2 px-4">65%</td><td className="py-2 px-4">Complex interface, steep learning curve</td><td className="py-2 px-4">Simplify UI elements; incorporate wizard-based onboarding.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Power Automate</td><td className="py-2 px-4">55%</td><td className="py-2 px-4">Limited customization; integration issues</td><td className="py-2 px-4">Enhance multi-cloud support; refine UI consistency.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Celigo</td><td className="py-2 px-4">60%</td><td className="py-2 px-4">Unintuitive workflows; inadequate error handling</td><td className="py-2 px-4">Implement guided workflows; improve error messaging.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Boomi</td><td className="py-2 px-4">70%</td><td className="py-2 px-4">High complexity; expensive</td><td className="py-2 px-4">Offer a streamlined SME version with clear tutorials.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Cloud Workflow</td><td className="py-2 px-4">50%</td><td className="py-2 px-4">Limited integration options; scalability concerns</td><td className="py-2 px-4">Expand integration capabilities; optimize performance.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">SAP Integration Suite</td><td className="py-2 px-4">80%</td><td className="py-2 px-4">Enterprise-focused design; too complex</td><td className="py-2 px-4">Develop a simplified, SME-friendly version.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">MuleSoft</td><td className="py-2 px-4">75%</td><td className="py-2 px-4">Overly technical; requires specialized expertise</td><td className="py-2 px-4">Provide SME-focused templates and step-by-step guides.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Jitterbit</td><td className="py-2 px-4">60%</td><td className="py-2 px-4">Limited documentation; steep learning curve</td><td className="py-2 px-4">Enhance and expand documentation; integrate tutorials.</td></tr>
                                <tr className="border-b border-slate-800"><td className="py-2 px-4">Elastic.io</td><td className="py-2 px-4">50%</td><td className="py-2 px-4">Unintuitive interface; slow performance</td><td className="py-2 px-4">Modernize UI design; optimize performance.</td></tr>
                                <tr><td className="py-2 px-4">tray.io</td><td className="py-2 px-4">55%</td><td className="py-2 px-4">Inconsistent performance; limited support</td><td className="py-2 px-4">Standardize UI elements; improve support services.</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div>
                    <h5 className="text-xl font-semibold text-white mt-8 mb-3">3.2. Competitive Analysis</h5>
                    <p>Analyzed existing iPaaS platforms to pinpoint where complexity overwhelmed non-technical users. We identified overloaded dashboards, technical terminology, and a lack of step-by-step guidance.</p>
                </div>
                
                <div>
                    <h5 className="text-xl font-semibold text-white mt-8 mb-3">3.3. Persona Creation & Journey Mapping</h5>
                    <p>Based on research data, we developed primary user personas and mapped their journeys to highlight friction points.</p>
                    {/* Personas could be detailed here similarly to SME owners if needed */}
                </div>
            </div>
        </div>
        <hr className="border-slate-800" />
        
        {/* 4. Ideation & Design Process */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">4. Ideation & Design</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <h5 className="text-xl font-semibold text-white">4.1. Brainstorming & Conceptualization</h5>
                <ul className="list-disc list-inside">
                    <li><strong className="text-white">Guided Onboarding:</strong> A step-by-step process to ease users in.</li>
                    <li><strong className="text-white">Simplified Dashboard:</strong> A minimal interface highlighting essentials.</li>
                    <li><strong className="text-white">Visual Cues:</strong> Icons, tooltips, and progress indicators.</li>
                </ul>
                <h5 className="text-xl font-semibold text-white mt-4">4.2. Wireframing and Prototyping</h5>
                <p>Developed low-fidelity wireframes to map out user flows and screen hierarchy, prioritizing key actions.</p>
                <h5 className="text-xl font-semibold text-white mt-4">4.3. Visual and Interaction Design</h5>
                <p>Focused on a design that reflects simplicity and clarity, using a soft color palette, clean typography, and intuitive iconography while ensuring WCAG compliance.</p>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 5. Usability Testing & Iteration */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">5. Usability Testing</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>Conducted remote usability tests and A/B testing, leveraging tools like Hotjar, Lookback AI, and UserTesting to gather feedback and iterate on the design.</p>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 6. Final Design & Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">6. Final Design & Outcomes</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <ul className="list-disc list-inside">
                    <li><strong className="text-white">User Adoption:</strong> 40% faster onboarding times.</li>
                    <li><strong className="text-white">Error Reduction:</strong> 50% fewer user errors.</li>
                    <li><strong className="text-white">Customer Satisfaction:</strong> Positive feedback on ease-of-use.</li>
                </ul>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 7. Lessons Learned & Next Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">7. Lessons Learned</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>Key takeaways include the importance of user-centric design, an iterative process, and cross-team collaboration. Future plans involve enhanced personalization and expanded AI-powered support.</p>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 8. AI Tools Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">8. AI Tools Overview</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>Utilized a suite of AI tools across the project lifecycle, including Otter.ai for transcription, ChatGPT for synthesis, Figma AI for wireframing, and various platforms for usability testing analysis.</p>
            </div>
        </div>
        <hr className="border-slate-800" />

        {/* 9. Appendices & Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">9. Appendices</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>Deliverables included wireframes, interactive prototypes, user feedback reports, and the final high-fidelity mockups, all documented within the design system.</p>
            </div>
        </div>
    </div>
);

export default LongCaseStudy;
