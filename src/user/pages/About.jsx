import { useEffect } from "react";
import AOS from "aos";
import tushar from "../../assets/imgs/tushar.png";
import { SiInstagram } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { TbNorthStar } from "react-icons/tb";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import payment from "../../assets/aboutUs/payment.png";
import inventory from "../../assets/aboutUs/inventory.png";
import feedback from "../../assets/aboutUs/feedback.png";

function AboutUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      delay: 100,
      easing: "ease-in-out",
    });
  }, []);

  const theWhyList = [
    {
      id: 1,
      heading: "Reduce wait time",
      icon: <TbNorthStar />,
    },
    {
      id: 2,
      heading: "No paper menus needed",
      icon: <TbNorthStar />,
    },
    {
      id: 3,
      heading: "Easy to update menu items",
      icon: <TbNorthStar />,
    },
    {
      id: 4,
      heading: "Better customer experience",
      icon: <TbNorthStar />,
    },
    {
      id: 5,
      heading: "Customizable Menu Display",
      icon: <TbNorthStar />,
    },
    {
      id: 6,
      heading: "Real-time availability tracking",
      icon: <TbNorthStar />,
    },
  ];

  const futurePlans = [
    {
      id: 1,
      heading: "Payments Integration",
      description:
        "It will allow customers to pay directly through the digital menu—support for UPI, cards, and wallets.",
      img: payment,
    },
    {
      id: 2,
      heading: "Inventory Management",
      description:
        "Track stock levels and get low-stock alerts so you never run out of popular items.",
      img: inventory,
    },
    {
      id: 3,
      heading: "Customer Feedback System",
      description:
        "Quick review/rating system after ordering to gather real-time feedback.",
      img: feedback,
    },
  ];

  return (
    <section className="p-10 pt-20" aria-labelledby="about-heading">
      <header>
        <h1
          id="about-heading"
          className="text-blackBg sm:text-7xl text-4xl text-center font-semibold"
        >
          About Us
        </h1>
        <p className="text-gray-600 text-center mt-4 max-w-3xl mx-auto text-xl">
          We are from Surat, India. Passionate about simplifying digital menu
          experiences for restaurants, cafés, and food businesses. Our platform
          empowers you to create dynamic, QR-based menus that are easy to manage
          and delightful to use.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center items-center gap-8 py-14">
        <div data-aos="fade-left ">
          <h2 className="text-4xl font-bold mb-4 text-blackBg">Meet Founder</h2>
          <p className="max-w-md text-xl">
            Hey, I’m Tushar Soni — a web developer and the person behind this
            digital food ordering platform. I built this with a simple goal in
            mind: to make ordering food at restaurants quicker, easier, and more
            modern using QR codes. As someone who loves building things that
            solve everyday problems, this project is close to my heart. It's all
            about helping restaurants run smoother and giving customers a better
            experience.
          </p>

          <div className="mt-5">
            <ul className="flex gap-4 text-2xl text-blackBg">
              <li className="border-red max-w-xl bg-red-100  px-6 py-2 rounded-lg">
                <Link to={"https://www.instagram.com/tushar_28.7/"}>
                  <SiInstagram />
                </Link>
              </li>
              <li className="border-red max-w-xl bg-red-100  px-6 py-2 rounded-lg">
                <Link to={"https://x.com/ts28_7"}>
                  <RiTwitterXFill />
                </Link>
              </li>
              <li className="border-red max-w-xl bg-red-100  px-6 py-2 rounded-lg">
                <Link to={"https://www.linkedin.com/in/tushar-soni-b0426022b/"}>
                  <FaLinkedinIn />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-blackBg  rounded-xl pt-10">
          <img className="sm:max-w-lg" src={tushar} alt="tushar" />
        </div>
      </div>

      <div>
        <h1 className="text-center sm:text-6xl text-4xl font-semibold text-blackBg">
          Why it Matters
        </h1>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center text-blackBg mt-10 px-14 bg-whiteBg rounded-2xl py-24">
        {theWhyList.map((why) => (
          <div
            key={why.id}
            className="flex items-center gap-4 w-full max-w-lg p-4"
          >
            <span className="text-xl">{why.icon}</span>
            <h2 data-aos="fade-up" className="text-2xl font-semibold ">
              {why.heading}
            </h2>
          </div>
        ))}
      </div>

      <div>
        <h1 className="sm:text-6xl text-4xl text-center text-blackBg mt-10 font-semibold">
          Future Updates
        </h1>
      </div>

      <div className="grid sm:grid-cols-3 grid-cols-1 gap-6 place-items-center text-blackBg mt-10 px-14">
        {futurePlans.map((plan) => (
          <div key={plan.id}>
          <img className="object-cover  max-w-sm" src={plan.img} alt="payment" />
          <h1 className="text-3xl text-center mt-5 font-semibold">{plan.heading}</h1>
          <p className="max-w-sm font-bold mt-5">{plan.description}</p>
        </div>
        ))}

      </div>
    </section>
  );
}

export default AboutUs;
