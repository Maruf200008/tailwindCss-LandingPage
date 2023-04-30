import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { heroImg } from "../assets";

const Hero = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1240px] m-auto grid md:grid-cols-2  max-w-[500px]">
        <div className=" md:space-y-4 space-y-2 flex  flex-col justify-start gap-4">
          <p className="uppercase text-2xl text-primaryGrin font-semibold">
            Start to Sucess
          </p>
          <h1 className=" text-5xl font-semibold leading-[55px] md:leading-[72px]">
            Access To <span className=" text-primaryGrin">5000+</span> Courses
            from <span className=" text-primaryGrin">300</span> Instructors &
            Institutions
          </h1>
          <p className=" text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <form className=" max-w-[700px] p-4 border input-box-sadow rounded-lg flex justify-between">
            <input
              type="text"
              className="bg-white focus:outline-none"
              placeholder="What do want to learn?"
            />
            <button>
              <AiOutlineSearch
                size={20}
                className=" icon"
                style={{ color: "#000" }}
              />
            </button>
          </form>
        </div>
        <img
          src={heroImg}
          alt="hero image"
          className=" order-first md:order-last "
        />
      </div>
    </div>
  );
};

export default Hero;
