'use client'

import { usePathname } from "next/navigation";
import Footer from "./footer";

const ConditionalFooter = () => {
    const pathname = usePathname();
    const normalizedPathname = pathname.endsWith('/') && pathname.length > 1
        ? pathname.slice(0, -1)
        : pathname;

    if (normalizedPathname === '/contact') {
        return null;
    }

    return <Footer />;
}

export default ConditionalFooter;
