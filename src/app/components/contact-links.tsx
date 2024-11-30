// Links
import Link from 'next/link';

// Icons
import { RiFacebookLine, RiWhatsappLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

const ContactLinks = () => {
    return (
        <div className='flex flex-col gap-4 lg:flex-row lg:gap-8'>
         <div className='flex flex-row items-center justify-center gap-x-10 text-sm'>
        <Link href={'/about'} className='text-zinc-500 hover:text-sky-300 translation-all  duration-300'>
          ABOUT
        </Link>
        <Link href={''} className='text-zinc-500 hover:text-sky-300 translation-all  duration-300'>
          CV
        </Link>
        <Link href={''} className='text-zinc-500 hover:text-sky-300 translation-all  duration-300'>
          CONTACT ME
        </Link>
        </div>
        <div className='w-70 border-b border-zinc-600 lg:w-0 lg:h-4 lg:border-r'></div>
        <div className='flex flex-row items-center justify-center gap-x-10 text-sm lg:gap-x-6'>
        <Link href={'https://www.linkedin.com/in/dhruvmishra144/'} target='_blank' className='text-zinc-500 hover:text-sky-300 translation-all  duration-300 hover:scale-110'>
          <RiLinkedinLine/>
        </Link>
        <Link href={'https://www.facebook.com/profile.php?id=100056903868720'} target='_blank' className='text-zinc-500 hover:text-sky-300 translation-all  duration-300 hover:scale-110'>
          <RiFacebookLine/>
        </Link>
        <Link href={'https://www.instagram.com/dhruv.mishra144/'} target='_blank' className='text-zinc-500 hover:text-sky-300 translation-all  duration-300 hover:scale-110'>
          <RiInstagramLine/>
        </Link>
        <Link href={'https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects...'} target='_blank' className='text-zinc-500 hover:text-sky-300 translation-all  duration-300 hover:scale-110'>
          <RiWhatsappLine/>
        </Link>
        </div>
      </div>
    );
}

export default ContactLinks;



