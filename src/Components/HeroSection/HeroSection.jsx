import React from "react";
import heroImg from "../.../../../assets/Group 568.png";
const HeroSection = () => {
  return (
    <div className="hero min-h-screen bg-black px-2 lg:px-0">
      <div className="max-w-7xl mx-auto grid lg:flex justify-between flex-row-reverse">
        <div className="lg:-mt-[65px]">
          <img src={heroImg} className="" />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-[14px] text-[#FF4800] lg:mb-[24px] mt-5 md:mt-2 lg:0">
            Are you tired of dealing with email service with low quality
            features?
          </h1>
          <p className="text-[30px] md:text-[44px] py-6 text-white lg:mb-[28px] ">
            Would you like a dedicated email service that is free of hassles and
            unwanted extra features or charges?
          </p>
          <p className="text-gray-400 mb-[50px]">
            Email Reseller offers a specialized service that is meant to run
            efficiently and smoothly 24/7 for a very accessible cost!
          </p>
          <button className="bg-[#FF4800] text-[20px] text-white py-[18px] px-[32px] border-none rounded-md mb-3 md:mb-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
