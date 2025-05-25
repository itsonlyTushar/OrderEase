import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { IoFastFoodOutline } from "react-icons/io5";
import { GoChecklist } from "react-icons/go";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import logo from '../../../assets/imgs/logo.png'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const location = useLocation();


  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobile && (
        <button
          className="p-2 text-2xl  z-50 shadow-md fixed top-4 left-4 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross1 /> : <CiMenuBurger />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`w-64 bg-[#f1f1f1] text-[#878787] p-6 h-full min-h-screen transition-transform duration-300 transform ${
          isMobile ? (isOpen ? "translate-x-0" : "-translate-x-full") : "block"
        } fixed md:static z-40`}
      >
        <img className="h-[175px]" src={logo} alt="logo" />
        <nav className="flex flex-col gap-3 text-lg">
          <Link to="/dashboard">
            <button className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[0.9rem]  w-full ${location.pathname === "/dashboard" ? "bg-[#ffff] font-bold shadow-lg" : ""}`}>
              <MdOutlineDashboardCustomize />
              Dashboard
            </button>
          </Link>
          <Link to="/orders">
            <button className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[0.9rem]  w-full ${location.pathname === "/orders" ? "bg-[#ffff] font-bold shadow-lg" : ""}`}>
              <GoChecklist />
              Orders
            </button>
          </Link>
          <Link to="/menu">
            <button className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[1rem] w-full ${location.pathname === "/menu" ? "bg-[#ffff] font-bold shadow-lg" : ""}`}>
              <IoFastFoodOutline />
              Menu
            </button>
          </Link>
          <Link to="/settings">
            <button className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[1rem] w-full ${location.pathname === "/settings" ? "bg-[#ffff] font-bold shadow-lg" : ""}`}>
            <CiSettings className="text-2xl font-extrabold" />
              Settings
            </button>
          </Link>


        </nav>
      </aside>
    </>
  );
}

export default Navbar;
