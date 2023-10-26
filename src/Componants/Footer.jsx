import {AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter} from "react-icons/ai";
import {LiaGithubSquare} from "react-icons/lia";

import React from 'react';

const Footer = () => {
    return (
        <div className='w-full bg-[#2699fb] py-[50px]'>
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-5'>
                <div className='col-span-2 text-center md:text-left md:w-[80%]'>
                    <div className='font-bold text-[30px] md:text-left '>WsCube Tech.</div>
                    <p className='text-white text-sm my-2  md:text-left'>Lorem ipsum dolor sit amet consectetur a adipisicing Deserunt omnis aaa praesentium iure accusantium commodi? Officiis suscipit, repudiandae necessitatibus dolor accusamus deley nulla ut consectetur, minus sapiente, hic error nesciunt!</p>
                  <div className='flex justify-center md:justify-normal gap-10 mt-3 mb-5 text-center md:text-left'>
                  <AiOutlineFacebook className="text-white text-3xl"/>
                  <AiOutlineInstagram className="text-white text-3xl"/>
                    <AiOutlineTwitter className="text-white text-3xl"/>
                    <LiaGithubSquare className="text-white text-3xl"/>
                  </div>
                </div>
               <div className="flex justify-around md:justify-between col-span-2">
               <div className='col-span-1'>
                    <div>Solutions</div>
                       <div className='text-white text-[16px]'>
                       <div className='my-1'>Analytics</div>
                        <div className='my-1'>Marketing</div>
                        <div className='my-1'>Commerce</div>
                        <div className='my-1'>Insights</div>
                       </div>
                </div>
                <div className='col-span-1'>
                <div>Support</div>
                       <div className='text-white text-[16px]'>
                       <div className='my-1'>Pricing</div>
                        <div className='my-1'>Documentation</div>
                        <div className='my-1'>Guides</div>
                        <div className='my-1'>API Status</div>
                       </div>
                </div >
                <div className='col-span-1'>
                <div>Company</div>
                       <div className='text-white text-[16px]'>
                       <div className='my-1'>About</div>
                        <div className='my-1'>Blogs</div>
                        <div className='my-1'>Jobs</div>
                        <div className='my-1'>Press</div>
                        <div className='my-1'>Careers</div>
                       </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Footer;
