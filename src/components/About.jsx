import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0A192F] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Hi. I'm Soham, nice to meet you. Please take a look around.
                    </p>
                </div>
                <div>
                   <p>I am a passionate software developer with experience in creating web applications using various programming languages such as Python, Java, and JavaScript. I am dedicated to developing efficient, high-quality code that meets client needs and exceeds their expectations. I am a self-motivated individual with excellent problem-solving skills and a strong attention to detail.</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About