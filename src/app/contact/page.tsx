import { RiLinkedinBoxFill, RiInstagramFill, RiGoogleFill, RiWhatsappFill } from 'react-icons/ri';
import { PiArrowRightThin } from 'react-icons/pi';

const Contact = () => {


const socialLinks = [
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/dhruvmishra144/',
      icon: <RiLinkedinBoxFill className='text-3xl lg:text-5xl' />,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dhruv.mishra144/',
      icon: <RiInstagramFill className='text-3xl lg:text-5xl' />,
    },
    {
      name: 'Google',
      href: 'https://g.co/kgs/nXUxsVY',
      icon: <RiGoogleFill className='text-3xl lg:text-5xl' />,
    },
    {
      name: 'Whatsapp',
      href: 'https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects...',
      icon: <RiWhatsappFill className='text-3xl lg:text-5xl' />,
    },
  ];

  return (
    <div className="container mx-auto px-4 mb-24">
      <h1 className="text-3xl lg:text-5xl text-center mb-8">Let&apos;s Collaborate!</h1>
      <p className="text-lg text-center mb-8 max-w-[800px] mx-auto">
        I am passionate about crafting intuitive and engaging digital experiences. If you&apos;re looking for a UX/UI designer to bring your vision to life, let&apos;s connect!
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        {socialLinks.map(({ name, href, icon }) => (
          <a
            key={name}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row justify-between bg-cyan-500/20 backdrop-blur-md p-8 rounded-xl group"
          >
            <div className="flex flex-row gap-4 items-center">
              {icon}
              <p className="text-2xl lg:text-3xl">{name}</p>
            </div>
            <PiArrowRightThin className="text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;