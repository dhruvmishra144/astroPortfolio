'use client'
import { usePathname, useRouter } from "next/navigation"
import { animationPageOut } from "../utils/animation"

interface Props {
    href: string,
    label: string,
    icon: any
}

const TransitionLink = ({ href, label, icon }: Props) => {
const router = useRouter();
const pathname = usePathname();
const handleCLick = () =>{
    if(pathname != href){
        animationPageOut(href, router)
    }
}
return(
    <button onClick={handleCLick}>{icon}{label}</button>
)
}

export default TransitionLink;