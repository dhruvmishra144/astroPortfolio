// next link
import TransitionLink from './transition-link';
// icons
import { HiHome, HiUser, HiEnvelope, HiMiniDocumentText } from 'react-icons/hi2';

const Nav = () => {
    return (
        <div className='flex flex-wrap gap-4 md:gap-2 justify-center fixed bottom-0 sm:bottom-4 left-[50%] -translate-x-[50%] w-[calc(100%)] sm:w-auto backdrop-blur-sm bg-cyan-950/50 hover:bg-cyan-900/50 transition-all duration-300 rounded-lg z-20 px-1 py-2 sm:p-2 cursor-pointer'>
            <TransitionLink href="/" label="home">
                <HiHome />
            </TransitionLink>
            <TransitionLink href="/about" label="about">
                <HiUser />
            </TransitionLink>
            <TransitionLink href="/contact" label="contact">
                <HiEnvelope />
            </TransitionLink>
            <TransitionLink href="/resume" label="resume">
                <HiMiniDocumentText />
            </TransitionLink>
        </div>
    );
};

export default Nav;