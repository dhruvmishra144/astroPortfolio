'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { animationPageOut } from "../utils/animation";
const Footer = () => {

    const router = useRouter();
    const href = '/contact'
        const pathname = usePathname();
        const handleCLick = () => {
            if (pathname != href) {
                  animationPageOut(href, router)    
            }
        }

    return (
        <div className={`container mx-auto flex flex-col items-center text-center px-4 pb-32 ${pathname==="/contact"?"hidden":""}`}>
            <Image className="mb-4" width={64} height={64} src={"/chat.svg"} alt={"lets's Connect"}  />
            <h3 className="text-3xl font-semibold mb-4">Have an idea? I&apos;d love to hear it!</h3>
            <p  className="text-base mb-4">Excited for a design journey or seeking product design tips? Reach out for some creative collaboration!</p>
            <button className={`py-4 px-8 bg-cyan-800 hover:bg-cyan-700 rounded transition-all duration-500 btnn block1`} onClick={handleCLick}>Let&apos;s Connect</button>
        </div>
    );
}

export default Footer;