import React from "react";

const SendLetters = () => {
  return (
    <section className="send-letters" id="send-letters">
      <div className="send-letters__wrapper bg-[#5D5DFF] container h-[206px] flex items-center justify-evenly">
        <div className="text">
          <h2 className="text-[32px] font-bold text-white">Stay in the loop</h2>
          <p className="text-[#E2E1FF]">
            Join our newsletter to get top news before anyone else.
          </p>
        </div>
        <div className="send-email flex gap-2">
          <input
            type="text"
            placeholder="Your best email…"
            className="placeholder:text-[#ABABFF] outline-0 border border-[#8D8DFF] rounded-[2px] bg-[#4B4ACF] px-4 py-3 w-[320px]"
          />
          <button className="px-[31px] py-3 text-[#5D5DFF] bg-[#F4F4FF]">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SendLetters;
