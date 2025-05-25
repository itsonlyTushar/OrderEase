import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import logo from '../../assets/imgs/logo.png'

function SimpleDrawer() {
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
    <div>
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
        <img className="w-[150px]" src={logo} alt="order-ease" />
        <p className="italic">superadmin panel</p>

        <nav className="flex flex-col gap-3 text-lg pt-10">
          <Link to="/vendor-new">
            <button
              className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[0.9rem]  w-full ${
                location.pathname === "/vendor-new"
                  ? "bg-[#ffff] font-bold shadow-lg"
                  : ""
              }`}
            >
           
              Vendor
            </button>
          </Link>

                    <Link to="/notifications">
            <button
              className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[1rem] w-full ${
                location.pathname === "/notifications"
                  ? "bg-[#ffff] font-bold shadow-lg"
                  : ""
              }`}
            >
              
              Notifications
            </button>
          </Link>
          <Link to="/core">
            <button
              className={`text-left hover:bg-[#ffff] p-3 flex items-center gap-2 rounded-[1rem] w-full ${
                location.pathname === "/core"
                  ? "bg-[#ffff] font-bold shadow-lg"
                  : ""
              }`}
            >

              Auth
            </button>
          </Link>
        </nav>
      </aside>
    </div>
  );
}

export default SimpleDrawer;
