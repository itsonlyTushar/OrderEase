function OrderSummarry({ recentOrders }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
      {recentOrders
        .slice(0, 6)
        .filter((order) => order.orderStatus !== "Fullfilled")
        .map((order) => (
          <div
            key={order.orderId}
            className="bg-mainBg w-full rounded-lg shadow p-4"
          >
            <h2 className="text-blackBg font-bold mb-2">
              Order For Table: {order.tableNo}
            </h2>

            <div className="overflow-x-auto">
              <table className="min-w-full text-sm border-collapse">
                <thead className="bg-blackBg text-white">
                  <tr>
                    <th className="px-3 py-2 text-left">Qty</th>
                    <th className="px-3 py-2 text-left">Item Name</th>
                    <th className="px-3 py-2 text-left">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="px-3 py-2 text-center italic">
                        x{item.quantity}
                      </td>
                      <td className="px-3 py-2 text-center">{item.name}</td>
                      <td className="px-3 py-2 text-center">
                        ₹{item.price * item.quantity}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-green-50 font-semibold text-center">
                    <td
                      colSpan={2}
                      className="px-3 py-2 border-t text-right italic"
                    >
                      Grand Total
                    </td>
                    <td className="px-3 py-2 border-t font-bold text-blackBg">
                      ₹
                      {order.items.reduce(
                        (total, item) => total + item.price * item.quantity,
                        0
                      )}
                      /-
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
    </div>
  );
}

export default OrderSummarry;
