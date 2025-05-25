import { RiProfileLine } from "react-icons/ri";
import { MdEmail, MdPhone } from "react-icons/md";
import { useSelector } from "react-redux";
import { TiBusinessCard } from "react-icons/ti";
import { BsPersonFillCheck } from "react-icons/bs";
import { useEffect, useState } from "react";
import { PiCityBold } from "react-icons/pi";
import { GiIndiaGate } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";
import { fetchVendorsDetails } from "../../../utils/fetchVendor";
import Loader from "../UI/Loader";

function Personal() {
  const user = useSelector((state) => state.auth.user);
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getVendorDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchVendorsDetails(user.uid);
        setVendorData(data);
      } catch (err) {
        console.error("Error fetching vendor data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    getVendorDetails();
  }, [user.uid]);

  const personalDetails = [
    { label: "Vendor Name", icon: <TiBusinessCard />, value: vendorData?.vendorName },
    { label: "Owner Name", icon: <BsPersonFillCheck />, value: vendorData?.owner },
    { label: "Email", icon: <MdEmail />, value: user?.email },
    { label: "Phone", icon: <MdPhone />, value: vendorData?.contact },
    { label: "City", icon: <PiCityBold />, value: vendorData?.city },
    { label: "Country", icon: <GiIndiaGate />, value: vendorData?.country },
    { label: "Vendor Since", icon: <MdDateRange />, value: vendorData?.subscribeDate },
  ];

  return (
    <section className="bg-whiteBg rounded-[2rem] mt-8 p-8">
      <div className="flex gap-3 items-center text-2xl sm:text-3xl mb-4">
        <RiProfileLine />
        <h2>Personal Info</h2>
      </div>

      <div className="space-y-6 text-base sm:text-lg mt-10">
        {loading ? (
          <Loader />
        ) : (
          personalDetails.map(({ label, icon, value }, index) => (
            <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <div className="flex gap-3 items-center mb-4">
                {icon}
                <span className="w-40 font-medium">{label}:</span>
              </div>
              <h4 className="bg-gray-200/60 p-2 px-6 rounded-xl">{value || "—"}</h4>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Personal;