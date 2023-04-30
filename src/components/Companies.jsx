import React from "react";
import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";

const Companies = () => {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1240px] m-auto  max-w-[500px] md:space-y-4">
        <h1 className=" text-center text-xl md:text-4xl font-bold text-[#536e96]">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className="text-center text-[#536e96] text-[14px] md:text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, neque!
        </p>
        <div className=" md:flex md:justify-center md:gap-8 grid grid-cols-4 md:py-8 py-4 ">
          <img src={companyLogo1} alt="companyLogo1" />
          <img src={companyLogo2} alt="companyLogo2" />
          <img src={companyLogo3} alt="companyLogo3" />
          <img src={companyLogo4} alt="companyLogo4" />
        </div>
      </div>
    </div>
  );
};

export default Companies;
