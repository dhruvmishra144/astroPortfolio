      // next link
      import TransitionLink from './transition-link';
      // icons
      import { HiHome, HiUser, HiEnvelope, HiMiniDocumentText } from 'react-icons/hi2';
      
      const navLinks = [
        { href: '/', label: 'Home', icon: <HiHome /> },
        { href: '/about-me', label: 'About', icon: <HiUser /> },
        { href: '/contact', label: 'Contact', icon: <HiEnvelope /> },
        { href: '/resume', label: 'Resume', icon: <HiMiniDocumentText /> },
     ];
     
     const Nav = () => {
       return (
         <nav aria-label='Primary navigation' className='fixed bottom-3 left-1/2 z-30 w-[calc(100%-1.25rem)] max-w-[28rem] -translate-x-1/2'>
           <div className='surface-strong flex flex-nowrap justify-between gap-2 rounded-full px-2 py-2 sm:gap-3 sm:px-3'>
             {navLinks.map(({ href, label, icon }) => (
               <TransitionLink key={href} href={href} label={label}>
                 {icon}
               </TransitionLink>
             ))}
           </div>
         </nav>
       );
     };
     
     export default Nav;
