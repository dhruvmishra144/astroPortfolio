import Link from "next/link";
import { RiDownloadCloud2Fill } from "react-icons/ri";

const Resume = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center mb-8">Download My Resume</h1>
            <div className="flex flex-col lg:flex-row gap-6 mb-16 max-w-[800px] mx-auto">
                <Link target="_blank" href={"https://www.canva.com/design/DAEQNdGR8r0/K_cMJ6Lfz4MLS86HrdcubQ/edit"} className="text-center p-6 bg-cyan-800/75 hover:bg-cyan-700 transition-colors durration-300 backdrop-blur-md rounded-xl flex flex-row justify-center flex-1">
                <div className="flex flex-row items-center gap-4"><RiDownloadCloud2Fill className="text-3xl" />
                <p className="text-2xl">Generic Resume</p></div>
                </Link>
                <Link target="_blank" href={"https://www.canva.com/design/DAGeBI1bH14/qg6_63PczAl8Frq0p-xpCw/edit"} className="text-center p-6 bg-cyan-800/75 hover:bg-cyan-700 transition-colors duration-300 backdrop-blur-md rounded-xl flex flex-row justify-center flex-1">
                <div className="flex flex-row items-center gap-4">
                <RiDownloadCloud2Fill className="text-3xl" />
                <p className="text-2xl">ATS Resume</p>
                </div>
                </Link>
            </div>
        </div>
    );
}

export default Resume;