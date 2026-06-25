import { RiLinkedinBoxFill, RiGoogleFill, RiWhatsappFill } from 'react-icons/ri';
import { PiArrowRightThin } from 'react-icons/pi';

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/dhruvmishra144/',
    icon: <RiLinkedinBoxFill className='text-3xl lg:text-4xl' />,
  },
  // {
  //   name: 'Instagram',
  //   href: 'https://www.instagram.com/dhruv.mishra144/',
  //   icon: <RiInstagramFill className='text-3xl lg:text-4xl' />,
  // },
  {
    name: 'Google',
    href: 'https://g.co/kgs/nXUxsVY',
    icon: <RiGoogleFill className='text-3xl lg:text-4xl' />,
  },
  {
    name: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=918376848843&text=Hi%2C%20I%20want%20to%20connect%20for%20New%20Projects...',
    icon: <RiWhatsappFill className='text-3xl lg:text-4xl' />,
  },
];

const Contact = () => {
  return (
    <main id="content" className="page-shell pb-24">
      <section className="page-section grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-5">
          <p className="section-label">Contact</p>
          <h1 className="hero-title text-balance text-4xl text-white sm:text-5xl lg:text-6xl">
            Let&apos;s collaborate on a product that feels calm to use.
          </h1>
          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            I&apos;m open to UX audits, design systems, product redesigns, and front-end aligned partnerships. Reach out through whichever channel is easiest.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="chip">UX audits</span>
            <span className="chip">Design systems</span>
            <span className="chip">Front-end collaboration</span>
          </div>
        </div>

        <div className="surface rounded-[2rem] p-4 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {socialLinks.map(({ name, href, icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/5 p-5 hover:border-cyan-300/30 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-slate-950/40 text-cyan-300">
                    {icon}
                  </div>
                  <div>
                    <p className="text-lg font-medium text-white">{name}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Open channel</p>
                  </div>
                </div>
                <PiArrowRightThin className="text-2xl text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-cyan-300" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
