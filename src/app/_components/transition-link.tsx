 'use client'
import { useRouter } from "next/navigation"
import { animationPageOut } from "../utils/animation"

interface Props {
    href: string,
    label: string,
    children: React.ReactNode
}

const TransitionLink = ({ href, label, children }: Props) => {
    const router = useRouter();
    const handleCLick = () => {
        animationPageOut(href, router)    
    }
    return (
        <button onClick={handleCLick} className={`rounded-lg flex flex-col gap-3 items-center uppercase p-0 py-2 sm:px-2 text-[10px] w-[60px] sm:w-[70px] cursor-pointer border border-cyan-300/0 hover:border hover:border-cyan-800 transition-all duration-300`}>
            <span className="text-lg">{children}</span>
            <span className="text-xs">{label}</span>
        </button>
    )
}

export default TransitionLink;
