import { useNavigate } from "react-router-dom";
import heroImg from "../../assets/homeImgs/hero.png";
import Contact from "./Contact";
import SplitText from "./SpliText";
import { IoIosArrowDropright } from "react-icons/io";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <div className="sm:flex items-center sm:justify-evenly grid grid-cols-1 gap-10 text-blackBg">
      <div>
        <div className="sm:max-w-xl mt-10">
          <SplitText
            text="Turn Tables Faster with Order Ease"
            className="sm:text-6xl text-4xl font-bold text-center"
            delay={40}
            animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
            animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
        </div>
        <div className="border cursor-pointer transition-all hover:bg-[#5be1a5] max-w-xs w-[14rem] rounded-xl text-center bg-[#d6f7e7] py-2 px-2 text-xl font-semibold flex gap-2 items-center mt-10">
          <button onClick={() => navigate('/pricing')} className="text-center">
            Check Our Pricing
          </button>
          <IoIosArrowDropright className="text-md" />
        </div>
      </div>
      <div className="max-w-xl">
        <img src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
}

export default HeroSection;
