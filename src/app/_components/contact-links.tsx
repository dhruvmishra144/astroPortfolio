// Links
import Link from 'next/link';

// Icons
import { RiGoogleLine, RiWhatsappLine, RiLinkedinLine } from 'react-icons/ri';

const ContactLinks = () => {
  return (
      <div className='flex flex-row items-center justify-center gap-2 sm:gap-3 text-sm'>
        <Link
          href='https://www.linkedin.com/in/dhruvmishra144/'
          target='_blank'
          rel='noopener noreferrer'
          aria-label='LinkedIn profile'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white hover:-translate-y-0.5'
        >
          <RiLinkedinLine />
        </Link>
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://g.co/kgs/E29cFzu'
          aria-label='Google profile'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white hover:-translate-y-0.5'
        >
          <RiGoogleLine />
        </Link>
        {/* <Link target='_blank' href={'https://www.instagram.com/dhruv.mishra144/'} className='text-xl text-slate-400 hover:text-slate-300 translation-all  duration-300 hover:scale-110'>
          <RiInstagramLine />
        </Link> */}
        <Link
          target='_blank'
          rel='noopener noreferrer'
          href='https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects...'
          aria-label='WhatsApp chat'
          className='inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-white hover:-translate-y-0.5'
        >
          <RiWhatsappLine />
        </Link>
      </div>
  );
}

export default ContactLinks;

