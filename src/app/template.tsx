'use client'
import { useGSAP } from "@gsap/react";
import {animationPageIn} from "./utils/animation";
import { usePathname } from "next/navigation";
const Template = ({children}:{children: React.ReactNode}) => {
    const pathname = usePathname();
    useGSAP(()=>{
        animationPageIn();
    },[])
    return (
        <div className="overflow-hidden">
            <div id="banner-1" className="min-h-screen bg-white z-30 fixed top-0 left-0 w-1/4"></div>
            <div id="banner-2" className="min-h-screen bg-white z-30 fixed top-0 left-1/4 w-1/4"></div>
            <div id="banner-3" className="min-h-screen bg-white z-30 fixed top-0 left-2/4 w-1/4"></div>
            <div id="banner-4" className="min-h-screen bg-white z-30 fixed top-0 left-3/4 w-1/4"></div>
            <div id="LinkText" className="text-white z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{`${pathname === '/'?'Glad to See You Here':pathname === '/about'?'About Me':pathname === '/cv'?'Curriculum Vitae':pathname === '/contact'?'Let\'s Connect':pathname}`}</div>
            {children}
        </div>
    );
}

export default Template;