'use client'
import Image from "next/image";
import Link from "next/link";
import ContactLink from "./contact-links";

const Header = () => {
    return (
       
            <div className="container mx-auto flex flex-row lg:flex-row justify-between items-center gap-y-6 py-8 px-4">
                <Link href={'/'}><Image width={60} height={60} src={"/logo.svg"} alt={"/"} className="w-auto h-auto" /></Link>
                <ContactLink/>
            </div>
        
    );
}

export default Header;