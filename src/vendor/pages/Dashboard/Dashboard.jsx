import { useSelector } from "react-redux";
import VendorNotification from "../../components/Notifications/VendorNotification";
import { useEffect, useState } from "react";
import { fetchVendorsDetails } from "../../../utils/fetchVendor";
import { FiLoader } from "react-icons/fi";
import { fetchOrders } from "../../../utils/latestOrder";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { MdRestaurantMenu } from "react-icons/md";
import { TbLoader3 } from "react-icons/tb";
import { FaIndianRupeeSign } from "react-icons/fa6";
import OrderSummarry from "../../components/Dashboard/OrderSummarry";
import OrdersChart from "../../components/Dashboard/OrdersChart";
import { RiRefreshFill } from "react-icons/ri";


export default function Dashboard() {
  const [vendorInfo, setVendorInfo] = useState(null);
  const [vendorLoading, setVendorLoading] = useState(false);
  const [orderTotal, setOrderTotal] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);
  const [revenue, setRevenue] = useState(0);

  const user = useSelector((state) => state.auth.user);

  const fetchVendorInfo = async () => {
    try {
      setVendorLoading(true);
      const data = await fetchVendorsDetails(user.uid);
      setVendorInfo(data);
    } catch (err) {
      console.error("Error fetching vendor info:", err.message);
    } finally {
      setVendorLoading(false);
    }
  };

  const fetchOrdersData = async () => {
    try {
      setVendorLoading(true);
      const orders = await fetchOrders(user.uid);
      setOrderTotal(orders.orders.length);
      setRecentOrders(orders.orders);
      setRevenue(
        orders.orders.reduce((acc, order) => acc + order.grandTotal, 0)
      );
    } catch (err) {
      toast.error(`Error fetching orders: ${err.message}`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
      });
    } finally {
      setVendorLoading(false);
    }
  };

  useEffect(() => {
    fetchOrdersData(); // initial fetch

    const interval = setInterval(() => {
      fetchOrdersData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = (e) => {
    e.preventDefault();

    fetchOrdersData();
  };

  return (
    <div className="min-h-screen flex text-gray-800 font-sans mt-10">
      <div className="flex-1 p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          {vendorLoading ? (
            <h1 className="flex text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-blackBg items-center gap-5">
              Welcome!
              <FiLoader
                className="animate-spin text-2xl"
                aria-label="Loading"
              />
            </h1>
          ) : (
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-blackBg">
              Welcome! {vendorInfo?.vendorName}
            </h1>
          )}
          <VendorNotification />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:col-span-2">
            <section className="bg-whiteBg text-center rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm w-full">
              <div className="flex justify-start items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                <span className="border rounded-full p-2 bg-mainBg">
                  <MdRestaurantMenu />
                </span>
                <h2 className="sm:text-3xl text-4xl">Total Orders</h2>
              </div>
              {vendorLoading ? (
                <span className="text-2xl flex justify-center py-5 mx-auto text-blackBg font-semibold">
                  <TbLoader3 className="animate-spin" />
                </span>
              ) : (
                <span className="text-7xl text-blackBg font-extrabold">
                  {orderTotal}
                </span>
              )}
            </section>

            <section className="bg-whiteBg text-center rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-sm w-full">
              <div className="flex justify-start items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
                <span className="border rounded-full p-2 bg-mainBg">
                  <FaIndianRupeeSign />
                </span>
                <h2 className="sm:text-3xl text-4xl">Total Sales</h2>
              </div>
              {vendorLoading ? (
                <span className="text-2xl flex justify-center py-5 mx-auto text-blackBg font-semibold">
                  <TbLoader3 className="animate-spin" />
                </span>
              ) : (
                <span className="text-7xl text-blackBg font-extrabold">
                  {revenue}
                </span>
              )}
            </section>
          </div>

          <div className="bg-blackBg rounded-[2rem] shadow-sm p-4 sm:p-6 min-h-[250px]">
            <h2 className="text-xl sm:text-2xl text-white font-semibold mb-4">
              Orders Chart
            </h2>
            <div className="h-48 rounded-xl flex items-center justify-center text-gray-400 text-sm sm:text-base text-center">
              <OrdersChart recentOrders={recentOrders} />
            </div>
          </div>
        </div>

        <section className="mt-6 bg-whiteBg text-center rounded-[2rem] p-6 sm:p-8 shadow-sm">
          <div className="flex justify-between items-center gap-2 text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            <h2 className="text-4xl">Recent Orders</h2>

            <button
              onClick={handleRefresh}
              className="border px-2 py-1 rounded-xl text-2xl"
            >
              <RiRefreshFill className={`${vendorLoading && 'animate-spin'}`} />
            </button>
          </div>

          {/* Order summarry to show last 6 orders  */}
          {vendorLoading ? (
            <span className="text-2xl flex justify-center py-14 mx-auto text-blackBg font-semibold">
              <TbLoader3 className="animate-spin text-8xl" />
            </span>
          ) : (
            <OrderSummarry recentOrders={recentOrders} />
          )}
        </section>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
