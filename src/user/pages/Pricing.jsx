import { IoArrowForwardCircleOutline } from "react-icons/io5";
import pic from "../../assets/imgs/pic.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TbCalendarMonth, TbCalendarMonthFilled } from "react-icons/tb";
import { FaRegCircleCheck } from "react-icons/fa6";

function Pricing() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  const features = [
    { id: 1, heading: "Unlimited QR scans" },
    { id: 2, heading: "Smart Dashboard" },
    { id: 3, heading: "Advanced Menu Features" },
    { id: 4, heading: "Access to future features" },
  ];

  return (
    <section className="p-10 pt-20" aria-labelledby="pricing-heading">
      <header>
        <h1
          id="pricing-heading"
          className="text-blackBg sm:text-6xl text-4xl text-center font-semibold"
        >
          Transparent Pricing For You
        </h1>
      </header>

      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center py-10 gap-8">
        {/* Monthly Card */}
        <article
          className="bg-whiteBg text-blackBg rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col justify-between sm:h-[35rem]"
          aria-label="Monthly Pricing Plan"
        >
          <div>
            <header className="flex items-center justify-center gap-3 text-2xl font-bold">
              <TbCalendarMonthFilled />
              <h2>Monthly</h2>
            </header>
            <div className="text-6xl font-extrabold text-center py-4">
              ₹199/-
            </div>
            <div className="border-b border-dashed pb-4">
              <p className="text-gray-500 text-lg">What You'll Get...</p>
              <ul>
                {features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-center gap-2 text-lg py-1"
                  >
                    <FaRegCircleCheck />
                    <span>{feature.heading}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <button 
          onClick={() => window.open('https://tusharsoni5.gumroad.com/l/duurx?wanted=true')}
          className="mt-5 bg-blackBg text-whiteBg px-4 py-2 rounded-xl font-semibold hover:bg-gray-900 transition">
            Subscribe Now
          </button>
        </article>

        {/* Yearly Card */}
        <article
          className="bg-whiteBg text-blackBg rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col justify-between sm:h-[35rem]"
          aria-label="Yearly Pricing Plan"
        >
          <div>
            <header className="flex items-center justify-center gap-3 text-2xl font-bold">
              <TbCalendarMonth />
              <h2>Yearly</h2>
            </header>
            <div className="text-6xl font-extrabold text-center py-4">
              ₹499/-
            </div>
            <div className="border-b border-dashed pb-4">
              <p className="text-gray-500 text-lg">What You'll Get...</p>
              <ul>
                {features.map((feature) => (
                  <li
                    key={feature.id}
                    className="flex items-center gap-2 text-lg py-1"
                  >
                    <FaRegCircleCheck />
                    <span>{feature.heading}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button 
          onClick={() => window.open('https://tusharsoni5.gumroad.com/l/zriob?wanted=true')}
          className="mt-5 bg-blackBg text-whiteBg px-4 py-2 rounded-xl font-semibold hover:bg-gray-900 transition">
            Subscribe Now
          </button>
        </article>
      </div>
    </section>
  );
}

export default Pricing;
