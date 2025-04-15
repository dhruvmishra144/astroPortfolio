'use client'
import { useGSAP } from "@gsap/react";
import {animationPageIn} from "./utils/animation";
// import { usePathname } from "next/navigation";
import { ImSpinner9 } from "react-icons/im";
const Template = ({children}:{children: React.ReactNode}) => {
    // const pathname = usePathname();
    useGSAP(()=>{
        animationPageIn();
    },[])
    return (
        <div className="">
            <div id="banner-1" className="min-h-screen h-screen backdrop-blur-3xl bg-black  z-30 fixed top-0 left-0 w-full flex flex-col items-center justify-center">
            <div className="relative -top-16 lg:top-0">
            <ImSpinner9 className="text-cyan-500 text-8xl animate-spin" />
            <ImSpinner9 className="text-cyan-300 text-8xl animate-spin -z-10 scale-105 blur-[10px] absolute top-0" />
            </div>
            </div>
            {/* <div id="banner-2" className="min-h-screen bg-white z-30 fixed top-0 left-1/4 w-1/4 w-[calc(25% + 2px)]"></div>
            <div id="banner-3" className="min-h-screen bg-white z-30 fixed top-0 left-2/4 w-1/4 w-[calc(25% + 2px)]"></div>
            <div id="banner-4" className="min-h-screen bg-white z-30 fixed top-0 left-3/4 w-1/4 w-[calc(25% + 2px)]"></div> */}
            {/* <div id="LinkText" className="text-white text-center z-50 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">{`${pathname === '/'?'Glad you\'re here. Welcome!':pathname === '/about'?'About Me':pathname === '/resume'?'My Resume':pathname === '/contact'?'Let\'s Connect':pathname}`}</div> */}
            {children}
        </div>
    );
}

export default Template;