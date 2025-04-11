import Link from "next/link";

const Resume = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-4xl text-center mb-8">My Resume</h1>
            <div className="flex flex-col lg:flex-row gap-6 mb-16 max-w-[600px] mx-auto">
                <Link target="_blank" href={"https://www.canva.com/design/DAEQNdGR8r0/K_cMJ6Lfz4MLS86HrdcubQ/edit"} className="text-center p-10 bg-cyan-800/75 hover:bg-cyan-700 transition-colors durration-300 backdrop-blur-md rounded-xl flex-1">
                    <p className="text-2xl">Generic Resume</p>
                </Link>
                <Link target="_blank" href={"https://www.canva.com/design/DAGeBI1bH14/qg6_63PczAl8Frq0p-xpCw/edit"} className="text-center p-10 bg-cyan-800/75 hover:bg-cyan-700 transition-colors duration-300 backdrop-blur-md rounded-xl flex-1">
                    <p className="text-2xl">ATS Resume</p>
                </Link>
            </div>
        </div>
    );
}

export default Resume;