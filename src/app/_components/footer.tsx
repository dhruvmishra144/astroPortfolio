'use client'
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { animationPageOut } from "../utils/animation";

const Footer = () => {

    const router = useRouter();
    const href = '/contact'
    const pathname = usePathname();
    const normalizedPathname = pathname.endsWith('/') && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    const handleCLick = () => {
        if (normalizedPathname !== href) {
              animationPageOut(href, router)    
        }
    }

    return (
        <footer className="page-shell pb-32">
            <div className="surface-strong mx-auto flex max-w-4xl flex-col items-center gap-6 rounded-[2rem] px-6 py-10 text-center sm:px-10 sm:py-12">
                <Image className="mb-1" width={56} height={56} src="/chat.svg" alt="Let's connect" />
                <div className="space-y-3">
                    <p className="section-label justify-center">Start a conversation</p>
                    <h3 className="hero-title text-3xl text-balance text-white sm:text-4xl">
                        Have a product problem worth solving?
                    </h3>
                    <p className="mx-auto max-w-2xl text-sm text-slate-300 sm:text-base">
                        I design systems that reduce friction between strategy, interface, and implementation. If you need practical product thinking, reach out.
                    </p>
                </div>
                <button
                    type="button"
                    className="button-primary px-6 py-3 text-sm"
                    onClick={handleCLick}
                >
                    Let&apos;s Connect
                </button>
            </div>
        </footer>
    );
}

export default Footer;
