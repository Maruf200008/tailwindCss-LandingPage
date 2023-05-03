import React from "react";
import Slider from "react-slick";
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6 } from '../assets';
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
          <FeedbackCard image={avatar1} />
          <FeedbackCard image={avatar2} />
          <FeedbackCard image={avatar3} />
          <FeedbackCard image={avatar4} />
          <FeedbackCard image={avatar5} />
          <FeedbackCard image={avatar6} />
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
