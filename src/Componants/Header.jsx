import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
    const [toggle,setToggle]=useState(false);
  return (
    <div className="bg-[#2699fb] p-4">
      <div className=" max-w-[1240px] mx-auto py-[12px] flex items-center justify-between">
        <div className="text-3xl font-bold">WsCube Tech</div>
        {
            toggle ?
            <AiOutlineClose className='text-white text-2xl block md:hidden' onClick={()=>setToggle(!toggle)}/>
            :
            <AiOutlineMenu className="text-white text-2xl block md:hidden" onClick={()=>setToggle(!toggle)} />
        }
        
        <ul className="hidden md:flex text-white gap-10">
          <li>Home</li>
          <li>Company</li>
          <li>Resources</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        {/* responsive menu  */}
        <ul className={`duration-300 md:hidden text-white bg-black fixed top-[108px] w-full h-screen
        
        ${toggle ? 'left-0': 'left-[-100%]'}`}>
          <li className="p-2">Home</li>
          <li className="p-2">Company</li>
          <li className="p-2">Resources</li>
          <li className="p-2">About</li>
          <li className="p-2">Contact</li>
        </ul>
        {/* responsive menu  */}
      </div>
    </div>
  );
};

export default Header;
