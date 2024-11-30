import Image from 'next/image';

export default function Home() {
  return (
    <div className='container mx-auto h-[calc(100vh-188px)] lg:h-[calc(100vh-98px)] flex flex-col items-center pt-8 lg:pt-32 gap-y-8 px-6'>
     <Image width={250} height={250} className='w-[150px] lg:w-[200px]' src={'/avatar.png'} alt={''}/>
      <h1 className='text-2xl lg:text-5xl text-zinc-600 heading-text text-center'>Hi, I'm &nbsp;&nbsp; <span className='heading-text text-sky-300 transition-all duration-300'>Dhruv Mishra</span></h1>
      <p className=''>Bringing Ideas to Digital Reality</p>
    </div>
  );
}
