import React from "react";
import { AiFillStar } from "react-icons/ai";

const StartRating = () => {
  return (
    <div className="flex  items-center">
      <AiFillStar className=" text-yellow-400" />
      <AiFillStar className=" text-yellow-400" />
      <AiFillStar className=" text-yellow-400" />
      <AiFillStar className=" text-yellow-400" />
      <AiFillStar className=" text-gray-400" />
      <p className=" ml-2">(15)</p>
    </div>
  );
};

export default StartRating;
