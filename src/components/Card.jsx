import React from "react";
import StartRating from "./StartRating";
const Card = ({ course }) => {
  console.log(course);
  const { category, linkImg, price, rating, title } = course;
  return (
  <div className="p-3">
    <div className=" bg-white drop-shadow-md overflow-hidden rounded-2xl  mr-2 my-4">
      <img src={linkImg} alt="blogImg1" className=" h-40 w-full object-cover" />
      <div className="p-5 border border-b">
        <h1 className=" py-2 truncate">{title}</h1>
        <StartRating rating={rating} />
      </div>
      <h3 className=" p-5 text-xl">{price}</h3>
      <div className=" absolute top-0 bg-white bg-opacity-60 m-3 px-2 py-[2.5px] rounded">
        {category}
      </div>
    </div>
  </div>
  );
};

export default Card;
