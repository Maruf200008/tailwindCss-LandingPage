import React from "react";
import Slider from "react-slick";
import { courses } from "../data/Courses";
import { corsesSetting } from "../utils/corsesSettings";
import Card from "./Card";

const Courses = () => {
  return (
    <div className="w-full bg-[#e7fff7] py-24">
      <div className="md:max-w-[1240px] m-auto  max-w-[500px]">
        <h1 className="text-3xl py-3 font-bold"> Most Popular <span className=" text-primaryGrin">Courses</span> </h1>
        <p className="text-[#6d737A] text-sm md:text-lg mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, molestias.</p>
        <Slider {...corsesSetting}>
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Courses;
