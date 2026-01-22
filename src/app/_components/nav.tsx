      // next link
      import TransitionLink from './transition-link';
      // icons
      import { HiHome, HiUser, HiEnvelope, HiMiniDocumentText } from 'react-icons/hi2';
      
      const navLinks = [
        { href: '/', label: 'home', icon: <HiHome /> },
        { href: '/about-me', label: 'about me', icon: <HiUser /> },
        { href: '/contact', label: 'contact', icon: <HiEnvelope /> },
       { href: '/resume', label: 'resume', icon: <HiMiniDocumentText /> },
     ];
     
     const Nav = () => {
       return (
         <div className='flex flex-nowrap gap-4 md:gap-6 justify-center fixed bottom-0 sm:bottom-4 left-[50%] -translate-x-[50%] w-[calc(100%)] sm:w-auto backdrop-blur-sm bg-cyan-950/50 hover:bg-cyan-900/50 transition-all duration-300 rounded-lg z-20 px-1 py-2 sm:px-4 sm:py-3 cursor-pointer'>
           {navLinks.map(({ href, label, icon }) => (
             <TransitionLink key={href} href={href} label={label}>
               {icon}
             </TransitionLink>
           ))}
         </div>
       );
     };
     
     export default Nav;
