import MyDialog from "../../components/UI/Dialog";
import { useEffect, useState } from "react";
import OrderList from "../../components/Orders/OrderList";
import {
  fetchOrders,
  formatISODate,
} from "../../../utils/latestOrder";
import { useSelector } from "react-redux";
import OrderStatus from "../../components/Orders/OrderStatus";
import DatePicker from "../../components/Orders/DatePicker";
import Loader from '../../components/UI/Loader'
import NotFound from "../../components/UI/NotFound";
import VendorNotification from "../../components/Notifications/VendorNotification";


export const formatToDDMMYYYY = (dateString) => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
 
function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const vendor = useSelector((state) => state.auth.user);
  const [date, setDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");




  const getOrders = async () => {
    setLoading(true);
    const result = await fetchOrders(vendor.uid);
    if (result.success) {
      setOrders(result.orders);
    } else {
      console.error("Error fetching the orders");
    }
    setLoading(false);
  };

  useEffect(() => {
      getOrders();
    
  }, []);

  const handleRefresh = (e) => {
    e.preventDefault()
    getOrders()
  }

  return (
    <div className="min-h-screen flex text-gray-800 mt-12">
      <main className="flex-1 p-4 sm:p-6 overflow-auto w-full">
        {/* Header */}
        <header className="flex justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-4xl sm:text-6xl font-semibold">Orders</h2>
          <VendorNotification />
      
        </header>

        <div className="bg-whiteBg min-h-[70vh] rounded-3xl shadow-lg">
          <DatePicker date={date} setDate={setDate} />

          <section className="px-4 sm:flex sm:justify-between p-4">
            {orders.length > 0 && <OrderStatus onChange={setStatusFilter} />}

            <button 
                    className="border mt-5 px-2 py-3 rounded-md sm:rounded-md bg-green-100 text-blackBg font-bold scale-200 transition-all hover:bg-red-100" 
                    onClick={handleRefresh}>
              Refresh Orders
            </button>
          </section>



          {/* Orders table */}
          <section className="p-4 sm:p-5 w-full overflow-auto">
            <div className="min-w-[700px]">
              {loading ? (
                <Loader />
              ) :  orders.length > 0 ?
              (
                <table className="w-full text-sm text-left border border-gray-200 shadow-md rounded-lg overflow-hidden">
                  <thead className="bg-blackBg text-whiteBg text-gray-700">
                    <tr>
                      <th className="px-4 py-2 border-b">Order Id</th>
                      <th className="px-4 py-2 border-b">Date</th>
                      <th className="px-4 py-2 border-b">Table</th>
                      <th className="px-4 py-2 border-b">Total</th>
                      <th className="px-4 py-2 border-b">Items</th>
                      <th className="px-4 py-2 border-b">Fulfilment</th>
                      <th className="px-4 py-2 border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white/50 font-semibold">
                    {orders
                      .filter((order) => {
                        const matchesDate = date
                          ? formatISODate(order.orderedAt) ===
                            formatToDDMMYYYY(date)
                          : true;

                        const matchesStatus =
                          statusFilter === "All"
                            ? true
                            : order.orderStatus === statusFilter;
                        return matchesDate && matchesStatus;
                      })
                      .map((order) => (
                        <tr key={order.orderId}>
                          <td className="px-4 py-2 border-b">
                            {order.orderId.slice(0, 8)}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {formatISODate(order.orderedAt)}
                          </td>
                          <td className="px-4 py-2 border-b">
                            Table {order.tableNo}
                          </td>
                          <td className="px-4 py-2 border-b">
                            ₹ {order.grandTotal}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {order.items.length}
                          </td>
                          <td className="px-4 py-2 border-b  font-bold">
                            <span
                              className={`p-2 border py-1 rounded-lg ${
                                order.orderStatus === "Pending"
                                  ? "bg-red-100 border-red-300 text-red-400"
                                  : "bg-green-100 border-green-200 text-green-600"
                              } text-center `}
                            >
                              {order.orderStatus}
                            </span>
                          </td>
                          <td className="px-4 py-2 border-b">
                            <div className="flex space-x-2">
                              <MyDialog
                                dialogTitle="View"
                                dialogContent={
                                  <OrderList
                                    order={{
                                      ...order,
                                      vendorId: vendor.uid,
                                      onStatusSave: (cb) =>
                                        (order.saveStatus = cb),
                                    }}
                                  />
                                }
                                dialogFunction={async () => {
                                  if (order.saveStatus) {
                                    await order.saveStatus();
                                    await getOrders();
                                  }
                                }}
                                isOpen={selectedOrder === order.orderId}
                                setIsOpen={(open) =>
                                  setSelectedOrder(open ? order.orderId : null)
                                }
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              ) : <NotFound text={"Orders Not Found"} />}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Orders;
