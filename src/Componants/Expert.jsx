import React from 'react';
import laptop from '../assets/images/laptop.jpg'
const Expert = () => {
    return (
        <div className='max-w-[1240px] p-3 mx-auto md:grid grid-cols-2 my-[150px] '>
        <div className='col-span-1'>
            <img src={laptop} alt=""  className='md:w-[350px]'/>
        </div>
        <div className='col-span-1 '>
        <h1 className='text-[#00df9a] mt-4 md:mt-0'>LEARN FROM EXPERTS</h1>
        <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis recusandae est iste voluptatem quia omnis natus laudantium reiciendis officiis, voluptates error qui impedit temporibus. Aliquid placeat commodi soluta laborum rerum!</p>
        <button className='bg-black text-white p-3 rounded'>Get Started</button>
        </div>
  
        </div>
    );
}

export default Expert;
