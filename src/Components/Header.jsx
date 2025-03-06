import React from "react";
import Devhub from "../assets/Dev-Hub.jpg";

const Header = () => {
  return (
    <div
      className="w-full  md:h-[400px]  h-[45vh]  bg-cover bg-center bg-no-repeat flex md:justify-start justify-center items-center md:pl-[20%]"
      style={{
        backgroundImage: `linear-gradient(to right, rgb(112, 6, 8), rgba(255, 255, 255, 0)), url(${Devhub})`,
      }}
    >
      <div className="flex flex-col justify-center items-center text-white font-bold md:relative ">
        <div className="relative md:w-fit w-[90%] border-4 border-white md:p-2 p-1 rounded-2xl md:text-5xl text-3xl tracking-wider flex items-center justify-center">
          <div className="absolute md:py-[10.5px] py-[5.6px] top-1/2 -translate-y-1/2 animate-arrow-left">
            <span className="text-white md:text-5xl text-3xl ">◂</span>
          </div>
          <p className="px-4">DevHub'25</p>
          <div className="absolute py-2 md:bottom-[33px] bottom-[20px] -translate-y-1/2 animate-arrow-right">
            <span className="text-white md:text-5xl text-3xl">▸</span>
          </div>
        </div>

        <p className="mt-6 md:text-[12px] px-4 md:px-0  text-[15px] tracking-wide md:tracking-widest font-semibold text-center">
          THE DEVHUB'25 EVENT IS UNDER THE WAY!
        </p>
      </div>
    </div>
  );
};

export default Header;
