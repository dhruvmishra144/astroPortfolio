// Links
import Link from 'next/link';

// Icons
import { RiFacebookLine, RiWhatsappLine, RiInstagramLine, RiGoogleLine } from 'react-icons/ri';

const ContactLinks = () => {
    return (
        <div className='flex items-center gap-x-5 text-lg'>
        <Link href={''} className='hover:text-sky-600 translation-all  duration-300'>
          <RiGoogleLine/>
        </Link>
        <Link href={''} className='hover:text-sky-600 translation-all  duration-300'>
          <RiFacebookLine/>
        </Link>
        <Link href={''} className='hover:text-sky-600 translation-all  duration-300'>
          <RiInstagramLine/>
        </Link>
        <Link href={''} className='hover:text-sky-600 translation-all  duration-300'>
          <RiWhatsappLine/>
        </Link>
      </div>
    );
}

export default ContactLinks;



