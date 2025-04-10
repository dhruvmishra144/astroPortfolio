import Image from "next/image";

export default function About() {
 
  return (
    <main className='container mx-auto h-auto'>
      <section className='flex flex-col items-center justify-center h-[calc(100vh-250px)] md:h-[calc(100vh-250px)]'>
      <p  className='relative text-4xl lg:text-6xl text-center text-cyan-600 mb-4'>
      I&apos;m absolutely delighted to know 
      </p>
      <p className='relative text-3xl lg:text-5xl text-center text-slate-200 mb-8'>
      that you&apos;re excited to learn more about me!
      </p>
      </section>
     
     <section className='flex flex-col lg:flex-row lg:gap-16 gap-6 px-8 mb-32 xl:items-center'>
      <Image width={1024} height={576} src={"/sample-photo.jpg"} className="w-[100%] lg:w-[50%] lg:rounded-4xl rounded-2xl" alt={""} />
      <div className="flex flex-col gap-6">
      <h1 className="text-3xl lg:text-6xl text-cyan-600">Hey there! <br className="hidden lg:block" />I’m Dhruv Mishra</h1>
        <p className='relative text-left text-slate-200 mb-6 text-xl max-w-[1024] flex-grow'>A Product Designer with decade of experience and  passion for creating intuitive and visually compelling digital experiences. My journey into product design started with a love for problem-solving and an obsession with how people interact with technology. From sketching wireframes to refining pixel-perfect interfaces, I thrive on crafting designs that are both functional and delightful.</p>
        </div>
      </section>
    
      
    </main>
  );
}