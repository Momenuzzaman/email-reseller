import React from "react";

const FeatureCard = ({ feature }) => {
  console.log(feature);
  return (
    <div className=" bg-white rounded-lg">
      <div className="card-body text-left">
        <div className="flex ">
          <h2 className=" rounded-full px-2 border-2 border-gray-400 text-2xl">
            {feature?.id}
          </h2>
          <h2 className="card-title pl-3  text-2xl">{feature?.name}</h2>
        </div>
        <p className="text-left mb-5">{feature?.description}</p>
        <div className="">
          <button className="bg-transparent border-none font-semibold hover:text-[#FF4800]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
