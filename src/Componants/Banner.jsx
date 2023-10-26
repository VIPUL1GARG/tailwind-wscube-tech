import React from 'react';
import Typed from 'react-typed'
const Banner = () => {
    return (
        <div className='w-full bg-[#2699fb] py-[100px]'>
         <div className='max-w-[1240px] my-[100px] mx-auto text-center font-bold'>
         <div className='text-xl md:text-3xl'>learn with us</div>
            <div className='text-white text-3xl md:text-[80px] md:py-8'>Grow with us.</div>
            <div className='text-white text-[20px] md:text-[50px]'>Learn  
            <Typed className='pl-2'
                    strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']}
                    typeSpeed={100}
                    backSpeed={50}
                    backDelay={4000}    // waiting for back
                    loop={true}
                />
                </div>
        <button className='bg-black text-white p-3 rounded mt-4'>Get Started</button>

         </div>

        </div>
    );
}

export default Banner;
