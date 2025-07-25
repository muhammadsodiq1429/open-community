import HeroImg from "../../../assets/hero.png";

const Hero = () => {
  return (
    <section className="hero mt-20" id="hero">
      <div className="hero_wrapper container text-white flex flex-col items-center">
        <h1 className="font-extrabold text-[52px]">
          Landing template for startups
        </h1>
        <p className="text-[20px] mt-4 mb-8 text-[#9BA9B4]">
          Our landing page template works on all devices, so you only have to
          set it up once, and get beautiful results forever.
        </p>
        <div>
          <button>Start free trial</button>
          <button>Learn more</button>
        </div>
        <img src={HeroImg} alt="" />
      </div>
    </section>
  );
};

export default Hero;
