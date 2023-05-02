import React from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import {
  BsCamera,
  BsClipboard2Data,
  BsFiletypeHtml,
  BsSunset,
  BsVectorPen,
} from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { HiOutlineMusicNote } from "react-icons/hi";
import { MdBusinessCenter, MdOutlineHealthAndSafety } from "react-icons/md";
import { SiHtml5 } from "react-icons/si";
import { TbMicrophone2 } from "react-icons/tb";

import CategoriesCard from "./CategoriesCard";

const Categories = () => {
  return (
    <div className="w-full bg-[#f0fbf7] py-24">
      <div className="md:max-w-[1240px] m-auto max-w-[500px]">
        <h1 className=" text-3xl font-semibold ">
          Most <span className=" text-primaryGrin">Popular Categories</span>
        </h1>
        <p className=" text-lg text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="grid lg:grid-cols-4 grid-cols-2 py-12 gap-4">
          <CategoriesCard icons={<BsVectorPen size={30} />} title="Design" />
          <CategoriesCard
            icons={<BsFiletypeHtml size={30} />}
            title="Development"
          />
          <CategoriesCard
            icons={<TbMicrophone2 size={30} />}
            title="Marketing"
          />
          <CategoriesCard
            icons={<MdBusinessCenter size={30} />}
            title="Business"
          />

          <CategoriesCard icons={<BsSunset size={30} />} title="Lifestyle" />
          <CategoriesCard icons={<BsCamera size={30} />} title="Photography" />
          <CategoriesCard
            icons={<HiOutlineMusicNote size={30} />}
            title="Music"
          />
          <CategoriesCard
            icons={<BsClipboard2Data size={30} />}
            title="Data Science"
          />

          <CategoriesCard
            icons={<SiHtml5 size={30} />}
            title="Personal Development"
          />
          <CategoriesCard
            icons={<MdOutlineHealthAndSafety size={30} />}
            title="Health & Fitness"
          />
          <CategoriesCard
            icons={<BiMoneyWithdraw size={30} />}
            title="Finance"
          />
          <CategoriesCard icons={<GiTeacher size={30} />} title="Teaching" />
        </div>
      </div>
    </div>
  );
};

export default Categories;
