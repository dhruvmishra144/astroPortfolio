'use client'
import Image from "next/image";
import { usePathname } from "next/navigation";
const Footer = () => {
    const pathname = usePathname();
    return (
        <div className="container mx-auto flex flex-col items-center text-center px-4 pb-32">
            <Image className="mb-4" width={64} height={64} src={"/chat.svg"} alt={"lets's Connect"}  />
            <h3 className="text-3xl font-semibold mb-4">Have an idea? I'd love to hear it!</h3>
            <p  className="text-base mb-4">Excited for a design journey or seeking product design tips? Reach out for some creative collaboration!</p>
            <div className="relative">
            <a className="py-4 px-8 bg-slate-900 hover:bg-slate-800 rounded transition-all duration-500 btnn block" href={pathname==="/contact"?"#":"/contact"}>Let's Connect</a>
            </div>
        </div>
    );
}

export default Footer;