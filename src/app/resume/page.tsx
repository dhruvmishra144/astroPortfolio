import Link from "next/link";
import { RiDownloadCloud2Fill } from "react-icons/ri";

const resumeLinks = [
  {
    title: "Generic Resume",
    description: "A broad overview of product design, UX, and execution experience.",
    href: "https://www.canva.com/design/DAEQNdGR8r0/K_cMJ6Lfz4MLS86HrdcubQ/edit",
  },
  {
    title: "ATS Resume",
    description: "A cleaner version optimized for applicant tracking and keyword scans.",
    href: "https://www.canva.com/design/DAGeBI1bH14/qg6_63PczAl8Frq0p-xpCw/edit",
  },
];

const Resume = () => {
    return (
        <main id="content" className="page-shell pb-24">
            <section className="page-section">
                <div className="mb-8 space-y-3">
                    <p className="section-label">Resume</p>
                    <h1 className="hero-title text-balance text-4xl text-white sm:text-5xl">
                        Open the latest resume versions.
                    </h1>
                    <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                        Choose the version that fits the context. Both links open in Canva so you can review the most current copy.
                    </p>
                </div>

                <div className="grid gap-4 lg:grid-cols-2">
                    {resumeLinks.map((resume) => (
                        <Link
                        key={resume.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={resume.href}
                        className="surface group flex flex-col gap-6 rounded-[1.75rem] p-6 hover:border-cyan-300/30 hover:bg-white/10"
                    >
                            <div className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-cyan-400/10 text-cyan-300">
                                    <RiDownloadCloud2Fill className="text-2xl" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-lg font-medium text-white">{resume.title}</p>
                                    <p className="text-sm text-slate-400">{resume.description}</p>
                                </div>
                            </div>
                            <div className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                                Open in Canva
                                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Resume;
