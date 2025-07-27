import { FaCheck } from "react-icons/fa6";
import React from "react";
import { SOLUTIONS } from "../../static/solution";
import SolutionImg from "../../assets/solution.svg";

const OneProduct = () => {
  return (
    <section className="one-product" id="one-product">
      <div className="one-product__wrapper py-20 border-y border-[#33363A] flex flex-col gap-20 container">
        <div className="content container-sm text-center ">
          <span className="px-3 py-1 bg-[#C6F6D5] text-[#36A269] text-sm font-[600] rounded-[15px]">
            Reach goals that matter
          </span>
          <h2 className="text-white text-[40px] tracking-[-0.25px] font-extrabold my-4">
            One product, unlimited solutions
          </h2>
          <p className="text-[20px] text-[#9BA9B4] tracking-[-0.25px]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit laborum — semper quis lectus nulla.
          </p>
        </div>
        <div className="solution flex items-center gap-16">
          <div className="solution__content w-[45%]">
            <p className="text-[#5D5DFF]">More speed. Less spend</p>
            <h3 className="text-[#D9E3EA] font-medium text-[32px] my-2">
              Keep projects on schedule
            </h3>
            <p className="text-[#9BA9B4]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {SOLUTIONS.map((s) => (
                <div className="flex gap-2 items-center">
                  <FaCheck className="text-[#48BB78] inline" />
                  <span className="text-[18px] text-[#9BA9B4]">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="solution__img">
            <img src={SolutionImg} alt="" />
          </div>
        </div>
        <div className="solution flex items-center gap-16">
          <div className="solution__img">
            <img src={SolutionImg} alt="" />
          </div>
          <div className="solution__content w-[45%]">
            <p className="text-[#5D5DFF]">More speed. Less spend</p>
            <h3 className="text-[#D9E3EA] font-medium text-[32px] my-2">
              Keep projects on schedule
            </h3>
            <p className="text-[#9BA9B4]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {SOLUTIONS.map((s) => (
                <div className="flex gap-2 items-center">
                  <FaCheck className="text-[#48BB78] inline" />
                  <span className="text-[18px] text-[#9BA9B4]">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="solution flex items-center gap-16">
          <div className="solution__content w-[45%]">
            <p className="text-[#5D5DFF]">More speed. Less spend</p>
            <h3 className="text-[#D9E3EA] font-medium text-[32px] my-2">
              Keep projects on schedule
            </h3>
            <p className="text-[#9BA9B4]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {SOLUTIONS.map((s) => (
                <div className="flex gap-2 items-center">
                  <FaCheck className="text-[#48BB78] inline" />
                  <span className="text-[18px] text-[#9BA9B4]">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="solution__img">
            <img src={SolutionImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneProduct;
