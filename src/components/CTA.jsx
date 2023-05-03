import React from "react";
import { cta } from "../assets";

const CTA = () => {
  return (
    <div className="w-full bg-[#e9f8f3] py-24">
      <div className="md:max-w-[1240px] m-auto grid md:grid-cols-2 gap-8  max-w-[500px] items-center">
        <img src={cta} alt="hero image" className="w-[650px] mx-auto" />
        <div>
          <h1 className=" text-4xl font-semibold leading-[50px] py-5">
            Join <span className=" text-primaryGrin">World's largest</span>{" "}
            learning platform today
          </h1>
          <p className=" text-[16px] text-gray-500">
            Lorem ipsum sit amet consectetur adipisicing elit.
          </p>

          <button className=" bg-primaryGrin max-[780px]:w-full   px-8 py-3 rounded-md text-white font-semibold my-5">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
