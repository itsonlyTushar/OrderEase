import HeroSection from "../components/HeroSection";
import scan from "../../assets/homeImgs/scan.png";
import orders from "../../assets/homeImgs/orders.png";
import kitchen from "../../assets/homeImgs/kitchen.png";
import { PiHamburgerLight } from "react-icons/pi";
import laptop from "../../assets/homeImgs/laptop.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCallback, useEffect } from "react";
import Faq from "../components/Faq";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const checkAuth = useCallback(async () => {
    try {
      const persistData = localStorage.getItem("persist:root");

      if (persistData) {
        const parsedPersist = JSON.parse(persistData);

        const authString = parsedPersist.auth;

        if (authString) {
          const parsedAuth = JSON.parse(authString);

          if (
            parsedAuth.isAuthenticated === true &&
            parsedAuth.user !== null &&
            parsedAuth.loading !== true
          ) {
            navigate("/dashboard", { replace: true });
          }
        }
      }
    } catch (err) {
      console.error("Auth check error:", err.message);
      console.error("Full error:", err);
    }
  }, [navigate]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 120,
      delay: 100,
      easing: "ease-in-out",
    });

    const timer = setTimeout(() => {
      checkAuth();
    }, 100);

    return () => clearTimeout(timer);
  }, [checkAuth]);

  const features = [
    {
      id: 1,
      img: scan,
      heading: "Contactless Menu",
      description:
        "View your live menu, and place orders from customers phone no app downloads needed.",
    },
    {
      id: 2,
      img: orders,
      heading: "Lightning Fast Orders",
      description:
        "No more waiting for the waiter. Orders go directly to the kitchen faster service, happier customers.",
    },
    {
      id: 3,
      img: kitchen,
      heading: "Real Time Kitchen Orders",
      description:
        "As soon as an order is placed, it pops up instantly on the kitchen display or staff dashboard.",
    },
  ];

  const servicesList = [
    {
      id: 1,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading:
        "An access to your menu by the link for social networks, your website or google maps",
    },
    {
      id: 2,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading:
        "An access to your menu by QR code (for placement on tables, windows, showcases, doors etc.)",
    },
    {
      id: 3,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading: "QR code menu with unlimited amount of categories and items",
    },
    {
      id: 4,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading: "Both a mobile and a desktop version of the menu",
    },
    {
      id: 5,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading: "Unlimited amount of viewings for your menu",
    },
    {
      id: 6,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading: "An ability to remotely edit your menu",
    },
    {
      id: 7,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading: "QR code generator for your menu",
    },
    {
      id: 8,
      icon: <PiHamburgerLight className="text-3xl text-blackBg mt-1" />,
      heading: "Unlimited number of QR code scans",
    },
  ];

  return (
    <>
      <main className="p-10">
        <HeroSection />
      </main>

      {/* Features section  */}
      <section className="bg-whiteBg rounded-xl mx-4 py-16">
        <div className="flex justify-center py-26 text-blackBg">
          <h1 className="sm:text-6xl text-4xl font-semibold mt-5">Why Us</h1>
        </div>

        <div className="grid sm:grid-cols-3 grid-cols-1 gap-8 place-items-center text-blackBg mt-10 px-4">
          {features.map((item) => (
            <div
              key={item.id}
              className="rounded-lg max-w-xs flex flex-col items-center text-center"
            >
              <img
                className="w-full h-48 object-cover rounded-md mb-4"
                src={item.img}
                alt={item.heading}
              />
              <h3 className="text-2xl font-semibold mb-2">{item.heading}</h3>
              <p className="text-sm text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center text-center py-10 text-blackBg">
          <h1 className="sm:text-6xl text-4xl py-6 font-semibold">
            QR code menu service includes
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 place-items-center text-blackBg mt-10 px-4">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="flex items-center gap-4 w-full max-w-lg p-4"
            >
              <span>{service.icon}</span>
              <h2 className="text-lg font-medium break-words">
                {service.heading}
              </h2>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-whiteBg mx-4 rounded-xl mt-14 py-16 grid sm:grid-cols-2 grid-cols-1 text-blackBg place-items-center ">
        <div data-aos="fade-right">
          <img className="sm:max-w-4xl" src={laptop} alt="laptop" />
        </div>

        <div className="max-w-md">
          <h2 className="sm:text-6xl text-4xl font-semibold sm:text-start text-center">
            Smart Dashboard
          </h2>
          <p className="mt-5 text-justify mx-2">
            Manage everything in one place with our powerful yet simple
            dashboard. View recent orders with full details, track your total
            sales and total orders at a glance, and monitor performance through
            a live chart showing pending and fulfilled orders.
          </p>
        </div>
      </section>

      <section className="flex justify-center items-center mt-10">
        <Faq />
      </section>
    </>
  );
}

export default Landing;
