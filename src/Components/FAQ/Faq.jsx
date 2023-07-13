import React from "react";
import faqImg from "../../../src/assets/Rectangle 241faq.png";
const Faq = () => {
  const askData = [
    {
      id: 1,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 2,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 3,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 4,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
    {
      id: 5,
      title: "What’s a Workspace?",
      description:
        "If that is the case, you are going to find the services provided by Email Reseller to be optimal for your needs. When the goal is to setup a functional email with a company that is 100% focused on the maintenance and performance of their email services, you can’t go wrong with Email Reseller.",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto mt-[120px] flex flex-col md:flex-row px-3 lg:px-0">
      <div className="md:w-1/2 mx-auto space-y-4">
        <p
          style={{
            backgroundColor: "rgba(255, 72, 0, 0.03)",
            border: " 1px solid rgba(255, 72, 0, 0.07)",
          }}
          className="w-[100px] text-center text-[#FF4800] uppercase font-semibold py-3 px-[6px] rounded-full"
        >
          FAQ
        </p>
        <h3 className="text-[32px] mb-[50px] font-bold">
          Frequently Asked Questions
        </h3>
        {askData.map((data) => (
          <div key={data.id} className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              {data?.title}
            </div>
            <div className="collapse-content">
              <p>{data?.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:w-1/2 mx-auto md:ml-[100px]">
        <div className="">
          <p className="pb-[50px]">
            We're here to help with any questions you have about plans, pricing,
            and supported features.
          </p>
          <div className=" md:bg-gray-100 rounded-tl-lg">
            <div className="ml-[10px]">
              <img src={faqImg} className="w-full md:h-[550px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
