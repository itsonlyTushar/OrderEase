import { formatISODate } from "../../../utils/latestOrder";
import OrderSum from "./OrderSum";
import { useState } from "react";
import { updateOrderStatus } from "../../../utils/latestOrder"; 

function OrderList({ order }) {
  const [localStatus, setLocalStatus] = useState(order.orderStatus);

  const handleSave = async () => {
    if (localStatus !== order.orderStatus) {
      await updateOrderStatus(order.vendorId, order.id, localStatus);
    }
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 mb-4">
        <div>
          <label className="text-xl">Order Id</label>
          <input
            disabled
            value={order.id}
            className="bg-mainBg p-2 rounded-lg outline-none w-full"
          />
        </div>

        <div>
          <label className="text-xl">Table No.</label>
          <input
            disabled
            value={order.tableNo}
            className="bg-mainBg p-2 rounded-lg outline-none w-full"
          />
        </div>
      </div>

      <div className="bg-mainBg p-3 rounded-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl">Items</h2>
          <span className="text-sm bg-red-100 px-2 py-1 rounded">
            Date: {formatISODate(order.orderedAt)}
          </span>
        </div>
        <OrderSum order={order} />
      </div>

      <div className="mt-3">
        <label className="text-xl">Order Status</label>
        <select
          value={localStatus}
          onChange={(e) => setLocalStatus(e.target.value)}
          className="bg-mainBg p-2 rounded-lg outline-none w-full"
        >
          <option value="">Select</option>
          <option value="Pending">Pending</option>
          <option value="Fullfilled">Fullfilled</option>
        </select>
      </div>

      {typeof order.onStatusSave === "function" && order.onStatusSave(handleSave)}
    </>
  );
}

export default OrderList;
