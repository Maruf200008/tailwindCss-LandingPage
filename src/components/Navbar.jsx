import React, { useState } from "react";
import { close, hamburgerMenu, lock, logo } from "../assets";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const handleClick = () => {
    setToogle(!toogle);
  };

  return (
    <div className=" w-full h-[80px] bg-white border-b ">
      <div className=" max-w-[500px] md:max-w-[1240px]  mx-auto w-full h-full flex justify-between items-center">
        <img src={logo} alt="logo" className="h-[25px]" />
        <div className=" hidden md:flex items-center ">
          <ul className="flex gap-4">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className=" hidden md:flex">
          <button className="flex justify-between items-center bg-transparent px-6 gap-2">
            <img src={lock} alt="lock" /> Login
          </button>
          <button className=" bg-primaryGrin px-8 py-3 rounded-md text-white font-semibold">
            Sign Up For Free
          </button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          <img src={toogle ? close : hamburgerMenu} alt="hamburgerMenu" />
        </div>
      </div>
      <div
        className={
          toogle
            ? " absolute z-10 p-4 bg-white w-full px-8 md:hidden"
            : " hidden"
        }
      >
        <ul>
          <li className="p-4 hover:bg-gray-100 transition">Home</li>
          <li className="p-4 hover:bg-gray-100 transition">About</li>
          <li className="p-4 hover:bg-gray-100 transition">Support</li>
          <li className="p-4 hover:bg-gray-100 transition">Platform</li>
          <li className="p-4 hover:bg-gray-100 transition">Pricing</li>
          <div className=" flex flex-col my-4 gap-4">
            <button className="flex justify-center border border-primaryGrin py-4 items-center bg-transparent px-6 gap-2">
              <img src={lock} alt="lock" /> Login
            </button>
            <button className=" bg-primaryGrin px-8 py-5 rounded-md text-white font-semibold">
              Sign Up For Free
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
