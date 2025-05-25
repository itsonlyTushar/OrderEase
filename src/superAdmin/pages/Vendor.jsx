import Input from "../../vendor/components/UI/Input";
import SimpleDrawer from "../components/SimpleDrawer";
import { IoPeopleSharp } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { FaGlobeAmericas, FaCity } from "react-icons/fa";
import Button from "../../vendor/components/UI/Button";
import Table from "../components/Tables/Table";
import { useState } from "react";
import { addNewVendor } from "../helpers/handleNewVendor";
import { Slide, toast, ToastContainer, Zoom } from "react-toastify";
import { MdOutlinePhone } from "react-icons/md";
import { SiAdguard } from "react-icons/si";
import { FaBurger } from "react-icons/fa6";

function Vendor() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [subsribeDate, setSubsribeDate] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [contact, setContact] = useState("");
  const [owner, setOwner] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [planOptions] = useState(['Trial', 'Business']);
  const [selectedPlan, setSelectedPlan] = useState('Trial');


  const handleNewVendor = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await addNewVendor(
        email,
        name,
        password,
        subsribeDate,
        country,
        city,
        description,
        contact,
        owner,
        selectedPlan
      );

      toast.success("Vendor Created", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
      });

      setCity("");
      setCountry("");
      setDescription("");
      setEmail("");
      setName("");
      setSubsribeDate("");
      setPassword("");
      setContact("");
      setOwner("");
    } catch (err) {
      console.log("Error creating new vendor", err.message);
      toast.error(err.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <SimpleDrawer />

      <div className="flex-1 p-4 sm:p-6">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-6xl font-semibold text-blackBg mb-6">
          Vendor Onboarding Form
        </h1>

        {/* Vendor Form Section */}
        <section className="p-4 sm:p-8 rounded-[3rem] bg-white">
          <form onSubmit={handleNewVendor}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Form Row */}
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <FaBurger className="text-2xl" />
                  Vendor Name
                </label>
                <Input value={name} onChange={(e) => setName(e.target.value)} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <IoPeopleSharp className="text-2xl" />
                  Owner Name
                </label>
                <Input
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <MdOutlineMarkEmailRead className="text-2xl" />
                  Vendor Email
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <TbLockPassword className="text-2xl" />
                  Set Password
                </label>
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <CiCalendarDate className="text-2xl" />
                  Subscription Date
                </label>
                <Input
                  value={subsribeDate}
                  onChange={(e) => setSubsribeDate(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <MdOutlinePhone className="text-2xl" />
                  Contact No
                </label>
                <Input
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <FaGlobeAmericas className="text-2xl" />
                  Country
                </label>
                <Input
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <FaCity className="text-2xl" />
                  City
                </label>
                <Input value={city} onChange={(e) => setCity(e.target.value)} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-blackBg">
                  <SiAdguard className="text-2xl" />
                  Subscription Plan
                </label>

                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  className="sm:w-full max-w-xl p-3 rounded-xl bg-mainBg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 disabled:opacity-50"
                  name="plan"
                  id="plan"
                >
                  {planOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2 col-span-full">
                <label className="text-blackBg">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="bg-mainBg p-2 py-3 rounded-xl m-2 shadow-md"
                />
              </div>

              <div>
                <Button BtnText={loading ? "Saving..." : "Save Changes"} />
              </div>
            </div>
          </form>
        </section>
        <Table />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
    </section>
  );
}

export default Vendor;
