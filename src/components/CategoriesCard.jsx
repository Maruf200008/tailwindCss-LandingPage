import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const CategoriesCard = ({icons, title}) => {
  return (
    <div className=" categorie-card bg-white p-4 shadow-lg rounded-md flex items-center gap-4 justify-between border border-transparent hover:border-primaryGrin transition hover:cursor-pointer group/edit">
      <div className="flex gap-4 items-center">
        {icons}
        <h1 className="text-[18px] font-semibold">{title}</h1>
      </div>
      <div className=" group-hover/edit:bg-primaryGrin rounded-lg p-3 transition">
        <BsArrowUpRight size={25} className="arrow-icon text-primaryGrin" />
      </div>
    </div>
  );
};

export default CategoriesCard;
