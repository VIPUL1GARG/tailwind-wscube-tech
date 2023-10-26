import React from "react";

const NewsLetter = () => {
  return (
    <div className="bg-[#2699fb] p-4">
      <div className="max-w-[1240px] mx-auto md:flex justify-between py-[40px] ">
        <div className="text-white">
            <h1 className="font-bold text-[25px] md:text-[40px]">Want to learn latest I.T skills?</h1>
            <p>Sign up our newsletter and stay up to date.</p>
        </div>
        <div>
            <input type="email" name="" id="" className="p-2 mr-2 text-slate-600 outline-none rounded" placeholder="Email" />
            <button className='bg-black text-white p-2 rounded'>Notify Me</button>
        <p className="text-white mt-1">We care bout the protection of your data,Read our <br /> <span className="text-black"> PrivacyPolicy.</span> </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
