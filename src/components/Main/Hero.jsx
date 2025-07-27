import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero mt-20" id="hero">
      <div className="hero_wrapper container text-white flex flex-col items-center">
        <div className="container-sm text-center">
          <h1 className="font-extrabold text-[52px]">
            Landing template for startups
          </h1>
          <p className="text-[20px] mt-4 mb-8 text-[#9BA9B4] tracking-[-0.25px] px-[80px]">
            Our landing page template works on all devices, so you only have to
            set it up once, and get beautiful results forever.
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-8 py-3 bg-[#5D5DFF] rounded-[2px] text-white font-medium">
            Start free trial
          </button>
          <button className="px-8 py-3 bg-[#33363A]  rounded-[2px] text-[#C5D2DC] font-medium">
            Learn more
          </button>
        </div>
        <img src={HeroImg} alt="" className="mt-16 mb-32" />
      </div>
    </section>
  );
};

export default Hero;
