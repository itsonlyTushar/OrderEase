function OrderSum({order}) {
  return (
    <div className="flex justify-center items-center mt-4">
      <table className="min-w-2xl w-full rounded-2xl overflow-hidden">
        <thead className="bg-blackBg text-[#ffff]">
          <tr>
            <th>Qty</th>
            <th>Item Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {order.items.map((item) => (
            <>
              <tr className="text-center bg-[#ffff]">
                <td className="italic px-4 py-2 border-b border-r font-bold">
                  x {item.quantity}
                </td>
                <td className="px-4 py-2 border-b border-r">
                  {item.name}
                </td>
                <td className="px-4 py-2 border-b border-r">{item.price * item.quantity}</td>
              </tr>
            </>
            
          ))}
          <tr className="text-center bg-green-50 font-semibold">
                <td
                  colSpan={2}
                  className="px-4 py-2 border-b border-r italic text-right"
                >
                  Grand Total
                </td>
                <td className="px-4 py-2 border-b border-r font-bold text-blackBg">
                  {order.grandTotal}/-
                </td>
              </tr>
        </tbody>
      </table>
    </div>
  );
}

export default OrderSum;
