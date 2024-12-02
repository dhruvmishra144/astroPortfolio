import Image from "next/image";
import Link from "next/link";
import ContactLink from "./contact-links";

const Header = () => {
    return (
        <div>
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
                <Link href={'/'}><Image width={60} height={60} src={"/logo.svg"} alt={""} /></Link>
                <ContactLink/>
            </div>
        </div>
    );
}

export default Header;