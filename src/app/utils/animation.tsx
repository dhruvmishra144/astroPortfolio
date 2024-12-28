import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const animationPageIn = () => {
    const bannerOne = document.getElementById('banner-1');
    const bannerTwo = document.getElementById('banner-2');
    const bannerThree = document.getElementById('banner-3');
    const bannerFour = document.getElementById('banner-4');
    const linkText = document.getElementById('LinkText');

    if (bannerOne && bannerTwo && bannerThree && bannerFour && linkText) {
        const t1 = gsap.timeline()
        const t2 = gsap.timeline()
        t1.set([bannerOne, bannerTwo, bannerThree, bannerFour],{
            yPercent:0,
            stagger:0.35,
            duration:1.5,
            borderRadius:0,
            opacity:1

        })
        .to([bannerOne, bannerTwo, bannerThree, bannerFour],{
            yPercent:150,
            stagger:0.35,
            duration:1.5,
            borderRadius:100,
            opacity:0
        })
        
        t2.set([linkText],{
            opacity:0,
            scale:0,
            color:"#000000"

        }).to([linkText],{
            opacity:1,
            scale:1.5,
            stagger:0.35,
            duration:1
        })
       
        t2.to([linkText],{
            opacity:0,
            stagger:0.35,
            duration:0.8
        })
        
    }
}

export const animationPageOut = (href:string, router: AppRouterInstance) => {
    const bannerOne = document.getElementById('banner-1');
    const bannerTwo = document.getElementById('banner-2');
    const bannerThree = document.getElementById('banner-3');
    const bannerFour = document.getElementById('banner-4');

    if (bannerOne && bannerTwo && bannerThree && bannerFour) {
        const t1 = gsap.timeline()
        t1.set([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent:-100,
            borderRadius:100,
            stagger:0.35,
            duration:1,
            opacity:0
            

        }).to([bannerOne,bannerTwo,bannerThree,bannerFour],{
            yPercent:0,
            stagger:0.35,
            borderRadius:0,
            duration:1,
            opacity:1,
            onComplete: ()=>{
                router.push(href)
            }
        })
    }
}