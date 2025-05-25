import { useState } from "react";
import { IoTabletLandscapeOutline, IoQrCodeOutline } from "react-icons/io5";
import { QRCodeCanvas } from "qrcode.react";
import { useSelector } from "react-redux";
import { Bounce, toast } from "react-toastify";

function Tables() {
  const [table, setTable] = useState("");
  const [showQR, setShowQR] = useState(false);
  const vendorId = useSelector((state) => state.auth.user);
  const baseURL = "http://localhost:5173/user";
  const fullURL = `${baseURL}/${vendorId.uid}?table=${table}`;

  const handleTablePrint = (e) => {
    e.preventDefault();

    if (!table || table <= 0) {
      toast.error("Enter a valid number", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
      setShowQR(false);
      return;
    }

    setShowQR(true);
    setTimeout(() => {
      window.print();
    }, 500);
  };

  return (
    <section className="bg-whiteBg rounded-[3rem] p-5 w-full">
      <div className="flex gap-3 items-center text-3xl sm:text-4xl m-3 py-3">
        <IoTabletLandscapeOutline />
        <h1>Tables</h1>
      </div>

      {/* Form Section */}
      <div className="p-3 text-lg sm:text-xl mt-4">
        <form
          onSubmit={handleTablePrint}
          className="flex flex-col sm:flex-row sm:items-end gap-4"
        >
          <div className="gap-4">
            <input
              required
              type="number"
              placeholder="Enter Table No"
              className="sm:w-full max-w-xl p-3 rounded-xl bg-mainBg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 disabled:opacity-50"
              onChange={(e) => setTable(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blackBg flex gap-2 items-center text-[#ffff] py-1 rounded-lg text-lg mt-4 px-2"
            >
              <IoQrCodeOutline />
              Print QR
            </button>
          </div>
        </form>
      </div>

      {/* QR Code Display */}
      {showQR && (
        <div className="qr-print-area mt-10 p-6 border rounded-xl bg-white shadow-lg text-center print:shadow-none print:border-none print:p-0 print:mt-0 print:max-w-full print:flex print:flex-col print:items-center">
          <h2 className="text-xl font-semibold mb-4 print:text-2xl print:font-bold py-10">
            Table {table}
          </h2>
          <div className="flex flex-col items-center gap-4">
            <QRCodeCanvas value={fullURL} size={250} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Tables;
