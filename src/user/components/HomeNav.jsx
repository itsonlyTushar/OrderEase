import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/imgs/landingLogo.png";
import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { CiLogin } from "react-icons/ci";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-2 ">
        <ul className="flex">
          <li className={`${location.pathname === '/' && 'underline' }`}>
            <Link to={'/'}>
            <img className="sm:w-[150px] w-[100px] p-2" src={logo} alt="logo" />
            </Link>
          </li>
        </ul>
        <div className="hidden sm:flex items-center justify-between p-2 text-blackBg">
          <ul className="flex justify-center">
            <div className="flex items-center gap-10 text-lg font-extrabold text-blackBg">
              <li className={`${location.pathname === '/' && 'underline' }`} >
                <Link  to={"/"}>Home</Link>
              </li>
              <li className={`${location.pathname === '/about' && 'underline' }`}>
                <Link to={"about"}>About Us </Link>
              </li>
              <li className={`${location.pathname === '/pricing' && 'underline' }`}>
                <Link to={"pricing"}>Pricing</Link>
              </li>
              <li  className={`${location.pathname === '/login' && 'underline'} border flex items-center gap-2 cursor-pointer transition-all hover:bg-[#5be1a5] rounded-lg text-center bg-[#d6f7e7] py-1 px-2 text-xl font-semibold `}>
                <Link to={"login"}>Sign In</Link>
                <CiLogin className="font-bold text-lg" />
              </li>
            </div>
          </ul>
        </div>

        {isOpen && (
          <ul className="fixed top-14 right-1 transition">
            <div className="gap-10 text-lg font-extrabold text-blackBg">
              <li className="">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"about"}>About Us </Link>
              </li>
              <li>
                <Link to={"pricing"}>Pricing</Link>
              </li>
              <li>
                <Link to={"login"}>Login</Link>
              </li>
            </div>
          </ul>
        )}

        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <RxCross2 className="text-xl" />
          ) : (
            <CiMenuBurger className="text-xl" />
          )}
        </button>
      </div>
    </nav>
  );
}

export default HomeNav;
