import { SiFusionauth } from "react-icons/si";
import { CiLogout } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbLoader3 } from "react-icons/tb";
import { ToastContainer, toast, Slide } from "react-toastify";
import Input from "../UI/Input";

function Authentication() {
  const authentication = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogOut = () => {
    toast("Logged out successfully", {
      position: "bottom-right",
      autoClose: 1000,
      theme: "dark",
      transition: Slide,
    });

    setIsLoading(true);

    setTimeout(() => {
      dispatch(logout());
      navigate("/");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <section className="bg-whiteBg w-full rounded-[3rem] p-5">
      {/* Header */}
      <div className="flex gap-3 items-center text-3xl sm:text-4xl m-3 py-3">
        <SiFusionauth />
        <h1>Authentication</h1>
      </div>

      <div className="p-3 text-lg sm:text-xl mt-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full">
            <div className="sm:flex items-center gap-4 w-full sm:w-auto">
              <input
                className="sm:w-full max-w-2xl p-3 rounded-xl bg-mainBg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 disabled:opacity-50"
                value={user.uid} 
                disabled={true} 
                />
              <button
                onClick={handleLogOut}
                className="flex items-center mt-2 justify-center gap-2 bg-gray-100 hover:bg-mainBg px-4 py-3 rounded-2xl transition"
              >
                {isLoading ? (
                  <TbLoader3 className="animate-spin" />
                ) : (
                  <CiLogout />
                )}
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition="slide"
      />
    </section>
  );
}

export default Authentication;
