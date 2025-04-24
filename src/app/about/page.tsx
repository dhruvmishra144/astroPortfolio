import Image from "next/image";
import { PiArrowRightThin } from "react-icons/pi";
import { RiLinkedinBoxFill } from "react-icons/ri";

export default function About() {

  const testimonials = [
    {
      text: 'Had a great experience working with Dhruv Mishra. Work satisfaction for client seems to be priority for him. Found his designing skills to be updated with current market trends. He provided creative design after brainstorming the right solution for my UI/UX work given to him. Highly recommend him to someone looking for quality work.',
      author: 'Kavinder Singh',
    },
    {
      text: 'I really liked the services provided to me. It was value for money and the services were timely delivered. I would recommend you to the others as well. Looking forward to work with you again. Good job done!',
      author: 'Divya Kukreja',
    },
    {
      text: 'A perfect place for your website development. Have the ability to create, design, Hosting, Managing sites, logo making and optimize and they also guide you throughout the process. Highly recommended',
      author: 'Bhawana Rana',
    },
    {
      text: 'Dhruv is very professional and liked working with him.I will surely like to collaborate with him in future.',
      author: 'Vandana Singh',
    },
  ];


  return (
    <main className='container mx-auto h-auto'>
      <section className='flex flex-col items-center justify-center h-[calc(100vh-250px)] md:h-[calc(100vh-250px)]'>
        <p className='relative text-4xl lg:text-6xl text-center text-cyan-600 mb-4'>
          I&apos;m absolutely delighted to know
        </p>
        <p className='relative text-3xl lg:text-5xl text-center text-slate-200 mb-8'>
          that you&apos;re interested to learn more about me!
        </p>
      </section>

      <section className='flex flex-col lg:flex-row lg:gap-16 gap-6 px-8 mb-16 xl:items-center'>
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl lg:text-6xl text-white leading-snug">Hey there! <br className="hidden lg:block" /><span className="font-bold text-cyan-400">I’m Dhruv Mishra</span></h1>
          <p className='relative text-left text-slate-200 mb-6 text-lg max-w-[1024] flex-grow'>A Product Designer with decade of experience and  passion for creating intuitive and visually compelling digital experiences. My journey into product design started with a love for problem-solving and an obsession with how people interact with technology. From sketching wireframes to refining pixel-perfect interfaces, I thrive on crafting designs that are both functional and delightful.</p>
        </div>
        <Image width={1024} height={576} src={"/sample-photo.jpg"} className="w-[100%] lg:w-[50%] lg:rounded-4xl rounded-2xl" alt={""} />
      </section>

      <section>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">Experience & Location</h2>
          </div>

          <div>
            <ul className="text-gray-200 mb-4 text-lg flex flex-col gap-2">
              <li> <strong>Years of Experience:</strong> 10+ Years </li>
              <li> <strong>Based in:</strong> New Delhi, India </li>
              <li> <strong>Availability:</strong> Available for exciting Full-time Job or Collaborative Freelance Projects</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">My Journey</h2>
          </div>

          <div className="flex flex-col gap-4 text-lg">
            <p>Ever since I was a kid with a pencil in hand, art and design have been my true love. I would lose myself in doodling and sketching, watching my creations ignite smiles among friends and family. That early passion gradually evolved into a dedication to design—a journey that took me from graphic sketches to crafting dynamic digital experiences.</p>
            <p>During my college years, I seized every opportunity to turn creative passion into real-world practice—landing my first design gig and soon after realizing that my calling was to create user-focused designs. My curiosity led me to explore the deeper layers of digital interaction, prompting a natural shift from traditional graphic design to a specialized focus on user experience and interface design.</p>
            <p>Over the years, I’ve had the privilege of working across various industries—from tech startups to established enterprises—each experience enriching my understanding of how thoughtful design can solve complex problems and elevate user engagement.</p>
          </div>

        </div>
      </section>

      <section>
        <a
          href={'https://www.linkedin.com/in/dhruvmishra144/'}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 lg:flex-row group p-8 bg-cyan-800/15 backdrop-blur-md justify-between rounded-xl mb-16 items-center"
        >
          <h2 className="text-2xl text-gray-400 group-hover:text-gray-200 transition-all duration-300">Learn more about my Professional Timeline</h2>

          <div className="flex flex-row gap-4 items-center">
            <RiLinkedinBoxFill className='text-3xl lg:text-5xl' />
            <p className="text-2xl lg:text-3xl">Linkedin</p>
            <PiArrowRightThin className="text-3xl lg:text-5xl group-hover:-rotate-45 group-hover:transition-transform duration-300" />
          </div>
        </a>
      </section>

      <section>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">My Tools & Techniques</h2>
          </div>

          <div>
            <p className="text-lg mb-4">I believe staying current with design trends is paramount. Here’s a quick look at my toolkit:</p>
            <ul className="text-gray-200 mb-4 text-lg flex flex-col gap-2">
              <li> <strong>Figma:</strong> For whiteboard design, flow creation, interactive interface designs and prototyping</li>
              <li> <strong>Notion:</strong> For documantation and productivity</li>
              <li> <strong>Chatgpt & Google Gemini:</strong> For image creation and AI based UX Research</li>
              <li> <strong>Vs-code:</strong> For writing code</li>
              <li> <strong>Nextjs:</strong> For front-end development</li>
              <li> <strong>Firebase:</strong> For back-end development</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 px-8 mb-16">
          <div>
            <h2 className="text-4xl mb-4 text-gray-400 font-thin">What People Are Saying</h2>
          </div>

          <div className="flex flex-col gap-4">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[300px] lg:min-w-[500px] bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-white/10 flex-shrink-0"
              >
                <p className="text-lg mb-4 italic">“{testimonial.text}”</p>
                <p className="font-light text-cyan-400">– {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}