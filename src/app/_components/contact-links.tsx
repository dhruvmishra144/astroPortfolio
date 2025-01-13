// Links
import Link from 'next/link';

// Icons
import { RiFacebookLine, RiWhatsappLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

const ContactLinks = () => {
  return (
    <div className='flex flex-row gap-8 lg:flex-row'>
      <div className='flex flex-row items-center justify-center gap-x-4 lg:gap-x-10 text-sm'>
        <Link href={'https://www.linkedin.com/in/dhruvmishra144/'} target='_blank' className='text-xl text-zinc-400 hover:text-zinc-300 translation-all  duration-300 hover:scale-110'>
          <RiLinkedinLine />
        </Link>
        <Link target='_blank' href={'https://www.facebook.com/profile.php?id=100056903868720'} className='text-xl text-zinc-400 hover:text-zinc-300 translation-all  duration-300 hover:scale-110'>
          <RiFacebookLine />
        </Link>
        <Link target='_blank' href={'https://www.instagram.com/dhruv.mishra144/'} className='text-xl text-zinc-400 hover:text-zinc-300 translation-all  duration-300 hover:scale-110'>
          <RiInstagramLine />
        </Link>
        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects...'} className='text-xl text-zinc-400 hover:text-zinc-300 translation-all  duration-300 hover:scale-110'>
          <RiWhatsappLine />
        </Link>
      </div>
    </div>
  );
}

export default ContactLinks;



