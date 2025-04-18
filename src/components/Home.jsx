import React from "react";
import { images } from "../constants/images";

const Home = () => {
  return (
    <div className="flex flex-col flex-1 ">
      <div className="flex flex-col text-4xl text-gray-600  items-center justify-center">
        <p>icon here</p>
        <p className="text-sm">
          <span className="font-bold text-6xl">
            <span className="font-light text-lg">Welcome to </span>EveryDay
            BlackFriday
          </span>
        </p>
      </div>

      {/* <div className="flex flex-1 flex-col bg-red-400"> */}
      <div className="p-2 ">
        <div className="flex p-2 items-center">
          <span className=" m-4 text-amber-300 text-3xl font-bold border-b-2  p-2">
            People's Choices
          </span>
          <img src={images.award} width={50} height={40} />
        </div>
        <div className="flex p-2">card component here</div>
      </div>
    </div>
  );
};

export default Home;
