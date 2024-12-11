'use client'
import { useGSAP } from "@gsap/react";
import {animationPageIn} from "./utils/animation";
const Template = ({children}:{children: React.ReactNode}) => {
    useGSAP(()=>{
        animationPageIn();
    },[])
    return (
        <div>
            <div id="banner-1" className="min-h-screen bg-white z-30  fixed top-0 left-0 w-1/4"></div>
            <div id="banner-2" className="min-h-screen bg-white z-30  fixed top-0 left-1/4 w-1/4"></div>
            <div id="banner-3" className="min-h-screen bg-white z-30  fixed top-0 left-2/4 w-1/4"></div>
            <div id="banner-4" className="min-h-screen bg-white z-30  fixed top-0 left-3/4 w-1/4"></div>
            {children}
        </div>
    );
}

export default Template;