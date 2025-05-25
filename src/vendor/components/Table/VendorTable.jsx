import { GiChiliPepper } from "react-icons/gi";
import { GrFormEdit } from "react-icons/gr";

function VendorTable({ mapFunction, deleteFunc, editFunc }) {
  return (
    <section className="p-2 w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full text-md text-left border border-gray-200 rounded-xl overflow-hidden p-5">
          <thead className="bg-blackBg text-[#ffff]">
            <tr>
              <th className="px-4 py-2 border-b">Menu Id</th>
              <th className="px-4 py-2 border-b">Category</th>
              <th className="px-4 py-2 border-b">Item Name</th>
              <th className="px-4 py-2 border-b">Jain or Not</th>
              <th className="px-4 py-2 border-b">Price</th>
              <th className="px-4 py-2 border-b">Stock</th>
              <th className="px-4 py-2 border-b">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white/50 font-semibold">
            {mapFunction.map((item) => (
              <tr key={item.id || item.menuId}>
                <td className="px-4 py-2 border-b">{item.menuId}</td>
                <td className="px-4 py-2 border-b">{item.category}</td>
                <td className="px-4 py-2 border-b">
                  <div className="flex">
                    {item.isSpicy ? <GiChiliPepper className="text-lg" /> : ""}
                    {item.name}
                  </div>
                </td>
                <td className="px-4 py-2 border-b">
                  {item.isJain ? "Jain" : "Non Jain"}
                </td>
                <td className="px-4 py-2 border-b text-green-600 font-medium">
                  {item.price}
                </td>
                <td className="px-4 py-2 border-b text-green-600 font-medium">
                  {item.isAvailable ? "In Stock" : "Out of Stock"}
                </td>
                <td className="px-4 py-2 border-b">
                  <div className="flex items-center text-blackBg space-x-2">
                    <button
                      className="flex items-center gap-2"
                      onClick={() => editFunc(item)}
                    >
                      <GrFormEdit className="text-xl cursor-pointer" />
                      Edit
                    </button>
                    <button
                      onClick={() => deleteFunc(item.id)}
                      className="text-red-500 hover:underline bg-red-100 py-1 px-2 hover:border-red-300 rounded-lg"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default VendorTable;
