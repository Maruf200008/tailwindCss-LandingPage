import React from "react";
import { quotationMark } from "../assets";

const FeedbackCard = ({image}) => {
  return (
    <div className="p-8">
      <div className=" bg-white p-8 shadow-lg mr-5 rounded-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <img src={image} alt="avatar" className=" w-[60px] rounded-full ring-2 ring-primaryGrin" />
            <div>
              <h1>Jenny Wilson</h1>
              <p>UI-UX Designer</p>
            </div>
          </div>
          <img src={quotationMark} alt="quotationMark" className=" h-8" />
        </div>
        <div className=" text-[#6d737A]">
          <p className=" text-justify py-8 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem,
            officiis. Unde sint deserunt quisquam excepturi, aliquid accusamus
            sunt hic quaerat incidunt.
          </p>
          <p className=" mb-3">
            {" "}
            Maiores voluptatibus reprehenderit quidem nulla illum obcaecati cum!
            Ullam aperiam rem earum!
          </p>

          <p>
            {" "}
            Officiis iusto odio voluptas delectus vel obcaecati aut eveniet.
            Provident quaerat, enim praesentium voluptate reiciendis rem
            exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
