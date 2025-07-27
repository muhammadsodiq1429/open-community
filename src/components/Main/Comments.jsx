import React from "react";
import HumanImg from "../../assets/human.svg";
import { FaQuoteLeft } from "react-icons/fa";

const Comments = () => {
  const repatCard = (times) => {
    let cards = [];
    for (let index = 0; index < times; index++) {
      cards.push(
        <div className="card bg-[#25282C] p-6">
          <div className="author relative">
            <img src={HumanImg} alt="" />
            <FaQuoteLeft className="content-[''] absolute top-0 left-[13%] text-[#5D5DFF]" />
          </div>
          <p className="mt-4 pb-6 border-b border-[#33363A] text-[#9BA9B4] text-[18px]">
            — Open PRO lets me quickly get the insights I care about so that I
            can focus on my productive work. I've had Open PRO for about 24
            hours now and I honestly don't know how I functioned without it
            before.
          </p>
          <div className="mt-5">
            <span className="text-[#D9E3EA] font-medium">Anastasia Dan</span>
            <span className="text-[#33363A]"> / </span>
            <span className="text-[#5D5DFF] font-medium">UX Board</span>
          </div>
        </div>
      );
    }
    return cards;
  };

  return (
    <section className="comments" id="somments">
      <div className="comments__wrapper container my-20">
        <h2 className="text-[#D9E3EA] text-[50px] font-extrabold text-center">
          Don't take our word for it
        </h2>
        <p className="text-[20px] text-[#9BA9B4] container-sm mb-20 text-center">
          Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper
          quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
        </p>
        <div className="wrapper flex gap-6">{repatCard(3)}</div>
      </div>
    </section>
  );
};

export default Comments;
