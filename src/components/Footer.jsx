import React from "react";
import { BsBehance, BsDribbble, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

import { logo } from "../assets";

const Footer = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1240px] m-auto grid md:grid-cols-5 max-[780px]:grid-col-2  gap-8  max-w-[500px]">
        <div className="  space-y-4 col-span-2">
          <img src={logo} alt="logo" className="h-[25px]" />
          <h3 className="text-2xl font-bold mt-10">Contact Us</h3>
          <h3 className=" text-[#6d737a]">Call: +123 400 123</h3>
          <h3 className=" text-[#6d737a]">
            Lorem ipsum dolor sit amet consectetur adipis
          </h3>
          <h3 className=" ">Email: example@mail.com</h3>
          <div className=" flex gap-4 py-4">
            <div className=" p-4 bg-[#e9f8f3] rounded-md">
              <FaFacebookF size={25} className=" text-primaryGrin" />
            </div>
            <div className=" p-4 bg-[#e9f8f3] rounded-md">
              <BsDribbble size={25} className=" text-primaryGrin" />
            </div>
            <div className=" p-4 bg-[#e9f8f3] rounded-md">
              <FaLinkedinIn size={25} className=" text-primaryGrin" />
            </div>
            <div className=" p-4 bg-[#e9f8f3] rounded-md">
              <BsInstagram size={25} className=" text-primaryGrin" />
            </div>
            <div className=" p-4 bg-[#e9f8f3] rounded-md">
              <BsBehance size={25} className=" text-primaryGrin" />
            </div>
          </div>
        </div>
        <div>
          <h3 className=" text-2xl font-bold">Explore</h3>
          <ul className=" py-6 text-[#6d737a] space-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Course</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className=" text-2xl font-bold">Category</h3>
          <ul className=" py-6 text-[#6d737a] space-y-4">
            <li>Design</li>
            <li>Development</li>
            <li>Marketing</li>
            <li>Business</li>
            <li>Lifestyle</li>
            <li>Photography</li>
            <li>Music</li>
          </ul>
        </div>
        <div className="space-y-4 max-[780px]:col-span-2 ">
          <h3 className=" text-2xl font-bold">Subscribe</h3>
          <h3 className=" text-[#6d737a]">
            Lorem ipsum dolor sit amet consectetur adipis
          </h3>
          <form>
            <input
              type="text"
              className=" bg-[#f2f3f4] p-4 focus:outline-none w-full rounded"
              placeholder="Email here"
            />
            <button className=" bg-primaryGrin max-[780px]:w-full   px-8 py-3 rounded-md text-white font-semibold my-5">
              Subscribe Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
