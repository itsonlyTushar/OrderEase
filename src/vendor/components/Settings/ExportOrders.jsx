import { BsFileEarmarkExcel } from "react-icons/bs";
import Button from "../UI/Button";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchOrders } from "../../../utils/latestOrder";
import { PiExportLight } from "react-icons/pi";

import { exportOrdersCSV } from "../../../utils/exportOrder";

function ExportOrders() {
  const [orders, setOrders] = useState([]);
  const vendor = useSelector((state) => state.auth.user);

  const fetchOrderFile = async () => {

    const result = await fetchOrders(vendor.uid);

    setOrders(result.orders);
    

  }

  useEffect(() => {

    fetchOrderFile()

  }, [vendor])

  return (
    <>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-4 sm:px-6 py-4 sm:py-6">
        <BsFileEarmarkExcel className="text-4xl text-primary" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
          Export Orders in CSV File
        </h1> 
      </div>

      <div className="px-4 sm:px-6 py-4 sm:py-6">
        <h2 className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-700">
          Export complete details of orders in a CSV file
        </h2>
        <Button BtnText={"Export"} Icon={<PiExportLight />} onClick={() => exportOrdersCSV(orders, vendor.uid)} />
      </div>
    </>
  );
}

export default ExportOrders;
