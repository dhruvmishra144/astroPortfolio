'use client'
import { useRouter, usePathname } from "next/navigation"
import { animationPageOut } from "../utils/animation"

interface Props {
    href: string,
    label: string,
    children: React.ReactNode
}

const TransitionLink = ({ href, label, children }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    
    // Normalize pathname by removing trailing slash for comparison
    const normalizedPathname = pathname.endsWith('/') && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    const isActive = normalizedPathname === href;

    const handleCLick = () => {
        if (!isActive) {
            animationPageOut(href, router);
        }
    }
    return (
        <button 
            onClick={handleCLick} 
            disabled={isActive}
            className={`rounded-lg flex flex-col gap-3 items-center uppercase p-0 py-2 sm:px-2 text-[10px] w-[60px] sm:w-[70px] border transition-all duration-300 
                ${isActive 
                    ? 'border-cyan-500 text-cyan-500 cursor-not-allowed' 
                    : 'border-cyan-300/0 hover:border-cyan-800'}
            `}
        >
            <span className="text-lg">{children}</span>
            <span className="text-xs whitespace-nowrap">{label}</span>
        </button>
    )
}

export default TransitionLink;