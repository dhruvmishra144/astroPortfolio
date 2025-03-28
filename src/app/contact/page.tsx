import { PiArrowRightThin } from "react-icons/pi";

const Contact = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl lg:text-5xl text-center mb-8">Let's Collaborate!</h1>
            <p className="text-base text-center mb-8">I am is passionate about crafting intuitive and engaging digital experiences. If you're looking for a UX/UI designer to bring your vision to life, let's connect!</p>
            <hr className="border border-gray-700 w-[80%] mx-auto mb-8" />
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="flex flex-row justify-between bg-zinc-500/20 backdrop-blur-md p-8 rounded-xl group"><div className="flex flex-row gap-4"><a href="#" target="_blank" className="text-3xl">Linkedin</a></div><PiArrowRightThin className='hidden sm:block text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300' /></div>
                <div className="bg-zinc-500/20 backdrop-blur-md p-8 rounded-xl group"><a href="#" target="_blank">Instagram</a></div>
                <div className="bg-zinc-500/20 backdrop-blur-md p-8 rounded-xl group"><a href="#" target="_blank">Google</a></div>
                <div className="bg-zinc-500/20 backdrop-blur-md p-8 rounded-xl group"><a href="#" target="_blank">Whatsapp</a></div>
            </div>
        </div>
    );
}

export default Contact;