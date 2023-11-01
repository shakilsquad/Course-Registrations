import { useState } from "react";
import c1 from "../public/Rectangle 2 (1).png";
import c2 from "../public/Rectangle 2 (2).png";
import c3 from "../public/Rectangle 2 (3).png";
import c4 from "../public/Rectangle 2 (4).png";
import c5 from "../public/Rectangle 2 (5).png";
import c6 from "../public/Rectangle 2 (6).png";
import c7 from "../public/Rectangle 2.png";
import c8 from "../public/Rectangle 3 (1).png";
import c9 from "../public/Rectangle 3.png";
import CourseCart from "./component/CourseCart/CourseCart";
function App() {
  const data = [
    {
      id: 1,
      name: "Introduction to C Programming",
      img: c1,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 1500,
      time: 1,
    },
    {
      id: 2,
      name: "Introduction to Algorithms",
      img: c2,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 2500,
      time: 13,
    },
    {
      id: 3,
      name: "Introduction to C++ for DSA",
      img: c3,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 1700,
      time: 10,
    },
    {
      id: 4,
      name: "Basic Data Structures",
      img: c4,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 1900,
      time: 5,
    },
    {
      id: 5,
      name: "Introduction to OOP Python",
      img: c5,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 1500,
      time: 1,
    },
    {
      id: 6,
      name: "Software Engineering",
      img: c6,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 1000,
      time: 4,
    },
    {
      id: 7,
      name: "AWS, Cloud Computing",
      img: c7,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 2300,
      time: 13,
    },
    {
      id: 8,
      name: "Database (MySQL)",
      img: c8,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 5500,
      time: 7,
    },
    {
      id: 9,
      name: "Problem-Solving Part",
      img: c9,
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      price: 4300,
      time: 8,
    },
  ];

  const [addCourse, setAddCourse] = useState([]);
  let totalPrice = 0;
  let creditTime = 0;

  const addProduct = (data) => {
    const sameProduct = addCourse.find((itm) => itm.id === data.id);
    if (sameProduct) {
      alert("this product has already been added");
      return;
    }

    if (creditTime + data.time >= 20) {
      alert("credit time can't use 20 up!!!");
      return;
    }

    setAddCourse([...addCourse, data]);
    totalPrice += data.price;
    creditTime += data.time;
  };

  addCourse.forEach((itm) => {
    totalPrice += itm.price;
  });

  addCourse.forEach((itm) => {
    creditTime += itm.time;
  });

  return (
    <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-14">
      <div className=" ">
        <h1 className="font-bold text-[32px] text-center">
          Course Registrations
        </h1>
        {/* all course */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          <div className="col-span-3 grid grid-cols-3 gap-4">
            {data.map((itm) => (
              <CourseCart addProduct={addProduct} itm={itm} key={itm.id} />
            ))}
          </div>
          <div className="">
            <div className="bg-[white] p-5 rounded-lg">
              <h2 className="text-[#2F80ED] text-lg rmn font-semibold pb-4 border-b">
                Credit Hour Remaining {creditTime - 20} hr
              </h2>
              <h2 className="text-[#1C1B1B] text-xl py-4 font-bold ">
                Course Name
              </h2>

              <ol className="border-b pb-6">
                {addCourse.map((itm, index) => (
                  <li key={index} className="text-[#9b9b9b] mt-3">
                    {itm?.name}
                  </li>
                ))}
              </ol>

              <h4 className="border-b pb-3 mt-3 text-lg font-semibold text-[#1C1B1BCC]">
                Total Credit Hour : {creditTime}
              </h4>
              <h4 className="border-b pb-4 mt-3 text-lg font-bold text-[#1C1B1BCC]">
                Total Price : {totalPrice} USD
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
