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
            type="button"
            onClick={handleCLick} 
            disabled={isActive}
            aria-current={isActive ? 'page' : undefined}
            title={label}
            className={`group flex min-w-[64px] flex-col items-center gap-1.5 rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.28em] transition-all duration-300 sm:min-w-[72px] sm:px-4
                ${isActive 
                    ? 'border-cyan-300/40 bg-cyan-400/10 text-white shadow-[0_12px_30px_rgba(34,211,238,0.15)] cursor-not-allowed' 
                    : 'border-white/10 bg-white/5 text-slate-400 hover:-translate-y-0.5 hover:border-cyan-300/30 hover:bg-white/10 hover:text-white'}
            `}
        >
            <span className="text-lg transition-transform duration-300 group-hover:-translate-y-0.5">{children}</span>
            <span className="whitespace-nowrap text-[0.62rem] font-medium">{label}</span>
        </button>
    )
}

export default TransitionLink;
