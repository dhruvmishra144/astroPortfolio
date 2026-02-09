'use client'

import { usePathname } from "next/navigation";
import Footer from "./footer";

const ConditionalFooter = () => {
    const pathname = usePathname();
    if (pathname === '/contact/') {
        return null;
    }

    return <Footer />;
}

export default ConditionalFooter;
