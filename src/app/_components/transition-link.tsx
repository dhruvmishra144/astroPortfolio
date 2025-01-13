'use client'
import { usePathname, useRouter } from "next/navigation"
import { animationPageOut } from "../utils/animation"
import { useState } from "react"


interface Props {
    href: string,
    label: string,
    children: React.ReactNode
}

const TransitionLink = ({ href, label, children }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isloading, setIsLoading] = useState(false);
    const handleCLick = () => {
        setIsLoading(true);
        if (pathname != href) {
            setTimeout(() => {
                setIsLoading(false);
              }, 1500); // Transition duration: 3 seconds
              animationPageOut(href, router)    
        }
    }
    return (
        <button onClick={handleCLick} disabled={isloading} className={`rounded-lg flex flex-col gap-3 items-center uppercase p-0 py-2 sm:px-2 text-[10px] w-[60px] sm:w-[70px] cursor-pointer ${pathname === href?'bg-zinc-200/5 backdrop-blur-sm':''} border border-zinc-300/0 hover:border hover:border-zinc-700 transition-all duration-300`}>
            <span className="text-lg">{children}</span>
            <span className="text-xs">{label}</span>
        </button>
    )
}

export default TransitionLink;