import React from "react";
import Profile from "../images/profile.png";
import './profile.css'
 
const RightProfile = ({ cart }) => {
  let exerciseTime = 0;
  for (const item of cart) {
    exerciseTime = exerciseTime + item.time;
  }

  const breakTime = (e) => {
    const bt = document.getElementById("bT");
    localStorage.setItem("break", JSON.stringify(e));
    bt.innerText = e;
    return bt;
  };
  let storeTime = localStorage.getItem("break");
  if (storeTime === null) {
    storeTime = "0";
  }
   

  return (
    <div>
      <div className="container right-container  mt-5">
        <div className="personal-info flex ml-5">
          <img className="Logo w-14 h-14 rounded-full mt-2 ml-5" src={Profile} alt="" />

          <div>
            <h3 className="text-2xl ml-5  mt-2 font-bold">Nomayen Hossain</h3>
            <p className="ml-5">Feni, Bangladesh</p>
          </div>
        </div>

        <div className="break profile my-info mt-8 bg-violet-700  ml-2 flex justify-evenly items-center gap-16  md:gap-4 lg:gap-6 h-20 rounded-lg">
          <div className="city">
            <h4 className="font-bold text-lg md:text-md lg:text-2xl">65<small>kg</small></h4>
            <h3 className=" text-sm text-center">Weight</h3>
          </div>
          <div className="profession">
            <h4 className="font-bold text-lg md:text-md lg:text-2xl">
              6.2
            </h4>
            <h3 className=" text-sm text-center">Height</h3>
          </div>
          <div className="collage">
            <h4 className="font-bold text-lg md:text-md lg:text-2xl text-center">20<small>yr</small></h4>
            <h3 className=" text-sm ">Age</h3>
          </div>
        </div>

        <h3 className=" mt-14 text-3xl font-bold ml-5">Add Break</h3>

        <div>
          <div className="break mt-5  bg-violet-600 ml-2 flex justify-center items-center gap-16 md:gap-2 lg:gap-8 h-20 rounded-lg">
            <button
              onClick={() => breakTime(10)}
              className="bg-red-600 px-2 py-2 text-white rounded-full"
            >
              <span>10</span>s
            </button>

            <button
              onClick={() => breakTime(20)}
              className="bg-red-600 px-2 py-2 text-white rounded-full"
            >
              <span>20</span>s
            </button>

            <button
              onClick={() => breakTime(30)}
              className="bg-red-600 px-2 py-2 text-white rounded-full"
            >
              <span>30</span>s
            </button>

            <button
              onClick={() => breakTime(40)}
              className="bg-red-600 px-2 py-2 text-white rounded-full"
            >
              <span>40</span>s
            </button>

            <button
              onClick={() => breakTime(50)}
              className="bg-red-600 px-2 py-2 text-white rounded-full"
            >
              <span>50</span>s
            </button>
          </div>
        </div>

        <h3 className=" mt-14 text-3xl font-bold ml-5">Challange Details</h3>

        <div className="break exercise-time mt-5 ml-5 bg-violet-600 h-16 rounded-lg flex justify-evenly items-center">
          <h3 className="ml-2 font-bold text-md">Challage Time</h3>
          <h5 className="mr-2">
            <span>{exerciseTime}</span>s
          </h5>
        </div>

        <div className="break break-time mt-5 ml-5 bg-violet-600 h-16 rounded-lg flex justify-evenly items-center">
          <h3 className="ml-2 font-bold">Break Time</h3>
          <h5 className="mr-2">
            <span id="bT">{storeTime}</span>s
          </h5>
        </div>

        <div className="flex items-center justify-center">
          <button
             
            className="bg-red-600 text-white px-16 mt-3  py-2"
          >
            <p>Challange Completed</p>
          </button>
        
        </div>
         
      </div>
    </div>
  );
};

export default RightProfile ;