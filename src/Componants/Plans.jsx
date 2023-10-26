import React from "react";

const Plans = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-[80px] md:grid grid-cols-3 gap-10">
      <div className="shadow-xl text-center py-5  hover:scale-105 duration-500">
        <div className="font-bold text-sm col-span-1">Web Development</div>
        <div className="font-bold  my-3">$149</div>
        <p className="text-[12px]">Lorem ipsum dolor </p>
        <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur</p>
        <p className="text-[12px]">Lorem ipsum dolor sit amet</p>
        <button className="bg-[#6bca45] text-white py-2 px-5 rounded mt-4">
          Start Trial
        </button>
      </div>
      <div className="shadow-xl bg-gray-100  text-center  py-5 hover:scale-105 duration-500">
        <div className="font-bold text-sm col-span-1">Digital Marketing </div>
        <div className="font-bold  my-3">$149</div>
        <p className="text-[12px]">Lorem ipsum dolor </p>
        <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur</p>
        <p className="text-[12px]">Lorem ipsum dolor sit amet</p>
        <button className="bg-black text-[#6bca45] py-2 px-5 rounded mt-4">
          Start Trial
        </button>
      </div>
      <div className="shadow-xl  text-center  py-5 hover:scale-105 duration-500">
        <div className="font-bold text-sm col-span-1">App Development</div>
        <div className="font-bold  my-3">$149</div>
        <p className="text-[12px]">Lorem ipsum dolor </p>
        <p className="text-[12px]">Lorem ipsum dolor sit amet consectetur</p>
        <p className="text-[12px]">Lorem ipsum dolor sit amet</p>
        <button className="bg-[#6bca45] text-white py-2 px-5 rounded mt-4">
          Start Trial
        </button>
      </div>
    </div>
  );
};

export default Plans;
