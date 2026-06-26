'use client'
import Image from "next/image";
import Link from "next/link";
import ContactLink from "./contact-links";

const Header = () => {
    return (
        <header className="sticky top-0 z-40 pt-4">
            <div className="page-shell">
                <div className="surface-strong flex items-center justify-between gap-4 rounded-[1.5rem] px-4 py-3 sm:px-5 sm:py-4">
                    <Link href="/" className="flex items-center gap-3" aria-label="Dhruv Mishra home">
                        <Image width={56} height={56} src="/logo.svg" alt="Dhruv Mishra" className="h-12 w-12 shrink-0" priority />
                        <div className="hidden sm:block">
                            <p className="text-sm font-semibold text-white">Dhruv Mishra</p>
                            <p className="text-[11px] uppercase tracking-[0.32em] text-slate-400">UX/UI Designer</p>
                        </div>
                    </Link>
                    {/* <div className="hidden md:block text-right">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">Selected work</p>
                        <p className="text-sm text-slate-300">Design systems, product thinking, clean execution</p>
                    </div> */}
                    <ContactLink />
                </div>
            </div>
        </header>
    );
}

export default Header;
