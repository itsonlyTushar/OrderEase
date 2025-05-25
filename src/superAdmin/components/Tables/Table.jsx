import { useEffect, useState } from "react";
import { fetchVendors } from "../../helpers/handleNewVendor";

function Table() {
  const [vendorsData, setVendorsData] = useState([]);

  const getAllVendors = async () => {
    const data = await fetchVendors();
    setVendorsData(data);
  };

  useEffect(() => {
    getAllVendors();
  }, []);

  return (
    <section className="p-5 w-full pt-10 mt-10 rounded-[3rem] bg-[#ffff]">
      <h1 className="text-3xl sm:text-5xl font-semibold text-blackBg mb-6">
        Total Vendors
      </h1>
      <table className="table-fixed w-full text-md text-left border border-gray-200 shadow-md rounded-2xl overflow-hidden">
        <thead className="bg-blackBg text-[#ffff]">
          <tr>
            <th className="px-4 py-2 border-b">Vendor id </th>
            <th className="px-4 py-2 border-b">Vendor Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Onboard date</th>

          </tr>
        </thead>
        <tbody className="bg-white/50 font-semibold">
          {vendorsData.map((vendor) => (
            <tr className="w-full">
              <td className="px-4 py-2 border-b text-wrap font-bold w-10 overflow-hidden">
                #{vendor.docId}
              </td>
              <td className="px-4 py-2 border-b">{vendor.vendorName}</td>
              <td className="px-4 py-2 border-b">{vendor.vendorEmail}</td>
              <td className="px-4 py-2 border-b text-green-600 font-medium">
                {vendor.subscribeDate}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
