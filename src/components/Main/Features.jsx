import StarImg from "../../assets/star.svg";

const Features = () => {
  return (
    <section className="features" id="features">
      <div className="features__wrapper container mb-20">
        <div className="container-sm text-center">
          <h2 className="text-white text-[40px] tracking-[-0.25px] font-extrabold">
            The majority our customers do not understand their workflows.
          </h2>
          <p className="text-[20px] text-[#9BA9B4] tracking-[-0.25px] mt-11 mb-13">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="cards grid grid-cols-3 text-center gap-16">
          <div className="card">
            <div className="size-[64px] bg-[#5D5DFF] grid place-items-center rounded-[50%] mx-auto">
              <img src={StarImg} alt="" />
            </div>
            <h4 className="font-bold text-2xl text-white mt-4 mb-2">
              Instant Features
            </h4>
            <p className="text-[18px] text-[#9BA9B4]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="card">
            <div className="size-[64px] bg-[#5D5DFF] grid place-items-center rounded-[50%] mx-auto">
              <img src={StarImg} alt="" />
            </div>
            <h4 className="font-bold text-2xl text-white mt-4 mb-2">
              Instant Features
            </h4>
            <p className="text-[18px] text-[#9BA9B4]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="card">
            <div className="size-[64px] bg-[#5D5DFF] grid place-items-center rounded-[50%] mx-auto">
              <img src={StarImg} alt="" />
            </div>
            <h4 className="font-bold text-2xl text-white mt-4 mb-2">
              Instant Features
            </h4>
            <p className="text-[18px] text-[#9BA9B4]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="card">
            <div className="size-[64px] bg-[#5D5DFF] grid place-items-center rounded-[50%] mx-auto">
              <img src={StarImg} alt="" />
            </div>
            <h4 className="font-bold text-2xl text-white mt-4 mb-2">
              Instant Features
            </h4>
            <p className="text-[18px] text-[#9BA9B4]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="card">
            <div className="size-[64px] bg-[#5D5DFF] grid place-items-center rounded-[50%] mx-auto">
              <img src={StarImg} alt="" />
            </div>
            <h4 className="font-bold text-2xl text-white mt-4 mb-2">
              Instant Features
            </h4>
            <p className="text-[18px] text-[#9BA9B4]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
          <div className="card">
            <div className="size-[64px] bg-[#5D5DFF] grid place-items-center rounded-[50%] mx-auto">
              <img src={StarImg} alt="" />
            </div>
            <h4 className="font-bold text-2xl text-white mt-4 mb-2">
              Instant Features
            </h4>
            <p className="text-[18px] text-[#9BA9B4]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
