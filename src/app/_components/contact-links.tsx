// Links
import Link from 'next/link';

// Icons
import { RiGoogleLine, RiWhatsappLine, RiInstagramLine, RiLinkedinLine } from 'react-icons/ri';

const ContactLinks = () => {
  return (
      <div className='flex flex-row items-center justify-center gap-x-8 lg:gap-x-10 text-sm'>
        <Link href={'https://www.linkedin.com/in/dhruvmishra144/'} target='_blank' className='text-xl text-slate-400 hover:text-slate-300 translation-all  duration-300 hover:scale-110'>
          <RiLinkedinLine />
        </Link>
        <Link target='_blank' href={'https://g.co/kgs/E29cFzu'} className='text-xl text-slate-400 hover:text-slate-300 translation-all  duration-300 hover:scale-110'>
          <RiGoogleLine />
        </Link>
        {/* <Link target='_blank' href={'https://www.instagram.com/dhruv.mishra144/'} className='text-xl text-slate-400 hover:text-slate-300 translation-all  duration-300 hover:scale-110'>
          <RiInstagramLine />
        </Link> */}
        <Link target='_blank' href={'https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects...'} className='text-xl text-slate-400 hover:text-slate-300 translation-all  duration-300 hover:scale-110'>
          <RiWhatsappLine />
        </Link>
      </div>
  );
}

export default ContactLinks;



