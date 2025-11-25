'use client'

const LongCaseStudy = () => (
    <div className="flex flex-col gap-10 text-lg text-slate-400">
        {/* Why This Matters */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 project-section">
            <h4 className="text-2xl font-bold text-white lg:col-span-1 project-heading">1. Why This Matters</h4>
            <div className="flex flex-col gap-4 lg:col-span-2 project-content">
                <p>
                    Migration of data from various application might be overwhelming due to complexity and lack of technical knowledge, due to companies end up putting lot of effort and time in synchronising data across the applications and also deal with human errors while doing so. So we need to create a simple iPaaS platform with AI assistance which allow use to create data flow between applications.
                </p>
            </div>
        </div>

        <hr className="border-slate-800" />

        {/* Problem Statement */}
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
    </div>
);

export default LongCaseStudy;
