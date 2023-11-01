import React from "react";
import { FiBookOpen } from "react-icons/fi";

const CourseCart = ({ itm, addProduct }) => {
  const { id, name, img, description, price, time } = itm;
  return (
    <div className="bg-white p-4 rounded-lg">
      <img className="w-full" src={img} alt="" />
      <div className="">
        <h3 className="mt-3 text-[#1C1B1B] font-semibold text-lg">{name}</h3>
        <p className="mt-2 text-[#848484] text-sm">{description}</p>
        <div className="flex justify-between mt-3 text-lg items-center gap-2">
          <h5>Price : ${price}</h5>
          <h5 className="flex items-center gap-2">
            <FiBookOpen />{" "}
            <span className="text-[gray]">Credit : {time}hr</span>
          </h5>
        </div>

        <button
          onClick={() => addProduct(itm)}
          className="text-white bg-[#2F80ED] px-2 py-2 rounded-lg w-full mt-6"
        >
          Select
        </button>
      </div>
    </div>
  );
};

export default CourseCart;
