import React from "react";
import { FiVideo } from "react-icons/fi";
import { SlGraduation, SlPeople } from "react-icons/sl";

import { achievement } from "../assets";

const Achievement = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1240px] m-auto grid md:grid-cols-2  max-w-[500px]">
        <div className="  flex  flex-col justify-start gap-4">
          <h1 className=" text-3xl font-semibold ">
            Our <span className=" text-primaryGrin">Achivements</span>
          </h1>
          <p className=" text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className=" grid grid-cols-2 py-16">
            <div className="py-6 flex">
              <div className="p-4 bg-[#e0fdf4] rounded-xl">
                <SlGraduation size={30} className=" text-primaryGrin" />
              </div>
              <div className=" px-3">
                <h1 className="text-2xl font-semibold">300</h1>
                <p className=" text-[#60737A]">Instructor</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#fffaf5] rounded-xl">
                <FiVideo size={30} className=" text-[#ffc27a]" />
              </div>
              <div className=" px-3">
                <h1 className="text-2xl font-semibold">10,000+</h1>
                <p className=" text-[#60737A]">Video</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#ffeef0] rounded-xl">
                <SlGraduation size={30} className=" text-[#ed4459]" />
              </div>
              <div className=" px-3">
                <h1 className="text-2xl font-semibold">20,000+</h1>
                <p className=" text-[#60737A]">Student</p>
              </div>
            </div>
            <div className="py-6 flex">
              <div className="p-4 bg-[#f0f7ff] rounded-xl">
                <SlPeople size={30} className=" text-[#0075fd]" />
              </div>
              <div className=" px-3">
                <h1 className="text-2xl font-semibold">1,00,000+</h1>
                <p className=" text-[#60737A]">User's</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" order-first md:order-last">
          <img src={achievement} alt="hero image" className="m-auto" />
        </div>
      </div>
    </div>
  );
};

export default Achievement;
