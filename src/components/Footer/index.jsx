import Logo from "../../assets/Logo.svg";
import { COLLECTIONS } from "../../static/collections";
import { SOCIAL_MEDIAS } from "../../static/socila-medias";

const Footer = () => (
  <section className="footer" id="footer">
    <div className="footer__wrapper container my-20">
      <div className="foooter__wrapper__collection flex gap-20 justify-between mb-12">
        <div className="about-company w-[32%]">
          <div className="logoo">
            <img src={Logo} alt="" />
          </div>
          <p className="text-[#9BA9B4]">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        {COLLECTIONS.map((c) => {
          return (
            <ul className="flex flex-col gap-[4px]">
              {c.map((li) => (
                <li className="li text-sm text-[#9BA9B4]">{li}</li>
              ))}
            </ul>
          );
        })}
      </div>
      <div className="flex justify-between">
        <p className="text-[#9BA9B4]">
          Made by <span className="text-[#D9E3EA]">Cruip.</span> All right
          reserved
        </p>
        <div className="social-medias flex gap-4">
          {SOCIAL_MEDIAS.map((s) => (
            <div className="img w-8 h-8 bg-[#25282C] rounded-[50%] grid place-items-center">
              <img src={s} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
