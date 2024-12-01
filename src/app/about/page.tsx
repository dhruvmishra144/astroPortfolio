import Image from 'next/image';
const About = () => {
    return (
        <div className='container mx-auto h-[calc(100vh-188px)] lg:h-[calc(100vh-98px)] flex flex-col items-center pt-8 lg:pt-32 gap-y-8 px-6'>
    <div className='relative flex p-8'>
    <div className='boxes'>
    <div className="box1 absolute"></div>
    <div className="box2 absolute"></div>
    <div className="box3 absolute"></div>
    <div className="box4 absolute"></div>
    </div>
    <Image width={250} height={250} className='w-[150px] transition-all duration-300 avatar z-10 border rounded-full' src={'/avatar.png'} alt={''} />  
    </div>
    
      <div className='flex flex-col items-center gap-4 max-w-[800px]'>
        <h1 className='text-3xl lg:text-5xl text-slate-600 heading-text text-center'>Hi, I'm &nbsp;&nbsp; <span className='heading-text text-sky-300 transition-all duration-300'>Dhruv Mishra</span></h1>
        <p className='text-center px-0 lg:px-8 text-normal'>I believe in the power of user-centric design. We take the time to understand your target audience, their goals, and their pain points. By diving deep into user research and employing industry best practices.</p>

        
      </div>
    </div>
    );
}

export default About;