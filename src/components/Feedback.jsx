import React from "react";
import Slider from "react-slick";
import { feedbackSettings } from "../utils/feedbackSettings";
import FeedbackCard from "./FeedbackCard";

const Feedback = () => {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1240px] m-auto  max-w-[500px]">
        <h1 className="text-3xl py-3 font-bold">
          {" "}
          Student <span className=" text-primaryGrin">Feedback</span>{" "}
        </h1>
        <p className="text-[#6d737A] text-sm md:text-lg mb-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt,
          molestias.
        </p>
        <Slider {...feedbackSettings}>
          <FeedbackCard image="https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-6/242562980_869963400557541_563947929337622916_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=EyySBAfnscMAX86rOFM&_nc_ht=scontent.fdac14-1.fna&oh=00_AfBLjhclC4rJM-gwdRvuQwEVVYGVX8Brjkfwv3NcPeQRcA&oe=6456655D" />
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
