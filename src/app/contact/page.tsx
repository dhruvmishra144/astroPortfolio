import { PiArrowRightThin } from "react-icons/pi";

const Contact = () => {
    return (
        <div className="container mx-auto px-4 mb-24">
            <h1 className="text-3xl lg:text-5xl text-center mb-8">Let's Collaborate!</h1>
            <p className="text-lg text-center mb-8 max-w-[600px] mx-auto">I am is passionate about crafting intuitive and engaging digital experiences. If you're looking for a UX/UI designer to bring your vision to life, let's connect!</p>
            <hr className="border border-cyan-700 w-[80%] mx-auto mb-8" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                <a className="flex flex-row justify-between bg-cyan-500/20 backdrop-blur-md p-8 rounded-xl group" href="https://www.linkedin.com/in/dhruvmishra144/" target="_blank"><div className="flex flex-row gap-4"><p className="text-2xl lg:text-3xl">Linkedin</p></div><PiArrowRightThin className='text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' /></a>
                <a className="flex flex-row justify-between bg-cyan-500/20 backdrop-blur-md p-8 rounded-xl group" href="https://www.instagram.com/dhruv.mishra144/" target="_blank"><div className="flex flex-row gap-4"><p className="text-2xl lg:text-3xl">Instagram</p></div><PiArrowRightThin className='text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' /></a>
                <a className="flex flex-row justify-between bg-cyan-500/20 backdrop-blur-md p-8 rounded-xl group" href="https://g.co/kgs/nXUxsVY" target="_blank"><div className="flex flex-row gap-4"><p className="text-2xl lg:text-3xl">Google</p></div><PiArrowRightThin className='text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' /></a>
                <a className="flex flex-row justify-between bg-cyan-500/20 backdrop-blur-md p-8 rounded-xl group" href="https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects..." target="_blank"><div className="flex flex-row gap-4"><p className="text-2xl lg:text-3xl">Whatsapp</p></div><PiArrowRightThin className='text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' /></a>
            </div>
        </div>
    );
}

export default Contact;