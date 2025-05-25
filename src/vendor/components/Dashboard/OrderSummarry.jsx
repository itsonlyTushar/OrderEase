function OrderSummarry({ recentOrders }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 place-items-center">
      {recentOrders
        .slice(0, 6)
        .filter((order) => order.orderStatus !== "Fullfilled")
        .map((order) => (
          <div
            key={order.orderId}
            className="bg-mainBg w-full sm:w-[350px] rounded-lg shadow"
          >
            <h2 className="text-blackBg font-bold px-4 py-2">
              Order For Table: {order.tableNo}
            </h2>
            <table className="w-full rounded-3xl">
              <thead className="border-b bg-blackBg text-white font-semibold">
                <tr>
                  <th>Qty</th>
                  <th>Item Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id} className="border-b text-sm">
                    <td className="italic text-center">x{item.quantity}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">₹{item.price * item.quantity}</td>
                  </tr>
                ))}

                <tr className="text-center bg-green-50 font-semibold">
                  <td
                    colSpan={2}
                    className="px-4 py-2 border-b border-r italic text-right"
                  >
                    Grand Total
                  </td>
                  <td className="px-4 py-2 border-b border-r font-bold text-blackBg">
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
        ))}
    </div>
  );
}


export default OrderSummarry;
