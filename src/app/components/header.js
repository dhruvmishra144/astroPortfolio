import Image from "next/image";

const Header = () => {
    return (
        <div>
            <div className="container mx-auto py-4">
                <Image width={60} height={60} src={"/logo.svg"} alt={""} />
            </div>
        </div>
    );
}

export default Header;